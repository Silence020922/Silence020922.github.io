import{_ as a,o,c as s,k as t,a as e,R as l}from"./chunks/framework.CP3Xps-Z.js";const y1=JSON.parse('{"title":"FlashAttention","description":"加速transormer模型训练速度，以便应用到较长上下文中。","frontmatter":{"date":"2024-02-21T00:00:00.000Z","title":"FlashAttention","tags":["Transformer","FlashAttention"],"description":"加速transormer模型训练速度，以便应用到较长上下文中。"},"headers":[],"relativePath":"posts/FlashAttn.md","filePath":"posts/FlashAttn.md"}'),n={name:"posts/FlashAttn.md"},i=t("p",null,[e("参考"),t("a",{href:"https://arxiv.org/abs/2205.14135",target:"_blank",rel:"noreferrer"},[t("em",null,"FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness")]),e("，事实上本文仅关心训练速度，并未在"),t("code",null,"Attention"),e("计算上进行操作。")],-1),r=t("h2",{id:"面临问题",tabindex:"-1"},[e("面临问题 "),t("a",{class:"header-anchor",href:"#面临问题","aria-label":'Permalink to "面临问题"'},"​")],-1),T=t("code",null,"Transformer",-1),d=t("code",null,"self-attention",-1),Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"3.119ex",height:"1.887ex",role:"img",focusable:"false",viewBox:"0 -833.9 1378.8 833.9","aria-hidden":"true"},c=l("",1),m=[c],p=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"N"),t("mn",null,"2")])])],-1),_=t("code",null,"FlashAttn",-1),u=t("code",null,"Transformer",-1),x=l("",9),g=t("li",null,[e("没有完全 input 的情况下如何执行"),t("code",null,"softmax"),e("操作")],-1),w={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.459ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 645 727","aria-hidden":"true"},b=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D446",d:"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",style:{"stroke-width":"3"}})])])],-1),k=[b],M=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"S")])],-1),v={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.699ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 751 683","aria-hidden":"true"},H=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D443",d:"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",style:{"stroke-width":"3"}})])])],-1),y=[H],L=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"P")])],-1),A={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.606ex",height:"2.452ex",role:"img",focusable:"false",viewBox:"0 -833.9 2919.8 1083.9","aria-hidden":"true"},P=l("",1),C=[P],Z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("msup",null,[t("mi",null,"N"),t("mn",null,"2")]),t("mo",{stretchy:"false"},")")])],-1),j=l("",6),B=t("strong",null,"Fig2",-1),D=t("code",null,"Attn",-1),I=t("code",null,"FlashAttn",-1),R={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.816ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.795ex",height:"2.773ex",role:"img",focusable:"false",viewBox:"0 -864.9 793.6 1225.5","aria-hidden":"true"},N=l("",1),F=[N],E=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mfrac",null,[t("mn",null,"1"),t("mn",null,"9")])])],-1),G=t("strong",null,"E.5",-1),z=t("code",null,"FlashAttention",-1),J={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.028ex",height:"1.717ex",role:"img",focusable:"false",viewBox:"0 -677 2222.4 759","aria-hidden":"true"},U=l("",1),$=[U],W=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"2"),t("mo",null,"−"),t("mn",null,"4")])],-1),X=t("li",null,[t("strong",null,"4.1 BERT"),e(": 达到一定精度所需要的训练时间更短。比创下Nvida记录的MLPerf 1.1 加速了15%。")],-1),Y=t("strong",null,"GPT-2",-1),K={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},t1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.309ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 4556.4 748","aria-hidden":"true"},e1=l("",1),o1=[e1],s1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"2.0"),t("mo",null,"−"),t("mn",null,"3.5"),t("mo",null,"×")])],-1),l1=t("h3",{id:"longer-sequences",tabindex:"-1"},[e("Longer Sequences "),t("a",{class:"header-anchor",href:"#longer-sequences","aria-label":'Permalink to "Longer Sequences"'},"​")],-1),a1=t("strong",null,"4.2 LM with Long Context",-1),n1=t("strong",null,"Table 5",-1),i1=t("code",null,"FlashAttn",-1),r1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},d1=l("",1),Q1=[d1],h1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"4"),t("mi",null,"k")])],-1),c1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.31ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1021 705","aria-hidden":"true"},p1=l("",1),_1=[p1],u1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"1"),t("mi",null,"k")])],-1),x1=t("code",null,"Megatron-LM",-1),g1=t("li",null,[e("第一个解决"),t("code",null,"Path-X"),e("的"),t("code",null,"Transformer"),e("。")],-1);function w1(f1,b1,k1,M1,v1,V1){return o(),s("div",null,[i,r,t("p",null,[T,e(" 框架由于核心组件"),d,e("对耗时及内存占用上都是序列长度"),t("mjx-container",Q,[(o(),s("svg",h,m)),p]),e("复杂度，很难将其应用到较长的上下文中，"),_,e("使得"),u,e("能够建模长序列，这带来以下几个好处：")]),x,t("ul",null,[g,t("li",null,[e("是否存在更小的向后传递的中间值替代传统方法传回的"),t("mjx-container",w,[(o(),s("svg",f,k)),M]),e(", "),t("mjx-container",v,[(o(),s("svg",V,y)),L]),e("("),t("mjx-container",A,[(o(),s("svg",S,C)),Z]),e(")用于后续梯度的计算。")])]),j,t("ul",null,[t("li",null,[B,e(": 对比传统的"),D,e("，尽管"),I,e("在增加计算(如后向传播中的重新计算)，但HBM的读写仅为传统方法的"),t("mjx-container",R,[(o(),s("svg",q,F)),E]),e("，速度上提升了6倍。")]),t("li",null,[G,e(": 在不同的GPU下，不同的组件(是否含有Mask,Dropout)，不同序列长度的所有情况下，"),z,e("较基准情况加速"),t("mjx-container",J,[(o(),s("svg",O,$)),W]),e("倍。")]),X,t("li",null,[Y,e(": 在GPT-2 small 和 GPT-2 midium 数据集上与Huggingface 和 Megatron-LM 对比，保持同等精度且速度较Huggingface为"),t("mjx-container",K,[(o(),s("svg",t1,o1)),s1]),e("。")])]),l1,t("ul",null,[t("li",null,[a1,e(": 通常增长上下文的长度后训练速度会变慢但可以得到一个更好的模型("),n1,e(" 展示了在更长的上下文训练的模型具备更高的分类精度)。列表展示了"),i1,e("在"),t("mjx-container",r1,[(o(),s("svg",T1,Q1)),h1]),e("文本长度的情况下具备比"),t("mjx-container",c1,[(o(),s("svg",m1,_1)),u1]),e("文本长度下"),x1,e("更快的训练速度，更长的序列代表模型更高的质量。")]),g1])])}const L1=a(n,[["render",w1]]);export{y1 as __pageData,L1 as default};
