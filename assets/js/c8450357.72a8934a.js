"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6146],{876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7896),o=(a(2784),a(876));const r={},l="\u5e38\u7528\u7684\u5de5\u5177\u51fd\u6570",i={unversionedId:"boot/helpers",id:"boot/helpers",title:"\u5e38\u7528\u7684\u5de5\u5177\u51fd\u6570",description:"tango-boot \u63d0\u4f9b\u4e86\u4e00\u7ec4\u4fbf\u6377\u7684\u5de5\u5177\u51fd\u6570\uff0c\u7528\u4e8e\u5e94\u5bf9\u65e5\u5e38\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u5178\u578b\u64cd\u4f5c\u903b\u8f91\u3002",source:"@site/docs/boot/helpers.mdx",sourceDirName:"boot",slug:"/boot/helpers",permalink:"/tango/docs/boot/helpers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/boot/helpers.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"<code>getUser()</code>",id:"getuser",level:3},{value:"<code>checkPrivilege({ appCode, privilegeCode })</code>",id:"checkprivilege-appcode-privilegecode-",level:3},{value:"<code>copyToClipboard(text: string)</code>",id:"copytoclipboardtext-string",level:3},{value:"<code>navigateTo(link: string, data?: object)</code>",id:"navigatetolink-string-data-object",level:3},{value:"<code>showToast(text: string, type: string, time: number)</code>",id:"showtoasttext-string-type-string-time-number",level:3},{value:"<code>openModal(modalId: string)</code>",id:"openmodalmodalid-string",level:3},{value:"<code>closeModal(modalId: string)</code>",id:"closemodalmodalid-string",level:3},{value:"<code>formatDate(date, format)</code>",id:"formatdatedate-format",level:3},{value:"<code>formatNumber(number, locale, options)</code>",id:"formatnumbernumber-locale-options",level:3},{value:"<code>getCurrentLanguage</code>",id:"getcurrentlanguage",level:3},{value:"<code>setLanguage(localeCode)</code>",id:"setlanguagelocalecode",level:3},{value:"<code>getLanguageList</code>",id:"getlanguagelist",level:3},{value:"<code>trans(module:key)</code>",id:"transmodulekey",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u7528\u7684\u5de5\u5177\u51fd\u6570"},"\u5e38\u7528\u7684\u5de5\u5177\u51fd\u6570"),(0,o.kt)("p",null,"tango-boot \u63d0\u4f9b\u4e86\u4e00\u7ec4\u4fbf\u6377\u7684\u5de5\u5177\u51fd\u6570\uff0c\u7528\u4e8e\u5e94\u5bf9\u65e5\u5e38\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u5178\u578b\u64cd\u4f5c\u903b\u8f91\u3002"),(0,o.kt)("h3",{id:"getuser"},(0,o.kt)("inlineCode",{parentName:"h3"},"getUser()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece v1.15.0 \u5f00\u59cb\u63d0\u4f9b")),(0,o.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u7684\u767b\u5f55\u7528\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const user = tango.getUser();\n")),(0,o.kt)("h3",{id:"checkprivilege-appcode-privilegecode-"},(0,o.kt)("inlineCode",{parentName:"h3"},"checkPrivilege({ appCode, privilegeCode })")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece v1.15.0 \u5f00\u59cb\u63d0\u4f9b")),(0,o.kt)("p",null,"\u68c0\u67e5 PMS \u6743\u9650"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const test = await tango.checkPrivilege({ appCode, privilegeCode });\n")),(0,o.kt)("h3",{id:"copytoclipboardtext-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"copyToClipboard(text: string)")),(0,o.kt)("p",null,"\u590d\u5236\u6587\u672c\u5230\u526a\u8d34\u677f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.copyToClipboard('hello world');\n")),(0,o.kt)("h3",{id:"navigatetolink-string-data-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigateTo(link: string, data?: object)")),(0,o.kt)("p",null,"\u5bfc\u822a\u5230\u5176\u4ed6\u524d\u7aef\u8def\u7531"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u57fa\u672c\u7528\u6cd5\ntango.navigateTo('/about');\n\n// \u5e26\u8def\u7531\u53c2\u6570\ntango.navigateTo('/about', { the: 'query' }); // /about?the=query\n")),(0,o.kt)("h3",{id:"showtoasttext-string-type-string-time-number"},(0,o.kt)("inlineCode",{parentName:"h3"},"showToast(text: string, type: string, time: number)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"text \u6d88\u606f\u6b63\u6587"),(0,o.kt)("li",{parentName:"ul"},"type \u6d88\u606f\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"success | error | warn")),(0,o.kt)("li",{parentName:"ul"},"time \u6d88\u606f\u5c55\u793a\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4\u4e3a 3 \u79d2")),(0,o.kt)("p",null,"\u6d88\u606f\u63d0\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.showToast('hello world');\n\ntango.showToast('something is error', 'error', 3);\n")),(0,o.kt)("h3",{id:"openmodalmodalid-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"openModal(modalId: string)")),(0,o.kt)("p",null,"\u6839\u636e\u5f39\u5c42 ID \u5524\u8d77\u76ee\u6807\u5f39\u5c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.openModal('modal123');\n")),(0,o.kt)("h3",{id:"closemodalmodalid-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"closeModal(modalId: string)")),(0,o.kt)("p",null,"\u6839\u636e\u5f39\u5c42 ID \u5173\u95ed\u76ee\u6807\u5f39\u5c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.closeModal('modal123');\n")),(0,o.kt)("h3",{id:"formatdatedate-format"},(0,o.kt)("inlineCode",{parentName:"h3"},"formatDate(date, format)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"date: ",(0,o.kt)("inlineCode",{parentName:"li"},"number | string | Moment")," \u65e5\u671f\u503c"),(0,o.kt)("li",{parentName:"ul"},"format: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," \u683c\u5f0f\u5316\uff0c\u53d6\u503c\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/format/"},"https://momentjs.com/docs/#/displaying/format/"))),(0,o.kt)("p",null,"\u683c\u5f0f\u5316\u65e5\u671f\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.formatDate(1659496225323, 'YYYY-MM-DD HH:mm:ss'); // 2022-08-03 11:10:25\n\ntango.formatDate('2022-11-11', 'X'); // 1668096000\n")),(0,o.kt)("h3",{id:"formatnumbernumber-locale-options"},(0,o.kt)("inlineCode",{parentName:"h3"},"formatNumber(number, locale, options)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"number: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"locale: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"options: ",(0,o.kt)("inlineCode",{parentName:"li"},"Intl.NumberFormatOptions"),"\uff0c\u53c2\u8003\u53d6\u503c ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"))),(0,o.kt)("p",null,"\u683c\u5f0f\u5316\u6570\u5b57"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.formatNumber(99999); // 99,999\n")),(0,o.kt)("h3",{id:"getcurrentlanguage"},(0,o.kt)("inlineCode",{parentName:"h3"},"getCurrentLanguage")),(0,o.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u8bed\u79cd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.getCurrentLanguage(); // en-US\n")),(0,o.kt)("h3",{id:"setlanguagelocalecode"},(0,o.kt)("inlineCode",{parentName:"h3"},"setLanguage(localeCode)")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u5f53\u524d\u8bed\u79cd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.setLanguage('en-US');\n")),(0,o.kt)("h3",{id:"getlanguagelist"},(0,o.kt)("inlineCode",{parentName:"h3"},"getLanguageList")),(0,o.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u5e94\u7528\u53ef\u7528\u8bed\u79cd\u5217\u8868"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.getLanguageList();\n")),(0,o.kt)("h3",{id:"transmodulekey"},(0,o.kt)("inlineCode",{parentName:"h3"},"trans(module:key)")),(0,o.kt)("p",null,"\u6839\u636e\u591a\u8bed\u8a00 key \u83b7\u53d6\u5f53\u524d\u8bed\u79cd\u6587\u6848"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tango.trans('common:add'); // \u65b0\u589e\n")))}u.isMDXComponent=!0}}]);