import{_ as s,o as a,c as n,R as p}from"./chunks/framework.Y4B4HMlg.js";const C=JSON.parse('{"title":"Ascend C开发流程","description":"组合优化课程笔记","frontmatter":{"date":"2024-04-04T00:00:00.000Z","title":"Ascend C开发流程","tags":["Ascend C"],"description":"组合优化课程笔记"},"headers":[],"relativePath":"posts/Ascend.md","filePath":"posts/Ascend.md"}'),e={name:"posts/Ascend.md"},i=p(`<h2 id="算子开发流程" tabindex="-1">算子开发流程 <a class="header-anchor" href="#算子开发流程" aria-label="Permalink to &quot;算子开发流程&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">cd</span><span style="--shiki-light:#EBCB8B;--shiki-dark:#EBCB8B;"> \\D</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;">ocuments</span></span>
<span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">vim</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> AddCustom.json</span></span></code></pre></div><p>向<code>AddCustom.json</code>中添加如下内容，具体参考<a href="https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC1alpha003/devguide/opdevg/tbeaicpudevg/atlasopdev_10_0024.html" target="_blank" rel="noreferrer">官方文档</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;op&quot;: &quot;AddCustom&quot;,</span></span>
<span class="line"><span>        &quot;language&quot;: &quot;cpp&quot;,</span></span>
<span class="line"><span>        &quot;input_desc&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;x&quot;,</span></span>
<span class="line"><span>                &quot;param_type&quot;: &quot;required&quot;,</span></span>
<span class="line"><span>                &quot;format&quot;: [</span></span>
<span class="line"><span>                    &quot;ND&quot;</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                &quot;type&quot;: [</span></span>
<span class="line"><span>                    &quot;float16&quot;</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;y&quot;,</span></span>
<span class="line"><span>                &quot;param_type&quot;: &quot;required&quot;,</span></span>
<span class="line"><span>                &quot;format&quot;: [</span></span>
<span class="line"><span>                    &quot;ND&quot;</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                &quot;type&quot;: [</span></span>
<span class="line"><span>                    &quot;float16&quot;</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;output_desc&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;z&quot;,</span></span>
<span class="line"><span>                &quot;param_type&quot;: &quot;required&quot;,</span></span>
<span class="line"><span>                &quot;format&quot;: [</span></span>
<span class="line"><span>                    &quot;ND&quot;</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                &quot;type&quot;: [</span></span>
<span class="line"><span>                    &quot;float16&quot;</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>使用<code>msopgen</code>工具创建Ascend C算子工程，参数详见<a href="https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC1alpha003/devguide/opdevg/tbeaicpudevg/atlasopdev_10_0024.html#ZH-CN_TOPIC_0000001818390484__table20825174505717" target="_blank" rel="noreferrer">官方文档</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">/usr/local/Ascend/ascend-toolkit/latest/python/site-packages/bin/msopgen</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> gen</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> -i</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> AddCustom.json</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> -f</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> tf</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> -c</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ai_core-ascend310b</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> -lan</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> cpp</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> -out</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ~/AddCustom</span></span></code></pre></div><p>修改Host和Kernel侧的代码，这里作为样例，直接copy实例代码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">cp</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ~/samples/operator/AddCustomSample/FrameworkLaunch/AddCustom/op_host/</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">*</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ~/AddCustom/op_host/</span></span>
<span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">cp</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ~/samples/operator/AddCustomSample/FrameworkLaunch/AddCustom/op_kernel/</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">*</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ~/AddCustom/op_kernel/</span></span></code></pre></div><p>修改算子工程中配置文件CMakePresets.json，将CMakePresets.json中ASCEND_CANN_PACKAGE_PATH的value值修改为实际CANN包安装目录/usr/local/Ascend/ascend-toolkit/latest</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">cd</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ~/AddCustom</span></span>
<span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">vim</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> CMakePresets.json</span></span></code></pre></div><p>在AddCustom目录下执行如下命令编译自定义AddCustom算子，生成算子安装包。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">./build.sh</span></span></code></pre></div><p>部署自定义算子包</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">./build_out/custom_opp_ubuntu_aarch64.run</span></span></code></pre></div><p>通过应用程序样例调用算子的ACLNN接口进行测试</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">cd</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> ~/samples/operator/AddCustomSample/FrameworkLaunch/AclNNInvocation</span></span>
<span class="line"><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">bash</span><span style="--shiki-light:#A3BE8C;--shiki-dark:#A3BE8C;"> run.sh</span></span></code></pre></div><h2 id="json-文件配置参数说明" tabindex="-1">json 文件配置参数说明 <a class="header-anchor" href="#json-文件配置参数说明" aria-label="Permalink to &quot;json 文件配置参数说明&quot;">​</a></h2><p>详见<a href="https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC1alpha003/devguide/opdevg/tbeaicpudevg/atlasopdev_10_0024.html" target="_blank" rel="noreferrer">官方文档</a></p><h2 id="ai-core-架构说明" tabindex="-1">AI core 架构说明 <a class="header-anchor" href="#ai-core-架构说明" aria-label="Permalink to &quot;AI core 架构说明&quot;">​</a></h2><p>详见<a href="https://www.hiascend.com/document/detail/zh/canncommercial/700/operatordev/tbeaicpudevg/atlasopdev_10_0008.html" target="_blank" rel="noreferrer">官方文档</a></p>`,20),t=[i];function l(o,d,h,c,r,u){return a(),n("div",null,t)}const m=s(e,[["render",l]]);export{C as __pageData,m as default};
