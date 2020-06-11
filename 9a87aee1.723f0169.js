(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{251:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),c=(r(0),r(369)),i={title:"agg"},o={id:"pipeline/workflow/workspace/data-processing-basic/agg",title:"agg",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-basic/agg.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/agg",sidebar:"pipeline",previous:{title:"cluster",permalink:"/docs/pipeline/workflow/workspace/data-sampling/cluster"},next:{title:"appendString",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/append-string"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"definition"},"Definition"),Object(c.b)("p",null,"\uc9d1\uacc4\ud568\uc218\ub97c \uc218\ud589\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(c.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\uc5d0\uc11c ","[agg]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(c.b)("h3",{id:"set"},"Set"),Object(c.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(c.b)("h4",{id:"property"},"Property"),Object(c.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic001_agg_property.png",alt:"prebasic001"}))),Object(c.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825  "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"aggcol : \uadf8\ub8f9\ud551 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd. \ub300\uc0c1 \uceec\ub7fc\uc774 \uc5ec\ub7ec \uac1c\uc77c \uacbd\uc6b0 \uc624\ub978\ucabd ","[+]","\ubc84\ud2bc \uc120\ud0dd ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"target : \uc9d1\uacc4\uae30\uc900 \uceec\ub7fc \ubc0f \uc9d1\uacc4\ud568\uc218 \uc120\ud0dd "),Object(c.b)("table",{parentName:"li"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\uc9d1\uacc4\ud568\uc218 \uc885\ub958"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"max")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"min")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"avg")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"count")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sum")))))),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"\uc0c1\ud488\uc815\ubcf4 \ub370\uc774\ud130\ub97c \ub300\uc0c1\uc73c\ub85c ","[agg]"," \ub178\ub4dc\uc758 max, count \ud568\uc218\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4.  "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[dropna]",", ","[agg]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(c.b)("br",{parentName:"li"}),Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic002_agg_exampleworkflow.png",alt:"prebasic002"}))," "),Object(c.b)("li",{parentName:"ol"},"\uc9d1\uacc4\ub300\uc0c1 \uceec\ub7fc\uc740 category, group \uc120\ud0dd\ud558\uace0, agg\ub300\uc0c1 \uceec\ub7fc\uc740 price(max), goods_id(count)\uc120\ud0dd\n",Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic003_agg_exampleworkflow_property%EC%84%A4%EC%A0%95.png",alt:"prebasic003"}))," "),Object(c.b)("li",{parentName:"ol"},"[agg]"," \ub178\ub4dc\uc758 snapshot \ubc84\ud2bc\uc120\ud0dd\ud558\uc5ec \uacb0\uacfc\ud655\uc778\n",Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic004_agg_exampleworkflow_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"prebasic004"}))," ")))}b.isMDXComponent=!0},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,u=s["".concat(i,".").concat(m)]||s[m]||g[m]||c;return r?a.a.createElement(u,o({ref:t},l,{components:r})):a.a.createElement(u,o({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);