(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(6),l=(r(0),r(219)),c={title:"Preparation"},b={id:"dlmodeler/tutorial/preparation",title:"Preparation",description:"## DL Modeler Tutorial\r",source:"@site/docs\\dlmodeler\\tutorial\\preparation.md",permalink:"/docs/dlmodeler/tutorial/preparation",sidebar:"dlmodeler",previous:{title:"Deploy",permalink:"/docs/dlmodeler/deploy/deploy"},next:{title:"Project",permalink:"/docs/dlmodeler/tutorial/project"}},i=[{value:"DL Modeler Tutorial",id:"dl-modeler-tutorial",children:[{value:"\ub370\uc774\ud130 \uc900\ube44",id:"\ub370\uc774\ud130-\uc900\ube44",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"dl-modeler-tutorial"},"DL Modeler Tutorial"),Object(l.b)("p",null,"6\uac1c\uc758 \uce74\ud14c\uace0\ub9ac\ub85c \uad6c\ubd84\ub41c \ud48d\uacbd \uc774\ubbf8\uc9c0\ub97c DL Modeler\uc5d0 \uc5c5\ub85c\ub4dc\ud558\uc5ec, built-in \uc54c\uace0\ub9ac\uc998 \uc911 \ud558\ub098\uc778 Image Classification\uc744 \uc774\uc6a9\ud574 GPU \ubd84\uc0b0 \ud559\uc2b5\ud55c\ub2e4. \ud559\uc2b5\uc774 \uc644\ub8cc\ub418\uba74, \uc0dd\uc131\ub41c \ud559\uc2b5 \ubaa8\ub378\uc744 \ubc30\ud3ec\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc774\ubbf8\uc9c0\uc758 \uce74\ud14c\uace0\ub9ac\ub97c \uc608\uce21\ud55c\ub2e4."),Object(l.b)("h3",{id:"\ub370\uc774\ud130-\uc900\ube44"},"\ub370\uc774\ud130 \uc900\ube44"),Object(l.b)("h4",{id:"\ub370\uc774\ud130-\uc124\uba85"},"\ub370\uc774\ud130 \uc124\uba85"),Object(l.b)("p",null,"\uc774\ubc88 Demo\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub370\uc774\ud130\ub294 Intel\uc774 Kaggle\uc5d0 \uacf5\uac1c\ud55c Intel Image Classification \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\uc774\ub2e4.\n(",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kaggle.com/puneet6060/intel-image-classification"}),"https://www.kaggle.com/puneet6060/intel-image-classification"),") "),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial001_kaggle%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%8F%B4%EB%8D%94.png",alt:"tutorial001"}))),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial002_kaggle%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%8D%B0%EC%9D%B4%ED%84%B0.png",alt:"tutorial002"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"150px X 150px \uc0ac\uc774\uc988\uc758 \uc790\uc5f0/\ud48d\uacbd \uc774\ubbf8\uc9c0 \uc57d 25,000\uac1c\ub85c \uad6c\uc131\ub41c \ub370\uc774\ud130\uc14b\uc774\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud559\uc2b5\uc6a9 \ub370\uc774\ud130\ub85c \ucd1d 14,034\uac1c\uc758 \uc774\ubbf8\uc9c0\uac00 \uc788\uc9c0\ub9cc, demo \uc2e4\uc2b5\uc744 \ud560 \ub550 59\uac1c \uc774\ubbf8\uc9c0\ub9cc \ud559\uc2b5 \ub370\uc774\ud130\ub85c \uc0ac\uc6a9\ud558\uc5ec toy model\uc744 \ub9cc\ub4e0\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0 \uce74\ud14c\uace0\ub9ac\ub294 \ucd1d 6\uac1c(buildings, forest, glacier, mountain, sea, street)\uc774\ub2e4.")),Object(l.b)("h4",{id:"\ud559\uc2b5-\ub370\uc774\ud130"},"\ud559\uc2b5 \ub370\uc774\ud130"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial003_%ED%95%99%EC%8A%B5%EB%8D%B0%EC%9D%B4%ED%84%B0.png",alt:"tutorial003"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Image Classification\uc758 \ud559\uc2b5 input\uc73c\ub85c \ucd1d \ub450 \uac00\uc9c0\uc758 \ub370\uc774\ud130\uac00 \ud544\uc694\ud558\ub2e4.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0 \ud30c\uc77c"),Object(l.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uc774\ubbf8\uc9c0 \ud30c\uc77c\uba85\uacfc label\uc774 \ub9e4\ud551\ub418\uc5b4 \uc788\ub294 csv \ub370\uc774\ud130"))),Object(l.b)("li",{parentName:"ul"},"\uc2e4\uc81c \uc774\ubbf8\uc9c0 \ud30c\uc77c\uacfc, csv \ub370\uc774\ud130 \uc0c1\uc758 \ud30c\uc77c \uac1c\uc218\uac00 \uc77c\uce58\ud574\uc57c \ud559\uc2b5 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud559\uc2b5 label \uac12\uc740 \uc815\uc218\ub9cc \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0, \uce74\ud14c\uace0\ub9ac\uc640 \uc815\uc218 label\ub85c \ubcc0\ud658\ud574\uc57c \ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc815\uc218 label\uc740 \ubd84\ub958 \uacb0\uacfc \ud574\uc11d/\ud65c\uc6a9 \uc2dc \ub2e4\uc2dc \uce74\ud14c\uace0\ub9ac\ub85c \ubc14\uafd4 \uc8fc\ub294 \uc791\uc5c5\uc774 \ud544\uc694\ud558\ub2e4."),Object(l.b)("li",{parentName:"ul"},"demo\uc5d0\uc11c\ub294 \ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ud560 csv \ud30c\uc77c\uc774 \ubbf8\ub9ac \uc900\ube44\ub418\uc5b4 \uc788\ub2e4. (image_label.csv)"),Object(l.b)("li",{parentName:"ul"},"demo\uc758 label csv \ud30c\uc77c\uc740 \ub2e4\uc74c \ud45c\ub97c \uae30\uc900\uc73c\ub85c \uc81c\uc791\ub418\uc5c8\ub2e4.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uce74\ud14c\uace0\ub9ac"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc815\uc218 label"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"forest"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buildings"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"glacier"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"street"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mountain"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sea"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5")))))}p.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b({},t,{},e)),r},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(r),O=a,d=u["".concat(c,".").concat(O)]||u[O]||m[O]||l;return r?n.a.createElement(d,b({ref:t},o,{components:r})):n.a.createElement(d,b({ref:t},o))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var o=2;o<l;o++)c[o]=r[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);