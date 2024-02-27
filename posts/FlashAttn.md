---
date: 2024-02-21
title: FlashAttention
tags:
- LLM
description: 加速transormer模型训练速度，以便应用到较长上下文中。
---
参考[*FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness*](https://arxiv.org/abs/2205.14135)，事实上本文仅关心训练速度，并未在`Attention`计算上进行操作。
## 面临问题
`Transformer` 框架由于核心组件`self-attention`对耗时及内存占用上都是序列长度$N^2$复杂度，很难将其应用到较长的上下文中，`FlashAttn`使得`Transformer`能够建模长序列，这带来以下几个好处：
- 扩展功能： 使得NLP不仅能够处理段落，同时可以理解书籍、说明书等。
- 逼近现实： 例如CV上更高的分辨率意味着更好、更强的洞察力
- 开拓新领域： audio.video,medical imaging data
## GPU
    补充GPU工作原理
计算过程中，首先将HBM中的数据加载和写入到SRAM中，在SRAM中完成计算将数据传回并写入HBM。
## 解决思路
### 关键在减少对HBM的读写
现有的方法(例如稀疏逼近，低秩逼近或者是它们的结合)着眼于减少FLOPS开销，而这些改进下的wall-clock speed 较原始框架并未有明显改进，这暗示了FLOPS并不是通常情况下的瓶颈。传统的`Self-Attn`过程需要重复的从HBM中进行R\W，[*Data Movement Is All You Need: A Case Study on Optimizing Transformers*](https://arxiv.org/abs/2007.00072)一文中也说明了真正的bound在于Data move。    
本文 **Fig1 right** 中展示dropout mask甚至花费了更长的时间，这非常反常理，由于Mask阶段设计小浮点数的计算，但事实上过程中的读写量比矩阵大得多，这也反映了注意力组件的bound主要由于数据的R\W。    
### 如何减少HBM的读写
本文主要方法为分块计算，依次将块加载到SRAM中进行运算并将分块运算的结果传回HBM中进行组合。此方法需要解决两个问题：
- 没有完全 input 的情况下如何执行`softmax`操作
- 是否存在更小的向后传递的中间值替代传统方法传回的$S$, $P$($O(N^2)$)用于后续梯度的计算。

解决上述问题主要采用了两个方法`Tiling`,`Recomputation`。    
- Tiling: 在`Online softmax`的基础上将 Softmax 计算的中间产物与 Attn 结合，保证了分块计算的可行性。
- Recomputation: 不存储前向传输的注意力矩阵，需要时在SRAM中重新计算。
### 实践
关键在如何重写`CUDA`，使得能够控制在什么时刻 load 什么东西。
## 实验成果
### Speed up
- **Fig2**: 对比传统的`Attn`，尽管`FlashAttn`在增加计算(如后向传播中的重新计算)，但HBM的读写仅为传统方法的$\frac{1}{9}$，速度上提升了6倍。
- **E.5**: 在不同的GPU下，不同的组件(是否含有Mask,Dropout)，不同序列长度的所有情况下，`FlashAttention`较基准情况加速$2-4$倍。
- **4.1 BERT**: 达到一定精度所需要的训练时间更短。比创下Nvida记录的MLPerf 1.1 加速了15%。
- **GPT-2**: 在GPT-2 small 和 GPT-2 midium 数据集上与Huggingface 和 Megatron-LM 对比，保持同等精度且速度较Huggingface为$2.0 - 3.5 \times$。
### Longer Sequences
- **4.2 LM with Long Context**: 通常增长上下文的长度后训练速度会变慢但可以得到一个更好的模型(**Table 5** 展示了在更长的上下文训练的模型具备更高的分类精度)。列表展示了`FlashAttn`在$4k$文本长度的情况下具备比$1k$文本长度下`Megatron-LM`更快的训练速度，更长的序列代表模型更高的质量。
- 第一个解决`Path-X`的`Transformer`。

 
