(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{148:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(1),o=t(6),i=(t(0),t(341)),p={title:"hdfsToServer"},a={unversionedId:"pipeline/workflow/workspace/job-processing/hdfs-to-server",id:"pipeline/workflow/workspace/job-processing/hdfs-to-server",isDocsHomePage:!1,title:"hdfsToServer",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/hdfs-to-server.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/hdfs-to-server",sidebar:"pipeline",previous:{title:"hdfsToS3",permalink:"/docs/pipeline/workflow/workspace/job-processing/hdfs-to-s3"},next:{title:"hiveToHdfs",permalink:"/docs/pipeline/workflow/workspace/job-processing/hive-to-hdfs"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"HDFS \ud30c\uc77c/\ud3f4\ub354\ub97c \uc6d0\uaca9 \uc11c\ubc84\uc5d0 \ubcf5\uc0ac \ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hdfsToServer]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoserver01_property.png",alt:"hdfstoserver01"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"HDFS \ud30c\uc77c \uacbd\ub85c(\ubd88\ub7ec\uc624\uae30) : \ubcf5\uc0ac\ud560 \ud30c\uc77c \uacbd\ub85c \uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"dest : \uc6d0\uaca9\uc11c\ubc84 \uc815\ubcf4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"IP\uc8fc\uc18c : \uc6d0\uaca9\uc11c\ubc84 IP \uc815\ubcf4"),Object(i.b)("li",{parentName:"ul"},"\uc800\uc7a5\uacbd\ub85c(path) : \ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uacbd\ub85c"),Object(i.b)("li",{parentName:"ul"},"PORT : SCP \ud65c\uc6a9 \uac00\ub2a5 \ud3ec\ud2b8"))),Object(i.b)("li",{parentName:"ol"},"user : SCP\uc5d0 \ud65c\uc6a9\ud560 \uacc4\uc815"),Object(i.b)("li",{parentName:"ol"},"password : SCP\uc5d0 \ud65c\uc6a9\ud560 password")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130 hdfs\uc5d0 \uc801\uc7ac\ub41c \ud30c\uc77c\uc744 \uc678\ubd80\uc11c\ubc84\uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"[hdfsToServer]"," \ub178\ub4dc property \uad6c\uc131",Object(i.b)("br",{parentName:"li"}),Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoserver02_property.png",alt:"hdfstoserver02"}))),Object(i.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud6c4 \ud30c\uc77c\uc774 \uc678\ubd80\uc11c\ubc84\uc5d0 \uc804\uc1a1 \ud655\uc778",Object(i.b)("br",{parentName:"li"}),Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/job-processing/hdfstoserver03_result.png",alt:"hdfstoserver03"})))))}s.isMDXComponent=!0},341:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},b=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=n,d=b["".concat(p,".").concat(u)]||b[u]||f[u]||i;return t?o.a.createElement(d,a(a({ref:r},l),{},{components:t})):o.a.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=u;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,p[1]=a;for(var l=2;l<i;l++)p[l]=t[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);