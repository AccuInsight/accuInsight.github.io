(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{228:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(6),i=(r(0),r(331)),a={title:"correlation"},c={id:"batchpipeline/workflow/workspace/job-processing/correlation",title:"correlation",description:"### Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/correlation.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/correlation",sidebar:"batchpipeline",previous:{title:"S3 \ub0b4\ubcf4\ub0b4\uae30",permalink:"/docs/batchpipeline/workflow/workspace/export-data/s3"},next:{title:"decision",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/decision"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],l={rightToc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\ub370\uc774\ud130\uc758 correlation(\uc0c1\uad00\ubd84\uc11d)\uc744 \uc218\ud589\ud55c\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","]\ub178\ub4dc \uc911 ","[correlation]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow001_correlation_property.png",alt:"flow001"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"method : \uc801\uc6a9\ud560 correlation algorithm \uc120\ud0dd (pearson, spearman) "),Object(i.b)("li",{parentName:"ol"},"datasetPath : correlation \uc744 \uacc4\uc0b0\ud560 csv \ud30c\uc77c \uacbd\ub85c \uc120\ud0dd  "),Object(i.b)("li",{parentName:"ol"},"savePath : \uacb0\uacfc\uac00 \uc800\uc7a5\ub420 \ud3f4\ub354\uacbd\ub85c \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"jupyterIP : jupyterIP \uc785\ub825 "),Object(i.b)("li",{parentName:"ol"},"delimeter : csv \ud30c\uc77c\uc758 \uad6c\ubd84\uc790 \uc785\ub825"),Object(i.b)("li",{parentName:"ol"},"columnHeader : \ub370\uc774\ud130 \uceec\ub7fc \ud5e4\ub354\uc5ec\ubd80 \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"rowHeader : \ub370\uc774\ud130 \ub85c\uc6b0 \ud5e4\ub354\uc5ec\ubd80 \uc120\ud0dd ")))}b.isMDXComponent=!0},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),f=n,d=s["".concat(a,".").concat(f)]||s[f]||u[f]||i;return r?o.a.createElement(d,c({ref:t},l,{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);