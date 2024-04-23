---
date: 2022-10-10
title: linux入门
tags: 
- Linux
description: 本专题仅为个人人无事做的学习记录
---
## 发行版本
首先为读者介绍当前主流的发行版分支：
### Debian分支
Debian 是一个完全由自由软件构成的类 UNIX 操作系统，第一个版本发布于 1993 年 9 月 15 日，迄今仍在维护，是最早的发行版之一。其以坚持自由软件精神和生态环境优良而出名，拥有庞大的用户群体，甚至自己也成为了一个主流的子框架，称为“Debian GNU/Linux”。    
Debian GNU/Linux 也派生了很多发行版，其中最为著名的便是 Ubuntu（官方译名“友邦拓”）。Ubuntu 由英国的 Canonical 公司主导创立，是一个主打桌面应用的操作系统。其为一般用户提供了一个时新且稳定的由自由软件构成的操作系统，且拥有庞大的社群力量和资源，十分适合普通用户使用。
### Red Hat分支
Red Hat Linux 是美国的 Red Hat 公司发行的一个发行版，第一个版本发布于 1994 年 11 月 3 日，也是一个历史悠久的发行版。它曾经也广为使用，但在 2003 年 Red Hat 公司停止了对它的维护，转而将精力都投身于其企业版 Red Hat Enterprise Linux（简称 RHEL）上，Red Hat Linux 自此完结，而商业市场导向的 RHEL 维护至今。    
在 Red Hat Linux 在停止官方更新后，由社群启动的 Fedora 项目接管了其源代码并构筑了自己的更新，演变成了如今的 Fedora 发行版。Fedora 是一套功能完备且更新迅速的系统，且本身计划也受到了 Red Hat 公司的赞助，成为了公司测试新技术的平台。    
虽然 RHEL 是一个收费的、商业化的系统，但是其遵循 GNU 通用公共许可证，因此会开放源代码。编译这些源代码可以重新得到一个可以使用的操作系统，即一个新的发行版：CentOS（Community Enterprise Operating System，社区版企业操作系统）。因为 CentOS 几乎完全编译自 RHEL 的代码，所以其也像 RHEL 一样具有企业级别的稳定性，适合在要求高度稳定的服务器上运行。

2020 年 12 月，CentOS 社区在其博客中宣布未来的重点转向 CentOS Stream，这是一个全新的滚动发行版。在此之前，RHEL 的上游为 Fedora，而 CentOS 的上游为 RHEL；在推出 CentOS Stream 之后，它就成为了 RHEL 的上游发行版。与此同时，CentOS 8 的支持期限被缩短至 2021 年底，且不再推出新的非 Stream 的 CentOS 版本。不满于该决定的人们也组织了新的社区，推出了诸如 AlmaLinux、Rocky Linux 等发行版。


### Arch Linux分支
Arch Linux 是一个基于 x86-64 架构的 Linux 发行版，不过因为其内核默认就包含了部分非自由的模块，所以其未受到 GNU 计划的官方支持。即便如此，Arch Linux 也因其“简单、现代、实在、人本、万能”的宗旨赢得了 Linux 中坚用户的广泛青睐。不过，Arch Linux 对这个宗旨的定义和其它发行版有所区别。通常的操作系统为了方便用户快速上手，都是尽可能隐藏底层细节，从而避免用户了解操作系统的运行知识即可直接使用。但是 Arch Linux 则是重在构建优雅、极简的代码结构，这方便了使用者去理解系统，但不可避免地要求使用者自身愿意去了解操作系统的运作方式。某种程度上说，它的“简单”和“人本”注重的是方便用户通过了解而去最大化地利用它，而不是采取屏蔽工作原理的方式来降低使用门槛。因此，本书不建议初学者直接上手 Arch Linux，但十分推荐在读者对 Linux 有进一步了解之后去探索它。    
Arch Linux 拥有强大的功能，但因其特殊的理念使得用户不易使用。为了能让一般用户也能用上 Arch Linux 的强大功能，它的变种 Manjaro 发行版于 2011 年问世。Manjaro 发行版基于 Arch Linux，但更注重易用，因而更适合一般用户。 

## VIM入门
### 配置vim为默认编辑器
```bash
vim ~/.bash_profile #使用vim编辑该文件
```
在适当位置插入以下内容
```vim
export EDITOR='vim'
esc + :wq #保存并退出
```
::: warning
如果使用其他`shell`例如`zsh`请使用命令
```zsh
vim ~/.zshrc
```
:::
### 基本介绍
vim具有四个基本模式，分别为    
>1. 正常模式(normal mode)     
>2. 可视模式(Visual mode)      
>3. 插入模式(insert mode)    
>4. 命令模式(command mode)

