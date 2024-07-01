---
date: 2024-07-01
title: DLLP
tags:
- distuributed learning
description: Distributed Learning for Large-Scale Models at Edge With Privacy Protection
---
## Q1
![](https://surplus-1311636487.cos.ap-beijing.myqcloud.com/Q1.png)
:::tip
$Lemma\;1$的证明中 P1064
:::        
$x_{k,n,T}$ **and** $x_{k,n,T}'$ **denote the executions for** $M(D_k)$ and $M(D_k')$该如何理解，这里是否有$M(x_{k,n,T}) = x_{k,n,T} + \eta_{k,n}$，即$x_{k,n,T}$为$f(.)$的输出结果。
## Q2
![](https://surplus-1311636487.cos.ap-beijing.myqcloud.com/Q2.png)
:::tip
$Lemma\;2$证明中 P1064
:::
$\eta_{k,n}$为服从$Laplace$分布的随机变量，均值0,方差为$2\varsigma^2$，这里为何使用"$\leq$"而不是"="。
## Q3
![](https://surplus-1311636487.cos.ap-beijing.myqcloud.com/Q3.png)
![](https://surplus-1311636487.cos.ap-beijing.myqcloud.com/Q3-1.png)
:::tip
$Theorem\;2$证明Bound $B_1$部分 P1066
:::
对于第三、四等号式子中关于以下变换
$$
\begin{aligned}
&\frac{1}{N_{k}^{i}}\sum_{n\in\mathcal N_{k}^{i}}\sum_{t=1}^{T}\gamma\nabla F_{n}^{i}(x_{k,n,t-1},\xi_{n,t-1}) \\
&\rightarrow\frac{1}{N_{k}^{i}}\sum_{n\in\mathcal{N}_{k}^{i}}\sum_{t=1}^{T}\gamma\mathbb{E}[\nabla F_{n}^{i}(x_{k,n,t-1},\xi_{n,t-1})\mid x_{k}]
\\
&\rightarrow
\frac{1}{N_{k}^{i}}\sum_{n\in\mathcal{N}_{k}^{i}}\sum_{t=1}^{T}\gamma\nabla F_{n}^{i}(x_{k,n,t-1})
\end{aligned}
$$
没看懂
## Q4
![](https://surplus-1311636487.cos.ap-beijing.myqcloud.com/Q4.png)
:::tip
$Theorem\;2$证明Bound $B_2$部分 P1067
:::
对于加和式中的第一项，这里我的理解为
$$
\begin{aligned}&2LT^{2}\sum_{i\in S_{k}}\mathbb{E}\|\frac{1}{TN_{k}^{i}}\sum_{n\in\mathcal{N}_{k}^{i}}\sum_{i=1}^{T}\gamma[\nabla F_{n}^{i}(x_{k,n,t-1},\xi_{n,t-1})-\nabla F_{n}^{i}(x_{k,n,t-1})]\|^{2}\\
&\leq \frac{2LT^2\gamma^2}{T\Gamma^*}\sum_{n=1}^N\sum_{t=1}^T\sum_{i\in S_k}\mathbb{E}\|[\nabla F_n^i(x_{k,n,t-1},\xi_{n,t-1})-\nabla F_n^i(x_{k,n,t-1})]\|^2\end{aligned}
$$
这里使用不等式放缩的系数$TN^{i}_{k}$原文是否没乘进去。