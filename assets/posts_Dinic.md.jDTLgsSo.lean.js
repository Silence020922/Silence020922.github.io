import{_ as s,o as T,c as e,k as t,a as Q,R as a}from"./chunks/framework.CP3Xps-Z.js";const T4=JSON.parse(`{"title":"Dinic's Algorithm","description":"Dinic算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结","frontmatter":{"date":"2024-01-12T00:00:00.000Z","title":"Dinic's Algorithm","tags":["Dinic's Alogorithm","Combinatorial"],"description":"Dinic算法的理论及其证明，算法代码，实例的迭代过程、正确性证明、时间复杂度及其数据结构等方面总结"},"headers":[],"relativePath":"posts/Dinic.md","filePath":"posts/Dinic.md"}`),l={name:"posts/Dinic.md"},o=t("h2",{id:"概述",tabindex:"-1"},[Q("概述 "),t("a",{class:"header-anchor",href:"#概述","aria-label":'Permalink to "概述"'},"​")],-1),n=t("p",null,"解决最大流问题的算法，游戏打多了头疼，改天再仔细看。",-1),d=t("h2",{id:"符号定义",tabindex:"-1"},[Q("符号定义 "),t("a",{class:"header-anchor",href:"#符号定义","aria-label":'Permalink to "符号定义"'},"​")],-1),r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.667ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.432ex",height:"1.667ex",role:"img",focusable:"false",viewBox:"0 -442 1074.9 737","aria-hidden":"true"},m=a("",1),h=[m],p=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"μ"),t("mi",null,"f")])])],-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.667ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.929ex",height:"3.312ex",role:"img",focusable:"false",viewBox:"0 -1169 14996.6 1464","aria-hidden":"true"},x=a("",1),w=[x],u=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"μ"),t("mi",null,"f")]),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"μ"),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")"),t("mo",null,"−"),t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("msub",null,[t("mi",null,"μ"),t("mi",null,"f")]),t("mo",{stretchy:"false"},"("),t("mover",null,[t("mrow",{"data-mjx-texclass":"OP"},[t("mi",null,"e")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{stretchy:"false"},"←")])]),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")")])],-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.244ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -705 550 910","aria-hidden":"true"},f=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",style:{"stroke-width":"3"}})])])],-1),L=[f],y=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f")])],-1),k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.388ex",height:"2.67ex",role:"img",focusable:"false",viewBox:"0 -1169 1055.6 1180","aria-hidden":"true"},b=a("",1),v=[b],Z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mover",null,[t("mrow",{"data-mjx-texclass":"OP"},[t("mi",null,"e")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{stretchy:"false"},"←")])])])],-1),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.667ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.846ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -705 1257.9 1000","aria-hidden":"true"},C=a("",1),j=[C],S=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"G"),t("mi",null,"f")])])],-1),A={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.667ex"},xmlns:"http://www.w3.org/2000/svg",width:"36.331ex",height:"3.907ex",role:"img",focusable:"false",viewBox:"0 -1432 16058.1 1727","aria-hidden":"true"},G=a("",1),I=[G],R=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"G"),t("mi",null,"f")]),t("mo",null,"="),t("mo",{stretchy:"false"},"("),t("mi",null,"V"),t("mo",{stretchy:"false"},"("),t("mi",null,"G"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("mo",{fence:"false",stretchy:"false"},"{"),t("mi",null,"e"),t("mo",null,"∈"),t("mi",null,"E"),t("mo",{stretchy:"false"},"("),t("mover",null,[t("mrow",{"data-mjx-texclass":"OP"},[t("mi",null,"G")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{stretchy:"false"},"↔")])]),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("msub",null,[t("mi",null,"μ"),t("mi",null,"f")]),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")"),t("mo",null,">"),t("mn",null,"0"),t("mo",{fence:"false",stretchy:"false"},"}"),t("mo",{stretchy:"false"},")")])],-1),B={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.042ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.056ex",height:"2.956ex",role:"img",focusable:"false",viewBox:"0 -846 1350.5 1306.4","aria-hidden":"true"},J=a("",1),z=[J],N=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msubsup",null,[t("mi",null,"G"),t("mi",null,"f"),t("mi",null,"L")])])],-1),O={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.042ex"},xmlns:"http://www.w3.org/2000/svg",width:"56.009ex",height:"2.956ex",role:"img",focusable:"false",viewBox:"0 -846 24755.8 1306.4","aria-hidden":"true"},F=a("",1),$=[F],q=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msubsup",null,[t("mi",null,"G"),t("mi",null,"f"),t("mi",null,"L")]),t("mo",null,"="),t("mo",{stretchy:"false"},"("),t("mi",null,"V"),t("mo",{stretchy:"false"},"("),t("mi",null,"G"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("mo",{fence:"false",stretchy:"false"},"{"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",null,","),t("mi",null,"y"),t("mo",{stretchy:"false"},")"),t("mo",null,"∈"),t("mi",null,"E"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"G"),t("mi",null,"f")]),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("msub",null,[t("mi",null,"d"),t("mrow",{"data-mjx-texclass":"ORD"},[t("msub",null,[t("mi",null,"G"),t("mi",null,"f")])])]),t("mo",{stretchy:"false"},"("),t("mi",null,"s"),t("mo",null,","),t("mi",null,"y"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("msub",null,[t("mi",null,"d"),t("mrow",{"data-mjx-texclass":"ORD"},[t("msub",null,[t("mi",null,"G"),t("mi",null,"f")])])]),t("mo",{stretchy:"false"},"("),t("mi",null,"s"),t("mo",null,","),t("mi",null,"x"),t("mo",{stretchy:"false"},")"),t("mo",null,"+"),t("mn",null,"1"),t("mo",{fence:"false",stretchy:"false"},"}"),t("mo",{stretchy:"false"},")"),t("mo",null,",")])],-1),K={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},U={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.644ex",height:"1.602ex",role:"img",focusable:"false",viewBox:"0 -626 2052.4 708","aria-hidden":"true"},W=a("",1),Y=[W],t1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"s"),t("mo",null,"−"),t("mi",null,"t")])],-1),Q1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.244ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -705 550 910","aria-hidden":"true"},e1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",style:{"stroke-width":"3"}})])])],-1),a1=[e1],s1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f")])],-1),l1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"31.655ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 13991.4 1000","aria-hidden":"true"},n1=a("",1),d1=[n1],r1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",{stretchy:"false"},"("),t("mi",null,"V"),t("mo",{stretchy:"false"},"("),t("mi",null,"G"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("mo",{fence:"false",stretchy:"false"},"{"),t("mi",null,"e"),t("mo",null,"∈"),t("mi",null,"E"),t("mo",{stretchy:"false"},"("),t("mi",null,"G"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")"),t("mo",null,"<"),t("mi",null,"μ"),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")"),t("mo",{fence:"false",stretchy:"false"},"}"),t("mo",{stretchy:"false"},")")])],-1),i1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.644ex",height:"1.602ex",role:"img",focusable:"false",viewBox:"0 -626 2052.4 708","aria-hidden":"true"},h1=a("",1),p1=[h1],c1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"s"),t("mo",null,"−"),t("mi",null,"t")])],-1),g1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.244ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -705 550 910","aria-hidden":"true"},w1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",style:{"stroke-width":"3"}})])])],-1),u1=[w1],_1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f")])],-1),H1=t("h2",{id:"算法伪代码与代码",tabindex:"-1"},[Q("算法伪代码与代码 "),t("a",{class:"header-anchor",href:"#算法伪代码与代码","aria-label":'Permalink to "算法伪代码与代码"'},"​")],-1),f1=t("h3",{id:"伪代码",tabindex:"-1"},[Q("伪代码 "),t("a",{class:"header-anchor",href:"#伪代码","aria-label":'Permalink to "伪代码"'},"​")],-1),L1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.207ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3627.6 1000","aria-hidden":"true"},k1=a("",1),M1=[k1],b1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"e"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mn",null,"0")])],-1),v1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.087ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4016.6 1000","aria-hidden":"true"},V1=a("",1),D1=[V1],C1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"e"),t("mo",null,"∈"),t("mi",null,"E"),t("mo",{stretchy:"false"},"("),t("mi",null,"G"),t("mo",{stretchy:"false"},")")])],-1),j1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.042ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.056ex",height:"2.956ex",role:"img",focusable:"false",viewBox:"0 -846 1350.5 1306.4","aria-hidden":"true"},A1=a("",1),P1=[A1],G1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msubsup",null,[t("mi",null,"G"),t("mi",null,"f"),t("mi",null,"L")])])],-1),I1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},R1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.667ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.846ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -705 1257.9 1000","aria-hidden":"true"},B1=a("",1),E1=[B1],J1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"G"),t("mi",null,"f")])])],-1),z1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.992ex",height:"2.181ex",role:"img",focusable:"false",viewBox:"0 -759 880.5 964","aria-hidden":"true"},O1=a("",1),X1=[O1],F1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"f"),t("mo",{"data-mjx-alternate":"1"},"′")])])],-1),$1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.042ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.254ex",height:"2.956ex",role:"img",focusable:"false",viewBox:"0 -846 3648.1 1306.4","aria-hidden":"true"},K1=a("",1),U1=[K1],W1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",{stretchy:"false"},"("),t("msubsup",null,[t("mi",null,"G"),t("mi",null,"f"),t("mi",null,"L")]),t("mo",null,","),t("msub",null,[t("mi",null,"μ"),t("mi",null,"f")]),t("mo",{stretchy:"false"},")")])],-1),Y1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},t2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.14ex",height:"2.181ex",role:"img",focusable:"false",viewBox:"0 -759 2714 964","aria-hidden":"true"},Q2=a("",1),T2=[Q2],e2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"f"),t("mo",{"data-mjx-alternate":"1"},"′")]),t("mo",null,"="),t("mn",null,"0")])],-1),a2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},s2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.244ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -705 550 910","aria-hidden":"true"},l2=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",style:{"stroke-width":"3"}})])])],-1),o2=[l2],n2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f")])],-1),d2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.992ex",height:"2.181ex",role:"img",focusable:"false",viewBox:"0 -759 880.5 964","aria-hidden":"true"},i2=a("",1),m2=[i2],h2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"f"),t("mo",{"data-mjx-alternate":"1"},"′")])])],-1),p2=t("h3",{id:"代码",tabindex:"-1"},[Q("代码 "),t("a",{class:"header-anchor",href:"#代码","aria-label":'Permalink to "代码"'},"​")],-1),c2=t("h2",{id:"算法正确性证明",tabindex:"-1"},[Q("算法正确性证明 "),t("a",{class:"header-anchor",href:"#算法正确性证明","aria-label":'Permalink to "算法正确性证明"'},"​")],-1),g2=t("strong",null,"该算法在有限时间内能够找到最大流。",-1),x2=t("br",null,null,-1),w2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.244ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -705 550 910","aria-hidden":"true"},_2=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",style:{"stroke-width":"3"}})])])],-1),H2=[_2],f2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f")])],-1),L2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.992ex",height:"2.181ex",role:"img",focusable:"false",viewBox:"0 -759 880.5 964","aria-hidden":"true"},k2=a("",1),M2=[k2],b2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"f"),t("mo",{"data-mjx-alternate":"1"},"′")])])],-1),v2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.992ex",height:"2.181ex",role:"img",focusable:"false",viewBox:"0 -759 880.5 964","aria-hidden":"true"},V2=a("",1),D2=[V2],C2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"f"),t("mo",{"data-mjx-alternate":"1"},"′")])])],-1),j2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.042ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.056ex",height:"2.956ex",role:"img",focusable:"false",viewBox:"0 -846 1350.5 1306.4","aria-hidden":"true"},A2=a("",1),P2=[A2],G2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msubsup",null,[t("mi",null,"G"),t("mi",null,"f"),t("mi",null,"L")])])],-1),I2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},R2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.811ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.021ex",height:"2.508ex",role:"img",focusable:"false",viewBox:"0 -750 3545.1 1108.6","aria-hidden":"true"},B2=a("",1),E2=[B2],J2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"d"),t("mrow",{"data-mjx-texclass":"ORD"},[t("msub",null,[t("mi",null,"G"),t("mi",null,"f")])])]),t("mo",{stretchy:"false"},"("),t("mi",null,"s"),t("mo",null,","),t("mi",null,"t"),t("mo",{stretchy:"false"},")")])],-1),z2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.254ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 2322.4 748","aria-hidden":"true"},O2=a("",1),X2=[O2],F2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"n"),t("mo",null,"−"),t("mn",null,"1")])],-1);function $2(q2,K2,U2,W2,Y2,t4){return T(),e("div",null,[o,n,d,t("ul",null,[t("li",null,[Q("剩余容量"),t("mjx-container",r,[(T(),e("svg",i,h)),p]),Q(":"),t("mjx-container",c,[(T(),e("svg",g,w)),u]),Q("。其中"),t("mjx-container",_,[(T(),e("svg",H,L)),y]),Q("表示流，"),t("mjx-container",k,[(T(),e("svg",M,v)),Z]),Q("代表反向弧。")]),t("li",null,[Q("残余图"),t("mjx-container",V,[(T(),e("svg",D,j)),S]),Q(":"),t("mjx-container",A,[(T(),e("svg",P,I)),R]),Q("。")]),t("li",null,[Q("分层图"),t("mjx-container",B,[(T(),e("svg",E,z)),N]),Q(":"),t("mjx-container",O,[(T(),e("svg",X,$)),q])]),t("li",null,[Q("阻塞流：一个"),t("mjx-container",K,[(T(),e("svg",U,Y)),t1]),Q("流"),t("mjx-container",Q1,[(T(),e("svg",T1,a1)),s1]),Q("如果"),t("mjx-container",l1,[(T(),e("svg",o1,d1)),r1]),Q("中没有"),t("mjx-container",i1,[(T(),e("svg",m1,p1)),c1]),Q("路，那么"),t("mjx-container",g1,[(T(),e("svg",x1,u1)),_1]),Q("为阻塞流。注意，阻塞流未必是最大流。")])]),H1,f1,t("ol",null,[t("li",null,[Q("Set "),t("mjx-container",L1,[(T(),e("svg",y1,M1)),b1]),Q(" for all "),t("mjx-container",v1,[(T(),e("svg",Z1,D1)),C1])]),t("li",null,[Q("Construct "),t("mjx-container",j1,[(T(),e("svg",S1,P1)),G1]),Q(" of "),t("mjx-container",I1,[(T(),e("svg",R1,E1)),J1])]),t("li",null,[Q("Find a block flow "),t("mjx-container",z1,[(T(),e("svg",N1,X1)),F1]),Q(" in "),t("mjx-container",$1,[(T(),e("svg",q1,U1)),W1]),Q(", if "),t("mjx-container",Y1,[(T(),e("svg",t2,T2)),e2]),Q(" then stop")]),t("li",null,[Q("Replace "),t("mjx-container",a2,[(T(),e("svg",s2,o2)),n2]),Q(" with "),t("mjx-container",d2,[(T(),e("svg",r2,m2)),h2]),Q(" and go to 2.")])]),p2,c2,t("p",null,[g2,x2,Q(" 首先，说明每一次迭代，最短可扩路长度严格增加。令"),t("mjx-container",w2,[(T(),e("svg",u2,H2)),f2]),Q("为某一次循环开始前的流，"),t("mjx-container",L2,[(T(),e("svg",y2,M2)),b2]),Q("为执行过step 4后当前的流。对于"),t("mjx-container",v2,[(T(),e("svg",Z2,D2)),C2]),Q("对应的增广路，他一定包含"),t("mjx-container",j2,[(T(),e("svg",S2,P2)),G2]),Q("之外的边，所以，他将包含比"),t("mjx-container",I2,[(T(),e("svg",R2,E2)),J2]),Q("更多的边，于是，最短可扩路随迭代次数严格增加。那么，之多"),t("mjx-container",z2,[(T(),e("svg",N2,X2)),F2]),Q("次循环后，该算法停止，此时已没有可扩路，这说明找到了最大流。")])])}const e4=s(l,[["render",$2]]);export{T4 as __pageData,e4 as default};