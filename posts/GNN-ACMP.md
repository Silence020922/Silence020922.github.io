---
date: 2023-12-10
title: ACMP
tags:
- GNN
- ACMP
description: 7-nd，从GNN能量函数优化的角度提出引力和斥力的观念解决过平滑和在异配图上表现较差的问题，参考Acmp:Allen-cahn message passing with attractive and repulsive forces for graph neural networks
---
# ACMP
## Introduction 
- 主要了解GNNs考虑信息传递上的模型表示。事实上很多流行的GNN模型如GCN, GAT, GIN都可以表示为[MP](https://arxiv.org/abs/1806.01261)形式。
- 了解本文主要解决的两个问题：过平滑与异配图表现欠佳（对于GNNs在异配图上表现差的分析可以见文章[Revisiting Heterophily For Graph Neural Networks](https://arxiv.org/abs/2210.07606)）。
- 介绍交互粒子动力学下(即省略GNNs模型中的非线性层和参数矩阵的作用仅考虑粒子交互过程)下的模型GRAND(在[Chamberlain et al. (2021)][https://arxiv.org/abs/2106.10934]提出)。
- 了解狄利克雷能量，及狄利克雷能量与过平滑、粒子交互系统的关系。
## Background
背景
### Message Passing
根据GCN分量形式可以看出，GCN卷积过程$k-layer$的特征与$(k-1)-layer$中的邻居及本身有关。事实上很多目前主流的GNN模型（例如GCN、GAT、GIN）在除去非线性层后都可以表达为如下形式：
$$
x_i^{(k)} = \gamma^{(k)}(x_i^{(k-1)}, F_j\in N_i) \Phi^{(k)}(x_i^{(k-1)},x_j^{k-1},a_{i,j})
$$
其中，$F$要求是一个可微的，排列不变的聚合算子，例如求和、求最大值和均值算子。$\gamma,\Phi$是一个可微函数，例如GAT中使用了MLP。
### Graph neural diffusion 
假设略去激活函数和参数矩阵($W = I_n$)，仅从动力系统的角度考虑。在这样的交互粒子系统中：假定图中的点表示粒子，而连变代表了粒子间具有相互作用。[Chamberlain et al. 2021](https://arxiv.org/abs/2106.10934)给出了一个统一数学框架，其反应动力学特征并能够概括GCN，GAT模型。给出如下的信息扩散过程：
$$
\frac{\partial}{\partial t}x_i(t) = \sum_{j\in N_i} a(x_i,x_j)(x_j-x_i)
$$
注意，这里的$a(x_i,x_j) \neq a_{i,j}$。
### 
## Motivation
主要有两个考虑，一是添加斥力，二是防止因斥力导致特征发散到无穷的情况发生。
### Attractive and repulsive force
在上述扩散模型中，可以看到若$a(x_i,x_j)>0$，$x_i,x_j$相互吸引，模型最终趋于收敛。相反的，$a(x_i,x_j)<0$时，$x_i,x_j$互相排斥，这时$x_i$将远离$x_j$。也就是说，$a(x_i,x_j)$控制了粒子系统中的引力与斥力。然而，在上述的提到的模型中，$a(x_i,x_j)$本质作为一种相似性的衡量，都是正的，这也导致了模型最终收敛，产生过平滑问题。我们知道，在自然界或社会上不是所有的一件最终都趋于共识，这无法对现实进行合理的反应，基于这些前提下，对扩散模型做如下更改：
$$
\Rightarrow \frac{\partial}{\partial t}x_i(t) = \sum_{j \in N_i} (a(x_i,x_j) - \beta_{i,j}) (x_j-x_i)
$$
$$
\Rightarrow \frac{\partial}{\partial t}x_i(t) = \alpha \sum_{j \in N_i} (a(x_i,x_j) - \beta_{i,j}) (x_j-x_i) + \delta x_i(1-x_i^2). 
$$
添加了超参$\beta_{i,j}$，使得$(a(x_i,x_j)-\beta_{i,j})$能够表现引力，斥力及无作用效果。
### Damping term 
这里考虑到由于斥力的存在，可能导致模型特征发散到无穷，或两点间相距无穷远，这不利于下游任务的进行。于是，添加阻力项，使得当$x_i$超过一定的值后受到向相反方向的阻力。
$$
\Rightarrow \frac{\partial}{\partial t}x_i(t) = \sum_{j \in N_i} (a(x_i,x_j) - \beta_{i,j}) (x_j-x_i)
$$
$$
\Rightarrow \frac{\partial}{\partial t}x_i(t) = \alpha \sum_{j \in N_i} (a(x_i,x_j) - \beta_{i,j}) (x_j-x_i) + \delta x_i(1-x_i^2). 
$$
## Gradient Flow
这一部分解释模型的合理性
### Dirchlet Energy 
如何从数学上刻画过平滑及发散现象，这里设计了狄利克雷能量$E(x) = \frac{1}{N} \sum_{i \in V}\sum_{j \in N_i} a_{i,j}||x_i -x_j||^2.$    
其对应Euler-Largrange方程
$$
\frac{\partial x}{\partial t} = -\nabla_x E,\frac{\partial x_i}{\partial t} = -\frac{\partial E}{\partial x_i} = \frac{2}{N} \sum_{j \in N_i} a_{i,j}(x_j-x_i)            
$$
先用无向合成随机图说明 ACMP 的 Dirichlet 能量的演化。文章比较了消息传递传播器的性能：GCN、GAT、GRAND 和 ACMP。图中可视化了每层输出的 Dirichlet 能量。    
可以看到，对于狄利克雷能量，当发生过平滑现象，$x_i = x_j$，此时狄利克雷能量趋于零。而若因斥力使得其相距无穷远，此时$E(x) \rightarrow \infty$。    
同时，根据欧拉拉格朗日方程可以看到，GRAND扩散过程是最小化狄利克雷能量的近端梯度下降过程。
### Particle equation with the double-well potential
相应的，本文提出的模型也对应了一个优化过程。势能项$W$的主要作用是防止粒子系统空间的无限膨胀。因为系统中存在排斥力，相互排斥的粒子如果始终保持排斥状态，随着时间推进，粒子直接会不断远离。从网络层面上说，特征向量的值会随着网络的加深不断增大，最后超出需要的范围。因此，引入一个井状的势能场，也就是说，在系统边缘的区域施加一个强位势，在系统中心施加弱位势，对维持系统的稳定方面可以起到积极的作用。本文采用了双势能井。一方面，两侧的高位势保持了系统的稳定性，另一方面，中间的“W”形低位势在容许交互作用力为主导作用的状态下，对异种粒子的分离起到促进作用。
## Module
这里， $x_i$表示第$i$个结点的特征向量； $a(x_i,x_j)$表示结点之间的边特征，根据需要，可以选择诸如$a^{GCN}$系数，$a^{GAT}$系数或任何表示结点间相似度的系数。$\alpha,\delta$是可学习参数， $\beta$表示超参数，哈达玛积（Hadamard product）表示所有运算是在$channel-wise$意义下执行的.右边的第一项对应相互作用力，第二项对应势能项，$\alpha$和$\delta$ 用来平衡和调节这两项的作用强度。

### Theory
Prop1. 给出了模型下狄利克雷能量和特征有界的证明    
Prop2. 给出了模型最终产生双聚类的证明    
Prop3. 给出了模型狄利克雷能量最终有一个非零的下界，即避免了过平滑
Prop4. 给出加强牵引力条件下，一个特征一旦被一个井底捕获则无法逃逸到另一个井底
Prop5+6. 给出GRAND形式下狄利克雷能量指数递减。
Prop7. 全局状态下稳定解$x_i^{*}$范围在负一到一之间。
Prop8. 若初始时点$i$的最小的特征的值大于零，则整个时间轴上将始终保持大于等于零的状态，反之亦然。
