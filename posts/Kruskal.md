---
date: 2024-01-08
title: Kruskal Algorithm
tags:
- Kruskal
- Combinatorial Optimizition
description:  K算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结
---
## 概述
K算法解决无向带权图的最小支撑树问题。输入图$G$，该算法从$T = (V(G),\emptyset)$出发，按照边权从小到大每次选择一条边，如果$T$加上这条边不会产生圈，更新$T=T+e$否则检查下一条边。最终，如果$T$边数达到$n-1$，则输出$T$为图$G$的最小支撑树，否则，则该图不连通。
## 算法伪代码及代码
### 伪代码
1. Sort the edge such that $c(e_1)\leq c(e_2)\leq \dots \leq c(e_m)$
2. Set $T = (V(G),\emptyset)$
3. For i=1 to m do:if $T+e$ contains no cycle then $T = T+e$
### 代码
算法的关键点在于如何判断添加边$e$后是否有圈，下面是使用标号判断法的代码示例。
```python
def K_sig(vvw, n):  # 输入三元组，标号判断回路的Kruskal算法
    vvw = sorted(vvw, key=lambda x: x[2])  # 使用lambda函数，意为 key(x) = x[2]
    parent = [i for i in range(n)]  # 首先以每个点作为一棵子树
    tree = []
    for edge in vvw:
        root1 = parent[edge[0]]
        root2 = parent[edge[1]]
        if root1 != root2:
            tree.append(edge)
            if len(tree) == n - 1:
                break
            for i in range(n):
                if parent[i] == root2:
                    parent[i] = root1
    if len(tree) < n - 1:
        print("Don't connected")
    else:
        print(tree)


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
K_sig(vvw, 5)

```
## 算法复杂度分析
标号判断 $O(m\log n + n^2)$    
根数判断$O(m\log n)$     
路径压缩$O(m\alpha(n)), \alpha(n)$为阿克曼数$A(n,1)$的逆