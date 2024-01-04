---
date: 2023-1-4
title: ACMP
tags:
- GC
- Theory
description: 8-th，自GNN面世后，衍生了很多的变式，也存在很多实际的应用。但对向神经网络中添加卷积算子的意义本身，却缺乏理论上的证明，本文将
携带卷积算子的神经网络与不使用图信息的神经网络进行对比，从理论出发给出严密的证明。参考Effects of graph convolutions in multi-layer networks
---
# Introduction
论文来自2023 ICLR会议论文。看了三个月GNN相关内容，所看到的GCN的支撑不是从实例性能出发，就是从思想来源，由CNN、图信号等领域自然发展而来，
却没有找到理论上的支撑，所以翻了翻理论方面的相关文献，找到了这篇。
# Main body
理论推导过于繁琐，这里只作简要说明。我们知道GCN中有很多依托于注意力的版本，例如GAT，本文并不关注于所谓的注意力，只关注卷积算符的合理性;其次，GCN层一般只有2 $\sim$ 3层，由于过平滑，本文关注GC层的作用，则不考虑过平滑问题，所以只考虑2层，3层情况下的神经网络;最后，由于GCN在异配图下的表现往往差过同配图，本文关注GC层的作用，在更新过程引入 $\xi = sgn(p-q)$ 其中$p$为同类连接的概率，$q$为异类连接的概率。
## Contributions
本文理论层面使用合成数据集，记为XOR data,并研究了在该数据集上执行二分类任务的性能，数据集的节点特征从高斯混合中采样(这样选取的目的是使其非线性可分的)，接下来是主要成果：
- 首先证明了结合图信息的网络表现优于不是用图的方法。事实上，与不使用图的方法相比，单个GC层允许多层神经网络在更宽的范围对节点进行分类，表现在二分类中，GC的网络对两类特征均值之差的需要仅为不使用图的网络的$\frac{1}{\sqrt[4]{n(p+q)}}$。进一步，可以证明，在较稠密的图中，这个值可以达到$\frac{1}{\sqrt[4]{n}}$。
- 证明了对于多次网络来讲，配备多个GC算子是要比配备单个GC算子展现更好的性能，同时，配备相同GC算子的情况下，对其不同的排布产生的神经网络性能相似。
- 在实例上，使用了真是数据集和大规模数据集验证了本文提出的理论成果，显示了GC在网络多层和同(异)质下的各种组合的性能趋势。
## Preliminaries
### Data model
证明主要依托的数据集。现介绍其设置及符号含义：    
**图基础结构**：$n,d$分别表示节点数量和特征维度，取正整。$\epsilon_1,\dots,\epsilon_n$代表节点的分类，为服从伯努利分布的随机变量。$C_b = \{i \in [n]| \epsilon_i =b\}$ for $b \in \{0,1\}$表示属于$b$类的点集。    
**点特征**：$X$代表节点特征，其中$X_i$代表节点$i$的特征。设置两个量，$\mu,\nu$,$X_i \sim \mathscr{N}(((2\eta_i-1)(1-\epsilon_i)\mu+\epsilon_i \nu),\sigma^2)$。事实上，可以看到，$\mu,\nu$在此充当了某类点特征集中的均值。记号$X_i \sim OR-GMM(n,d,\mu,\nu,\sigma^2)$。    
**图信息**：$A$代表邻接矩阵，值得一提，这里的图是允许自环存在的，这也是由卷积算子的特点所决定的。使用$D$表示度矩阵，记号$deg(i) = D_{i,i}$，使用$N_i$表示点$i$的邻居，定义同类点连边概率为$p$，不同类点间连边概率为$q$。记号$(A,X) \sim XOR-CSBM(n,d,\mu,\nu,\sigma^2,p,q)$。
### Network Architecture
本文关注的是使用RELU层的MLP：
$$
\begin{aligned}
&\mathbf H^{(0)}=\mathbf X, \\
&\left.\left.\begin{aligned}&f^{(l)}(\mathbf{X})=(\mathbf{D}^{-1}\mathbf{A})^{k_l}\mathbf{H}^{(l-1)}\mathbf{W}^{(l)}+\mathbf{b}^{(l)}\\&\mathbf{H}^{(l)}=\text{Re}\text{LU}(f^{(l)}(\mathbf{X}))\end{aligned}\right.\right\}\text{ for }l\in[L], \\
&\mathbf{\hat{y}}=\varphi(f^{(L)}(\mathbf{X})).
\end{aligned}
$$
这里，$\varphi(x) = sigmoid(x) = \frac{1}{1+e^{-x}}$。网络最终输出$\mathbf{\hat{y}}$。注意$D^{-1}A$为归一化的邻接矩阵，事实上，在通常GCN中归一化使用$D^{-\frac{1}{2}}AD^{-\frac{1}{2}}$，事实上后面的实验可以说明他们具有相似的表现。模型中$k_l$控制了在第$l$层中添加GC的数量，事实上，当该层不使用图信息则令$k_l = 0$即可。    
$(W^{(l)},b^{(l)})$是可训练的参数，对于模型的训练使用交叉熵作为损失函数$\begin{aligned}\ell_\theta(\mathbf{A},\mathbf{X})&=-\frac{1}{n}\sum_{i\in[n]}y_i\log(\hat{y}_i)+(1-y_i)\log(1-\hat{y}_i),\end{aligned}$，则
$$
\mathrm{OPT}(\mathbf{A},\mathbf{X})=\min_{\theta\in\mathcal{C}}\ell_\theta(\mathbf{A},\mathbf{X}),
$$
这里，$\mathcal{C}$表示参数可选范围，事实上，在这里我们限制$||W^{(1)}||_2 \leq R, ||W^{(>1)}|| \leq 1$。理论部分可以看到对参数的限制是很有必要的，否则，若允许$R$无限大，那么损失函数的值可以任意的逼近0，不具备研究意义。以后，使用$\ell_\theta(X)$代替$\ell_\theta(I_n,X)$。
## Theory
这里为了保持严谨性，对于定理的描述使用原文描述即英文版本
### Main results
#### Thm1
**Theorem** $1.Let$ X $\in\mathbb{R}^{n\times d}\sim XOR$-$GMM(n,d,\boldsymbol{\mu},\boldsymbol{\nu},\sigma^2)$ and defne $\gamma=\|\boldsymbol{\mu}-\boldsymbol{\nu}\|_2$ to be the $distance$ between the means. Then we have the following:

 1.  Assume that $\gamma\leq K\sigma$ and let $h(\mathbf{x}):\mathbb{R}^d\to\{0,1\}$ be any binary classifter. Then for any $K>0$ and any $\epsilon\in(0,1),at$ least a fraction $2\Phi_{\mathrm{c}}\left(K/_{2}\right)^{2}-O(n^{-\epsilon/2})ofall$ data points are $misclassified\:by\:h\:with\:probability\:at\:least\:1-\exp(-2n^{1-\epsilon}).$

