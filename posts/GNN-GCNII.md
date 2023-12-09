---
date: 2023-12-04
title: GCN
tags:
- GNN
- GCNII
description: 6-th,参考SEMI-surperised classification with graph convolutional networks
---
# Graph Convolutional Network via Initial residual and  Identity mapping (GCNII)
上结论
$$
\widetilde{P} = \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}\\
H^{(l+1)} = \sigma(((1-\alpha_l)\widetilde{P}H^{(l)} + \alpha_l H^{(0)}) ((1-\beta_l)I_n + \beta_lW^{(l)}))
$$
## GCN应用
接*5-th*，事实上，GCN自提出(2017)至今已有广泛的应用，例如社会分析[Qiu et al., 2018](https://arxiv.org/abs/1807.05560)，交通预测[Guo et al., 2019](https://dl.acm.org/doi/pdf/10.1609/aaai.v33i01.3301922)，计算机视觉[Zhao et al,. 2019](https://arxiv.org/abs/1904.03345)。但正如前文提到的，GCN面临很多问题，这些问题限制了GCN的表达能力。例如在GCN篇结尾处提到GCN通常情况下是shallow的，一般仅叠加2～3层。显然这并不利于模型有效的聚合高阶邻居的特性。这是由于，当GCN层数过高时，会发生过平滑(over smoothing)现象。过平滑指的是随着layer增加，GCN学到的表示将会收敛到一个确切的值，这将使得所有点习得的最终特征无法区分。GCNII针对过平滑问题进行了改进。
## GCN面临过平滑(over-smoothing)问题
### 解决过平滑问题的一些已有工作
#### GCN    
在CV领域ResNet通过添加一个残余连接(residual connections)解决了类似的问题。在GCN起初的论文中也考虑了添加残余连接解决过平滑问题：    
原始：
$$
\widetilde{P} = \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}\\
H^{(l+1)} = \sigma(\widetilde{P}H^{(l)}W^{(l)})
$$
添加*residual connections*：
$$
H^{(l+1)} = \sigma((\widetilde{P}+I)H^{(l)}W^{(l)})
$$
事实上，添加残余连接减缓了GCN过平滑的问题，但并没有彻底解决。类似的，GCN和GAT等模型依然面临这过平滑问题。
#### 其他工作
在残差连接的思想上，*JKNet*使用稠密的跳跃连接方式，将结果与每一层的输出进行连接，保持结果的局部性。*DropEdge*通过从输入图中随机去掉一些边来减轻过平滑的影响。但事实上，通过实验数据可以看到，尽管增加了GCN的深度，但在实际操作上依然是浅层时具有更好的表现，其本质上还是浅层的。    
另一方面，一些方法使用深层的*propagation operator*和浅层的神经网络去实现聚合高阶邻居的目标。例如*SGC*尝试使用$K$阶图卷积和一层神经层;*PPNP*使用*Personalized Pagerank*替代原本的卷积算子;*GDC*将*APPNP*推广到任意的图扩散过程中。然而，这些方法对每一层中的邻居进行线性表达，丢失了非线性层的表达能力。    
#### 本文工作
事实上，到目前搞深层是一个优势还是一个负担还没有一个有理有据的回答，本文就这件事做出了一个积极的回答，主要工作如下：
- 证明了目前GCN模型存在过平滑问题
- 证明了深层的网络结构较目前浅层GNN具有显著优势
- 提出了GCNII模型，并从理论和实验上证明了该模型能够解决过平滑问题
- GCNII模型在一些半监督和全监督学习中的表现超过一些模型
### Over-smoothing
## 准备工作
在正式介绍GNNII模型前，需要了解一些基础知识，图的符号定义在此不再介绍，使用通常意义下的定义。
### Vanilla GCN
原始的GCN参照[这篇](https://silence020922.github.io/posts/GNN-GCN.html)文章里的模型。
### APPNP
这个模型打算稍微介绍一下，事实上GCNII模型是APPNP的plus版本(可退化到APPNP)。
#### Motivation
GCN模型保留卷积层去除RELU激活层可视为一个随机游走过程，该过程在有限时间内收敛到稳态，稳态仅与结构有关，与初始特征无关，即，deep GCN丢失了初始时刻的特征，发生了过平滑现象。同时可证添加了残余连接后的GCN可视为一个lazy walk过程，在有限时间内同样会收敛到稳态，发生过平滑。PPNP模型将随机游走过程替换为*Personlized PageRank*过程，即有一定概率$\alpha$走到初始点的随机游走过程并反解得到卷积算子，模型在最后一层添加RELU。实验表明，这降低了过平滑的对Deep GCN的影响。
$$
H^{l+1} = \alpha(I_n - (1-\alpha)\widetilde{A})^{-1} f_\theta(X), l = 1\dots K-2\\
H^{l+1} = \sigma(\alpha(I_n - (1-\alpha)\widetilde{A})^{-1} f_\theta(X)), l = K-1\\
$$
#### Modele
- Personalized PageRank
  $$
  \pi_v^{l} = (1-\alpha)AD^{-1} \pi_v^{l-1} + \alpha \pi_v^0
  $$
  这里$P = AD^{-1}$表示均匀分布下的随机游走，事实上，$P$可以代表任何一种随机游走的概率分布。
  $$
  \pi_v^{l} = (1-\alpha)P \pi_v^{l-1} + \alpha \pi_v^0
  $$
  对上述公式稳态求解得到
  $$
  \pi_v = \alpha(I_n - (1-\alpha P)^{-1})\pi_v^0
  $$
  稳态与初始状态有关，这里不直接使用初始值，而是使用两层全连接神经网络计算$f_\theta(X)作为初始输入，$PPNP模型定义为
  $$
  H = \alpha(I_n - (1-\alpha)P)^{-1} f_\theta(X)
  $$
- 对求逆过程的优化    
  由于矩阵逆运算计算复杂度高，使用近似表示
  $$
  H^{l+1} = (1-\alpha)\widetilde{P}H^{l} + \alpha H^{0}, where \quad H^{0} = f_\theta (X)
  $$
  仅最后一层使用非线性激活函数。
## GCNII Model
首先总的介绍该模型，然后从两个关键组件*Initial residual connection* 和 *Identity mapping*分别进行介绍。
### Model
$$
\widetilde{P} = \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}\\
H^{(l+1)} = \sigma(((1-\alpha_l)\widetilde{P}H^{(l)} + \alpha_l H^{(0)}) ((1-\beta_l)I_n + \beta_lW^{(l)}))
$$
其中$\alpha_l,\beta_l$是超参。
### Initial residual connection
::: tip
$(1-\alpha_l)\widetilde{P}H^{l} + \alpha_l H^{0}$部分。
:::    
实践中$\alpha_l$一般取值0.1或者0.2。事实上很显然这部分参考了PPNP中的相关模型，在此不过多介绍。同样的，$H^0$未必是初始特征，当初始特征维度过高时，可以设置MLP层习得低维特征，并作为初始特征使用。    
但同样是这个问题，PPNP中除了最后一层，每一层是没有非线性激活函数的。GCNII中希望在每一层中添加RELU层，增强表达能力。但很不幸，[Oono & Suzuki, 2020](https://arxiv.org/abs/2006.08550)理论上证明了添加RELU层的$K$层GCN节点特征收敛速度会加快。实验上，在添加非线性函数后仅仅是 *Initial residual connection* 不足以解决过平滑问题。只进行一个更改便在每层添加RELU层是不够的！
### Identity mapping
Identity mapping 的引入有多方面考虑。在GCN中，对特征添加了线性变换$XW$增强模型的表达能力。这里，我们添加$(1-\beta_l)I_n + \beta_lW^{(l)}$。下面是这样做的一些考虑：
- 至少不会比APPNP差。由于$\beta_l = 0$时，该模型退化到APPNP，我们说，至少会保证模型与APPNP具有相近的表达能力。
- [Oono & Suzuki, 2020](https://arxiv.org/abs/2006.08550)证明了GCNs收敛速度
- 事实上 *Identity mapping* 可以也看作一个 *residual connection*，$H^{(l+1)} = H^{(l)}(I_n + W^{(l)})$。
### Experiment 
其在Cora、Citeseer、Pubmed数据集使Layers为2、4、8、16、32、64,模型展现了在一些情况下，性能随着层数提升持续上升，且即使在Pubmed数据集中16层达到最高，更深层的模型其准确率维持在较高的平稳状态。同时，在Core, Cite., Pumb., Cham., Corn., Texa., Wisc. 数据集上的全监督实验与GCN, GAT, JKNET, INCEP(Drop), APPNP等模型的比较也证明了GCNII具有显著优势。同时，对比APPNP模型在一些数据集上达到更高的准确度，这也体现了非线性层的重要作用。    
但实验结果也存在一些问题，比如肉眼可见在Cham., Corn., Texa., Wisc.数据集上的表现不如其他三个数据集。事实上，这四个数据集是异配的，或许与这个因素有关。过短时间更一个ACMP(ICLR 2023)模型，该模型解决了GNNs在异配图上表现比同配图差的现象。
## Theory
### 证明了加入剩余连接的GNN作为lazy walk会收敛到与初始特征无关的值，并给出收敛速度
令$h^k =(\frac{I_n + \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}} {2})^K x$代表了经过有残差连接的$K$层图卷积的表示。用$\lambda_{\widetilde{G}}$表示自连接图$\widetilde{G}$的 *spectral gap*， 即归一化拉普拉斯矩阵$\widetilde{L} = \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}$的最小非零特征值。可以证明以下结论
- 随着$K$趋于无穷，$h^K$收敛到$\pi = \frac{<\widetilde{D}^{\frac{1}{2}}1,x>}{2m+n} \cdot \widetilde{D}^{\frac{1}{2}}1$, $1$为全一向量。
- $h^K  \pi \pm (\sum_{i=1}^n x_i)\cdot(1-\frac{\lambda_{\widetilde{G}}^2}{2})^K$，这里符号$\pm$表示$|h^k - \pi| \leq (\sum_{i=1}^n x_i)\cdot(1-\frac{\lambda_{\widetilde{G}}}{2})^K$。
### 根据上一个证明可以推断高度点的收敛速度更快
事实上，$h^K  \pi \pm (\sum_{i=1}^n x_i)\cdot(1-\frac{\lambda_{\widetilde{G}}}{2}^2)^K$可以改写为
$$
h^k_j = \sum_{i=1}^n \frac{\sqrt{(d_j+1)(d_i+1)}}{2m+n}x^i \pm \sum_{i=1}^n (1-\frac{\lambda_{\widetilde{G}}^2}{2})^K x_i
$$
进一步，得到
$$
h^k_j = \sqrt{d_j+1}(\sum_{i=1}^n \frac{\sqrt{d_i+1}}{2m+n} \pm \frac{\sum_{i=1}^n x_i (1-\frac{\lambda_{\widetilde{G}}^2}{2})^K}{\sqrt{d_j +1}})
$$
这个式子告诉我们，具有较大度的节点会收敛的更快。事实上，也在实验中证实了这个猜想。
### GCNII模型能够有效防止过平滑问题出现
回想一下，第一个定理告诉我们GCN模拟了一个$K$阶的多项式滤波器$\widetilde{P}^K x$，其收敛状态值与初始特征$x$无关，导致了过平滑。这里证明了GCNII由于Identity mapping 的存在，可以逼近任意系数的$K$阶多项式滤波器$h^k = (\sum_{l = 0}^K \theta_l \widetilde{L}^l) \cdot x$，于是通过选择合适的$\theta$，可以使结果聚合初始特征和结构信息。