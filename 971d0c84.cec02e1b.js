(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{240:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),o=(r(0),r(365)),i={title:"SQL"},c={id:"pipeline/workflow/workspace/data-processing-advanced/sql",title:"SQL",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/sql.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/sql",sidebar:"pipeline",previous:{title:"removeTa",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/remove-ta"},next:{title:"timeMove",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/time-move"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"SQL query\ub97c \uc9c1\uc811 \uc785\ub825\ud558\uc5ec \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[SQL]","\ub178\ub4dc\ub97c drag & drop \ud569\ub2c8\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-advanced/preadv023_sql_property.png",alt:"preadv023"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"query : \ub370\uc774\ud130\ucc98\ub9ac\ub97c \uc704\ud55c select\ubb38 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"overwriteSchema : SQL\uacb0\uacfc\uc5d0 \ub300\ud55c \uc2a4\ud0a4\ub9c8\ub97c \uc800\uc7a5/\uc7ac\uc815\uc758 (\uccb4\ud06c \uc548\ud560 \uacbd\uc6b0 \uc774\uc804 \uc2a4\ud0a4\ub9c8\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9)"),Object(o.b)("li",{parentName:"ol"},"newSchema")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"SQL \ucffc\ub9ac \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4.  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[SQL]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/SQL.png",alt:"SQL"}))),Object(o.b)("li",{parentName:"ol"},"[SQL]","\ub178\ub4dc\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/addTimestamp_example.png",alt:"SQL"})))))}s.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);