1. For any $\epsilon>0,ifthe$ distance between the means is $\gamma=\Omega(\sigma(\log n)^{\frac12+\epsilon}),then$ for any $c>0$, with probability at least $1-O(n^{-c}),there$ exist a two-layer and a three-layer network that $perfectly\:classify\:the\:data,\:and\:obtain\:a\:cross-entropy\:loss\:given\:by$

$$
\ell_\theta(\mathbf{X})=C\exp\left(-\frac R{\sqrt{2}}\gamma\left(1\pm\sqrt{c}/(\log n)^\epsilon\right)\right),
$$

$whereC\in[1/_2,1]$ is an absolute constant$    

首先回忆一下定义，这将有利于我们理解定理含义，$\gamma=\|\boldsymbol{\mu}-\boldsymbol{\nu}\|_2$，$X_i \sim \mathscr{N}(((2\eta_i-1)(1-\epsilon_i)\mu+\epsilon_i \nu),\sigma^2)$，注意到，比较$\gamma,\sigma$，我们说，$\frac{\gamma}{\sigma}$的值能够表现不同类别的特征重合程度。    
定理一的第一部分是告诉我们，当其分离程度较小的情况下，$\frac{\gamma}{\sigma} \leq K$，在高概率$1 - exp{-2n^{1-\epsilon}}$下总会有小部分$2\Phi_{\mathrm{c}}\left(K/_{2}\right)^{2}-O(n^{-\epsilon/2})$的点被分类错误。注意到，在这种情况下，当$K \to \infty$时，可以看到此时错误分类点的比例将趋于0,事实上在第二部分给出了更加准确的界，而如果$K \to 0$，及其节点的特征混杂在一起，这时候错误分类的比例将接近$\frac{1}{2}$！注意这是二分类任务，此时分类器无任何作用！    
定理的第二部分表明，当其不同类特征分散程度较大达到$\gamma=\Omega(\sigma(\log n)^{\frac12+\epsilon})$时，不使用图信息的网络才能够高概率$1-O(n^{-c})$情况下完美分类。

