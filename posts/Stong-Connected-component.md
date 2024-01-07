---
date: 2024-01-04
title: Srong Connected component in digraph
tags:
- Strong Connected Component
- Combinatorial Optimizition
description: 有向图强连通分支算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结
---
## 概述
事实上算法在做这样的事情：
1. 以DFS按有向图的所有点出发，得到树形森林，将点按照搜索过程出栈顺序放入$\Psi$中。
2. 将$\Psi$中的点从后向前取点$w$，以$w$出发按图逆邻接表能搜到且为进入其他强连通分支的所有点构成一个强连通分支。
## 伪代码及代码
### 伪代码
这里，$Comp(v)$记录了点$v$属于的连通分支。$\Psi$在这里作为一个映射，将点映射到出栈序号。
$$
\begin{align*}
&Set\;R=\emptyset,Set\;N=0\\
&For\;all\;vinV(G)\;do:\;if\;v\notin R\;then\;VISIT1(v)\\
&Set\;R=\emptyset,Set\;K=0\\
&For\;i=|V(G)|\;down\;to\;1\;do:\;if\;\Psi^{-1}(i)\notin R\;then\;Set\;K=K+1\;and\;VISIT2(\Psi^{-1}(i))
\end{align*}
$$
*VISIT1*
$$
\begin{align*}
&Set\;R=R\cup \{v\}\\
&For\;all\;w\;with\;(v,w)\in E\;do:\;if\;w\notin R\;then\;VISIT1(w)\\
&Set\;N=N+1,\Psi(v)=N\;and \;\Psi^{-1}(N) = v
\end{align*}
$$
*VISIT2*
$$
\begin{align*}
&Set\;R=R\cup \{v\}\\
&For\;all\;w\;with\;(v,w)\in E\;do:\;if\;w\notin R\;then\;VISIT2(w)\\
&Set\;Comp(v) = K
\end{align*}
$$

### 代码
```python
n = 7
adjlist = [[5],[2],[1],[1,5],[0,1,2,3],[4],[2,4]]
viewed = [0]*n
P_dfs = []
scc = []
def dfs(adjlist,u): # 给到出栈顺序
    viewed[u] = 1
    for v in adjlist[u]:
        if not viewed[v]:
            dfs(adjlist,v)
    P_dfs.append(u)

def reverse_adj(adjlist,n):
    r_adjlist = [[] for _ in range(n)]
    for v in range(n):
        if len(adjlist[v])!= 0:
            for w in adjlist[v]:
                r_adjlist[w].append(v)
    return r_adjlist

def rdfs(adjlist,u,scc):
    viewed[u] = 1
    scc.append(u)
    for v in adjlist[u]:
        if not viewed[v]:
            rdfs(adjlist,v,scc)

dfs(adjlist,0) # 第一次dfs
P_dfs.reverse() # 反回出栈顺序，由于第二次dfs从后向前取点
viewed = [0]*n # 重置一下
r_adj = reverse_adj(adjlist,n) # 反向邻接表
for i in range(n):
    if not viewed[i]: # i还不在任何强连通分支中
        scc = []
        rdfs(r_adj,i,scc)
        print(scc)
```
## 可行性及算法复杂度
### 可行性
事实上，如果$u,v$属于同一个强连通分支，那么$Comp(u) = Comp(v)$是显然的，只需证明当$Comp(u) = Comp(v)$时，$u,v$确实属于同一个强连通分支。    
令$r(u),r(v)$表示从$u,v$可到达的且$\Psi$值最大的点。由于$Comp(u) = Comp(v)$那么一定有$r = r(u) = r(v)$且$\Psi(r) \geq \Psi(u)$，这说明$r$从$u$和$v$皆可达。同时，因为$\Psi(r) \ge \Psi(u)$，这说明当$u$加入$R$时，$r \notin R$，故有一条$r-u$路，于是$u$是从$r$可达的，同理对$v$成立。故，$u,v$在同一个连通分支中，证明完成。
### 算法复杂度
算法复杂度为$O(m+n)$显然。
