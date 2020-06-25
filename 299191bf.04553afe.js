(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{128:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return s}));var n=t(1),o=t(6),c=(t(0),t(365)),i={title:"serverToHdfs"},p={id:"batchpipeline/workflow/workspace/job-processing/server-to-hdfs",title:"serverToHdfs",description:"### Definition\r",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/server-to-hdfs.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/server-to-hdfs",sidebar:"batchpipeline",previous:{title:"Rscript",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/r-script"},next:{title:"shell",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/shell"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:a};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"definition"},"Definition"),Object(c.b)("p",null,"\uc11c\ubc84\uc5d0 \uc704\uce58\ud55c \ud30c\uc77c\uc744 HDFS\ub85c \ubcf5\uc0ac\ud558\ub294 \ub178\ub4dc\uc774\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[serverToHdfs]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(c.b)("h3",{id:"set"},"Set"),Object(c.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(c.b)("h4",{id:"property"},"property"),Object(c.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow019_servertohdfs_property.png",alt:"flow019"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\uc6d0\uaca9 \uc11c\ubc84 IP : IP\uc8fc\uc18c\uc640 Port\uc815\ubcf4\ub97c \uc785\ub825\ud55c\ub2e4. ","[\uc5f0\uacb0\uad00\ub9ac]"," \uc81c\ubaa9 \uc6b0\uce21\uc758 ","[\ubaa9\ub85d\uc5f4\uae30]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uae30\uc800\uc7a5\ub41c \uc6d0\uaca9\uc11c\ubc84 \uc815\ubcf4\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4. ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"IP\uc8fc\uc18c : \uc11c\ubc84 IP"),Object(c.b)("li",{parentName:"ul"},"PORT : \uc11c\ubc84 PORT"))),Object(c.b)("li",{parentName:"ol"},"sourceFolder : source \ud30c\uc77c \uacbd\ub85c ec) /home/dpcore"),Object(c.b)("li",{parentName:"ol"},"sourceFile : source \ud30c\uc77c \uba85 ex) target.csv"),Object(c.b)("li",{parentName:"ol"},"user : SSH User ID"),Object(c.b)("li",{parentName:"ol"},"password : SSH User Password"),Object(c.b)("li",{parentName:"ol"},"hdfsFilePath : \uc800\uc7a5\ud560 HDFS \uacbd\ub85c ex) /tmp")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"\uc6d0\uaca9\uc11c\ubc84 /home/dpcore \uacbd\ub85c\uc5d0 \uc704\uce58\ud55c servertohdfs.csv\ud30c\uc77c\uc744 HDFS\uc5d0 \uc801\uc7ac\ud558\uace0\uc790 \ud55c\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow026_servertohdfs_remoteserver%EC%9C%84%EC%B9%98.png",alt:"flow026"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\ubaa9\ub85d\uc5f4\uae30 \ubc84\ud2bc\uc744 \ud65c\uc6a9\ud558\uc5ec \uc6d0\uaca9\uc11c\ubc84 \uc815\ubcf4\ub97c \uc120\ud0dd\ud55c\ub2e4. \uc11c\ubc84\uc815\ubcf4\ub97c \uc120\ud0dd\ud558\uba74 ","[\uc6d0\uaca9\uc11c\ubc84IP]",", ","[user]",", ","[passwird]","\uac00 \uc790\ub3d9 \uc785\ub825\ub41c\ub2e4. \uc6d0\uaca9\uc11c\ubc84 \ub4f1\ub85d\ubc29\ubc95\uc740 \ub9e4\ub274\uc5bc ","[\uc6d0\uaca9\uc11c\ubc84\uad00\ub9ac]","\ub97c \ucc38\uace0\ud55c\ub2e4. "),Object(c.b)("li",{parentName:"ol"},'sourceFolder\uc5d0 "/home/dpcore"\ub97c sourceFile\uc5d0 "servertohdfs.csv"\ub97c \uc785\ub825\ud55c\ub2e4. '),Object(c.b)("li",{parentName:"ol"},"hdfsFilePath \uc815\ubcf4\ub97c \uc785\ub825\ud55c\ub2e4. ","[\ube0c\ub77c\uc6b0\uc800]"," > ","[HDFS\ube0c\ub77c\uc6b0\uc800]","\ub85c \uc774\ub3d9\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\uc640 \uc800\uc7a5\uacbd\ub85c\ub97c \uc120\ud0dd\ud55c \ud6c4 \uc6b0\uce21 \uc0c1\ub2e8\uc758 ","[HDFS \uacbd\ub85c \ubcf5\uc0ac]","\ub97c \uc120\ud0dd\ud55c\ub2e4. HDFS\uacbd\ub85c\uac00 \uc790\ub3d9 \ubcf5\uc0ac\ub41c\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow027_servertohdfs_property%EC%9E%85%EB%A0%A5%EC%83%81%EC%84%B8.png",alt:"flow027"}))),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow028_servertohdfs_hdfs%EA%B2%BD%EB%A1%9C%EB%B3%B5%EC%82%AC%EB%B0%A9%EB%B2%95.png",alt:"flow028"}))),Object(c.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacb0\uacfc\ub294 \uc544\ub798\uc640 \uac19\ub2e4. "),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow029_servertohdfs_%EA%B2%B0%EA%B3%BC%ED%99%94%EB%A9%B4.png",alt:"flow029"}))))}s.isMDXComponent=!0},365:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p({},r,{},e)),t},b=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=s(t),u=n,d=b["".concat(i,".").concat(u)]||b[u]||f[u]||c;return t?o.a.createElement(d,p({ref:r},l,{components:t})):o.a.createElement(d,p({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=u;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);