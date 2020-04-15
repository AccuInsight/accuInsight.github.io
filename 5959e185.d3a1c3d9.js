(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{138:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return l}));var n=t(1),o=(t(0),t(219));const i={title:"sqoop"},c={id:"batchpipeline/workflow/workspace/job-processing/sqoop",title:"sqoop",description:"### Definition\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\sqoop.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/sqoop",sidebar:"batchpipeline",previous:{title:"spark",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/spark"},next:{title:"ssh",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ssh"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],p={rightToc:a};function l({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"sqoop \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud55c\ub2e4. sql \ucffc\ub9ac\ub098 rdbms\uc5d0\uc11c hdfs\ub85c \ub370\uc774\ud130 \uc774\ub3d9\uc2dc \uc0ac\uc6a9\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[sqoop]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow022_sqoop_property.png",alt:"flow022"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"prepare : delete: \uc2e4\ud589 \uc804 \uc0ad\uc81c\ud560 hdfs path \uc124\uc815 : mkdir: \uc2e4\ud589 \uc804 \uc0dd\uc131\ud560 hdfs directory path \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"file : \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub77c\uc774\ube0c\ub7ec\ub9ac \uacbd\ub85c\ub97c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"archive : archive\uacbd\ub85c\ub97c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"retry : max - \uc7ac\uc218\ud589 \ud69f \uc218, period - \uc7ac\uc218\ud589 \uac04\uaca9"),Object(o.b)("li",{parentName:"ol"},"configuration : \uc2e4\ud589\uc5d0 \uc0ac\uc6a9\ud560 \uc18d\uc131 (key, value) \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"jobXml : jobxml\uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")))}l.isMDXComponent=!0},219:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a({},r,{},e)),t},b=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),f=n,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||i;return t?o.a.createElement(d,a({ref:r},l,{components:t})):o.a.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);