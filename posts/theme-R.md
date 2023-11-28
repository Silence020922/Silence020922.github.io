---
title: R实战入门
date: 2022-10-17
tag: note
---
>R这门语言是一门专业课，在这里使用的参考书目是《R语言实战(第二版)》

- [安装R及配置编译器](#安装r及配置编译器)
  - [radian](#radian)
  - [RStudio](#rstudio)
- [作业1](#作业1)
- [作业2](#作业2)
- [作业3](#作业3)
- [基本命令](#基本命令)
  - [包](#包)
- [创建数据集](#创建数据集)
  - [数据结构](#数据结构)
    - [向量](#向量)
    - [矩阵](#矩阵)
    - [数组](#数组)
    - [数据框](#数据框)
    - [列表](#列表)
  - [R的注释问题](#r的注释问题)
  - [数据的输入](#数据的输入)
    - [利用键盘输入](#利用键盘输入)
    - [从带分隔符的文本文件导入数据](#从带分隔符的文本文件导入数据)
    - [导入excel数据](#导入excel数据)
    - [导入SPSS数据](#导入spss数据)
    - [导入SAS数据](#导入sas数据)
    - [导入Stata 数据](#导入stata-数据)
  - [数据集的标注](#数据集的标注)
    - [值标签](#值标签)
  - [处理数据对象的实用函数](#处理数据对象的实用函数)
- [初级绘图](#初级绘图)
  - [绘图参数](#绘图参数)
  - [颜色参数](#颜色参数)
  - [文本属性](#文本属性)
  - [图形尺寸和边界大小](#图形尺寸和边界大小)
  - [添加文本、自定义坐标轴和图例](#添加文本自定义坐标轴和图例)
  - [参考线](#参考线)
  - [图例](#图例)
  - [文本标注](#文本标注)
  - [图形的组合](#图形的组合)
- [基本数据管理](#基本数据管理)
  - [创建新变量](#创建新变量)
  - [变量的重编码](#变量的重编码)
  - [变量的重命名](#变量的重命名)
  - [缺失值](#缺失值)
  - [日期值](#日期值)
  - [类型转换函数](#类型转换函数)
  - [数据排序](#数据排序)
  - [数据合并](#数据合并)
  - [数据集取子集](#数据集取子集)
- [高级数据管理](#高级数据管理)
  - [数值和字符处理函数](#数值和字符处理函数)
  - [apply()](#apply)
  - [综合示例](#综合示例)
  - [控制流](#控制流)
  - [整合与重构数据](#整合与重构数据)
- [基本图形](#基本图形)
  - [条形图](#条形图)
  - [饼图](#饼图)
  - [直方图](#直方图)
  - [核密度图](#核密度图)
  - [箱线图](#箱线图)
  - [点图](#点图)
- [基本统计分析](#基本统计分析)
  - [描述性统计量](#描述性统计量)
  - [频数表和列联表](#频数表和列联表)
    - [独立性检验](#独立性检验)
  - [相关](#相关)
  - [t检验](#t检验)
  - [组建差异的非参数检验](#组建差异的非参数检验)
- [回归](#回归)
  - [R表达式中常用符号](#r表达式中常用符号)
  - [回归诊断](#回归诊断)
  - [异常观测值](#异常观测值)
  - [选择最佳回归模型](#选择最佳回归模型)
    - [对两模型的选择](#对两模型的选择)
    - [大量变量中选择预测变量](#大量变量中选择预测变量)
  - [k折交叉验证](#k折交叉验证)
- [方差分析](#方差分析)
  - [ANOVA模型拟合](#anova模型拟合)
  - [单因素方差分析](#单因素方差分析)
  - [单因素协方差](#单因素协方差)
  - [双因素方差](#双因素方差)
  - [重复测量方差分析](#重复测量方差分析)
  - [多元方差分析](#多元方差分析)
- [功效分析](#功效分析)
    - [t检验](#t检验-1)
    - [方差分析](#方差分析-1)
    - [相关性分析](#相关性分析)
    - [线性模型](#线性模型)
    - [比例检验](#比例检验)
    - [卡方检验](#卡方检验)
    - [新情况中推荐效应值](#新情况中推荐效应值)
  - [绘制功效分析图](#绘制功效分析图)
- [中级绘图](#中级绘图)
  - [散点——散点图矩阵、高密度散点图、三维散点图、旋转散点图、气泡图](#散点散点图矩阵高密度散点图三维散点图旋转散点图气泡图)
  - [折线图](#折线图)
  - [相关图](#相关图)
  - [马赛克图](#马赛克图)
- [重抽样与自助法](#重抽样与自助法)
- [主成分分析和因子分析](#主成分分析和因子分析)
  - [R 中的主成分和因子分析](#r-中的主成分和因子分析)
    - [基本流程](#基本流程)
  - [主成分分析](#主成分分析)
    - [判断主成分的个数](#判断主成分的个数)
    - [提取主成分](#提取主成分)
  - [探索性因子分析](#探索性因子分析)
    - [判断需提取的公共因子数](#判断需提取的公共因子数)
    - [提取公共因子](#提取公共因子)
    - [绘制可视化图形](#绘制可视化图形)
- [分类问题处理](#分类问题处理)
  - [数据准备](#数据准备)
  - [逻辑回归](#逻辑回归)
  - [决策树](#决策树)
    - [条件推断树](#条件推断树)
  - [随机森林](#随机森林)
    - [原理](#原理)
    - [实例](#实例)
  - [支持向量机(SVM)](#支持向量机svm)
  - [模型性能评价](#模型性能评价)

## 安装R及配置编译器
### radian
这是我在linux系统上使用的编译器    
```
sudo pacman -S r #用于安装R
sudo pacman -S pythohn-pip #安装pip
pip install -U radian #在此使用radian 作为R的编译器
```
具体配置文档参考[这里](https://github.com/randy3k/radian)     
*注意*：与其他编译器不同的是,radian不再使用.Rhistory存储，反而自动存储于.radian_histor中供全局或者本地使用。    
### RStudio
这是在windows上图方便用的    
直接前往[官方](https://www.rstudio.com/)下载，下载免费版即可。当然需先安装[R](https://www.r-project.org/)
## 作业1
```
Q1:    
I <- matrix(rep(1:5,times =5),nrow = 5,byrow = F)
J <- matrix(rep(1:5,times=5),nrow = 5,byrow = T)
A <- 0.5^(abs(I-J))
Q2:    
I <- matrix(rep(1:100,times =100),nrow = 100,byrow = F)
J <- matrix(rep(1:100,times=100),nrow = 100,byrow = T)
A <- 0.5^(abs(I-J))
Q3:    
function.Q3 <- function(n){     #不会声明未知变量选择使用函数形参代替
I <- matrix(rep(1:n,times =n),nrow = n,byrow = F)            
J <- matrix(rep(1:n,times=n),nrow = n,byrow = T)    
A <- 0.5^(abs(I-J))     
}    
```
## 作业2
```
rm(list = ls())
getwd() #获取当前工作目录
setwd("C:/Users/ASUS/Desktop/R")  #调整工作目录到我的文件所在地址，按照题目要求应为"D:/"
getwd()
list_new <- list()   
file_name <- list.files("zuoye2")
dir <- paste("./zuoye2/",file_name,sep="") 
        #通过粘结将文件名配置为当前目录下可直接调用
n <- length(dir)
for (i in 1:n){
    sec_file = list.files(dir[i],pattern = "^sfnwmrda.*rest_1") 
        #利用正则表达式优先导入sfnwmrda开头且包含rest_1的文件
    if (length(sec_file) == 0){         
        #在sec_file无导入文件的情况下再次导入sfnwmrda开头且包含rest_1的文件
        sec_file = list.files(dir[i],pattern = "^sfnwmrda.*rest_2")
    }
    if(length(sec_file) == 0){      
        #当这两种文件都未找到直接输出并结束任务
        print(paste("The folder ",dir[i],
        " has no file that meets the requirements"))
    }
    else{       #否则我们求文件中数据矩阵的均值
    file = paste(dir[i],"/",sec_file,sep = "")
    data = read.table(file)     #数据的导入
    A<-as.matrix(data)  
    #接下来五行是将数据由矩阵文本转化为数据文本并除掉一些不必要的行列
    A<-A[-1,] # 接下来三行是针对该数据特征将标题等文本信息去除
    A<-A[,-1]
    A<-A[,-1]
    B <- apply(A,2,as.numeric)   
    #之后对题目要求理解出现问题，再三考虑后决定采用下两行而将首次代码注释掉。
     list_new[[(length(list_new))+ 1]]<- B}
     ans <- Reduce("+",list_new)/length(list_new) 
     #Reduce代替apply可实现保留结果连续求值
    # ans = mean(B)
    # print(paste("The average of the data ",file," is ",ans))}
}
```
## 作业3
>首先需要说明的是，严格来讲并没有完全复刻示例图片，但个人已将认为比较重要的    
>数据详尽的表示了出来，最终效果图可以查看[这里](https://surplus-1311636487.cos.ap-beijing.myqcloud.com/R-3.jpg)

代码如下
```
load("Download/zuoye3.rdata") #更改为自己文件所在的地址
library(ggplot2) #主要库
library(ggpubr) #基于ggplot2用于组合展示
function1 <-function(groupV,s){  # 将p差值转化为标签*
         for (i in 1:7){
             if (groupV[i,1] <0.01){
                     s[i] = '**'
                 }else if(groupV[i,1]<0.05){
                         s[i] = '*'
                     }else {s[i] = ' '}}
         for (j in 1:7){
                 if (groupV[j,2]<0.01){
                         s[j+7] = '**'
                     }else if (groupV[j,2]<0.05){
                             s[j+7] = '*'
                         }else {s[j+7] = ' '}}
         return(s)
    }
function2 <-function(groupV,s){  # 将p值转化为标签*
         for (i in 1:14){
             if (groupV[i,4] <0.01){
                     s[i] = '**'
                 }else if(groupV[i,4]<0.05){
                         s[i] = '*'
                     }else {s[i] = ' '}}
         return(s)
    }
labelA <- c();labelB <- c();labelA_B <- c() # 用于存储标签属性
pd <- position_dodge(0.1)
labelA <- function2(dataA,labelA)
labelB <- function2(dataB,labelB)
labelA_B <- function1(groupPvlue,labelA_B) # 生成标签
pic1 <- ggplot(dataA, aes(XX, y, colour=group, group = group),angle = 45) +  # 绘制图(A)
    geom_errorbar(aes(ymin=low, ymax=up), width=.2, position=pd) +
    geom_point(aes(colour = group, shape = factor(group)),position=pd, size = 3) +
    xlab("XX") + 
    ylab("y-value") + 
    ggtitle("(A)") + 
    scale_colour_gradient(low = 'red',high = 'blue') + 
    geom_text(aes(XX+.2,y,label = labelA)) + 
    geom_label(aes(XX + .02,y + 1,label = labelA_B[1:7]),data = dataA[1:7,1:6])
pic2 <- ggplot(dataB, aes(XX, y, colour=group, group = group),angle = 45) + # 绘制图(B)
    geom_errorbar(aes(ymin=low, ymax=up), width=.2, position=pd) +
    geom_point(aes(colour = group, shape = factor(group)),position=pd, size = 3) +
    xlab("XX") + 
    ylab("y-value") + 
    ggtitle("(B)") + 
    theme(axis.text.x = element_text(angle = 45, hjust = 1, vjust = 1)) +
    scale_colour_gradient(low = 'red',high = 'blue') + 
    geom_text(aes(XX+.2,y,label = labelB)) + 
    geom_label(aes(XX + .02,y + 1,label = labelA_B[8:14]),data = dataB[1:7,1:6])
pic <- ggarrange(pic1,pic2) # 组合展示
ggsave(pic,file = 'pic_name.pdf',width = 20,height = 10) #保存
```
## 基本命令
### 包
函数.libPaths()能够显示库所在的位置, 函数library()则可以显示库中有哪些包。    
安装好以后,它们必须被载入到会话中才能使用。命令 search()可以告诉你哪些包已加载并
可使用    
使用命令install.packages(" ")来下载和安装    
update.packages()可以更新已经安装的包。
## 创建数据集
### 数据结构
R将实例标识符称为 rownames (行名),将类别型(包括名义型和有序型)变量称为因子(factors)。    
R拥有许多用于存储数据的对象类型,包括标量、向量、矩阵、数组、数据框和列表。    
#### 向量
向量是用于存储数值型、字符型或逻辑型数据的一维数组。执行组合功能的函数c()可用来
创建向量。    
通过在方括号中给定元素所处位置的数值,我们可以访问向量中的元素。
```
> a <- c("k", "j", "h", "a", "c", "m")
> a[c(1, 3, 5)]
[1] "k" "h" "c"
```
#### 矩阵
矩阵是一个二维数组,只是每个元素都拥有相同的模式(数值型、字符型或逻辑型)。可通
过函数matrix()创建矩阵。一般使用格式为:
```
myymatrix <- matrix(vector, nrow=number_of_rows, ncol=number_of_columns,
byrow=logical_value, dimnames=list(
char_vector_rownames, char_vector_colnames))
```
其中vector包含了矩阵的元素,nrow和ncol用以指定行和列的维数, dimnames包含了可选
的、以字符型向量表示的行名和列名。选项byrow则表明矩阵应当按行填充( byrow=TRUE)
还是按列填充( byrow=FALSE),默认情况下按列填充。
例
```
> x <- matrix(1:10, nrow=2)
> x
    [,1] [,2] [,3] [,4] [,5]
[1,] 1    3     5    7   9
[2,] 2    4     6    8   10
> x[1, c(4,5)]
[1] 7 9

```
#### 数组
数组(array)与矩阵类似,但是维度可以大于2。数组可通过array函数创建,形式如下:
myarray <- array(vector, dimensions, dimnames)

例
```
> dim1 <- c("A1", "A2")
> > dim2 dim3 <- <- c("B1", c("C1", "B2", "C2", "B3")
 "C3", "C4")
> z <- array(1:24, c(2, 3, 4), dimnames=list(dim1, dim2, dim3))
> z
, , C1
    B1 B2 B3
A1 1 3 5
A2 2 4 6

, , C2
    B1 B2 B3
A1 7 9 11
A2 8 10 12

, , C3
    B1 B2 B3
A1 13 15 17
A2 14 16 18

, , C4
    B1 B2 B3
A1 19 21 23
A2 20 22 24

z[1.2.3] = 15
```
#### 数据框
数据框可通过函数data.frame()创建:`mydata <- data.frame(col1, col2, col3,...)`     
其中的列向量col1、col2、col3等可为任何类型(如字符型、数值型或逻辑型)。每一列的名称可由函数names指定。代码清单2-4清晰地展示了相应用法。       
使用数据框中的某一变量可以用`data$value`,但每一次都输入数据框名和$十分低效，使用函数attach()和detach()或单独使用函数with()来简化代码。
```
attach(data) 
# 使得中间变量优先从数据data中搜索
detach()
with(mtcars, {
print(summary(mpg)) # 花括号中的语句都会优先使用mtcars数据框中的变量
plot(mpg, disp)
plot(mpg, wt)
})

```
#### 列表
某个列表中可能是若干向量、矩阵、数据框,甚至其他列表的组合。可以使用函数list() 创
建列表:`mylist <- list(object1, object2, ...)`    
例
```
> g <- "My First List"
> h <- c(25, 26, 18, 39)
> j <- matrix(1:10, nrow=5)
> k <- c("one", "two", "three")
> mylist <- list(title=g, ages=h, j, k)
> mylist
$title
[1] "My First List"

$ages
[1] 25 26 18 39

[[3]]
    [,1] [,2]
[1,] 1   6
[2,] 2   7
[3,] 3   8
[4,] 4   9
[5,] 5  10

[[4]]
[1] "one" "two" "three"

> mylist[[2]]
[1] 25 26 18 39

> mylist[["ages"]]
[[1] 25 26 18 39

```
### R的注释问题
❑R不提供多行注释或块注释功能。你必须以#作为多行注释每行的开始。出于调试目的,
你也可以把想让解释器忽略的代码放到语句if(FALSE){... }中。将FALSE改为TRUE
即允许这块代码执行。
### 数据的输入
#### 利用键盘输入
`edit()`
```
mydata <- data.frame(age=numeric(0),
gender=character(0), weight=numeric(0)) 
    #numeric(0)的赋值语句将创建一个指定模式但不含实际数据的变量。
mydata <- edit(mydata)
    #edit()会自动调用一个允许手动输入数据的文本编辑器,作用副本文件

```
#### 从带分隔符的文本文件导入数据
使用read.table()从带分隔符的文本文件中导入数据。读入一个表格格式的文件并将其保存为一个数据框。表格的每一行分别出现在文件中每一行。
```
mydataframe <- read.table(file, options)
```
read.table选项
选项|描述
---|-----
header|一个表示文件是否在第一行包含了变量名的逻辑型变量
sep|分开数据值的分隔符。默认是 sep="",这表示了一个或多个空格、制表符、换行或回车。使用 sep=","来读取用逗号来分隔行内数据的文件,使用 sep="\t"来读取使用制表符来分割行内数据的文件
row.names|一个用于指定一个或多个行标记符的可选参数
col.names|如果数据文件的第一行不包括变量名(header=FASLE),你可以用 col.names 去指定一个包含变量名的字符向量。如果 header=FALSE 以及 col.names 选项被省略了,变量会被分别命名为 V1、V2,以此类推
na.strings|可选的用于表示缺失值的字符向量。比如说,na.strings=c("-9", "?")把-9 和?值在读取数据的时候转换成 NA
skip|读取数据前跳过的行的数目。这个选项在跳过头注释的时候比较有用
text|一个指定文字进行处理的字符串。如果 text 被设置了, file 应该被留空。
stringsAsFactors|一个逻辑变量,标记处字符向量是否需要转化成因子。默认为TRUE
#### 导入excel数据
```
library(xlsx)
read.xlsx(file, n)
```
#### 导入SPSS数据
```
library(Hmisc)
mydataframe <- spss.get("mydata.sav", use.value.labels=TRUE)
```
这段代码中,mydata.sav是要导入的SPSS数据文件,use.value.labels=TRUE表示让函数将带有值标签的变量导入为R中水平对应相同的因子,mydataframe是导入后的R数据框。
#### 导入SAS数据
```
library(sas7bdat)
mydata <- read.sas7bdat("C:/mydata/clients.sas7bdat")
```
#### 导入Stata 数据
```
library(foreign)
mydataframe <- read.dta("mydata.dta")
```
**实例标式符**    
在病例数据中,病人编号(patientID)用于区分数据集中不同的个体。在R中,实例标识符可通过数据框操作函数中的rowname选项指定。例如,语句:
```
patientdata <- data.frame(patientID, age, diabetes,
status, row.names=patientID) #将patientID指定为R中标记各类打印输出和图形中实例名称所用的变量。
```
### 数据集的标注
#### 值标签
```
> mydata
  age gender weight
1  25      m    166
2  30      f    115
3  18      f    120

> mydata$gender <- factor(mydata$gender,
    levels = c('m','f'),
     labels = c("male", "female"))

> mydata
  age gender weight
1  25   male    166
2  30 female    115
3  18 female    120

```
###  处理数据对象的实用函数
```
length(object) 显示对象中元素/成分的数量
dim(object) 显示某个对象的维度
str(object) 显示某个对象的结构
class(object) 显示某个对象的类或类型
mode(object) 显示某个对象的模式
names(object) 显示某对象中各成分的名称
c(object, object,...) 将对象合并入一个向量
cbind(object, object, ...) 按列合并对象
rbind(object, object, ...) 按行合并对象
object 输出某个对象
head(object) 列出某个对象的开始部分
tail(object) 列出某个对象的最后部分
ls() 显示当前的对象列表
rm(object, object, ...) 删除一个或更多个对象。
    语句 rm(list = ls())将删除当前工作环境中的几乎所有对象
newobject <- edit(object) 编辑对象并另存为 newobject
fix(object) 直接编辑对象
```
## 初级绘图
### 绘图参数
参数     | 描述
-------- | -----
pch| 指定绘制点时使用的符号
cex  | 指定符号的大小，默认值为1表示放大为默认值的1倍
lty   | 指定线条类型
lwd | 指定线条宽度，默认值为1，同cex。    
### 颜色参数
参数     | 描述
-------- | -----
col| 默认的绘图颜色。一般来说指定col为单独颜色或为一个向量，注意，一般情况下需要保证向量与所绘制的点or线维度相同，当然，在一些函数(lines、pie)也可不相同，此时会自动循环调用颜色向量
col.axis  | 坐标轴刻度文字的颜色
col.lab   | 坐标轴标签的颜色
col.main | 标题颜色    
col.sub | 副标题颜色
fg | 图形的前景色
bg|  图形的背景色

`colors()`可以返回当前可用的所有颜色
### 文本属性
* 用于指定文本大小    

参数| 描述
-------- | -----
cex |  ...
cex.axis | ...
cex.lab | ...
cex.main | ...
cex.sub | ...
* 用于指定字体、字号、字样

参数 | 描述
-------- | -----
font  |  整数。1=常规、2=粗体、3=斜体、4=粗斜体、5=符号字体
font.axis(lab\main\sub)  | ...
ps  |  字体磅值。文本最终大小为ps*cex
family | 标准取值为serif(衬线)、sans(无衬线)、mono(等宽)

### 图形尺寸和边界大小
参数  |  描述
----- | ------
pin  | 英寸表示图形的尺寸(宽和高)
mai  | 数值向量表示边界的大小，顺序为下左上右，英寸
mar  | 数值向量表示边界大小，顺序同上，英分

`par(pin = c(4,3),mar = c(5,4,4,3))` 例

### 添加文本、自定义坐标轴和图例
`main`标题、`sub`副标题、`xlab,ylab`坐标轴标签、`xlim,ylim`坐标轴范围。某些高级绘图函数已经包含了默认的标题和标签。通过`ann = FALSE`移除他们。

* 标题    
`title(main = '',sub = '',col.main ='',col.sub = '',xlab = '',ylab='',col.lab ='',cex.lab='')`    

* 坐标轴    
`axis(side,at=,labels=,pos=,lty=,col=,las=,tck=,...)`    

参数 | 描述
------|------
side | 一个整数，表示在图形哪边绘制坐标轴(1\2\3\4 下\左\上\右) 
at | 数值形向量，表示需要绘制刻度线的位置
labels | 字符形向量，表示置于刻度线旁边的文字标签
pos | 坐标轴线绘制位置的坐标(与另一条相交的位置)
lty | 线条类型
col |...
las | 坐标标签平行(0)垂直(2)坐标轴
tck | 刻度线的长度，以相对于绘图区域大小的分数表示(负表示在图形外侧，正表示在图形内侧，0禁用刻度，1绘制网格线)

自定义坐标轴需要禁用自动生成的坐标轴`axes = FALSE`。参数xaxt = 'n'和yaxt='n'将分别禁用X和Y轴(留下框架线，只去除刻度)

### 参考线
`abline(h=yvalues,v=xvalues,...)`
### 图例
legend(location, title, legend,...)

选项 | 描述
------|------
location | 有许多方式可以指定图例的位置。你可以直接给定图例左上角的x、y坐标，也可以执行locator(1)，然后通过鼠标点击给出图例位置，或使用关键字放置图例。如果你使用了以上某个关键字，那么可以同时使用参数inset=指定图例向图形内测移动的大小
title | 图例标题的字符串
legend | 图例标签组成的字符形向量

### 文本标注
`text(location,"text to place",pos,...)`    
`mtext("text to place",side,line=n,...)`    

text()和mtext()选项

选项|描述
-----|-----
location | 文本的位置参数。可为一对x,y坐标，也可通过指定location为locator(1)使用鼠标交互式确定摆放位置
pos|文本相对于位置参数的方位。1=下、2=左、3=上、4=右。如果指定了pos，就可以同时指定 offset = 作为偏移量
side | 指定用来放置文本的边。1\2\3\4同...

### 图形的组合
* 示例1    

`attach(data_name)`    
`opar <- par(no.readonly = TRUE)`    
`par(mfrow = c(2,2))`   # 创建子图两行两列

* 示例2

`layout(matrix(c(1,1,2,3),2,2,byrow = TRUE)) # 图形123，1放在第一行，2、3放在第二行。    

## 基本数据管理
### 创建新变量
在数据框中添加变量的三种方法
```
mydata<-data.frame(x1 = c(2, 2, 6, 4),
        x2 = c(3, 4, 2, 8)) # 创建数据框
# 方法一
mydata$sumx <- mydata$x1 + mydata$x2
mydata$meanx <- (mydata$x1 + mydata$x2)/2

#方法二
attach(mydata)
mydata$sumx <- x1 + x2
mydata$meanx <- (x1 + x2)/2
detach(mydata)

#方法三     
mydata <- transform(mydata,
        sumx = x1 + x2,
        meanx = (x1 + x2)/2)
```
### 变量的重编码
运算符|描述
-----|-----
<|小于
<=|小于或等于
>|大于
>=|大于或等于
==|严格等于1
!=|不等于
!x|非x
x ｜ y|x或 y
x & y|x和 y
isTRUE(x)|测试x是否为TRUE
```
#创建数据框mydata，x1和x2是mydata的两个列向量
mydata <- data.frame(x1 = c(2, 2, 6, 4), x2 = c(3, 4, 2, 8))

#利用transform函数对数据框mydata增加两个变量（列向量）sumx和meanx，并把结果存储在数据框mydata中
mydata <- transform(mydata, sumx = x1 + x2, meanx = (x1 + x2)/2)

#利用within函数，expr表达式执行一条语句占一行，执行多条语句需要换行
mydata <- within(mydata, {sumx = x1 + x2
                         meanx = (x1 + x2)/2})

#或者多条语句在同一行，则中间应当用分号;隔开
mydata <- within(mydata, {sumx = x1 + x2; meanx = (x1 + x2)/2})
```
### 变量的重命名
`fix(frame_name)`进行交互式操作。    
`names(frame_name)[2] <- "new_name"`对列标题进行重命名，当然使用names也可以进行批量处理，例如`names(leadership)[6:10] <- c("item1", "item2", "item3", "item4", "item5")`    
另外提供一种方法，`rename()`,需要导入plyr包。
### 缺失值
R中缺失值使用符号NA(Not Available)表示。缺失值被认为是不可比较的,即便是与缺失值自身的比较。这意味着无法使用比较运算符来检测缺失值是否存在。例如,逻辑测试`myvar == NA`的结果永远不会为TRUE。R提供了一些函数,用于识别包含缺失值的观测。函数 is.na()允许你检测缺失值是否存在。假设你有一个向量:`y <- c(1, 2, 3, NA)`然后使用函数:`is.na(y)`,将返回`c(FALSE, FALSE, FALSE, TRUE)`。

第二,R 并不把无限的或者不可能出现的数值标记成缺失值。正无穷和负无穷分别用 Inf和–Inf所标记。因此5/0返回Inf。不可能的值(比如说,sin(Inf))用NaN符号来标记(not a number,不是一个数)。若要识别这些数值,你需要用到 `is.infinite()`或`is.nan()`。

**排除缺失值**    
含有缺失值的算术表达式和函数的计算结果也是缺失值。
```
x <- c(1, 2, NA, 3)
y <- x[1] + x[2] + x[3] + x[4] # 输出NA
z <- sum(x) # 输出NA
s <- sum(x,na.rm = TRUE) # 输出6
```
在数据框中，我们可以使用`na.omit(frame_name)`删除不完整的观测数据。注意，由于直接进行行删除，所以要确保删除的行仅占一小部分。
### 日期值
日期值通常以字符串的形式输入到R中,然后转化为以数值形式存储的日期变量。函数`as.Date()` 用于执行这种转化。其语法为`as.Date(x, "input_format")`,其中x是字符型数据,input_format则给出了用于读入日期的适当格式.日期值的默认输入格式为yyyy-mm-dd。语句:`mydates <- as.Date(c("2007-06-22", "2004-02-13"))`。

符号|含义|示例
----|----|----
%d|数字表示的日期(0~31)|01~31
%a|缩写的星期名|Mon
%A|非缩写星期名|Monday
%m|月份(00~12)|00~12
%b|缩写的月份|Jan
%B|非缩写月份|January
%y|两位数的年份|07
%Y|四位数的年份|2007

```
strDates <- c("01/05/1965", "08/16/1975")
dates <- as.Date(strDates, "%m/%d/%Y")
mydates
# output "1965-01-05" "1975-08-16"
```
Sys.Date()可以返回当天的日期,而date()则返回当前的日期和时间
```
r$> Sys.Date()
[1] "2022-12-01"
r$> date()
[1] "Thu Dec  1 19:36:02 2022"
```
你可以使用函数format(x, format="output_format")来输出指定格式的日期值,并且
可以提取日期值中的某些部分:
```
> today <- Sys.Date()
> format(today, format="%B %d %Y")
[1] "November 27 2014"
> format(today, format="%A")
[1] "Thursday"
```
此外，日期之间可以进行算术运算，也可以使用函数`difftime(today, dob, units="weeks")`来计算时间间隔,并以星期、天、时、分、秒来表示。

**将日期转化为字符型**    
函数`as.character()` 可将日期值转换为字符型


### 类型转换函数
    名为is.datatype()这样的函数返回TRUE或FALSE,而as.datatype()这样的函数则将其参数转换为对应的类型。
判断|转换
----|-----
is.numeric()|as.numeric()
is.character()| as.character()
is.vector()| as.vector()
is.matrix()| as.matrix()
is.data.frame()| as.data.frame()
is.factor()|as.factor()
is.logical()|as.logical()

### 数据排序
`order()`函数可以对一个数据框进行排序，默认升序，在变量前加 - 按照降序排列。
```
attach(leadership)
newdata <-leadership[order(gender, -age),] #先按照性别，同性别按照年龄降序
detach(leadership)

```
### 数据合并
如果要直接横向合并两个矩阵或数据框,并且不需要指定一个公共索引,那么可以直接使用`cbind()`函数.    
要横向合并两个数据框(数据集),也可使用 merge()函数。在多数情况下,两个数据框是通过一个或多个共有变量进行联结的(即一种内联结,inner join).
```
r$> mydata <- data.frame(x1 = c(1,2,3),x2 = c(1,2,3),l = c(1,1,1))

r$> mydata2 <- data.frame(x1 = c(2,3,4),x2 = c(2,3,4),s = c(2,2,2))

r$> merge(mydata,mydata2,"x1")
  x1 x2.x l x2.y s
1  2    2 1    2 2
2  3    3 1    3 2  #注意只有x1处值相同才能够串联

```
要纵向合并两个数据框(数据集),请使用`rbind()` 函数:`total <- rbind(dataframeA, dataframeB)`两个数据框必须拥有相同的变量,不过它们的顺序不必一定相同。若变量不同,可删除多余变量或在缺失变量处创建并追加NA值    
### 数据集取子集
`dataframe[row indices, column indices]`,如果某位值取空,代表行(列)全取    
**剔除数据集**   
``` 
myvars <- names(leadership) %in% c("q3", "q4")
newdata <- leadership[!myvars]
```

>(1) names(leadership) 生 成 了 一 个 包 含 所 有 变 量 名 的 字 符 型 向 量 :
>c("managerID","testDate","country","gender","age","q1", "q2","q3","q4","q5") 。    
>(2) names(leadership) %in% c("q3", "q4") 返 回 了 一 个 逻 辑 型 向 量 ,
>names(leadership)中每个匹配q3或q4的元素的值为TRUE ,反之为FALSE: c(FALSE, FALSE,
>FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, TRUE, FALSE)。    
>(3) 运算符非(!)将逻辑值反转: c(TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE,
>FALSE, TRUE)。    
>(4) leadership[c(TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, FALSE,
>TRUE)]选择了逻辑值为TRUE的列,于是q3和q4被剔除了。     

在知道q3和q4是第8个和第9个变量的情况下,可以使用语句:`newdata <- leadership[c(-8,-9)]`将它们剔除。这种方式的工作原理是,在某一列的下标之前加一个减号(–)就会剔除那一列。

最后,相同的变量删除工作亦可通过:`leadership$q3 <- leadership$q4 <- NULL`来完成。这回你将 q3 和 q4 两列设为了未定义( NULL )。注意, NULL 与 NA (表示缺失)是不
同的。

**subset()函数**    
```
newdata <- subset(leadership, age >= 35 | age < 24,
        select=c(q1, q2, q3, q4))
newdata <- subset(leadership, gender=="M" & age > 25,
        select=gender:q4)
```
**随机采样**    
`mysample <- frame_name[sample(1:nrow(leadership), 3, replace=FALSE),]` 样本数据3的无放回抽样

## 高级数据管理
### 数值和字符处理函数
数学函数|描述
----|-----
abs(x)| 绝对值
sqrt(x)| 平方根
ceiling(x)|  不小于 x 的最小整数
floor(x)|  不大于 x 的最大整数
trunc(x)|向 0 的方向截取的 x 中的整数部分,trunc(5.99)返回值为 5
round(x, digits=n)|将 x 舍入为指定位的小数
signif(x, digits=n)|将 x 舍入为指定的有效数字位数
cos(x)、 sin(x)、tan(x)、acos(x)、asin(x)、atan(x)、cosh(x)、sinh(x)、tanh(x)、acosh(x)、asinh(x)、atanh(x)|余弦、反余弦，双曲余弦、反双曲余弦
exp(x)|指数函数
log(x,base=n)|对 x 取以 n 为底的对数

统计函数|描述
---|-----------------
mean(x)| 平均数
median(x)|中位数
sd(x)| 标准差
var(x)|方差
mad(x)|绝对中位差(数据到中位数的偏差的绝对值的中位数)
quantile(x,probs)|求分位数。其中 x 为待求分位数的数值型向量,probs 为一个由[0,1]之间的概率值组成的数值向量
range(x)|求值域
sum(x)|求和
diff(x, lag=n)|滞后差分,lag 用以指定滞后几项。默认的 lag 值为 1,x<- c(1, 5, 23, 29),diff(x)返回值为 c(4, 18, 6)
min(x)|求最小值
max(x)| 求最大值
scale(x,center=TRUE,scale=TRUE)|为数据对象 x 按列进行中心化(center=TRUE)或标准化(center=TRUE,scale=TRUE),默认情况将数据标准化为均值0方差1;

**概率函数**    
在R中,概率函数形如 :`[dpqr] + 分布缩写()`
>其中第一个字母表示其所指分布的某一方面:    
>d = 密度函数(density)，p = 分布函数(distribution function)，q = 分位数函数(quantile function)，r = 生成随机数(随机偏差)

例如`qnorm(.9, mean=500, sd=100) #均值为 500,标准差为 100 的正态分布的 0.9 分位点值`,`pnorm(1.96) #位于 z=1.96 左侧的标准正态曲线下方面积`。

在R中生成伪随机数时，函数会每次调用不同种子，通过set.seed()可以指定这个种子，可使结果重现。

字符处理函数|描述
-----|--------
toupper(x)|大写转换
tolower(x)|小写转换
paste(..., sep="")|连接字符串,分隔符为 sep,例如，paste('today is ',date(),sep = ' ')
strsplit(x, split,fixed=FALSE)|在 split 处分割字符向量 x 中的元素。若 fixed=FALSE,则 pattern 为一个正则表达式。若 fixed=TRUE,则 pattern 为一个文本字符串
nchar(x)|计算 x 中的字符数量,  x <- 'good',length(x) = 1,nchat(x) = 4
substr(x, start, stop)|提取或替换一个字符向量中的子串,substr(x, 2, 4) <- "22222"(x 将变成"a222ef")
grep(pattern, x, ignore.case=FALSE, fixed=FALSE)|在 x 中搜索某种模式。若 fixed=FALSE,则 pattern 为一个正则表达式。若fixed=TRUE,则 pattern 为一个文本字符串。返回值为匹配的下标
sub(pattern, replacement,x, ignore.case=FALSE,fixed=FALSE)|在 x 中搜索 pattern,并以文本 replacement 将其替换。若 fixed=FALSE,则pattern 为一个正则表达式。若 fixed=TRUE,则 pattern 为一个文本字符串。

其他使用函数|描述
--------|--------
seq(from, to, by)|生成一个序列
rep(x, n)|将 x 重复 n 次,y <- rep(1:3, 2),y 的值为 c(1, 2, 3, 1, 2, 3)
pretty(x, n)|创建美观的分割点。通过选取 n+1 个等间距的取整值,将一个连续型变量x分割为n个区间。绘图中常用

### apply()
R中提供了一个 apply()函数,可将一个任意函数“应用”到矩阵、数组、数据框的任何维度上。apply()函数的使用格式为:`apply(x, MARGIN, FUN, ...)`。MARGIN=1表示行，2表示列，...部分表示传递给FUN的参数。

### 综合示例
将学生的各科考试成绩组合为单一的成绩衡量指标,基于相对名次
(前20%、下20%、等等)给出从A到F的评分,根据学生姓氏和名字的首字母对花名册进行排序。
```
Student <- c("John Davis", "Angela Williams", "Bullwinkle Moose",
    "David Jones", "Janice Markhammer", "Cheryl Cushing",
    "Reuven Ytzrhak", "Greg Knox", "Joel England",
    "Mary Rayburn")
    Math <- c(502, 600, 412, 358, 495, 512, 410, 625, 573, 522)
    Science <- c(95, 99, 80, 82, 75, 85, 80, 95, 89, 86)
    English <- c(25, 22, 18, 15, 20, 28, 15, 30, 27, 18)
    roster <- data.frame(Student, Math, Science, English,
    stringsAsFactors=FALSE) #录入数据
\\ 数据显示如下
             Student Math Science English
1         John Davis  502      95      25
2    Angela Williams  600      99      22
3   Bullwinkle Moose  412      80      18
4        David Jones  358      82      15
5  Janice Markhammer  495      75      20
6     Cheryl Cushing  512      85      28
7     Reuven Ytzrhak  410      80      15
8          Greg Knox  625      95      30
9       Joel England  573      89      27
10      Mary Rayburn  522      86      18 \\

z <- scale(roster[,2:4]) 分数进行标准化
score <- apply(z,MARGIN = 1,mean) # 求标准化成绩后的成绩均值
roster <- cbind(roster,score) #合并
y <- quantile(score, c(.8,.6,.4,.2)) #求.8,-.2的分位数
roster$grade[score >= y[1]] <- "A"
roster$grade[score < y[1] & score >= y[2]] <- "B"
roster$grade[score < y[2] & score >= y[3]] <- "C"
roster$grade[score < y[3] & score >= y[4]] <- "D"
roster$grade[score < y[4]] <- "F" # 按照.2间隔给予评分
Firstname <- sapply(name, "[", 1) #sapply()在这提取列表中第一个元素
Lastname <- sapply(name, "[", 2)
roster <- cbind(Firstname, Lastname, roster[,-1]) #-1意为除掉第一个列
roster[order(Lastname,Firstname),] # 根据姓名排序
```

### 控制流
if,while,for 略
```
# 关于switch
> feelings <- c("sad", "afraid")
> for (i in feelings)
print(
switch(i,
happy = "I am glad you are happy",
afraid = "There is nothing to fear",
sad
 = "Cheer up",
angry = "Calm down now"
)
)
[1] "Cheer up"
[1] "There is nothing to fear"
```
```
关于ifelse()
ifelse(score > 0.5, print("Passed"), print("Failed"))
```

### 整合与重构数据
t()对数据框进行转置

**数据整合**    
```
对于如下数据
mtcars
                     mpg cyl  disp  hp drat   wt qsec vs am gear carb
Mazda RX4           21.0   6 160.0 110 3.90 2.62 16.5  0  1    4    4
Mazda RX4 Wag       21.0   6 160.0 110 3.90 2.88 17.0  0  1    4    4
Datsun 710          22.8   4 108.0  93 3.85 2.32 18.6  1  1    4    1
Hornet 4 Drive      21.4   6 258.0 110 3.08 3.21 19.4  1  0    3    1
Hornet Sportabout   18.7   8 360.0 175 3.15 3.44 17.0  0  0    3    2
Valiant             18.1   6 225.0 105 2.76 3.46 20.2  1  0    3    1
Duster 360          14.3   8 360.0 245 3.21 3.57 15.8  0  0    3    4
Merc 240D           24.4   4 146.7  62 3.69 3.19 20.0  1  0    4    2
Merc 230            22.8   4 140.8  95 3.92 3.15 22.9  1  0    4    2
Merc 280            19.2   6 167.6 123 3.92 3.44 18.3  1  0    4    4
Merc 280C           17.8   6 167.6 123 3.92 3.44 18.9  1  0    4    4
Merc 450SE          16.4   8 275.8 180 3.07 4.07 17.4  0  0    3    3
Merc 450SL          17.3   8 275.8 180 3.07 3.73 17.6  0  0    3    3
Merc 450SLC         15.2   8 275.8 180 3.07 3.78 18.0  0  0    3    3
Cadillac Fleetwood  10.4   8 472.0 205 2.93 5.25 18.0  0  0    3    4
Lincoln Continental 10.4   8 460.0 215 3.00 5.42 17.8  0  0    3    4
Chrysler Imperial   14.7   8 440.0 230 3.23 5.34 17.4  0  0    3    4
Fiat 128            32.4   4  78.7  66 4.08 2.20 19.5  1  1    4    1
Honda Civic         30.4   4  75.7  52 4.93 1.61 18.5  1  1    4    2
Toyota Corolla      33.9   4  71.1  65 4.22 1.83 19.9  1  1    4    1
Toyota Corona       21.5   4 120.1  97 3.70 2.46 20.0  1  0    3    1
Dodge Challenger    15.5   8 318.0 150 2.76 3.52 16.9  0  0    3    2
AMC Javelin         15.2   8 304.0 150 3.15 3.44 17.3  0  0    3    2
Camaro Z28          13.3   8 350.0 245 3.73 3.84 15.4  0  0    3    4
Pontiac Firebird    19.2   8 400.0 175 3.08 3.85 17.1  0  0    3    2
Fiat X1-9           27.3   4  79.0  66 4.08 1.94 18.9  1  1    4    1
Porsche 914-2       26.0   4 120.3  91 4.43 2.14 16.7  0  1    5    2
Lotus Europa        30.4   4  95.1 113 3.77 1.51 16.9  1  1    5    2
Ford Pantera L      15.8   8 351.0 264 4.22 3.17 14.5  0  1    5    4
Ferrari Dino        19.7   6 145.0 175 3.62 2.77 15.5  0  1    5    6
Maserati Bora       15.0   8 301.0 335 3.54 3.57 14.6  0  1    5    8
Volvo 142E          21.4   4 121.0 109 4.11 2.78 18.6  1  1    4    2

```
通过`aggdata <-aggregate(mtcars, by=list(cyl,gear), FUN=mean, na.rm=TRUE)
`,实现对mtcars数据按照cyl,gear进行分类并返回各个数值类型的均值。返回结果如下
```
aggdata
  Group.1 Group.2  mpg cyl disp  hp drat   wt qsec  vs   am gear carb
1       4       3 21.5   4  120  97 3.70 2.46 20.0 1.0 0.00    3 1.00
2       6       3 19.8   6  242 108 2.92 3.34 19.8 1.0 0.00    3 1.00
3       8       3 15.1   8  358 194 3.12 4.10 17.1 0.0 0.00    3 3.08
4       4       4 26.9   4  103  76 4.11 2.38 19.6 1.0 0.75    4 1.50
5       6       4 19.8   6  164 116 3.91 3.09 17.7 0.5 0.50    4 4.00
6       4       5 28.2   4  108 102 4.10 1.83 16.8 0.5 1.00    5 2.00
7       6       5 19.7   6  145 175 3.62 2.77 15.5 0.0 1.00    5 6.00
8       8       5 15.4   8  326 300 3.88 3.37 14.6 0.0 1.00    5 6.00
```
在结果中, Group.1表示汽缸数量(4、6或8), Group.2代表挡位数(3、4或5)。举例第一行数据,拥有4个汽缸和3个挡位车型的每加仑汽油行驶英里数(mpg)均值为21.5。    

对于更加高级的数据整合方法，可利用reshape2包实现。
## 基本图形
### 条形图
`barplot()`可生成条形图。`?barolit`查看帮助文档。当height接受参数为向量时绘制一般条形图，但当其接受矩阵时，将绘制堆砌条形图或分组条形图(取决于参数beside = FALSE/TURE)。    
棘状图对堆砌条形图进行了重缩放,这样每个条形的高度均为1,每一段的高度即表示比例。由vcd包中的函数spine()绘制。
### 饼图
饼图可由以下函数创建:`pie(x, labels, main, col)`,col处可利用`rainbow(n)`快速导入n种颜色。在plotrix包pie3D可绘制三维饼图。    
饼图存在的问题是如果不将其占比录入标签，仅凭肉眼有时无法分辨占比大小。扇形图提供了一种同时展示相对数量和相互差异的方法。扇形图通过plotrix包`fan.plot()`实现。    
### 直方图
直方图通过在x轴上将值域分割为一定数量的组,在y轴上显示相应值的频数,展示了连续型变量的分布。可以使用如下函数创建直方图:`hist(x, breaks(分割组数),freq)`freq=FALSE表示根据概率密度而不是频数绘制图形
### 核密度图
利用density(x)其中的x是一个数值型向量。使用line(density(x))可将核密度图叠加到某图上方。    
使用sm包中的sm.density.compare()函数可向图形叠加两组或更多的核密度图。使用格式为:`sm.density.compare(x, factor)`其中的x 是一个数值型向量, factor是一个分组变量。将自动按照分组及对应数值进行绘制。
### 箱线图
箱线图(又称盒须图)通过绘制连续型变量的五数总括,即最小值、下四分位数(第25百分位数)、中位数(第50百分位数)、上四分位数(第75百分位数)以及最大值,描述了连续型变量的分布。箱线图能够显示出可能为离群点(范围±1.5*IQR以外的值,IQR表示四分位距,即上四分位数与下四分位数的差值)的观测。例如:`boxplot(mtcars$mpg, main="Box plot", ylab="Miles per Gallon")`    
箱线图可以展示单个变量或分组变量。使用格式为:`boxplot(formula, data=dataframe)`其中的formula是一个公式, dataframe代表提供数据的数据框(或列表)。一个示例公式为y~A,这将为类别型变量A的每个值并列地生成数值型变量y的箱线图。公式y~A*B则将为类别型变量A和B所有水平的两两组合生成数值型变量y的箱线图。    
添加参数varwidth=TRUE将使箱线图的宽度与其样本大小的平方根成正比.参数horizontal=TRUE 可以反转坐标轴的方向。,而varwidth=TRUE则使箱线图的宽度与它们各自的样本大小成正比。添加notch=TRUE,可以得到含凹槽的箱线图。
### 点图
点图提供了一种在简单水平刻度上绘制大量有标签值的方法。你可以使用dotchart()函数创建点图,格式为:`dotchart(x, labels=)`。通常来说,点图在经过排序并且分组变量被不同的符号和颜色区分开的时候最有用。
```
x <- mtcars[order(mtcars$mpg),]
x$cyl <- factor(x$cyl)
x$color[x$cyl==4] <- "red"
x$color[x$cyl==6] <- "blue"
x$color[x$cyl==8] <- "darkgreen"
dotchart(x$mpg,
    labels = row.names(x),
     cex=.7,
    groups = x$cyl, # 有用
    gcolor = "black",
    color = x$color,
    pch=19,
    main = "Gas Mileage for Car Models\ngrouped by cylinder",
    xlab = "Miles Per Gallon"）
```
## 基本统计分析
### 描述性统计量
求最小值、均值、最大值、四分位数`summary()`    
求最小值、中位数、最大值、四分位数`fivenum()`    
通过sapply()计算描述性统计量
```
> mystats <- function(x, na.omit=FALSE){
    if (na.omit)
    x <- x[!is.na(x)]
    m <- mean(x) # 均值
    n <- length(x) # 样本数
    s <- sd(x) # 标准差
    skew <- sum((x-m)^3/s^3)/n # 偏度
    kurt <- sum((x-m)^4/s^4)/n - 3 # 峰度
    return(c(n=n, mean=m, stdev=s, skew=skew, kurtosis=kurt))
}

```
其他可通过安装Hmisc,pastecs,psych等包实现。    

有时我们需要分组计算描述性统计量，先前学习的`aggregate()`可实现对数据分组但仅能返回均值、方差统计信息。在此使用`by()`
```
> mystats <- function(x, na.omit=FALSE){
    if (na.omit)
    x <- x[!is.na(x)]
    m <- mean(x) # 均值
    n <- length(x) # 样本数
    s <- sd(x) # 标准差
    skew <- sum((x-m)^3/s^3)/n # 偏度
    kurt <- sum((x-m)^4/s^4)/n - 3 # 峰度
    return(c(n=n, mean=m, stdev=s, skew=skew, kurtosis=kurt))
}
> dstats <- function(x){sapply(x, mystats)}
> myvars <- c("mpg", "hp", "wt")
> by(mtcars[myvars], mtcars$am, dstats)
```
其他可通过安装doBy,psych实现。
### 频数表和列联表
用于创建和处理列联表的函数    
函数|描述
-----|-----
table(var1, var2, ..., varN)| 使用 N 个类别型变量(因子)创建一个 N 维列联表
xtabs(formula, data)| 根据一个公式和一个矩阵或数据框创建一个 N 维列联表
prop.table(table, margins(1代表行，2代表列))|依 margins 定义的边际列表将表中条目表示为分数形式
margin.table(table, margins)|依 margins 定义的边际列表计算表中条目的和
addmargins(table, margins)|将概述边 margins(默认是求和结果，即边际和)放入表中
ftable(table)|创建一个紧凑的“平铺”式列联表

**多维列联表**    
table和xtabs都可以生成多维列联表，形如分类讨论？使用`ftable()`可以使得生成的表更加紧凑。

#### 独立性检验
```
chisq.test() 卡方独立检验
fisher.test() fisher精确检验，不可2*2列联
mantelhaen.test() Cochran-Mantel-Haenszel卡方检验，三层
```
检验是否独立，若不独立，利用vcd中`assocstats()`进行相关性度量。
### 相关
`cor()`函数可以计算这三种相关系数,而`cov()`函数可用来计算协方差。    
ggm包中pcor()可以计算偏方差(控制一些变量后研究两变量之间的相互关系)    

相关性显著性检验`cor.test(x, y, alternative = , method = )`alternative则用来指定进行双侧检验或单侧检验(取值
为"two.side"、"less"或"greater"),而method 用以指定要计算的相关类型("pearson"、"kendall" 或 "spearman" )。当研究的假设为总体的相关系数小于0时,请使用alternative="less" 。    

psych包`corr.test`可以一次性对多个相关关系进行检验。    
### t检验
独立样本t.test() 非独立t.test(y1, y2, paired=TRUE)
### 组建差异的非参数检验
## 回归
```
lm() 拟合线性回归模型
myfit <- lm(formula, data)
其中formula指要拟合的模型形式例如Y ~ X1 + X2 + ... + Xk
例如fit2 <- lm(weight ~ height + I(height^2),data=women)
# I函数内内容为一般表达，因为^有其他意思，防止其他调用。

```
以下函数应用于lm()返回对象
```
summary() 展示拟合模型的详细结果
coefficients() 列出拟合模型的模型参数(截距项和斜率)
confint()  提供模型参数的置信区间(默认 95%)
fitted() 列出拟合模型的预测值
residuals() 列出拟合模型的残差值
anova() 生成一个拟合模型的方差分析表,或者比较两个或更多拟合模型的方差分析表
vcov() 列出模型参数的协方差矩阵
AIC() 输出赤池信息统计量
plot() 生成评价拟合模型的诊断图
predict() 用拟合模型对新的数据集预测响应变量值

```

回归问题实例
```
states <- as.data.frame(
    state.x77[,c("Murder", "Population","Illiteracy", "Income", "Frost")]) 
    # 生成数据框
cor(states)
library(car)
scatterplotMatrix(states, spread=FALSE, smoother.args=list(lty=2),
main="Scatter Plot Matrix") # 相关性分析及可视化
fit <- lm(Murder ~ Population + Illiteracy + Income + Frost,data=states) 
#多元回归预测
```

### R表达式中常用符号
```
~ 分隔符号,左边为响应变量,右边为解释变量。例如,要通过 x、z 和 w 预测 y,代码为 y ~ x + z + w
+ 分隔预测变量
: 表示预测变量的交互项。例如,要通过 x、z 及 x 与 z 的交互项预测 y,代码为 y ~ x + z + x:z
* 表示所有可能交互项的简洁方式。代码 y~ x * z * w 可展开为 y ~ x + z + w + x:z + x:w + z:w +
x:z:w
^ 表示交互项达到某个次数。代码 y ~ (x + z + w)^2 可展开为 y ~ x + z + w + x:z + x:w + z:w
. 表示包含除因变量外的所有变量。例如,若一个数据框包含变量 x、y、z 和 w,代码 y ~ .可展开为 y ~
x + z + w
- 减号,表示从等式中移除某个变量。例如, y ~ (x + z + w)^2 – x:w 可展开为 y ~ x + z + w +
x:z + z:w
-1 删除截距项。例如,表达式 y ~ x - 1 拟合 y 在 x 上的回归,并强制直线通过原点
I() 从算术的角度来解释括号中的元素。例如, y ~ x + (z + w)^2 将展开为 y ~ x + z + w + z:w。
相反, 代码 y ~ x + I((z + w)^2)将展开为 y ~ x + h,h 是一个由 z 和 w 的平方和创建的新变量
function 可以在表达式中用的数学函数。例如,log(y) ~ x + z + w 表示通过 x、z 和 w 来预测 log(y)

```
### 回归诊断
**基础方法**    
Q-Q为45度直线，R vs F 没有关联、S-L为水平线周围随机分布，R vs L查看离群值和强影响值
```
fit <- lm(weight ~ height, data=women)
par(mfrow=c(2,2))
plot(fit) 
```

**进阶(car包)**
```
正态性 Q-Q qqPlot(fit, labels=row.names(states), id.
    method="identify",simulate=TRUE, main="Q-Q Plot")
相关性检验  durbinWatsonTest(fit)
线性 library(car) crPlots(fit)
同方差性library(car) ncvTest(fit)计分检验不显著则满足  spreadLevelPlot(fit)
多重共线性 sqrt(vif(fit)) >2 表示存在共线性
```
综合判断
```
library(gvlma)
gvmodel <- gvlma(fit)
summary(gvmodel) # 在Decision中显示是否通过
```
### 异常观测值
```
outlierTest(fit) 
#显示点名称以及离群点概率p，不显著则无离群点，否则删除该离群点后需在此判断是否有其他离群值

hat.plot <- function(fit) {
    p <- length(coefficients(fit))
    n <- length(fitted(fit))
    plot(hatvalues(fit), main="Index Plot of Hat Values")
    abline(h=c(2,3)*p/n, col="red", lty=2)
    identify(1:n, hatvalues(fit), names(hatvalues(fit)))
    }
    hat.plot(fit) # 判断高杠杆值点

cutoff <- 4/(nrow(states)-length(fit$coefficients)-2)
    plot(fit, which=4, cook.levels=cutoff)
    abline(h=cutoff, lty=2, col="red") # 判断强影响点

library(car)
    influencePlot(fit, main="Influence Plot",
    sub="Circle size is proportional to Cook's distance")
# 综合判断。纵坐标-离群点,水平轴-高杠杆值(通常为预测值的组合)。圆圈大小与影响成比例,
圆圈很大的点可能是对模型参数的估计造成的不成比例影响的强影响点
```
### 选择最佳回归模型
#### 对两模型的选择
```
fit1 <- lm(Murder ~ Population + Illiteracy + Income + Frost,
data=states)
fit2 <- lm(Murder ~ Population + Illiteracy, data=states)
```
俩嵌套模型采用anova()。当显示添加变量后显著则可添加变量，通用AIC()。AIC越小模型越好。
#### 大量变量中选择预测变量
MASS包中的stepAIC()根据AIC逐步进行变量删除和增添。能够保证单次最优但不一定为整体最优    
leaps包中regsubsets()实现全子集回归。略了。    
根据相对权重选择
```
# 计算预测变量的相对权重
relweights <- function(fit,...){
R <- cor(fit$model)
nvar <- ncol(R)
rxx <- R[2:nvar, 2:nvar]
rxy <- R[2:nvar, 1]
svd <- eigen(rxx)
evec <- svd$vectors
ev <- svd$values
delta <- diag(sqrt(ev))
lambda <- evec %*% delta %*% t(evec)
lambdasq <- lambda ^ 2
beta <- solve(lambda) %*% rxy
rsquare <- colSums(beta ^ 2)
rawwgt <- lambdasq %*% beta ^ 2
import <- (rawwgt / rsquare) * 100
import <- as.data.frame(import)
row.names(import) <- names(fit$model[2:nvar])
names(import) <- "Weights"
import <- import[order(import),1, drop=FALSE]
dotchart(import$Weights, labels=row.names(import),
xlab="% of R-Square", pch=19,
main="Relative Importance of Predictor Variables",
sub=paste("Total R-Square=", round(rsquare, digits=3)),
...)
return(import)
}
```

### k折交叉验证
bootstrap包中的crossval()函数可以实现k重交叉验证。
$R^2$的K折交叉验证函数
```
shrinkage <- function(fit, k=10){
    require(bootstrap)
    theta.fit <- function(x,y){lsfit(x,y)}
    theta.predict <- function(fit,x){cbind(1,x)%*%fit$coef}
    x <- fit$model[,2:ncol(fit$model)]
    y <- fit$model[,1]
    results <- crossval(x, y, theta.fit, theta.predict, ngroup=k)
    r2 <- cor(y, fit$fitted.values)^2
    r2cv <- cor(y, results$cv.fit)^2
    cat("Original R-square =", r2, "\n")
    cat(k, "Fold Cross-Validated R-square =", r2cv, "\n")
    cat("Change =", r2-r2cv, "\n")
    }

```
用来检验该回归函数的泛化能力。
## 方差分析
### ANOVA模型拟合
利用aov()函数，`aov(formula, data=dataframe)`
```
单因素 ANOVA y ~ A
含单个协变量的单因素 ANCOVA  y ~ x + A
双因素 ANOVA  y ~ A * B
含两个协变量的双因素 ANCOVA  y ~ x1 + x2 + A*B
随机化区组  y ~ B + A(B 是区组因子)
单因素组内 ANOVA  y ~ A + Error(Subject/A)
含单个组内因子(W)和单个组间因子(B)的重复测量 ANOVA  y ~ B * W + Error(Subject/W)
```
R默认采用序惯型，例如对y ~ A + B + A:B,R中的ANOVA表的结果将评价:    
 A对 y的影响;    
 控制A时,B对y的影响;    
 控制A和B的主效应时,A与B的交互效应。    
### 单因素方差分析
课本上有一个非常完整的例子，可以参考
```
aggregate(response, by=list(trt), FUN=mean) 依照治疗方式不同给出各组均值和方差
aggregate(response, by=list(trt), FUN=sd)
fit <- aov(response ~ trt)
summary(fit) 检验组间差异绘制各组均值和置信区间
library(gplots)
plotmeans(response ~ trt, xlab="Treatment", ylab="Response",
main="Mean Plot\nwith 95% CI")
detach(cholesterol)
```

多重比较，细究哪组与其他组别不同。multcomp包中的glht()函数提供了多重均值比较更为全面的方法,既适用于线性模型(如本章各例),也适用于广义线性模型(见第13章).

```
library(multcomp)
par(mar=c(5,4,6,2)) # 增大图形上部面积完整显示图片
tuk <- glht(fit, linfct=mcp(trt="Tukey"))
plot(cld(tuk, level=.05),col="lightgrey") # 最终结果有相同字母的差异不显著
```
### 单因素协方差
课本具有完整的例子，可参考。
```
> data(litter, package="multcomp")
> attach(litter)
> table(dose)
dose
0 5 50 500
20 19 18 17
> aggregate(weight, by=list(dose), FUN=mean)
  Group.1  x
1   0  32.3
2   5 29.3
3   50 29.9
4   500 29.6
> fit <- aov(weight ~ gesttime + dose)
> summary(fit)
         Df  Sum Sq  Mean Sq  F value Pr(>F)
gesttime  1  134.30  134.30    8.0493 0.005971 **
dose      3  137.12  45.71     2.7394 0.049883 *
Residuals 69 1151.27 16.69
---
Signif. codes: 0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

```
利用table()函数,可以看到每种剂量下所产的幼崽数并不相同:0剂量时(未用药)产崽
20个,500剂量时产崽17个。再用aggregate()函数获得各组均值,可以发现未用药组幼崽体重
均值最高(32.3)。ANCOVA的F检验表明:(a)怀孕时间与幼崽出生体重相关;(b)控制怀孕时间,
药物剂量与出生体重相关。控制怀孕时间,确实发现每种药物剂量下幼崽出生体重均值不同。

### 双因素方差
数据集为喂食材料和剂量影响鼠牙齿长度
```
attach(ToothGrowth)
table(supp, dose)
ggregate(len, by=list(supp, dose), FUN=mean)
aggregate(len, by=list(supp, dose), FUN=sd)
# 以上标准流程
dose <- factor(dose) 将其转化为分组因子变量
fit <- aov(len ~ supp*dose) 
summary(fit)

```
结果可视化
```
interaction.plot(dose, supp, len, type="b", # 自、自、因
    col=c("red","blue"), pch=c(16, 18),
    main = "Interaction between Dose and Supplement Type")

```
### 重复测量方差分析
### 多元方差分析
使用`fit <- manova(y ~ shelf)`，`summary(fit)`对组间差异进行多元检验，显著可对每一个变量做分析`summary.aov(fit)`

## 功效分析
作为统计咨询师,我经常会被问到这样一个问题:“我的研究到底需要多少个受试者呢?”或者换个说法 “对于我的研究,现有x个可用的受试者,这样的研究值得做吗?”这类问题都可用通过功效分析(power analysis)来解决,它在实验设计中占有重要地位。
本章利用pwr包做功效分析：    
对于每个函数,用户可以设定四个量(样本大小、显著性水平、功效和效应值)中的三个量，第四个将由软件计算出来 
```
pwr.2p.test() 两比例(n 相等)
pwr.2p2n.test() 两比例(n 不相等)
pwr.anova.test() 平衡的单因素 ANOVA
pwr.chisq.test() 卡方检验
pwr.f2.test() 广义线性模型
pwr.p.test() 比例(单样本)
pwr.r.test() 相关系数
pwr.t.test() t 检验(单样本、两样本、配对)
pwr.t2n.test() t 检验(n 不相等的两样本)
```
#### t检验
`pwr.t.test(n=, d=, sig.level=, power=, type=, alternative=)`d为效应值$d = \frac{u_1 - u_2}{\sigma}$。sig.level为显著性水平，默认0.05,power为功效水平(有power可能性检验到目标效应值),type指检验类型:双样本t检验("two.sample") 、单样本t检验( "one.sample")或相依样本t检验("paired")。默认为双样本t检验。"alternative" 指统计检验是双侧检验( "two.sided" )还是单侧检验( "less" 或"greater")。默认为双侧检验。

对于求出power过小或者sig.level、n过大都对我们实验收益不利

#### 方差分析
pwr.anova.test()函数可以对平衡单因素方差分析进行功效分析。格式为:`pwr.anova.test(k=, n=, f=, sig.level=, power=)`
效应值衡量$\sqrt{\sum p_i * (u_i - u)^2 /\sigma^2}$

#### 相关性分析
pwr.r.test()函数可以对相关性分析进行功效分析。格式如下:`pwr.r.test(n=, r=, sig.level=, power=, alternative=)`    
例`pwr.r.test(r=.25, sig.level=.05, power=.90, alternative="greater") #显著性水平0.05,单边检验，总体相关性分界0.25,如果H0错误有90%信心拒绝H0`

#### 线性模型
对于线性模型(比如多元回归),pwr.f2.test()函数可以完成相应的功效分析,格式为:`pwr.f2.test(u=, v=, f2=, sig.level=, power=)`
#### 比例检验
当比较两个比例时,可使用pwr.2p.test()函数进行功效分析。格式为:`pwr.2p.test(h=, n=, sig.level=, power=)`，效应值使用函数ES.h(p1, p2)，当两组n不同使用`pwr.2p2n.test(h=, n1=, n2=, sig.level=, power=)`,h为效应值。    
例如
```
pwr.2p.test(h=ES.h(.65, .6), sig.level=.05, power=.9,
    alternative="greater")
# 对于两种药物治愈65%和60%可信性进行检验，需要有90%概率得到新药更有效并且有95%把握
不会得到错误结论，由于只关心更好，单边检验
```
#### 卡方检验
略
#### 新情况中推荐效应值
功效分析中,预期效应值是最难决定的参数。它通常需要你对主题有一定的了解,并有相应
的测量经验。例如,过去研究中的数据可以用来计算效应值,这能为后面深层次的研究提供一些参考。
但是当面对全新的研究情况,没有任何过去的经验可借鉴时,本节提到了一些参考。
### 绘制功效分析图
实例
```
library(pwr)
r <- seq(.1,.5,.01) # 相关系数
nr <- length(r)
 p <- seq(.4,.9,.1) # 功效
np <- length(p)


samsize <- array(numeric(nr*np), dim=c(nr,np)) # 样本大小

for (i in 1:np){
    for (j in 1:nr){
        result <- pwr.r.test(n = NULL, r = r[j],
        sig.level = .05, power = p[i],
        alternative = "two.sided")
        samsize[j,i] <- ceiling(result$n)  # 求出需要的样本数
    }
}


xrange <- range(r) # 找x范围
yrange <- round(range(samsize)) # 找y范围
colors <- rainbow(length(p))

plot(xrange, yrange, type="n",
xlab="Correlation Coefficient (r)",
ylab="Sample Size (n)" )  # 绘制框架


for (i in 1:np){
lines(r, samsize[,i], type="l", lwd=2, col=colors[i])
} # 添加功效曲线


abline(v=0, h=seq(0,yrange[2],50), lty=2, col="grey89") 
abline(h=0, v=seq(xrange[1],xrange[2],.02), lty=2, col="gray89") #网格线


title("Sample Size Estimation for Correlation Studies\n
Sig=0.05 (Two-tailed)")
legend("topright", title="Power", as.character(p),
fill=colors)
# 注释
```
## 中级绘图
### 散点——散点图矩阵、高密度散点图、三维散点图、旋转散点图、气泡图
### 折线图
### 相关图
### 马赛克图
##  重抽样与自助法
    这一章我主要是随便看看了解一下，因为在机器学习部分已经有接触。
## 主成分分析和因子分析
    问题面向主要为：当数据变量过多时，盲目分析会增大工作量，主成分分析和探索
    性因子分析是两种用来探索和简化多变量复杂关系的常用方法。
    主成分分析(PCA)是一种数据降维技巧,它能将大量相关变量转化为一组很少的不相
    关变量,这些无关变量称为主成分。例如,使用PCA可将30个相关(很可能冗余)的环
    境变量转化为5个无关的成分变量,并且尽可能地保留原始数据集的信息。
    探索性因子分析(EFA)是一系列用来发现一组变量的潜在结构的方法。寻找一组更小
    的、潜在的或隐藏的结构来解释已观测到的、显式的变量间的关系。
    这两种方法需要大量的样本以支撑结果，但究竟多大样本量能够保证尚未知。
    目前,数据分析师常使用经验法则:“因子分析需要5~10倍于变量数的样本数。

###  R 中的主成分和因子分析
R的基础安装包提供了PCA和EFA的函数,分别为princomp()和factanal()。    
```
psych包中有用的因子分析函数

principal()  含多种可选的方差旋转方法的主成分分析
fa()  可用主轴、最小残差、加权最小平方或最大似然法估计的因子分析
fa.parallel()  含平行分析的碎石图
factor.plot()  绘制因子分析或主成分分析的结果
fa.diagram()  绘制因子分析或主成分的载荷矩阵
scree()  因子分析和主成分分析的碎石图
```

#### 基本流程
>(1) 数据预处理。PCA和EFA都根据观测变量间的相关性来推导结果。用户可以输入原始数
>据矩阵或者相关系数矩阵到principal()和fa()函数中。若输入初始数据,相关系数矩阵将会
>被自动计算,在计算前请确保数据中没有缺失值。
>(2) 选择因子模型。判断是PCA(数据降维)还是EFA(发现潜在结构)更符合你的研究目
>标。如果选择EFA方法,你还需要选择一种估计因子模型的方法(如最大似然估计)。
>(3) 判断要选择的主成分/因子数目。
>(4) 选择主成分/因子。
>(5) 旋转主成分/因子。
>(6) 解释结果。
>(7) 计算主成分或因子得分。

### 主成分分析
#### 判断主成分的个数
**主要为以下三种法则**

* 最常见的是基于特征值的方法，特征值大的优先选择，并且一般主成分选择特征值大于1的部分(Kaiser-Harris准则)。    
* Cattell碎石检验则绘制了特征值与主成分数的图形。在图形变化最大处之上的主成分都可保留    
* 依据与初始矩阵相同大小的随机数据矩阵来判断要提取的特征值。若基于真实数据的某个特征值大于一组随机数据矩阵相应的平均特征值,那么该主成分可以保留

利用fa.parallel()函数,你可以同时对三种特征值判别准则进行评价。y=1以上、虚线(随机矩阵均值)以上、最大折点以上可选择为主成分。
```
fa.parallel(USJudgeRatings[,-1], # 导入数据框 
    fa="pc", #fa : 显示主成分（fa=“pc”）或主轴因子分析（fa=“fa”）或主成分
    和主因子（fa=“both”）的特征值 
    n.iter=100,
    show.legend=FALSE, main="Scree plot with parallel analysis")+
    abline(h=1) #y=1水平线
```
#### 提取主成分
在判断主成分个数后，我们依据个数提取主成分
```
principal(r, nfactors=, rotate=, scores=)

r是相关系数矩阵或原始数据矩阵;
nfactors设定主成分数(默认为1)
rotate指定旋转的方法，"none","varimax"正交旋转
scores设定是否需要计算主成分得分(默认不需要),scores = "TRUE"
            当scores = TRUE时,主成分得分存储在principal()函数返回对象的scores元素中。
```
例如
```
> library(psych)
> pc <- principal(USJudgeRatings[,-1], nfactors=1)
> pc

Principal Components Analysis
Call: principal(r = USJudgeRatings[, -1], nfactors=1)
Standardized loadings based upon correlation matrix
     PC1   h2    u2  #PC1 代表主成分1和其他因素相关性
INTG 0.92 0.84 0.157 #h2主成分对每个变量的方差解释度。
DMNR 0.91 0.83 0.166 #u2栏指成分唯一性,即方差无法被主成分解释的比例(1-h)
DILG 0.97 0.94 0.061
CFMG 0.96 0.93 0.072
DECI 0.96 0.92 0.076
PREP 0.98 0.97 0.030
FAMI 0.98 0.95 0.047
ORAL 1.00 0.99 0.009
WRIT 0.99 0.98 0.020
PHYS 0.89 0.80 0.201
RTEN 0.99 0.97 0.028
                PC1
SS loadings 10.13 
Proportion Var 0.92 # 最后,Proportion Var行表示的是每个主成分对整个数据集的解释程度

[......已删除额外输出......]

```
### 探索性因子分析
#### 判断需提取的公共因子数
同样fa.parallel(),此时注意    
* fa="both",因子图形将会同时展示主成分和公共因子分析结果    
* 对于EFA,Kaiser-Harris准则的特征值数大于0而不是1    
* 若此时两种分析方法得到数量不一致选用大的

#### 提取公共因子
fa(r, nfactors=, n.obs=, rotate=, scores=, fm=)
```
r是相关系数矩阵或者原始数据矩阵;
nfactors设定提取的因子数(默认为1) ;
n.obs是观测数(输入相关系数矩阵时需要填写) ;
rotate设定旋转的方法(默认互变异数最小法) ; rotate="promax"斜交旋转，rotate="varimax"正交旋转
scores设定是否计算因子得分(默认不计算) ;
fm设定因子化方法(默认极小残差法) 。 
                包括最大似然法( ml)、主轴迭代法(pa)、加权最小二乘
                法(wls)、广义加权最小二乘法(gls)和最小残差法(minres)。

```
#### 绘制可视化图形
使用 factor.plot()或fa.diagram()函数,你可以绘制正交或者斜交结果的图形。来看
以下代码:
```
factor.plot(fa.promax,labels=rownames(fa.promax$loadings))
```
通过如下代码可以生成箭线图。
```
fa.diagram(fa.promax, simple=FALSE)
```
## 分类问题处理
### 数据准备
```
loc <- "http://archive.ics.uci.edu/ml/machine-learning-databases/"
ds <- "breast-cancer-wisconsin/breast-cancer-wisconsin.data"
url <- paste(loc, ds, sep="")
    # 做连接指向数据

breast <- read.table(url, sep=",", header=FALSE, na.strings="?")
names(breast) <- c("ID", "clumpThickness", "sizeUniformity",
    "shapeUniformity", "maginalAdhesion",
    "singleEpithelialCellSize", "bareNuclei",
    "blandChromatin", "normalNucleoli", "mitosis", "class")
# 为数据重新进行行命名

df <- breast[-1] #去掉第一行ID
df$class <- factor(df$class, levels=c(2,4),
    labels=c("benign", "malignant")) #2 = 良性 4 = 恶性

set.seed(1234)
train <- sample(nrow(df), 0.7*nrow(df)) #sample从nrow(df)随机取70%
df.train <- df[train,]
df.validate <- df[-train,] #留出法测试集
table(df.train$class) #列联表统计频数
table(df.validate$class)
```
### 逻辑回归
R中的基本函数glm()可用于拟合逻辑回归模型(具体见回归)
```
fit.logit <- glm(class~., data=df.train, family=binomial())
summary(fit.logit)
prob <- predict(fit.logit, df.validate, type="response") 
 # predict()函数默认输出肿瘤为恶性的对数概率,指定参数type="response"即
    可得到预测肿瘤恶性的概率，大于0.5则划分为恶性
logit.pred <- factor(prob > .5, levels=c(FALSE, TRUE),
    labels=c("benign", "malignant"))
logit.perf <- table(df.validate$class, logit.pred,
   dnn=c("Actual", "Predicted")) #评估的准确性
logit.perf
Predicted
Actual   benign malignant
benign    118      2
malignant  4       76
```
### 决策树
R中的rpart包支持rpart()函数构造决策树, prune() 函数对决策树进行剪枝。下面给出
判别细胞为良性或恶性的决策树算法实现。
```
> library(rpart)
> set.seed(1234)
> dtree <- rpart(class ~ ., data=df.train, method="class",
    parms=list(split="information"))#生成树，之后可以summary(dtree)查看若过大剪枝
#剪枝依据
>dtree$cptable
    CP    nsplit rel error xerror xstd
复杂度参数  分支数      误差  10折误差 交叉验证标准差

# 我们选择最小10折误差加减交叉标准差的范围内的分支数对应的cp值，可以用plotcp(dtree)
#这里我们选了0.0125
>dtree.pruned <- prune(dtree, cp=.0125)

# 绘制决策树
library(rpart.plot)
prp(dtree.pruned, type = 2, extra = 104,
fallen.leaves = TRUE, main="Decision Tree")

dtree.pred <- predict(dtree.pruned, df.validate, type="class")
dtree.perf <- table(df.validate$class, dtree.pred,
    dnn=c("Actual", "Predicted")) # 测试
```
#### 条件推断树
不需要剪枝，更加自动化
```
library(party)
fit.ctree <- ctree(class~., data=df.train)
plot(fit.ctree, main="Conditional Inference Tree")
> ctree.pred <- predict(fit.ctree, df.validate, type="response")
> ctree.perf <- table(df.validate$class, ctree.pred,
    dnn=c("Actual", "Predicted"))
> ctree.perf
        Predicted
Actual benign malignant
benign  122       7
malignant 3       78
```
### 随机森林
#### 原理
(1) 从训练集中随机有放回地抽取N个样本单元,生成大量决策树。    
(2) 在每一个节点随机抽取m< M个变量,将其作为分割该节点的候选变量。每一个节点处的变量数应一致。    
(3) 完整生成所有决策树,无需剪枝(最小节点为1)。    
(4) 终端节点的所属类别由节点对应的众数类别决定。    
(5) 对于新的观测点,用所有的树对其进行分类,其类别由多数决定原则生成。    
randomForest包中的randomForest()函数可用于生成随机森林。函数默认生成500棵树,
并且默认在每个节点处抽取sqrt(M)个变量,最小节点为1。
#### 实例
```
library(randomForest)
set.seed(1234)

fit.forest <- randomForest(class~., data=df.train,
    na.action=na.roughfix, #将NA替换为对应列中位数
    importance=TRUE) #显示重要性
importance(fit.forest)type1-MeanDecreaseAccuracy 2-MeanDecreaseGini

forest.pred <- predict(fit.forest, df.validate)
forest.perf <- table(df.validate$class, forest.pred,
    dnn=c("Actual", "Predicted"))
```
### 支持向量机(SVM)
硬软间隔概念    
SVM可以通过R中kernlab包的ksvm()函数和 e1071包中的 svm()函数实现。ksvm()功能更强大,但svm()相对更简单。代码清单17-6给出了通过svm()函数对威斯康星州乳腺癌数据建立SVM模型的一个示例。
```
library(e1071)  
set.seed(1234)
fit.svm <- svm(class~., data=df.train)
    # svm默认对变量执行标准化
svm.pred <- predict(fit.svm, na.omit(df.validate))
svm.perf <- table(na.omit(df.validate)$class,
svm.pred, dnn=c("Actual", "Predicted"))
```
使用svm有两个参数可能影响结果，gamma和cost。gamma控制分割超平面的形状。gamma(>0)越大,通常导致支持向量越多。成本参数cost代表犯错的成本。较大可能过拟合。
svm()函数默认设置gamma为预测变量个数的倒数,成本参数为1。。在建模时,我们可以尝试变动参数值建立不同的模型,但利用格点搜索法可能更有效。可以通过 tune.svm()对每个参数设置一个候选范围,tune.svm()函
数对每一个参数组合生成一个SVM模型,并输出在每一个参数组合上的表现。
```
set.seed(1234)
tuned <- tune.svm(class~., data=df.train,
    gamma=10^(-6:1),cost=10^(-10:10))
tuned
    best parameters:
        amma cost
        0.01    1
fit.svm <- svm(class~., data=df.train, gamma=.01, cost=1)
svm.pred <- predict(fit.svm, na.omit(df.validate))
svm.perf <- table(na.omit(df.validate)$class,
svm.pred, dnn=c("Actual", "Predicted"))
```
### 模型性能评价
指标：
```
敏感度  正类的样本单元被成功预测的概率,也叫正例覆盖率(true positive)或召回率(recall)
特异性 负类的样本单元被成功预测的概率,也叫负例覆盖率(true negative)
正例命中率 被预测为正类的样本单元中,预测正确的样本单元占比,也叫精确度(precision)
负例命中率 被预测为负类的样本单元中,预测正确的样本单元占比
准确率 被正确分类的样本单元所占比重,也叫ACC
```
性能评估函数
```
performance <- function(table, n=2){
if(!all(dim(table) == c(2,2)))
    stop("Must be a 2 x 2 table")
tn = table[1,1]
fp = table[1,2]
fn = table[2,1]
tp = table[2,2]
sensitivity = tp/(tp+fn)
specificity = tn/(tn+fp)
ppp = tp/(tp+fp)
npp = tn/(tn+fn)
hitrate = (tp+tn)/(tp+tn+fp+fn)
result <- paste("Sensitivity = ", round(sensitivity, n) ,
"\nSpecificity = ", round(specificity, n),
"\nPositive Predictive Value = ", round(ppp, n),
"\nNegative Predictive Value = ", round(npp, n),
"\nAccuracy = ", round(hitrate, n), "\n", sep="")
cat(result)}
```