---
date: 2023-01-12
title: Push-relabel Algorithm
tags:
- push-relabel
- Combinatorial Optimizition
description: Push-relabel推流重标算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结
---
## 概述
显然有两个过程，推流(更新$f$)重标(更新$\psi$)
## 符号定义
- 超出量$ex$：$ex_f(v) = \sum_{e\in \delta^-(v)}f(e) - \sum_{e\in \delta^+(v)}f(e)$，如果$ex_f(v) = 0$，我们称$f$正在点$v$守恒。
- 预流$f$：如果其满足$f(e) \leq \mu(e)$且$ex_f(e) \geq 0$，那么$f(e)$为一个预流。特别的，如果$ex_f(v) = 0,\;\forall\;v\in V(G)\backslash \{s\}$，那么$f$为一个流。
- 活动点：$v\in V(G)\backslash \{s,t\}$且$ex_f(v) >0$则称$v$为一个活动点。
- 距离标号及容许的：$(G,\mu,s,t)$为一个网络且$f$为预流。距离标号$\psi : V(G)\rightarrow Z_+$且满足$\psi(t) = 0,\;\psi(s) = n$以及$\forall\;(v,w)\in E(G_f),\; \psi(v) \geq \psi(w) +1$，特别的若一条边$e = (v,w) \in E(\mathop{G}\limits^{\leftrightarrow})$且$e \in E(G_f),\;\psi(v) = \psi(w) +1$，那么称它是容许的。
## 算法伪代码
### 伪代码
1. For every $e\in\;\delta^+(s)$: $f(e) = \mu(e)$.    
   The other $e$: $f(e) = 0$
2. $\psi(s) = n$, for $v \in V(G)\backslash \{s\}$: $\psi(v) = 0$.
3. While exist active vertex, choose active one $v$:    
    if $\exist\;e\in \delta^+(v)$ and $e$ is admissible: PUSH($e$),else RELABEL(v).

**PUSH**    
1. compute $\gamma = \min\{ex_f(v),\mu_f(e)\}$
2. Augment $f$ along $e$ by $\gamma$    

**RELABEL**    
Set $\psi(v) = \min\{\psi(w)+1:(v,w)\in \delta^+_{G_f}(v)\}$
### 代码

## 正确性及复杂度分析
算法复杂度为$O(n\sqrt[2]{m})$，证明繁琐。    
对其正确性给出如下证明，首先，在算法执行过程中，容易证明$f,\psi$为$s-t$预流和关于$f$的距离标号。当算法停止时，此时无活动点，$f$为一个$s-t$流，下证$G_f$不存在$s-t$路。    
对于$G_f$的任一$v-w$路$P = v_0 = v,v_1,\dots,v_k=w ，\exist \psi$，$\psi(v_i)\leq \psi(v_{i+1})+1,\; i =0,\dots,k$。那么$\psi(v_0) \leq \psi(v_k)+k$。注意到，路长$k \leq n-1$。而$\psi(s) = n,\psi(t) = 0$，故没有$s-t$路，则$f$为最大流。