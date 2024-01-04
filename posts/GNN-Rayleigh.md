---
date: 2023-12-03
title: Eigenvalues of the Laplacian
tags:
- Rayleigh quotient
- Laplacian matrix
description: 3-rd,给出拉普拉斯矩阵特征值范围[0,2]的证明。
---
本文的拉普拉斯$L = L_{norm} = I-D^{\frac{-1}{2}}AD^{\frac{-1}{2}}$。
# Rayleigh quotient
## Defination
$$
R(A,x) = \frac{x^T A x}{x^Tx}
$$
## Property
实对称阵$A$，假设其特征值$\lambda_1 \geq \lambda_2\geq \dots\lambda_n$，则
$$
\max_{x}R(A,x) = \lambda_1\\
\min_{x}R(A,x) = \lambda_n
$$
::: tip
下面给出证明：
:::    
- 首先证明$R(A,x) \in [\lambda_n,\lambda_1]$:    
实对称阵存在正交分解，令$A = U\Lambda U^T$，则
$$
\begin{split}
R(A,x) &= \frac{x^T A x}{x^Tx}\\
&= \frac{(U^T x)^T \Lambda U^T x}{x^TUU^Tx}\\
&= \frac{y^T \Lambda y}{y^Ty}\\
&= \frac{\sum \lambda_i (y_i)^2}{(y_i)^2}
\end{split}
$$
这里，$y=U^Tx$。显然通过上式能够得到$\lambda_n \leq R(A,x) \leq \lambda_1$。
- 下面证明$R(A,x)$能够取值$\lambda_n和\lambda_1$。    
由于$U = [u_1,u_2\dots U_n]$，其中$u_i$为一组正交基。则$x$可以表示$x = \sum k_i u_i = [k_1,\dots,k_n][u_1,\dots,u_n]^T$，这里令$|x|=1$。$y = U^Tx$。    
$$
R(A,x)= \frac{y^T\Lambda y}{y^T y} = \sum \lambda_i k_i^2
$$
这里注意到$|x| = \sum k_i^2 = 1$，于是，取$k_1=1和k_n=1$可以完成证明。
# Laplacian
证明$L = I-D^{\frac{-1}{2}}AD^{\frac{-1}{2}}$的特征值$\lambda \in [0,2]$。    
::: tip
下面给出证明
:::    
- 首先证明$A_{norm}$的特征值$-1 \leq \alpha_n \leq \dots \leq \alpha_1 \leq 1$。    
记$A_{norm} = D^{\frac{-1}{2}}AD^{\frac{-1}{2}}$，$L = I + A_{norm}$。这里，$I+A_{norm},L$可证明半正定的。   
$$
x^T (I+A_{norm}) x = \sum x_i^2+ \sum_{(i,j)\in E} (\frac{x_2}{\sqrt{d_i}} + \frac{x_j}{\sqrt{d_j}}) \geq 0\\
x^Tx \geq -x^TA_{norm}x\\
g(A_{norm},x) \geq -1
$$
同样，由$x^T(I-A_{norm})x\geq 0$可以得到$g(A_{norm},x) \leq 1$。
- 接下来，证明$L$特征值$\lambda \in [0,2]$，只要证$g(L,x) \in [0,2]$即可。
$$
g(L,x) = \frac{x^T L x}{x^T x} = \frac{x^T (I-A_{norm}) x}{x^T x} = 1-g(A_{norm},x)
$$
由于$g(A_{norm},x) \in [-1,1]$，可以立刻得到$g(L,x) \in [0,2]$。即$L$特征值$\lambda_L \in [0,2]$。
