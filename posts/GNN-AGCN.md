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
::: warning
因为$U$为一个稠密矩阵，对其运算增加算法复杂度。
:::
## 模型主要组件
