(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(1),n=(a(0),a(369));const b={title:"spark"},l={id:"batchpipeline/workflow/workspace/job-processing/spark",title:"spark",description:"### Definition\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\spark.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/spark",sidebar:"batchpipeline",previous:{title:"shell",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/shell"},next:{title:"sqoop",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/sqoop"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function o({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"definition"},"Definition"),Object(n.b)("p",null,"\uc791\uc131\ud55c \ucf54\ub4dc\ub97c Spark\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \ub178\ub4dc\uc774\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[spark]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(n.b)("h3",{id:"set"},"Set"),Object(n.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(n.b)("h4",{id:"property"},"property"),Object(n.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow021_spark_property.png",alt:"flow021"}))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uacb0\uacfc\ub97c HDFS\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc0ad\uc81c/\ud3f4\ub354\uc0dd\uc131 \uc791\uc5c5 \uc120 \uc218\ud589(\uc6cc\ud06c\ud50c\ub85c\uc6b0 \ubc18\ubcf5\uc2e4\ud589 \uc2dc \ud65c\uc6a9\uac00\ub2a5)"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"delete : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0ad\uc81c\ud560 \ud3f4\ub354/\ud30c\uc77c \uacbd\ub85c"),Object(n.b)("li",{parentName:"ul"},"mkdir\t: \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"file : \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub77c\uc774\ube0c\ub7ec\ub9ac \uacbd\ub85c\ub97c \uc124\uc815")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"archive : archive\uacbd\ub85c\ub97c \uc124\uc815")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"retry"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"max : \uc2e4\ud589 \uc2e4\ud328 \uc2dc \uc7ac\uc2dc\ub3c4 \ud69f\uc218"),Object(n.b)("li",{parentName:"ul"},"period : \uc7ac\uc2dc\ub3c4 \uc8fc\uae30(\ubd84 \ub2e8\uc704)"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"property : \uc2e4\ud589\uc5d0 \uc0ac\uc6a9\ud560 property (key, value) \uc785\ub825")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"master : \uc0ac\uc6a9\ud560 spark url \uc785\ub825(DHP\uc5d0\uc11c \uc0dd\uc131\ud55c \ud074\ub7ec\uc2a4\ud130 \uc0ac\uc6a9\uc2dc yarn \uc785\ub825) ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"mode : spark \uc2e4\ud589 \ubaa8\ub4dc(client, cluster) \uc785\ub825(DHP\uc5d0\uc11c \uc0dd\uc131\ud55c \ud074\ub7ec\uc2a4\ud130 \uc0ac\uc6a9\uc2dc client \uc785\ub825)  "),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"deploy-mode"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"client"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"driver program\uc744 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cluster"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"driver program\uc744 \uc6cc\ucee4 \ubaa8\uc2e0 \uc911 \ud558\ub098\uc5d0\uc11c \uc2e4\ud589"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"name : spark \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uba85")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"jar : \uc2e4\ud589\ud560 python(py), jar \ub4f1\uc758 \uacbd\ub85c \uc785\ub825")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"sparkOpts : spark \uc2e4\ud589\uc2dc \uc0ac\uc6a9\ud560 \uc635\uc158\uc815\ubcf4 \uc785\ub825(key, value)"),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"key"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"values"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--driver-cores"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"spark driver\uc5d0\uc11c \uc0ac\uc6a9\ud560 core \uc218 \uc9c0\uc815")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--driver-memory"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1024m"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"spark driver\uc5d0\uc11c \uc0ac\uc6a9\ud560 memory \uc9c0\uc815")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--executor-cores"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"executor\uc5d0\uc11c \uc0ac\uc6a9\ud560 core \uc218 \uc9c0\uc815")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--executor-memory"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1g"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"executor\uc5d0\uc11c \uc0ac\uc6a9\ud560 memory \uc9c0\uc815")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--num-executors"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\uc2e4\ud589\ud560 executor \uc218 \uc9c0\uc815")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--queue"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"default"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"job\uc744 \uc81c\ucd9c\ud560 yarn queue \uc774\ub984 \uc9c0\uc815")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--conf"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PROP=VALUE"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\uc784\uc758\uc758 spark \ud658\uacbd\uc124\uc815 \uc18d\uc131\uac12 \uc9c0\uc815")))))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"[Note]"," \uc544\ub798 \ub0b4\uc6a9\ucc38\uace0"),Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://spark.apache.org/docs/latest/running-on-yarn.html"}),"https://spark.apache.org/docs/latest/running-on-yarn.html"))),Object(n.b)("ol",{start:11},Object(n.b)("li",{parentName:"ol"},"argument : python code \uc2e4\ud589\uc2dc \uc804\ub2ec\ud560 argument"),Object(n.b)("li",{parentName:"ol"},"jobXml : jobXml \uacbd\ub85c \uc785\ub825. \uc7a1\uc5d0 \uc804\ub2ec\ud560 \ud504\ub85c\ud37c\ud2f0\ub97c \ubcc4\ub3c4 xml \ub85c \uc791\uc131\ud558\uc5ec \uc804\ub2ec\uac00\ub2a5"),Object(n.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("p",null,"\uc785\ub825\ubc1b\uc740 \uc22b\uc790\uc758 \ud3c9\uade0\uc744 \uad6c\ud558\ub294 basicavg.py \ud30c\uc77c\uc744 spark\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uc608\uc81c\uc774\ub2e4. "),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'"""\n>>> from pyspark.context import SparkContext\n>>> sc = SparkContext(\'local\', \'test\')\n>>> b = sc.parallelize([1, 2, 3, 4])\n>>> basicAvg(b)\n2.5\n"""\n\nimport sys\n\nfrom pyspark import SparkContext\n\ndef basicAvg(nums):\n    """Compute the avg"""\n    sumCount = nums.map(lambda x: (x, 1)).fold(\n        (0, 0), (lambda x, y: (x[0] + y[0], x[1] + y[1])))\n    return sumCount[0] / float(sumCount[1])\n\nif __name__ == "__main__":\n    master = "local"\n    if len(sys.argv) == 2:\n        master = sys.argv[1]\n    sc = SparkContext(master, "Sum")\n    nums = sc.parallelize([1, 2, 3, 4])\n    avg = basicAvg(nums)\n    print avg\n\n')),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud074\ub7ec\uc2a4\ud130\uc5d0 basicavg.py \ud30c\uc77c\uc744 \uc801\uc7ac\ud55c\ub2e4. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"[Flow\uad6c\uc131]"," > ","[spark]"," \ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 setting \ud328\ub110\uc5d0\uc11c \uc2e4\ud589\ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd\ud55c\ub2e4. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"property \ud328\ub110\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825\ud55c\ub2e4. "),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"2.file \ud56d\ubaa9\uc5d0 hdfs\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c basicavg.py\uc774 \uc800\uc7a5\ub41c \uacbd\ub85c\ub97c \uc120\ud0dd\ud55c\ub2e4.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow075_spark_file_property.png",alt:"flow075"})),"  ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"\uadf8 \uc678 \ud56d\ubaa9\uc744 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825\ud55c\ub2e4.  "),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"6.master"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yarn")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"7.mode"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"client")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"9.jar"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"basicavg.py"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"10.sparkOpts : \uc704 \ub9e4\ub274\uc5bc \uc911 property \ud56d\ubaa9\uc744 \ucc38\uace0\ud558\uc5ec \uc785\ub825\ud55c\ub2e4. \ubcf8 \uc608\uc81c\uc5d0\uc11c\ub294 driver-memory, conf \uc635\uc158\uc744 \uc0ac\uc6a9\ud588\ub2e4.  "),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"key"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--driver-memory"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2G")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"--conf"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"spark.executor.extraJavaOptions=-Xms512m -Xmx1024m")))),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow076_spark_other_property.png",alt:"flow076"})),"  "))))))}o.isMDXComponent=!0},369:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=i(a),j=r,u=m["".concat(l,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(u,c({ref:t},o,{components:a})):n.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);