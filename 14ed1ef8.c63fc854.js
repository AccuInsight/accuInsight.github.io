(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(375)),o={title:"addTimestamp"},p={id:"pipeline/workflow/workspace/data-processing-advanced/add-timestamp",isDocsHomePage:!1,title:"addTimestamp",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/add-timestamp.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/add-timestamp",sidebar:"pipeline",previous:{title:"addConditionCol",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/add-condition-col"},next:{title:"convertDate",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/convert-date"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"timestamp \uceec\ub7fc\uc744 \ucd94\uac00\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[addTimestamp]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/addTimestamp_property.png",alt:"addTimestamp"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"newColumn : \ucd94\uac00 \uceec\ub7fc\uba85 \uc785\ub825"),Object(i.b)("li",{parentName:"ol"},"timestampValue : \ub0a0\uc9dc\uac12 \uc785\ub825(ex. now-1d , now-1h)"),Object(i.b)("li",{parentName:"ol"},"timestampFormat : \ub0a0\uc9dc \ud615\uc2dd \uc785\ub825(ex. yyyyMMddHHmmss)")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,'\uc0c1\ud488 \uc8fc\ubb38\uc815\ubcf4\uc5d0 \ud558\ub8e8 \uc804 \uc77c\uc790 \uc815\ubcf4\ub97c "yyyy-MM-dd" \ud0c0\uc785 \ud615\ud0dc\ub85c \uc800\uc7a5\ud558\ub294 \uceec\ub7fc\uc744 \ucd94\uac00\ud558\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.  '),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[addTimestamp]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(i.b)("br",{parentName:"li"}),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/addTimestamp.png",alt:"addTimestamp"}))),Object(i.b)("li",{parentName:"ol"},"[addTimestamp]","\ub178\ub4dc\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(i.b)("br",{parentName:"li"}),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/addTimestamp_example.png",alt:"addTimestamp"})))))}d.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,u=s["".concat(o,".").concat(b)]||s[b]||m[b]||i;return n?a.a.createElement(u,p(p({ref:t},l),{},{components:n})):a.a.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);