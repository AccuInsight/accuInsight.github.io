(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(375));const i={title:"fs"},a={id:"pipeline/workflow/workspace/job-processing/fs",isDocsHomePage:!1,title:"fs",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/fs.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/fs",sidebar:"pipeline",previous:{title:"subWorkflow",permalink:"/docs/pipeline/workflow/workspace/job-processing/sub-workflow"},next:{title:"distcp",permalink:"/docs/pipeline/workflow/workspace/job-processing/distcp"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:p};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"HDFS\uc0c1\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. delete, mkdir, move, touchz, chmod,chgrp \ub4f1 hadoop fs syntax\ub85c \uc218\ud589\ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[fs]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/fs01_property.png",alt:"fs01"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"retry ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"max : \uc7ac\uc218\ud589 \ud69f \uc218"),Object(o.b)("li",{parentName:"ul"},"period : \uc7ac\uc218\ud589 \uac04\uaca9"))),Object(o.b)("li",{parentName:"ol"},"delete",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"hdfs : \uc0ad\uc81c\ud560 hdfs \uacbd\ub85c \uc124\uc815"),Object(o.b)("li",{parentName:"ul"},"skipTrash: \uc644\uc804 \uc0ad\uc81c(hadoop\uc5d0 \uc124\uc815\ub41c \ud734\uc9c0\ud1b5\uc744 \uac70\uce58\uc9c0 \uc54a\uc74c)"))),Object(o.b)("li",{parentName:"ol"},"mkdir : \uc0dd\uc131\ud560 hdfs directory \uacbd\ub85c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"move : source path, target \uacbd\ub85c \uc124\uc815\uc73c\ub85c \ud30c\uc77c \uc774\ub3d9"),Object(o.b)("li",{parentName:"ol"},"touchz : \ud30c\uc77c\ud06c\uae30\uac00 0\uc778 \ud30c\uc77c\uc744 \uc0dd\uc131\ud560 hdfs directory \uacbd\ub85c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"chmod",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"path: \uad8c\ud55c \uc124\uc815 \uacbd\ub85c"),Object(o.b)("li",{parentName:"ul"},"permissions: \uad8c\ud55c\uc720\ud615"),Object(o.b)("li",{parentName:"ul"},"recursive: \uc7ac\uadc0\uc5ec\ubd80"))),Object(o.b)("li",{parentName:"ol"},"chgrp",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"path: \uadf8\ub8f9 \uc124\uc815 \uacbd\ub85c"),Object(o.b)("li",{parentName:"ul"},"recursive: \uc7ac\uadc0\uc5ec\ubd80"),Object(o.b)("li",{parentName:"ul"},"group: \uadf8\ub8f9\uba85"))),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[2.delete]"," property \uc124\uc815 \ud6c4 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \uc2dc \uc120\ud0dd\ud55c \ud3f4\ub354 \uc0ad\uc81c",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/fs02_delete.png",alt:"fs02"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/fs03_delete_result.png",alt:"fs03"})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[3.mkdir]"," property \uc124\uc815 \ud6c4 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \uc2dc \uc120\ud0dd\ud55c \ud3f4\ub354 \uc0dd\uc131\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/fs04_mkdir.png",alt:"fs04"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/fs05_mkdir_result.png",alt:"fs05"}))))))}l.isMDXComponent=!0},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,f=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return r?o.a.createElement(f,p(p({ref:t},l),{},{components:r})):o.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);