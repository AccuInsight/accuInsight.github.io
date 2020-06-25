(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{322:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(6),c=(r(0),r(365)),i={title:"hdfsToS3"},p={id:"batchpipeline/workflow/workspace/job-processing/hdfs-to-s3",title:"hdfsToS3",description:"### Definition\r",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-s3.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-s3",sidebar:"batchpipeline",previous:{title:"hdfsToIcos",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-icos"},next:{title:"hdfsToServer",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-server"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:a};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"definition"},"Definition"),Object(c.b)("p",null,"HDFS \ud30c\uc77c/\ud3f4\ub354\ub97c S3\uc5d0 \ubcf5\uc0ac \ud558\ub294 \ub178\ub4dc\uc774\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hdfsToS3]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4. "),Object(c.b)("h3",{id:"set"},"Set"),Object(c.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(c.b)("h4",{id:"property"},"property"),Object(c.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow007_hdfstos3_property.png",alt:"flow007"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"hdfs\ud30c\uc77c\uacbd\ub85c(\ubd88\ub7ec\uc624\uae30) : \ubcf5\uc0ac\ud560 \ud30c\uc77c \uacbd\ub85c \uc120\ud0dd"),Object(c.b)("li",{parentName:"ol"},"S3 \ud30c\uc77c\uacbd\ub85c (\uc800\uc7a5\uacbd\ub85c) : \uc800\uc7a5\ud560 S3 \ud30c\uc77c\uacbd\ub85c \uc120\ud0dd     "),Object(c.b)("li",{parentName:"ol"},"ETL \uacb0\uacfc\ud30c\uc77c \uc5ec\ubd80 : ETL \uacb0\uacfc\ud30c\uc77c\uc744 \ub85c\ub4dc\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0 True \uc120\ud0dd"),Object(c.b)("li",{parentName:"ol"},"Credential : S3 \uc5d1\uc138\uc2a4 \uc815\ubcf4 ( S3 \ud30c\uc77c\uacbd\ub85c \uc120\ud0dd\uc2dc \uc790\ub3d9\uc14b\ud305\ub428 )")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"HDFS \ud30c\uc77c\uc5d0 \uc801\uc7ac\ub41c \ub370\uc774\ud130\ub97c S3\uc5d0 \ubcf5\uc0ac\ud55c\ub2e4. "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"hdfs\ud30c\uc77c\uacbd\ub85c(\ubd88\ub7ec\uc624\uae30)\uc5d0\uc11c ","[\ud31d\uc5c5\uc5f4\uae30]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec \ud074\ub7ec\uc2a4\ud130\uc640 \ub370\uc774\ud130\ub97c \uc120\ud0dd\ud55c\ub2e4.")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow056_hdfstois3_hdfs%EC%A0%80%EC%9E%A5%EA%B2%BD%EB%A1%9C%EC%84%A0%ED%83%9D.png",alt:"flow056"}))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"S3 \ud30c\uc77c\uacbd\ub85c(\uc800\uc7a5\uacbd\ub85c)\uc5d0\uc11c ","[\ud31d\uc5c5\uc5f4\uae30]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec Bucket \ubc0f \uc800\uc7a5\uacbd\ub85c\ub97c \uc120\ud0dd\ud55c\ub2e4. \uc6b0\uce21 ","[Bucket\uad00\ub9ac]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec \ubc84\ud0b7\uc744 \ucd94\uac00\ud560 \uc218 \uc788\ub2e4. S3 \ud30c\uc77c\uacbd\ub85c\ub97c \uc120\ud0dd\ud558\uba74 4. Credential\uc740 \uc790\ub3d9 \uc14b\ud305\ub41c\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow057_hdfstois3_s3%EC%A0%80%EC%9E%A5%EA%B2%BD%EB%A1%9C%EC%84%A0%ED%83%9D.png",alt:"flow058"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Bucket\uad00\ub9ac]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc2e0\uaddc\ubc84\ud0b7 \uc0dd\uc131\ud560 \uc218 \uc788\uc74c")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow058_hdfstois3_s3%EB%B2%84%ED%82%B7%EC%83%9D%EC%84%B1.png",alt:"flow058"}))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"ETL \uacb0\uacfc\ud30c\uc77c \uc5ec\ubd80\ub294 True\ub97c \uc120\ud0dd\ud55c\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow059_hdfstois3_property.png",alt:"flow059"}))))}b.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,d=s["".concat(i,".").concat(u)]||s[u]||f[u]||c;return r?o.a.createElement(d,p({ref:t},l,{components:r})):o.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);