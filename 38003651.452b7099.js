(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(1),o=r(6),a=(r(0),r(331)),i={title:"timeMove"},c={id:"pipeline/workflow/workspace/data-processing-advanced/time-move",title:"timeMove",description:"## timeMove",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/time-move.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/time-move",sidebar:"pipeline",previous:{title:"SQL",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/sql"},next:{title:"missingImputer",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/missingImputer"}},p=[{value:"timeMove",id:"timemove",children:[]}],l={rightToc:p};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"timemove"},"timeMove"),Object(a.b)("p",null,"timestamp \uceec\ub7fc\uc758 \uc2dc\uac04\uc744 \uc124\uc815\ub41c \uac12\ub9cc\ud07c \uc774\ub3d9\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[timeMove]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-advanced/preadv024_timemove_workflow.png",alt:"preadv024"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"targetColumn\t: \ubaa9\ub85d \uc911 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd(\uc120\ud0dd \uceec\ub7fc\uc740 timestamp data type\uc774\uc5b4\uc57c \ud568)"),Object(a.b)("li",{parentName:"ol"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85"),Object(a.b)("li",{parentName:"ol"},"time\t: \uc774\ub3d9\ud560 \uc2dc\uac04(ex. 3600(1\uc2dc\uac04 \ud6c4), -3600(1\uc2dc\uac04 \uc804)")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-advanced/preadv025_timemove_property.png",alt:"preadv025"}))))}m.isMDXComponent=!0},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return r?o.a.createElement(f,c({ref:t},l,{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);