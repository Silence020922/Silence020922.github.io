---
date: 2024-04-18
title: GNN can recover the hidden features solely from the graph structure 
tags:
- GNN
description: 9-th, GNN能仅仅从图结构中恢复图内隐藏的特征信息，但现有的GNN框架还不能很好的完成特征恢复的任务...
---
## Introduction
本文使用空间上的信息传递模型。
### 特征恢复任务
本文提到了一个新的任务，特征恢复任务。图结构大多在某种规则下根据图内特征生成，例如社交网络中节点特征可能为人的年龄、收入水平、性别等，在特征相近更有可能建立社交关系的规则下产生社交网络;再例如，对于文章主题、作者等特征，在某种规则下产生引文网络。    
特征恢复任务要求，当将图中的特征剔除，仅保留原始图，能否找到模型在不直接和间接接受特征的前提下，对隐藏掉的特征进行修复。
### 特征恢复任务的衡量标准
设$Z$表示真实特征，$\hat{Z}$代表推理结果，若直接采用$||Z - \hat{Z}||$，由于对特征的刚性变化(例如旋转，平移)并不会对生成的图结构产生影响，所以推理结果与真实特征可能会相差一个刚性变化，不利于正确的判断结果的优劣，这里使用新的度量标准(正交普鲁克距离)
$$
d_G(X,Y) = \min_{p\in R^{d \times d}, P^TP = I_d} \frac{1}{n} ||C_nX-C_nYP||^2_F
$$
其中，$C_n = (I_n - \frac{1}{n} 1_n 1_n^T)$，上述距离事实上首先对$X,Y$进行了平移，中心对齐原点，之后找到旋转过程中，$X,Y$之间的最小距离。
### 早期观点
- GNN通过递归聚合周围邻居的特征，进行平滑，使得含有噪音的特征转化为无噪特征。
- 在GNN中，节点特征的重要程度远大于图结构信息，如果节点特征不包含任何有效信息，GNN无论如何聚合邻居信息都无法得到有意义的特征嵌入。
### 本文观点及主要贡献
- GNN能够从图结构信息中恢复图特征，从而能够利用图特征和图结构信息完成工作。
- 现有的框架在恢复隐藏特征上做的不够好。
## 特征恢复面临的挑战
特征的复原当然是面临挑战的，由于图结构带来的距离并不能够代表隐藏特征的距离，举一例：    
对于KNN图
![](https://arxiv.org/html/2301.10956v4/x2.png)
表现在图结构上，$A,B$之间将经过21跳，$A,C$之间则是18跳，在跳数上，$A,C$距离更近一些，但实际上从特征距离上看，$A,B$才是更近的节点对。而很多传统上的点嵌入方法基于跳数上相近的点他们的嵌入特征更加相似，这显然不利于发掘隐藏特征。    
如果图结构能够基于$||z_v - z_u||$定义$(u,v)$之间连边的距离，那么GNN从输入图结构习得的结果与事实是一致的，但往往我们只能利用原始图，而图内的隐藏节点的信息无法获得，例如，社交网络中，出于对个人隐私的保护，人与人之间定量的亲密程度是难以衡量的，获取的信息只有原始图中的距离结构。    
上面的论述也可以发现，使用跳数衡量距离是不完备的，由于图局部的稀疏性不同，同样的跳数反映的距离也大不相同，传统想法中，可以使用点的度衡量局部的稀疏程度，但很遗憾，这是错误的，正如上文展示的KNN图，他的每个节点的度都是$K$，这无法反应图的稀疏程度。这也说明了局部统计特性难以估计整体的稀疏性，本文提出利用随机游走可以发掘图的稀疏性信息。
## 主要理论成果
### 假设前提
- 图足够大
- 隐藏特征的域$\mathscr{Z}$是凸紧的，且具有平滑边界
- 每个节点的原始特征是从$p(\mathscr{z})$中i.i.d采样的
- 图是类似于使用增量节点的方式生成的，即从一个节点开始迭代，每次向图中添加一个节点，并有条件地将该节点与图中某些其他节点进行连接
- 每次迭代都对应一个阈值函数$s_n(\mathscr{z})$，它指示第$n-1$次迭代后（此时图中有$n$个节点）节点$v$存在指向其他节点的有向边的条件。当节点$v$和$u$满足欧氏距离小于该阈值$||\mathscr{z}_v-\mathscr{z}_u|| < s_n(\mathscr{z_v})$时存在$v$指向$u$的边。
- $p(\mathscr{z})$是正的，可微的，且$\triangledown log(p(\mathscr{z}))$有界
- 以及一些其他用于理论分析的假设
### 主要理论
定理 4.1 和 4.2 证明了 GNN 是阈值函数的一致估计量，即 GNN 有能力恢复原始图数据的阈值函数（前提是该函数存在），且只需要有限数目的拟合函数即可完成：     
**定理4.1** 在上一节的假设和构造特征下，对单个图$G_n$，存在参数$\theta_1,\theta_2,...$使 GNN 的输出几乎必然收敛至阈值函数$s(\mathscr{z_v})$：
$$
Pr[f(v,G_n,X;\theta_n) \rightarrow^{n \rightarrow \infty}s(z_v)] = 1
$$ 
**证明**证明过程为构造性证明，先证明 GNN 能够模拟在图上的随机游走，等到随机游走达到平稳时，GNN 可以重构阈值，因为它被视为随机游走的尺度
**定理4.2**一个5层的GNN可满足4.1。    

定理 4.4 和 4.5 证明了 GNN 有能力恢复原始图的特征，且只需要有限数目的拟合函数即可完成。
**定理4.4**在上一节的假设和构造特征下，对任意$\epsilon,\delta>0$，存在$m$和参数$\theta_1,\theta_2...$使 GNN 的输出特征矩阵$\hat{\mathbf{Z}}_{\theta_n} = [f(v_1,G_n,X;\theta_n),...,f(v_n,G_n,X;\theta_n)]^T$以大概率收敛至真实特征$\mathbf{Z}$：
$$
Pr[\limsup_{n \rightarrow \infty} d_G(\hat{\mathbf{Z}}_{\theta_n},\mathbf{Z} < \epsilon)]>1-\delta
$$ 
**定理4.5**一个 16 层的 GNN 可满足 Theorem 4.4。
## 实验实证
### 实验设计
作者使用理论证明过程中构造出的GNN模型进行了实验，使用提出的正交普鲁克距离作为 loss。实验在合成数据集 Two-Moon 和现实数据集 Adult 上进行，实验方法分为transductive setting 和 inductive setting：前者的训练节点和评估节点出自同一个graph，使用70%的数据作为训练集，其余数据作为测试集，而后者使用两个不同的数据集分别进行训练和评估，探究同样的生成规律下在小规模图上进行的实验结果能否推广到大规模图中进行应用。
### 实验结果
#### transductive setting
![](https://arxiv.org/html/2301.10956v4/x3.png)
- 使用tSNE可视化工具观察Input图像的聚类结果可以看到，原始的Input Graph中不包含Ground Truth中的信息，这给恢复工作带来了挑战
- 可以看到现有的GNN模型(GCN,GAT)能够根据原始特征找到群落结构，但在特征恢复的认为中的表现比较平庸
- 文中提出的模型能够成功恢复隐藏特征，取得较低的$d_G$值。
#### inductive setting
![](https://arxiv.org/html/2301.10956v4/x4.png)
数据生成规律相同的图中，在小图上训练的模型在大图上仍然能够得到很好的效果。
#### 对下游任务的支持
丢弃原始数据中的特征标签，使用$x^{syn}$作为新的标签进行替代，分别使用$x^{syn}$和文中提到的模型习得的$z^{v}$作为输入，输入到下游任务的分类器中进行节点分类任务。
||Cora|CiteSeer|PubMed|Coauthor CS|Coauthor Physics|Computers|Photo
|---|---|---|---|---|---|---|---|
|Baseline $x^{syn}$|0.122|0.231|0.355|0.066|0.307|0.185|0.207
|Recovered Feature $z^v$|0.671|0.640|0.653|0.492|0.745|0.528|0.566
可以看到，这些 feature 表现得也还不错，说明这一方法预训练的模型有望用于给无属性图生成更加有效的特征。
## 总结
传统的观念认为，GNN 不能捕获图的全局特征。因为信息的平滑滤波，多层 GNN 的堆叠以学习更广的感受野的策略都由于过平滑问题而失败了。不过，既然 GNN 只能学习到局部的拓扑结构，那为何能够恢复整体的数据流形？浅层 GNN 真的不能捕获图的全局特征吗？另外，基于图的拓扑结构构造的特征真的完全是冗余的吗？如果用它们强化图的原始特征，会导致 GNN 的学习能力发生怎样的变化？这些问题，只能留给后续的理论和经验工作回答了。