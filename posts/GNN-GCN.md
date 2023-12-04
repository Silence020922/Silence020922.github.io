---
date: 2023-12-04
title: GCN
tags:
- GNN
- GCN
description: 4-nd,参考SEMI-surperised classification with graph convolutional networks
---
# GCN
## 从ChetNet到GCN
在ChebNet的基础上：
$$
g_{\theta} \ast X = \sum_{k=0}^K \theta_k T_k(\widetilde{L})X\\
\widetilde{L} = \frac{2L}{\lambda_{max}}
$$
令$K$ = 2同时取$\lambda_{max} \approx 2$，得到
$$
g_\theta \ast x \approx \theta_0 x + \theta_1(L-I)x = \theta_0 x+\theta_1 D^{-\frac{1}{2}}AD^{-\frac{1}{2}}x
$$
令$\theta = \theta_0 = -\theta_1$，得到
$$
g_\theta \ast x = \theta(I + D^{-\frac{1}{2}}AD^{-\frac{1}{2}})x
$$
此时数值稳定性差，采用重整化技巧，记$\widetilde{A} = A+I$，$\widetilde{D} = D+I$，同时加入线性变化矩阵$W$增强模型表达能力，得到GCN最终模型
$$
H = \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}XW
$$
## 优势
- 再次降低了参数数量，缓解了具有较宽点度分布的图过拟合问题。
- 允许建立更深层的模型，事实上[Wu et al.,2019](https://proceedings.mlr.press/v97/wu19e.html)证明了叠加$K$层的$GCN$近似于一个固定系数$\Theta$的$K$阶滤波器。
- 有利于最小化每层的操作。
## 仍然存在的问题
- 事实上，GCN通常情况下是shallow的，一般仅叠加2～3层。显然这并不利于模型有效的聚合高阶邻居的特性。这是由于，当GCN层数过高时，会发生过平滑(over smoothing)现象。过平滑指的是随着layer增加，GCN学到的表示将会收敛到一个确切的值，这将使得所有点习得的最终特征无法区分。
- 论文本身给到了一种使用残差连接(residual connection)将$l+1$层的输出$H^{(l+1)}=\widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}$与上一层状态$H^{(l)}$连接起来，遗憾的是可以证明这种方法只能减缓其收敛速度，并不能从根本上解决过平滑的事情。
