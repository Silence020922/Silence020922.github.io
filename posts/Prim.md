---
date: 2024-01-08
title: Prim Algorithm
tags:
- Prim
- Combinatorial Optimizition
description:  P算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结
---
## 概述
在割中找最小权的边
## 伪代码和代码
### 伪代码
1. Choose $v\in V$,Set $T = (\{v\},\emptyset)$
2. while $V(T) \neq V(G)$:choose an edge $e\in \delta_G(V(T))$ of minmum weight, $T = T+e$
### 代码
```python
def Triarray2adjlist(n, vvw):  # 将三元数组转化为邻接表的形式
    adjlist = []
    for i in range(n):
        col_edge = []
        for edge in vvw:
            v1, v2 = edge[0], edge[1]
            if v1 == i:
                col_edge.append((v2, edge[2]))
            if v2 == i:
                col_edge.append((v1, edge[2]))
        adjlist.append(col_edge)
    return adjlist


def Prim(n, adjlist, startv):  # 输入邻接表
    path = [-1] * n
    lowcost = [float("inf")] * n  # 初始定义所有点cost为无穷，起始点cost为0
    lowcost[startv] = 0
    left = set() # 记录未参与到划分中的点。
    left.add(startv)
    while len(left) > 0:
        min, k = float("inf"), -1
        for i in left:
            if lowcost[i] < min:
                min, k = lowcost[i], i
        if k >= 0:
            left.remove(k)
        print("edge  =(" + str(path[k]) + "," + str(k) + "), cost = " + str(lowcost[k]))
        col_edge = adjlist[k] # 刚检测的点的邻接表所在行
        for edge in col_edge:
            j = edge[0]
            if lowcost[j] > edge[1] and j in left: # j in left 才能进行
                lowcost[j], path[j] = edge[1], k
            elif lowcost[j] == float("inf"): # 在首次将所有的都加入了left，并对与现有划分求距离。
                lowcost[j], path[j] = edge[1], k
                left.add(j)  # add


vvw = [
    (0, 1, 1),
    (0, 2, 2),
    (1, 2, 2),
    (1, 3, 4),
    (1, 4, 3),
    (3, 4, 2),
    (2, 4, 4),
    (2, 3, 4),
]
adjlist = Triarray2adjlist(5, vvw)
Prim(5, adjlist, 0)
```
## 算法复杂度分析
在Prim算法的一般实现中，需要用到两个一维数组，使用    
$lowcost[1:n]$记录还未进入$T$中的点的集合$U$中的各顶点与$i$的连边中权最小的边的权值。    
$adj[1:n]$保存上述边的除$i$的令一个端点    
算法实现需要
$$
\begin{align*}
choose&\;i,\;U=\{1,2,...n\}\backslash \{i\},\;lowcost[i] = 0\\
while |&U|>0:\\
&compute\;k\;st,\;lowcost[k] = \min_{j\in U}lowcost[j]\\
&U = U-{k},for\;all\; (k,i)\in E:\\
&\qquad lowcost[i] = \begin{cases}lowcost[i],\qquad if\;w_{ki}\geq lowcost[i]\\
w_{ki},\qquad else\end{cases}\\
&\qquad adj[i] = \begin{cases}
adj[i],\qquad if w_{ik}\geq lowcost[i]\\
k,\qquad else\end{cases}
\end{align*}
$$
在上述实现过程中，选择$k$进行比较的过程中，第一次需要$n-2$次，第二次需要$n-3$次...，总共需要$\frac{(n-2)(n-1)}{2}$次比较。而对$lowcost$和$adj$进行更新，如果采用邻接表，显然每条边恰好被检查两次，则最终复杂度$O(m+n^2)$，而使用邻接矩阵$O(n^2)$
## 算法改进
采用二叉树数据结构可以改进到$O(mlogn)$，使用斐波那契堆可改进到$O(m+nlogn)$