(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(6),i=(n(0),n(340)),a={title:"mlPipeline"},c={unversionedId:"pipeline/workflow/workspace/data-processing-advanced/ml-pipeline",id:"pipeline/workflow/workspace/data-processing-advanced/ml-pipeline",isDocsHomePage:!1,title:"mlPipeline",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/ml-pipeline.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/ml-pipeline",sidebar:"pipeline",previous:{title:"codeToMatrix",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/code-to-matrix"},next:{title:"customCode",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/custom-code"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],l={rightToc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"ML \ubaa8\ub378\uc744 \ubd88\ub7ec\uc640\uc11c \uc608\uce21 \uacb0\uacfc\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[mlPipeline]","\ub178\ub4dc\ub97c drag & drop \ud569\ub2c8\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"modelPath - ML \ubaa8\ub378 \uacbd\ub85c\ub97c \uc9c0\uc815"),Object(i.b)("li",{parentName:"ol"},"useLatestModel : mlTrain \ub178\ub4dc(\uc2a4\ucf00\uc904)\uc758 \ud559\uc2b5\uacb0\uacfc \ubaa8\ub378 \uc0ac\uc6a9 \uc5ec\ubd80. \uccb4\ud06c\uc2dc mlTrain\ub178\ub4dc\uc758 modelPath\uc640 \ub3d9\uc77c\ud55c \ud3f4\ub354\ub97c \uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"overwriteSchema - ML\uacb0\uacfc\ub85c \ub370\uc774\ud130 \uc2a4\ud0a4\ub9c8 \uc800\uc7a5")))}d.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(a,".").concat(f)]||u[f]||s[f]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);