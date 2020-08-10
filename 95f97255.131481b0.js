(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{205:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(1),n=a(6),b=(a(0),a(334)),o={title:"sqoop"},c={unversionedId:"batchpipeline/workflow/workspace/job-processing/sqoop",id:"batchpipeline/workflow/workspace/job-processing/sqoop",isDocsHomePage:!1,title:"sqoop",description:"Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/sqoop.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/sqoop",sidebar:"batchpipeline",previous:{title:"spark",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/spark"},next:{title:"ssh",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ssh"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"definition"},"Definition"),Object(b.b)("p",null,"sqoop \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud55c\ub2e4. sql \ucffc\ub9ac\ub098 rdbms\uc5d0\uc11c hdfs\ub85c \ub370\uc774\ud130 \uc774\ub3d9\uc2dc \uc0ac\uc6a9\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[sqoop]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(b.b)("h3",{id:"set"},"Set"),Object(b.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(b.b)("h4",{id:"property"},"property"),Object(b.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow022_sqoop_property.png",alt:"flow022"}))),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uacb0\uacfc\ub97c HDFS\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc0ad\uc81c/\ud3f4\ub354\uc0dd\uc131 \uc791\uc5c5 \uc120 \uc218\ud589(\uc6cc\ud06c\ud50c\ub85c\uc6b0 \ubc18\ubcf5\uc2e4\ud589 \uc2dc \ud65c\uc6a9\uac00\ub2a5)",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"delete : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0ad\uc81c\ud560 \ud3f4\ub354/\ud30c\uc77c \uacbd\ub85c"),Object(b.b)("li",{parentName:"ul"},"mkdir\t: \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c"))),Object(b.b)("li",{parentName:"ol"},"file : \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub77c\uc774\ube0c\ub7ec\ub9ac \uacbd\ub85c\ub97c \uc124\uc815"),Object(b.b)("li",{parentName:"ol"},"archive : archive\uacbd\ub85c\ub97c \uc124\uc815"),Object(b.b)("li",{parentName:"ol"},"retry",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"max : \uc2e4\ud589 \uc2e4\ud328 \uc2dc \uc7ac\uc2dc\ub3c4 \ud69f\uc218"),Object(b.b)("li",{parentName:"ul"},"period : \uc7ac\uc2dc\ub3c4 \uc8fc\uae30(\ubd84 \ub2e8\uc704)"))),Object(b.b)("li",{parentName:"ol"},"configuration : \uc2e4\ud589\uc5d0 \uc0ac\uc6a9\ud560 \uc18d\uc131 (key, value) \uc785\ub825"),Object(b.b)("li",{parentName:"ol"},"argument : \uc2e4\ud589\ud560 \ucee4\uba58\ub4dc(EL expressions)"),Object(b.b)("li",{parentName:"ol"},"jobXml : jobXml \uacbd\ub85c \uc785\ub825. \uc7a1\uc5d0 \uc804\ub2ec\ud560 \ud504\ub85c\ud37c\ud2f0\ub97c \ubcc4\ub3c4 xml \ub85c \uc791\uc131\ud558\uc5ec \uc804\ub2ec\uac00\ub2a5"),Object(b.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")),Object(b.b)("h3",{id:"example"},"Example"),Object(b.b)("p",null,"RDBMS\uc5d0 \uc704\uce58\ud55c \ud14c\uc774\ube14\uc744 hdfs\ub85c \uc774\ub3d9\ud558\uae30 \uc704\ud55c \uc608\uc81c\ub85c sqoop import syntax \uc5d0 \ub9de\uac8c argement\ub97c \uc124\uc815\ud55c\ub2e4.\nsqoop import common argument\ub294 \uc544\ub798\uc640 \uac19\ub2e4. "),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument ","[value]"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--connect ","[jdbc-uri]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specify JDBC connect string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--connection-manager ","[class-name]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specify connection manager class to use")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--driver ","[class-name]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Manually specify JDBC driver class to use")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--hadoop-mapred-home  ","[dir]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Override $HADOOP_MAPRED_HOME")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--help"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Print usage instructions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--password-file"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set path for a file containing the authentication password")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-P"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Read password from console")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--password ","[password]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set authentication password")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--username ","[username]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set authentication username")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--verbose"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Print more information while working")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--connection-param-file ","[filename]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Optional properties file that provides connection parameters")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--relaxed-isolation"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set connection transaction isolation to read uncommitted for the mappers.")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"[Note]"," sqoop \uad00\ub828 \uc0c1\uc138 \ub0b4\uc6a9\uc740 \uc544\ub798 \ub9c1\ud06c \ucc38\uace0"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://sqoop.apache.org/docs/1.4.7/SqoopUserGuide.html#_syntax"}),"https://sqoop.apache.org/docs/1.4.7/SqoopUserGuide.html#_syntax")," ")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"[Flow\uad6c\uc131]"," > ","[sqoop]"," \ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 setting \ud328\ub110\uc5d0\uc11c \uc2e4\ud589\ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd\ud55c\ub2e4. ")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},'"6.argement"\uc758 \ucd94\uac00\ubc84\ud2bc \ud074\ub9ad \ud6c4 sqoop import syntax\uc5d0 \ub9de\uac8c argment\uc815\ubcf4\ub97c \uc785\ub825\ud55c\ub2e4. import keyword \ubd80\ud130 \uc2dc\uc791\ud574\uc11c argument, value\ub97c \uc21c\uc11c\ub300\ub85c \uc785\ub825\ud55c\ub2e4. '),Object(b.b)("table",{parentName:"li"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"argument"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"import")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--connect")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"jdbc:mysql://10.178.XXX.XXX:302XX/modeler")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--username")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"modeler")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--password")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"XXXXXX")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--table")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"tbl_user_grp_map")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--m")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--target-dir")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/user/hive/warehouse/test")))))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"[Note]")," -m,--num-mappers ","[n]"," : option Use n map tasks to import in parallel\t")),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow077_sqoop_property.png",alt:"flow077"})),"\t"))}i.isMDXComponent=!0},334:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),i=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=i(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(a),j=r,s=m["".concat(o,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(s,c(c({ref:t},p),{},{components:a})):n.a.createElement(s,c({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,o=new Array(b);o[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<b;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);