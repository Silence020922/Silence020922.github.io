---
date: 2024-03-01
title: CUDA编程
tags:
- CUDA
description: 无...
---
# 入门(with C++)
这部分资源来自B站视频，[权双](https://www.bilibili.com/video/BV1sM4y1x7of/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=51a76af86bf4fcc9da32a69c092094ea)，作为入门+快速了解。
## Hello World
```cpp
#include <stdio.h>

__global__ void hello_world2gpu(){
    printf("Hello world, from GPU.\n"); //nvcc不支持cout<<方式输出
}

int main(void){
    hello_world2gpu<<<1,1>>>(); // <<<grid_size,block_size>>>配置线程 线程块数量-单个块线程数量
    cudaDeviceSynchronize(); // 同步函数
    return 0;
}
```

```zsh
nvcc Hello2thread.cu -o Ex1 -arch=compute_61 -code=sm_80
```
`-arch=compute_xx`指定虚拟架构，`-code=sm_xx`指定真实计算能力，实践中保持兼容性的条件下，虚拟架构尽可能小，真实架构尽可能大。    
同时，为保证兼容性，可以指定多组计算能力，例如
```zsh
nvcc Hello2thread.cu -o Ex2_fat -gencode arch=compute_50,code=sm_50 -gencode arch=compute_60,code=sm_60 -gencode arch=compute_70,code=sm_70 -gencode arch=compute_80,code=sm_80
```
生成的可执行文件称为胖二进制文件，注意过多制定计算能力会增加编译时间和可执行文件的大小。
## NVCC即时编译
参考[知乎](https://zhuanlan.zhihu.com/p/432674688)    
大概用于在当前架构下生成更前向的虚拟架构的PTX代码，此时指定的两个计算能力都是虚拟架构的计算能力，且必须一致，例如： 若本人GPU不支持80架构
```zsh
nvcc Hello2thread.cu -o Ex2_fat -gencode arch=compute_50,code=sm_50 -gencode arch=compute_60,code=sm_60 -gencode arch=compute_70,code=sm_70 -gencode arch=compute_80,code=compute_80
```
## CUDA矩阵加法
代码参考[github](https://github.com/sangyc10/CUDA-code/tree/master/3.1lesson)
### CUDA程序框架
- 设置GPU
```cpp
#include <stdio.h> // 头文件

int main(void){
    int iDeviceCount=0;
    cudaError_t cudaStatus = cudaGetDeviceCount(&iDeviceCount); // 获取GPU数量，成功返回cudaSuccess
    if (cudaStatus != cudaSuccess || iDeviceCount == 0){
        printf("No CUDA camptable GPU found! \n");
        exit(-1);
    }
    else{
        printf("The count of GPUs is %d. \n",iDeviceCount);
    }

    int iDev = 0;
    cudaStatus = cudaSetDevice(iDev); // host 设置GPU
    if (cudaStatus != cudaSuccess){
        printf("Fail to set GPU %d for computing. \n",iDev);
        exit(-1);
    }
    else{
        printf("Set GPU successfully. \n");
    }
    return 0;
}
```
### 内存管理
参考[菜鸟教程](https://www.runoob.com/cprogramming/c-memory-management.html)
### 自定义设备函数
- 设备函数使用`__device__`修饰
- 核函数使用`__global__`函数修饰，一般由主机调用，设备执行。(也存在核函数中调用核函数的现象，此时由设备调用)
- `__global__`不能和`__host__`，`__device__`同时使用。
- 主机函数使用`__host__`修饰，对于主机端的函数，该修饰符可省略。
- 若函数需在主机和设备中运行，可使用`__host__`, `__device__`同时修饰该函数，此时编译器会针对主机和设备分别编译该函数，减少冗余代码。
## CUDA错误检查
CUDA错误会发生在两个阶段——编译时错误，运行时错误。编译时发生错误编译器会将错误所在位置进行返回。
### Runtime API 错误
参考[Nvida官方文档](https://docs.nvidia.com/cuda/cuda-runtime-api/group__CUDART__TYPES.html#group__CUDART__TYPES_1g3f51e3575c2178246db0a94a430e0038)
### 错误检查函数
`cudaGetErrorName`: 获取错误代码对应的错误名称，返回 `char *`类型    
`cudaGetErrorString`: 获取错误代码的描述信息，返回`char *`类型
```cpp
#include <stdio.h>

cudaError_t ErrorCheck(cudaError_t error_code, const char* filename, int linenum){
    if (error_code != cudaSuccess){
        printf("Cuda_Error:\ncode:%d, name:%s, description:%s\n file:%s, line:%d\n ",
        error_code,cudaGetErrorName(error_code),cudaGetErrorString(error_code),filename,linenum);
    }
    return error_code;
}
```
### 检查核函数
错误检查函数无法捕捉调用核函数相关错误，由于`__global__ void`，核函数不会返回错误值，可使用如下代码捕捉核函数中的可能错误。
```c++
ErrorCheck(cudaGetLastError(),__FILE__,__LINE__);// 返回上一条cuda_Error
ErrorCheck(cudaDeviceSynchronize(),__FILE__,__LINE__); //由于CPU与GPU异步，需在此加入一个同步函数，等待核函数运行完成。
```
## CUDA记时
### 事件记时
程序执行时间计时，是CUDA程序执行性能的重要表现，使用[事件记时](https://developer.download.nvidia.cn/compute/DevZone/docs/html/C/doc/html/group__CUDART__EVENT.html)方式。框架如下
```c++
cudaEvent_t start, stop; // 定义用来记时的CUDA事件变量
ErrorCheck(cudaEventCreate(&start), __FILE__, __LINE__); //初始化事件
ErrorCheck(cudaEventCreate(&stop), __FILE__, __LINE__);
ErrorCheck(cudaEventRecord(start), __FILE__, __LINE__); // 记录代表时间开始的事件
cudaEventQuery(start);	//此处不可用错误检测函数，cudaErrorNotReady

addFromGPU<<<grid, block>>>(fpDevice_A, fpDevice_B, fpDevice_C, iElemCount);    // 核函数，需要记时的代码

ErrorCheck(cudaEventRecord(stop), __FILE__, __LINE__); // 记录代表时间结束的事件
ErrorCheck(cudaEventSynchronize(stop), __FILE__, __LINE__);
float elapsed_time;
ErrorCheck(cudaEventElapsedTime(&elapsed_time, start, stop), __FILE__, __LINE__); //计算两个work间的elapsed time
// printf("Time = %g ms.\n", elapsed_time);

if (repeat > 0) // 不计入第0次的情况，这是由于第一次调用核函数往往时间更多
{
    t_sum += elapsed_time;
}

ErrorCheck(cudaEventDestroy(start), __FILE__, __LINE__); // 销毁前面定义的时间类型变量
ErrorCheck(cudaEventDestroy(stop), __FILE__, __LINE__);
```
### nvprof 性能刨析工具
`nvprof`是一个可执行文件，执行方式为: `nvprof ./exe_name`。    
:::tip
目前较新的GPU可能不再支持nvprof，可替换为Nsight System，Arch系统下包含在cuda-tools包中，执行nsys进行分析。
:::
## 运行时GPU信息的查询
