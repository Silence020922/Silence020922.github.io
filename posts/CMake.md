---
date: 2024-01-13
title: CMake
tags:
- CMake
description: CMake，缝缝补补也能用，最好还是了解了解
---
## 概述
CMake 是一个项目构建工具，并且是跨平台的。关于项目构建我们所熟知的还有Makefile（通过 make 命令进行项目的构建），大多是IDE软件都集成了make，比如：VS 的 nmake、linux 下的 GNU make、Qt 的 qmake等，如果自己动手写 makefile，会发现，makefile 通常依赖于当前的编译平台，而且编写 makefile 的工作量比较大，解决依赖关系时也容易出错。

而 CMake 恰好能解决上述问题， 其允许开发者指定整个工程的编译流程，在根据编译平台，自动生成本地化的Makefile和工程文件，最后用户只需make编译即可。

来自[Bilibili-爱编程的大丙 ](https://www.bilibili.com/video/BV14s4y1g7Zj?p=6&vd_source=c1d5ab3603a518abe809c9db9faf7d2d)
## 注释
```CMake
# 行注释
#[[ 块注释
块注释
块注释]] 
```
## 基本结构
`cmake`命令依赖文件`CMakeLists.txt`(区分大小写)
```cmake
cmake_minimum_required(VERSION 3.0) # 指定cmake的最低版本
project(CALC) # 定义工程名称
add_executable(app add.c div.c main.c mult.c sub.c) #  打包生成可执行程序
```
- `cmake_minimum_required`:
  - 可选，不加会有警告
- `project`:定义工程名称，并可指定工程的版本、工程描述、web主页地址、支持的语言（默认情况支持所有语言），如果不需要这些都是可以忽略的，只需要指定出工程名字即可。
```cmake
project(<PROJECT-NAME> [<language-name>...])
project(<PROJECT-NAME>
       [VERSION <major>[.<minor>[.<patch>[.<tweak>]]]]
       [DESCRIPTION <project-description-string>]
       [HOMEPAGE_URL <url-string>]
       [LANGUAGES <language-name>...])
```
- `add_executable`：定义工程会生成一个可执行程序
```cmake
add_executable(可执行程序名 源文件名称)
```
在完成`CMakeLists.txt`的基本内容书写，就可以使用`cmake`工具编译实现了。
```zsh
cmake CMakeLists.txt_文件路径 
make
```
## SET命令
### 定义变量
```cmake
# SET 指令的语法是：
# [] 中的参数为可选项, 如不需要可以不写
SET(VAR [VALUE] [CACHE TYPE DOCSTRING [FORCE]])
```
- VAR：变量名
- VALUE：变量值

**例如**
```cmake
# 方式1: 各个源文件之间使用空格间隔
# set(SRC_LIST add.c  div.c   main.c  mult.c  sub.c)

# 方式2: 各个源文件之间使用分号 ; 间隔
set(SRC_LIST add.c;div.c;main.c;mult.c;sub.c)
add_executable(app  ${SRC_LIST})
```
### 配合宏
- CMAKE_CXX_STANDARD：指定C++编译版本
```cmake
#增加-std=c++11
set(CMAKE_CXX_STANDARD 11)
#增加-std=c++14
set(CMAKE_CXX_STANDARD 14)
#增加-std=c++17
set(CMAKE_CXX_STANDARD 17)
```
- EXECUTABLE_OUTPUT_PATH：指定可执行程序的输出路径
```cmake
set(HOME /home/robin/Linux/Sort)
set(EXECUTABLE_OUTPUT_PATH ${HOME}/bin) # 如果这个路径中的子目录不存在，会自动生成，无需自己手动创建
```

## file命令
如果一个项目里边的源文件很多，在编写CMakeLists.txt文件的时候不可能将项目目录的各个文件一一罗列出来，这样太麻烦了。所以，在CMake中为我们提供了搜索文件的命令，他就是file（当然，除了搜索以外通过 file 还可以做其他事情）。
```cmake
file(GLOB/GLOB_RECURSE 变量名 要搜索的文件路径和文件类型)
```
- GLOB: 将指定目录下搜索到的满足条件的所有文件名生成一个列表，并将其存储到变量中。
- GLOB_RECURSE：递归搜索指定目录，将搜索到的满足条件的文件名生成一个列表，并将其存储到变量中

例如，搜索当前目录的src目录下所有的cpp文件，并存储到变量中
```cmake
file(GLOB MAIN_SRC ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp)
```
:::tips
CMAKE_CURRENT_SOURCE_DIR 宏表示当前访问的 CMakeLists.txt 文件所在的路径。关于要搜索的文件路径和类型可加双引号，也可不加:
:::

## include_directories——包含头文件
举例说明，有源文件若干，其目录结构如下：
```zsh
$ tree
.
├── build
├── CMakeLists.txt
├── include
│   └── head.h
└── src
    ├── add.cpp
    ├── div.cpp
    ├── main.cpp
    ├── mult.cpp
    └── sub.cpp

3 directories, 7 files
```
CMakeLists.txt文件内容如下:
```cmake
cmake_minimum_required(VERSION 3.0)
project(CALC)
set(CMAKE_CXX_STANDARD 11)
set(HOME /home/robin/Linux/calc)
set(EXECUTABLE_OUTPUT_PATH ${HOME}/bin/)
include_directories(${PROJECT_SOURCE_DIR}/include)
file(GLOB SRC_LIST ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp)
add_executable(app  ${SRC_LIST})
```
其中，第六行指定就是头文件的路径，`PROJECT_SOURCE_DIR`宏对应的值就是我们在使用cmake命令时，后面紧跟的目录，一般是工程的根目录。

## 静态库/动态库
### 制作静态库/动态库
在cmake中，如果要制作静态库，需要使用的命令如下：
```cmake
add_library(库名称 STATIC 源文件1 [源文件2] ...) 
```
在Linux中，静态库名字分为三部分：`lib+库名字+.a`，此处只需要指定出库的名字就可以了，另外两部分在生成该文件的时候会自动填充。    
在Windows中虽然库名和Linux格式不同，`lib+库名字+.lib`，但也只需指定出名字即可。

例如，下面有一个目录，需要将`src`目录中的源文件编译成静态库，然后再使用：
```zsh
.
├── build
├── CMakeLists.txt
├── include           # 头文件目录
│   └── head.h
├── main.cpp          # 用于测试的源文件
└── src               # 源文件目录
    ├── add.cpp
    ├── div.cpp
    ├── mult.cpp
    └── sub.cpp
```
根据上面的目录结构，可以这样编写`CMakeLists.txt`文件:
```cmake
cmake_minimum_required(VERSION 3.0)
project(CALC)
include_directories(${PROJECT_SOURCE_DIR}/include)
file(GLOB SRC_LIST "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")
add_library(calc STATIC ${SRC_LIST}) # STATIC声明静态库，SHARED声明动态库
```
随后编译
```zsh
cd build
cmake ..
make
```
:::tips
生成`libcalc.a`文件为二进制文件，本质上与`src`中文件并无不同，只是不具备可读性，仍然需要`include`中的头文件。
:::

### 指定输出的路径
#### 方式1
对于生成的库文件来说和可执行程序一样都可以指定输出路径。由于在Linux下生成的动态库默认是有执行权限的，所以可以按照生成可执行程序的方式去指定它生成的目录：
```cmake
cmake_minimum_required(VERSION 3.0)
project(CALC)
include_directories(${PROJECT_SOURCE_DIR}/include)
file(GLOB SRC_LIST "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")
# 设置动态库生成路径
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)
add_library(calc SHARED ${SRC_LIST})
```
对于这种方式来说，其实就是通过`set`命令给`EXECUTABLE_OUTPUT_PATH`宏设置了一个路径，这个路径就是可执行文件生成的路径。
#### 方式2
由于在Linux下生成的静态库默认不具有可执行权限，所以在指定静态库生成的路径的时候就不能使用`EXECUTABLE_OUTPUT_PATH`宏了，而应该使用`LIBRARY_OUTPUT_PATH`，这个宏对应静态库文件和动态库文件都适用。
```cmake
cmake_minimum_required(VERSION 3.0)
project(CALC)
include_directories(${PROJECT_SOURCE_DIR}/include)
file(GLOB SRC_LIST "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")
# 设置动态库/静态库生成路径
set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)
# 生成动态库
#add_library(calc SHARED ${SRC_LIST})
# 生成静态库
add_library(calc STATIC ${SRC_LIST})
```
### 库的使用
#### 静态库
在cmake中，链接静态库的命令如下：
```cmake
link_libraries(<static lib> [<static lib>...])
```
- 参数1：指定出要链接的静态库的名字
    - 可以是全名 libxxx.a
    - 也可以是掐头（lib）去尾（.a）之后的名字 xxx

- 参数2-N：要链接的其它静态库的名字

如果该静态库不是系统提供的（自己制作或者使用第三方提供的静态库）可能出现静态库找不到的情况，此时可以将静态库的路径也指定出来：
```cmake
link_directories(<lib path>)
```
这样，修改之后的`CMakeLists.txt`文件内容如下:
```cmake
cmake_minimum_required(VERSION 3.0)
project(CALC)
# 搜索指定目录下源文件
file(GLOB SRC_LIST ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp)
# 包含头文件路径
include_directories(${PROJECT_SOURCE_DIR}/include)
# 包含静态库路径
link_directories(${PROJECT_SOURCE_DIR}/lib)
# 链接静态库
link_libraries(calc)
add_executable(app ${SRC_LIST})
```
#### 动态库
在cmake中链接动态库的命令
```cmake
target_link_libraries(
    <target> 
    <PRIVATE|PUBLIC|INTERFACE> <item>...  # 权限默认为PUBLIC
    [<PRIVATE|PUBLIC|INTERFACE> <item>...]...)
```
- target：指定要加载动态库的文件的名字

    - 该文件可能是一个源文件
    - 该文件可能是一个动态库文件
    - 该文件可能是一个可执行文件

- `PRIVATE|PUBLIC|INTERFACE`：动态库的访问权限，默认为`PUBLIC`

    - 如果各个动态库之间没有依赖关系，无需做任何设置，三者没有没有区别，一般无需指定，使用默认的 PUBLIC 即可。

    - 动态库的链接具有传递性，如果动态库 A 链接了动态库B、C，动态库D链接了动态库A，此时动态库D相当于也链接了动态库B、C，并可以使用动态库B、C中定义的方法。
    ```cmake
    target_link_libraries(A B C)
    target_link_libraries(D A)
    ```
    - PUBLIC：在public后面的库会被Link到前面的target中，并且里面的符号也会被导出，提供给第三方使用。
    - PRIVATE：在private后面的库仅被link到前面的target中，并且终结掉，第三方不能感知你调了啥库
    - INTERFACE：在interface后面引入的库不会被链接到前面的target中，只会导出符号。即对于如果A连接B和C，A无法获得自身所使用的函数来自B还是C。
