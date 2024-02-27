---
date: 2024-01-07
title: Graph-scanning Algorithm
tags:
- Combinatorial Optimizition
description:  图搜索算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结
---
## 概述
输入图$G$及一些点$s$，算法给出图$G$中点$s$能够到达的所有点的集合$R$，并记录一个边集$T$，满足$(R,T)$为树。
## 伪代码及代码
### 伪代码
1. Set $R = \{s\},Q = \{s\}\;and\;T=\emptyset$,
2. If $Q=\emptyset$, then stop;else choose $v\in Q$
3. choose a $w\in V(G)\backslash R$ with $e = (v,w)\in E(G)$,if there is no such $w$ then set $Q = Q-\{v\}$,go to 2
4. $R = R\cup \{w\},Q = Q\cup \{w\},T = T\cup \{e\}$, go to 2
### 代码
```python
test_list = [[1,2,3],[0,5],[0,3,5],[0,2,4],[3,5],[1,4]]
n = 6
s = 0
def Graph_Scan(adjlist,n,s):
    """
    Input: adjlist 邻接表
           n 点数
           s 起始点
    Output: R 从s出发能够到达的所有点的集合
            T R、T组成一个以s为根的树形图/树
    """
    viewed = [0]*n
    viewed[s] = 1
    R = [s]
    Q = [s]
    T = []
    while len(Q) != 0:
        v = Q[-1]
        w = s
        for vertex in adjlist[v]:
            if viewed[vertex] == 0:
                w = vertex
                break
        if w == s: 
            Q.pop()
            break
        else:
            R.append(w)
            Q.append(w)
            T.append([v,w])
            viewed[w] = 1
    return R,T

print(Graph_Scan(test_list,n,s))
```
## 正确性及算法复杂度
### 正确性
首先，$(R,T)$在任何时间步下都是树，这是由$w$仅从不在$R$中的点选取决定的。验证算法正确性，只需证明$R$确实包含了从$s$出发所有可达点。    
假设$w$从$s$可达但$w \notin R$，令$P$表示一条$w-s$路，令$x,y$表示在路$P$上且满足$x\in R,y \notin R$的点。算法仅在$Q = \emptyset$时结束，而将$x$从$Q$中删除需要$V \backslash R$中不含与$x$相邻的点，但显然，$y \in V\backslash R$且$(x,y) \in E(G)$，产生矛盾。定理证明完成。
### 算法复杂度
**数据结构采用邻接表的情况下，可以证明算法复杂度达到$O(m)$。**    
邻接表下，采用深度优先搜索，则每次搜索都是由邻接表存储的起点出发，沿指针指向的搜索所有存储单元，最终该算法在邻接表上遍历一次，故算法复杂度为$O(m)$。
