"use strict";(self.webpackChunkswaptoshi_docs=self.webpackChunkswaptoshi_docs||[]).push([[762],{2127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=t(4848),o=t(8453),r=t(1470),i=t(9365);const l={sidebar_position:2,description:"Discover ways to setup swaptoshi-core"},a="Install Swaptoshi Core",c={id:"node/install",title:"Install Swaptoshi Core",description:"Discover ways to setup swaptoshi-core",source:"@site/content/node/install.md",sourceDirName:"node",slug:"/node/install",permalink:"/node/install",draft:!1,unlisted:!1,editUrl:"https://github.com/swaptoshi/swaptoshi-docs/edit/main/content/node/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Discover ways to setup swaptoshi-core"},sidebar:"docsSidebar",previous:{title:"Overview of Swaptoshi Core",permalink:"/node/overview"},next:{title:"Configure Swaptoshi Core",permalink:"/node/configure"}},d={},h=[{value:"Pre-Install",id:"pre-install",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Toolchain components",id:"toolchain-components",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Open Ports",id:"open-ports",level:3},{value:"PM2 (optional)",id:"pm2-optional",level:3},{value:"Installation",id:"installation",level:2},{value:"Run",id:"run",level:2},{value:"Post-installation (optional)",id:"post-installation-optional",level:2},{value:"Enable IPC &amp; WS in the config and set allowed methods",id:"enable-ipc--ws-in-the-config-and-set-allowed-methods",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"install-swaptoshi-core",children:"Install Swaptoshi Core"})}),"\n",(0,s.jsxs)(n.p,{children:["This document explains how to install ",(0,s.jsx)(n.code,{children:"swaptoshi-core"})," on your machine using ",(0,s.jsx)(n.code,{children:"npm"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"pre-install",children:"Pre-Install"}),"\n",(0,s.jsxs)(n.p,{children:["To complete the installation certain prerequisites need to be fulfilled.\nIf you have already performed these, then please proceed to the ",(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})," section."]}),"\n",(0,s.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported Platforms"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ubuntu 20.04 (LTS) x86_64"}),"\n",(0,s.jsx)(n.li,{children:"Ubuntu 22.04 (LTS) x86_64"}),"\n",(0,s.jsx)(n.li,{children:"MacOS x86_64"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Node.js"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"18"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following system requirements are recommended:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Memory"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Machines with a minimum of 8 GB RAM for the Mainnet."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Machines with a minimum of 8 GB RAM for the Testnet."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Storage"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Machines with a minimum of 40 GB HDD."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"These recommendations are derived from the log level settings, in the event that the user needs to increase storage to prevent limited memory access and potential memory-related problems with a node. Furthermore, as more transactions are processed and added to the blockchain, the size of the blockchain increases over time and this directly affects the HDD storage requirements for a blockchain node. Hence, adhering to the above listed requirements is highly recommended"})}),"\n",(0,s.jsx)(n.h3,{id:"toolchain-components",children:"Toolchain components"}),"\n",(0,s.jsx)(n.p,{children:"These are used for compiling dependencies."}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(i.A,{value:"Ubuntu",label:"Ubuntu",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo apt update\nsudo apt install -y git libtool automake autoconf curl build-essential python2-minimal\n"})})}),(0,s.jsxs)(i.A,{value:"MacOS",label:"MacOS",children:[(0,s.jsxs)(n.p,{children:["Ensure that both ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/xcode/",children:"XCode"})," and ",(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," are installed."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install git autoconf automake libtool python2\n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," serves as the underlying engine for code execution."]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsxs)(i.A,{value:"Option A - Node version manager",label:"Option A - Node version manager",default:!0,children:[(0,s.jsxs)(n.p,{children:["It is recommended to use a Node version manager such as ",(0,s.jsx)(n.a,{href:"https://github.com/creationix/nvm",children:"NVM"}),".\nNVM is a bash script that enables the management of multiple active Node.js versions."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install NVM with the following command shown below:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash\n"})}),(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Please note that you may need to restart your terminal session to use the ",(0,s.jsx)(n.code,{children:"nvm"})," command."]}),(0,s.jsxs)(n.p,{children:["Alternatively, you can run the following command to use ",(0,s.jsx)(n.code,{children:"nvm"})," right after executing above installation script:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'export NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion" # This loads nvm bash_completion\n'})}),(0,s.jsxs)(n.p,{children:["Head to ",(0,s.jsx)(n.a,{href:"https://github.com/creationix/nvm",children:"NVM official repository"})," to learn more!"]})]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install the version 18 of Node.js using NVM with the following command shown below:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nvm install 18\nnvm alias default 18\nnvm use default\n"})})]}),(0,s.jsxs)(i.A,{value:"Option B - Node.js package",label:"Option B - Node.js package",children:[(0,s.jsx)(n.p,{children:"If NVM or other package managers are not required, it is possible to install the Node package globally as shown in the following commands below:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Ubuntu"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -\nsudo apt-get install -y nodejs\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"MacOS"})}),(0,s.jsx)(n.p,{children:"For MacOS, please execute the following command below:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install node@18\n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"open-ports",children:"Open Ports"}),"\n",(0,s.jsx)(n.p,{children:"Please ensure, that the necessary ports are open to run Swaptoshi Core as intended."}),"\n",(0,s.jsxs)(n.p,{children:["For example, in case ",(0,s.jsx)(n.a,{href:"https://wiki.ubuntu.com/UncomplicatedFirewall",children:"ufw"})," is used on Ubuntu to manage the firewall settings, the respective ports can be opened as follows:"]}),"\n",(0,s.jsx)(n.p,{children:"Node P2P communication"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ufw allow 7887\n"})}),"\n",(0,s.jsx)(n.p,{children:"Node API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ufw allow 8778\n"})}),"\n",(0,s.jsx)(n.h3,{id:"pm2-optional",children:"PM2 (optional)"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.a,{href:"https://github.com/Unitech/pm2",children:"PM2"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/keymetrics/pm2-logrotate",children:"PM2 Logrotate"})," for managing the start and stop of the application process in the background as shown below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm i -g pm2\npm2 install pm2-logrotate\npm2 set pm2-logrotate:max_size 100M\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Install swaptoshi-core globally using ",(0,s.jsx)(n.code,{children:"npm"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install -g swaptoshi-core\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you'd like to install ",(0,s.jsx)(n.code,{children:"swaptoshi-core"})," by building it from source, visit the official ",(0,s.jsx)(n.a,{href:"https://github.com/swaptoshi/swaptoshi-core",children:"GitHub repository"})," for more details."]})}),"\n",(0,s.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsxs)(i.A,{value:"Using PM2",label:"Using PM2",default:!0,children:[(0,s.jsxs)(n.p,{children:["Create a new file named ",(0,s.jsx)(n.code,{children:"swaptoshi-core.json"}),", and paste following lines:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "swaptoshi-core",\n    "script": "swaptoshi-core start --api-ipc --network testnet --overwrite-config",\n}\n'})}),(0,s.jsx)(n.p,{children:"Then, use pm2 to start swaptoshi-core instance:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pm2 start swaptoshi-core.json\npm2 logs\n"})}),(0,s.jsx)(n.p,{children:"use following command to stop all pm2 process, including swaptoshi-core:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pm2 stop all\n"})})]}),(0,s.jsxs)(i.A,{value:"Without PM2",label:"Without PM2",children:[(0,s.jsx)(n.p,{children:"Run swaptoshi-core and connect to specified network (e.g testnet)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"swaptoshi-core start --api-ipc --network testnet  --overwrite-config\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"post-installation-optional",children:"Post-installation (optional)"}),"\n",(0,s.jsx)(n.h3,{id:"enable-ipc--ws-in-the-config-and-set-allowed-methods",children:"Enable IPC & WS in the config and set allowed methods"}),"\n",(0,s.jsxs)(n.p,{children:["To make use of all the Swaptoshi Core commands, enable IPC in the config. Config usually located in ",(0,s.jsx)(n.code,{children:"~/.klayr/swaptoshi-core/config/config.json"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"rpc": {\n    // Enable RPC communication over \'ipc\' and \'ws\'\n    "modes": ["ipc", "ws"],\n\n    // Set allowed methods, or use wild cards "*" to enable all\n    "allowedMethods": ["generator", "system", "random"],\n\n    // In case `modes` include `ws` then, the following port is used\n    "port": 7887,\n\n    // Change to 0.0.0.0 to connect from a remote server\n    "host": "127.0.0.1"\n},\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And restart your swaptoshi-core instance. Don't forget to add ",(0,s.jsx)(n.code,{children:"--overwrite-config"})," flag to ",(0,s.jsx)(n.code,{children:"start"})," command, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"swaptoshi-core start --api-ipc --network testnet --overwrite-config\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),o=t(4164),r=t(3104),i=t(6347),l=t(205),a=t(7485),c=t(1682),d=t(679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=m({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),f=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),o=l[t].value;o!==s&&(c(n),i(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);