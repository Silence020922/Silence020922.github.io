---
date: 2023-12-04
title: GCN
tags:
- GNN
- GCN
description: 4-th,参考SEMI-surperised classification with graph convolutional networks
---
# GCN
## 从ChetNet到GCN
在ChebNet的基础上：
$$
g_{\theta} \ast X = \sum_{k=0}^K \theta_k T_k(\widetilde{L})X\\
\widetilde{L} = \frac{2L}{\lambda_{max}}
$$
令$K$ = 2同时取$\lambda_{max} \approx 2$，得到
$$
g_\theta \ast x \approx \theta_0 x + \theta_1(L-I)x = \theta_0 x+\theta_1 D^{-\frac{1}{2}}AD^{-\frac{1}{2}}x
$$
令$\theta = \theta_0 = -\theta_1$，得到
$$
g_\theta \ast x = \theta(I + D^{-\frac{1}{2}}AD^{-\frac{1}{2}})x
$$
此时数值稳定性差，采用重整化技巧，记$\widetilde{A} = A+I$，$\widetilde{D} = D+I$，同时加入线性变化矩阵$W$增强模型表达能力，得到GCN最终模型
$$
H = \widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}XW
$$
## 优势
- 再次降低了参数数量，缓解了具有较宽点度分布的图过拟合问题。
- 允许建立更深层的模型，事实上[Wu et al.,2019](https://proceedings.mlr.press/v97/wu19e.html)证明了叠加$K$层的$GCN$近似于一个固定系数$\Theta$的$K$阶滤波器。
- 有利于最小化每层的操作。
## 仍然存在的问题
- 事实上，GCN通常情况下是shallow的，一般仅叠加2～3层。显然这并不利于模型有效的聚合高阶邻居的特性。这是由于，当GCN层数过高时，会发生过平滑(over smoothing)现象。过平滑指的是随着layer增加，GCN学到的表示将会收敛到一个确切的值，这将使得所有点习得的最终特征无法区分。
- 论文本身给到了一种使用残差连接(residual connection)将$l+1$层的输出$H^{(l+1)}=\widetilde{D}^{-\frac{1}{2}}\widetilde{A}\widetilde{D}^{-\frac{1}{2}}$与上一层状态$H^{(l)}$连接起来，遗憾的是可以证明这种方法只能减缓其收敛速度，并不能从根本上解决过平滑的事情。
## GCN试验结果验证
### 说明
- Code来自[github](https://github.com/tkipf/gcn)
- Arch linux 6.7.3-arch1-2
- GPU：GeForce RTX 4060 Max-Q / Mobile
- CPU：Ryzen 9 7940H w/ Radeon 780M Graphics (16)
- 结果呈现100次重复实验下算术平均。
### 实验
```zsh
python train.py --hidden1=16 --dropout=0.5 --weight_decay=5e-4 --dataset=cora
python train.py --hidden1=16 --dropout=0.5 --weight_decay=5e-4 --dataset=citeseer
python train.py --hidden1=16 --dropout=0.5 --weight_decay=5e-4 --dataset=pubmed
```
### 结果
GCN*为个人复现代码，详见[github](https://github.com/Silence020922/Day_learn/tree/main/GCN)    
Method|Citeseer|Cora|Pumbed
------|-------|----|-------
GCN(paper)|70.3|81.5|79.0
GCN(rand.splits paper)|67.9 $\pm$ 0.5|80.1 $\pm$ 0.5|78.9 $\pm$ 0.7
GCN|70.9(2.40)|81.6(1.91)|79.1(6.31)|
GCN(rand.splits)|69.6(2.45)|78.5(1.90)|78.0(6.66)
GCN*|70.8(2.15)|81.5(1.90)|79.1(3.53)
GCN*(rand.splits)|70.4(2.11)|78.6(1.90)|81.7(3.43)

