import{_ as n,o as a,c as i,k as s,a as e,R as t}from"./chunks/framework.CP3Xps-Z.js";const x=JSON.parse('{"title":"Ascend C 问题求助","description":"无","frontmatter":{"date":"2024-04-16T00:00:00.000Z","title":"Ascend C 问题求助","tags":["Ascend C"],"description":"无"},"headers":[],"relativePath":"posts/AscendC.md","filePath":"posts/AscendC.md"}'),T={name:"posts/AscendC.md"},l=t(`<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>在对AscendC算子示例AddCustom进行接口泛化时，我的思路为在核函数中获取<code>input_y</code>的长度后，对于<code>yGm</code>指向超出长度的部分进行约束,重新设计偏移量</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">uint32_t</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;"> y_length </span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">=</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;"> sizeof</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">(</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">y</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">)</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">/sizeof</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">(</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">DTYPE_Y</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">)</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">;</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">        uint32_t</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;"> offset </span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">=</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;"> this</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">-&gt;</span><span style="--shiki-light:#D8DEE9;--shiki-dark:#D8DEE9;">blockLength</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;"> *</span><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;"> GetBlockIdx</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">()</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">;</span></span>
<span class="line"><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">        uint32_t</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;"> actualoffset </span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">=</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;"> offset</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">%</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">y_length</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">;</span></span>
<span class="line"><span style="--shiki-light:#D8DEE9;--shiki-dark:#D8DEE9;">        yGm</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">.</span><span style="--shiki-light:#88C0D0;--shiki-dark:#88C0D0;">SetGlobalBuffer</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">((</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">__gm__ DTYPE_Y</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">*</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">)</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;">y </span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">+</span><span style="--shiki-light:#D8DEE9FF;--shiki-dark:#D8DEE9FF;"> actualoffset</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">,</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;"> this</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">-&gt;</span><span style="--shiki-light:#D8DEE9;--shiki-dark:#D8DEE9;">blockLength</span><span style="--shiki-light:#ECEFF4;--shiki-dark:#ECEFF4;">)</span><span style="--shiki-light:#81A1C1;--shiki-dark:#81A1C1;">;</span></span></code></pre></div><p>在样例AddCustom中添加上述代码后，对如下输入大小的数据类型能够测试通过。</p>`,4),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.925ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3944.7 1000","aria-hidden":"true"},p=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="7B" d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(500,0)"><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1000,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1444.7,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="stroke-width:3;"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(1000,0)" style="stroke-width:3;"></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(1500,0)" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3444.7,0)"><path data-c="7D" d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z" style="stroke-width:3;"></path></g></g></g>',1),o=[p],d=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",{fence:"false",stretchy:"false"},"{"),s("mn",null,"8"),s("mo",null,","),s("mn",null,"2048"),s("mo",{fence:"false",stretchy:"false"},"}")])],-1),r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.925ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3944.7 1000","aria-hidden":"true"},c=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="7B" d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(500,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1000,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1444.7,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="stroke-width:3;"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(1000,0)" style="stroke-width:3;"></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(1500,0)" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3444.7,0)"><path data-c="7D" d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z" style="stroke-width:3;"></path></g></g></g>',1),m=[c],g=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",{fence:"false",stretchy:"false"},"{"),s("mn",null,"1"),s("mo",null,","),s("mn",null,"2048"),s("mo",{fence:"false",stretchy:"false"},"}")])],-1),E=t(`<p>但在改动后样例AddCustom(rw)中添加上述代码后，对<code>input_x</code>, <code>input_y</code>大小不一致的输入测试失败。</p><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><h3 id="对应算子代码获取" tabindex="-1">对应算子代码获取： <a class="header-anchor" href="#对应算子代码获取" aria-label="Permalink to &quot;对应算子代码获取：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord nord vp-code"><code><span class="line"><span>链接: https://pan.baidu.com/s/1GMPGL3ynMTS-yWEot9iaGg?pwd=4taj 提取码: 4taj 复制这段内容后打开百度网盘手机App，操作更方便哦 </span></span>
<span class="line"><span>--来自百度网盘超级会员v3的分享</span></span></code></pre></div><h3 id="acl" tabindex="-1">Acl <a class="header-anchor" href="#acl" aria-label="Permalink to &quot;Acl&quot;">​</a></h3><p>如果使用Acl单算子调试，需更改<code>scripts/gen_data.py</code>(Dtype,shape), <code>src/main.cpp</code>,(Dtype,shape), <code>scripts/verify_result.py</code>(Dtype)为对应设置。</p>`,6);function _(y,C,F,u,D,f){return a(),i("div",null,[l,s("ul",null,[s("li",null,[e("input_x: "),s("mjx-container",h,[(a(),i("svg",Q,o)),d])]),s("li",null,[e("input_y: "),s("mjx-container",r,[(a(),i("svg",k,m)),g])])]),E])}const w=n(T,[["render",_]]);export{x as __pageData,w as default};
