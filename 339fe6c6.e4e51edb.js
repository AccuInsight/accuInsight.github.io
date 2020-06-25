(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(6),a=(r(0),r(365)),c={title:"pivot"},i={id:"batchpipeline/workflow/workspace/data-processing-basic/pivot",title:"pivot",description:"## pivot\r",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-basic/pivot.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/pivot",sidebar:"batchpipeline",previous:{title:"limit",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/limit"},next:{title:"replace",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/replace"}},p=[{value:"pivot",id:"pivot",children:[]}],l={rightToc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"pivot"},"pivot"),Object(a.b)("p",null,"\uc5f4\uc744 \ud53c\ubc97\ud558\uc5ec \uc9c0\uc815\ub41c \uc9d1\uacc4\ud568\uc218\ub97c \uc218\ud589\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[pivot]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic032_pivot_workflow.png",alt:"prebasic032"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"groupBy : \uadf8\ub8f9\ud551 \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"pivot_col : \ud53c\ubc97\ud560 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"value : value \uac12\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"func : \uc9d1\uacc4\uc5d0 \uc0ac\uc6a9\ud560 \ud568\uc218(max, min, avg, count, sum)\ub97c \uc120\ud0dd\ud55c\ub2e4."),Object(a.b)("li",{parentName:"ol"},"target_col : \uc9d1\uacc4 \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"overwriteSchema : \ub0b4\uc6a9\uc785\ub825 \ud544\uc694 "),Object(a.b)("li",{parentName:"ol"},"newSchema : \ub0b4\uc6a9\uc785\ub825 \ud544\uc694")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic033_pivot_property.png",alt:"prebasic033"}))))}b.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return r?o.a.createElement(m,i({ref:t},l,{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);