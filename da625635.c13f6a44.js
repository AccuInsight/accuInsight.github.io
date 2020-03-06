(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{228:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(249)),i={title:"S3 \ubd88\ub7ec\uc624\uae30"},l={id:"batchpipeline/workflow/workspace/import-data/s3",title:"S3 \ubd88\ub7ec\uc624\uae30",description:"## S3 \ubd88\ub7ec\uc624\uae30",source:"@site/docs/batchpipeline/workflow/workspace/import-data/s3.md",permalink:"/docs/batchpipeline/workflow/workspace/import-data/s3",sidebar:"batchpipeline",previous:{title:"RDB \ubd88\ub7ec\uc624\uae30",permalink:"/docs/batchpipeline/workflow/workspace/import-data/rdb"},next:{title:"agg",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/agg"}},c=[{value:"S3 \ubd88\ub7ec\uc624\uae30",id:"s3-\ubd88\ub7ec\uc624\uae30",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"s3-\ubd88\ub7ec\uc624\uae30"},"S3 \ubd88\ub7ec\uc624\uae30"),Object(o.b)("p",null,"Amazon S3\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c Batch Pipeline\uc73c\ub85c \ubd88\ub7ec\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ub178\ub4dc\uc774\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"File \ube0c\ub77c\uc6b0\uc800\ub97c \ud1b5\ud574 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub41c \uc2a4\ud1a0\ub9ac\uc9c0\uc640 \ub4f1\ub85d\ub41c \ubc84\ud0b7\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4. \ubc84\ud0b7\uc774 \uc5c6\uc744 \uacbd\uc6b0 File \ube0c\ub77c\uc6b0\uc800\uc758 ","[Bucket \uad00\ub9ac]"," \ub610\ub294 ","[\ube0c\ub77c\uc6b0\uc800]"," > ","[S3]"," \uba54\ub274\uc5d0\uc11c \ubc84\ud0b7 \uc815\ubcf4\ub97c \ub4f1\ub85d \ud560 \uc218 \uc788\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/import-data/impdata007_s3_main.png",alt:"impdata007"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"S3\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\uc758 Delimiter\uc640 header \ud3ec\ud568\uc5ec\ubd80\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("li",{parentName:"ul"},"Schema\ub97c \uc790\ub3d9 \ud30c\uc2f1\ud558\uc5ec \uc774\ud6c4 \uad6c\uc131\ud560 ETL \uc791\uc5c5\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/import-data/impdata008_s3_autoparsing.png",alt:"impdata008"}))),Object(o.b)("p",null,"\uc88c\uce21 ","[\ub370\uc774\ud130\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc \uc911 ","[S3\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"file : File \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub41c \uc2a4\ud1a0\ub9ac\uc9c0\uc640 \ubc84\ud0b7\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(o.b)("li",{parentName:"ol"},"format : \ubd88\ub7ec\uc62c \ud30c\uc77c\uc758 \ud615\uc2dd\uc744 \uc815\ud55c\ub2e4(json, parquet, csv \uc911 \ud0dd1)."),Object(o.b)("li",{parentName:"ol"},"delimiter : \uad6c\ubd84\uc790\ub97c \uc785\ub825\ud55c\ub2e4."),Object(o.b)("li",{parentName:"ol"},"option : \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc635\uc158\uc744 \uc124\uc815\ud55c\ub2e4.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"key: header, value : true = \ud5e4\ub354 \uc124\uc815 \uc5ec\ubd80 "),Object(o.b)("li",{parentName:"ol"},"key: nullValue, value : Null = Null \ubb38\uc790\uc5f4 \ucc98\ub9ac"),Object(o.b)("li",{parentName:"ol"},"key: nanValue, value : NaN = NaN \ubb38\uc790\uc5f4 \ucc98\ub9ac"))),Object(o.b)("li",{parentName:"ol"},"schema : column \ubc0f dataType\uc744 \uc815\uc758\ud55c\ub2e4(\uc6b0\uce21 \ubc84\ud2bc \uc774\uc6a9\ud558\uc5ec \uc804\uccb4 \ud30c\uc2f1 \ubc0f \uc77c\ubd80 \ucd94\uac00 \uac00\ub2a5)."),Object(o.b)("li",{parentName:"ol"},"credential : File \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0, \ubc84\ud0b7\uc815\ubcf4\ub97c \uc785\ub825\ud558\uba74 \uc790\ub3d9 \uc124\uc815\ub41c\ub2e4. ")))}b.isMDXComponent=!0},249:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,f=u["".concat(i,".").concat(s)]||u[s]||m[s]||o;return r?a.a.createElement(f,l({ref:t},p,{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);