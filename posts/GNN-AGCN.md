---
date: 2023-12-05
title: AGCN
tags:
- GNN
- AGCN
description: 5-nd,考虑到在GCN模型中，由于表达与邻接矩阵直接相关，邻居节点的重要性由中心节点一圈一圈向外散布，这限制了卷积核的flexibility。这里考虑通过学习广义马氏距离替代邻接矩阵，实现对拉普拉斯矩阵的参数化设计，增加模型的表达能力。参考Adaptive Graph Convolutional Neural Networks。
---
# AGCN
接下来的几篇文章将会就对GCN从不同方面考虑进行优化进行介绍。首先介绍AGCN即Adaptive Graph Convolutional Neural Networks，该方法通过改变拉普拉斯矩阵优化GCN性能。
## 符号
$\mathscr{G} = (V,E)$， $L = I-D^{-\frac{1}{2}}AD^{-\frac{1}{2}}$，$L = U\Lambda U^T$，Fourier transform:$\mathscr{F} = U^Tx$
## 问题与解决思路
先前研究表明，$g_\theta = \sum_k^{K-1} \theta_k \Lambda^k$，这是$K-$局部化的，并且$\theta^k$控制了距离中心点远近与其重要性之间的联系。    
::: warning
在上式表示中，默认距离是影响重要性衡量指标$\theta^k$的唯一因素，使得重要性一圈一圈散布开来，这限制了卷积核的灵活性。同时，这假定了两个顶点相似性本质由选择的度量和特征域决定的。但数据本身是非欧式空间的，这表明以距离作为一种衡量或许并不是最优选择，连接节点间的相似性恐怕低于未连接节点(例如分子间化学键)。
:::    
**解决**    
参数化$L$，将$L$中包含的图连通性、点度等拓扑信息转化为与特征值$X$，拉普兰拉丝矩阵有关的可学习参数。
$$
g_\theta(\Lambda) = \sum_{k=0}^{K-1} (F(L,X,\Gamma))^k
$$
其中，$X$为特征，$L$为归一化拉普拉斯矩阵，$\Gamma$为可学习参数。我们定义了新的SGG-LL层
$$
y = Ug_\theta(\Lambda)U^TX = U\sum_{k=0}^{K-1} (F(L,X,\Gamma))^kU^T X
$$
在对其进行设计时，由于欧式距离不再作为衡量相似性的最佳标准，我们利用广义马氏距离$D(x_i,x_j) = \sqrt{(x_i-x_j)^TM(x_i-x_j)}$，这里$M = w_dw_d^T$为一个半正定矩阵，其中$w_d$为我们设计的可学习参数向量。使用广义马氏距离下的高斯核$G_{x_ix_j} = \exp \frac{-D(x_i,x_j)}{2\sigma^2}$，其中$\sigma^2$为距离方差。对$G$执行归一化操作，记结果为$\widetilde{A}$。    
由于在实际操作中，没有先验知识使我们能够合理的初始化$M$(由于一般情况下不同的领域需要不同$M_0$)，这会导致收敛时间长等一系列问题。在实践中，假设最优图$\hat{L}$与原始的拉普拉斯矩阵$L$相差不大，通过该假设
$$
\hat{L} = L + L_{res}
$$
我们只需要对$L_res$进行学习即可，这里$L_res = I - \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}$。
为了增加模型的表达能力，在卷积曾添加了线性变换层和偏置，即最终模型下
$$
H^{(l+1)} = Ug_\theta(\Lambda)U^TH^{(l)}XW + b\\
\hat{L} = L+\alpha L_{res}
$$
其中$W,b,M,\alpha为可学习的参数。

::: warning
因为$U$为一个稠密矩阵，对其运算增加算法复杂度。
:::    
**解决**    
利用Chebychev expansion

## 说明
文中设计的SGC-LL层参数为$O(d_{i-1}\times d_i)$与$N$无关，可以接受。
