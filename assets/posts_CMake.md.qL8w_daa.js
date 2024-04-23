import{_ as s,o as a,c as i,R as e}from"./chunks/framework.CP3Xps-Z.js";const D=JSON.parse('{"title":"CMake","description":"CMake，缝缝补补也能用，最好还是了解了解","frontmatter":{"date":"2024-01-13T00:00:00.000Z","title":"CMake","tags":["CMake"],"description":"CMake，缝缝补补也能用，最好还是了解了解"},"headers":[],"relativePath":"posts/CMake.md","filePath":"posts/CMake.md"}'),n={name:"posts/CMake.md"},l=e(`<h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>CMake 是一个项目构建工具，并且是跨平台的。关于项目构建我们所熟知的还有Makefile（通过 make 命令进行项目的构建），大多是IDE软件都集成了make，比如：VS 的 nmake、linux 下的 GNU make、Qt 的 qmake等，如果自己动手写 makefile，会发现，makefile 通常依赖于当前的编译平台，而且编写 makefile 的工作量比较大，解决依赖关系时也容易出错。</p><p>而 CMake 恰好能解决上述问题， 其允许开发者指定整个工程的编译流程，在根据编译平台，自动生成本地化的Makefile和工程文件，最后用户只需make编译即可。</p><p>来自<a href="https://www.bilibili.com/video/BV14s4y1g7Zj?p=6&amp;vd_source=c1d5ab3603a518abe809c9db9faf7d2d" target="_blank" rel="noreferrer">Bilibili-爱编程的大丙 </a></p><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><div class="language-CMake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CMake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># 行注释</span></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;">#[[ 块注释</span></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;">块注释</span></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;">块注释]]</span></span></code></pre></div><h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><p><code>cmake</code>命令依赖文件<code>CMakeLists.txt</code>(区分大小写)</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">cmake_minimum_required</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(VERSION 3.0) </span><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># 指定cmake的最低版本</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">project</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(CALC) </span><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># 定义工程名称</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">add_executable</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(app add.c div.c main.c mult.c sub.c) </span><span style="--shiki-light:#616E88;--shiki-dark:#616E88;">#  打包生成可执行程序</span></span></code></pre></div><ul><li><code>cmake_minimum_required</code>: <ul><li>可选，不加会有警告</li></ul></li><li><code>project</code>:定义工程名称，并可指定工程的版本、工程描述、web主页地址、支持的语言（默认情况支持所有语言），如果不需要这些都是可以忽略的，只需要指定出工程名字即可。</li></ul><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">project</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(&lt;PROJECT-</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">NAME</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">&gt; [&lt;language-</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">name</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">&gt;...])</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">project</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(&lt;PROJECT-</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">NAME</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">       [VERSION &lt;major&gt;[.&lt;minor&gt;[.&lt;patch&gt;[.&lt;tweak&gt;]]]]</span></span>
<span class="line"><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">       [DESCRIPTION &lt;project-description-</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">string</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">&gt;]</span></span>
<span class="line"><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">       [HOMEPAGE_URL &lt;url-</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">string</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">&gt;]</span></span>
<span class="line"><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">       [LANGUAGES &lt;language-</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">name</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">&gt;...])</span></span></code></pre></div><ul><li><code>add_executable</code>：定义工程会生成一个可执行程序</li></ul><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">add_executable</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(可执行程序名 源文件名称)</span></span></code></pre></div><p>在完成<code>CMakeLists.txt</code>的基本内容书写，就可以使用<code>cmake</code>工具编译实现了。</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">cmake</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> CMakeLists.txt_文件路径</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;"> </span></span>
<span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">make</span></span></code></pre></div><h2 id="set命令" tabindex="-1">SET命令 <a class="header-anchor" href="#set命令" aria-label="Permalink to &quot;SET命令&quot;">​</a></h2><h3 id="定义变量" tabindex="-1">定义变量 <a class="header-anchor" href="#定义变量" aria-label="Permalink to &quot;定义变量&quot;">​</a></h3><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># SET 指令的语法是：</span></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># [] 中的参数为可选项, 如不需要可以不写</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">SET</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(VAR [VALUE] [</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">CACHE</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;"> TYPE DOCSTRING [FORCE]])</span></span></code></pre></div><ul><li>VAR：变量名</li><li>VALUE：变量值</li></ul><p><strong>例如</strong></p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># 方式1: 各个源文件之间使用空格间隔</span></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># set(SRC_LIST add.c  div.c   main.c  mult.c  sub.c)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># 方式2: 各个源文件之间使用分号 ; 间隔</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">set</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(SRC_LIST add.c;div.c;main.c;mult.c;sub.c)</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">add_executable</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(app  </span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">\${SRC_LIST}</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">)</span></span></code></pre></div><h3 id="配合宏" tabindex="-1">配合宏 <a class="header-anchor" href="#配合宏" aria-label="Permalink to &quot;配合宏&quot;">​</a></h3><ul><li>CMAKE_CXX_STANDARD：指定C++编译版本</li></ul><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;">#增加-std=c++11</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">set</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(CMAKE_CXX_STANDARD 11)</span></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;">#增加-std=c++14</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">set</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(CMAKE_CXX_STANDARD 14)</span></span>
<span class="line"><span style="--shiki-light:#616E88;--shiki-dark:#616E88;">#增加-std=c++17</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">set</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(CMAKE_CXX_STANDARD 17)</span></span></code></pre></div><ul><li>EXECUTABLE_OUTPUT_PATH：指定可执行程序的输出路径</li></ul><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">set</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(HOME /home/robin/Linux/Sort)</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">set</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(EXECUTABLE_OUTPUT_PATH </span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">\${HOME}</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">/bin) </span><span style="--shiki-light:#616E88;--shiki-dark:#616E88;"># 如果这个路径中的子目录不存在，会自动生成，无需自己手动创建</span></span></code></pre></div><h2 id="file命令" tabindex="-1">file命令 <a class="header-anchor" href="#file命令" aria-label="Permalink to &quot;file命令&quot;">​</a></h2><p>如果一个项目里边的源文件很多，在编写CMakeLists.txt文件的时候不可能将项目目录的各个文件一一罗列出来，这样太麻烦了。所以，在CMake中为我们提供了搜索文件的命令，他就是file（当然，除了搜索以外通过 file 还可以做其他事情）。</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">file</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(GLOB/GLOB_RECURSE 变量名 要搜索的文件路径和文件类型)</span></span></code></pre></div><ul><li>GLOB: 将指定目录下搜索到的满足条件的所有文件名生成一个列表，并将其存储到变量中。</li><li>GLOB_RECURSE：递归搜索指定目录，将搜索到的满足条件的文件名生成一个列表，并将其存储到变量中</li></ul><p>例如，搜索当前目录的src目录下所有的cpp文件，并存储到变量中</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">file</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">(GLOB MAIN_SRC </span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">\${CMAKE_CURRENT_SOURCE_DIR}</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">/*.cpp)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CMAKE_CURRENT_SOURCE_DIR 宏表示当前访问的 CMakeLists.txt 文件所在的路径。关于要搜索的文件路径和类型可加双引号，也可不加:</p></div>`,33),t=[l];function p(h,k,d,c,r,E){return a(),i("div",null,t)}const C=s(n,[["render",p]]);export{D as __pageData,C as default};
