(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[856],{528:function(e,t,i){"use strict";var a=i(113);t.Z=void 0;var r=a(i(5239)),l=i(7458),s=(0,r.default)((0,l.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");t.Z=s},3667:function(e,t,i){"use strict";var a=i(113);t.Z=void 0;var r=a(i(5239)),l=i(7458),s=(0,r.default)((0,l.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=s},5455:function(e,t,i){"use strict";var a=i(113);t.Z=void 0;var r=a(i(5239)),l=i(7458),s=(0,r.default)((0,l.jsx)("path",{d:"M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1 2 6v2h20zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2H2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16l-4-2zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06L19.28 21z"}),"AssuredWorkload");t.Z=s},1259:function(e,t,i){"use strict";var a=i(113);t.Z=void 0;var r=a(i(5239)),l=i(7458),s=(0,r.default)((0,l.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=s},844:function(e,t,i){"use strict";var a=i(113);t.Z=void 0;var r=a(i(5239)),l=i(7458),s=(0,r.default)((0,l.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle");t.Z=s},9636:function(e,t,i){"use strict";var a=i(113);t.Z=void 0;var r=a(i(5239)),l=i(7458),s=(0,r.default)((0,l.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.Z=s},9451:function(e,t,i){"use strict";var a=i(113);t.Z=void 0;var r=a(i(5239)),l=i(7458),s=(0,r.default)((0,l.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"VerifiedUser");t.Z=s},270:function(e,t,i){"use strict";var a=i(513),r=i(7364),l=i(2983),s=i(4517),n=i(4530),c=i(1983),o=i(362),d=i(6410),x=i(6989),h=i(7458);let m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],u=e=>{let{absolute:t,children:i,classes:a,flexItem:r,light:l,orientation:s,textAlign:c,variant:o}=e;return(0,n.Z)({root:["root",t&&"absolute",o,l&&"light","vertical"===s&&"vertical",r&&"flexItem",i&&"withChildren",i&&"vertical"===s&&"withChildrenVertical","right"===c&&"vertical"!==s&&"textAlignRight","left"===c&&"vertical"!==s&&"textAlignLeft"],wrapper:["wrapper","vertical"===s&&"wrapperVertical"]},x.V,a)},p=(0,o.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),v=(0,o.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),f=l.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:l=!1,children:n,className:c,component:o=n?"div":"hr",flexItem:x=!1,light:f=!1,orientation:g="horizontal",role:j="hr"!==o?"separator":void 0,textAlign:A="center",variant:b="fullWidth"}=i,w=(0,a.Z)(i,m),N=(0,r.Z)({},i,{absolute:l,component:o,flexItem:x,light:f,orientation:g,role:j,textAlign:A,variant:b}),y=u(N);return(0,h.jsx)(p,(0,r.Z)({as:o,className:(0,s.Z)(y.root,c),role:j,ref:t,ownerState:N},w,{children:n?(0,h.jsx)(v,{className:y.wrapper,ownerState:N,children:n}):null}))});t.Z=f},6989:function(e,t,i){"use strict";i.d(t,{V:function(){return l}});var a=i(4008),r=i(3934);function l(e){return(0,r.Z)("MuiDivider",e)}let s=(0,a.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=s},2518:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/glasses/[id]",function(){return i(1899)}])},6589:function(e,t){"use strict";t.Z={src:"/designer-glasses/_next/static/media/img.e9c0d415.png",height:410,width:976,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAANlBMVEW0nIJUNiCBXj+om4+1ppavrKa8qI3c1bu4ubPW2c3Ap43EqJatkXjCmn+qhWW1sKBoQCS/wr4JDd57AAAADXRSTlP9pvnuzO/7/Pf9+odmGuY6dgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAACNJREFUeJxjYGfn5GTgYmNi4OPnYODj5RVgYOYQZGXh5mEEAAqHAM2hdJ78AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},1899:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return L},default:function(){return z}});var a=i(7458),r=i(2983),l=i(9157),s=i(6223),n=i(8970),c=i(6589),o=i(5372),d=i(844),x=i(1259),h=i(528),m=i(3667),u=i(5436),p=i.n(u),v=function(e){var t,i,l,s;let{children:n,product:c,id:u}=e,[v,f]=(0,r.useState)(0),g=(null==c?void 0:c.images.length)||0;return(0,a.jsxs)("div",{className:"flex flex-col pt-6 pb-16 w-[100%]",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center p-4 md:justify-around md:flex-row w-[100%] md:pl-28 md:p-16 md:pr-72",children:[(0,a.jsxs)("div",{className:" gap-4 flex-col w-[100%] aspect-square md:p-8 flex items-center justify-center bg-white md:w-[600px]",children:[(0,a.jsxs)("div",{className:"flex-1 w-[100%] h-[100%] flex flex-col justify-between",style:{backgroundImage:"url(".concat(null==c?void 0:c.images[v],")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},children:[(0,a.jsxs)("div",{className:"w-[100%] flex justify-between px-4 py-2",children:[(0,a.jsx)("div",{className:"bg-danger-200 w-28 text-secondaryMain font-semibold text-opacity-70 text-center px-2 py-1 rounded-md ",children:null==c?void 0:c.advertisment.type.toLocaleUpperCase()}),(0,a.jsx)("div",{className:"cursor-pointer opacity-70",children:(0,a.jsx)(o.Z,{fontSize:"large",sx:e=>({color:e.paletes.secondary})})})]})," ",(0,a.jsxs)("div",{className:"w-[100%] flex justify-between",children:[(0,a.jsxs)("div",{className:"cursor-pointer",onClick:()=>f(e=>(e-1+g)%g),children:[" ",(0,a.jsx)(h.Z,{})," "]}),(0,a.jsx)("div",{className:"cursor-pointer",onClick:()=>f(e=>(e+1)%g),children:(0,a.jsx)(m.Z,{})})]}),(0,a.jsx)("div",{className:"flex w-[100%] justify-center pb-4"})]}),(0,a.jsx)("div",{className:"images flex justify-evenly gap-6 pb-3 w-[100%]",children:null==c?void 0:c.images.map((e,t)=>{if(t<=2)return(0,a.jsx)("div",{onClick:e=>{f(t)},className:"cursor-pointer w-36 h-20 flex flex-col justify-between",style:{backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}},t)})})]}),(0,a.jsxs)("div",{className:"flex text-2xl justify-center items-center flex-col",children:[(0,a.jsx)("div",{className:"text-tertiaryMain font-bold",children:null==c?void 0:c.name}),(0,a.jsx)("div",{children:null==c?void 0:null===(t=c.colors)||void 0===t?void 0:t.map((e,t)=>t<=5?(0,a.jsx)(d.Z,{style:{color:e}},t):"")}),(0,a.jsx)("div",{className:"text-secondaryMain text-lg font-bold",children:null==c?void 0:null===(i=c.prices)||void 0===i?void 0:i.map((e,t)=>0==t?e:"")}),(0,a.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,a.jsx)("h1",{className:"text-base font-bold text-secondaryMain",children:"SIZES :"})," ",null==c?void 0:null===(l=c.sku)||void 0===l?void 0:l.map((e,t)=>(0,a.jsx)("div",{className:"font-bold text-opacity-75 text-sm text-secondaryMain flex",children:e.toLocaleUpperCase()},t))]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"text-danger-700 text-lg font-bold mt-4 text-center",children:"PRICES INCLUDES"})," ",null==c?void 0:null===(s=c.warranties)||void 0===s?void 0:s.map((e,t)=>(0,a.jsxs)("div",{className:" text-base font-bold text-secondaryMain text-opacity-80",children:[(0,a.jsx)(x.Z,{fontSize:"small",color:"info"})," ",e]},t))]}),(0,a.jsx)("div",{className:"mt-8 flex gap-4 flex-col",children:[{name:"SELECT LENSES",route:"lenses",link:e=>{let{href:t,text:i}=e;return(0,a.jsx)(p(),{href:t,children:i})}},{route:"lenses",name:"BUY FRAME ONLY",link:e=>{let{href:t,text:i}=e;return(0,a.jsx)(p(),{href:t,children:i})}}].map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"text-base rounded py-1 text-primaryMain font-bold bg-tertiaryMain block min-w-[200px]",children:(0,a.jsx)(e.link,{href:"/glasses/".concat(u,"/").concat(e.route),text:e.name})})},t))})]})]}),r.Children.toArray(n).map((e,t)=>(0,a.jsx)("div",{children:e},t))]})},f=i(5455),g=i(9636),j=i(9451),A=i(6247),b=i(7038),w=i(270);function N(e){let{img:t,label:i,value:r}=e;return(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("img",{height:60,width:60,src:t,alt:i})," ",(0,a.jsxs)("div",{className:"text-sm",children:[i," :"]})," ",(0,a.jsxs)("span",{children:[" ",r]})]})}function y(e){let{title:t,productMeasurement:i}=e;return(0,a.jsxs)("ul",{className:"list-disc",children:[" ",(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsxs)("h5",{className:"text-sm font-semibold",children:[t,": "]})," ",(0,a.jsxs)("div",{children:[" ",i.map((e,t)=>(0,a.jsxs)("span",{className:"text-sm",children:[" ",e.toUpperCase()+"".concat(t<i.length-1?",":"")]},t))]})]})})]})}var M={src:"/designer-glasses/_next/static/media/lense width.d13bf401.png",height:202,width:641,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEU9M51MaXH6115qW47//zv10mDPsm382V7cvWj31F/41V/iwmb82F7m5gxeAAAAC3RSTlM9AOoCD4Kiy7TOmha0GnEAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAiSURBVHicBcGBAQAwBASx46kW+8/bhDoA19kNU8zgLcnyfQXaAHY8WIYsAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3};function Z(e){let{product:t,orientation:i,upper:r,lower:l,className:s}=e,n=[{img:M.src,label:"Lense Width",value:t.lensWidth},{img:M.src,label:"Lense Height",value:t.lensHeight},{img:M.src,label:"Bridge Width",value:t.bridgeHeight},{img:M.src,label:"Temple Lenght",value:t.templatelenght}];return(0,a.jsxs)("div",{className:"".concat(s," w-[100%] flex-1"),children:[(0,a.jsxs)("div",{className:"".concat(r.className," w-[100%] flex flex-col flex-wrap gap-1 "),children:[(0,a.jsx)(y,{title:"genders",productMeasurement:t.genders}),(0,a.jsx)(y,{title:"Sizes",productMeasurement:t.sku}),(0,a.jsx)(y,{title:"Shapes",productMeasurement:t.shape}),(0,a.jsx)(y,{title:"Frames",productMeasurement:t.frameType}),(0,a.jsx)(y,{title:"Biofocal",productMeasurement:t.biofocal?t.biofocal:["Yes"]}),(0,a.jsx)(y,{title:"Manufacturer",productMeasurement:t.brands}),(0,a.jsx)(y,{title:"Prescription Range",productMeasurement:[t.prescriptionRange.start+" , "+t.prescriptionRange.end]})]}),(0,a.jsx)(w.Z,{orientation:i,flexItem:!0}),(0,a.jsxs)("div",{className:"".concat(l.className," w-[100%] flex flex-col gap-2"),children:[(0,a.jsx)("h1",{children:"Frame & Measurements: mm/in"}),(0,a.jsx)("div",{className:"grid grid-rows-2 grid-cols-2",children:n.map((e,t)=>{var i;return(0,a.jsx)("div",{children:(0,a.jsx)(N,{img:e.img,label:e.label,value:null===(i=e.value)||void 0===i?void 0:i.toString()})},t)})})]})]})}function C(e){let{product:t}=e,[i,l]=r.useState(0),s=(e,t)=>{l(t)};return(0,a.jsxs)("div",{className:"flex flex-col overflow-hidden w-[100%]",children:[(0,a.jsxs)(b.Z,{className:"",variant:"scrollable",value:i,onChange:s,children:[(0,a.jsx)(A.Z,{label:"Description"}),(0,a.jsx)(A.Z,{label:"Frame & Measurements"})]}),(0,a.jsxs)("div",{className:"p-16 overflow-hidden text-opacity-75 min-h-[340px] w-[100%] rounded-2xl bg-opacity-30 mt-8 bg-tertiaryMain",children:[0===i&&(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h6",{className:"text-secondaryMain font-bold",children:["About ",null==t?void 0:t.name]}),(0,a.jsxs)("p",{className:"text-secondaryMain ",children:[" ",null==t?void 0:t.description]})]}),1===i&&(0,a.jsxs)("div",{className:"h-[100%]",children:[(0,a.jsx)(Z,{className:"text-secondaryMain hidden text-justify sm:flex-row sm:flex h-[100%]",upper:{className:"pr-3 text-justify"},lower:{className:"pl-3 text-justify"},orientation:"vertical",product:t}),(0,a.jsx)(Z,{className:"text-secondaryMain flex flex-col text-justify sm:flex-row sm:hidden h-[100%]",upper:{className:"pb-3 text-justify"},lower:{className:"pt-3 text-justify"},orientation:"horizontal",product:t})]})]})]})}let S=[(0,a.jsx)(f.Z,{className:"text-primaryMain"},0),(0,a.jsx)(g.Z,{className:"text-primaryMain"},1),(0,a.jsx)(j.Z,{className:"text-primaryMain"},1)],k=e=>{let{product:t,id:i}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(n.w,{navitems:s.te,logo:c.Z}),(0,a.jsxs)(v,{product:t,id:i,children:[(0,a.jsx)("div",{className:"w-[100%] bg-tertiaryMain justify-evenly bg-opacity-30 flex flex-wrap items-center md:h-[104px] p-3 text-start",children:(null==t?void 0:t.promises)&&Object.entries(t.promises).map((e,t)=>{let[i,r]=e;return(0,a.jsxs)("div",{className:"text-secondaryMain font-bold flex items-center justify-center gap-1 ",children:[(0,a.jsxs)("div",{className:"h-[100%] flex text-lg items-baseline",children:[" ",S[t]]}),(0,a.jsxs)("div",{className:"h-[100%] flex gap-1 mt-1",children:[(0,a.jsxs)("div",{children:[" ",r.status.toLocaleUpperCase()]}),(0,a.jsxs)("div",{className:"h-[100%]",children:[" ",r.endstring]})]})]},t)})}),(0,a.jsx)("div",{className:"flex mt-14 px-[20%]",children:(0,a.jsx)(C,{product:t})})]}),(0,a.jsx)(l.$,{logo:"",title:"",social:[],signupLink:""})]})};var L=!0,z=k}},function(e){e.O(0,[58,659,834,774,888,179],function(){return e(e.s=2518)}),_N_E=e.O()}]);