import{_ as l,o as a,c as e,k as t,a as Q,R as T}from"./chunks/framework.CP3Xps-Z.js";const f3=JSON.parse('{"title":"GCN","description":"4-th,参考SEMI-surperised classification with graph convolutional networks","frontmatter":{"date":"2023-12-04T00:00:00.000Z","title":"GCN","tags":["GNN","GCN"],"description":"4-th,参考SEMI-surperised classification with graph convolutional networks"},"headers":[],"relativePath":"posts/GNN-GCN.md","filePath":"posts/GNN-GCN.md"}'),s={name:"posts/GNN-GCN.md"},o=t("h1",{id:"gcn",tabindex:"-1"},[Q("GCN "),t("a",{class:"header-anchor",href:"#gcn","aria-label":'Permalink to "GCN"'},"​")],-1),n=t("h2",{id:"从chetnet到gcn",tabindex:"-1"},[Q("从ChetNet到GCN "),t("a",{class:"header-anchor",href:"#从chetnet到gcn","aria-label":'Permalink to "从ChetNet到GCN"'},"​")],-1),d=t("p",null,"在ChebNet的基础上：",-1),m={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.864ex"},xmlns:"http://www.w3.org/2000/svg",width:"32.622ex",height:"6.784ex",role:"img",focusable:"false",viewBox:"0 -1733 14419 2998.7","aria-hidden":"true"},i=T("",1),h=[i],c=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msub",null,[t("mi",null,"g"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"θ")])]),t("mo",null,"∗"),t("mi",null,"X"),t("mo",null,"="),t("munderover",null,[t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"k"),t("mo",null,"="),t("mn",null,"0")]),t("mi",null,"K")]),t("msub",null,[t("mi",null,"θ"),t("mi",null,"k")]),t("msub",null,[t("mi",null,"T"),t("mi",null,"k")]),t("mo",{stretchy:"false"},"("),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"L"),t("mo",null,"~")])]),t("mo",{stretchy:"false"},")"),t("mi",null,"X"),t("mspace",{linebreak:"newline"}),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"L"),t("mo",null,"~")])]),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mn",null,"2"),t("mi",null,"L")]),t("msub",null,[t("mi",null,"λ"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"x")])])])])],-1),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.011ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 889 683","aria-hidden":"true"},u=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D43E",d:"M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",style:{"stroke-width":"3"}})])])],-1),x=[u],H=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"K")])],-1),w={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.821ex",height:"1.927ex",role:"img",focusable:"false",viewBox:"0 -694 3898.9 851.8","aria-hidden":"true"},L=T("",1),k=[L],f=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"λ"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"x")])]),t("mo",null,"≈"),t("mn",null,"2")])],-1),y={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"48.439ex",height:"2.884ex",role:"img",focusable:"false",viewBox:"0 -1024.6 21410.2 1274.6","aria-hidden":"true"},b=T("",1),Z=[b],V=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msub",null,[t("mi",null,"g"),t("mi",null,"θ")]),t("mo",null,"∗"),t("mi",null,"x"),t("mo",null,"≈"),t("msub",null,[t("mi",null,"θ"),t("mn",null,"0")]),t("mi",null,"x"),t("mo",null,"+"),t("msub",null,[t("mi",null,"θ"),t("mn",null,"1")]),t("mo",{stretchy:"false"},"("),t("mi",null,"L"),t("mo",null,"−"),t("mi",null,"I"),t("mo",{stretchy:"false"},")"),t("mi",null,"x"),t("mo",null,"="),t("msub",null,[t("mi",null,"θ"),t("mn",null,"0")]),t("mi",null,"x"),t("mo",null,"+"),t("msub",null,[t("mi",null,"θ"),t("mn",null,"1")]),t("msup",null,[t("mi",null,"D"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])]),t("mi",null,"A"),t("msup",null,[t("mi",null,"D"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])]),t("mi",null,"x")])],-1),v={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.375ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.953ex",height:"1.97ex",role:"img",focusable:"false",viewBox:"0 -705 5725.2 870.6","aria-hidden":"true"},C=T("",1),j=[C],A=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ"),t("mo",null,"="),t("msub",null,[t("mi",null,"θ"),t("mn",null,"0")]),t("mo",null,"="),t("mo",null,"−"),t("msub",null,[t("mi",null,"θ"),t("mn",null,"1")])])],-1),B={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},R={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"27.334ex",height:"2.884ex",role:"img",focusable:"false",viewBox:"0 -1024.6 12081.6 1274.6","aria-hidden":"true"},S=T("",1),N=[S],G=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msub",null,[t("mi",null,"g"),t("mi",null,"θ")]),t("mo",null,"∗"),t("mi",null,"x"),t("mo",null,"="),t("mi",null,"θ"),t("mo",{stretchy:"false"},"("),t("mi",null,"I"),t("mo",null,"+"),t("msup",null,[t("mi",null,"D"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])]),t("mi",null,"A"),t("msup",null,[t("mi",null,"D"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])]),t("mo",{stretchy:"false"},")"),t("mi",null,"x")])],-1),E={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.317ex",height:"2.552ex",role:"img",focusable:"false",viewBox:"0 -1046 4560 1128","aria-hidden":"true"},P=T("",1),I=[P],X=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"A"),t("mo",null,"~")])]),t("mo",null,"="),t("mi",null,"A"),t("mo",null,"+"),t("mi",null,"I")])],-1),z={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},J={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.67ex",height:"2.477ex",role:"img",focusable:"false",viewBox:"0 -1013 4716 1095","aria-hidden":"true"},q=T("",1),F=[q],K=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"D"),t("mo",null,"~")])]),t("mo",null,"="),t("mi",null,"D"),t("mo",null,"+"),t("mi",null,"I")])],-1),$={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.371ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -683 1048 705","aria-hidden":"true"},U=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D44A",d:"M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z",style:{"stroke-width":"3"}})])])],-1),Y=[U],t2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"W")])],-1),Q2={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},a2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"20.172ex",height:"2.552ex",role:"img",focusable:"false",viewBox:"0 -1046 8916.1 1128","aria-hidden":"true"},e2=T("",1),T2=[e2],l2=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"H"),t("mo",null,"="),t("msup",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"D"),t("mo",null,"~")])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"A"),t("mo",null,"~")])]),t("msup",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"D"),t("mo",null,"~")])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])]),t("mi",null,"X"),t("mi",null,"W")])],-1),s2=t("h2",{id:"优势",tabindex:"-1"},[Q("优势 "),t("a",{class:"header-anchor",href:"#优势","aria-label":'Permalink to "优势"'},"​")],-1),o2=t("li",null,"再次降低了参数数量，缓解了具有较宽点度分布的图过拟合问题。",-1),n2=t("a",{href:"https://proceedings.mlr.press/v97/wu19e.html",target:"_blank",rel:"noreferrer"},"Wu et al.,2019",-1),d2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.011ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 889 683","aria-hidden":"true"},r2=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D43E",d:"M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",style:{"stroke-width":"3"}})])])],-1),i2=[r2],h2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"K")])],-1),c2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.507ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 2434 727","aria-hidden":"true"},g2=T("",1),u2=[g2],x2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"G"),t("mi",null,"C"),t("mi",null,"N")])],-1),H2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},w2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.76ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 778 727","aria-hidden":"true"},_2=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"398",d:"M56 340Q56 423 86 494T164 610T270 680T388 705Q521 705 621 601T722 341Q722 260 693 191T617 75T510 4T388 -22T267 3T160 74T85 189T56 340ZM610 339Q610 428 590 495T535 598T463 651T384 668Q332 668 289 638T221 566Q168 485 168 339Q168 274 176 235Q189 158 228 105T324 28Q356 16 388 16Q415 16 442 24T501 54T555 111T594 205T610 339ZM223 263V422H263V388H514V422H554V263H514V297H263V263H223Z",style:{"stroke-width":"3"}})])])],-1),L2=[_2],k2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",{mathvariant:"normal"},"Θ")])],-1),f2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.011ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 889 683","aria-hidden":"true"},M2=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D43E",d:"M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",style:{"stroke-width":"3"}})])])],-1),b2=[M2],Z2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"K")])],-1),V2=t("li",null,"有利于最小化每层的操作。",-1),v2=t("h2",{id:"仍然存在的问题",tabindex:"-1"},[Q("仍然存在的问题 "),t("a",{class:"header-anchor",href:"#仍然存在的问题","aria-label":'Permalink to "仍然存在的问题"'},"​")],-1),D2=t("li",null,"事实上，GCN通常情况下是shallow的，一般仅叠加2～3层。显然这并不利于模型有效的聚合高阶邻居的特性。这是由于，当GCN层数过高时，会发生过平滑(over smoothing)现象。过平滑指的是随着layer增加，GCN学到的表示将会收敛到一个确切的值，这将使得所有点习得的最终特征无法区分。",-1),C2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.571ex",height:"1.756ex",role:"img",focusable:"false",viewBox:"0 -694 2020.4 776","aria-hidden":"true"},A2=T("",1),B2=[A2],R2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"l"),t("mo",null,"+"),t("mn",null,"1")])],-1),S2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.947ex",height:"2.552ex",role:"img",focusable:"false",viewBox:"0 -1046 8816.4 1128","aria-hidden":"true"},G2=T("",1),E2=[G2],O2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"H"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{stretchy:"false"},"("),t("mi",null,"l"),t("mo",null,"+"),t("mn",null,"1"),t("mo",{stretchy:"false"},")")])]),t("mo",null,"="),t("msup",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"D"),t("mo",null,"~")])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"A"),t("mo",null,"~")])]),t("msup",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"D"),t("mo",null,"~")])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mfrac",null,[t("mn",null,"1"),t("mn",null,"2")])])])])],-1),P2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"4.038ex",height:"2.021ex",role:"img",focusable:"false",viewBox:"0 -893.3 1784.7 893.3","aria-hidden":"true"},X2=T("",1),z2=[X2],J2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"H"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{stretchy:"false"},"("),t("mi",null,"l"),t("mo",{stretchy:"false"},")")])])])],-1),q2=T("",7),F2=t("thead",null,[t("tr",null,[t("th",null,"Method"),t("th",null,"Citeseer"),t("th",null,"Cora"),t("th",null,"Pumbed")])],-1),K2=t("tr",null,[t("td",null,"GCN(paper)"),t("td",null,"70.3"),t("td",null,"81.5"),t("td",null,"79.0")],-1),$2=t("td",null,"GCN(rand.splits paper)",-1),W2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},U2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.76ex",height:"1.507ex",role:"img",focusable:"false",viewBox:"0 -666 778 666","aria-hidden":"true"},Y2=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mo"},[t("path",{"data-c":"B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z",style:{"stroke-width":"3"}})])])],-1),t3=[Y2],Q3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",null,"±")])],-1),a3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.76ex",height:"1.507ex",role:"img",focusable:"false",viewBox:"0 -666 778 666","aria-hidden":"true"},T3=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mo"},[t("path",{"data-c":"B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z",style:{"stroke-width":"3"}})])])],-1),l3=[T3],s3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",null,"±")])],-1),o3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},n3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.76ex",height:"1.507ex",role:"img",focusable:"false",viewBox:"0 -666 778 666","aria-hidden":"true"},d3=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mo"},[t("path",{"data-c":"B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z",style:{"stroke-width":"3"}})])])],-1),m3=[d3],r3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",null,"±")])],-1),i3=t("tr",null,[t("td",null,"GCN"),t("td",null,"70.9(2.40)"),t("td",null,"81.6(1.91)"),t("td",null,"79.1(6.31)")],-1),h3=t("tr",null,[t("td",null,"GCN(rand.splits)"),t("td",null,"69.6(2.45)"),t("td",null,"78.5(1.90)"),t("td",null,"78.0(6.66)")],-1),c3=t("tr",null,[t("td",null,"GCN*"),t("td",null,"70.8(2.15)"),t("td",null,"81.5(1.90)"),t("td",null,"79.1(3.53)")],-1),p3=t("tr",null,[t("td",null,"GCN*(rand.splits)"),t("td",null,"70.4(2.11)"),t("td",null,"78.6(1.90)"),t("td",null,"81.7(3.43)")],-1);function g3(u3,x3,H3,w3,_3,L3){return a(),e("div",null,[o,n,d,t("mjx-container",m,[(a(),e("svg",r,h)),c]),t("p",null,[Q("令"),t("mjx-container",p,[(a(),e("svg",g,x)),H]),Q(" = 2同时取"),t("mjx-container",w,[(a(),e("svg",_,k)),f]),Q("，得到")]),t("mjx-container",y,[(a(),e("svg",M,Z)),V]),t("p",null,[Q("令"),t("mjx-container",v,[(a(),e("svg",D,j)),A]),Q("，得到")]),t("mjx-container",B,[(a(),e("svg",R,N)),G]),t("p",null,[Q("此时数值稳定性差，采用重整化技巧，记"),t("mjx-container",E,[(a(),e("svg",O,I)),X]),Q("，"),t("mjx-container",z,[(a(),e("svg",J,F)),K]),Q("，同时加入线性变化矩阵"),t("mjx-container",$,[(a(),e("svg",W,Y)),t2]),Q("增强模型表达能力，得到GCN最终模型")]),t("mjx-container",Q2,[(a(),e("svg",a2,T2)),l2]),s2,t("ul",null,[o2,t("li",null,[Q("允许建立更深层的模型，事实上"),n2,Q("证明了叠加"),t("mjx-container",d2,[(a(),e("svg",m2,i2)),h2]),Q("层的"),t("mjx-container",c2,[(a(),e("svg",p2,u2)),x2]),Q("近似于一个固定系数"),t("mjx-container",H2,[(a(),e("svg",w2,L2)),k2]),Q("的"),t("mjx-container",f2,[(a(),e("svg",y2,b2)),Z2]),Q("阶滤波器。")]),V2]),v2,t("ul",null,[D2,t("li",null,[Q("论文本身给到了一种使用残差连接(residual connection)将"),t("mjx-container",C2,[(a(),e("svg",j2,B2)),R2]),Q("层的输出"),t("mjx-container",S2,[(a(),e("svg",N2,E2)),O2]),Q("与上一层状态"),t("mjx-container",P2,[(a(),e("svg",I2,z2)),J2]),Q("连接起来，遗憾的是可以证明这种方法只能减缓其收敛速度，并不能从根本上解决过平滑的事情。")])]),q2,t("table",null,[F2,t("tbody",null,[K2,t("tr",null,[$2,t("td",null,[Q("67.9 "),t("mjx-container",W2,[(a(),e("svg",U2,t3)),Q3]),Q(" 0.5")]),t("td",null,[Q("80.1 "),t("mjx-container",a3,[(a(),e("svg",e3,l3)),s3]),Q(" 0.5")]),t("td",null,[Q("78.9 "),t("mjx-container",o3,[(a(),e("svg",n3,m3)),r3]),Q(" 0.7")])]),i3,h3,c3,p3])])])}const y3=l(s,[["render",g3]]);export{f3 as __pageData,y3 as default};