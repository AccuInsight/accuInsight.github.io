(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),c=(r(0),r(219)),o={title:"dropDuplicates"},p={id:"batchpipeline/workflow/workspace/data-processing-basic/drop-duplicates",title:"dropDuplicates",description:"## dropDuplicates\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\data-processing-basic\\drop-duplicates.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/drop-duplicates",sidebar:"batchpipeline",previous:{title:"distinct",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/distinct"},next:{title:"dropna",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/drop-na"}},i=[{value:"dropDuplicates",id:"dropduplicates",children:[]}],l={rightToc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"dropduplicates"},"dropDuplicates"),Object(c.b)("p",null,"\uceec\ub7fc \uc120\ud0dd \ud6c4 \uc911\ubcf5\uac12\uc774 \uc788\uc73c\uba74 \uc81c\uac70\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[dropDuplicates]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. "),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic014_dropduplicates_workflow.png",alt:"prebasic014"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"subset : \uc911\ubcf5\uac12 \ud655\uc778\uc744 \uc704\ud55c \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. \ud655\uc778\ud574\uc57c \ud560 \uceec\ub7fc\uc774 \uc5ec\ub7ec \uac1c\uc77c \uacbd\uc6b0 \uc88c\uce21 ","[+]","\ubc84\ud2bc\uc744 \uc120\ud0dd\ud55c\ub2e4. ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"col : \uc911\ubcf5\uac12 \ud655\uc778 \ub300\uc0c1 \uceec\ub7fc")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"category \uceec\ub7fc\uc5d0 \uc911\ubcf5 \uac12\uc774 \uc788\ub294 \ud589\uc744 \ucc3e\uc544 \uc81c\uac70\ud55c\ub2e4.   ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic015_dropduplicates_property01.png",alt:"prebasic015"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"category, group\uc5d0 \uc911\ubcf5 \uac12\uc774 \uc788\ub294 \ud589\uc744 \ucc3e\uc544 \uc81c\uac70\ud55c\ub2e4.   ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic016_dropduplicates_property02.png",alt:"prebasic016"}))))}s.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(f,p({ref:t},l,{components:r})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);