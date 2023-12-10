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
- 了解本文主要解决的两个问题：过平滑与异配图表现欠佳
- 介绍交互粒子动力学下(即省略GNNs模型中的非线性层和参数矩阵的作用仅考虑粒子交互过程)下的模型GRAND(在[Chamberlain et al. (2021)][https://arxiv.org/abs/2106.10934]提出)。
- 了解狄利克雷能量，及狄利克雷能量与过平滑、粒子交互系统的关系。
### Message Passing
### Heterophily problems
对于GNNs在异配图上表现差的分析可以见文章[Revisiting Heterophily For Graph Neural Networks](https://arxiv.org/abs/2210.07606)。
### 
## Motivation
主要有两个考虑，一是添加斥力，二是防止因斥力导致特征发散到无穷的情况发生。
## Experiments

## Theory
理论依据，能量角度。