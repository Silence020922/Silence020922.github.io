---
date: 2024-04-16
title: Ascend C 问题求助
tags:
- Ascend C
description: 无
---
## 问题描述
在对AscendC算子示例AddCustom进行接口泛化时，我的思路为在核函数中获取`input_y`的长度后，对于`yGm`指向超出长度的部分进行约束,重新设计偏移量
```c++
uint32_t y_length = sizeof(y)/sizeof(DTYPE_Y);
        uint32_t offset = this->blockLength * GetBlockIdx();
        uint32_t actualoffset = offset%y_length;
        yGm.SetGlobalBuffer((__gm__ DTYPE_Y*)y + actualoffset, this->blockLength);
```
在样例AddCustom中添加上述代码后，对如下输入大小的数据类型能够测试通过。
- input_x: $\{8,2048\}$
- input_y: $\{1,2048\}$

但在改动后样例AddCustom(rw)中添加上述代码后，对`input_x`, `input_y`大小不一致的输入测试失败。
## 代码
### 对应算子代码获取：
```
链接: https://pan.baidu.com/s/1GMPGL3ynMTS-yWEot9iaGg?pwd=4taj 提取码: 4taj 复制这段内容后打开百度网盘手机App，操作更方便哦 
--来自百度网盘超级会员v3的分享
```
### Acl
如果使用Acl单算子调试，需更改`scripts/gen_data.py`(Dtype,shape), `src/main.cpp`,(Dtype,shape), `scripts/verify_result.py`(Dtype)为对应设置。 



