"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1863],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1433:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2784);const a={},o={};a&&a.children&&a.children.forEach((e=>{e.children.forEach((e=>{e.name&&(o[e.name]=e)}))}));const l=function(e){let t;switch(void 0===e&&(e={}),e.type){case"union":t="union";break;case"array":t=`${l(e.elementType)}[]`;break;default:t=e.name}return t};function c(e){let{html:t}=e;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}const i=[{dataIndex:"name",title:"\u5c5e\u6027\u540d"},{dataIndex:"type",title:"\u7c7b\u578b",render:(e,t)=>"Method"===t.kindString?"function":l(t.type||{})},{dataIndex:"flags.isOptional",title:"\u662f\u5426\u5fc5\u9009",render:(e,t)=>t.flags.isOptional?null:"\u5fc5\u586b"},{dataIndex:"comment",title:"\u8bf4\u660e",width:"40%",render:e=>e?r.createElement("div",null,r.createElement(c,{html:e.summary?e.summary.map((e=>"text"===e.kind?e.text.replaceAll("\n","<br />"):"")).join("<br />"):void 0})):null}];function d(e){const{name:t}=e,n=o[t];if(!n)return r.createElement("div",{style:{border:"1px solid red",color:"red"}},"can not find ",t);let a=[];return a="reflection"===n.type?.type?n.type.declaration.children:n.children,r.createElement(u,{title:t,dataSource:a,columns:i,rowKey:"id"})}function u(e){let{title:t,dataSource:n,columns:a,rowKey:o}=e;return r.createElement("table",{className:"SimpleTable",style:{width:"100%"}},t&&r.createElement("caption",null,t),function(e){void 0===e&&(e=[]);return r.createElement("thead",null,r.createElement("tr",null,e.map((e=>r.createElement("th",{key:e.dataIndex,style:{width:e.width}},e.title)))))}(a),function(e,t,n){return r.createElement("tbody",null,e.map((e=>e?r.createElement("tr",{key:e[n]},t.map(((t,n)=>r.createElement("td",{key:t.dataIndex},function(e,t,n){let{dataIndex:r,render:a}=e;const o=function(e,t){if(!t)return;return t.split(".").reduce(((e,t)=>e[t]),e)}(t,r);if("function"==typeof a)return a(o,t,n);return o}(t,e,n))))):null)))}(n,a,o))}},4874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7896),a=(n(2784),n(876)),o=n(1433);const l={},c="Sandbox \u6c99\u7bb1",i={unversionedId:"designer/modules/sandbox",id:"designer/modules/sandbox",title:"Sandbox \u6c99\u7bb1",description:"\u8bbe\u8ba1\u5668\u7684\u8fd0\u884c\u65f6\u6c99\u7bb1\uff0c\u7528\u6765\u6267\u884c\u4ee3\u7801\uff0c\u6e32\u67d3\u9875\u9762\u3002",source:"@site/docs/designer/modules/sandbox.mdx",sourceDirName:"designer/modules",slug:"/designer/modules/sandbox",permalink:"/tango/docs/designer/modules/sandbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/designer/modules/sandbox.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sandbox-\u6c99\u7bb1"},"Sandbox \u6c99\u7bb1"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u5668\u7684\u8fd0\u884c\u65f6\u6c99\u7bb1\uff0c\u7528\u6765\u6267\u884c\u4ee3\u7801\uff0c\u6e32\u67d3\u9875\u9762\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u6c99\u7bb1\u662f\u4e00\u4e2a\u57fa\u4e8e CodeSandbox \u7684\u6c99\u7bb1\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u7aef\u6267\u884c\u4ee3\u7801\u3002"),(0,a.kt)(o.Z,{name:"SandboxProps",mdxType:"TypesTable"}))}m.isMDXComponent=!0}}]);