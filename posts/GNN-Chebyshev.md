---
date: 2023-11-30
title: Convolution Neural Networks on Graphs with Fast Localized Spectral Filtering
tags:
- GNN
- Chebyshev
description: 2-nd,参考*Convolution Neural Networks on Graphs with Fast Localized Spectral Filtering*
---
# 卷积算符的切比雪夫多项式形式

## 直接上结论：    
### 问题
对于基本的图卷积定义$g_{\theta}\ast x = U g_{\theta} U^T x$。存在三个问题    
- 真实数据中，有效信息蕴含在低频段
- 参数数量有$O(N)$，容易过拟合。    
- $U$为稠密矩阵，加大了计算复杂度。

### 解决    
基于切比雪夫多项式分解，选取$K$阶，这里$K << N$。
$$
g_{\theta} \ast X = \sum_{k=0}^K \theta_k T_k(\widetilde{L})X
$$
其中，$T_k$为切比雪夫多项式。

## 符号定义
- $\mathscr{G} = (V,E,W)$，其中$V$为点集，$E$为边集，$W$为边权重矩阵，无权图中$W=A$。    
- $X \in R^n$为节点信号。    
- $L = D- W$为图拉普拉斯矩阵。本文记$L = I_n - D^{\frac{-1}{2}}AD^{\frac{-1}{2}}$，即$L$代表归一化后的图拉普拉斯矩阵。
- 图傅里叶变化$\mathscr{F}(x) = U^T x$，逆傅里叶变化$\mathscr{F^{-1}}(x) = U\mathscr{F}(x)$。
- 图卷积$g \ast x = U((U^Tx) \odot (U^Ty)) = Ug_{\theta}(\Lambda)U^Tx$。本文中，简记$y = Ug_{\theta}(\Lambda)U^Tx$。
## 局部滤波器的多项式参数化
观察图信号卷积的形式，事实上$Ug_{\theta}U^T$为图滤波器的形式。$x$先前作为图信号，一直为$n$维的向量，现在将其拓展至$X \in R^{N \times d}$。将$X$视为$d$组定义在$G$上的图信号通道，分别对$d$各通道的信号进行滤波操作，则有$Y = Ug_{\theta}(\Lambda)U^TX$。     
如上定义的滤波器有两个问题：
- 非局部化，即对点的更新需要全局参与。
- 参数过多，有过拟合风险。
- $U$为稠密矩阵，增加了计算复杂度$O(N^2)$。    

针对以上问题提出了一种可行的解决方案：将$g_{\theta}(\Lambda)$进行多项式展开后选取其前$K$项。我们将证明这是可行的，且是精确$K$局部化的。
### 多项式展开
$$
g_{\theta}(\Lambda) = \sum_{k=0}^{K-1} \theta_k \Lambda^k
$$
这样做有两个好处：
- 将参数变为$\Theta = (\theta_0,\theta_1...\theta_{K-1})$，这里一般$K <<N$，这极大的降低了参数的数量，能够有效避免过拟合现象的发生。
- $Y = Ug_\theta(\Lambda) U^TX = \sum_k \theta_k L^k X = g_\theta (L) X$。注意到当$d_{\mathscr{G}}(i,j) > k$，即点$i$与$j$间距离大于$k$，$(g_\theta (L))_{ij} = \sum_k \theta_k (L^k)_{ij} = 0$。    
也就是说，对中心点的过滤运算，只需要其$K$阶邻居参与，运算为严格$K-$局部化的。

但应该注意到，目前为止，思路是可行的，但简单的多项式分解仍存在问题，例如$L$本身的特征值[^1]为$[0,1]$的，这导致数值不稳定性的出现。

接下来，基于以上想法，给出论文中的改进方法。

### 基于递归的快速滤波
考虑利用切比雪夫的递归形式，将$g_\theta (L)$变为一个可以直接从$L$递归得到的多项式函数进行参数化。由于$L$为稀疏矩阵，采用稀疏矩阵运算，可将算法复杂度降低至$O(K|E|)$，这里$K$表示选取多项式阶，$|E|$表示边数。
#### 切比雪夫多项式定义
对于$X$，定义
$$
\begin{cases}
T_k(X) = 2XT_{k-1}(X) - T_{k-2}(X)\\
T_0(X) = 1\\
T_1(X) = X
\end{cases}
$$

