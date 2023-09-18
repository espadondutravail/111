"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5896],{876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(t),d=o,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1433:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(2784);const o={},a={};o&&o.children&&o.children.forEach((e=>{e.children.forEach((e=>{e.name&&(a[e.name]=e)}))}));const l=function(e){let n;switch(void 0===e&&(e={}),e.type){case"union":n="union";break;case"array":n=`${l(e.elementType)}[]`;break;default:n=e.name}return n};function p(e){let{html:n}=e;return r.createElement("div",{dangerouslySetInnerHTML:{__html:n}})}const c=[{dataIndex:"name",title:"\u5c5e\u6027\u540d"},{dataIndex:"type",title:"\u7c7b\u578b",render:(e,n)=>"Method"===n.kindString?"function":l(n.type||{})},{dataIndex:"flags.isOptional",title:"\u662f\u5426\u5fc5\u9009",render:(e,n)=>n.flags.isOptional?null:"\u5fc5\u586b"},{dataIndex:"comment",title:"\u8bf4\u660e",width:"40%",render:e=>e?r.createElement("div",null,r.createElement(p,{html:e.summary?e.summary.map((e=>"text"===e.kind?e.text.replaceAll("\n","<br />"):"")).join("<br />"):void 0})):null}];function i(e){const{name:n}=e,t=a[n];if(!t)return r.createElement("div",{style:{border:"1px solid red",color:"red"}},"can not find ",n);let o=[];return o="reflection"===t.type?.type?t.type.declaration.children:t.children,r.createElement(u,{title:n,dataSource:o,columns:c,rowKey:"id"})}function u(e){let{title:n,dataSource:t,columns:o,rowKey:a}=e;return r.createElement("table",{className:"SimpleTable",style:{width:"100%"}},n&&r.createElement("caption",null,n),function(e){void 0===e&&(e=[]);return r.createElement("thead",null,r.createElement("tr",null,e.map((e=>r.createElement("th",{key:e.dataIndex,style:{width:e.width}},e.title)))))}(o),function(e,n,t){return r.createElement("tbody",null,e.map((e=>e?r.createElement("tr",{key:e[t]},n.map(((n,t)=>r.createElement("td",{key:n.dataIndex},function(e,n,t){let{dataIndex:r,render:o}=e;const a=function(e,n){if(!n)return;return n.split(".").reduce(((e,n)=>e[n]),e)}(n,r);if("function"==typeof o)return o(a,n,t);return a}(n,e,t))))):null)))}(t,o,a))}},3108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(7896),o=(t(2784),t(876)),a=t(1433);const l={},p="\u57fa\u7840\u7269\u6599\u534f\u8bae",c={unversionedId:"protocol/material-protocol",id:"protocol/material-protocol",title:"\u57fa\u7840\u7269\u6599\u534f\u8bae",description:"\u7269\u6599\u534f\u8bae\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7ec4\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5305\u62ec\u7ec4\u4ef6\u7684\u540d\u79f0\u3001\u5c5e\u6027\u3001\u62d6\u62fd\u89c4\u5219\u7b49\u3002\u7269\u6599\u534f\u8bae\u662f\u4e3a\u7ec4\u4ef6\u9644\u52a0\u7684\u989d\u5916\u63cf\u8ff0\u6587\u4ef6\uff0c\u4e0d\u4f1a\u4fb5\u5165\u5230\u4f60\u7684\u7ec4\u4ef6\u4ee3\u7801\u4e2d\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5728\u4e0d\u6539\u52a8\u7ec4\u4ef6\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u7269\u6599\u534f\u8bae\u3002",source:"@site/docs/protocol/material-protocol.mdx",sourceDirName:"protocol",slug:"/protocol/material-protocol",permalink:"/tango/docs/protocol/material-protocol",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/material-protocol.mdx",tags:[],version:"current",frontMatter:{},sidebar:"protocol",next:{title:"\u57fa\u7840\u7ec4\u4ef6\u5305\u89c4\u8303",permalink:"/tango/docs/protocol/material-package-spec"}},i={},u=[{value:"\u7ec4\u4ef6\u539f\u578b prototype",id:"\u7ec4\u4ef6\u539f\u578b-prototype",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027 ComponentPropType",id:"\u7ec4\u4ef6\u5c5e\u6027-componentproptype",level:2},{value:"\u5d4c\u5957\u5c5e\u6027",id:"\u5d4c\u5957\u5c5e\u6027",level:3},{value:"\u5c5e\u6027\u7684\u5173\u8054\u5c55\u793a",id:"\u5c5e\u6027\u7684\u5173\u8054\u5c55\u793a",level:3},{value:"\u52a8\u6001\u5c5e\u6027\u8bbe\u7f6e",id:"\u52a8\u6001\u5c5e\u6027\u8bbe\u7f6e",level:3},{value:"\u5c5e\u6027\u7684\u8f93\u5165\u63d0\u793a",id:"\u5c5e\u6027\u7684\u8f93\u5165\u63d0\u793a",level:3},{value:"\u7ec4\u4ef6\u62d6\u62fd\u89c4\u5219 ComponentDndRulesType",id:"\u7ec4\u4ef6\u62d6\u62fd\u89c4\u5219-componentdndrulestype",level:2},{value:"canDrag/canDrop",id:"candragcandrop",level:3},{value:"canMoveIn/canMoveOut",id:"canmoveincanmoveout",level:3}],m={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u57fa\u7840\u7269\u6599\u534f\u8bae"},"\u57fa\u7840\u7269\u6599\u534f\u8bae"),(0,o.kt)("p",null,"\u7269\u6599\u534f\u8bae\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7ec4\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5305\u62ec\u7ec4\u4ef6\u7684\u540d\u79f0\u3001\u5c5e\u6027\u3001\u62d6\u62fd\u89c4\u5219\u7b49\u3002\u7269\u6599\u534f\u8bae\u662f\u4e3a\u7ec4\u4ef6\u9644\u52a0\u7684\u989d\u5916\u63cf\u8ff0\u6587\u4ef6\uff0c\u4e0d\u4f1a\u4fb5\u5165\u5230\u4f60\u7684\u7ec4\u4ef6\u4ee3\u7801\u4e2d\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5728\u4e0d\u6539\u52a8\u7ec4\u4ef6\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u7269\u6599\u534f\u8bae\u3002"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u539f\u578b-prototype"},"\u7ec4\u4ef6\u539f\u578b prototype"),(0,o.kt)(a.Z,{name:"ComponentPrototypeType",mdxType:"TypesTable"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027-componentproptype"},"\u7ec4\u4ef6\u5c5e\u6027 ComponentPropType"),(0,o.kt)(a.Z,{name:"ComponentPropType",mdxType:"TypesTable"}),(0,o.kt)("h3",{id:"\u5d4c\u5957\u5c5e\u6027"},"\u5d4c\u5957\u5c5e\u6027"),(0,o.kt)("p",null,"\u5f53\u67d0\u4e2a\u7ec4\u4ef6\u5c5e\u6027\u4e3a\u5d4c\u5957\u5c5e\u6027\u65f6\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"<Table scroll={{ x: 800, y: 400 }} />"),"\uff0c\u6b64\u65f6\u53ef\u4ee5\u63cf\u8ff0\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  name: 'Table',\n  props: [\n    {\n      name: 'scroll',\n      props: [\n        {\n          name: 'x',\n          setter: 'numberSetter',\n        },\n        {\n          name: 'y',\n          setter: 'numberSetter',\n        }\n      ],\n    }\n  ],\n}\n")),(0,o.kt)("h3",{id:"\u5c5e\u6027\u7684\u5173\u8054\u5c55\u793a"},"\u5c5e\u6027\u7684\u5173\u8054\u5c55\u793a"),(0,o.kt)("p",null,"\u5f53\u67d0\u4e2a\u5c5e\u6027\u4f9d\u8d56\u67d0\u4e2a\u7279\u5b9a\u7684\u5176\u4ed6\u5c5e\u6027\u503c\u65f6\uff0c\u53ef\u4ee5\u501f\u52a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"getVisible")," \u5b9e\u73b0\u5173\u8054\u5c55\u793a\u63a7\u5236\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  name: 'Button',\n  props: [\n    {\n      name: 'shape',\n    },\n    {\n      name: 'buttonType',\n      getVisible: (form) => {\n        // \u914d\u7f6e\u9879 buttonType \u4ec5\u5728\u914d\u7f6e\u9879 shape \u7684\u503c\u4e3a button \u65f6\u624d\u5c55\u793a\n        return form.getValue('shape') === 'button';\n      },\n    },\n  ];\n}\n")),(0,o.kt)("h3",{id:"\u52a8\u6001\u5c5e\u6027\u8bbe\u7f6e"},"\u52a8\u6001\u5c5e\u6027\u8bbe\u7f6e"),(0,o.kt)("p",null,"\u5f53\u7ec4\u4ef6\u9700\u8981\u4f9d\u636e\u67d0\u4e2a\u5c5e\u6027\u503c\u8fdb\u884c\u52a8\u6001\u8bbe\u7f6e\u5176\u4ed6\u5c5e\u6027\u65f6\uff0c\u53ef\u4ee5\u501f\u52a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"getProp")," \u5b9e\u73b0\u63a7\u5236\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  name: 'FormItem',\n  props: [\n    {\n      name: 'component',\n      title: '\u63a7\u4ef6\u7c7b\u578b',\n    },\n    {\n      name: 'componentProps',\n      title: '\u5b50\u7ec4\u4ef6\u5c5e\u6027',\n      getProp(form) {\n        const type = form.getValue('component');\n        const proto = { ...componentMap[type] };\n        const props = omitProps(proto.props, [\n          'placeholder',\n          'options',\n          'onChange',\n          'defaultValue',\n          'value',\n        ]);\n        return {\n          title: proto.title + '\u5c5e\u6027',\n          props,\n        };\n      },\n    }\n  ],\n}\n")),(0,o.kt)("h3",{id:"\u5c5e\u6027\u7684\u8f93\u5165\u63d0\u793a"},"\u5c5e\u6027\u7684\u8f93\u5165\u63d0\u793a"),(0,o.kt)("p",null,"\u5f53\u67d0\u4e2a\u5c5e\u6027\u5728\u8f93\u5165\u65f6\u9700\u8981\u8fdb\u884c\u8f93\u5165\u63d0\u793a\u65f6\uff0c\u4f8b\u5982\u67d0\u4e2a\u51fd\u6570\u5c5e\u6027\u9700\u8981\u63d0\u793a\u5176\u7b7e\u540d\u7684\u6a21\u7248\uff0c\u5219\u53ef\u4ee5\u501f\u52a9\u5c5e\u6027\u8f93\u5165\u63d0\u793a\u5b9e\u73b0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  name: 'TableColumn',\n  props: [\n    {\n      name: 'render',\n      setter: 'expressionSetter',\n      autoCompleteOptions: ['(value, record, index) => { return null; }'],\n    }\n  ],\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/18917075100/9569/09fa/bc62/c418d3de8694ce93977450fb725bb524.gif",alt:"img"})),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u62d6\u62fd\u89c4\u5219-componentdndrulestype"},"\u7ec4\u4ef6\u62d6\u62fd\u89c4\u5219 ComponentDndRulesType"),(0,o.kt)(a.Z,{name:"ComponentDndRulesType",mdxType:"TypesTable"}),(0,o.kt)("h3",{id:"candragcandrop"},"canDrag/canDrop"),(0,o.kt)("p",null,"\u5728 onDragStart \u7684\u65f6\u5019\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const Page = {\n  name: 'Page',\n  rules: {\n    canDrag() {\n      return false;\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"canmoveincanmoveout"},"canMoveIn/canMoveOut"),(0,o.kt)("p",null,"\u5728 onDragEnter \u7684\u65f6\u5019\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const Modal = {\n  name: 'Modal',\n  rules: {\n    canMoveIn(incomingName) {\n      return !(incomingName === Modal.name);\n    },\n  },\n};\n")))}d.isMDXComponent=!0}}]);