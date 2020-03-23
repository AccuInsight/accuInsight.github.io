(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return p}));var n=r(1),o=(r(0),r(217));const c={title:"executeHive"},i={id:"batchpipeline/workflow/workspace/job-processing/execute-hive",title:"executeHive",description:"## executeHive\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\execute-hive.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/execute-hive",sidebar:"batchpipeline",previous:{title:"distcp",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/distcp"},next:{title:"fork",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/fork"}},a=[{value:"executeHive",id:"executehive",children:[{value:"Example",id:"example",children:[]}]}],l={rightToc:a};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"executehive"},"executeHive"),Object(o.b)("p",null,"JDBC\ub97c \ud65c\uc6a9\ud558\uc5ec \uc6d0\uaca9\uc5d0 \uc788\ub294 Hive \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \uba85\ub839\uc744 \uc2e4\ud589\ud55c\ub2e4. ","[hive]"," \ub178\ub4dc\ubcf4\ub2e4 \ub354 \ud655\uc7a5\ub41c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[distcp]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"[Note]"),Object(o.b)("p",{parentName:"blockquote"},"Hadoop \uae30\ubc18\uc73c\ub85c Data Lake\ub97c \uad6c\ucd95\ud55c site\uc758 \uacbd\uc6b0 Data Lake \ub0b4 hive\uc5d0 \uc811\uc18d\ud558\uc5ec ETL \uc791\uc5c5\uc744 \uc9c1\uc811 \uc218\ud589\ud560 \uc218 \uc788\ub2e4. \uae30\uc874 ETL \uac1c\ubc1c\uc790\ub4e4\uc774 \uc0ac\uc6a9\ud558\uae30 \uc6a9\uc774\ud558\ub098, Query \uc219\ub828\ub3c4\uc5d0 \uc131\ub2a5\ucc28\uc774\uac00 \ub9ce\uc774 \ub0a0 \uc218 \uc788\uc74c\uc5d0 \uc720\uc758\ud55c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow004_executehive_property.png",alt:"flow004"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc791\uc5c5",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"delete : \uc2e4\ud589 \uc804\uc5d0 HDFS, ICOS\uc5d0\uc11c \uc0ad\uc81c\ud560 \ud3f4\ub354 \uacbd\ub85c"),Object(o.b)("li",{parentName:"ul"},"mkdir\t\uc2e4\ud589 \uc804\uc5d0 HDFS, ICOS\uc5d0\uc11c \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c\t"))),Object(o.b)("li",{parentName:"ol"},"cluster : Hive\ub97c \uc218\ud589\ud560 \ud074\ub7ec\uc2a4\ud130(\uc9c1\uc811 \uc785\ub825 \uc120\ud0dd\uc2dc 3,4,5 \uc815\ubcf4 \uc9c1\uc811 \uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"url : JDBC Hive URL"),Object(o.b)("li",{parentName:"ol"},"user\t: Hive \uc0ac\uc6a9\uc790 \uc774\ub984\t"),Object(o.b)("li",{parentName:"ol"},"password\t: Hive \uc0ac\uc6a9\uc790 \uc554\ud638"),Object(o.b)("li",{parentName:"ol"},"sql : \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \uc704\ud55c SQL \uc785\ub825. SELECT\ubb38\uc740 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4. "),Object(o.b)("li",{parentName:"ol"},"version : Hive \ubc84\uc804(1.2.1, 3.1.1 \uc911 \ud0dd1)"),Object(o.b)("li",{parentName:"ol"},"retry",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"max : \uc7ac\uc2dc\ub3c4 \ud69f\uc218"),Object(o.b)("li",{parentName:"ul"},"period : \uc7ac\uc2dc\ub3c4 \uac04\uaca9(\ubd84 \ub2e8\uc704)"))),Object(o.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ub0b4\ubcf4\ub0b4\uae30\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Hive\uc5d0 \uc800\uc7a5\ub41c iris \ud14c\uc774\ube14\uc744 \uae30\ubc18\uc73c\ub85c iris_testqf\ub77c\ub294 \uc2e0\uaddc\ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud55c\ub2e4. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow034_executehive_%EC%88%98%ED%96%89%EB%8C%80%EC%83%81%ED%85%8C%EC%9D%B4%EB%B8%94%EC%A0%95%EB%B3%B4.png",alt:"flow034"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[\ube0c\ub77c\uc6b0\uc800]"," > ","[HIVE]"," \uc5d0\uc11c test1234 \ud074\ub7ec\uc2a4\ud130 Hive \uacc4\uc815\uc758 iris \ud14c\uc774\ube14 \ub0b4\uc5ed\uc744 \ud655\uc778\ud55c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow035_executehive_property%EC%9E%85%EB%A0%A5%EC%83%81%EC%84%B8.png",alt:"flow035"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[2.cluster]","\uc5d0\uc11c hive\uac00 \uc704\uce58\ud55c \ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd. \ud074\ub7ec\uc2a4\ud130 \uc120\ud0dd\uc2dc ","[3.url]",", ","[4.user]",", ","[5.password]"," \ud56d\ubaa9\uc740 \uc790\ub3d9 \uc120\ud0dd\ub41c\ub2e4. "),Object(o.b)("li",{parentName:"ol"},"[6.sql]","\uc5d0 \ucffc\ub9ac\ub97c \uc785\ub825\ud55c\ub2e4. \uc624\ub978\ucabd ","[query editor]","\ubc84\ud2bc \ud074\ub9ad\ud558\uc5ec \ud31d\uc5c5\ub41c editor\uc5d0\uc11c \uc9c1\uc811 \ucffc\ub9ac\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4. ")),Object(o.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacb0\uacfc\ub85c \uc0c8\ub85c\uc6b4 \ud14c\uc774\ube14\uc774 \uc0dd\uc131\ub410\ub2e4.  "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow036_executehive_%EC%B5%9C%EC%A2%85%EA%B2%B0%EA%B3%BC%ED%99%95%EC%9D%B8.png",alt:"flow036"}))))}p.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),O=n,m=u["".concat(i,".").concat(O)]||u[O]||s[O]||c;return r?o.a.createElement(m,a({ref:t},p,{components:r})):o.a.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=O;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);