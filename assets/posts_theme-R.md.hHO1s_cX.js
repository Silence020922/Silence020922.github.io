import{_ as t,o as p,c as e,k as a,a as s,R as n}from"./chunks/framework.CP3Xps-Z.js";const U=JSON.parse('{"title":"R语言入门","description":"专业课——统计软件的随笔，这里使用的参考书目是《R语言实战(第二版)》","frontmatter":{"title":"R语言入门","date":"2022-10-17T00:00:00.000Z","tags":["R"],"description":"专业课——统计软件的随笔，这里使用的参考书目是《R语言实战(第二版)》"},"headers":[],"relativePath":"posts/theme-R.md","filePath":"posts/theme-R.md"}'),l={name:"posts/theme-R.md"},i=n(`<ul><li><a href="#安装r及配置编译器">安装R及配置编译器</a><ul><li><a href="#radian">radian</a></li><li><a href="#rstudio">RStudio</a></li></ul></li><li><a href="#作业1">作业1</a></li><li><a href="#作业2">作业2</a></li><li><a href="#作业3">作业3</a></li><li><a href="#基本命令">基本命令</a><ul><li><a href="#包">包</a></li></ul></li><li><a href="#创建数据集">创建数据集</a><ul><li><a href="#数据结构">数据结构</a><ul><li><a href="#向量">向量</a></li><li><a href="#矩阵">矩阵</a></li><li><a href="#数组">数组</a></li><li><a href="#数据框">数据框</a></li><li><a href="#列表">列表</a></li></ul></li><li><a href="#r的注释问题">R的注释问题</a></li><li><a href="#数据的输入">数据的输入</a><ul><li><a href="#利用键盘输入">利用键盘输入</a></li><li><a href="#从带分隔符的文本文件导入数据">从带分隔符的文本文件导入数据</a></li><li><a href="#导入excel数据">导入excel数据</a></li><li><a href="#导入spss数据">导入SPSS数据</a></li><li><a href="#导入sas数据">导入SAS数据</a></li><li><a href="#导入stata-数据">导入Stata 数据</a></li></ul></li><li><a href="#数据集的标注">数据集的标注</a><ul><li><a href="#值标签">值标签</a></li></ul></li><li><a href="#处理数据对象的实用函数">处理数据对象的实用函数</a></li></ul></li><li><a href="#初级绘图">初级绘图</a><ul><li><a href="#绘图参数">绘图参数</a></li><li><a href="#颜色参数">颜色参数</a></li><li><a href="#文本属性">文本属性</a></li><li><a href="#图形尺寸和边界大小">图形尺寸和边界大小</a></li><li><a href="#添加文本自定义坐标轴和图例">添加文本、自定义坐标轴和图例</a></li><li><a href="#参考线">参考线</a></li><li><a href="#图例">图例</a></li><li><a href="#文本标注">文本标注</a></li><li><a href="#图形的组合">图形的组合</a></li></ul></li><li><a href="#基本数据管理">基本数据管理</a><ul><li><a href="#创建新变量">创建新变量</a></li><li><a href="#变量的重编码">变量的重编码</a></li><li><a href="#变量的重命名">变量的重命名</a></li><li><a href="#缺失值">缺失值</a></li><li><a href="#日期值">日期值</a></li><li><a href="#类型转换函数">类型转换函数</a></li><li><a href="#数据排序">数据排序</a></li><li><a href="#数据合并">数据合并</a></li><li><a href="#数据集取子集">数据集取子集</a></li></ul></li><li><a href="#高级数据管理">高级数据管理</a><ul><li><a href="#数值和字符处理函数">数值和字符处理函数</a></li><li><a href="#apply">apply()</a></li><li><a href="#综合示例">综合示例</a></li><li><a href="#控制流">控制流</a></li><li><a href="#整合与重构数据">整合与重构数据</a></li></ul></li><li><a href="#基本图形">基本图形</a><ul><li><a href="#条形图">条形图</a></li><li><a href="#饼图">饼图</a></li><li><a href="#直方图">直方图</a></li><li><a href="#核密度图">核密度图</a></li><li><a href="#箱线图">箱线图</a></li><li><a href="#点图">点图</a></li></ul></li><li><a href="#基本统计分析">基本统计分析</a><ul><li><a href="#描述性统计量">描述性统计量</a></li><li><a href="#频数表和列联表">频数表和列联表</a><ul><li><a href="#独立性检验">独立性检验</a></li></ul></li><li><a href="#相关">相关</a></li><li><a href="#t检验">t检验</a></li><li><a href="#组建差异的非参数检验">组建差异的非参数检验</a></li></ul></li><li><a href="#回归">回归</a><ul><li><a href="#r表达式中常用符号">R表达式中常用符号</a></li><li><a href="#回归诊断">回归诊断</a></li><li><a href="#异常观测值">异常观测值</a></li><li><a href="#选择最佳回归模型">选择最佳回归模型</a><ul><li><a href="#对两模型的选择">对两模型的选择</a></li><li><a href="#大量变量中选择预测变量">大量变量中选择预测变量</a></li></ul></li><li><a href="#k折交叉验证">k折交叉验证</a></li></ul></li><li><a href="#方差分析">方差分析</a><ul><li><a href="#anova模型拟合">ANOVA模型拟合</a></li><li><a href="#单因素方差分析">单因素方差分析</a></li><li><a href="#单因素协方差">单因素协方差</a></li><li><a href="#双因素方差">双因素方差</a></li><li><a href="#重复测量方差分析">重复测量方差分析</a></li><li><a href="#多元方差分析">多元方差分析</a></li></ul></li><li><a href="#功效分析">功效分析</a><ul><li><a href="#t检验-1">t检验</a></li><li><a href="#方差分析-1">方差分析</a></li><li><a href="#相关性分析">相关性分析</a></li><li><a href="#线性模型">线性模型</a></li><li><a href="#比例检验">比例检验</a></li><li><a href="#卡方检验">卡方检验</a></li><li><a href="#新情况中推荐效应值">新情况中推荐效应值</a></li><li><a href="#绘制功效分析图">绘制功效分析图</a></li></ul></li><li><a href="#中级绘图">中级绘图</a><ul><li><a href="#散点散点图矩阵高密度散点图三维散点图旋转散点图气泡图">散点——散点图矩阵、高密度散点图、三维散点图、旋转散点图、气泡图</a></li><li><a href="#折线图">折线图</a></li><li><a href="#相关图">相关图</a></li><li><a href="#马赛克图">马赛克图</a></li></ul></li><li><a href="#重抽样与自助法">重抽样与自助法</a></li><li><a href="#主成分分析和因子分析">主成分分析和因子分析</a><ul><li><a href="#r-中的主成分和因子分析">R 中的主成分和因子分析</a><ul><li><a href="#基本流程">基本流程</a></li></ul></li><li><a href="#主成分分析">主成分分析</a><ul><li><a href="#判断主成分的个数">判断主成分的个数</a></li><li><a href="#提取主成分">提取主成分</a></li></ul></li><li><a href="#探索性因子分析">探索性因子分析</a><ul><li><a href="#判断需提取的公共因子数">判断需提取的公共因子数</a></li><li><a href="#提取公共因子">提取公共因子</a></li><li><a href="#绘制可视化图形">绘制可视化图形</a></li></ul></li></ul></li><li><a href="#分类问题处理">分类问题处理</a><ul><li><a href="#数据准备">数据准备</a></li><li><a href="#逻辑回归">逻辑回归</a></li><li><a href="#决策树">决策树</a><ul><li><a href="#条件推断树">条件推断树</a></li></ul></li><li><a href="#随机森林">随机森林</a><ul><li><a href="#原理">原理</a></li><li><a href="#实例">实例</a></li></ul></li><li><a href="#支持向量机svm">支持向量机(SVM)</a></li><li><a href="#模型性能评价">模型性能评价</a></li></ul></li></ul><h2 id="安装r及配置编译器" tabindex="-1">安装R及配置编译器 <a class="header-anchor" href="#安装r及配置编译器" aria-label="Permalink to &quot;安装R及配置编译器&quot;">​</a></h2><h3 id="radian" tabindex="-1">radian <a class="header-anchor" href="#radian" aria-label="Permalink to &quot;radian&quot;">​</a></h3><p>这是我在linux系统上使用的编译器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>sudo pacman -S r #用于安装R</span></span>
<span class="line"><span>sudo pacman -S pythohn-pip #安装pip</span></span>
<span class="line"><span>pip install -U radian #在此使用radian 作为R的编译器</span></span></code></pre></div><p>具体配置文档参考<a href="https://github.com/randy3k/radian" target="_blank" rel="noreferrer">这里</a><br><em>注意</em>：与其他编译器不同的是,radian不再使用.Rhistory存储，反而自动存储于.radian_histor中供全局或者本地使用。</p><h3 id="rstudio" tabindex="-1">RStudio <a class="header-anchor" href="#rstudio" aria-label="Permalink to &quot;RStudio&quot;">​</a></h3><p>这是在windows上图方便用的<br> 直接前往<a href="https://www.rstudio.com/" target="_blank" rel="noreferrer">官方</a>下载，下载免费版即可。当然需先安装<a href="https://www.r-project.org/" target="_blank" rel="noreferrer">R</a></p><h2 id="作业1" tabindex="-1">作业1 <a class="header-anchor" href="#作业1" aria-label="Permalink to &quot;作业1&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>Q1:    </span></span>
<span class="line"><span>I &lt;- matrix(rep(1:5,times =5),nrow = 5,byrow = F)</span></span>
<span class="line"><span>J &lt;- matrix(rep(1:5,times=5),nrow = 5,byrow = T)</span></span>
<span class="line"><span>A &lt;- 0.5^(abs(I-J))</span></span>
<span class="line"><span>Q2:    </span></span>
<span class="line"><span>I &lt;- matrix(rep(1:100,times =100),nrow = 100,byrow = F)</span></span>
<span class="line"><span>J &lt;- matrix(rep(1:100,times=100),nrow = 100,byrow = T)</span></span>
<span class="line"><span>A &lt;- 0.5^(abs(I-J))</span></span>
<span class="line"><span>Q3:    </span></span>
<span class="line"><span>function.Q3 &lt;- function(n){     #不会声明未知变量选择使用函数形参代替</span></span>
<span class="line"><span>I &lt;- matrix(rep(1:n,times =n),nrow = n,byrow = F)            </span></span>
<span class="line"><span>J &lt;- matrix(rep(1:n,times=n),nrow = n,byrow = T)    </span></span>
<span class="line"><span>A &lt;- 0.5^(abs(I-J))     </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="作业2" tabindex="-1">作业2 <a class="header-anchor" href="#作业2" aria-label="Permalink to &quot;作业2&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>rm(list = ls())</span></span>
<span class="line"><span>getwd() #获取当前工作目录</span></span>
<span class="line"><span>setwd(&quot;C:/Users/ASUS/Desktop/R&quot;)  #调整工作目录到我的文件所在地址，按照题目要求应为&quot;D:/&quot;</span></span>
<span class="line"><span>getwd()</span></span>
<span class="line"><span>list_new &lt;- list()   </span></span>
<span class="line"><span>file_name &lt;- list.files(&quot;zuoye2&quot;)</span></span>
<span class="line"><span>dir &lt;- paste(&quot;./zuoye2/&quot;,file_name,sep=&quot;&quot;) </span></span>
<span class="line"><span>        #通过粘结将文件名配置为当前目录下可直接调用</span></span>
<span class="line"><span>n &lt;- length(dir)</span></span>
<span class="line"><span>for (i in 1:n){</span></span>
<span class="line"><span>    sec_file = list.files(dir[i],pattern = &quot;^sfnwmrda.*rest_1&quot;) </span></span>
<span class="line"><span>        #利用正则表达式优先导入sfnwmrda开头且包含rest_1的文件</span></span>
<span class="line"><span>    if (length(sec_file) == 0){         </span></span>
<span class="line"><span>        #在sec_file无导入文件的情况下再次导入sfnwmrda开头且包含rest_1的文件</span></span>
<span class="line"><span>        sec_file = list.files(dir[i],pattern = &quot;^sfnwmrda.*rest_2&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(length(sec_file) == 0){      </span></span>
<span class="line"><span>        #当这两种文件都未找到直接输出并结束任务</span></span>
<span class="line"><span>        print(paste(&quot;The folder &quot;,dir[i],</span></span>
<span class="line"><span>        &quot; has no file that meets the requirements&quot;))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else{       #否则我们求文件中数据矩阵的均值</span></span>
<span class="line"><span>    file = paste(dir[i],&quot;/&quot;,sec_file,sep = &quot;&quot;)</span></span>
<span class="line"><span>    data = read.table(file)     #数据的导入</span></span>
<span class="line"><span>    A&lt;-as.matrix(data)  </span></span>
<span class="line"><span>    #接下来五行是将数据由矩阵文本转化为数据文本并除掉一些不必要的行列</span></span>
<span class="line"><span>    A&lt;-A[-1,] # 接下来三行是针对该数据特征将标题等文本信息去除</span></span>
<span class="line"><span>    A&lt;-A[,-1]</span></span>
<span class="line"><span>    A&lt;-A[,-1]</span></span>
<span class="line"><span>    B &lt;- apply(A,2,as.numeric)   </span></span>
<span class="line"><span>    #之后对题目要求理解出现问题，再三考虑后决定采用下两行而将首次代码注释掉。</span></span>
<span class="line"><span>     list_new[[(length(list_new))+ 1]]&lt;- B}</span></span>
<span class="line"><span>     ans &lt;- Reduce(&quot;+&quot;,list_new)/length(list_new) </span></span>
<span class="line"><span>     #Reduce代替apply可实现保留结果连续求值</span></span>
<span class="line"><span>    # ans = mean(B)</span></span>
<span class="line"><span>    # print(paste(&quot;The average of the data &quot;,file,&quot; is &quot;,ans))}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="作业3" tabindex="-1">作业3 <a class="header-anchor" href="#作业3" aria-label="Permalink to &quot;作业3&quot;">​</a></h2><blockquote><p>首先需要说明的是，严格来讲并没有完全复刻示例图片，但个人已将认为比较重要的<br> 数据详尽的表示了出来，最终效果图可以查看<a href="https://surplus-1311636487.cos.ap-beijing.myqcloud.com/R-3.jpg" target="_blank" rel="noreferrer">这里</a></p></blockquote><p>代码如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>load(&quot;Download/zuoye3.rdata&quot;) #更改为自己文件所在的地址</span></span>
<span class="line"><span>library(ggplot2) #主要库</span></span>
<span class="line"><span>library(ggpubr) #基于ggplot2用于组合展示</span></span>
<span class="line"><span>function1 &lt;-function(groupV,s){  # 将p差值转化为标签*</span></span>
<span class="line"><span>         for (i in 1:7){</span></span>
<span class="line"><span>             if (groupV[i,1] &lt;0.01){</span></span>
<span class="line"><span>                     s[i] = &#39;**&#39;</span></span>
<span class="line"><span>                 }else if(groupV[i,1]&lt;0.05){</span></span>
<span class="line"><span>                         s[i] = &#39;*&#39;</span></span>
<span class="line"><span>                     }else {s[i] = &#39; &#39;}}</span></span>
<span class="line"><span>         for (j in 1:7){</span></span>
<span class="line"><span>                 if (groupV[j,2]&lt;0.01){</span></span>
<span class="line"><span>                         s[j+7] = &#39;**&#39;</span></span>
<span class="line"><span>                     }else if (groupV[j,2]&lt;0.05){</span></span>
<span class="line"><span>                             s[j+7] = &#39;*&#39;</span></span>
<span class="line"><span>                         }else {s[j+7] = &#39; &#39;}}</span></span>
<span class="line"><span>         return(s)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>function2 &lt;-function(groupV,s){  # 将p值转化为标签*</span></span>
<span class="line"><span>         for (i in 1:14){</span></span>
<span class="line"><span>             if (groupV[i,4] &lt;0.01){</span></span>
<span class="line"><span>                     s[i] = &#39;**&#39;</span></span>
<span class="line"><span>                 }else if(groupV[i,4]&lt;0.05){</span></span>
<span class="line"><span>                         s[i] = &#39;*&#39;</span></span>
<span class="line"><span>                     }else {s[i] = &#39; &#39;}}</span></span>
<span class="line"><span>         return(s)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>labelA &lt;- c();labelB &lt;- c();labelA_B &lt;- c() # 用于存储标签属性</span></span>
<span class="line"><span>pd &lt;- position_dodge(0.1)</span></span>
<span class="line"><span>labelA &lt;- function2(dataA,labelA)</span></span>
<span class="line"><span>labelB &lt;- function2(dataB,labelB)</span></span>
<span class="line"><span>labelA_B &lt;- function1(groupPvlue,labelA_B) # 生成标签</span></span>
<span class="line"><span>pic1 &lt;- ggplot(dataA, aes(XX, y, colour=group, group = group),angle = 45) +  # 绘制图(A)</span></span>
<span class="line"><span>    geom_errorbar(aes(ymin=low, ymax=up), width=.2, position=pd) +</span></span>
<span class="line"><span>    geom_point(aes(colour = group, shape = factor(group)),position=pd, size = 3) +</span></span>
<span class="line"><span>    xlab(&quot;XX&quot;) + </span></span>
<span class="line"><span>    ylab(&quot;y-value&quot;) + </span></span>
<span class="line"><span>    ggtitle(&quot;(A)&quot;) + </span></span>
<span class="line"><span>    scale_colour_gradient(low = &#39;red&#39;,high = &#39;blue&#39;) + </span></span>
<span class="line"><span>    geom_text(aes(XX+.2,y,label = labelA)) + </span></span>
<span class="line"><span>    geom_label(aes(XX + .02,y + 1,label = labelA_B[1:7]),data = dataA[1:7,1:6])</span></span>
<span class="line"><span>pic2 &lt;- ggplot(dataB, aes(XX, y, colour=group, group = group),angle = 45) + # 绘制图(B)</span></span>
<span class="line"><span>    geom_errorbar(aes(ymin=low, ymax=up), width=.2, position=pd) +</span></span>
<span class="line"><span>    geom_point(aes(colour = group, shape = factor(group)),position=pd, size = 3) +</span></span>
<span class="line"><span>    xlab(&quot;XX&quot;) + </span></span>
<span class="line"><span>    ylab(&quot;y-value&quot;) + </span></span>
<span class="line"><span>    ggtitle(&quot;(B)&quot;) + </span></span>
<span class="line"><span>    theme(axis.text.x = element_text(angle = 45, hjust = 1, vjust = 1)) +</span></span>
<span class="line"><span>    scale_colour_gradient(low = &#39;red&#39;,high = &#39;blue&#39;) + </span></span>
<span class="line"><span>    geom_text(aes(XX+.2,y,label = labelB)) + </span></span>
<span class="line"><span>    geom_label(aes(XX + .02,y + 1,label = labelA_B[8:14]),data = dataB[1:7,1:6])</span></span>
<span class="line"><span>pic &lt;- ggarrange(pic1,pic2) # 组合展示</span></span>
<span class="line"><span>ggsave(pic,file = &#39;pic_name.pdf&#39;,width = 20,height = 10) #保存</span></span></code></pre></div><h2 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-label="Permalink to &quot;基本命令&quot;">​</a></h2><h3 id="包" tabindex="-1">包 <a class="header-anchor" href="#包" aria-label="Permalink to &quot;包&quot;">​</a></h3><p>函数.libPaths()能够显示库所在的位置, 函数library()则可以显示库中有哪些包。<br> 安装好以后,它们必须被载入到会话中才能使用。命令 search()可以告诉你哪些包已加载并 可使用<br> 使用命令install.packages(&quot; &quot;)来下载和安装<br> update.packages()可以更新已经安装的包。</p><h2 id="创建数据集" tabindex="-1">创建数据集 <a class="header-anchor" href="#创建数据集" aria-label="Permalink to &quot;创建数据集&quot;">​</a></h2><h3 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构&quot;">​</a></h3><p>R将实例标识符称为 rownames (行名),将类别型(包括名义型和有序型)变量称为因子(factors)。<br> R拥有许多用于存储数据的对象类型,包括标量、向量、矩阵、数组、数据框和列表。</p><h4 id="向量" tabindex="-1">向量 <a class="header-anchor" href="#向量" aria-label="Permalink to &quot;向量&quot;">​</a></h4><p>向量是用于存储数值型、字符型或逻辑型数据的一维数组。执行组合功能的函数c()可用来 创建向量。<br> 通过在方括号中给定元素所处位置的数值,我们可以访问向量中的元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; a &lt;- c(&quot;k&quot;, &quot;j&quot;, &quot;h&quot;, &quot;a&quot;, &quot;c&quot;, &quot;m&quot;)</span></span>
<span class="line"><span>&gt; a[c(1, 3, 5)]</span></span>
<span class="line"><span>[1] &quot;k&quot; &quot;h&quot; &quot;c&quot;</span></span></code></pre></div><h4 id="矩阵" tabindex="-1">矩阵 <a class="header-anchor" href="#矩阵" aria-label="Permalink to &quot;矩阵&quot;">​</a></h4><p>矩阵是一个二维数组,只是每个元素都拥有相同的模式(数值型、字符型或逻辑型)。可通 过函数matrix()创建矩阵。一般使用格式为:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>myymatrix &lt;- matrix(vector, nrow=number_of_rows, ncol=number_of_columns,</span></span>
<span class="line"><span>byrow=logical_value, dimnames=list(</span></span>
<span class="line"><span>char_vector_rownames, char_vector_colnames))</span></span></code></pre></div><p>其中vector包含了矩阵的元素,nrow和ncol用以指定行和列的维数, dimnames包含了可选 的、以字符型向量表示的行名和列名。选项byrow则表明矩阵应当按行填充( byrow=TRUE) 还是按列填充( byrow=FALSE),默认情况下按列填充。 例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; x &lt;- matrix(1:10, nrow=2)</span></span>
<span class="line"><span>&gt; x</span></span>
<span class="line"><span>    [,1] [,2] [,3] [,4] [,5]</span></span>
<span class="line"><span>[1,] 1    3     5    7   9</span></span>
<span class="line"><span>[2,] 2    4     6    8   10</span></span>
<span class="line"><span>&gt; x[1, c(4,5)]</span></span>
<span class="line"><span>[1] 7 9</span></span></code></pre></div><h4 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h4><p>数组(array)与矩阵类似,但是维度可以大于2。数组可通过array函数创建,形式如下: myarray &lt;- array(vector, dimensions, dimnames)</p><p>例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; dim1 &lt;- c(&quot;A1&quot;, &quot;A2&quot;)</span></span>
<span class="line"><span>&gt; &gt; dim2 dim3 &lt;- &lt;- c(&quot;B1&quot;, c(&quot;C1&quot;, &quot;B2&quot;, &quot;C2&quot;, &quot;B3&quot;)</span></span>
<span class="line"><span> &quot;C3&quot;, &quot;C4&quot;)</span></span>
<span class="line"><span>&gt; z &lt;- array(1:24, c(2, 3, 4), dimnames=list(dim1, dim2, dim3))</span></span>
<span class="line"><span>&gt; z</span></span>
<span class="line"><span>, , C1</span></span>
<span class="line"><span>    B1 B2 B3</span></span>
<span class="line"><span>A1 1 3 5</span></span>
<span class="line"><span>A2 2 4 6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>, , C2</span></span>
<span class="line"><span>    B1 B2 B3</span></span>
<span class="line"><span>A1 7 9 11</span></span>
<span class="line"><span>A2 8 10 12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>, , C3</span></span>
<span class="line"><span>    B1 B2 B3</span></span>
<span class="line"><span>A1 13 15 17</span></span>
<span class="line"><span>A2 14 16 18</span></span>
<span class="line"><span></span></span>
<span class="line"><span>, , C4</span></span>
<span class="line"><span>    B1 B2 B3</span></span>
<span class="line"><span>A1 19 21 23</span></span>
<span class="line"><span>A2 20 22 24</span></span>
<span class="line"><span></span></span>
<span class="line"><span>z[1.2.3] = 15</span></span></code></pre></div><h4 id="数据框" tabindex="-1">数据框 <a class="header-anchor" href="#数据框" aria-label="Permalink to &quot;数据框&quot;">​</a></h4><p>数据框可通过函数data.frame()创建:<code>mydata &lt;- data.frame(col1, col2, col3,...)</code><br> 其中的列向量col1、col2、col3等可为任何类型(如字符型、数值型或逻辑型)。每一列的名称可由函数names指定。代码清单2-4清晰地展示了相应用法。<br> 使用数据框中的某一变量可以用<code>data$value</code>,但每一次都输入数据框名和$十分低效，使用函数attach()和detach()或单独使用函数with()来简化代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>attach(data) </span></span>
<span class="line"><span># 使得中间变量优先从数据data中搜索</span></span>
<span class="line"><span>detach()</span></span>
<span class="line"><span>with(mtcars, {</span></span>
<span class="line"><span>print(summary(mpg)) # 花括号中的语句都会优先使用mtcars数据框中的变量</span></span>
<span class="line"><span>plot(mpg, disp)</span></span>
<span class="line"><span>plot(mpg, wt)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h4><p>某个列表中可能是若干向量、矩阵、数据框,甚至其他列表的组合。可以使用函数list() 创 建列表:<code>mylist &lt;- list(object1, object2, ...)</code><br> 例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; g &lt;- &quot;My First List&quot;</span></span>
<span class="line"><span>&gt; h &lt;- c(25, 26, 18, 39)</span></span>
<span class="line"><span>&gt; j &lt;- matrix(1:10, nrow=5)</span></span>
<span class="line"><span>&gt; k &lt;- c(&quot;one&quot;, &quot;two&quot;, &quot;three&quot;)</span></span>
<span class="line"><span>&gt; mylist &lt;- list(title=g, ages=h, j, k)</span></span>
<span class="line"><span>&gt; mylist</span></span>
<span class="line"><span>$title</span></span>
<span class="line"><span>[1] &quot;My First List&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ages</span></span>
<span class="line"><span>[1] 25 26 18 39</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[3]]</span></span>
<span class="line"><span>    [,1] [,2]</span></span>
<span class="line"><span>[1,] 1   6</span></span>
<span class="line"><span>[2,] 2   7</span></span>
<span class="line"><span>[3,] 3   8</span></span>
<span class="line"><span>[4,] 4   9</span></span>
<span class="line"><span>[5,] 5  10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[4]]</span></span>
<span class="line"><span>[1] &quot;one&quot; &quot;two&quot; &quot;three&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; mylist[[2]]</span></span>
<span class="line"><span>[1] 25 26 18 39</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; mylist[[&quot;ages&quot;]]</span></span>
<span class="line"><span>[[1] 25 26 18 39</span></span></code></pre></div><h3 id="r的注释问题" tabindex="-1">R的注释问题 <a class="header-anchor" href="#r的注释问题" aria-label="Permalink to &quot;R的注释问题&quot;">​</a></h3><p>❑R不提供多行注释或块注释功能。你必须以#作为多行注释每行的开始。出于调试目的, 你也可以把想让解释器忽略的代码放到语句if(FALSE){... }中。将FALSE改为TRUE 即允许这块代码执行。</p><h3 id="数据的输入" tabindex="-1">数据的输入 <a class="header-anchor" href="#数据的输入" aria-label="Permalink to &quot;数据的输入&quot;">​</a></h3><h4 id="利用键盘输入" tabindex="-1">利用键盘输入 <a class="header-anchor" href="#利用键盘输入" aria-label="Permalink to &quot;利用键盘输入&quot;">​</a></h4><p><code>edit()</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>mydata &lt;- data.frame(age=numeric(0),</span></span>
<span class="line"><span>gender=character(0), weight=numeric(0)) </span></span>
<span class="line"><span>    #numeric(0)的赋值语句将创建一个指定模式但不含实际数据的变量。</span></span>
<span class="line"><span>mydata &lt;- edit(mydata)</span></span>
<span class="line"><span>    #edit()会自动调用一个允许手动输入数据的文本编辑器,作用副本文件</span></span></code></pre></div><h4 id="从带分隔符的文本文件导入数据" tabindex="-1">从带分隔符的文本文件导入数据 <a class="header-anchor" href="#从带分隔符的文本文件导入数据" aria-label="Permalink to &quot;从带分隔符的文本文件导入数据&quot;">​</a></h4><p>使用read.table()从带分隔符的文本文件中导入数据。读入一个表格格式的文件并将其保存为一个数据框。表格的每一行分别出现在文件中每一行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>mydataframe &lt;- read.table(file, options)</span></span></code></pre></div><p>read.table选项</p><table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td>header</td><td>一个表示文件是否在第一行包含了变量名的逻辑型变量</td></tr><tr><td>sep</td><td>分开数据值的分隔符。默认是 sep=&quot;&quot;,这表示了一个或多个空格、制表符、换行或回车。使用 sep=&quot;,&quot;来读取用逗号来分隔行内数据的文件,使用 sep=&quot;\\t&quot;来读取使用制表符来分割行内数据的文件</td></tr><tr><td>row.names</td><td>一个用于指定一个或多个行标记符的可选参数</td></tr><tr><td>col.names</td><td>如果数据文件的第一行不包括变量名(header=FASLE),你可以用 col.names 去指定一个包含变量名的字符向量。如果 header=FALSE 以及 col.names 选项被省略了,变量会被分别命名为 V1、V2,以此类推</td></tr><tr><td>na.strings</td><td>可选的用于表示缺失值的字符向量。比如说,na.strings=c(&quot;-9&quot;, &quot;?&quot;)把-9 和?值在读取数据的时候转换成 NA</td></tr><tr><td>skip</td><td>读取数据前跳过的行的数目。这个选项在跳过头注释的时候比较有用</td></tr><tr><td>text</td><td>一个指定文字进行处理的字符串。如果 text 被设置了, file 应该被留空。</td></tr><tr><td>stringsAsFactors</td><td>一个逻辑变量,标记处字符向量是否需要转化成因子。默认为TRUE</td></tr></tbody></table><h4 id="导入excel数据" tabindex="-1">导入excel数据 <a class="header-anchor" href="#导入excel数据" aria-label="Permalink to &quot;导入excel数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(xlsx)</span></span>
<span class="line"><span>read.xlsx(file, n)</span></span></code></pre></div><h4 id="导入spss数据" tabindex="-1">导入SPSS数据 <a class="header-anchor" href="#导入spss数据" aria-label="Permalink to &quot;导入SPSS数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(Hmisc)</span></span>
<span class="line"><span>mydataframe &lt;- spss.get(&quot;mydata.sav&quot;, use.value.labels=TRUE)</span></span></code></pre></div><p>这段代码中,mydata.sav是要导入的SPSS数据文件,use.value.labels=TRUE表示让函数将带有值标签的变量导入为R中水平对应相同的因子,mydataframe是导入后的R数据框。</p><h4 id="导入sas数据" tabindex="-1">导入SAS数据 <a class="header-anchor" href="#导入sas数据" aria-label="Permalink to &quot;导入SAS数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(sas7bdat)</span></span>
<span class="line"><span>mydata &lt;- read.sas7bdat(&quot;C:/mydata/clients.sas7bdat&quot;)</span></span></code></pre></div><h4 id="导入stata-数据" tabindex="-1">导入Stata 数据 <a class="header-anchor" href="#导入stata-数据" aria-label="Permalink to &quot;导入Stata 数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(foreign)</span></span>
<span class="line"><span>mydataframe &lt;- read.dta(&quot;mydata.dta&quot;)</span></span></code></pre></div><p><strong>实例标式符</strong><br> 在病例数据中,病人编号(patientID)用于区分数据集中不同的个体。在R中,实例标识符可通过数据框操作函数中的rowname选项指定。例如,语句:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>patientdata &lt;- data.frame(patientID, age, diabetes,</span></span>
<span class="line"><span>status, row.names=patientID) #将patientID指定为R中标记各类打印输出和图形中实例名称所用的变量。</span></span></code></pre></div><h3 id="数据集的标注" tabindex="-1">数据集的标注 <a class="header-anchor" href="#数据集的标注" aria-label="Permalink to &quot;数据集的标注&quot;">​</a></h3><h4 id="值标签" tabindex="-1">值标签 <a class="header-anchor" href="#值标签" aria-label="Permalink to &quot;值标签&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; mydata</span></span>
<span class="line"><span>  age gender weight</span></span>
<span class="line"><span>1  25      m    166</span></span>
<span class="line"><span>2  30      f    115</span></span>
<span class="line"><span>3  18      f    120</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; mydata$gender &lt;- factor(mydata$gender,</span></span>
<span class="line"><span>    levels = c(&#39;m&#39;,&#39;f&#39;),</span></span>
<span class="line"><span>     labels = c(&quot;male&quot;, &quot;female&quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; mydata</span></span>
<span class="line"><span>  age gender weight</span></span>
<span class="line"><span>1  25   male    166</span></span>
<span class="line"><span>2  30 female    115</span></span>
<span class="line"><span>3  18 female    120</span></span></code></pre></div><h3 id="处理数据对象的实用函数" tabindex="-1">处理数据对象的实用函数 <a class="header-anchor" href="#处理数据对象的实用函数" aria-label="Permalink to &quot;处理数据对象的实用函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>length(object) 显示对象中元素/成分的数量</span></span>
<span class="line"><span>dim(object) 显示某个对象的维度</span></span>
<span class="line"><span>str(object) 显示某个对象的结构</span></span>
<span class="line"><span>class(object) 显示某个对象的类或类型</span></span>
<span class="line"><span>mode(object) 显示某个对象的模式</span></span>
<span class="line"><span>names(object) 显示某对象中各成分的名称</span></span>
<span class="line"><span>c(object, object,...) 将对象合并入一个向量</span></span>
<span class="line"><span>cbind(object, object, ...) 按列合并对象</span></span>
<span class="line"><span>rbind(object, object, ...) 按行合并对象</span></span>
<span class="line"><span>object 输出某个对象</span></span>
<span class="line"><span>head(object) 列出某个对象的开始部分</span></span>
<span class="line"><span>tail(object) 列出某个对象的最后部分</span></span>
<span class="line"><span>ls() 显示当前的对象列表</span></span>
<span class="line"><span>rm(object, object, ...) 删除一个或更多个对象。</span></span>
<span class="line"><span>    语句 rm(list = ls())将删除当前工作环境中的几乎所有对象</span></span>
<span class="line"><span>newobject &lt;- edit(object) 编辑对象并另存为 newobject</span></span>
<span class="line"><span>fix(object) 直接编辑对象</span></span></code></pre></div><h2 id="初级绘图" tabindex="-1">初级绘图 <a class="header-anchor" href="#初级绘图" aria-label="Permalink to &quot;初级绘图&quot;">​</a></h2><h3 id="绘图参数" tabindex="-1">绘图参数 <a class="header-anchor" href="#绘图参数" aria-label="Permalink to &quot;绘图参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>pch</td><td>指定绘制点时使用的符号</td></tr><tr><td>cex</td><td>指定符号的大小，默认值为1表示放大为默认值的1倍</td></tr><tr><td>lty</td><td>指定线条类型</td></tr><tr><td>lwd</td><td>指定线条宽度，默认值为1，同cex。</td></tr></tbody></table><h3 id="颜色参数" tabindex="-1">颜色参数 <a class="header-anchor" href="#颜色参数" aria-label="Permalink to &quot;颜色参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>col</td><td>默认的绘图颜色。一般来说指定col为单独颜色或为一个向量，注意，一般情况下需要保证向量与所绘制的点or线维度相同，当然，在一些函数(lines、pie)也可不相同，此时会自动循环调用颜色向量</td></tr><tr><td>col.axis</td><td>坐标轴刻度文字的颜色</td></tr><tr><td>col.lab</td><td>坐标轴标签的颜色</td></tr><tr><td>col.main</td><td>标题颜色</td></tr><tr><td>col.sub</td><td>副标题颜色</td></tr><tr><td>fg</td><td>图形的前景色</td></tr><tr><td>bg</td><td>图形的背景色</td></tr></tbody></table><p><code>colors()</code>可以返回当前可用的所有颜色</p><h3 id="文本属性" tabindex="-1">文本属性 <a class="header-anchor" href="#文本属性" aria-label="Permalink to &quot;文本属性&quot;">​</a></h3><ul><li>用于指定文本大小</li></ul><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>cex</td><td>...</td></tr><tr><td>cex.axis</td><td>...</td></tr><tr><td>cex.lab</td><td>...</td></tr><tr><td>cex.main</td><td>...</td></tr><tr><td>cex.sub</td><td>...</td></tr></tbody></table><ul><li>用于指定字体、字号、字样</li></ul><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>font</td><td>整数。1=常规、2=粗体、3=斜体、4=粗斜体、5=符号字体</td></tr><tr><td>font.axis(lab\\main\\sub)</td><td>...</td></tr><tr><td>ps</td><td>字体磅值。文本最终大小为ps*cex</td></tr><tr><td>family</td><td>标准取值为serif(衬线)、sans(无衬线)、mono(等宽)</td></tr></tbody></table><h3 id="图形尺寸和边界大小" tabindex="-1">图形尺寸和边界大小 <a class="header-anchor" href="#图形尺寸和边界大小" aria-label="Permalink to &quot;图形尺寸和边界大小&quot;">​</a></h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>pin</td><td>英寸表示图形的尺寸(宽和高)</td></tr><tr><td>mai</td><td>数值向量表示边界的大小，顺序为下左上右，英寸</td></tr><tr><td>mar</td><td>数值向量表示边界大小，顺序同上，英分</td></tr></tbody></table><p><code>par(pin = c(4,3),mar = c(5,4,4,3))</code> 例</p><h3 id="添加文本、自定义坐标轴和图例" tabindex="-1">添加文本、自定义坐标轴和图例 <a class="header-anchor" href="#添加文本、自定义坐标轴和图例" aria-label="Permalink to &quot;添加文本、自定义坐标轴和图例&quot;">​</a></h3><p><code>main</code>标题、<code>sub</code>副标题、<code>xlab,ylab</code>坐标轴标签、<code>xlim,ylim</code>坐标轴范围。某些高级绘图函数已经包含了默认的标题和标签。通过<code>ann = FALSE</code>移除他们。</p><ul><li><p>标题<br><code>title(main = &#39;&#39;,sub = &#39;&#39;,col.main =&#39;&#39;,col.sub = &#39;&#39;,xlab = &#39;&#39;,ylab=&#39;&#39;,col.lab =&#39;&#39;,cex.lab=&#39;&#39;)</code></p></li><li><p>坐标轴<br><code>axis(side,at=,labels=,pos=,lty=,col=,las=,tck=,...)</code></p></li></ul><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>side</td><td>一个整数，表示在图形哪边绘制坐标轴(1\\2\\3\\4 下\\左\\上\\右)</td></tr><tr><td>at</td><td>数值形向量，表示需要绘制刻度线的位置</td></tr><tr><td>labels</td><td>字符形向量，表示置于刻度线旁边的文字标签</td></tr><tr><td>pos</td><td>坐标轴线绘制位置的坐标(与另一条相交的位置)</td></tr><tr><td>lty</td><td>线条类型</td></tr><tr><td>col</td><td>...</td></tr><tr><td>las</td><td>坐标标签平行(0)垂直(2)坐标轴</td></tr><tr><td>tck</td><td>刻度线的长度，以相对于绘图区域大小的分数表示(负表示在图形外侧，正表示在图形内侧，0禁用刻度，1绘制网格线)</td></tr></tbody></table><p>自定义坐标轴需要禁用自动生成的坐标轴<code>axes = FALSE</code>。参数xaxt = &#39;n&#39;和yaxt=&#39;n&#39;将分别禁用X和Y轴(留下框架线，只去除刻度)</p><h3 id="参考线" tabindex="-1">参考线 <a class="header-anchor" href="#参考线" aria-label="Permalink to &quot;参考线&quot;">​</a></h3><p><code>abline(h=yvalues,v=xvalues,...)</code></p><h3 id="图例" tabindex="-1">图例 <a class="header-anchor" href="#图例" aria-label="Permalink to &quot;图例&quot;">​</a></h3><p>legend(location, title, legend,...)</p><table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td>location</td><td>有许多方式可以指定图例的位置。你可以直接给定图例左上角的x、y坐标，也可以执行locator(1)，然后通过鼠标点击给出图例位置，或使用关键字放置图例。如果你使用了以上某个关键字，那么可以同时使用参数inset=指定图例向图形内测移动的大小</td></tr><tr><td>title</td><td>图例标题的字符串</td></tr><tr><td>legend</td><td>图例标签组成的字符形向量</td></tr></tbody></table><h3 id="文本标注" tabindex="-1">文本标注 <a class="header-anchor" href="#文本标注" aria-label="Permalink to &quot;文本标注&quot;">​</a></h3><p><code>text(location,&quot;text to place&quot;,pos,...)</code><br><code>mtext(&quot;text to place&quot;,side,line=n,...)</code></p><p>text()和mtext()选项</p><table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td>location</td><td>文本的位置参数。可为一对x,y坐标，也可通过指定location为locator(1)使用鼠标交互式确定摆放位置</td></tr><tr><td>pos</td><td>文本相对于位置参数的方位。1=下、2=左、3=上、4=右。如果指定了pos，就可以同时指定 offset = 作为偏移量</td></tr><tr><td>side</td><td>指定用来放置文本的边。1\\2\\3\\4同...</td></tr></tbody></table><h3 id="图形的组合" tabindex="-1">图形的组合 <a class="header-anchor" href="#图形的组合" aria-label="Permalink to &quot;图形的组合&quot;">​</a></h3><ul><li>示例1</li></ul><p><code>attach(data_name)</code><br><code>opar &lt;- par(no.readonly = TRUE)</code><br><code>par(mfrow = c(2,2))</code> # 创建子图两行两列</p><ul><li>示例2</li></ul><p>\`layout(matrix(c(1,1,2,3),2,2,byrow = TRUE)) # 图形123，1放在第一行，2、3放在第二行。</p><h2 id="基本数据管理" tabindex="-1">基本数据管理 <a class="header-anchor" href="#基本数据管理" aria-label="Permalink to &quot;基本数据管理&quot;">​</a></h2><h3 id="创建新变量" tabindex="-1">创建新变量 <a class="header-anchor" href="#创建新变量" aria-label="Permalink to &quot;创建新变量&quot;">​</a></h3><p>在数据框中添加变量的三种方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>mydata&lt;-data.frame(x1 = c(2, 2, 6, 4),</span></span>
<span class="line"><span>        x2 = c(3, 4, 2, 8)) # 创建数据框</span></span>
<span class="line"><span># 方法一</span></span>
<span class="line"><span>mydata$sumx &lt;- mydata$x1 + mydata$x2</span></span>
<span class="line"><span>mydata$meanx &lt;- (mydata$x1 + mydata$x2)/2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#方法二</span></span>
<span class="line"><span>attach(mydata)</span></span>
<span class="line"><span>mydata$sumx &lt;- x1 + x2</span></span>
<span class="line"><span>mydata$meanx &lt;- (x1 + x2)/2</span></span>
<span class="line"><span>detach(mydata)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#方法三     </span></span>
<span class="line"><span>mydata &lt;- transform(mydata,</span></span>
<span class="line"><span>        sumx = x1 + x2,</span></span>
<span class="line"><span>        meanx = (x1 + x2)/2)</span></span></code></pre></div><h3 id="变量的重编码" tabindex="-1">变量的重编码 <a class="header-anchor" href="#变量的重编码" aria-label="Permalink to &quot;变量的重编码&quot;">​</a></h3><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td>&lt;</td><td>小于</td></tr><tr><td>&lt;=</td><td>小于或等于</td></tr></tbody></table><blockquote><p>|大于 =|大于或等于 ==|严格等于1 !=|不等于 !x|非x x ｜ y|x或 y x &amp; y|x和 y isTRUE(x)|测试x是否为TRUE</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>#创建数据框mydata，x1和x2是mydata的两个列向量</span></span>
<span class="line"><span>mydata &lt;- data.frame(x1 = c(2, 2, 6, 4), x2 = c(3, 4, 2, 8))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#利用transform函数对数据框mydata增加两个变量（列向量）sumx和meanx，并把结果存储在数据框mydata中</span></span>
<span class="line"><span>mydata &lt;- transform(mydata, sumx = x1 + x2, meanx = (x1 + x2)/2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#利用within函数，expr表达式执行一条语句占一行，执行多条语句需要换行</span></span>
<span class="line"><span>mydata &lt;- within(mydata, {sumx = x1 + x2</span></span>
<span class="line"><span>                         meanx = (x1 + x2)/2})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#或者多条语句在同一行，则中间应当用分号;隔开</span></span>
<span class="line"><span>mydata &lt;- within(mydata, {sumx = x1 + x2; meanx = (x1 + x2)/2})</span></span></code></pre></div><h3 id="变量的重命名" tabindex="-1">变量的重命名 <a class="header-anchor" href="#变量的重命名" aria-label="Permalink to &quot;变量的重命名&quot;">​</a></h3><p><code>fix(frame_name)</code>进行交互式操作。<br><code>names(frame_name)[2] &lt;- &quot;new_name&quot;</code>对列标题进行重命名，当然使用names也可以进行批量处理，例如<code>names(leadership)[6:10] &lt;- c(&quot;item1&quot;, &quot;item2&quot;, &quot;item3&quot;, &quot;item4&quot;, &quot;item5&quot;)</code><br> 另外提供一种方法，<code>rename()</code>,需要导入plyr包。</p><h3 id="缺失值" tabindex="-1">缺失值 <a class="header-anchor" href="#缺失值" aria-label="Permalink to &quot;缺失值&quot;">​</a></h3><p>R中缺失值使用符号NA(Not Available)表示。缺失值被认为是不可比较的,即便是与缺失值自身的比较。这意味着无法使用比较运算符来检测缺失值是否存在。例如,逻辑测试<code>myvar == NA</code>的结果永远不会为TRUE。R提供了一些函数,用于识别包含缺失值的观测。函数 is.na()允许你检测缺失值是否存在。假设你有一个向量:<code>y &lt;- c(1, 2, 3, NA)</code>然后使用函数:<code>is.na(y)</code>,将返回<code>c(FALSE, FALSE, FALSE, TRUE)</code>。</p><p>第二,R 并不把无限的或者不可能出现的数值标记成缺失值。正无穷和负无穷分别用 Inf和–Inf所标记。因此5/0返回Inf。不可能的值(比如说,sin(Inf))用NaN符号来标记(not a number,不是一个数)。若要识别这些数值,你需要用到 <code>is.infinite()</code>或<code>is.nan()</code>。</p><p><strong>排除缺失值</strong><br> 含有缺失值的算术表达式和函数的计算结果也是缺失值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>x &lt;- c(1, 2, NA, 3)</span></span>
<span class="line"><span>y &lt;- x[1] + x[2] + x[3] + x[4] # 输出NA</span></span>
<span class="line"><span>z &lt;- sum(x) # 输出NA</span></span>
<span class="line"><span>s &lt;- sum(x,na.rm = TRUE) # 输出6</span></span></code></pre></div><p>在数据框中，我们可以使用<code>na.omit(frame_name)</code>删除不完整的观测数据。注意，由于直接进行行删除，所以要确保删除的行仅占一小部分。</p><h3 id="日期值" tabindex="-1">日期值 <a class="header-anchor" href="#日期值" aria-label="Permalink to &quot;日期值&quot;">​</a></h3><p>日期值通常以字符串的形式输入到R中,然后转化为以数值形式存储的日期变量。函数<code>as.Date()</code> 用于执行这种转化。其语法为<code>as.Date(x, &quot;input_format&quot;)</code>,其中x是字符型数据,input_format则给出了用于读入日期的适当格式.日期值的默认输入格式为yyyy-mm-dd。语句:<code>mydates &lt;- as.Date(c(&quot;2007-06-22&quot;, &quot;2004-02-13&quot;))</code>。</p><table><thead><tr><th>符号</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>%d</td><td>数字表示的日期(0~31)</td><td>01~31</td></tr><tr><td>%a</td><td>缩写的星期名</td><td>Mon</td></tr><tr><td>%A</td><td>非缩写星期名</td><td>Monday</td></tr><tr><td>%m</td><td>月份(00~12)</td><td>00~12</td></tr><tr><td>%b</td><td>缩写的月份</td><td>Jan</td></tr><tr><td>%B</td><td>非缩写月份</td><td>January</td></tr><tr><td>%y</td><td>两位数的年份</td><td>07</td></tr><tr><td>%Y</td><td>四位数的年份</td><td>2007</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>strDates &lt;- c(&quot;01/05/1965&quot;, &quot;08/16/1975&quot;)</span></span>
<span class="line"><span>dates &lt;- as.Date(strDates, &quot;%m/%d/%Y&quot;)</span></span>
<span class="line"><span>mydates</span></span>
<span class="line"><span># output &quot;1965-01-05&quot; &quot;1975-08-16&quot;</span></span></code></pre></div><p>Sys.Date()可以返回当天的日期,而date()则返回当前的日期和时间</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>r$&gt; Sys.Date()</span></span>
<span class="line"><span>[1] &quot;2022-12-01&quot;</span></span>
<span class="line"><span>r$&gt; date()</span></span>
<span class="line"><span>[1] &quot;Thu Dec  1 19:36:02 2022&quot;</span></span></code></pre></div><p>你可以使用函数format(x, format=&quot;output_format&quot;)来输出指定格式的日期值,并且 可以提取日期值中的某些部分:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; today &lt;- Sys.Date()</span></span>
<span class="line"><span>&gt; format(today, format=&quot;%B %d %Y&quot;)</span></span>
<span class="line"><span>[1] &quot;November 27 2014&quot;</span></span>
<span class="line"><span>&gt; format(today, format=&quot;%A&quot;)</span></span>
<span class="line"><span>[1] &quot;Thursday&quot;</span></span></code></pre></div><p>此外，日期之间可以进行算术运算，也可以使用函数<code>difftime(today, dob, units=&quot;weeks&quot;)</code>来计算时间间隔,并以星期、天、时、分、秒来表示。</p><p><strong>将日期转化为字符型</strong><br> 函数<code>as.character()</code> 可将日期值转换为字符型</p><h3 id="类型转换函数" tabindex="-1">类型转换函数 <a class="header-anchor" href="#类型转换函数" aria-label="Permalink to &quot;类型转换函数&quot;">​</a></h3><pre><code>名为is.datatype()这样的函数返回TRUE或FALSE,而as.datatype()这样的函数则将其参数转换为对应的类型。
</code></pre><table><thead><tr><th>判断</th><th>转换</th></tr></thead><tbody><tr><td>is.numeric()</td><td>as.numeric()</td></tr><tr><td>is.character()</td><td>as.character()</td></tr><tr><td>is.vector()</td><td>as.vector()</td></tr><tr><td>is.matrix()</td><td>as.matrix()</td></tr><tr><td>is.data.frame()</td><td>as.data.frame()</td></tr><tr><td>is.factor()</td><td>as.factor()</td></tr><tr><td>is.logical()</td><td>as.logical()</td></tr></tbody></table><h3 id="数据排序" tabindex="-1">数据排序 <a class="header-anchor" href="#数据排序" aria-label="Permalink to &quot;数据排序&quot;">​</a></h3><p><code>order()</code>函数可以对一个数据框进行排序，默认升序，在变量前加 - 按照降序排列。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>attach(leadership)</span></span>
<span class="line"><span>newdata &lt;-leadership[order(gender, -age),] #先按照性别，同性别按照年龄降序</span></span>
<span class="line"><span>detach(leadership)</span></span></code></pre></div><h3 id="数据合并" tabindex="-1">数据合并 <a class="header-anchor" href="#数据合并" aria-label="Permalink to &quot;数据合并&quot;">​</a></h3><p>如果要直接横向合并两个矩阵或数据框,并且不需要指定一个公共索引,那么可以直接使用<code>cbind()</code>函数.<br> 要横向合并两个数据框(数据集),也可使用 merge()函数。在多数情况下,两个数据框是通过一个或多个共有变量进行联结的(即一种内联结,inner join).</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>r$&gt; mydata &lt;- data.frame(x1 = c(1,2,3),x2 = c(1,2,3),l = c(1,1,1))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r$&gt; mydata2 &lt;- data.frame(x1 = c(2,3,4),x2 = c(2,3,4),s = c(2,2,2))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r$&gt; merge(mydata,mydata2,&quot;x1&quot;)</span></span>
<span class="line"><span>  x1 x2.x l x2.y s</span></span>
<span class="line"><span>1  2    2 1    2 2</span></span>
<span class="line"><span>2  3    3 1    3 2  #注意只有x1处值相同才能够串联</span></span></code></pre></div><p>要纵向合并两个数据框(数据集),请使用<code>rbind()</code> 函数:<code>total &lt;- rbind(dataframeA, dataframeB)</code>两个数据框必须拥有相同的变量,不过它们的顺序不必一定相同。若变量不同,可删除多余变量或在缺失变量处创建并追加NA值</p><h3 id="数据集取子集" tabindex="-1">数据集取子集 <a class="header-anchor" href="#数据集取子集" aria-label="Permalink to &quot;数据集取子集&quot;">​</a></h3><p><code>dataframe[row indices, column indices]</code>,如果某位值取空,代表行(列)全取<br><strong>剔除数据集</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>myvars &lt;- names(leadership) %in% c(&quot;q3&quot;, &quot;q4&quot;)</span></span>
<span class="line"><span>newdata &lt;- leadership[!myvars]</span></span></code></pre></div><blockquote><p>(1) names(leadership) 生 成 了 一 个 包 含 所 有 变 量 名 的 字 符 型 向 量 : c(&quot;managerID&quot;,&quot;testDate&quot;,&quot;country&quot;,&quot;gender&quot;,&quot;age&quot;,&quot;q1&quot;, &quot;q2&quot;,&quot;q3&quot;,&quot;q4&quot;,&quot;q5&quot;) 。<br> (2) names(leadership) %in% c(&quot;q3&quot;, &quot;q4&quot;) 返 回 了 一 个 逻 辑 型 向 量 , names(leadership)中每个匹配q3或q4的元素的值为TRUE ,反之为FALSE: c(FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, TRUE, FALSE)。<br> (3) 运算符非(!)将逻辑值反转: c(TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE)。<br> (4) leadership[c(TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE)]选择了逻辑值为TRUE的列,于是q3和q4被剔除了。</p></blockquote><p>在知道q3和q4是第8个和第9个变量的情况下,可以使用语句:<code>newdata &lt;- leadership[c(-8,-9)]</code>将它们剔除。这种方式的工作原理是,在某一列的下标之前加一个减号(–)就会剔除那一列。</p><p>最后,相同的变量删除工作亦可通过:<code>leadership$q3 &lt;- leadership$q4 &lt;- NULL</code>来完成。这回你将 q3 和 q4 两列设为了未定义( NULL )。注意, NULL 与 NA (表示缺失)是不 同的。</p><p><strong>subset()函数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>newdata &lt;- subset(leadership, age &gt;= 35 | age &lt; 24,</span></span>
<span class="line"><span>        select=c(q1, q2, q3, q4))</span></span>
<span class="line"><span>newdata &lt;- subset(leadership, gender==&quot;M&quot; &amp; age &gt; 25,</span></span>
<span class="line"><span>        select=gender:q4)</span></span></code></pre></div><p><strong>随机采样</strong><br><code>mysample &lt;- frame_name[sample(1:nrow(leadership), 3, replace=FALSE),]</code> 样本数据3的无放回抽样</p><h2 id="高级数据管理" tabindex="-1">高级数据管理 <a class="header-anchor" href="#高级数据管理" aria-label="Permalink to &quot;高级数据管理&quot;">​</a></h2><h3 id="数值和字符处理函数" tabindex="-1">数值和字符处理函数 <a class="header-anchor" href="#数值和字符处理函数" aria-label="Permalink to &quot;数值和字符处理函数&quot;">​</a></h3><table><thead><tr><th>数学函数</th><th>描述</th></tr></thead><tbody><tr><td>abs(x)</td><td>绝对值</td></tr><tr><td>sqrt(x)</td><td>平方根</td></tr><tr><td>ceiling(x)</td><td>不小于 x 的最小整数</td></tr><tr><td>floor(x)</td><td>不大于 x 的最大整数</td></tr><tr><td>trunc(x)</td><td>向 0 的方向截取的 x 中的整数部分,trunc(5.99)返回值为 5</td></tr><tr><td>round(x, digits=n)</td><td>将 x 舍入为指定位的小数</td></tr><tr><td>signif(x, digits=n)</td><td>将 x 舍入为指定的有效数字位数</td></tr><tr><td>cos(x)、 sin(x)、tan(x)、acos(x)、asin(x)、atan(x)、cosh(x)、sinh(x)、tanh(x)、acosh(x)、asinh(x)、atanh(x)</td><td>余弦、反余弦，双曲余弦、反双曲余弦</td></tr><tr><td>exp(x)</td><td>指数函数</td></tr><tr><td>log(x,base=n)</td><td>对 x 取以 n 为底的对数</td></tr></tbody></table><table><thead><tr><th>统计函数</th><th>描述</th></tr></thead><tbody><tr><td>mean(x)</td><td>平均数</td></tr><tr><td>median(x)</td><td>中位数</td></tr><tr><td>sd(x)</td><td>标准差</td></tr><tr><td>var(x)</td><td>方差</td></tr><tr><td>mad(x)</td><td>绝对中位差(数据到中位数的偏差的绝对值的中位数)</td></tr><tr><td>quantile(x,probs)</td><td>求分位数。其中 x 为待求分位数的数值型向量,probs 为一个由[0,1]之间的概率值组成的数值向量</td></tr><tr><td>range(x)</td><td>求值域</td></tr><tr><td>sum(x)</td><td>求和</td></tr><tr><td>diff(x, lag=n)</td><td>滞后差分,lag 用以指定滞后几项。默认的 lag 值为 1,x&lt;- c(1, 5, 23, 29),diff(x)返回值为 c(4, 18, 6)</td></tr><tr><td>min(x)</td><td>求最小值</td></tr><tr><td>max(x)</td><td>求最大值</td></tr><tr><td>scale(x,center=TRUE,scale=TRUE)</td><td>为数据对象 x 按列进行中心化(center=TRUE)或标准化(center=TRUE,scale=TRUE),默认情况将数据标准化为均值0方差1;</td></tr></tbody></table><p><strong>概率函数</strong><br> 在R中,概率函数形如 :<code>[dpqr] + 分布缩写()</code></p><blockquote><p>其中第一个字母表示其所指分布的某一方面:<br> d = 密度函数(density)，p = 分布函数(distribution function)，q = 分位数函数(quantile function)，r = 生成随机数(随机偏差)</p></blockquote><p>例如<code>qnorm(.9, mean=500, sd=100) #均值为 500,标准差为 100 的正态分布的 0.9 分位点值</code>,<code>pnorm(1.96) #位于 z=1.96 左侧的标准正态曲线下方面积</code>。</p><p>在R中生成伪随机数时，函数会每次调用不同种子，通过set.seed()可以指定这个种子，可使结果重现。</p><table><thead><tr><th>字符处理函数</th><th>描述</th></tr></thead><tbody><tr><td>toupper(x)</td><td>大写转换</td></tr><tr><td>tolower(x)</td><td>小写转换</td></tr><tr><td>paste(..., sep=&quot;&quot;)</td><td>连接字符串,分隔符为 sep,例如，paste(&#39;today is &#39;,date(),sep = &#39; &#39;)</td></tr><tr><td>strsplit(x, split,fixed=FALSE)</td><td>在 split 处分割字符向量 x 中的元素。若 fixed=FALSE,则 pattern 为一个正则表达式。若 fixed=TRUE,则 pattern 为一个文本字符串</td></tr><tr><td>nchar(x)</td><td>计算 x 中的字符数量, x &lt;- &#39;good&#39;,length(x) = 1,nchat(x) = 4</td></tr><tr><td>substr(x, start, stop)</td><td>提取或替换一个字符向量中的子串,substr(x, 2, 4) &lt;- &quot;22222&quot;(x 将变成&quot;a222ef&quot;)</td></tr><tr><td>grep(pattern, x, ignore.case=FALSE, fixed=FALSE)</td><td>在 x 中搜索某种模式。若 fixed=FALSE,则 pattern 为一个正则表达式。若fixed=TRUE,则 pattern 为一个文本字符串。返回值为匹配的下标</td></tr><tr><td>sub(pattern, replacement,x, ignore.case=FALSE,fixed=FALSE)</td><td>在 x 中搜索 pattern,并以文本 replacement 将其替换。若 fixed=FALSE,则pattern 为一个正则表达式。若 fixed=TRUE,则 pattern 为一个文本字符串。</td></tr></tbody></table><table><thead><tr><th>其他使用函数</th><th>描述</th></tr></thead><tbody><tr><td>seq(from, to, by)</td><td>生成一个序列</td></tr><tr><td>rep(x, n)</td><td>将 x 重复 n 次,y &lt;- rep(1:3, 2),y 的值为 c(1, 2, 3, 1, 2, 3)</td></tr><tr><td>pretty(x, n)</td><td>创建美观的分割点。通过选取 n+1 个等间距的取整值,将一个连续型变量x分割为n个区间。绘图中常用</td></tr></tbody></table><h3 id="apply" tabindex="-1">apply() <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;apply()&quot;">​</a></h3><p>R中提供了一个 apply()函数,可将一个任意函数“应用”到矩阵、数组、数据框的任何维度上。apply()函数的使用格式为:<code>apply(x, MARGIN, FUN, ...)</code>。MARGIN=1表示行，2表示列，...部分表示传递给FUN的参数。</p><h3 id="综合示例" tabindex="-1">综合示例 <a class="header-anchor" href="#综合示例" aria-label="Permalink to &quot;综合示例&quot;">​</a></h3><p>将学生的各科考试成绩组合为单一的成绩衡量指标,基于相对名次 (前20%、下20%、等等)给出从A到F的评分,根据学生姓氏和名字的首字母对花名册进行排序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>Student &lt;- c(&quot;John Davis&quot;, &quot;Angela Williams&quot;, &quot;Bullwinkle Moose&quot;,</span></span>
<span class="line"><span>    &quot;David Jones&quot;, &quot;Janice Markhammer&quot;, &quot;Cheryl Cushing&quot;,</span></span>
<span class="line"><span>    &quot;Reuven Ytzrhak&quot;, &quot;Greg Knox&quot;, &quot;Joel England&quot;,</span></span>
<span class="line"><span>    &quot;Mary Rayburn&quot;)</span></span>
<span class="line"><span>    Math &lt;- c(502, 600, 412, 358, 495, 512, 410, 625, 573, 522)</span></span>
<span class="line"><span>    Science &lt;- c(95, 99, 80, 82, 75, 85, 80, 95, 89, 86)</span></span>
<span class="line"><span>    English &lt;- c(25, 22, 18, 15, 20, 28, 15, 30, 27, 18)</span></span>
<span class="line"><span>    roster &lt;- data.frame(Student, Math, Science, English,</span></span>
<span class="line"><span>    stringsAsFactors=FALSE) #录入数据</span></span>
<span class="line"><span>\\\\ 数据显示如下</span></span>
<span class="line"><span>             Student Math Science English</span></span>
<span class="line"><span>1         John Davis  502      95      25</span></span>
<span class="line"><span>2    Angela Williams  600      99      22</span></span>
<span class="line"><span>3   Bullwinkle Moose  412      80      18</span></span>
<span class="line"><span>4        David Jones  358      82      15</span></span>
<span class="line"><span>5  Janice Markhammer  495      75      20</span></span>
<span class="line"><span>6     Cheryl Cushing  512      85      28</span></span>
<span class="line"><span>7     Reuven Ytzrhak  410      80      15</span></span>
<span class="line"><span>8          Greg Knox  625      95      30</span></span>
<span class="line"><span>9       Joel England  573      89      27</span></span>
<span class="line"><span>10      Mary Rayburn  522      86      18 \\\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>z &lt;- scale(roster[,2:4]) 分数进行标准化</span></span>
<span class="line"><span>score &lt;- apply(z,MARGIN = 1,mean) # 求标准化成绩后的成绩均值</span></span>
<span class="line"><span>roster &lt;- cbind(roster,score) #合并</span></span>
<span class="line"><span>y &lt;- quantile(score, c(.8,.6,.4,.2)) #求.8,-.2的分位数</span></span>
<span class="line"><span>roster$grade[score &gt;= y[1]] &lt;- &quot;A&quot;</span></span>
<span class="line"><span>roster$grade[score &lt; y[1] &amp; score &gt;= y[2]] &lt;- &quot;B&quot;</span></span>
<span class="line"><span>roster$grade[score &lt; y[2] &amp; score &gt;= y[3]] &lt;- &quot;C&quot;</span></span>
<span class="line"><span>roster$grade[score &lt; y[3] &amp; score &gt;= y[4]] &lt;- &quot;D&quot;</span></span>
<span class="line"><span>roster$grade[score &lt; y[4]] &lt;- &quot;F&quot; # 按照.2间隔给予评分</span></span>
<span class="line"><span>Firstname &lt;- sapply(name, &quot;[&quot;, 1) #sapply()在这提取列表中第一个元素</span></span>
<span class="line"><span>Lastname &lt;- sapply(name, &quot;[&quot;, 2)</span></span>
<span class="line"><span>roster &lt;- cbind(Firstname, Lastname, roster[,-1]) #-1意为除掉第一个列</span></span>
<span class="line"><span>roster[order(Lastname,Firstname),] # 根据姓名排序</span></span></code></pre></div><h3 id="控制流" tabindex="-1">控制流 <a class="header-anchor" href="#控制流" aria-label="Permalink to &quot;控制流&quot;">​</a></h3><p>if,while,for 略</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span># 关于switch</span></span>
<span class="line"><span>&gt; feelings &lt;- c(&quot;sad&quot;, &quot;afraid&quot;)</span></span>
<span class="line"><span>&gt; for (i in feelings)</span></span>
<span class="line"><span>print(</span></span>
<span class="line"><span>switch(i,</span></span>
<span class="line"><span>happy = &quot;I am glad you are happy&quot;,</span></span>
<span class="line"><span>afraid = &quot;There is nothing to fear&quot;,</span></span>
<span class="line"><span>sad</span></span>
<span class="line"><span> = &quot;Cheer up&quot;,</span></span>
<span class="line"><span>angry = &quot;Calm down now&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>[1] &quot;Cheer up&quot;</span></span>
<span class="line"><span>[1] &quot;There is nothing to fear&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>关于ifelse()</span></span>
<span class="line"><span>ifelse(score &gt; 0.5, print(&quot;Passed&quot;), print(&quot;Failed&quot;))</span></span></code></pre></div><h3 id="整合与重构数据" tabindex="-1">整合与重构数据 <a class="header-anchor" href="#整合与重构数据" aria-label="Permalink to &quot;整合与重构数据&quot;">​</a></h3><p>t()对数据框进行转置</p><p><strong>数据整合</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>对于如下数据</span></span>
<span class="line"><span>mtcars</span></span>
<span class="line"><span>                     mpg cyl  disp  hp drat   wt qsec vs am gear carb</span></span>
<span class="line"><span>Mazda RX4           21.0   6 160.0 110 3.90 2.62 16.5  0  1    4    4</span></span>
<span class="line"><span>Mazda RX4 Wag       21.0   6 160.0 110 3.90 2.88 17.0  0  1    4    4</span></span>
<span class="line"><span>Datsun 710          22.8   4 108.0  93 3.85 2.32 18.6  1  1    4    1</span></span>
<span class="line"><span>Hornet 4 Drive      21.4   6 258.0 110 3.08 3.21 19.4  1  0    3    1</span></span>
<span class="line"><span>Hornet Sportabout   18.7   8 360.0 175 3.15 3.44 17.0  0  0    3    2</span></span>
<span class="line"><span>Valiant             18.1   6 225.0 105 2.76 3.46 20.2  1  0    3    1</span></span>
<span class="line"><span>Duster 360          14.3   8 360.0 245 3.21 3.57 15.8  0  0    3    4</span></span>
<span class="line"><span>Merc 240D           24.4   4 146.7  62 3.69 3.19 20.0  1  0    4    2</span></span>
<span class="line"><span>Merc 230            22.8   4 140.8  95 3.92 3.15 22.9  1  0    4    2</span></span>
<span class="line"><span>Merc 280            19.2   6 167.6 123 3.92 3.44 18.3  1  0    4    4</span></span>
<span class="line"><span>Merc 280C           17.8   6 167.6 123 3.92 3.44 18.9  1  0    4    4</span></span>
<span class="line"><span>Merc 450SE          16.4   8 275.8 180 3.07 4.07 17.4  0  0    3    3</span></span>
<span class="line"><span>Merc 450SL          17.3   8 275.8 180 3.07 3.73 17.6  0  0    3    3</span></span>
<span class="line"><span>Merc 450SLC         15.2   8 275.8 180 3.07 3.78 18.0  0  0    3    3</span></span>
<span class="line"><span>Cadillac Fleetwood  10.4   8 472.0 205 2.93 5.25 18.0  0  0    3    4</span></span>
<span class="line"><span>Lincoln Continental 10.4   8 460.0 215 3.00 5.42 17.8  0  0    3    4</span></span>
<span class="line"><span>Chrysler Imperial   14.7   8 440.0 230 3.23 5.34 17.4  0  0    3    4</span></span>
<span class="line"><span>Fiat 128            32.4   4  78.7  66 4.08 2.20 19.5  1  1    4    1</span></span>
<span class="line"><span>Honda Civic         30.4   4  75.7  52 4.93 1.61 18.5  1  1    4    2</span></span>
<span class="line"><span>Toyota Corolla      33.9   4  71.1  65 4.22 1.83 19.9  1  1    4    1</span></span>
<span class="line"><span>Toyota Corona       21.5   4 120.1  97 3.70 2.46 20.0  1  0    3    1</span></span>
<span class="line"><span>Dodge Challenger    15.5   8 318.0 150 2.76 3.52 16.9  0  0    3    2</span></span>
<span class="line"><span>AMC Javelin         15.2   8 304.0 150 3.15 3.44 17.3  0  0    3    2</span></span>
<span class="line"><span>Camaro Z28          13.3   8 350.0 245 3.73 3.84 15.4  0  0    3    4</span></span>
<span class="line"><span>Pontiac Firebird    19.2   8 400.0 175 3.08 3.85 17.1  0  0    3    2</span></span>
<span class="line"><span>Fiat X1-9           27.3   4  79.0  66 4.08 1.94 18.9  1  1    4    1</span></span>
<span class="line"><span>Porsche 914-2       26.0   4 120.3  91 4.43 2.14 16.7  0  1    5    2</span></span>
<span class="line"><span>Lotus Europa        30.4   4  95.1 113 3.77 1.51 16.9  1  1    5    2</span></span>
<span class="line"><span>Ford Pantera L      15.8   8 351.0 264 4.22 3.17 14.5  0  1    5    4</span></span>
<span class="line"><span>Ferrari Dino        19.7   6 145.0 175 3.62 2.77 15.5  0  1    5    6</span></span>
<span class="line"><span>Maserati Bora       15.0   8 301.0 335 3.54 3.57 14.6  0  1    5    8</span></span>
<span class="line"><span>Volvo 142E          21.4   4 121.0 109 4.11 2.78 18.6  1  1    4    2</span></span></code></pre></div><p>通过<code>aggdata &lt;-aggregate(mtcars, by=list(cyl,gear), FUN=mean, na.rm=TRUE) </code>,实现对mtcars数据按照cyl,gear进行分类并返回各个数值类型的均值。返回结果如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>aggdata</span></span>
<span class="line"><span>  Group.1 Group.2  mpg cyl disp  hp drat   wt qsec  vs   am gear carb</span></span>
<span class="line"><span>1       4       3 21.5   4  120  97 3.70 2.46 20.0 1.0 0.00    3 1.00</span></span>
<span class="line"><span>2       6       3 19.8   6  242 108 2.92 3.34 19.8 1.0 0.00    3 1.00</span></span>
<span class="line"><span>3       8       3 15.1   8  358 194 3.12 4.10 17.1 0.0 0.00    3 3.08</span></span>
<span class="line"><span>4       4       4 26.9   4  103  76 4.11 2.38 19.6 1.0 0.75    4 1.50</span></span>
<span class="line"><span>5       6       4 19.8   6  164 116 3.91 3.09 17.7 0.5 0.50    4 4.00</span></span>
<span class="line"><span>6       4       5 28.2   4  108 102 4.10 1.83 16.8 0.5 1.00    5 2.00</span></span>
<span class="line"><span>7       6       5 19.7   6  145 175 3.62 2.77 15.5 0.0 1.00    5 6.00</span></span>
<span class="line"><span>8       8       5 15.4   8  326 300 3.88 3.37 14.6 0.0 1.00    5 6.00</span></span></code></pre></div><p>在结果中, Group.1表示汽缸数量(4、6或8), Group.2代表挡位数(3、4或5)。举例第一行数据,拥有4个汽缸和3个挡位车型的每加仑汽油行驶英里数(mpg)均值为21.5。</p><p>对于更加高级的数据整合方法，可利用reshape2包实现。</p><h2 id="基本图形" tabindex="-1">基本图形 <a class="header-anchor" href="#基本图形" aria-label="Permalink to &quot;基本图形&quot;">​</a></h2><h3 id="条形图" tabindex="-1">条形图 <a class="header-anchor" href="#条形图" aria-label="Permalink to &quot;条形图&quot;">​</a></h3><p><code>barplot()</code>可生成条形图。<code>?barolit</code>查看帮助文档。当height接受参数为向量时绘制一般条形图，但当其接受矩阵时，将绘制堆砌条形图或分组条形图(取决于参数beside = FALSE/TURE)。<br> 棘状图对堆砌条形图进行了重缩放,这样每个条形的高度均为1,每一段的高度即表示比例。由vcd包中的函数spine()绘制。</p><h3 id="饼图" tabindex="-1">饼图 <a class="header-anchor" href="#饼图" aria-label="Permalink to &quot;饼图&quot;">​</a></h3><p>饼图可由以下函数创建:<code>pie(x, labels, main, col)</code>,col处可利用<code>rainbow(n)</code>快速导入n种颜色。在plotrix包pie3D可绘制三维饼图。<br> 饼图存在的问题是如果不将其占比录入标签，仅凭肉眼有时无法分辨占比大小。扇形图提供了一种同时展示相对数量和相互差异的方法。扇形图通过plotrix包<code>fan.plot()</code>实现。</p><h3 id="直方图" tabindex="-1">直方图 <a class="header-anchor" href="#直方图" aria-label="Permalink to &quot;直方图&quot;">​</a></h3><p>直方图通过在x轴上将值域分割为一定数量的组,在y轴上显示相应值的频数,展示了连续型变量的分布。可以使用如下函数创建直方图:<code>hist(x, breaks(分割组数),freq)</code>freq=FALSE表示根据概率密度而不是频数绘制图形</p><h3 id="核密度图" tabindex="-1">核密度图 <a class="header-anchor" href="#核密度图" aria-label="Permalink to &quot;核密度图&quot;">​</a></h3><p>利用density(x)其中的x是一个数值型向量。使用line(density(x))可将核密度图叠加到某图上方。<br> 使用sm包中的sm.density.compare()函数可向图形叠加两组或更多的核密度图。使用格式为:<code>sm.density.compare(x, factor)</code>其中的x 是一个数值型向量, factor是一个分组变量。将自动按照分组及对应数值进行绘制。</p><h3 id="箱线图" tabindex="-1">箱线图 <a class="header-anchor" href="#箱线图" aria-label="Permalink to &quot;箱线图&quot;">​</a></h3><p>箱线图(又称盒须图)通过绘制连续型变量的五数总括,即最小值、下四分位数(第25百分位数)、中位数(第50百分位数)、上四分位数(第75百分位数)以及最大值,描述了连续型变量的分布。箱线图能够显示出可能为离群点(范围±1.5<em>IQR以外的值,IQR表示四分位距,即上四分位数与下四分位数的差值)的观测。例如:<code>boxplot(mtcars$mpg, main=&quot;Box plot&quot;, ylab=&quot;Miles per Gallon&quot;)</code><br> 箱线图可以展示单个变量或分组变量。使用格式为:<code>boxplot(formula, data=dataframe)</code>其中的formula是一个公式, dataframe代表提供数据的数据框(或列表)。一个示例公式为y~A,这将为类别型变量A的每个值并列地生成数值型变量y的箱线图。公式y~A</em>B则将为类别型变量A和B所有水平的两两组合生成数值型变量y的箱线图。<br> 添加参数varwidth=TRUE将使箱线图的宽度与其样本大小的平方根成正比.参数horizontal=TRUE 可以反转坐标轴的方向。,而varwidth=TRUE则使箱线图的宽度与它们各自的样本大小成正比。添加notch=TRUE,可以得到含凹槽的箱线图。</p><h3 id="点图" tabindex="-1">点图 <a class="header-anchor" href="#点图" aria-label="Permalink to &quot;点图&quot;">​</a></h3><p>点图提供了一种在简单水平刻度上绘制大量有标签值的方法。你可以使用dotchart()函数创建点图,格式为:<code>dotchart(x, labels=)</code>。通常来说,点图在经过排序并且分组变量被不同的符号和颜色区分开的时候最有用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>x &lt;- mtcars[order(mtcars$mpg),]</span></span>
<span class="line"><span>x$cyl &lt;- factor(x$cyl)</span></span>
<span class="line"><span>x$color[x$cyl==4] &lt;- &quot;red&quot;</span></span>
<span class="line"><span>x$color[x$cyl==6] &lt;- &quot;blue&quot;</span></span>
<span class="line"><span>x$color[x$cyl==8] &lt;- &quot;darkgreen&quot;</span></span>
<span class="line"><span>dotchart(x$mpg,</span></span>
<span class="line"><span>    labels = row.names(x),</span></span>
<span class="line"><span>     cex=.7,</span></span>
<span class="line"><span>    groups = x$cyl, # 有用</span></span>
<span class="line"><span>    gcolor = &quot;black&quot;,</span></span>
<span class="line"><span>    color = x$color,</span></span>
<span class="line"><span>    pch=19,</span></span>
<span class="line"><span>    main = &quot;Gas Mileage for Car Models\\ngrouped by cylinder&quot;,</span></span>
<span class="line"><span>    xlab = &quot;Miles Per Gallon&quot;）</span></span></code></pre></div><h2 id="基本统计分析" tabindex="-1">基本统计分析 <a class="header-anchor" href="#基本统计分析" aria-label="Permalink to &quot;基本统计分析&quot;">​</a></h2><h3 id="描述性统计量" tabindex="-1">描述性统计量 <a class="header-anchor" href="#描述性统计量" aria-label="Permalink to &quot;描述性统计量&quot;">​</a></h3><p>求最小值、均值、最大值、四分位数<code>summary()</code><br> 求最小值、中位数、最大值、四分位数<code>fivenum()</code><br> 通过sapply()计算描述性统计量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; mystats &lt;- function(x, na.omit=FALSE){</span></span>
<span class="line"><span>    if (na.omit)</span></span>
<span class="line"><span>    x &lt;- x[!is.na(x)]</span></span>
<span class="line"><span>    m &lt;- mean(x) # 均值</span></span>
<span class="line"><span>    n &lt;- length(x) # 样本数</span></span>
<span class="line"><span>    s &lt;- sd(x) # 标准差</span></span>
<span class="line"><span>    skew &lt;- sum((x-m)^3/s^3)/n # 偏度</span></span>
<span class="line"><span>    kurt &lt;- sum((x-m)^4/s^4)/n - 3 # 峰度</span></span>
<span class="line"><span>    return(c(n=n, mean=m, stdev=s, skew=skew, kurtosis=kurt))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其他可通过安装Hmisc,pastecs,psych等包实现。</p><p>有时我们需要分组计算描述性统计量，先前学习的<code>aggregate()</code>可实现对数据分组但仅能返回均值、方差统计信息。在此使用<code>by()</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; mystats &lt;- function(x, na.omit=FALSE){</span></span>
<span class="line"><span>    if (na.omit)</span></span>
<span class="line"><span>    x &lt;- x[!is.na(x)]</span></span>
<span class="line"><span>    m &lt;- mean(x) # 均值</span></span>
<span class="line"><span>    n &lt;- length(x) # 样本数</span></span>
<span class="line"><span>    s &lt;- sd(x) # 标准差</span></span>
<span class="line"><span>    skew &lt;- sum((x-m)^3/s^3)/n # 偏度</span></span>
<span class="line"><span>    kurt &lt;- sum((x-m)^4/s^4)/n - 3 # 峰度</span></span>
<span class="line"><span>    return(c(n=n, mean=m, stdev=s, skew=skew, kurtosis=kurt))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&gt; dstats &lt;- function(x){sapply(x, mystats)}</span></span>
<span class="line"><span>&gt; myvars &lt;- c(&quot;mpg&quot;, &quot;hp&quot;, &quot;wt&quot;)</span></span>
<span class="line"><span>&gt; by(mtcars[myvars], mtcars$am, dstats)</span></span></code></pre></div><p>其他可通过安装doBy,psych实现。</p><h3 id="频数表和列联表" tabindex="-1">频数表和列联表 <a class="header-anchor" href="#频数表和列联表" aria-label="Permalink to &quot;频数表和列联表&quot;">​</a></h3><p>用于创建和处理列联表的函数</p><table><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td>table(var1, var2, ..., varN)</td><td>使用 N 个类别型变量(因子)创建一个 N 维列联表</td></tr><tr><td>xtabs(formula, data)</td><td>根据一个公式和一个矩阵或数据框创建一个 N 维列联表</td></tr><tr><td>prop.table(table, margins(1代表行，2代表列))</td><td>依 margins 定义的边际列表将表中条目表示为分数形式</td></tr><tr><td>margin.table(table, margins)</td><td>依 margins 定义的边际列表计算表中条目的和</td></tr><tr><td>addmargins(table, margins)</td><td>将概述边 margins(默认是求和结果，即边际和)放入表中</td></tr><tr><td>ftable(table)</td><td>创建一个紧凑的“平铺”式列联表</td></tr></tbody></table><p><strong>多维列联表</strong><br> table和xtabs都可以生成多维列联表，形如分类讨论？使用<code>ftable()</code>可以使得生成的表更加紧凑。</p><h4 id="独立性检验" tabindex="-1">独立性检验 <a class="header-anchor" href="#独立性检验" aria-label="Permalink to &quot;独立性检验&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>chisq.test() 卡方独立检验</span></span>
<span class="line"><span>fisher.test() fisher精确检验，不可2*2列联</span></span>
<span class="line"><span>mantelhaen.test() Cochran-Mantel-Haenszel卡方检验，三层</span></span></code></pre></div><p>检验是否独立，若不独立，利用vcd中<code>assocstats()</code>进行相关性度量。</p><h3 id="相关" tabindex="-1">相关 <a class="header-anchor" href="#相关" aria-label="Permalink to &quot;相关&quot;">​</a></h3><p><code>cor()</code>函数可以计算这三种相关系数,而<code>cov()</code>函数可用来计算协方差。<br> ggm包中pcor()可以计算偏方差(控制一些变量后研究两变量之间的相互关系)</p><p>相关性显著性检验<code>cor.test(x, y, alternative = , method = )</code>alternative则用来指定进行双侧检验或单侧检验(取值 为&quot;two.side&quot;、&quot;less&quot;或&quot;greater&quot;),而method 用以指定要计算的相关类型(&quot;pearson&quot;、&quot;kendall&quot; 或 &quot;spearman&quot; )。当研究的假设为总体的相关系数小于0时,请使用alternative=&quot;less&quot; 。</p><p>psych包<code>corr.test</code>可以一次性对多个相关关系进行检验。</p><h3 id="t检验" tabindex="-1">t检验 <a class="header-anchor" href="#t检验" aria-label="Permalink to &quot;t检验&quot;">​</a></h3><p>独立样本t.test() 非独立t.test(y1, y2, paired=TRUE)</p><h3 id="组建差异的非参数检验" tabindex="-1">组建差异的非参数检验 <a class="header-anchor" href="#组建差异的非参数检验" aria-label="Permalink to &quot;组建差异的非参数检验&quot;">​</a></h3><h2 id="回归" tabindex="-1">回归 <a class="header-anchor" href="#回归" aria-label="Permalink to &quot;回归&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>lm() 拟合线性回归模型</span></span>
<span class="line"><span>myfit &lt;- lm(formula, data)</span></span>
<span class="line"><span>其中formula指要拟合的模型形式例如Y ~ X1 + X2 + ... + Xk</span></span>
<span class="line"><span>例如fit2 &lt;- lm(weight ~ height + I(height^2),data=women)</span></span>
<span class="line"><span># I函数内内容为一般表达，因为^有其他意思，防止其他调用。</span></span></code></pre></div><p>以下函数应用于lm()返回对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>summary() 展示拟合模型的详细结果</span></span>
<span class="line"><span>coefficients() 列出拟合模型的模型参数(截距项和斜率)</span></span>
<span class="line"><span>confint()  提供模型参数的置信区间(默认 95%)</span></span>
<span class="line"><span>fitted() 列出拟合模型的预测值</span></span>
<span class="line"><span>residuals() 列出拟合模型的残差值</span></span>
<span class="line"><span>anova() 生成一个拟合模型的方差分析表,或者比较两个或更多拟合模型的方差分析表</span></span>
<span class="line"><span>vcov() 列出模型参数的协方差矩阵</span></span>
<span class="line"><span>AIC() 输出赤池信息统计量</span></span>
<span class="line"><span>plot() 生成评价拟合模型的诊断图</span></span>
<span class="line"><span>predict() 用拟合模型对新的数据集预测响应变量值</span></span></code></pre></div><p>回归问题实例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>states &lt;- as.data.frame(</span></span>
<span class="line"><span>    state.x77[,c(&quot;Murder&quot;, &quot;Population&quot;,&quot;Illiteracy&quot;, &quot;Income&quot;, &quot;Frost&quot;)]) </span></span>
<span class="line"><span>    # 生成数据框</span></span>
<span class="line"><span>cor(states)</span></span>
<span class="line"><span>library(car)</span></span>
<span class="line"><span>scatterplotMatrix(states, spread=FALSE, smoother.args=list(lty=2),</span></span>
<span class="line"><span>main=&quot;Scatter Plot Matrix&quot;) # 相关性分析及可视化</span></span>
<span class="line"><span>fit &lt;- lm(Murder ~ Population + Illiteracy + Income + Frost,data=states) </span></span>
<span class="line"><span>#多元回归预测</span></span></code></pre></div><h3 id="r表达式中常用符号" tabindex="-1">R表达式中常用符号 <a class="header-anchor" href="#r表达式中常用符号" aria-label="Permalink to &quot;R表达式中常用符号&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>~ 分隔符号,左边为响应变量,右边为解释变量。例如,要通过 x、z 和 w 预测 y,代码为 y ~ x + z + w</span></span>
<span class="line"><span>+ 分隔预测变量</span></span>
<span class="line"><span>: 表示预测变量的交互项。例如,要通过 x、z 及 x 与 z 的交互项预测 y,代码为 y ~ x + z + x:z</span></span>
<span class="line"><span>* 表示所有可能交互项的简洁方式。代码 y~ x * z * w 可展开为 y ~ x + z + w + x:z + x:w + z:w +</span></span>
<span class="line"><span>x:z:w</span></span>
<span class="line"><span>^ 表示交互项达到某个次数。代码 y ~ (x + z + w)^2 可展开为 y ~ x + z + w + x:z + x:w + z:w</span></span>
<span class="line"><span>. 表示包含除因变量外的所有变量。例如,若一个数据框包含变量 x、y、z 和 w,代码 y ~ .可展开为 y ~</span></span>
<span class="line"><span>x + z + w</span></span>
<span class="line"><span>- 减号,表示从等式中移除某个变量。例如, y ~ (x + z + w)^2 – x:w 可展开为 y ~ x + z + w +</span></span>
<span class="line"><span>x:z + z:w</span></span>
<span class="line"><span>-1 删除截距项。例如,表达式 y ~ x - 1 拟合 y 在 x 上的回归,并强制直线通过原点</span></span>
<span class="line"><span>I() 从算术的角度来解释括号中的元素。例如, y ~ x + (z + w)^2 将展开为 y ~ x + z + w + z:w。</span></span>
<span class="line"><span>相反, 代码 y ~ x + I((z + w)^2)将展开为 y ~ x + h,h 是一个由 z 和 w 的平方和创建的新变量</span></span>
<span class="line"><span>function 可以在表达式中用的数学函数。例如,log(y) ~ x + z + w 表示通过 x、z 和 w 来预测 log(y)</span></span></code></pre></div><h3 id="回归诊断" tabindex="-1">回归诊断 <a class="header-anchor" href="#回归诊断" aria-label="Permalink to &quot;回归诊断&quot;">​</a></h3><p><strong>基础方法</strong><br> Q-Q为45度直线，R vs F 没有关联、S-L为水平线周围随机分布，R vs L查看离群值和强影响值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>fit &lt;- lm(weight ~ height, data=women)</span></span>
<span class="line"><span>par(mfrow=c(2,2))</span></span>
<span class="line"><span>plot(fit)</span></span></code></pre></div><p><strong>进阶(car包)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>正态性 Q-Q qqPlot(fit, labels=row.names(states), id.</span></span>
<span class="line"><span>    method=&quot;identify&quot;,simulate=TRUE, main=&quot;Q-Q Plot&quot;)</span></span>
<span class="line"><span>相关性检验  durbinWatsonTest(fit)</span></span>
<span class="line"><span>线性 library(car) crPlots(fit)</span></span>
<span class="line"><span>同方差性library(car) ncvTest(fit)计分检验不显著则满足  spreadLevelPlot(fit)</span></span>
<span class="line"><span>多重共线性 sqrt(vif(fit)) &gt;2 表示存在共线性</span></span></code></pre></div><p>综合判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(gvlma)</span></span>
<span class="line"><span>gvmodel &lt;- gvlma(fit)</span></span>
<span class="line"><span>summary(gvmodel) # 在Decision中显示是否通过</span></span></code></pre></div><h3 id="异常观测值" tabindex="-1">异常观测值 <a class="header-anchor" href="#异常观测值" aria-label="Permalink to &quot;异常观测值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>outlierTest(fit) </span></span>
<span class="line"><span>#显示点名称以及离群点概率p，不显著则无离群点，否则删除该离群点后需在此判断是否有其他离群值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hat.plot &lt;- function(fit) {</span></span>
<span class="line"><span>    p &lt;- length(coefficients(fit))</span></span>
<span class="line"><span>    n &lt;- length(fitted(fit))</span></span>
<span class="line"><span>    plot(hatvalues(fit), main=&quot;Index Plot of Hat Values&quot;)</span></span>
<span class="line"><span>    abline(h=c(2,3)*p/n, col=&quot;red&quot;, lty=2)</span></span>
<span class="line"><span>    identify(1:n, hatvalues(fit), names(hatvalues(fit)))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    hat.plot(fit) # 判断高杠杆值点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cutoff &lt;- 4/(nrow(states)-length(fit$coefficients)-2)</span></span>
<span class="line"><span>    plot(fit, which=4, cook.levels=cutoff)</span></span>
<span class="line"><span>    abline(h=cutoff, lty=2, col=&quot;red&quot;) # 判断强影响点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>library(car)</span></span>
<span class="line"><span>    influencePlot(fit, main=&quot;Influence Plot&quot;,</span></span>
<span class="line"><span>    sub=&quot;Circle size is proportional to Cook&#39;s distance&quot;)</span></span>
<span class="line"><span># 综合判断。纵坐标-离群点,水平轴-高杠杆值(通常为预测值的组合)。圆圈大小与影响成比例,</span></span>
<span class="line"><span>圆圈很大的点可能是对模型参数的估计造成的不成比例影响的强影响点</span></span></code></pre></div><h3 id="选择最佳回归模型" tabindex="-1">选择最佳回归模型 <a class="header-anchor" href="#选择最佳回归模型" aria-label="Permalink to &quot;选择最佳回归模型&quot;">​</a></h3><h4 id="对两模型的选择" tabindex="-1">对两模型的选择 <a class="header-anchor" href="#对两模型的选择" aria-label="Permalink to &quot;对两模型的选择&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>fit1 &lt;- lm(Murder ~ Population + Illiteracy + Income + Frost,</span></span>
<span class="line"><span>data=states)</span></span>
<span class="line"><span>fit2 &lt;- lm(Murder ~ Population + Illiteracy, data=states)</span></span></code></pre></div><p>俩嵌套模型采用anova()。当显示添加变量后显著则可添加变量，通用AIC()。AIC越小模型越好。</p><h4 id="大量变量中选择预测变量" tabindex="-1">大量变量中选择预测变量 <a class="header-anchor" href="#大量变量中选择预测变量" aria-label="Permalink to &quot;大量变量中选择预测变量&quot;">​</a></h4><p>MASS包中的stepAIC()根据AIC逐步进行变量删除和增添。能够保证单次最优但不一定为整体最优<br> leaps包中regsubsets()实现全子集回归。略了。<br> 根据相对权重选择</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span># 计算预测变量的相对权重</span></span>
<span class="line"><span>relweights &lt;- function(fit,...){</span></span>
<span class="line"><span>R &lt;- cor(fit$model)</span></span>
<span class="line"><span>nvar &lt;- ncol(R)</span></span>
<span class="line"><span>rxx &lt;- R[2:nvar, 2:nvar]</span></span>
<span class="line"><span>rxy &lt;- R[2:nvar, 1]</span></span>
<span class="line"><span>svd &lt;- eigen(rxx)</span></span>
<span class="line"><span>evec &lt;- svd$vectors</span></span>
<span class="line"><span>ev &lt;- svd$values</span></span>
<span class="line"><span>delta &lt;- diag(sqrt(ev))</span></span>
<span class="line"><span>lambda &lt;- evec %*% delta %*% t(evec)</span></span>
<span class="line"><span>lambdasq &lt;- lambda ^ 2</span></span>
<span class="line"><span>beta &lt;- solve(lambda) %*% rxy</span></span>
<span class="line"><span>rsquare &lt;- colSums(beta ^ 2)</span></span>
<span class="line"><span>rawwgt &lt;- lambdasq %*% beta ^ 2</span></span>
<span class="line"><span>import &lt;- (rawwgt / rsquare) * 100</span></span>
<span class="line"><span>import &lt;- as.data.frame(import)</span></span>
<span class="line"><span>row.names(import) &lt;- names(fit$model[2:nvar])</span></span>
<span class="line"><span>names(import) &lt;- &quot;Weights&quot;</span></span>
<span class="line"><span>import &lt;- import[order(import),1, drop=FALSE]</span></span>
<span class="line"><span>dotchart(import$Weights, labels=row.names(import),</span></span>
<span class="line"><span>xlab=&quot;% of R-Square&quot;, pch=19,</span></span>
<span class="line"><span>main=&quot;Relative Importance of Predictor Variables&quot;,</span></span>
<span class="line"><span>sub=paste(&quot;Total R-Square=&quot;, round(rsquare, digits=3)),</span></span>
<span class="line"><span>...)</span></span>
<span class="line"><span>return(import)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="k折交叉验证" tabindex="-1">k折交叉验证 <a class="header-anchor" href="#k折交叉验证" aria-label="Permalink to &quot;k折交叉验证&quot;">​</a></h3>`,233),o={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.048ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.705ex",height:"1.934ex",role:"img",focusable:"false",viewBox:"0 -833.9 1195.6 854.9","aria-hidden":"true"},c=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(792,363) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g></g></g>',1),d=[c],h=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msup",null,[a("mi",null,"R"),a("mn",null,"2")])])],-1),u=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>shrinkage &lt;- function(fit, k=10){</span></span>
<span class="line"><span>    require(bootstrap)</span></span>
<span class="line"><span>    theta.fit &lt;- function(x,y){lsfit(x,y)}</span></span>
<span class="line"><span>    theta.predict &lt;- function(fit,x){cbind(1,x)%*%fit$coef}</span></span>
<span class="line"><span>    x &lt;- fit$model[,2:ncol(fit$model)]</span></span>
<span class="line"><span>    y &lt;- fit$model[,1]</span></span>
<span class="line"><span>    results &lt;- crossval(x, y, theta.fit, theta.predict, ngroup=k)</span></span>
<span class="line"><span>    r2 &lt;- cor(y, fit$fitted.values)^2</span></span>
<span class="line"><span>    r2cv &lt;- cor(y, results$cv.fit)^2</span></span>
<span class="line"><span>    cat(&quot;Original R-square =&quot;, r2, &quot;\\n&quot;)</span></span>
<span class="line"><span>    cat(k, &quot;Fold Cross-Validated R-square =&quot;, r2cv, &quot;\\n&quot;)</span></span>
<span class="line"><span>    cat(&quot;Change =&quot;, r2-r2cv, &quot;\\n&quot;)</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>用来检验该回归函数的泛化能力。</p><h2 id="方差分析" tabindex="-1">方差分析 <a class="header-anchor" href="#方差分析" aria-label="Permalink to &quot;方差分析&quot;">​</a></h2><h3 id="anova模型拟合" tabindex="-1">ANOVA模型拟合 <a class="header-anchor" href="#anova模型拟合" aria-label="Permalink to &quot;ANOVA模型拟合&quot;">​</a></h3><p>利用aov()函数，<code>aov(formula, data=dataframe)</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>单因素 ANOVA y ~ A</span></span>
<span class="line"><span>含单个协变量的单因素 ANCOVA  y ~ x + A</span></span>
<span class="line"><span>双因素 ANOVA  y ~ A * B</span></span>
<span class="line"><span>含两个协变量的双因素 ANCOVA  y ~ x1 + x2 + A*B</span></span>
<span class="line"><span>随机化区组  y ~ B + A(B 是区组因子)</span></span>
<span class="line"><span>单因素组内 ANOVA  y ~ A + Error(Subject/A)</span></span>
<span class="line"><span>含单个组内因子(W)和单个组间因子(B)的重复测量 ANOVA  y ~ B * W + Error(Subject/W)</span></span></code></pre></div><p>R默认采用序惯型，例如对y ~ A + B + A:B,R中的ANOVA表的结果将评价:<br>  A对 y的影响;<br>  控制A时,B对y的影响;<br>  控制A和B的主效应时,A与B的交互效应。</p><h3 id="单因素方差分析" tabindex="-1">单因素方差分析 <a class="header-anchor" href="#单因素方差分析" aria-label="Permalink to &quot;单因素方差分析&quot;">​</a></h3><p>课本上有一个非常完整的例子，可以参考</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>aggregate(response, by=list(trt), FUN=mean) 依照治疗方式不同给出各组均值和方差</span></span>
<span class="line"><span>aggregate(response, by=list(trt), FUN=sd)</span></span>
<span class="line"><span>fit &lt;- aov(response ~ trt)</span></span>
<span class="line"><span>summary(fit) 检验组间差异绘制各组均值和置信区间</span></span>
<span class="line"><span>library(gplots)</span></span>
<span class="line"><span>plotmeans(response ~ trt, xlab=&quot;Treatment&quot;, ylab=&quot;Response&quot;,</span></span>
<span class="line"><span>main=&quot;Mean Plot\\nwith 95% CI&quot;)</span></span>
<span class="line"><span>detach(cholesterol)</span></span></code></pre></div><p>多重比较，细究哪组与其他组别不同。multcomp包中的glht()函数提供了多重均值比较更为全面的方法,既适用于线性模型(如本章各例),也适用于广义线性模型(见第13章).</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(multcomp)</span></span>
<span class="line"><span>par(mar=c(5,4,6,2)) # 增大图形上部面积完整显示图片</span></span>
<span class="line"><span>tuk &lt;- glht(fit, linfct=mcp(trt=&quot;Tukey&quot;))</span></span>
<span class="line"><span>plot(cld(tuk, level=.05),col=&quot;lightgrey&quot;) # 最终结果有相同字母的差异不显著</span></span></code></pre></div><h3 id="单因素协方差" tabindex="-1">单因素协方差 <a class="header-anchor" href="#单因素协方差" aria-label="Permalink to &quot;单因素协方差&quot;">​</a></h3><p>课本具有完整的例子，可参考。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; data(litter, package=&quot;multcomp&quot;)</span></span>
<span class="line"><span>&gt; attach(litter)</span></span>
<span class="line"><span>&gt; table(dose)</span></span>
<span class="line"><span>dose</span></span>
<span class="line"><span>0 5 50 500</span></span>
<span class="line"><span>20 19 18 17</span></span>
<span class="line"><span>&gt; aggregate(weight, by=list(dose), FUN=mean)</span></span>
<span class="line"><span>  Group.1  x</span></span>
<span class="line"><span>1   0  32.3</span></span>
<span class="line"><span>2   5 29.3</span></span>
<span class="line"><span>3   50 29.9</span></span>
<span class="line"><span>4   500 29.6</span></span>
<span class="line"><span>&gt; fit &lt;- aov(weight ~ gesttime + dose)</span></span>
<span class="line"><span>&gt; summary(fit)</span></span>
<span class="line"><span>         Df  Sum Sq  Mean Sq  F value Pr(&gt;F)</span></span>
<span class="line"><span>gesttime  1  134.30  134.30    8.0493 0.005971 **</span></span>
<span class="line"><span>dose      3  137.12  45.71     2.7394 0.049883 *</span></span>
<span class="line"><span>Residuals 69 1151.27 16.69</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>Signif. codes: 0 &#39;***&#39; 0.001 &#39;**&#39; 0.01 &#39;*&#39; 0.05 &#39;.&#39; 0.1 &#39; &#39; 1</span></span></code></pre></div><p>利用table()函数,可以看到每种剂量下所产的幼崽数并不相同:0剂量时(未用药)产崽 20个,500剂量时产崽17个。再用aggregate()函数获得各组均值,可以发现未用药组幼崽体重 均值最高(32.3)。ANCOVA的F检验表明:(a)怀孕时间与幼崽出生体重相关;(b)控制怀孕时间, 药物剂量与出生体重相关。控制怀孕时间,确实发现每种药物剂量下幼崽出生体重均值不同。</p><h3 id="双因素方差" tabindex="-1">双因素方差 <a class="header-anchor" href="#双因素方差" aria-label="Permalink to &quot;双因素方差&quot;">​</a></h3><p>数据集为喂食材料和剂量影响鼠牙齿长度</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>attach(ToothGrowth)</span></span>
<span class="line"><span>table(supp, dose)</span></span>
<span class="line"><span>ggregate(len, by=list(supp, dose), FUN=mean)</span></span>
<span class="line"><span>aggregate(len, by=list(supp, dose), FUN=sd)</span></span>
<span class="line"><span># 以上标准流程</span></span>
<span class="line"><span>dose &lt;- factor(dose) 将其转化为分组因子变量</span></span>
<span class="line"><span>fit &lt;- aov(len ~ supp*dose) </span></span>
<span class="line"><span>summary(fit)</span></span></code></pre></div><p>结果可视化</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>interaction.plot(dose, supp, len, type=&quot;b&quot;, # 自、自、因</span></span>
<span class="line"><span>    col=c(&quot;red&quot;,&quot;blue&quot;), pch=c(16, 18),</span></span>
<span class="line"><span>    main = &quot;Interaction between Dose and Supplement Type&quot;)</span></span></code></pre></div><h3 id="重复测量方差分析" tabindex="-1">重复测量方差分析 <a class="header-anchor" href="#重复测量方差分析" aria-label="Permalink to &quot;重复测量方差分析&quot;">​</a></h3><h3 id="多元方差分析" tabindex="-1">多元方差分析 <a class="header-anchor" href="#多元方差分析" aria-label="Permalink to &quot;多元方差分析&quot;">​</a></h3><p>使用<code>fit &lt;- manova(y ~ shelf)</code>，<code>summary(fit)</code>对组间差异进行多元检验，显著可对每一个变量做分析<code>summary.aov(fit)</code></p><h2 id="功效分析" tabindex="-1">功效分析 <a class="header-anchor" href="#功效分析" aria-label="Permalink to &quot;功效分析&quot;">​</a></h2><p>作为统计咨询师,我经常会被问到这样一个问题:“我的研究到底需要多少个受试者呢?”或者换个说法 “对于我的研究,现有x个可用的受试者,这样的研究值得做吗?”这类问题都可用通过功效分析(power analysis)来解决,它在实验设计中占有重要地位。 本章利用pwr包做功效分析：<br> 对于每个函数,用户可以设定四个量(样本大小、显著性水平、功效和效应值)中的三个量，第四个将由软件计算出来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>pwr.2p.test() 两比例(n 相等)</span></span>
<span class="line"><span>pwr.2p2n.test() 两比例(n 不相等)</span></span>
<span class="line"><span>pwr.anova.test() 平衡的单因素 ANOVA</span></span>
<span class="line"><span>pwr.chisq.test() 卡方检验</span></span>
<span class="line"><span>pwr.f2.test() 广义线性模型</span></span>
<span class="line"><span>pwr.p.test() 比例(单样本)</span></span>
<span class="line"><span>pwr.r.test() 相关系数</span></span>
<span class="line"><span>pwr.t.test() t 检验(单样本、两样本、配对)</span></span>
<span class="line"><span>pwr.t2n.test() t 检验(n 不相等的两样本)</span></span></code></pre></div><h4 id="t检验-1" tabindex="-1">t检验 <a class="header-anchor" href="#t检验-1" aria-label="Permalink to &quot;t检验&quot;">​</a></h4>`,28),m=a("code",null,"pwr.t.test(n=, d=, sig.level=, power=, type=, alternative=)",-1),b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.661ex",height:"2.74ex",role:"img",focusable:"false",viewBox:"0 -858.3 4270 1211.1","aria-hidden":"true"},g=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(797.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mfrac" transform="translate(1853.6,0)"><g data-mml-node="mrow" transform="translate(220,446.1) scale(0.707)"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(605,-150) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(1008.6,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(1786.6,0)"><g data-mml-node="mi"><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(605,-150) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mi" transform="translate(1006.3,-345) scale(0.707)"><path data-c="1D70E" d="M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z" style="stroke-width:3;"></path></g><rect width="2176.4" height="60" x="120" y="220"></rect></g></g></g>',1),f=[g],v=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"d"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("msub",null,[a("mi",null,"u"),a("mn",null,"1")]),a("mo",null,"−"),a("msub",null,[a("mi",null,"u"),a("mn",null,"2")])]),a("mi",null,"σ")])])],-1),y=a("p",null,"对于求出power过小或者sig.level、n过大都对我们实验收益不利",-1),x=a("h4",{id:"方差分析-1",tabindex:"-1"},[s("方差分析 "),a("a",{class:"header-anchor",href:"#方差分析-1","aria-label":'Permalink to "方差分析"'},"​")],-1),T=a("code",null,"pwr.anova.test(k=, n=, f=, sig.level=, power=)",-1),Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.628ex"},xmlns:"http://www.w3.org/2000/svg",width:"21.341ex",height:"2.851ex",role:"img",focusable:"false",viewBox:"0 -982.5 9432.6 1260","aria-hidden":"true"},w=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msqrt"><g transform="translate(1020,0)"><g data-mml-node="mo"><path data-c="2211" d="M61 748Q64 750 489 750H913L954 640Q965 609 976 579T993 533T999 516H979L959 517Q936 579 886 621T777 682Q724 700 655 705T436 710H319Q183 710 183 709Q186 706 348 484T511 259Q517 250 513 244L490 216Q466 188 420 134T330 27L149 -187Q149 -188 362 -188Q388 -188 436 -188T506 -189Q679 -189 778 -162T936 -43Q946 -27 959 6H999L913 -249L489 -250Q65 -250 62 -248Q56 -246 56 -239Q56 -234 118 -161Q186 -81 245 -11L428 206Q428 207 242 462L57 717L56 728Q56 744 61 748Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(1222.7,0)"><g data-mml-node="mi"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(536,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(2274.8,0)"><path data-c="2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2997.1,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(3386.1,0)"><g data-mml-node="mi"><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(605,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(4507.2,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5507.5,0)"><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="msup" transform="translate(6079.5,0)"><g data-mml-node="mo"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(422,289) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(6905,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z" style="stroke-width:3;"></path></g></g><g data-mml-node="msup" transform="translate(7405,0)"><g data-mml-node="mi"><path data-c="1D70E" d="M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(604,289) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mo" transform="translate(0,72.5)"><path data-c="221A" d="M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z" style="stroke-width:3;"></path></g><rect width="8412.6" height="60" x="1020" y="862.5"></rect></g></g></g>',1),C=[w],A=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msqrt",null,[a("mo",{"data-mjx-texclass":"OP"},"∑"),a("msub",null,[a("mi",null,"p"),a("mi",null,"i")]),a("mo",null,"∗"),a("mo",{stretchy:"false"},"("),a("msub",null,[a("mi",null,"u"),a("mi",null,"i")]),a("mo",null,"−"),a("mi",null,"u"),a("msup",null,[a("mo",{stretchy:"false"},")"),a("mn",null,"2")]),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",null,"/")]),a("msup",null,[a("mi",null,"σ"),a("mn",null,"2")])])])],-1),_=n(`<h4 id="相关性分析" tabindex="-1">相关性分析 <a class="header-anchor" href="#相关性分析" aria-label="Permalink to &quot;相关性分析&quot;">​</a></h4><p>pwr.r.test()函数可以对相关性分析进行功效分析。格式如下:<code>pwr.r.test(n=, r=, sig.level=, power=, alternative=)</code><br> 例<code>pwr.r.test(r=.25, sig.level=.05, power=.90, alternative=&quot;greater&quot;) #显著性水平0.05,单边检验，总体相关性分界0.25,如果H0错误有90%信心拒绝H0</code></p><h4 id="线性模型" tabindex="-1">线性模型 <a class="header-anchor" href="#线性模型" aria-label="Permalink to &quot;线性模型&quot;">​</a></h4><p>对于线性模型(比如多元回归),pwr.f2.test()函数可以完成相应的功效分析,格式为:<code>pwr.f2.test(u=, v=, f2=, sig.level=, power=)</code></p><h4 id="比例检验" tabindex="-1">比例检验 <a class="header-anchor" href="#比例检验" aria-label="Permalink to &quot;比例检验&quot;">​</a></h4><p>当比较两个比例时,可使用pwr.2p.test()函数进行功效分析。格式为:<code>pwr.2p.test(h=, n=, sig.level=, power=)</code>，效应值使用函数ES.h(p1, p2)，当两组n不同使用<code>pwr.2p2n.test(h=, n1=, n2=, sig.level=, power=)</code>,h为效应值。<br> 例如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>pwr.2p.test(h=ES.h(.65, .6), sig.level=.05, power=.9,</span></span>
<span class="line"><span>    alternative=&quot;greater&quot;)</span></span>
<span class="line"><span># 对于两种药物治愈65%和60%可信性进行检验，需要有90%概率得到新药更有效并且有95%把握</span></span>
<span class="line"><span>不会得到错误结论，由于只关心更好，单边检验</span></span></code></pre></div><h4 id="卡方检验" tabindex="-1">卡方检验 <a class="header-anchor" href="#卡方检验" aria-label="Permalink to &quot;卡方检验&quot;">​</a></h4><p>略</p><h4 id="新情况中推荐效应值" tabindex="-1">新情况中推荐效应值 <a class="header-anchor" href="#新情况中推荐效应值" aria-label="Permalink to &quot;新情况中推荐效应值&quot;">​</a></h4><p>功效分析中,预期效应值是最难决定的参数。它通常需要你对主题有一定的了解,并有相应 的测量经验。例如,过去研究中的数据可以用来计算效应值,这能为后面深层次的研究提供一些参考。 但是当面对全新的研究情况,没有任何过去的经验可借鉴时,本节提到了一些参考。</p><h3 id="绘制功效分析图" tabindex="-1">绘制功效分析图 <a class="header-anchor" href="#绘制功效分析图" aria-label="Permalink to &quot;绘制功效分析图&quot;">​</a></h3><p>实例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(pwr)</span></span>
<span class="line"><span>r &lt;- seq(.1,.5,.01) # 相关系数</span></span>
<span class="line"><span>nr &lt;- length(r)</span></span>
<span class="line"><span> p &lt;- seq(.4,.9,.1) # 功效</span></span>
<span class="line"><span>np &lt;- length(p)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>samsize &lt;- array(numeric(nr*np), dim=c(nr,np)) # 样本大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (i in 1:np){</span></span>
<span class="line"><span>    for (j in 1:nr){</span></span>
<span class="line"><span>        result &lt;- pwr.r.test(n = NULL, r = r[j],</span></span>
<span class="line"><span>        sig.level = .05, power = p[i],</span></span>
<span class="line"><span>        alternative = &quot;two.sided&quot;)</span></span>
<span class="line"><span>        samsize[j,i] &lt;- ceiling(result$n)  # 求出需要的样本数</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>xrange &lt;- range(r) # 找x范围</span></span>
<span class="line"><span>yrange &lt;- round(range(samsize)) # 找y范围</span></span>
<span class="line"><span>colors &lt;- rainbow(length(p))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plot(xrange, yrange, type=&quot;n&quot;,</span></span>
<span class="line"><span>xlab=&quot;Correlation Coefficient (r)&quot;,</span></span>
<span class="line"><span>ylab=&quot;Sample Size (n)&quot; )  # 绘制框架</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (i in 1:np){</span></span>
<span class="line"><span>lines(r, samsize[,i], type=&quot;l&quot;, lwd=2, col=colors[i])</span></span>
<span class="line"><span>} # 添加功效曲线</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>abline(v=0, h=seq(0,yrange[2],50), lty=2, col=&quot;grey89&quot;) </span></span>
<span class="line"><span>abline(h=0, v=seq(xrange[1],xrange[2],.02), lty=2, col=&quot;gray89&quot;) #网格线</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>title(&quot;Sample Size Estimation for Correlation Studies\\n</span></span>
<span class="line"><span>Sig=0.05 (Two-tailed)&quot;)</span></span>
<span class="line"><span>legend(&quot;topright&quot;, title=&quot;Power&quot;, as.character(p),</span></span>
<span class="line"><span>fill=colors)</span></span>
<span class="line"><span># 注释</span></span></code></pre></div><h2 id="中级绘图" tabindex="-1">中级绘图 <a class="header-anchor" href="#中级绘图" aria-label="Permalink to &quot;中级绘图&quot;">​</a></h2><h3 id="散点——散点图矩阵、高密度散点图、三维散点图、旋转散点图、气泡图" tabindex="-1">散点——散点图矩阵、高密度散点图、三维散点图、旋转散点图、气泡图 <a class="header-anchor" href="#散点——散点图矩阵、高密度散点图、三维散点图、旋转散点图、气泡图" aria-label="Permalink to &quot;散点——散点图矩阵、高密度散点图、三维散点图、旋转散点图、气泡图&quot;">​</a></h3><h3 id="折线图" tabindex="-1">折线图 <a class="header-anchor" href="#折线图" aria-label="Permalink to &quot;折线图&quot;">​</a></h3><h3 id="相关图" tabindex="-1">相关图 <a class="header-anchor" href="#相关图" aria-label="Permalink to &quot;相关图&quot;">​</a></h3><h3 id="马赛克图" tabindex="-1">马赛克图 <a class="header-anchor" href="#马赛克图" aria-label="Permalink to &quot;马赛克图&quot;">​</a></h3><h2 id="重抽样与自助法" tabindex="-1">重抽样与自助法 <a class="header-anchor" href="#重抽样与自助法" aria-label="Permalink to &quot;重抽样与自助法&quot;">​</a></h2><pre><code>这一章我主要是随便看看了解一下，因为在机器学习部分已经有接触。
</code></pre><h2 id="主成分分析和因子分析" tabindex="-1">主成分分析和因子分析 <a class="header-anchor" href="#主成分分析和因子分析" aria-label="Permalink to &quot;主成分分析和因子分析&quot;">​</a></h2><pre><code>问题面向主要为：当数据变量过多时，盲目分析会增大工作量，主成分分析和探索
性因子分析是两种用来探索和简化多变量复杂关系的常用方法。
主成分分析(PCA)是一种数据降维技巧,它能将大量相关变量转化为一组很少的不相
关变量,这些无关变量称为主成分。例如,使用PCA可将30个相关(很可能冗余)的环
境变量转化为5个无关的成分变量,并且尽可能地保留原始数据集的信息。
探索性因子分析(EFA)是一系列用来发现一组变量的潜在结构的方法。寻找一组更小
的、潜在的或隐藏的结构来解释已观测到的、显式的变量间的关系。
这两种方法需要大量的样本以支撑结果，但究竟多大样本量能够保证尚未知。
目前,数据分析师常使用经验法则:“因子分析需要5~10倍于变量数的样本数。
</code></pre><h3 id="r-中的主成分和因子分析" tabindex="-1">R 中的主成分和因子分析 <a class="header-anchor" href="#r-中的主成分和因子分析" aria-label="Permalink to &quot;R 中的主成分和因子分析&quot;">​</a></h3><p>R的基础安装包提供了PCA和EFA的函数,分别为princomp()和factanal()。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>psych包中有用的因子分析函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>principal()  含多种可选的方差旋转方法的主成分分析</span></span>
<span class="line"><span>fa()  可用主轴、最小残差、加权最小平方或最大似然法估计的因子分析</span></span>
<span class="line"><span>fa.parallel()  含平行分析的碎石图</span></span>
<span class="line"><span>factor.plot()  绘制因子分析或主成分分析的结果</span></span>
<span class="line"><span>fa.diagram()  绘制因子分析或主成分的载荷矩阵</span></span>
<span class="line"><span>scree()  因子分析和主成分分析的碎石图</span></span></code></pre></div><h4 id="基本流程" tabindex="-1">基本流程 <a class="header-anchor" href="#基本流程" aria-label="Permalink to &quot;基本流程&quot;">​</a></h4><blockquote><p>(1) 数据预处理。PCA和EFA都根据观测变量间的相关性来推导结果。用户可以输入原始数 据矩阵或者相关系数矩阵到principal()和fa()函数中。若输入初始数据,相关系数矩阵将会 被自动计算,在计算前请确保数据中没有缺失值。 (2) 选择因子模型。判断是PCA(数据降维)还是EFA(发现潜在结构)更符合你的研究目 标。如果选择EFA方法,你还需要选择一种估计因子模型的方法(如最大似然估计)。 (3) 判断要选择的主成分/因子数目。 (4) 选择主成分/因子。 (5) 旋转主成分/因子。 (6) 解释结果。 (7) 计算主成分或因子得分。</p></blockquote><h3 id="主成分分析" tabindex="-1">主成分分析 <a class="header-anchor" href="#主成分分析" aria-label="Permalink to &quot;主成分分析&quot;">​</a></h3><h4 id="判断主成分的个数" tabindex="-1">判断主成分的个数 <a class="header-anchor" href="#判断主成分的个数" aria-label="Permalink to &quot;判断主成分的个数&quot;">​</a></h4><p><strong>主要为以下三种法则</strong></p><ul><li>最常见的是基于特征值的方法，特征值大的优先选择，并且一般主成分选择特征值大于1的部分(Kaiser-Harris准则)。</li><li>Cattell碎石检验则绘制了特征值与主成分数的图形。在图形变化最大处之上的主成分都可保留</li><li>依据与初始矩阵相同大小的随机数据矩阵来判断要提取的特征值。若基于真实数据的某个特征值大于一组随机数据矩阵相应的平均特征值,那么该主成分可以保留</li></ul><p>利用fa.parallel()函数,你可以同时对三种特征值判别准则进行评价。y=1以上、虚线(随机矩阵均值)以上、最大折点以上可选择为主成分。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>fa.parallel(USJudgeRatings[,-1], # 导入数据框 </span></span>
<span class="line"><span>    fa=&quot;pc&quot;, #fa : 显示主成分（fa=“pc”）或主轴因子分析（fa=“fa”）或主成分</span></span>
<span class="line"><span>    和主因子（fa=“both”）的特征值 </span></span>
<span class="line"><span>    n.iter=100,</span></span>
<span class="line"><span>    show.legend=FALSE, main=&quot;Scree plot with parallel analysis&quot;)+</span></span>
<span class="line"><span>    abline(h=1) #y=1水平线</span></span></code></pre></div><h4 id="提取主成分" tabindex="-1">提取主成分 <a class="header-anchor" href="#提取主成分" aria-label="Permalink to &quot;提取主成分&quot;">​</a></h4><p>在判断主成分个数后，我们依据个数提取主成分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>principal(r, nfactors=, rotate=, scores=)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r是相关系数矩阵或原始数据矩阵;</span></span>
<span class="line"><span>nfactors设定主成分数(默认为1)</span></span>
<span class="line"><span>rotate指定旋转的方法，&quot;none&quot;,&quot;varimax&quot;正交旋转</span></span>
<span class="line"><span>scores设定是否需要计算主成分得分(默认不需要),scores = &quot;TRUE&quot;</span></span>
<span class="line"><span>            当scores = TRUE时,主成分得分存储在principal()函数返回对象的scores元素中。</span></span></code></pre></div><p>例如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; library(psych)</span></span>
<span class="line"><span>&gt; pc &lt;- principal(USJudgeRatings[,-1], nfactors=1)</span></span>
<span class="line"><span>&gt; pc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Principal Components Analysis</span></span>
<span class="line"><span>Call: principal(r = USJudgeRatings[, -1], nfactors=1)</span></span>
<span class="line"><span>Standardized loadings based upon correlation matrix</span></span>
<span class="line"><span>     PC1   h2    u2  #PC1 代表主成分1和其他因素相关性</span></span>
<span class="line"><span>INTG 0.92 0.84 0.157 #h2主成分对每个变量的方差解释度。</span></span>
<span class="line"><span>DMNR 0.91 0.83 0.166 #u2栏指成分唯一性,即方差无法被主成分解释的比例(1-h)</span></span>
<span class="line"><span>DILG 0.97 0.94 0.061</span></span>
<span class="line"><span>CFMG 0.96 0.93 0.072</span></span>
<span class="line"><span>DECI 0.96 0.92 0.076</span></span>
<span class="line"><span>PREP 0.98 0.97 0.030</span></span>
<span class="line"><span>FAMI 0.98 0.95 0.047</span></span>
<span class="line"><span>ORAL 1.00 0.99 0.009</span></span>
<span class="line"><span>WRIT 0.99 0.98 0.020</span></span>
<span class="line"><span>PHYS 0.89 0.80 0.201</span></span>
<span class="line"><span>RTEN 0.99 0.97 0.028</span></span>
<span class="line"><span>                PC1</span></span>
<span class="line"><span>SS loadings 10.13 </span></span>
<span class="line"><span>Proportion Var 0.92 # 最后,Proportion Var行表示的是每个主成分对整个数据集的解释程度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[......已删除额外输出......]</span></span></code></pre></div><h3 id="探索性因子分析" tabindex="-1">探索性因子分析 <a class="header-anchor" href="#探索性因子分析" aria-label="Permalink to &quot;探索性因子分析&quot;">​</a></h3><h4 id="判断需提取的公共因子数" tabindex="-1">判断需提取的公共因子数 <a class="header-anchor" href="#判断需提取的公共因子数" aria-label="Permalink to &quot;判断需提取的公共因子数&quot;">​</a></h4><p>同样fa.parallel(),此时注意</p><ul><li>fa=&quot;both&quot;,因子图形将会同时展示主成分和公共因子分析结果</li><li>对于EFA,Kaiser-Harris准则的特征值数大于0而不是1</li><li>若此时两种分析方法得到数量不一致选用大的</li></ul><h4 id="提取公共因子" tabindex="-1">提取公共因子 <a class="header-anchor" href="#提取公共因子" aria-label="Permalink to &quot;提取公共因子&quot;">​</a></h4><p>fa(r, nfactors=, n.obs=, rotate=, scores=, fm=)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>r是相关系数矩阵或者原始数据矩阵;</span></span>
<span class="line"><span>nfactors设定提取的因子数(默认为1) ;</span></span>
<span class="line"><span>n.obs是观测数(输入相关系数矩阵时需要填写) ;</span></span>
<span class="line"><span>rotate设定旋转的方法(默认互变异数最小法) ; rotate=&quot;promax&quot;斜交旋转，rotate=&quot;varimax&quot;正交旋转</span></span>
<span class="line"><span>scores设定是否计算因子得分(默认不计算) ;</span></span>
<span class="line"><span>fm设定因子化方法(默认极小残差法) 。 </span></span>
<span class="line"><span>                包括最大似然法( ml)、主轴迭代法(pa)、加权最小二乘</span></span>
<span class="line"><span>                法(wls)、广义加权最小二乘法(gls)和最小残差法(minres)。</span></span></code></pre></div><h4 id="绘制可视化图形" tabindex="-1">绘制可视化图形 <a class="header-anchor" href="#绘制可视化图形" aria-label="Permalink to &quot;绘制可视化图形&quot;">​</a></h4><p>使用 factor.plot()或fa.diagram()函数,你可以绘制正交或者斜交结果的图形。来看 以下代码:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>factor.plot(fa.promax,labels=rownames(fa.promax$loadings))</span></span></code></pre></div><p>通过如下代码可以生成箭线图。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>fa.diagram(fa.promax, simple=FALSE)</span></span></code></pre></div><h2 id="分类问题处理" tabindex="-1">分类问题处理 <a class="header-anchor" href="#分类问题处理" aria-label="Permalink to &quot;分类问题处理&quot;">​</a></h2><h3 id="数据准备" tabindex="-1">数据准备 <a class="header-anchor" href="#数据准备" aria-label="Permalink to &quot;数据准备&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>loc &lt;- &quot;http://archive.ics.uci.edu/ml/machine-learning-databases/&quot;</span></span>
<span class="line"><span>ds &lt;- &quot;breast-cancer-wisconsin/breast-cancer-wisconsin.data&quot;</span></span>
<span class="line"><span>url &lt;- paste(loc, ds, sep=&quot;&quot;)</span></span>
<span class="line"><span>    # 做连接指向数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>breast &lt;- read.table(url, sep=&quot;,&quot;, header=FALSE, na.strings=&quot;?&quot;)</span></span>
<span class="line"><span>names(breast) &lt;- c(&quot;ID&quot;, &quot;clumpThickness&quot;, &quot;sizeUniformity&quot;,</span></span>
<span class="line"><span>    &quot;shapeUniformity&quot;, &quot;maginalAdhesion&quot;,</span></span>
<span class="line"><span>    &quot;singleEpithelialCellSize&quot;, &quot;bareNuclei&quot;,</span></span>
<span class="line"><span>    &quot;blandChromatin&quot;, &quot;normalNucleoli&quot;, &quot;mitosis&quot;, &quot;class&quot;)</span></span>
<span class="line"><span># 为数据重新进行行命名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>df &lt;- breast[-1] #去掉第一行ID</span></span>
<span class="line"><span>df$class &lt;- factor(df$class, levels=c(2,4),</span></span>
<span class="line"><span>    labels=c(&quot;benign&quot;, &quot;malignant&quot;)) #2 = 良性 4 = 恶性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set.seed(1234)</span></span>
<span class="line"><span>train &lt;- sample(nrow(df), 0.7*nrow(df)) #sample从nrow(df)随机取70%</span></span>
<span class="line"><span>df.train &lt;- df[train,]</span></span>
<span class="line"><span>df.validate &lt;- df[-train,] #留出法测试集</span></span>
<span class="line"><span>table(df.train$class) #列联表统计频数</span></span>
<span class="line"><span>table(df.validate$class)</span></span></code></pre></div><h3 id="逻辑回归" tabindex="-1">逻辑回归 <a class="header-anchor" href="#逻辑回归" aria-label="Permalink to &quot;逻辑回归&quot;">​</a></h3><p>R中的基本函数glm()可用于拟合逻辑回归模型(具体见回归)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>fit.logit &lt;- glm(class~., data=df.train, family=binomial())</span></span>
<span class="line"><span>summary(fit.logit)</span></span>
<span class="line"><span>prob &lt;- predict(fit.logit, df.validate, type=&quot;response&quot;) </span></span>
<span class="line"><span> # predict()函数默认输出肿瘤为恶性的对数概率,指定参数type=&quot;response&quot;即</span></span>
<span class="line"><span>    可得到预测肿瘤恶性的概率，大于0.5则划分为恶性</span></span>
<span class="line"><span>logit.pred &lt;- factor(prob &gt; .5, levels=c(FALSE, TRUE),</span></span>
<span class="line"><span>    labels=c(&quot;benign&quot;, &quot;malignant&quot;))</span></span>
<span class="line"><span>logit.perf &lt;- table(df.validate$class, logit.pred,</span></span>
<span class="line"><span>   dnn=c(&quot;Actual&quot;, &quot;Predicted&quot;)) #评估的准确性</span></span>
<span class="line"><span>logit.perf</span></span>
<span class="line"><span>Predicted</span></span>
<span class="line"><span>Actual   benign malignant</span></span>
<span class="line"><span>benign    118      2</span></span>
<span class="line"><span>malignant  4       76</span></span></code></pre></div><h3 id="决策树" tabindex="-1">决策树 <a class="header-anchor" href="#决策树" aria-label="Permalink to &quot;决策树&quot;">​</a></h3><p>R中的rpart包支持rpart()函数构造决策树, prune() 函数对决策树进行剪枝。下面给出 判别细胞为良性或恶性的决策树算法实现。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>&gt; library(rpart)</span></span>
<span class="line"><span>&gt; set.seed(1234)</span></span>
<span class="line"><span>&gt; dtree &lt;- rpart(class ~ ., data=df.train, method=&quot;class&quot;,</span></span>
<span class="line"><span>    parms=list(split=&quot;information&quot;))#生成树，之后可以summary(dtree)查看若过大剪枝</span></span>
<span class="line"><span>#剪枝依据</span></span>
<span class="line"><span>&gt;dtree$cptable</span></span>
<span class="line"><span>    CP    nsplit rel error xerror xstd</span></span>
<span class="line"><span>复杂度参数  分支数      误差  10折误差 交叉验证标准差</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 我们选择最小10折误差加减交叉标准差的范围内的分支数对应的cp值，可以用plotcp(dtree)</span></span>
<span class="line"><span>#这里我们选了0.0125</span></span>
<span class="line"><span>&gt;dtree.pruned &lt;- prune(dtree, cp=.0125)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 绘制决策树</span></span>
<span class="line"><span>library(rpart.plot)</span></span>
<span class="line"><span>prp(dtree.pruned, type = 2, extra = 104,</span></span>
<span class="line"><span>fallen.leaves = TRUE, main=&quot;Decision Tree&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dtree.pred &lt;- predict(dtree.pruned, df.validate, type=&quot;class&quot;)</span></span>
<span class="line"><span>dtree.perf &lt;- table(df.validate$class, dtree.pred,</span></span>
<span class="line"><span>    dnn=c(&quot;Actual&quot;, &quot;Predicted&quot;)) # 测试</span></span></code></pre></div><h4 id="条件推断树" tabindex="-1">条件推断树 <a class="header-anchor" href="#条件推断树" aria-label="Permalink to &quot;条件推断树&quot;">​</a></h4><p>不需要剪枝，更加自动化</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(party)</span></span>
<span class="line"><span>fit.ctree &lt;- ctree(class~., data=df.train)</span></span>
<span class="line"><span>plot(fit.ctree, main=&quot;Conditional Inference Tree&quot;)</span></span>
<span class="line"><span>&gt; ctree.pred &lt;- predict(fit.ctree, df.validate, type=&quot;response&quot;)</span></span>
<span class="line"><span>&gt; ctree.perf &lt;- table(df.validate$class, ctree.pred,</span></span>
<span class="line"><span>    dnn=c(&quot;Actual&quot;, &quot;Predicted&quot;))</span></span>
<span class="line"><span>&gt; ctree.perf</span></span>
<span class="line"><span>        Predicted</span></span>
<span class="line"><span>Actual benign malignant</span></span>
<span class="line"><span>benign  122       7</span></span>
<span class="line"><span>malignant 3       78</span></span></code></pre></div><h3 id="随机森林" tabindex="-1">随机森林 <a class="header-anchor" href="#随机森林" aria-label="Permalink to &quot;随机森林&quot;">​</a></h3><h4 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h4><p>(1) 从训练集中随机有放回地抽取N个样本单元,生成大量决策树。<br> (2) 在每一个节点随机抽取m&lt; M个变量,将其作为分割该节点的候选变量。每一个节点处的变量数应一致。<br> (3) 完整生成所有决策树,无需剪枝(最小节点为1)。<br> (4) 终端节点的所属类别由节点对应的众数类别决定。<br> (5) 对于新的观测点,用所有的树对其进行分类,其类别由多数决定原则生成。<br> randomForest包中的randomForest()函数可用于生成随机森林。函数默认生成500棵树, 并且默认在每个节点处抽取sqrt(M)个变量,最小节点为1。</p><h4 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(randomForest)</span></span>
<span class="line"><span>set.seed(1234)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fit.forest &lt;- randomForest(class~., data=df.train,</span></span>
<span class="line"><span>    na.action=na.roughfix, #将NA替换为对应列中位数</span></span>
<span class="line"><span>    importance=TRUE) #显示重要性</span></span>
<span class="line"><span>importance(fit.forest)type1-MeanDecreaseAccuracy 2-MeanDecreaseGini</span></span>
<span class="line"><span></span></span>
<span class="line"><span>forest.pred &lt;- predict(fit.forest, df.validate)</span></span>
<span class="line"><span>forest.perf &lt;- table(df.validate$class, forest.pred,</span></span>
<span class="line"><span>    dnn=c(&quot;Actual&quot;, &quot;Predicted&quot;))</span></span></code></pre></div><h3 id="支持向量机-svm" tabindex="-1">支持向量机(SVM) <a class="header-anchor" href="#支持向量机-svm" aria-label="Permalink to &quot;支持向量机(SVM)&quot;">​</a></h3><p>硬软间隔概念<br> SVM可以通过R中kernlab包的ksvm()函数和 e1071包中的 svm()函数实现。ksvm()功能更强大,但svm()相对更简单。代码清单17-6给出了通过svm()函数对威斯康星州乳腺癌数据建立SVM模型的一个示例。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>library(e1071)  </span></span>
<span class="line"><span>set.seed(1234)</span></span>
<span class="line"><span>fit.svm &lt;- svm(class~., data=df.train)</span></span>
<span class="line"><span>    # svm默认对变量执行标准化</span></span>
<span class="line"><span>svm.pred &lt;- predict(fit.svm, na.omit(df.validate))</span></span>
<span class="line"><span>svm.perf &lt;- table(na.omit(df.validate)$class,</span></span>
<span class="line"><span>svm.pred, dnn=c(&quot;Actual&quot;, &quot;Predicted&quot;))</span></span></code></pre></div><p>使用svm有两个参数可能影响结果，gamma和cost。gamma控制分割超平面的形状。gamma(&gt;0)越大,通常导致支持向量越多。成本参数cost代表犯错的成本。较大可能过拟合。 svm()函数默认设置gamma为预测变量个数的倒数,成本参数为1。。在建模时,我们可以尝试变动参数值建立不同的模型,但利用格点搜索法可能更有效。可以通过 tune.svm()对每个参数设置一个候选范围,tune.svm()函 数对每一个参数组合生成一个SVM模型,并输出在每一个参数组合上的表现。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>set.seed(1234)</span></span>
<span class="line"><span>tuned &lt;- tune.svm(class~., data=df.train,</span></span>
<span class="line"><span>    gamma=10^(-6:1),cost=10^(-10:10))</span></span>
<span class="line"><span>tuned</span></span>
<span class="line"><span>    best parameters:</span></span>
<span class="line"><span>        amma cost</span></span>
<span class="line"><span>        0.01    1</span></span>
<span class="line"><span>fit.svm &lt;- svm(class~., data=df.train, gamma=.01, cost=1)</span></span>
<span class="line"><span>svm.pred &lt;- predict(fit.svm, na.omit(df.validate))</span></span>
<span class="line"><span>svm.perf &lt;- table(na.omit(df.validate)$class,</span></span>
<span class="line"><span>svm.pred, dnn=c(&quot;Actual&quot;, &quot;Predicted&quot;))</span></span></code></pre></div><h3 id="模型性能评价" tabindex="-1">模型性能评价 <a class="header-anchor" href="#模型性能评价" aria-label="Permalink to &quot;模型性能评价&quot;">​</a></h3><p>指标：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>敏感度  正类的样本单元被成功预测的概率,也叫正例覆盖率(true positive)或召回率(recall)</span></span>
<span class="line"><span>特异性 负类的样本单元被成功预测的概率,也叫负例覆盖率(true negative)</span></span>
<span class="line"><span>正例命中率 被预测为正类的样本单元中,预测正确的样本单元占比,也叫精确度(precision)</span></span>
<span class="line"><span>负例命中率 被预测为负类的样本单元中,预测正确的样本单元占比</span></span>
<span class="line"><span>准确率 被正确分类的样本单元所占比重,也叫ACC</span></span></code></pre></div><p>性能评估函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>performance &lt;- function(table, n=2){</span></span>
<span class="line"><span>if(!all(dim(table) == c(2,2)))</span></span>
<span class="line"><span>    stop(&quot;Must be a 2 x 2 table&quot;)</span></span>
<span class="line"><span>tn = table[1,1]</span></span>
<span class="line"><span>fp = table[1,2]</span></span>
<span class="line"><span>fn = table[2,1]</span></span>
<span class="line"><span>tp = table[2,2]</span></span>
<span class="line"><span>sensitivity = tp/(tp+fn)</span></span>
<span class="line"><span>specificity = tn/(tn+fp)</span></span>
<span class="line"><span>ppp = tp/(tp+fp)</span></span>
<span class="line"><span>npp = tn/(tn+fn)</span></span>
<span class="line"><span>hitrate = (tp+tn)/(tp+tn+fp+fn)</span></span>
<span class="line"><span>result &lt;- paste(&quot;Sensitivity = &quot;, round(sensitivity, n) ,</span></span>
<span class="line"><span>&quot;\\nSpecificity = &quot;, round(specificity, n),</span></span>
<span class="line"><span>&quot;\\nPositive Predictive Value = &quot;, round(ppp, n),</span></span>
<span class="line"><span>&quot;\\nNegative Predictive Value = &quot;, round(npp, n),</span></span>
<span class="line"><span>&quot;\\nAccuracy = &quot;, round(hitrate, n), &quot;\\n&quot;, sep=&quot;&quot;)</span></span>
<span class="line"><span>cat(result)}</span></span></code></pre></div>`,78);function P(R,S,E,L,M,F){return p(),e("div",null,[i,a("p",null,[s("bootstrap包中的crossval()函数可以实现k重交叉验证。 "),a("mjx-container",o,[(p(),e("svg",r,d)),h]),s("的K折交叉验证函数")]),u,a("p",null,[m,s("d为效应值"),a("mjx-container",b,[(p(),e("svg",q,f)),v]),s('。sig.level为显著性水平，默认0.05,power为功效水平(有power可能性检验到目标效应值),type指检验类型:双样本t检验("two.sample") 、单样本t检验( "one.sample")或相依样本t检验("paired")。默认为双样本t检验。"alternative" 指统计检验是双侧检验( "two.sided" )还是单侧检验( "less" 或"greater")。默认为双侧检验。')]),y,x,a("p",null,[s("pwr.anova.test()函数可以对平衡单因素方差分析进行功效分析。格式为:"),T,s(" 效应值衡量"),a("mjx-container",Q,[(p(),e("svg",k,C)),A])]),_])}const H=t(l,[["render",P]]);export{U as __pageData,H as default};