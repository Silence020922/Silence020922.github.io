---
date: 2024-01-12
title: Dinic's Algorithm
tags:
- Dinic's Alogorithm
- Combinatorial 
description:  Dinic算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结
---
## 概述
解决最大流问题的算法，游戏打多了头疼，改天再仔细看。
## 符号定义
- 剩余容量$\mu_f$:$\mu_f(e) = \mu(e) - f(e),\mu_f(\mathop{e}\limits^{\leftarrow}) = f(e)$。其中$f$表示流，$\mathop{e}\limits^{\leftarrow}$代表反向弧。
- 残余图$G_f$:$G_f = (V(G), \{e\in E(\mathop{G}\limits^{\leftrightarrow}), \mu_f(e)>0\})$。
- 分层图$G_f^L$:$G_f^L = (V(G),\{(x,y)\in E(G_f),d_{G_f}(s,y) = d_{G_f}(s,x) + 1\}),$
- 阻塞流：一个$s-t$流$f$如果$(V(G),\{e\in E(G), f(e)<\mu(e)\})$中没有$s-t$路，那么$f$为阻塞流。注意，阻塞流未必是最大流。
## 算法伪代码与代码
### 伪代码
1. Set $f(e) = 0$ for all $e\in E(G)$
2. Construct $G_f^L$ of $G_f$
3. Find a block flow $f'$ in $(G_f^L,\mu_f)$, if $f'=0$ then stop
4. Replace $f$ with $f'$ and go to 2. 
### 代码

## 算法正确性证明
**该算法在有限时间内能够找到最大流。**    
首先，说明每一次迭代，最短可扩路长度严格增加。令$f$为某一次循环开始前的流，$f'$为执行过step 4后当前的流。对于$f'$对应的增广路，他一定包含$G_f^L$之外的边，所以，他将包含比$d_{G_f}(s,t)$更多的边，于是，最短可扩路随迭代次数严格增加。那么，之多$n-1$次循环后，该算法停止，此时已没有可扩路，这说明找到了最大流。