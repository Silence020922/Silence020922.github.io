---
date: 2024-05-23
title: Transformer + GNN
tags:
- Transformer
- GNN
description: 参考Can Transfomrer and GNN Help Each Other?
---
## 概要
- Transfomer 
    - 计算复杂度高
    - 无法利用复杂的图结构
- GNN
    - 固定的结构，WL限制
    - 弱的表达能力

针对`GNN`方面，在传统的MP模型中，下面左右两种图结构无法得到区分
![](https://simg.baai.ac.cn/hub-detail/27f44a6fcda73b71ae694fbac2ec6d171698888608607.webp)

# 模型
## 数据预处理
### 注意力采样机制
作用：扩充了感知范围，使得采样不再局限于邻居     
$$
\begin{equation}
S = XX^T
\end{equation}
$$
式(1)为自注意力表达式，左端$S_{ij}$可表示$v_i,v_j$两点见原始语义相似度。此时缺乏图结构信息的，进行如下更改
$$
\begin{equation}
S = S + \alpha \hat{A} S, \quad \hat{A} = A+I 
\end{equation}
$$
式(2)相当于对中心点$v_i$，对他的邻居与其他各点的相似性进行了吸收。基于$S$可设计采样函数
$$
Sem(v_i) = \{v_j | v_j\in V, S(ij) \in top\text{-}k(S(i:))\}
$$
:::tip
复杂度显然是$O(n^2)$的，但由于整个训练过程只处理一次，可以视为数据预处理过，不算入模型复杂度。
:::
### 位置编码
图结构是不存在天然的节点序列的，为此本文考虑位置编码与以下三个方面有关
- 最短hop-path
- degree
- PageRank embedding
:::tip
在这里是有疑问的，很多节点的特征例如介数中心性都能够作为学习位置编码的输入信息，Rethinking Graph Transformers with Spectral Attention一文或许给出的位置编码学习方式更可信
:::
$$
SPE(v_i) = MLP(p(i,j))\\
DE(v_i) = MLP(deg_i)\\
PRE(v_i) = MLP(P_r(v_i))
$$
对于中心点$v_i$和$v_j \in Smp(v_i)$
$$
h_i = COMB(AGG(x_i, SPE(v_i,v_i),DE(v_i),PRE(v_i)))
h_j = COMB(AGG(x_j, SPE(v_i,v_j),DE(v_j),PRE(v_j)))
$$
:::tip
复杂度与最短路算法复杂度有关，在堆数据结构下可进一步优化。
:::
## 模型架构
### Transormer Layer
首先是Transformer层，旨在扩充GNN感知范围使其能够聚合多hop以外的相关节点的信息。    
但直接将其应用到整个图上会
- 无视连通性在整个图上传递信息
- 计算复杂度
本文做了如下改进，以$v_i$为中心点为例
$$
Input:\quad H\in R^{N \times d_{in}}\\
q = h_i W_q\\
k = H_i^{Smp} W_k\\
v = H_i^{Smp} W_v\\
a_t = \frac{qK^T}{\sqrt{d_{out}}}\\
h_i = softmax(a_t)v
$$
:::tip
矩阵运算下具有复杂度$K \times d_{out} \times N$，总体上$O(kN)$。
:::
上式中$q$为$1 \times d_{out}$，$k,v$为$k \times d_{out}$，其中$k$为采样个数，上式可扩展为多头。
### GNN
作用：捕捉邻居信息，更好的利用图结构。     
$$
h_M(v_i) = Message(h_k, \forall v_k \in N(v_i))\\
h_i = Combine(h_i, h_M(v_i))
$$
:::tip
计算复杂度仍然为$O(kN)$，同时既然上文S相似度已被计算出，为何MP过程不利用？
:::
### Samples Update Sub-Module
作用：在Trans 和 GNN layers后， S应该得到更新。但重新计算所需要的时间成本昂贵。    
本文提出了两种解决方案
#### Random Walk based Update
设计转移概率
$$
P_{i \rightarrow j} = 
\begin{cases}
\frac{h_ih_j^T}{\sum_{l\in N(v_i)} h_i h_l^T} \qquad if\;v_j \in N(v_i)\\
0 \qquad \qquad else
\end{cases}
$$
通过控制随机Walk的长度$L$限制复杂度
#### Message Passing based Update
$$
Attn_Msg(v_i) = \cup Smp(v_j),\; \forall v_j \in N(v_i)
$$
对中心点$v_i$的所有邻居的采样进行聚合。
## 理论
- TransGNN 至少与 GNN 持平
    通过控制$Q,K$，可以使得
    $$
    H_{out} = \frac{1}{\sqrt{d_{out}}} H(W_v + I)\\
    H = \sigma(A H_{out}W) = \sigma(A \frac{1}{\sqrt{d_{out}}}H (W_v + I)W)\\
    let\;W_v = diag(\sqrt{d_{out} - 1})\\
    H = \sigma(AHW)
    $$
- TransGNN 比 1-WL 更有表现力
    若感知视野为1,下图中左右图无法区分，至少TransGNN中利用最短路信息不同，故而是可分辨的
![](https://simg.baai.ac.cn/hub-detail/27f44a6fcda73b71ae694fbac2ec6d171698888608607.webp)