终端内
```zsh
vim + file-name 
```
进入vim窗口，默认为正常模式。    
在默认模式按下
- v 进入可视模式    
- i 进入插入模式
- : 进入命令模式    
- 在以上三种模式中按下`esc` OR `ctrl+[` 可返回正常模式
### 基本命令
```zsh
vim file1 file2 ... #可同时打开多个文件
vim -On file1 file2 ... #对打开的文件执行左右分屏操作，n为具体文件数目
vim -on file1 file2... #上下分屏
```
### 正常模式
#### 分屏
- 按住ctrl+w后按下s,可上下分屏     
- ctrl+w后按下v可左右分屏    
- :sp file 打开新文件并与正在编辑文件上下分屏     
- :vsp file 打开新文件并左右分屏    
- hjkl分别对应了光标向左下上右移动，同样    
- ctrl+w 后录入 hjkl可以使得当前光标移动到对应位置的分屏，录入HJKL可使得分屏位置发生改变    
- ctrl+w 后按下c即可关闭分屏    
- 直接键入:q也可退出当前分屏    
#### 基操 
- :ls 展示当前打开文件的编号及名称    
- :bn 编辑编号为n的文件    
- ：q 退出文件且不保存
- :qa! 退出所有文件且不保存
- :w 保存修改 搭配:wq 保存且推出
- :w! 强制保存
- :e! 放弃对文件的所有修改恢复文件到上次位置
- :saveas file 另存为
#### 快捷键——翻页、移动光标
##### 在当前行上移动光标
> 0 移动到行头    
> ^ 移动到本行的第一个不是 blank 字符    
> $ 移动到行尾    
> fa 移动到本行下一个为 a 的字符处，fb 移动到下一个为 b 的字符处    
> nfa 移动到本行光标处开始的第 n 个 字符为 a 的地方（n 是 1，2，3，4 ... 数字）    
> Fa 同 fa 一样，光标移动方向同 fa 相反    
> nFa 同 nfa 类似，光标移动方向同 nfa相反    
> ta 移动光标至 a 字符的前一个字符    
> nta 移动到第二个 a 字符的前一个字符处    
> Ta 同 ta 移动光标方向相反    
> nTa 同 nta 移动光标方向相反    
##### 跨行移动光标
> nG 光标定位到第 n 行的行首    
> gg 光标定位到第一行的行首    
> G 光标定位到最后一行的行首    
> H 光标定位到当前屏幕的第一行行首    
> L 光标移动到当前屏幕的尾部    

##### 翻页
> ctrl +f 查看下一页内容    
> ctrl +b 查看上一页内容
#### 删除(d) 复制(y) 粘贴(p)
> d 是删除的意思，通常搭配一个字符 ( 删除范围 ) 实现删除功能，常用的如下：    
> dd 删除一整行    
> d$ 删除光标到本行的结尾    
> dH 删除屏幕显示的第一行文本到光标所在的行    
> dG 删除光标所在行到文本的结束    
> yw 复制一个单词，还有 ynw 复制 n 个单词    
> yy 复制一行，还有 nyy 复制n行   
> y$ 复制光标到本行的结尾    
> yH 复制屏幕显示的第一行文本到光标所在的行    
> yG 复制光标所在行到文本的结束    
> p 在光标后开始黏贴    
> P 大写的 P 光标前开始粘贴    

### 输入模式
	可利用n+G快速定位到第n行
#### 模式进入
- i是在光标所在的字符之前插入需要录入的文本。    
- I 是在光标所在行的行首插入需要录入的文本。    
- a是在光标所在的字符之后插入需要录入的文本。    
- A 是在光标所在行的行尾插入需要录入的文本。    
- s 删除光标所在处的字符然后插入需要录入的文本。    
- S 删除光标所在行，在当前行的行首开始插入需要录入的文本。    
### 命令模式
#### 语法(参考[这篇文章](https://www.zhihu.com/question/437735833/answer/1733228460))
- 动词
	- d 删除 delete 
	- r 替换 replace
	- c 修改 change
	- y 复制 yank
	- v 选取 visual select
- 名词
	- w 单词 word
    - s 句子 sentence
    - p 段落 paragraph
    - t HTML标签 tag
    - 引号或者各种括号所包含的文本称作一个文本块。
