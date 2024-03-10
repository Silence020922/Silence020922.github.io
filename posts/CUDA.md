---
date: 2024-03-01
title: CUDA编程
tags:
- CUDA
description: 无...
---
# 入门(with C++)  
参考[Nvida-zh](https://developer.nvidia.cn/cuda-gpus#collapseOne)了解支持CUDA的Nvida GPU型号。
## Hello World
核函数使用`__global__`进行修饰，其返回类型必须是`void`类型。在核函数中可以使用`return`关键字但不会返回任何值。核函数无法成为一个类的成员，通常情况下，使用一个包装函数对核函数进行调用，将包装函数定义为类的成员。
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
:::tip
注意网格与线程块大小具有限制，通常，网格大小在$x,y,z$上最大允许$2^{31} - 1$, 65535, 65535。线程块大小在$x,y,z$分别为1024, 1024, 1024且总的线程块大小不超过1024。
:::
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
查询熟知自身GPU性各项能才能高效进行CUDA程序开发，参考[Nvida doc](https://developer.download.nvidia.cn/compute/DevZone/docs/html/C/doc/html/group__CUDART__DEVICE.html)
### GPU性能评价指标
- 浮点数运算峰值，FLOPS
- GPU内存、带宽。
### 运行时API查询GPU信息
GPU硬件知识参考[知乎](https://zhuanlan.zhihu.com/p/462191421)，`prop`结构体中包含的信息参考[Nvida](https://developer.download.nvidia.cn/compute/DevZone/docs/html/C/doc/html/group__CUDART__DEVICE_g5aa4f47938af8276f08074d09b7d520c.html#g5aa4f47938af8276f08074d09b7d520c)
```c++
int device_id = 0; // 设置设备ID
ErrorCheck(cudaSetDevice(device_id), __FILE__, __LINE__); // 设置使用的GPU

cudaDeviceProp prop; // 结构体，存储GPU相关属性
ErrorCheck(cudaGetDeviceProperties(&prop, device_id), __FILE__, __LINE__);
```
### 查询GPU计算核心数量
无运行时API可直接查询，根据其主版本号，次版本号及SM数量，使用下面函数可计算
```c++
#include <stdio.h>
#include "./tools/setDevice.cuh"

int getSPcores(cudaDeviceProp devProp)
{  
    int cores = 0;
    int mp = devProp.multiProcessorCount;
    switch (devProp.major){
     case 2: // Fermi
      if (devProp.minor == 1) cores = mp * 48;
      else cores = mp * 32;
      break;
     case 3: // Kepler
      cores = mp * 192;
      break;
     case 5: // Maxwell
      cores = mp * 128;
      break;
     case 6: // Pascal
      if ((devProp.minor == 1) || (devProp.minor == 2)) cores = mp * 128;
      else if (devProp.minor == 0) cores = mp * 64;
      else printf("Unknown device type\n");
      break;
     case 7: // Volta and Turing
      if ((devProp.minor == 0) || (devProp.minor == 5)) cores = mp * 64;
      else printf("Unknown device type\n");
      break;
     case 8: // Ampere
      if (devProp.minor == 0) cores = mp * 64;
      else if (devProp.minor == 6) cores = mp * 128;
      else if (devProp.minor == 9) cores = mp * 128; // ada lovelace
      else printf("Unknown device type\n");
      break;
     case 9: // Hopper
      if (devProp.minor == 0) cores = mp * 128;
      else printf("Unknown device type\n");
      break;
     default:
      printf("Unknown device type\n"); 
      break;
      }
    return cores;
}

int main()
{
    int device_id = 0;
    ErrorCheck(cudaSetDevice(device_id), __FILE__, __LINE__);
    

    cudaDeviceProp prop;
    ErrorCheck(cudaGetDeviceProperties(&prop, device_id), __FILE__, __LINE__);

    printf("Compute cores is %d.\n", getSPcores(prop));

    return 0;
}
```
## 组织线程模型
数据在内存中以线性，以行为主的方式存储。发挥GPU中多线程的优点，就是要让每个线程处理不同的数据运算，必须合理的组织线程，避免多个线程处理同一数据或胡乱访问内存的情况出现。
### 二维网格二维线程块
```
ix = threadIdx.x + blockIdx.x*blockDim.x;
iy = threadIdx.y + blockIdx.y+blockDim.y;
idx = iy*nx + ix;
```
### 二维网格一维线程块
```
ix = threadIdx.x + blockIdx.x * blockDim.x;
iy = blockIdx.y;
idx = iy * nx + ix;
```
### 一维网格一维线程块
此时无法做到每个线程对应矩阵中一个元素，需要循环执行。
```c++
__global__ void addMatrix(int *A, int *B, int *C, const int nx, const int ny)
{
    int ix = threadIdx.x + blockIdx.x * blockDim.x; // 此时iy 由循环执行决定
    for (int iy = 0; iy < ny; iy++)
    {
        int idx = iy * nx + ix;
        C[idx] = A[idx] + B[idx];
    }
}
``` 
## 全局内存
对全局内存的访问将触发内存事务，也就是数据传输。在线程访问内存引发数据传输的过程中，传输的数据有的是线程所需要的，而有的是额外数据，对他们的传输产生了资源浪费，使用合并度对资源利用率进行衡量。
### 合并与非合并访问
合并度等于线程束请求的字节数除以由该请求导致的数据传输处理的全部数据的字节数。当合并度为100%也就是说线程数对全局内存的一次访问请求导致了最少的数据传输，我们称该访问为合并访问，否则为非合并的。    
要分析一个访问是合并的还是非合并的，首先要明晰数据传对数据地址的要求(这里考虑全局内存的读取仅使用$L_2$缓存的情况)：
    一次数据传输中从全局内存转移到$L_2$缓存的一片内存的首地址，一定是最小粒度的整数倍(这里为32)。例如，一次传输只能从全局内存中读取地址为0到31字节。以线程请求访问单精度浮点数(4字节)为例，一个线程束总共需要访问128字节，若这128字节的地址恰好为0到127，则此时仅4次传输即可，此时合并度为100%，为合并访问。
下面给出实例
:::tip
CUDA运行时API cudaMalloc()分配内存的首地址至少为256字节的整数倍。
:::
```c++
// 合并访问
void __global__ add(float *x, float *y, float *z){
    int n = threadIdx.x + blockIdx.x*blockDim.x;
    z[n] = x[n] + y[n];
}
add<<<128,32>>>(x,y,z)
```
可以看到，核函数中对这几个指针的访问都是合并的。例如，在第一个线程块中的线程束将访问数组中的0到31个数据，对应着0到127字节的连续内存，是合并访问。
```c++
// 非合并访问
void __global__ add(float *x, float *y, float *z){
    int n = blockIdx.x + threadIdx.x*gridDim.x;
    z[n] = x[n] + y[n];
}
add<<<128,32>>>(x,y,z)
```
如上，第一个线程块中的线程束将对数组中第0, 128, 256...元素进行访问，都不在同一个连续32字节的内存片段中，故需要访问32次，此时合并率为$\frac{4}{32} = 12.5\%$，为非合并访问。
### 矩阵转置(例)
下面为完整的矩阵转置的例子，代码中首先生成了一个给定大小的随机方阵，之后进行了转置并对核函数进行记时。值得一提的是，在两种核函数中都包含了一个合并访问和一个非合并访问，但其执行速度却不同。这是因为，如果编译器判断一个全局变量在整个核函数范围内只可读，则会自动使用`__ldg()`函数对数据的读取进行缓存，从而环节非合并访问带来的影响。而在写入操作是没有类似的函数可以调用的。
```c++
#include <stdio.h>
#include "./tools/setDevice.cuh"

// 设计核函数
__global__ void transpose1(const float *A,float *B, const int N){
    const int nx = threadIdx.x + blockDim.x*blockIdx.x;
    const int ny = threadIdx.y + blockDim.y*blockIdx.y;
    if (nx < N && ny< N){
        B[nx*N + ny] = A[ny*N+nx]; // 此时对于A的内存访问为合并的，即读合并，写非合并。
    }
}

__global__ void transpose2(const float *A, float *B, const int N){
    const int nx = threadIdx.x + blockDim.x*blockIdx.x;
    const int ny = threadIdx.y + blockDim.y*blockIdx.y;
    if (nx < N && ny< N){
        B[ny*N + nx] = __ldg(&A[nx*N+ny]); // 此时对于B的内存访问为合并的，即写合并，读非合并。
    }
}

void initialData(float *addr, int elemCount)
{
    for (int i = 0; i < elemCount; i++)
    {
        addr[i] = (float)(rand() & 0xFF) / 10.f; // 做逻辑与操作，限制随机数不超过255/10
    }
    return;
}


int main(void){
    SetGPU(); // 设置GPU
    const int N = 128; // 设置矩阵大小
    int iElemCount = N*N;             // 设置元素数量
    size_t stBytesCount = iElemCount * sizeof(float); // 字节数
    // 分配主机内存
    float *fpHost_A, *fpHost_B;
    fpHost_A = (float *)malloc(stBytesCount); // 分配动态内存
    fpHost_B = (float *)malloc(stBytesCount);
    if (fpHost_A != NULL && fpHost_B != NULL)
    {
        memset(fpHost_A, 0, stBytesCount);  // 主机内存初始化为0
        memset(fpHost_B, 0, stBytesCount);
    }
    else
    {
        printf("Fail to allocate host memory!\n");
        exit(-1);
    }

    float *fpDevice_A, *fpDevice_B;
    ErrorCheck(cudaMalloc((float**)&fpDevice_A, stBytesCount), __FILE__, __LINE__);
    ErrorCheck(cudaMalloc((float**)&fpDevice_B, stBytesCount), __FILE__, __LINE__);
    if (fpDevice_A != NULL && fpDevice_B != NULL){
    ErrorCheck(cudaMemset(fpDevice_A, 0, stBytesCount), __FILE__, __LINE__); // 设备内存初始化为0
    ErrorCheck(cudaMemset(fpDevice_B, 0, stBytesCount), __FILE__, __LINE__);
    }
    else{
        printf("fail to allocate memory\n");
        free(fpHost_A); // 释放先前CPU中制定的内存
        free(fpHost_B);
        exit(-1);
    }

     // 初始化主机中数据
    srand(666); // 设置随机种子
    initialData(fpHost_A, iElemCount);
    // 主机复制到设备
    ErrorCheck(cudaMemcpy(fpDevice_A,fpHost_A,stBytesCount,cudaMemcpyHostToDevice),__FILE__,__LINE__);
    ErrorCheck(cudaMemcpy(fpDevice_B,fpHost_B,stBytesCount,cudaMemcpyHostToDevice),__FILE__,__LINE__);
   
    // 调用核函数
    const dim3 block(32,32); // 设置block大小为2维32, 32
    dim3 grid((N-1)/32 + 1,(N-1)/32 + 1); //向上取整，设置grid大小
    // 预热
    transpose1<<<grid, block>>>(fpDevice_A, fpDevice_B,N); 
    // 设置开始事件
    cudaEvent_t start, stop; 
    ErrorCheck(cudaEventCreate(&start), __FILE__, __LINE__);
    ErrorCheck(cudaEventCreate(&stop), __FILE__, __LINE__);
    ErrorCheck(cudaEventRecord(start), __FILE__, __LINE__);
    cudaEventQuery(start);

    transpose1<<<grid, block>>>(fpDevice_A, fpDevice_B,N);  //调用核函数

    ErrorCheck(cudaEventRecord(stop), __FILE__, __LINE__);
    ErrorCheck(cudaEventSynchronize(stop), __FILE__, __LINE__);
    float elapsed_time;
    ErrorCheck(cudaEventElapsedTime(&elapsed_time, start, stop), __FILE__, __LINE__);
    printf("Time = %g ms.\n", elapsed_time); // 打印时间
    // 将计算得到的数据从设备传给主机
    ErrorCheck(cudaMemcpy(fpHost_B, fpDevice_B, stBytesCount, cudaMemcpyDeviceToHost),__FILE__,__LINE__);
    // 释放主机与设备内存
    free(fpHost_A);
    free(fpHost_B);
    ErrorCheck(cudaFree(fpDevice_A), __FILE__, __LINE__);
    ErrorCheck(cudaFree(fpDevice_B), __FILE__, __LINE__);
    ErrorCheck(cudaDeviceReset(), __FILE__, __LINE__);
    return 0;
}
```
## 共享内存
### 数组归约计算(例)
数组规约计算即考虑有$N$个元素的数组$x$，计算其所有元素的和。在使用CPU计算时，如下代码，使用`-DUSE_DP`设置精度，其运行结果(具体代码见 github )
```zsh
nvcc -O3 reduce_cpu.cu -o reduce_cpu
./reduce_cpu 
>>> Time = 129.05 ms.
>>> Ans: 33554432.000000
```
```zsh
nvcc -O3 -DUSE_DP reduce_cpu.cu -o reduce_cpu
./reduce_cpu
>>> Time = 69.4968 ms.
>>> Ans: 123000000.110771
```
CPU运算情况下，其单精度下的结果完全是错误的。在仅使用全局内存的情况下设计核函数
```zsh
nvcc -O3  reduce_cpu.cu -o reduce_gpu
./reduce_gpu
>>> Time = 6.23568 ms.
>>> Sum: 123633392.000000
```
```zsh
nvcc -O3 -DUSE_DP reduce_cpu.cu -o reduce_gpu
./reduce_gpu
>>> Time = 131.485 ms.
>>> Ans: 123000000.110771
```
GPU运算情况下，单精度时从第四位开始有错误，且计算速度约为CPU下的11倍。