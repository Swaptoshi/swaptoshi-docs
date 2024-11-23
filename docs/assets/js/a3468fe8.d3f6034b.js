"use strict";(self.webpackChunkswaptoshi_docs=self.webpackChunkswaptoshi_docs||[]).push([[68],{4598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(4848),i=t(8453),a=t(1470),s=t(9365);const o={sidebar_position:4,description:"Discover Swaptoshi interoperability."},l="Interoperability",c={id:"introduction/interoperability",title:"Interoperability",description:"Discover Swaptoshi interoperability.",source:"@site/content/introduction/interoperability.md",sourceDirName:"introduction",slug:"/introduction/interoperability",permalink:"/introduction/interoperability",draft:!1,unlisted:!1,editUrl:"https://github.com/swaptoshi/swaptoshi-docs/edit/main/content/introduction/interoperability.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Discover Swaptoshi interoperability."},sidebar:"docsSidebar",previous:{title:"Governance",permalink:"/introduction/governance"},next:{title:"Launch Roadmap",permalink:"/category/launch-roadmap"}},d={},u=[{value:"Cross-Chain Transfer Time",id:"cross-chain-transfer-time",level:2},{value:"Relayer CCU Frequency",id:"relayer-ccu-frequency",level:2},{value:"Relayer Inclusion Proof",id:"relayer-inclusion-proof",level:2},{value:"Registration Height",id:"registration-height",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"interoperability",children:"Interoperability"})}),"\n",(0,r.jsx)(n.p,{children:"Swaptoshi is built using the Klayr SDK, which is a toolkit for creating independent blockchains that can interoperate with each other, all using JavaScript."}),"\n",(0,r.jsx)(n.p,{children:"In this section, some brief constraints and considerations regarding how the Klayr mainchain and Swaptoshi sidechains interact and work together will be covered."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["To understand more about Klayr Interoperability, visit ",(0,r.jsx)(n.a,{href:"https://klayr.xyz/documentation/understand-blockchain/interoperability",children:"Official Klayr Documentation"})]})}),"\n",(0,r.jsx)(n.h2,{id:"cross-chain-transfer-time",children:"Cross-Chain Transfer Time"}),"\n",(0,r.jsx)(n.p,{children:"Cross-Chain Transfers enable tokens to move between different blockchains, such as transferring KLY tokens from the Klayr chain to the Swaptoshi chain for swapping purposes. This functionality is supported by the Klayr SDK's interoperability features."}),"\n",(0,r.jsx)(n.p,{children:"The time required for a cross-chain transfer is influenced by:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Block Finality"}),": The number of blocks needed for a transaction to be considered final and immutable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cross-Chain Update (CCU)"}),": Updates sent by the ",(0,r.jsx)(n.a,{href:"#relayer-ccu-frequency",children:"relayer"})," between interoperable chains which trigger state updates."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For the specific chains involved:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Klayr Chain"}),": With a block time of ",(0,r.jsx)(n.code,{children:"7 seconds"})," and a block finality of approximately ",(0,r.jsx)(n.code,{children:"80 blocks"}),", transactions generally finalized around ",(0,r.jsx)(n.code,{children:"9 minutes"})," to complete."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Swaptoshi Chain"}),": With a faster block time of ",(0,r.jsx)(n.code,{children:"3 seconds"})," and a similar finality of ",(0,r.jsx)(n.code,{children:"80 blocks"}),", transactions typically finalized around ",(0,r.jsx)(n.code,{children:"4 minutes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These durations account for the time needed for the finalized block's to be included in the CCU."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"After a block is finalized, it is included in the Cross-Chain Update (CCU) by the Relayer. Therefore, the total time for a cross-chain transfer also depends on the frequency with which the Relayer sends CCUs. This process impacts how quickly the updated balance is reflected on the receiving chain."})}),"\n",(0,r.jsx)(n.h2,{id:"relayer-ccu-frequency",children:"Relayer CCU Frequency"}),"\n",(0,r.jsxs)(n.p,{children:["The relayer address for connecting the Klayr mainchain and the Swaptoshi sidechain is ",(0,r.jsx)(n.code,{children:"klyof58j7a5fvs55utdnv6xmkv3b6swjmjaotbt85"}),". This address handles sending Cross-Chain Update (CCU) commands to both chains, which requires a transaction fee."]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to using the pre-minted ",(0,r.jsx)(n.code,{children:"573.64 SWX"})," tokens as detailed in the ",(0,r.jsx)(n.a,{href:"./tokenomics#allocation--distribution",children:"Tokenomics"}),", the community can also contribute tokens to the relayer address to help cover the transaction fees for submitting CCUs."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Remember, since transaction fees are sent to the Treasury, contributing tokens to the relayer address also helps fund the Treasury. For more details, please refer to the ",(0,r.jsx)(n.a,{href:"./governance",children:"Governance"})," section."]})}),"\n",(0,r.jsxs)(n.p,{children:["For the relayer, Swaptoshi schedules the Cross-Chain Updates (CCU) to be sent every ",(0,r.jsx)(n.code,{children:"15 minutes"}),". Consequently, cross-chain transactions, including transfers between Klayr and Swaptoshi, will be completed in about ",(0,r.jsx)(n.code,{children:"15 minutes"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Anyone is free to become a relayer, and sends their own Cross-Chain Updates (CCU)."})}),"\n",(0,r.jsx)(n.h2,{id:"relayer-inclusion-proof",children:"Relayer Inclusion Proof"}),"\n",(0,r.jsxs)(n.p,{children:["As outlined in the ",(0,r.jsx)(n.a,{href:"https://klayr.xyz/documentation/run-blockchain/setup-relayer.html#calculating-inclusionproofkeys",children:"Klayr Documentation"}),", setting up an inclusion proof is essential for configuring the relayer node."]}),"\n",(0,r.jsx)(n.p,{children:"Below is the inclusion proof for the Swaptoshi network:"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"Testnet",label:"Testnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"83ed0d2500007ebb29227bd18cfbe1827f4bec44e6be8b53304ac01b00aaf63b056b85c9d059\n"})})}),(0,r.jsx)(s.A,{value:"Devnet",label:"Devnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"83ed0d2500005735b05e48e476be8b87c6fcfcccdb3012808926eaa933b756379214586d380c\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["You can then insert this value into your Klayr node's ",(0,r.jsx)(n.code,{children:"config.json"})," file under ",(0,r.jsx)(n.code,{children:"system > inclusionProofKeys"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "system": {\n    "inclusionProofKeys": [\n      "83ed0d2500005735b05e48e476be8b87c6fcfcccdb3012808926eaa933b756379214586d380c"\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"registration-height",children:"Registration Height"}),"\n",(0,r.jsxs)(n.p,{children:["Setting up ",(0,r.jsx)(n.code,{children:"registrationHeight"})," is important to setup a relayer node from Klayr mainchain to Swaptoshi sidechain. Below is the ",(0,r.jsx)(n.code,{children:"registrationHeight"})," of Swaptoshi sidechain on Klayr mainchain:"]}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(s.A,{value:"Testnet",label:"Testnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"1281500\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["You can then insert this value into your Klayr node's ",(0,r.jsx)(n.code,{children:"config.json"})," file under ",(0,r.jsx)(n.code,{children:"plugins > chainConnector > registrationHeight"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": {\n    "chainConnector": {\n      "registrationHeight": 1281500\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const i={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),i=t(4164),a=t(3104),s=t(6347),o=t(205),l=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=f({queryString:t,groupId:i}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),y=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);