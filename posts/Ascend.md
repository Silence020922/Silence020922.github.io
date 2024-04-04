---
date: 2024-04-04
title: Ascend C开发流程
tags:
- Ascend C
description: 无
---
## 算子开发流程
```bash
cd \Documents
vim AddCustom.json
```
向`AddCustom.json`中添加如下内容，具体参考[官方文档](https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC1alpha003/devguide/opdevg/tbeaicpudevg/atlasopdev_10_0024.html)
```
[
    {
        "op": "AddCustom",
        "language": "cpp",
        "input_desc": [
            {
                "name": "x",
                "param_type": "required",
                "format": [
                    "ND"
                ],
                "type": [
                    "float16"
                ]
            },
            {
                "name": "y",
                "param_type": "required",
                "format": [
                    "ND"
                ],
                "type": [
                    "float16"
                ]
            }
        ],
        "output_desc": [
            {
                "name": "z",
                "param_type": "required",
                "format": [
                    "ND"
                ],
                "type": [
                    "float16"
                ]
            }
        ]
    }
]
```
使用`msopgen`工具创建Ascend C算子工程，参数详见[官方文档](https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC1alpha003/devguide/opdevg/tbeaicpudevg/atlasopdev_10_0024.html#ZH-CN_TOPIC_0000001818390484__table20825174505717)
```bash
/usr/local/Ascend/ascend-toolkit/latest/python/site-packages/bin/msopgen gen -i AddCustom.json -f tf -c ai_core-ascend310b -lan cpp -out ~/AddCustom
```
修改Host和Kernel侧的代码，这里作为样例，直接copy实例代码
```bash
cp ~/samples/operator/AddCustomSample/FrameworkLaunch/AddCustom/op_host/* ~/AddCustom/op_host/
cp ~/samples/operator/AddCustomSample/FrameworkLaunch/AddCustom/op_kernel/* ~/AddCustom/op_kernel/
```
修改算子工程中配置文件CMakePresets.json，将CMakePresets.json中ASCEND_CANN_PACKAGE_PATH的value值修改为实际CANN包安装目录/usr/local/Ascend/ascend-toolkit/latest
```bash
cd ~/AddCustom
vim CMakePresets.json
```
在AddCustom目录下执行如下命令编译自定义AddCustom算子，生成算子安装包。
```bash
./build.sh
```
部署自定义算子包
```bash
./build_out/custom_opp_ubuntu_aarch64.run
```
通过应用程序样例调用算子的ACLNN接口进行测试
```bash
cd ~/samples/operator/AddCustomSample/FrameworkLaunch/AclNNInvocation
bash run.sh
```
## json 文件配置参数说明
详见[官方文档](https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC1alpha003/devguide/opdevg/tbeaicpudevg/atlasopdev_10_0024.html)
## AI core 架构说明
详见[官方文档](https://www.hiascend.com/document/detail/zh/canncommercial/700/operatordev/tbeaicpudevg/atlasopdev_10_0008.html) 

