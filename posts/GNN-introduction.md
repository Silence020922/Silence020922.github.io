---
date: 2023-11-29
title: Basic graph convolution operator
tags:
- GNN
- GSP
description: 1-st，参考《深入浅出图神经网络》。
---
# GCN卷积算子一种理解方式
图卷积算子可以从多方面解释，例如图信号，图滤波器，从卷积神经网络推广到图领域等。这里仅仅记录一种用以理解的方式。
## 图信号与图拉普拉斯矩阵
- 图的拉普拉斯矩阵：$L$定义为$L = D -A$，其中$A$为图邻接矩阵(adjacency matrix)，$D_{ii} = \sum_j A_{ij}$。拉普拉斯矩阵具有一种正则化形式，记$L_{norm} = I - D^{-\frac{1}{2}}AD^{-\frac{1}{2}}$。
- 图信号：给定图$G = (V,E)$，图信号是一种描述$V \rightarrow R$ 的映射，表示成向量的形式$x = [x_1,x_2...x_n]$，其中$x_i$表示节点$v_i$上的信号强度。
- 拉普拉斯算子：是$n$维欧式空间中的一个二阶微分算子$\Delta f=\frac{\partial^2 f}{\partial y^2}$。
### 从拉普拉斯算子到拉普拉斯矩阵
将拉普拉斯算子退化到二维图像空间可以得到
$$
\Delta f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} = [f(x+1,y) + f(x,y-1) + f(x,y+1) + f(x-1,y)]-4f(x,y) 
$$
在使用该形式拉普拉斯算子处理图像上，其描述了中心像素与局部上、下、左、右像素的差异，由于这种性质，经常被用作图像上的边缘检测算子。    
同理，在图信号中，拉普拉斯算子也被用于描述中心节点与邻居节点之间的信号差异
$$
Lx = (D-A)x = [\dots,\sum_{v_j}\in N(v_i) (x_i-x_j)\dots]。
$$
由上式可知，拉普拉斯矩阵反应了图信号的局部平滑度。更进一步，拉普拉斯矩阵二次型将各条边的信号差进行平方加和，刻画了图信号整体的平滑度。
$$
x^T L x = \sum_{e_{ij}\in E} (x_i-x_j)^2
$$
## 图傅里叶变换与图卷积算符
### 从傅里叶变换到图傅里叶变换
傅里叶变换将信号从时域空间转换到频域空间，频域的视角对信号的处理带来了极大的便利。类比傅里叶变换，给出图信号傅里叶变换的定义，即将图信号由空域(spatial domain)转换到频域(frquency domain)。    
在谱理论(spectral methods)中，记$L_{norm}$为正则化拉普拉斯矩阵，使用实对称矩阵的正交分解，$L_{norm} = U\Lambda U^T$。图傅里叶变换(graph Fourier transform)定义为$\mathscr{F}(x)=U^Tx$。由于$U$为正交矩阵，得到逆傅里叶变化$\mathscr{F}^{-1} = Ux$。
### 图卷积算子
图卷积过程考虑$spatial \rightarrow frequency \rightarrow spatial domain$。    
图信号卷积过程定义为$x \ast y=U((U^Tx)\odot(U^Ty))$，继续推到可以得出
$$
\begin{split}
g \ast x &= U((U^Tg)\odot(U^Tx))\\
&= U(diag(U^g)U^Tx)\\
&= Ug_{\theta}U^Tx
\end{split}    
$$
这里，$g_{\theta}$为一个滤波运算，$g_{\theta}$可以被定义为参数自由的$g_{\theta} = diag(\Lambda)$。事实上$Ug_{\theta}U^T$为一个图位移算子。

#
*接下来，将介绍几种在不同$g_{\theta}$设计下的典型谱方法。*