- 介词
    - i “在…之内”inside
    - a “环绕…”around
    - t “到…位置前”to
    - f “到…位置上”forward
#### 常用命令
```vim
:set nu #显示行号
:set nonu #取消行号
:n #定位到n行
/string #查找目标字符串
:n1,n2d #删除多行文本
:{作用范围}s/{目标}/{替换}/{替换的标志}  
作用范围空-光标所在行 %-全局 n1,n2-区间
替换的标志 g-全局 空-目标第一次出现 i-不区分大小写 I-大小写敏感 c-替换前需要确认
```
### 宏录制
在此特别拿出一个专栏来提一下宏录制，感觉这是一个比较好用的功能。    
开启需处于正常模式下，输入q后按a创建@a宏录制文件。    
此后所进行的所有命令会被录制下来，录制过程中返回到正常模式后再次按下q可退出录制。    
退出录制模式后采用@a可重复a模块，@@重复上一次宏录制操作。    
例如，如果我想在每行后添加四个空格实现换行操作，可
```vim
qa #正常模式下创建宏录制
A #光标导向至行尾且进入编辑模式
space*4 + esc + q#推出宏录制
```
最后只要无脑`@a`或者`@@`便可。
## 文档与文件管理
::: tip
- pwd 显示当前工作目录    
- ls 显示工作目录中的文件信息    
- cd file_name 切换工作目录        
- mkdir string 创建空白目录        
- cp 用于复制文件或目录    
- mv 剪切文件或者重命名    
- rm 删除文件或目录    
- rmdir 删除空的文件或目录    
- shred 粉碎文件    
- find 查找文件
:::
### ls
```zsh
ls -a #显示所有文件
ls -l #将文件名、权限、文件型态、拥有者、文件大小等列出
ls -lh #同时显示文件大小    
ls -t #按照更新顺序近到远    
```
### [lsd](https://github.com/Peltoche/lsd)(替代ls)
Arch Linux 系统
```zsh
sudo pacman -S lsd #下载lsd
```
### zoxide
代替cd
```zsh
pacman -S zoxide #Arch Linux 安装
apt install zoxide #Ubuntu21.04+ 版本可用该命令安装
```
安装结束后需要将其添加到shell的配置文件中,在neofetch指令中可查看系统shell,进行配置。
```zsh
zoxide init fish | source #fish
eval "$(zoxide init zsh)" #在.zshrc中添加该命令
```
zoxide相比于cd更加方便，在配置成功后只需要z+地址便可前往。且z具有记忆功能，对已查看过的内容可跳转多层目录查看。

