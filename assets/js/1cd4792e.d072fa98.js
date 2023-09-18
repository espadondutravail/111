"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3430],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1433:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(2784);const a={},o={};a&&a.children&&a.children.forEach((e=>{e.children.forEach((e=>{e.name&&(o[e.name]=e)}))}));const l=function(e){let t;switch(void 0===e&&(e={}),e.type){case"union":t="union";break;case"array":t=`${l(e.elementType)}[]`;break;default:t=e.name}return t};function i(e){let{html:t}=e;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}const s=[{dataIndex:"name",title:"\u5c5e\u6027\u540d"},{dataIndex:"type",title:"\u7c7b\u578b",render:(e,t)=>"Method"===t.kindString?"function":l(t.type||{})},{dataIndex:"flags.isOptional",title:"\u662f\u5426\u5fc5\u9009",render:(e,t)=>t.flags.isOptional?null:"\u5fc5\u586b"},{dataIndex:"comment",title:"\u8bf4\u660e",width:"40%",render:e=>e?r.createElement("div",null,r.createElement(i,{html:e.summary?e.summary.map((e=>"text"===e.kind?e.text.replaceAll("\n","<br />"):"")).join("<br />"):void 0})):null}];function c(e){const{name:t}=e,n=o[t];if(!n)return r.createElement("div",{style:{border:"1px solid red",color:"red"}},"can not find ",t);let a=[];return a="reflection"===n.type?.type?n.type.declaration.children:n.children,r.createElement(d,{title:t,dataSource:a,columns:s,rowKey:"id"})}function d(e){let{title:t,dataSource:n,columns:a,rowKey:o}=e;return r.createElement("table",{className:"SimpleTable",style:{width:"100%"}},t&&r.createElement("caption",null,t),function(e){void 0===e&&(e=[]);return r.createElement("thead",null,r.createElement("tr",null,e.map((e=>r.createElement("th",{key:e.dataIndex,style:{width:e.width}},e.title)))))}(a),function(e,t,n){return r.createElement("tbody",null,e.map((e=>e?r.createElement("tr",{key:e[n]},t.map(((t,n)=>r.createElement("td",{key:t.dataIndex},function(e,t,n){let{dataIndex:r,render:a}=e;const o=function(e,t){if(!t)return;return t.split(".").reduce(((e,t)=>e[t]),e)}(t,r);if("function"==typeof a)return a(o,t,n);return o}(t,e,n))))):null)))}(n,a,o))}},8129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(876)),o=n(1433);const l={},i="Designer \u8bbe\u8ba1\u5668\u5bb9\u5668",s={unversionedId:"designer/modules/designer",id:"designer/modules/designer",title:"Designer \u8bbe\u8ba1\u5668\u5bb9\u5668",description:"\u8bbe\u8ba1\u5668\u6839\u8282\u70b9\uff0c\u6ce8\u5165\u5168\u5c40\u72b6\u6001\u3002",source:"@site/docs/designer/modules/designer.mdx",sourceDirName:"designer/modules",slug:"/designer/modules/designer",permalink:"/tango/docs/designer/modules/designer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/designer/modules/designer.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",level:2},{value:"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316",id:"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316",level:2},{value:"engine",id:"engine",level:2},{value:"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f",id:"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f",level:3},{value:"\u81ea\u5b9a\u4e49 workspace \u7684\u521d\u59cb\u5316\u65b9\u5f0f",id:"\u81ea\u5b9a\u4e49-workspace-\u7684\u521d\u59cb\u5316\u65b9\u5f0f",level:3},{value:"sandboxQuery",id:"sandboxquery",level:2},{value:"remoteServices",id:"remoteservices",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"designer-\u8bbe\u8ba1\u5668\u5bb9\u5668"},"Designer \u8bbe\u8ba1\u5668\u5bb9\u5668"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u5668\u6839\u8282\u70b9\uff0c\u6ce8\u5165\u5168\u5c40\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),(0,a.kt)(o.Z,{name:"DesignerProps",mdxType:"TypesTable"}),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316"},"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Designer engine={engine} sandboxQuery={sandboxQuery} remoteServices={remoteServices}></Designer>\n")),(0,a.kt)("h2",{id:"engine"},"engine"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u5668\u5f15\u64ce\u5b9e\u4f8b\uff0c\u7528\u4e8e\u7ba1\u7406\u8bbe\u8ba1\u5668\u7684\u6838\u5fc3\u72b6\u6001\u3002"),(0,a.kt)("h3",{id:"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f"},"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const engine = createEngine({\n  entry: '/src/index.js',\n  files: sampleFiles,\n  componentPrototypes: prototypes as any,\n});\n")),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49-workspace-\u7684\u521d\u59cb\u5316\u65b9\u5f0f"},"\u81ea\u5b9a\u4e49 workspace \u7684\u521d\u59cb\u5316\u65b9\u5f0f"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f15\u64ce\u91c7\u7528\u7684\u662f\u6e90\u7801\u89e3\u6790\u6a21\u5f0f\uff0c\u5373\u5c06\u6e90\u7801\u89e3\u6790\u4e3a ast \u6811\uff0c\u540e\u7eed\u7684\u642d\u5efa\u903b\u8f91\u8f6c\u4e3a\u5bf9 ast \u6811\u7684\u64cd\u4f5c\u3002\u5982\u679c\u4f60\u60f3\u81ea\u5b9a\u4e49\u642d\u5efa\u903b\u8f91\uff0c\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 workspace \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u5f15\u64ce\u5728 2.0 \u672c\u672c\u4e2d\u63d0\u4f9b\u4e86\u65b0\u7684 JsonWorkspace \u6765\u652f\u6301\u81ea\u5b9a\u4e49\u642d\u5efa\u903b\u8f91\uff0cJsonWorkspace \u91c7\u7528\u7684\u662f json \u683c\u5f0f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 json \u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u642d\u5efa\u903b\u8f91\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const engine = createEngine({\n  workspace: new JsonWorkspace({\n    prototypes: prototypes as any,\n    files: schemaFiles,\n  }),\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6309\u7167\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684 Workspace \u5b9e\u73b0\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 Workspace \u7684\u5b9e\u73b0\u6807\u51c6\u3002")),(0,a.kt)("h2",{id:"sandboxquery"},"sandboxQuery"),(0,a.kt)("p",null,"\u6c99\u7bb1\u7684\u67e5\u8be2\u5b9e\u4f8b\uff0c\u7528\u4e8e\u5411\u6c99\u7bb1\u6ce8\u518c dom \u67e5\u8be2\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"remoteservices"},"remoteServices"),(0,a.kt)("p",null,"\u8fdc\u7a0b\u670d\u52a1\u5b9e\u4f8b\uff0c\u7528\u4e8e\u6ce8\u518c\u5168\u5c40\u5171\u4eab\u7684\u6570\u636e\u670d\u52a1\u5b9e\u4f8b\u3002"))}m.isMDXComponent=!0}}]);