#### 基于切比雪夫多项式展开$g_\theta (\Lambda)$
将$g_\theta (\Lambda)$展开为切比雪夫多项式形式并取其前$K$项得到
$$
g_\theta (\Lambda) = \sum_k \theta_k T_K(\widetilde{\Lambda})
$$
切比雪夫多项式要求特征值$\lambda \in [-1,1]$，这里$\widetilde{\Lambda} = \frac{2\Lambda}{\max_{\lambda in \Lambda}\lambda} - I_n$。
```
::: tip
原本归一化拉普拉斯矩阵对应的对角阵特征值符合切比雪夫多项式特征值要求范围，做如上改变的作用猜测一为保证数值的稳定性，二为尽可能的保留信息，避免信息损失。
:::
```

#### 基于切比雪夫多项式的卷积运算
本节主证明：$g_\theta \ast X =U(\sum_k \theta_k T_k (\widetilde{\Lambda}))U^T =  \sum_k \theta_k T_k(\widetilde{L}) X$，这里$\widetilde{L} = \frac{2L}{\lambda_{max} - I_n}$。同时，在该式基础上推导滤波运算的递推形式。    
```
::: tip
使用第二数学归纳法进行证明，以下为证明过程。
:::
```
令
$$
\begin{cases}
f(k) = U(\sum_k \theta_k T_k (\widetilde{\Lambda}))U^T\\
g(k) = \sum_k \theta_k T_k (U \widetilde{\Lambda} U^T)
\end{cases}
$$    
$k =1$:    
$$
f(1)  = U \theta_k T_0(\widetilde{\Lambda})U^T = \theta_k I_n = g(1)
$$
$k = 2$：
$$
\begin{split}
f(2) &= U\theta_0U^T + U \theta_1 \widetilde{\Lambda}U^T\\
&= \theta_0 I_n + \theta_1 U\\
& = g(2)
\end{split}
$$
假设对$k=n$成立，则$k = n+1$：
$$
f_{n+1} = f(n) + U\theta_{n+1}T_{n+1}(\widetilde{\Lambda})U^T\\
g_{n+1} = g(n) + \theta_{n+1}T_{n+1}(U \widetilde{\Lambda}U^T)
$$
只要证明$U\theta_{n+1}T_{n+1}(\widetilde{\Lambda})U^T = \theta_{n+1}T_{n+1}(U \widetilde{\Lambda}U^T)$即可。    
事实上，由于$(U \widetilde{\Lambda} U^T)^m = U \widetilde{\Lambda}^m U^T$，故两项中关于$\widetilde{\Lambda}^m$的系数相同，故$f(n+1) = g(n+1)$。证明完成!    
```
::: tip
下面给出递推形式，请注意，递推形式的计算中仅需要O(K|E|)的算法复杂度！！
:::
```
由于$g_\theta \ast X= \sum_k \theta_k T_k(\widetilde{L}) X$，记$\tilde{X_k} = T_k (\widetilde{L}) X$，我们有
$$
\begin{cases}
\tilde{X_k} = 2\widetilde{L}\tilde{X_{k-1}} - \tilde{X_{k-2}}\\
\tilde{X_0} = X\\
\tilde{X_1} = \widetilde{L}X
\end{cases}
$$
则
$$
Y = g_\theta (\widetilde{L})X = [\tilde{X_0}\dots\tilde{X_{K-1}}]\Theta
$$
其中$\Theta = [\theta_0\dots \theta_{K-1}]^T$    

## 其他说明
论文中递推形式在参数训练中降低计算复杂度也是明显的，这里假设$E$为损失函数，$S$为批大小，$F_{in}$为输入图信号维度，$F_{out}$为输出维度。那么在梯度反向传播过程中，我们有
$$
\begin{cases}
\frac{\partial E}{\partial \theta_{i,j}} = \sum_{s=0}^S [\tilde{X_{s,i,0}}\dots\tilde{X_{s,i,K-1}}]^T \frac{\partial E}{\partial y_{s,j}}\\
\frac{\partial E}{\partial X_{s,i}} = \sum_{j=1}^{F_{out}} g_{\theta_{i,j}}(L) \frac{\partial E}{\partial y_{s,j}}
\end{cases}
$$
显然，其计算复杂度为$O(K|E|SF_{in}F_{out})$。
#
GCN在该思想的基础上进一步减少了参数的数量，并通过叠加多个卷积层达到$K-$局部的效果，具体的细节将在其他文章中描述。

[^1]:关于拉普拉斯矩阵的性质可见