### cp
```zsh
cp /* /*
-v #详细显示命令操作过程
-i #若目标文件存在则询问是否覆盖
-f #直接覆盖
-r #递归复制目录和文件
```
### mv
```zsh
mv file_name1 as file_name2 #将文件重命名为name2
mv dir1 dir2 #移动文件
```
### rm
```zsh
rm -rf #递归删除且忽略不存在文件
rm -v #显示详细信息
```
### find
```zsh
find -name ‘’ -delete  #按照名称查找并删除
sudo find .  -ctime -1 #找到一天内，内容变化的文件
sudo find . -atime -1 #找到一天内被访问access过的文件
sudo find . -atime 2 #找到恰为两天
sudo find , -atime +2 #超过两天
-maxdepth -mindepth #设置最大最小目录层级
-size +10 #寻找大于10M大小的文件
！ #取反 
```
### fd
安装命令
```zsh
pacman -S fd #Arch Linux
sudo dpkg -i fd_7.0.0_amd64.deb #Ubuntu
brew install fd #macOS
```
```zsh
USAGE:
    fd [FLAGS/OPTIONS] [<pattern>] [<path>...]

FLAGS:
    -H, --hidden            搜索隐藏的文件和目录
    -I, --no-ignore         不要忽略 .(git | fd)ignore 文件匹配
        --no-ignore-vcs     不要忽略.gitignore文件的匹配
    -s, --case-sensitive    区分大小写的搜索（默认值：智能案例）
    -i, --ignore-case       不区分大小写的搜索（默认值：智能案例）
    -F, --fixed-strings     将模式视为文字字符串
    -a, --absolute-path     显示绝对路径而不是相对路径
    -L, --follow            遵循符号链接
    -p, --full-path         搜索完整路径（默认值：仅限 file-/dirname）
    -0, --print0            用null字符分隔结果
    -h, --help              打印帮助信息
    -V, --version           打印版本信息

OPTIONS:
    -d, --max-depth <depth>        设置最大搜索深度（默认值：无）
    -t, --type <filetype>...       按类型过滤：文件（f），目录（d），符号链接（l），
                                   可执行（x），空（e）
    -e, --extension <ext>...       按文件扩展名过滤
    -x, --exec <cmd>               为每个搜索结果执行命令
    -E, --exclude <pattern>...     排除与给定glob模式匹配的条目
        --ignore-file <path>...    以.gitignore格式添加自定义忽略文件
    -c, --color <when>             何时使用颜色：never，*auto*, always
    -j, --threads <num>            设置用于搜索和执行的线程数
    -S, --size <size>...           根据文件大小限制结果。

ARGS:
    <pattern>    the search pattern, a regular expression (optional)
    <path>...    the root directory for the filesystem search (optional)
```
具体使用
```zsh
fd '^x.*rc$' #搜索x开头并以rc结束的条目
fd -e md #搜索markdown文件，指定拓展名
fd -H #搜索范围包括隐藏文件
```
## 文档编辑命令
::: tip
- cat 用于查看纯文本文件，用于其他类型文件查看将会出现乱码    
- tac 如cat,但反向读取文件    
- more 纯文本且内容较多    
- less 纯文本文件可向后翻页    
- head 用于查看纯文本文件前N行    
- tail 检测新内容或查看后N行        
- tr 替换文本文件中字符    
- wc 统计文本行数、字数、字节数    
- stat 查看文件存储、时间信息    
- cut 按列提取文本字符    
- touch 创建文件或设置文件时间    
- sort 排序文件并输出    
- find 查找文件    
- uniq 去除文件中重复行    
:::
### cat
基本语法
```zsh
cat -参数 file_name
cat --help 显示帮助信息
cat --version 显示版本信息
```
参数
```
-n #显示编号
-s #显示编号且多个空行一个编号
-b #显示行数空行无编号
```
### [bat](https://github.com/sharkdp/bat)
代替cat，优点在于显示具有行号
```zsh
pacman -S bat #Arch Linux 安装
sudo apt install bat #Ubuntu 安装 注意更新apt-install
```
基本命令
```
bat file-name #在终端上打开文件夹
bat src/*.rs #一次显示多个文件
bat -A /etc/hosts #显示和突出显示不可打印字符
bat > file-name #快速创建文件
bat -n file-name #仅显示行数
```
### more
在使用more时，如判断非text文件将不执行命令，返回提示，这点与cat不同。同时，more可以执行分屏显示，命令内用space进行翻页操作，具体参数如下
```
-num #指定每行显示的行数
-s #多个空行压缩成一个空行展示
-f #计算实际行数而非自动换行的行数
-p #先清屏再显示文本文件剩余内容
```
当位于命令内部，可执行如下操作
```
space: 显示下一屏的内容
enter: 下辖n行，默认为1
= : 输出当前的行号
ctrl B: 返回上一屏
V: 调用Vi编译器
B: 显示上一屏内容 
```
### less
less可使用pageup与pagedown实现翻页功能。推出此程序按Q键。
```zsh
less -s #显示连续空行为一行
less -S #在单行显示较长内容，而不换行显示
```
命令内部操作
```
b:向后翻一页
d:向后半页
Q:推出less
u:向前滚动半页
y:向前滚动一行
space:滚动一页
enter:滚动一行
```
### head
```zsh
head -x file-name # 仅查看前x行
```
### tail
```zsh
tail -x file-name # 查看后x行    
```
对于tail，有多数命令并没有完全搞懂，暂时无用，用得到再查吧。当然， --help仍然可以查官方文档。
### tr
```zsh
tr string1 string2
tr -s #删除所有重复出现的字符序列，保留一个
```

### wc
基本命令
```zsh
wc 参数 文件
```
参数
```
-w:统计字数
-word:只显示字数
-c:统计字节数
-l:统计行数
-lines:只显示列数
-m:统计字符数
-L:打印最长行长度

```
### stat
```zsh
stat -t file-name #以简介方式输出
stat -f file-name #显示文件系统的信息
```
### uniq
注意这里是检查每行的唯一性。
```zsh
uniq -c file-name  #打印每行在文本中出现的次数，并放在每行开头位置
uniq -d file-name #只显示有重复的记录，且出现一次
-u #只显示没有重复的记录
```

