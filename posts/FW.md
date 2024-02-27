---
date: 2024-01-06
title: Floyd-warshall Algorithm
tags:
- Combinatorial Optimizition
description:  FW算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结
---
## 概述
FW算法用来解决图中所有点对间最短路的问题，即输入有向图$D$及其边权重，通过执行该算法可以得到每个点对$s,t$间的最短路长$l_{st}$和最短路径$p_{st}$。    
FW算法事实上在做这样一件事情：比较点对之间的经过中转点与不经过中转点的距离哪个更优。
## 伪代码及代码
$$
\begin{align*}
\textbf{初始化}\\
&Set\;D_{ij} = c(i,j)\;for\;all\;(i,j)\in E(G).\\
&Set\;D_{ij} = \infty \;for\;all\;(i,j)\in E(V(G)\times V(G)\backslash E(G))\; with\; i\neq j.\\
&Set\;D_{ii} = 0\;for\;all\;i.\\
&Set\;P_{ij} = i\;for\;all\;(i,j)\in E(G).\\
\textbf{迭代过程}\\
&\mathbf{For}\;k=1\;\mathbf{to}\;n\;\mathbf{do}:\\
&\qquad\mathbf{For}\;i=1\;\mathbf{to}\;n\;\mathbf{do}:\mathbf{if}\;i\neq k\;\mathbf{then:}\\
&\qquad \qquad\mathbf{For}\;j=1\;\mathbf{to}\;n\;\mathbf{do}:\mathbf{if}\;j\neq k\;\mathbf{then:}\\
& \qquad \qquad \qquad \mathbf{if}\;l_{ij}>l_{ik}+l_{kj}\;\mathbf{then}\;set\;l_{ij}=l_{ik}+l_{kj}\;and\;p_{ik}=p_{jk}.
\end{align*}
$$
```python
vvw=[(1,2,3),(1,3,8),(1,5,-4),(2,4,1),(2,5,7),(3,2,4),(4,1,2),(4,3,-5),(5,4,6)]
n = 5
def find_mini_path(vvw,n):
    '''
    求解所有点对间的最短路径算法
    Input
    vvw :三元组邻接表
    n :点数
    Output
    D :D[i][j]表示点i到点j的最短加权路的长度
    P :P[i][j]表示i到j途径的点。
    '''
    MAX = float('inf')
    m = len(vvw)
    D = [[MAX for i in range(n)] for j in range(n)]
    P = [[MAX for i in range(n)] for j in range(n)]
    for i in range(m):
        v1,v2 = vvw[i][0]-1,vvw[i][1]-1
        D[v1][v2]=vvw[i][2]
        P[v1][v2] = v1+1 # 注意，这里由于在输入时点记号为1-5，python第一位为0,方便将元素与点对应起来改为+1
    for k in range(n): # 注意，中转点位于最外层
        for i in range(n):
            for j in range(n):
                if D[i][k] + D[k][j] < D[i][j]:
                    D[i][j] =  D[i][k] + D[k][j]
                    P[i][j] = P[k][j]
    return D,P

D,P = find_mini_path(vvw,n)
print(D,P)
```
## 正确性及算法复杂度证明
**在守恒权的假设下，FW算法能够正确运行，并具有$O(n^3)$的时间复杂度。**

:::tip
注意到算法对中转点的循环位于最外层，接下来说明，FW迭代过程中，$D^{(k)}_{ij}$代表节点对$v_i\to v_j$不经过点$\{v_{k+1},v_{k+2},\dots,v_n\}$时的最短路。对于$k=0$显然成立，只要证明$k = n$时成立，则得到算法正确性，采用归纳假设。而时间复杂度显然。
:::

$k = 0$由初始化过程保证成立。假设对$k = k_0$时成立，令$D_{ij}$表示$k_0$情况下(即不经过$\{v_{k+1},\dots,v_n\}$时)$i\to j$最短路，那么$k_0+1$情况下(即不经过$\{v_{k+2},\dots,v_n\}$时):    
在守恒权的保证下，外循环$k_0$与$k_0+1$条件下$v_i\to v_{k+1}$与$v_{k+1} \to v_j$的最短路径相同。外循环$k_0+1$时，$v_i\to v_j$经过$v_{k+1}$时的路径长度大于$D_{i,j}$时，显然定理成立;反之，我们需证明更新时$D_{i,k+1} + D_{k+1,j}$确实记录了该路径的长度，事实上，只要证明$v_i\to v_{k+1}$与$v_{k+1}\to v_j$最短路径不交即可。    
记$v_i\to v_{k+1}$的最短路径为$P$, $v_{k+1}\to v_j$的最短路径为$Q$。反证，若$P \cap Q \neq \emptyset$，则$P\cup Q$上我们能够找到一个极大圈$R$，且一定有$v_{k+1} \in R$。由守恒权假设，$(P \cup Q )\backslash R$是一条比$D_{i,j}$更短的$v_i \to v_j$路，且不经过$\{k+1,\dots,n\}$，这与$D_{i,j}$含义矛盾。
