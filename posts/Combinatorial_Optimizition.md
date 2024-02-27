---
date: 2024-01-08
title: Combinatorial Optimizition
tags:
- Combinatorial Optimizition notes
description: 组合优化课程笔记
---
# Kruskal
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
# Graph-scanning Algorithm

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
# Prim Algorithm

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
# Push-relabel Algorithm

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
# Srong Connected component in digraph

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
# Floyd-warshall Algorithm

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
# Dinic's Algorithm

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
