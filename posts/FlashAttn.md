---
date: 2024-02-21
title: FlashAttention
tags:
- LLM
description: 加速transormer模型训练速度，以便应用到较长上下文中。
---
参考[*FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness*](https://arxiv.org/abs/2205.14135)。    
03-16更新:对思路、原理进行详细的展开描述。
## 面临问题
`Transformer` 框架由于核心组件`self-attention`对耗时及内存占用上都是序列长度$N^2$复杂度，很难将其应用到较长的上下文中，`FlashAttn`使得`Transformer`能够建模长序列，这带来以下几个好处：
- 扩展功能： 使得NLP不仅能够处理段落，同时可以理解书籍、说明书等。
- 逼近现实： 例如CV上更高的分辨率意味着更好、更强的洞察力
- 开拓新领域： audio.video,medical imaging data
## GPU
:::tip
补充GPU工作原理
:::
计算过程中，首先将HBM中的数据加载和写入到SRAM中，在SRAM中完成计算将数据传回并写入HBM。这里SRAM理解为`L1 cache`和`shared memory`即可。
## 贡献
- 节省显存：减少了额外数据的存储消耗。
- 精准注意力：在使用稀疏计算时，能够保证结果的准确性。(未更新)
- 设计计算块：Tilling, extra statistics, combine the results。
## 思路
- 尽量使用SRAM，单次传输占满 $\Rightarrow$ 分块计算
- 减少内存搬运次数 $\Rightarrow$ 融合计算
## Forward
### Attn 横向对比
对比标准Attn，Flash Attn在前向传播中使用$l, m$代替了中间值$P$，降低了额外内存的占用，同时，使用融合运算的技巧，减少了数据搬运的需求。
#### 标准Attn
![](https://pica.zhimg.com/v2-21c3f5bfb9d21d4f8b775da77410ddbf_r.jpg?source=1def8aca)    
可以看到，在整个过程中，对SRAM
- 读入： Q, K, S, P, V
- 写出： S, P, O
- 数据搬运量：$4N^2+4Nd$, $O(N^2+Nd)$
- 额外内存消耗：$O(N^2)$
- 运算复杂度：$O(N^2d)$
#### Flash Attn
![](https://picx.zhimg.com/v2-7d576eafb486e7561058e596bb5b79c5_r.jpg?source=1def8aca)    
- 读入：
  - 外循环： K, V
  - 内循环：每次内循环读入一个完整的Q，为$T_r Nd$
- 写出：O, m, l
- 数据搬运量：$O(N^2 d^2 M^{-1})$ $(M >> d^2)$
- 额外内存消耗：$O(N)$
- 运算复杂度：$O(N^2d)$
### 主要思路
主要原则：充分利用`SRAM`高速计算能力，保证每次数据传输能够填满`SRAM`。根据`SRAM-size`(假定为$M$)，设计$Q$分块大小$B_c = d \wedge \lceil \frac{M}{4d} \rceil$，设计$K, V$的分块大小$B_r = \lceil \frac{M}{4d} \rceil$。对$Q \in  R^{N \times d}$，将其分大小为$B_r \times d$的若干块，对$K,V$同样进行分块。    
事实上，观察`Algorithm1`可以发现，`SRAM`中常驻的变量为$K_j, V_j ,Q_i ,O_i$，大小分别为$B_c \times d+B_c \times d+B_r \times d+B_r \times B_c = \frac{M}{2}+B_r \times (B_c+d)$，注意到，若$d =  \lceil \frac{M}{4d} \rceil$, 此时他们的内存加和恰好为`SRAM`的内存大小$M$。这就保证了我们每次循环能够充分利用`SRAM`的内存空间，实现高速计算。    
### 分块计算面临问题
- 例如，假设$Q = \left [ \begin{matrix}Q_1 \\Q_2 \\\end{matrix} \right]$,$K =\left [ \begin{matrix} K_1\\K_2 \\\end{matrix} \right ]$, 则根据$S = QK^T$得到$\left [ \begin{matrix}Q_1 \\Q_2 \\\end{matrix} \right]\left [ \begin{matrix}K_1^T \; K_2^T \\\end{matrix} \right] = \left [ \begin{matrix}S_{11} \; S_{12}\\S_{21} \; S_{22} \\\end{matrix} \right]$。    
由于`softmax`需对整行数据执行操作，此时，分块后的每次循环中，不完全的`input`(真正的并行发生在串接*concatenated*上)对`softmax`操作带来了挑战。
- $O = PV$，显然$O$对$P$有依赖，标准情况下需要待$P$计算完成后返回到`HBM`后重载求解$O$，这导致了额外的显存消耗和数据传输。
### 问题解决
#### Safe-softmax
当数据值很大时，对于`FP-16`数据类型，$exp$可能会超出数值有效范围，故采用`safe-softmax`，对于$x \in R^B$
1. $m(x) = max(x_i)$
2. $f(x) = [e^{x_1 - m(x)}, ... , e^{x_B - m(x)}],l(x) = \sum_i f(x)_i$
3. $softmax(x) = \frac{f(x)}{l(x)}$

考虑对1,2进行融合，使得2步$l(x)$不再对$m(x)$产生依赖，数学上，需要获得关于$l(x)$的递推式。考虑假如$x^1, x^2 \in R^B$
$$
m(x) = m([x^1\;x^2]) = max(m(x^1),m(x^2))
$$
$$
f(x) = [e^{m(x^1) - m(x)}f(x^1),e^{m(x^2)-m(x)}f(x^2)]
$$
$$
\begin{equation}
l(x) = e^{m(x^1) - m(x)}l(x^1) + e^{m(x^2)-m(x)}l(x^2)
\end{equation}
$$
注意：这部分对应算法的第10到11行。
#### O = PV
由于最终需要的结果为$O$，而计算$O$依赖于整个$P$，那么能否像处理`softmax`一样改为递推式，使得每一个循环产生的$P_i$无需写出重载，在`SRAM`中完成对$O_i$的计算，并更新$O$？    
考虑在外循环为$j$时，此时`SRAM`中得到的数据有$m^j = rowmax(S_{:,:j}) \in R^N$，$l^j = rowsum(exp(S_{:,:j} - m^j))$, $O^{j} = P_{:,:j}V_{:,:j} \in R^{N \times d}$。其中，$S_{:,:j}$代表在列上截断。    
则$j+1$循环，更新$m^{j+1} = max(m^j,\tilde{m}) = rowmax(S_{:,:j+1})$, $l^{j+1} = e^{m^j - m^{j+1}}l^j + e^{\tilde{m} - m^{j+1}}\tilde{l} = rowsom(exp(S_{:,:j+1} - m^{j+1}))$。    
$$
\begin{align}
O^{j+1} &= P_{:,:j+1}V_{:,:j+1}\\
&=softmax(S_{:,:j+1})V_{:,:j+1}\\
&=diag^{-1}l^{j+1}[exp([S_{:,:j},S_{:,j+1} - m^{j+1}])]\left [ \begin{matrix} V_{:,:j} \\ V_{:,j+1} \end{matrix} \right ]\\
&= diag^{-1}l^{j+1}[e^{-m^{j+1}}e^{S_{:,:j}}V^{:,:j} + e^{S_{:,j+1} - m^{j+1}}V_{:,j+1}]\\
&= diag^{-1}(l^{j+1})[diag(l^j)e^{m^j - m^{j+1}}O^j +e^{S_{:,j+1} - m^{j+1}}V_{:,j+1}]\\
& = diag^{-1}(l^{j+1})[diag(l^j)e^{m^j - m^{j+1}}O^j + e^{\tilde{m}-m^{j+1}}e^{S_{:,j+1} - \tilde{m}}V_{:,j+1}]\\
& = diag^{-1}(l^{j+1})[diag(l^j)e^{m^j - m^{j+1}}O^j + e^{\tilde{m}-m^{j+1}}\tilde{P}_{:,j+1}V_{:,j+1}]
\end{align}
$$
注意：
- (5)到(6)：凑$O^j = diag^{-1}(l^j) exp[S_{:,:j}-m^j] V_{:,:j}$
- (6)到(7)：上式包含$S_{:,j+1}$，计算过程绕不开$P$，故使用$P$替代，使得$S$可被释放。
- 这部分对应算法第12行
## Backward
如果不清楚基本的标量对向量，`softmax`求导，请参考这两篇文章[CSDN](https://blog.csdn.net/weixin_43185909/article/details/124922364), [blog](https://www.cnblogs.com/wuliytTaotao/p/10787510.html)。
### 横向对比
可以看到，在`Backward`过程，`FlashAttn`减少了数据搬运，增加了计算量(重计算)，由于此时主要为`Mem-bound`，故有利于性能提升。
#### 标准 Attn
![](https://pic1.zhimg.com/v2-36eadc31074e8040db6e53da6c8eecb4_r.jpg?source=1def8aca)
- HBM：Q, K, V, O, S, P
- 读入：P,dO,V,P,dP,dS,K,dS,Q
- 写出：dV,dP,dS,dQ,dK
#### Flash Attn
![](https://pic1.zhimg.com/v2-a8593fdc6bbadc744d4f0571bc0acddb_r.jpg?source=1def8aca)
- HBM：m,l,Q,K,V,O,dO
- 重计算：对应算法11到15行。    
这里采用重计算的方式，即不直接搬运$P$，而是在反向传递过程中，经由$S = QK^T$得到$S$后结合$l,m$得到$P$。
#### Backward 过程分块梯度传递
![](https://picx.zhimg.com/v2-baebd05e8ddc5652f0df6cbc1f41096a_r.jpg?source=1def8aca)
- V：对应算法16行    
当外循环为0时，$V_0$与$P_{00},P_{10},P_{20}$相乘得到$O_0,O_1,O_2$。则$dV_0 = (P_{00}^T)dO_0 + (P_{10}^T)dO_1 + (P_{20}^T)dO_2$，进而
$$
\begin{equation}
dV_j = \sum_i (P_{ij}dO_j)
\end{equation}
$$
- P：对应算法17到18行    
对于$P_{ij}$，在外循环为$j$时仅与$V_j$有关，内循环为$i$与$O_i$有关
$$
\begin{equation}
dP_{ij} = dO_i V_j^T
\end{equation}
$$
- S：对应算法19到20行    
  - 第一个等式为对softmax求导
  - 修改为点乘是为了扩展到块(多行)
设$s_i,p_i,o_i$为$S,P,O$的某一行，注意，不表示分块。    
$$
\begin{align*}
ds_i &= dp_i(diag(p_i) - p_i^Tp_i)\\
&=dp_i diag(p_i) - dp_i p_i^T p_i\\
&=dp_i diag(p_i)-do_i V^T p_i^T p_i\\
&= dp_i diag(p_i) - do_io_i^T p_i\\
&=p_i \cdot dp_i - p_i\cdot rowsum(do_i \cdot o_i)\\
&=p_i \cdot [dp_i -rowsum(do_i \cdot o_i)]
\end{align*}
$$
则最终
$$
\begin{equation}
dS_{ij} = P_{ij} \cdot [dP_{ij} - rowsum(do_i \cdot o_i)]
\end{equation}
$$
- Q：对应算法21行
$S = QK^T$, 对于$Q_i$，他与$S_{ij}$有关，与$K_j$有关。则
$$
\begin{equation}
dQ_i = \sum_j dS_{ij}K_j
\end{equation}
$$
- K：对应算法22行
对于外循环$j$，$K_j$与$S_{ij}$有关，与$O_i$有关，则
$$
\begin{equation}
dK_j = \sum_i dS_{ij}^T Q_i
\end{equation}
$$
## 实验成果
### Speed up
- **Fig2**: 对比传统的`Attn`，尽管`FlashAttn`在增加计算(如后向传播中的重新计算)，但HBM的读写仅为传统方法的$\frac{1}{9}$，速度上提升了6倍。
- **E.5**: 在不同的GPU下，不同的组件(是否含有Mask,Dropout)，不同序列长度的所有情况下，`FlashAttention`较基准情况加速$2-4$倍。
- **4.1 BERT**: 达到一定精度所需要的训练时间更短。比创下Nvida记录的MLPerf 1.1 加速了15%。
- **GPT-2**: 在GPT-2 small 和 GPT-2 midium 数据集上与Huggingface 和 Megatron-LM 对比，保持同等精度且速度较Huggingface为$2.0 - 3.5 \times$。
### Longer Sequences
- **4.2 LM with Long Context**: 通常增长上下文的长度后训练速度会变慢但可以得到一个更好的模型(**Table 5** 展示了在更长的上下文训练的模型具备更高的分类精度)。列表展示了`FlashAttn`在$4k$文本长度的情况下具备比$1k$文本长度下`Megatron-LM`更快的训练速度，更长的序列代表模型更高的质量。
- 第一个解决`Path-X`的`Transformer`。

 