#### Thm2
**Theorem** $2.Let\left(\mathbf{A},\mathbf{X}\right)\sim XOR$-CSBM$(n,d,\boldsymbol{\mu},\boldsymbol{\nu},\sigma^2,p,q),\gamma=\|\boldsymbol{\mu}-\boldsymbol{\nu}\|_2,\:and\:\Gamma(p,q)=\|p-$ $g|/(p+q).There$ exist a two-layer network and a three-layer network with the following properties:
1. If the intra-class and inter-class edge probabilities are $p,q=\Omega(\frac{\log^2n}n)$, and it holds that $\Gamma(p,q)\zeta(\gamma/_{2\sigma})=\omega\left(\sqrt{\frac{\log n}{n(p+q)}}\right),then\:for\:any\:c>0,\:with\:probability\:at\:least\:1-O(n^{-c})$, the networks equipped with a graph convolution in the second or the third layer perfectly $classify$ the data, and obtain the following loss:
$$
\ell_\theta(\mathbf{A},\mathbf{X})=C'\exp\left(-C\sigma R\Gamma(p,q)\zeta(\gamma/_{2\sigma})(1\pm\sqrt{c/_{\log n}})\right),
$$
where $C>0$ and $C^{\prime}\in[1/_2,1]$ are constants$

2. $Ifp,q=\Omega(\frac{\log n}{\sqrt{n}})\:and\:\Gamma(p,q)^2\zeta(\gamma/2\sigma)=\omega\left(\sqrt{\frac{\log n}n}\right),then\:for\:any\:c>0,\:with\:probability$
 $at\textit{least }1- O( n^{- c})$, the networks with any combination of two graph convolutions in the second andlor the third layers perfectly classify the data, and obtain the following loss:

$$
\ell_\theta(\mathbf{A},\mathbf{X})=C'\exp\left(-C\sigma R\Gamma(p,q)^2\zeta(\gamma/\sigma)(1\pm\sqrt{c/_{\log n}})\right),
$$

where $C>0$ and $C^{\prime}\in[1/_2,1]$ are constants.$

定理二的第一部分告诉我们当图在较小密度$p,q=\Omega(\frac{\log^2n}n)$的条件下如果能够满足$\Gamma(p,q)\zeta(\gamma/_{2\sigma})=\omega\left(\sqrt{\frac{\log n}{n(p+q)}}\right)$那么一层GC的神经网络能够以高概率$1-O(n^{-c})$的情况下实现完美分类。想要理解这一部分的内容，如果我们限制$\Gamma(p,q) = \Omega(1)$可以看到此时选择满足条件$\Gamma(p,q)\zeta(\gamma/_{2\sigma})=\omega\left(\sqrt{\frac{\log n}{n(p+q)}}\right)$的$\gamma$仅仅定理一中不使用图信息时完美匹配所需要的$\gamma$的$\frac{1}{\sqrt[4]{n(p+q)}}$。    
定理二的第二部分表明，在较大的图密度$p,q=\Omega(\frac{\log n}{\sqrt{n}})$下，甚至能够将这个数值改进到$\frac{1}{\sqrt[4]{n}}$。当然这并非表明图的密度越大越好，事实上，当$p,q = \Omega(1)$时，多个GC层的性能甚至比不上单个GC层。
#### Corollary
**Corollary** 2.1. Consider the data model XOR-CSBM$(n,d,\boldsymbol{\mu},\boldsymbol{\nu},\sigma^2,p,q)$ and the network architecture.
 
 1. Assume that $p,q = \Omega(\log^2n/_n)$ $\:and\:consider\:the\:three-layer\:network\:characterized\:by$ part one of Theorem 2, with one graph convolution. For this network, placing the graph
 $convolution\:in\:the\:second\:layer\:(k_{2}=1,k_{3}=0)\:obtains\:the\:same\:results\:as\:placing\:it\:in$ $the$ third layer $(k_2=0,k_3=1).$
