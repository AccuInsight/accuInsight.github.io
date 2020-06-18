(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),o=(r(0),r(364)),l={title:"mlPredict"},c={id:"batchpipeline/workflow/workspace/job-processing/ml-predict",title:"mlPredict",description:"### Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/ml-predict.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ml-predict",sidebar:"batchpipeline",previous:{title:"join",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/join"},next:{title:"mlRecommend",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ml-recommend"}},i=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"ML Modeler\uc11c\ube44\uc2a4\uc5d0\uc11c \uae30 \uc800\uc7a5\ub41c \ubaa8\ub378\uc744 \uc2e4\ud589\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[mlPredict]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow012_mlpredict_property.png",alt:"flow012"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"master : ml \uc2e4\ud589\ud560 master \uc120\ud0dd (yarn-cluster, yarn-client, local \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"name : appName \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"datasetPath : ml predict\uc744 \uc218\ud589\ud560 \ub370\uc774\ud130\uc14b \uacbd\ub85c"),Object(o.b)("li",{parentName:"ol"},"datasetPathcredential : datasetPath\uac00 s3\uc778 \uacbd\uc6b0 credential \uc815\ubcf4"),Object(o.b)("li",{parentName:"ol"},"dataSetFormat : \ub370\uc774\ud130\uc14b \ud3ec\ub9f7 \uc120\ud0dd (parquet, csv, orc \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"dataSetDelimiter : \ub370\uc774\ud130\uc14b \uad6c\ubd84\uc790 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"dataSetHeaderExists : \ub370\uc774\ud130\ub137 header\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80 (TRUE, FALSE \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"useTrainNodeModel : \uc5f0\uacb0\ub41c mlTrain \ub178\ub4dc\uc758 \ud559\uc2b5\uacb0\uacfc \ubaa8\ub378 \uc0ac\uc6a9 \uc5ec\ubd80"),Object(o.b)("li",{parentName:"ol"},"modelPath : \ubaa8\ub378 \uacbd\ub85c (\ud31d\uc5c5\uc5f4\uae30 : HDFS, S3 File browser \ud31d\uc5c5\uc5d0\uc11c \ubaa8\ub378 \uacbd\ub85c\ub97c \uc120\ud0dd, ml model \ubd88\ub7ec\uc624\uae30 : \uae30\uc874\uc5d0 \ub4f1\ub85d\ub41c model\uc744 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"modelPathcredential : modelPath\uac00 s3\uc778 \uacbd\uc6b0 credential \uc815\ubcf4"),Object(o.b)("li",{parentName:"ol"},"selectedColumns : \uac00\uc838\uc62c \uceec\ub7fc \uc120\ud0dd (Dataset(\uacb0\uacfc)\uc2a4\ud0a4\ub9c8 \ubd88\ub7ec\uc624\uae30 \ubc84\ud2bc\uc73c\ub85c \ubd88\ub7ec\uc624\uac70\ub098 \uc9c1\uc811 \uc785\ub825 \uac00\ub2a5)"),Object(o.b)("li",{parentName:"ol"},"savePath : \uc800\uc7a5\ud560 \uacbd\ub85c \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"savePathcredential : savePath\uac00 s3\uc778 \uacbd\uc6b0 credential \uc815\ubcf4"),Object(o.b)("li",{parentName:"ol"},"saveDataSetFormat : \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc14b \ud3ec\ub9f7 \uc120\ud0dd (parquet, csv, orc \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"saveDataSetDelimiter : \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc14b \uad6c\ubd84\uc790 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"saveDataSetHeaderExists : \uc800\uc7a5\ud560 \ub370\uc774\ud130\uc14b header\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80 (TRUE, FALSE \uc911 \uc120\ud0dd)"),Object(o.b)("li",{parentName:"ol"},"sparkOpts : spark \uc635\uc158 \ub9ac\uc2a4\ud2b8 \uc785\ub825 (ex. key : --executor-memory , value : 20G)"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("h4",{id:"property-1"},"Property"),Object(o.b)("p",null,"HDFS \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow012_mlpredict_example.png",alt:"flow012"}))),Object(o.b)("h4",{id:"\uc2e4\ud589-\uacb0\uacfc"},"\uc2e4\ud589 \uacb0\uacfc"),Object(o.b)("p",null,"\ube0c\ub77c\uc6b0\uc800 > HDFS \ube0c\ub77c\uc6b0\uc800 \uc5d0\uc11c mlPredict \uc2e4\ud589 \uacb0\uacfc\ub85c \uc800\uc7a5\ub41c \ub370\uc774\ud130\uc14b\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow012_mlpredict_result.png",alt:"flow012"}))))}b.isMDXComponent=!0},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,u=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return r?a.a.createElement(u,c({ref:t},p,{components:r})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);