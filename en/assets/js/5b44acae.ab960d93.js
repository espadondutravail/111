"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9225],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7896),r=(n(2784),n(876));n(9817);const i={},a="Introduction",c={unversionedId:"intro",id:"intro",title:"Introduction",description:"Tango is a low-code designer framework for quickly building low-code platforms. With Tango, you only need a few lines of code to build a basic low-code platform frontend system. The Tango low-code designer directly reads the source code of the frontend project, executes and renders the frontend view based on the source code, and provides users with low-code visual building capabilities. User building operations will be converted into modifications to the code. With Tango, source code goes in, source code comes out.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/tango/en/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"designer",next:{title:"Quick Start",permalink:"/tango/en/docs/designer/quick-start"}},d={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Builder Components",id:"builder-components",level:2},{value:"Source Code based Low-Code Kernel",id:"source-code-based-low-code-kernel",level:2},{value:"Code in, Code out",id:"code-in-code-out",level:2}],s={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Tango is a low-code designer framework for quickly building low-code platforms. With Tango, you only need a few lines of code to build a basic low-code platform frontend system. The Tango low-code designer ",(0,r.kt)("strong",{parentName:"p"},"directly reads the source code of the frontend project, executes and renders the frontend view based on the source code, and provides users with low-code visual building capabilities. User building operations will be converted into modifications to the code"),". With Tango, ",(0,r.kt)("strong",{parentName:"p"},"source code goes in, source code comes out"),"."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The Tango low-code engine has been layered and decoupled in implementation, allowing the upper-level low-code platform and the lower-level low-code engine to be developed and maintained independently for rapid integration and deployment. On the other hand, the Tango low-code engine defines an open material ecosystem, allowing developers to freely contribute extension component configuration attribute setters and expand low-code materials to second and third-party business components."),(0,r.kt)("img",{src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/18236990116/aabf/8a16/28ee/f0fd29a84c7aa40bb26383cdef12b88c.png"}),(0,r.kt)("h2",{id:"builder-components"},"Builder Components"),(0,r.kt)("p",null,"Tango low-code engine designer is used to low-cost initialization of a basic low-code platform. Its front-end mainly includes the following parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Designer main framework: for external framework initialization, state management, drag-and-drop engine binding, and other core logic."),(0,r.kt)("li",{parentName:"ul"},"Sidebar panel: provides expandable sidebar panels, in addition to built-in universal panels, users can also add custom panels."),(0,r.kt)("li",{parentName:"ul"},"Property setting panel: property setter panel that supports user property configuration."),(0,r.kt)("li",{parentName:"ul"},"Runtime sandbox: used for rendering the designer runtime view."),(0,r.kt)("li",{parentName:"ul"},"Web IDE: used for online source code editing.")),(0,r.kt)("img",{src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/30108642346/b8cf/e86d/ef5a/514d90b722b5d8dc0e18516ed594a07b.png"}),(0,r.kt)("h2",{id:"source-code-based-low-code-kernel"},"Source Code based Low-Code Kernel"),(0,r.kt)("p",null,"The Tango low-code engine does not rely on private setup protocols and DSL, but directly uses source code to drive it. The engine internally converts the source code to AST, and all the user's setup operations are converted to traversal and modification of AST, and then the AST is regenerated as code and synchronized to the online sandbox for execution. Compared with ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/yqYey76qLGYPfDtpGkVFfA"},"traditional schema-based low-code solutions"),", which are limited by private DSL and protocols, it can perfectly integrate low-code setup with source code development."),(0,r.kt)("img",{src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/13140534982/ee2e/f42c/cc9a/184e2918a011b57d46e6c64a2722fa44.png"}),(0,r.kt)("h2",{id:"code-in-code-out"},"Code in, Code out"),(0,r.kt)("p",null,"Due to the engine kernel being completely based on source code-driven implementation, Tango's low-code engine is able to achieve visual building capabilities with source code input and output, without providing any proprietary intermediate products. As a result, the online development capabilities built by Tango can seamlessly connect and integrate with the team's existing development services (code hosting, building, deployment, CDN)."),(0,r.kt)("img",{src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/13208022400/b809/b82e/77b0/5e4fe78a8f11c8ed89c9ec9ced43e845.png"}))}p.isMDXComponent=!0}}]);