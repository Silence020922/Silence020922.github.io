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
我们知道，傅里叶变换将信号从时域空间转换到频域空间，频域的视角对信号的处理带来了极大的便利。类比傅里叶变换，给出图信号傅里叶变换的定义，即将图信号由空域(spatial domain)转换到频域(frquency domain)。    
在谱理论(spectral methods)中，记$L_{norm}$为正则化拉普拉斯矩阵，使用实对称矩阵的正交分解，$L_{norm} = U\Lambda U^T$。其中，$U = [u_1,u_2\dots u_n]$代表$L$的特征向量。图傅里叶变换(graph Fourier transform)被定义为$\mathscr{F}(x)=U^Tx$。由于$U$为正交矩阵，得到逆傅里叶变化$\mathscr{F}^{-1}(x) = Ux$。    

::: tip
下面给出一种图傅里叶变换的理解方式
:::

- $\mathscr{F}^{-1}\mathscr{F}(x) = UU^Tx = x$，由于$U$为正交矩阵，变换——逆变换定义合理。
- 令$\hat{x} = U^Tx = [\hat{x_1},\hat{x_2}\dots,\hat{x_n}] = [u_1^T,u_2^T\dots u_n^T]^T [x_1,x_2\dots x_n]$。将信号$x$原本的坐标系转换到特征向量组成的正交坐标系下，实现了从空域到频域的转换。    
  
[傅里叶变换与图傅里叶变换图片示例](https://surplus-1311636487.cos.ap-beijing.myqcloud.com/3AAItalk7.png)
### 从图傅里叶变换到滤波器
示例中可以看到，小的特征值对应低频的特征向量，大的特征值对应高频的特征向量，图傅里叶变换将图信号转化为一组波动频率逐渐升高的正交基下的坐标。通过对特征值进行操作，可以对图信号低频、高频等不同频段进行筛选，实现滤波操作。    
滤波定义为
$$
y = h(L)x = Uh(\Lambda)U^Tx = U diag[h(_{\lambda_1},\dots,h_{\lambda_n})]U^T x
$$
$h(\Lambda)$为一个滤波器，可以看到，上述过程$U^T x$将信号转换到频域，使用滤波器对通信频段进行过滤后使用图傅里叶逆变换重新转换到空域，完成滤波操作。特别的，如果取$h(\Lambda) = I_n$，此时，$y = x$为全通滤波器。
### 图卷积算子
图卷积过程考虑$spatial \rightarrow frequency \rightarrow spatial /quad domain$。    
图信号卷积过程定义为$x \ast y=U((U^Tx)\odot(U^Ty))$，其中$\odot$为hadamard积。继续推导可以得出
$$
\begin{split}
g \ast x &= U((U^Tg)\odot(U^Tx))\\
&= U(diag(U^g)U^Tx)\\
&= Ug_{\theta}U^Tx
\end{split}    
$$
这里，$g_{\theta}$为一个滤波运算，$g_{\theta}$可以被定义为参数自由的$g_{\theta} = diag(\Lambda)$。事实上$Ug_{\theta}U^T$为一个图位移算子。    
不同的图卷积意味设计不同的滤波器，但直接对滤波$g_\theta$变换是困难的，例如分解困难及存储困难。比较流行的解决方案是利用多项式近似滤波器。    

#
*接下来，将介绍几种在不同$g_{\theta}$设计下的典型谱方法。*