2. Assume that $p,q=\Omega(\log n/\sqrt{n}),and$ consider the three-layer network characterized by part two of[Theorem 2] with two graph convolutions. For this network, placing both convolutions in the second layer $(k_{2}=2,k_{3}=0)$ or both of them in the third layer $(k_{2}=0,k_{3}=2)$ $obtains$ the same results as placing one convolution in the second layer and one in the third $layer\left(k_2=1,k_3=1\right).$

推论2.1能够直接由定理2推得，推论二事实上描述了多层网络分类能力的提高取决于卷积算子的数量而不取决于其位置。特别的，在XOR-CSBM数据中将相同数量的卷积放在第二层或第三层的任意组合中，其对分类任务的性能是相似的。


### Proof
这一部分涉及的定理、引理将非常多，在此只列出，而没有精力去记录详细的证明。
#### Pre
列出证明使用的工具：
-  Hoeffding's inequality
-  Chernoff bound
-  Union bound
-  Gaussian concentration
做出基本假设：    
为方便计算同时保证能够展示背后思想的前提下，做出如下假设
$$
\begin{aligned}
&\textbf{Assumption 1. }For\textit{the XOR-GMM data model, the means of the Gaussian mixture are such that} \\
&\langle\boldsymbol{\mu},\boldsymbol{\nu}\rangle=0\mathrm{~}and\left\|\boldsymbol{\mu}\right\|_2=\left\|\boldsymbol{\nu}\right\|_2.
\end{aligned}
$$
同时，证明中用到的符号假设：
- $[x]_+ = RELU(x)$
- $\varphi(x) = sigmoid(x) = \frac{1}{1+e^{-x}}$
- $\hat{v} = \frac{v}{||v||_2}$
- $\gamma = ||\mu - \nu||_2$
- $\gamma' = \gamma /2$
- $\Gamma(p,q) = \frac{|p-q|}{p+q}$
- $\phi(x)$表示标准高斯分布密度函数
- $\Phi(x)$表示标准高斯分布分布函数
- $\Phi_c(x) = 1 - \Phi(x)$
#### Graph
这一小节主要介绍了关于我们设计的图的一些性质，例如度、共同邻居等的集中分布特性。
$$
\begin{aligned}
&\textbf{Proposition A.}\mathbf{1}(\text{Concentration of degrees}).\textit{ Assume that the graph density is }p,q=\Omega(\frac{\log^2n}n).\textit{ Then} \\
& \mathbf{deg}(i)=\frac{n}{2}(p+q)(1\pm o_{n}(1)),\quad\quad\frac{1}{\mathbf{deg}(i)}=\frac{2}{n(p+q)}(1\pm o_{n}(1)),  \\
&\frac1{\mathbf{deg}(i)}\left(\sum_{j\in C_1}a_{ij}-\sum_{j\in C_0}a_{ij}\right)=(2\varepsilon_i-1)\frac{p-q}{p+q}(1+o_n(1)), \\
&\textit{where the error term o}_{n}(1)=O\left(\sqrt{\frac{c}{\log n}}\right).
\end{aligned}
$$
性质1表明节点度高概率在$\frac{n}{2}(p+q)$附近，同时给出一个点同类点邻居与不同类点邻居数量差的估计。
$$
\begin{aligned}
&\textbf{Proposition A.2}\\
&\text{Assume that the graph density is p,q} =\Omega(\frac{\log n}{\sqrt{n}}).\textit{ Then for any constant }c>0\text{, with probability at least }1-2n^{-c}  \\
&|N_i\cap N_j|=\frac n2(p^2+q^2)(1\pm o_n(1)) for\:all\:i\sim j,  \\
&\begin{aligned}|N_i\cap N_j|=npq(1\pm o_n(1))\end{aligned} for\: all\: i \nsim j,  \\
&\text{where the error term}o_{n}(1)=O\left(\sqrt{\frac{c}{\log n}}\right).
\end{aligned}
$$
性质二给出在相对稠密情况下，同类节点间共同邻居和不同类节点间共同邻居的一个数量估计。
$$
\begin{aligned}
&\textbf{Lemma A.3 }\text{(Variance reduction). Denote the event from}\text{Proposition A.l}\text{ to be B. Let }\{\mathbf{X}_i\}_{i\in[n]}\in  \\
&\mathbb{R}^{n\times d}\textit{ be an iid sample of data. For a graph with adjacency matrix A (including self-loops) and a} \\
&\text{fixed integer }K>0,\text{ define }a\text{ K -convolution to be }\tilde{\mathbf{X}}=(\mathbf{D}^{-1}\mathbf{A})^K\mathbf{X}.\textit{ Then we have} \\
&\mathbf{Cov}(\tilde{\mathbf{X}}_i\mid B)=\rho(K)\mathbf{Cov}(\mathbf{X}_i),\text{ where }\rho(K)=\left(\frac{1+o_n(1)}\Delta\right)^{2K}\sum_{j\in[n]}\mathbf{A}^K(i,j)^2. \\
&\textit{Here, }\mathbf{A}^K(i,j)\text{ is the entry in the ith row and jth column of the exponentiated matrix A}^K\textit{ and} \\
&\Delta = \mathbb{E}\mathbf{deg}=\frac{n}{2}(p+q)
\end{aligned}
$$
引理3表明了随着引入卷积层数量$K$增多，$Cov(\tilde{X})$会减小。这表明卷积操作在增加不同节点间特征间的相似性，使其变得难以区分。这也表明了添加更多的卷积层不一定有利于性能提升。
#### Basic Network
这里假定，由于我们的数据服从高斯分布，贝叶斯方法在该类数据上性能表现最优。
$$
\begin{aligned}
&\textbf{Lemma A.4. }Leth(\boldsymbol{x})=\mid\langle\boldsymbol{x},\hat{\boldsymbol{\nu}}\rangle\mid-\mid\langle\boldsymbol{x},\hat{\boldsymbol{\mu}}\rangle\mid\mathrm{for~all~}\boldsymbol{x}\in\mathbb{R}^d\mathrm{~and~}\textit{defıne} \\
&\begin{aligned}\zeta(t)&=t\operatorname{erf}(t)-\frac{1}{\sqrt{\pi}}\left(1-e^{-t^2}\right).\end{aligned} \\
&\text{Then we have} \\
&\left.l.The\text{expectation }\mathbb{E}h(\mathbf{X}_i)=\left\{\begin{matrix}-\sqrt{2}\sigma\zeta(\gamma/_{2\sigma})&i\in C_0\\\sqrt{2}\sigma\zeta(\gamma/_{2\sigma})&i\in C_1\end{matrix}\right.\right.. \\
&\text{2. For any }\gamma,\sigma>0\text{ such that }\gamma=\Omega_n(\sigma)\text{, we have that }\zeta(\frac\gamma\sigma)=\Omega(\frac\gamma\sigma). \\
&\text{3. For any }\gamma,\sigma>0\text{ such that }\gamma=o_n(\sigma)\text{, we have that }\zeta(\frac{\gamma}{\sigma})=\Omega(\frac{\gamma^2}{\sigma^2}).
\end{aligned}
$$
假定贝叶斯分类器形如$h^*(x) = argmax_{b\in\{0,1\}}Pr[y=b|x = \mathscr{x}]$，引理6给出了在XOR-GMM数据集下贝叶斯分类器的准确表达形式
$$
\begin{aligned}
&\textbf{Lemma A.6.} For \:some\: fixed\: \boldsymbol{\mu},\boldsymbol{\nu}\in\mathbb{R}^d\mathrm{~and~}\sigma^2>0,\textit{ the Bayes optimal classiffer, }h^*(\boldsymbol{x}):\mathbb{R}^d\to\\
&\left\{0,1\right\}\textit{for the data model XOR-GMM}(n,d,\boldsymbol{\mu},\boldsymbol{\nu},\sigma^2)\text{ is given by} \\
&h^*(\boldsymbol{x})=1(|\langle\boldsymbol{x},\boldsymbol{\mu}\rangle|<|\langle\boldsymbol{x},\boldsymbol{\nu}\rangle|)=\begin{cases}0&|\langle\boldsymbol{x},\boldsymbol{\mu}\rangle|\geq|\langle\boldsymbol{x},\boldsymbol{\nu}\rangle|\\1&|\langle\boldsymbol{x},\boldsymbol{\mu}\rangle|<|\langle\boldsymbol{x},\boldsymbol{\nu}\rangle|&\end{cases}, \\
&\text{where $\mathbb{1}$ is the indicator function.}
\end{aligned}
$$
$$
\begin{aligned}
&\textbf{Proposition A.7.}\textit{Consider two-layer and three-layer networks of the form described above, without biases (i.e., }\\
&\mathbf{{b}^{(l)} = 0}for \; all \; layers\; l) ,\textit{for parameters} \mathbf{W^{(l)}}  \textit{and some R}\in R^+ as\; follows.\\
&\text{l. For the two-laye} \text{r network,}  \\
&\mathbf{W}(1) =R\left(\hat{\boldsymbol{\mu}}\quad-\hat{\boldsymbol{\mu}}\quad\hat{\boldsymbol{\nu}}\quad-
\hat{\boldsymbol{\nu}}\right), \qquad \boldsymbol{W}^{(2)}=(-1\quad-1\quad1\quad1)^{\top}. \\
&\textit{2. For the three-layer network}\\
&\mathbf{W}^{(1)}=R\left(\hat{\boldsymbol{\mu}}\quad-\hat{\boldsymbol{\mu}}\quad\hat{\boldsymbol{\nu}}\quad-\hat{\boldsymbol{\nu}}\right),\quad\mathbf{W}^{(2)}=\begin{pmatrix}-1&1\\-1&1\\1&-1\\1&-1\end{pmatrix},\quad\mathbf{W}^{(3)}\quad=\begin{pmatrix}1\\-1\end{pmatrix}.
\end{aligned}
$$
性质7给出了2层和3层神经网络框架实现引理6中的贝叶斯分类方法。有必要说明的是，性质7中神经网络给出的输出为取值label = 1的概率，事实上他与引理6里的贝叶斯分类器等效。
#### Network no graph
到目前为止，使用以上的引理可完成定理一的证明。
#### Network with GC
通过向引理7提出的模型中加入GC证得以下结论
$$
\begin{aligned}
&\textbf{Proposition A.8. }F\text{ix. }a\textit{ positive integer d }>0,\mathrm{~}\sigma\mathrm{~}\in\mathrm{~R^+~}\textit{and }\mu,\nu\mathrm{~}\in\mathrm{~R^d.~}\textit{Let }\mathrm{~}\mathrm{(A,X)~}\sim  \\
&\text{ХОВ-СSВМ}(n,d,\boldsymbol{\mu},\boldsymbol{\nu},\sigma^2,p,q).\textit{Defıne $\tilde{\mathbf{X}}$ to be the transformed data after applying a graph como-} \\
&\textit{lution on }\mathbf{X},\text{ i.e., }\tilde{\mathbf{X}}=\mathbf{D}^{-1}\mathbf{A}\mathbf{X}.\textit{ Then in the regine where p},q=\Omega(\frac{\log^2n}n)\text{, with probability at least} \\
&1-1/\text{poly}(n)\textit{ we have that} \\
&\mathbb{E}\tilde{\mathbf{X}}_i=\begin{cases}\dfrac{p\boldsymbol{\mu}+q\boldsymbol{\nu'}}{2(p+q)}\cdot o_n(1)&i\in C_0\\\dfrac{p\boldsymbol{\nu}+q\boldsymbol{\mu}}{2(p+q)}\cdot o_n(1)&i\in C_1\end{cases}. \\
&\text{Hence, the distance betwee} \textit{the means of the convolved data, given by }\frac{p-q}{2(p+q)}\left\|\boldsymbol{\mu}-\boldsymbol{\nu}\right\|_2\cdot o_n(1)  \\
&\textit{diminishes to 0 for n}\to\infty.
\end{aligned}
$$
性质8表明在第一层加入GC是有害的，可以发现，当$n\to \infty$时，经过第一层卷积作用后，节点特征将收敛到0变得无法区分。    

接下来是对定理2的证明，首先通过引理9给出添加一个GC后神经网络输出的表达形式，基于此完成了对定理2第一部分关于添加单个GC的证明。引理10表明添加2个GC
时，对于不同组合，总是有相同的输出形式。基于引理10,可征得定理2第二部分。
$$
\begin{gathered}
\textbf{Lemma A.9. Let }h(\boldsymbol{x})=|\left\langle\boldsymbol{x},\hat{\boldsymbol{\nu}}\right\rangle|-|\left\langle\boldsymbol{x},\hat{\boldsymbol{\mu}}\right\rangle|\textit{for any }x\in\mathbb{R}^d.\text{ Consider the two-layer and three-} \\
\textit{layer networks in}|\textit{Proposition A.7}|\textit{where the weight parameter of the last layer, }W^{(L)},\text{ is scaled by }a \\
\textit{factor of }\xi=\mathrm{sgn}(p-q).\textit{ If a graph comvolution is added to these networks in either the second or the} \\
 \begin{array}{l}third\textit{ layer then for a sample }(\mathbf{A},\mathbf{X})\sim XOR\text{-}CSB\boldsymbol{M}(n,d,\boldsymbol{\mu},\boldsymbol{\nu},\sigma^2,p,q),\textit{the output of the networks}\\for\text{ a point }i\in\left[n\right]is\end{array} \\
\begin{aligned}\hat{y}_i&=\varphi(f_i^{(L)}(\mathbf{X}))=\varphi\left(\frac{R\operatorname{sgn}(p-q)}{\operatorname{deg}(i)}\sum_{j\in[n]}a_{ij}h(\mathbf{X}_j)\right).\end{aligned} 
\end{gathered}
$$
$$
\begin{aligned}
\textbf{Lemma A.10.}
&\textit{Let }h(\boldsymbol{x}):\mathbb{R}^d\to\mathbb{R}=\mid\langle\boldsymbol{x},\hat{\boldsymbol{\nu}}\rangle\mid-\mid\langle\boldsymbol{x},\hat{\boldsymbol{\mu}}\rangle\mid.\textit{ Consider the networks constructed in}\\
&\text{Proposition A.}7\textit{equipped with two graph convolutions in the following combinations:}\\
&1.\textit{ Both convolutions in the second layer of the two-layer network}. \\
&2.\textit{ Both convolutions in the second layer of the three-layer network}. \\
&3.\textit{ One convolution in the second layer and one in the third layer of the three -layer network.} \\
&4.\textit{ Both convolutions in the third layer of the three-layer network}.\\
&Thenfora~sample~(\mathbf{A},\mathbf{X})\sim XOR\cdot CSBM(n,d,\boldsymbol{\mu},\boldsymbol{\nu},\sigma^2,p,q),\textit{the output of the netnorks in all the}\\
&above~described~conbinationsfor~a~point~i\in[n]\mathrm{~is}\\
&\hat{y}_i=\varphi(f_i^{(L)}(\mathbf{X}))=\varphi\left(\frac R{\mathbf{deg}(i)}\sum_{j\in[n]}\tau_{ij}h(\mathbf{X}_j)\right),\mathrm{~where~}\tau_{ij}=\sum_{k\in[n]}\frac{a_{ik}a_{jk}}{\mathbf{deg}(k)}.
\end{aligned}
$$
## Experiments
实验部分较为简单，参考原文章即可。