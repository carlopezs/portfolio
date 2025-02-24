import{a as Dt}from"./chunk-4SLTF46U.js";import{d as Ft}from"./chunk-UYGOPLRN.js";import"./chunk-HYBVWSXL.js";import{h as ye,j as Ot,k as ie}from"./chunk-ZN54TIJG.js";import{$b as Ue,Ab as u,Bb as m,Cb as v,Hb as Re,Jb as Pt,Sb as h,Ta as N,Tb as O,Ub as ge,Vb as Nt,Xa as b,Yb as We,Z as Le,Zb as He,_ as St,_b as Ye,cb as _,da as ae,gb as k,hb as It,ic as F,mb as At,sb as w,wa as K,wb as Et,xb as H,yb as Y,zb as U}from"./chunk-75NALQCK.js";function Gn(e,t,n){return(t=Xn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tt(Object(n),!0).forEach(function(a){Gn(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Jn(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xn(e){var t=Jn(e,"string");return typeof t=="symbol"?t:t+""}var Mt=()=>{},mt={},sn={},ln=null,cn={mark:Mt,measure:Mt};try{typeof window<"u"&&(mt=window),typeof document<"u"&&(sn=document),typeof MutationObserver<"u"&&(ln=MutationObserver),typeof performance<"u"&&(cn=performance)}catch{}var{userAgent:jt=""}=mt.navigator||{},B=mt,x=sn,_t=ln,be=cn,so=!!B.document,R=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",fn=~jt.indexOf("MSIE")||~jt.indexOf("Trident/"),qn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Kn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,un={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",Se="duotone",Zn="sharp",ea="sharp-duotone",dn=[C,Se,Zn,ea],ta={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},na={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},aa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ia={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},oa=["fak","fa-kit","fakd","fa-kit-duotone"],zt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ra=["kit"],sa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},la=["fak","fakd"],ca={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Lt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ua=["fak","fa-kit","fakd","fa-kit-duotone"],ma={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},da={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},pa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Xe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ha=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],qe=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...fa,...ha],ga=["solid","regular","light","thin","duotone","brands"],pn=[1,2,3,4,5,6,7,8,9,10],ya=pn.concat([11,12,13,14,15,16,17,18,19,20]),ba=[...Object.keys(pa),...ga,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY].concat(pn.map(e=>"".concat(e,"x"))).concat(ya.map(e=>"w-".concat(e))),va={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},z="___FONT_AWESOME___",Ke=16,hn="fa",gn="svg-inline--fa",Z="data-fa-i2svg",Qe="data-fa-pseudo-element",xa="data-fa-pseudo-element-pending",dt="data-prefix",pt="data-icon",Rt="fontawesome-i2svg",wa="async",ka=["HTML","HEAD","STYLE","SCRIPT"],yn=(()=>{try{return!0}catch{return!1}})();function pe(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[C]}})}var bn=s({},un);bn[C]=s(s(s(s({},{"fa-duotone":"duotone"}),un[C]),zt.kit),zt["kit-duotone"]);var Ca=pe(bn),Ze=s({},ia);Ze[C]=s(s(s(s({},{duotone:"fad"}),Ze[C]),Lt.kit),Lt["kit-duotone"]);var Wt=pe(Ze),et=s({},Xe);et[C]=s(s({},et[C]),ca.kit);var ht=pe(et),tt=s({},da);tt[C]=s(s({},tt[C]),sa.kit);var lo=pe(tt),Sa=qn,vn="fa-layers-text",Ia=Kn,Aa=s({},ta),co=pe(Aa),Ea=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$e=Qn,Pa=[...ra,...ba],fe=B.FontAwesomeConfig||{};function Na(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oa(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t,i=Oa(Na(n));i!=null&&(fe[a]=i)});var xn={styleDefault:"solid",familyDefault:C,cssPrefix:hn,replacementClass:gn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fe.familyPrefix&&(fe.cssPrefix=fe.familyPrefix);var se=s(s({},xn),fe);se.autoReplaceSvg||(se.observeMutations=!1);var c={};Object.keys(xn).forEach(e=>{Object.defineProperty(c,e,{enumerable:!0,set:function(t){se[e]=t,ue.forEach(n=>n(c))},get:function(){return se[e]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(e){se.cssPrefix=e,ue.forEach(t=>t(c))},get:function(){return se.cssPrefix}});B.FontAwesomeConfig=c;var ue=[];function Fa(e){return ue.push(e),()=>{ue.splice(ue.indexOf(e),1)}}var $=Ke,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Da(e){if(!e||!R)return;let t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;let n=x.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let o=n[i],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=o)}return x.head.insertBefore(t,a),e}var Ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function me(){let e=12,t="";for(;e-- >0;)t+=Ta[Math.random()*62|0];return t}function le(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gt(e){return e.classList?le(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function wn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ma(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(wn(e[n]),'" '),"").trim()}function Ie(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function yt(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function ja(e){let{transform:t,containerWidth:n,iconWidth:a}=e,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(o," ").concat(r," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:d,path:f}}function _a(e){let{transform:t,width:n=Ke,height:a=Ke,startCentered:i=!1}=e,o="";return i&&fn?o+="translate(".concat(t.x/$-n/2,"em, ").concat(t.y/$-a/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):o+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),o+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var za=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function kn(){let e=hn,t=gn,n=c.cssPrefix,a=c.replacementClass,i=za;if(n!==e||a!==t){let o=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(l,".".concat(a))}return i}var Ht=!1;function Be(){c.autoAddCss&&!Ht&&(Da(kn()),Ht=!0)}var La={mixout(){return{dom:{css:kn,insertCss:Be}}},hooks(){return{beforeDOMElementCreation(){Be()},beforeI2svg(){Be()}}}},L=B||{};L[z]||(L[z]={});L[z].styles||(L[z].styles={});L[z].hooks||(L[z].hooks={});L[z].shims||(L[z].shims=[]);var T=L[z],Cn=[],Sn=function(){x.removeEventListener("DOMContentLoaded",Sn),ke=1,Cn.map(e=>e())},ke=!1;R&&(ke=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ke||x.addEventListener("DOMContentLoaded",Sn));function Ra(e){R&&(ke?setTimeout(e,0):Cn.push(e))}function he(e){let{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?wn(e):"<".concat(t," ").concat(Ma(n),">").concat(a.map(he).join(""),"</").concat(t,">")}function Yt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Wa=function(t,n){return function(a,i,o,r){return t.call(n,a,i,o,r)}},Ve=function(t,n,a,i){var o=Object.keys(t),r=o.length,l=i!==void 0?Wa(n,i):n,d,f,p;for(a===void 0?(d=1,p=t[o[0]]):(d=0,p=a);d<r;d++)f=o[d],p=l(p,t[f],f,t);return p};function Ha(e){let t=[],n=0,a=e.length;for(;n<a;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){let o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function nt(e){let t=Ha(e);return t.length===1?t[0].toString(16):null}function Ya(e,t){let n=e.length,a=e.charCodeAt(t),i;return a>=55296&&a<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function Ut(e){return Object.keys(e).reduce((t,n)=>{let a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function at(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,i=Ut(t);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(e,Ut(t)):T.styles[e]=s(s({},T.styles[e]||{}),i),e==="fas"&&at("fa",t)}var{styles:de,shims:Ua}=T,In=Object.keys(ht),$a=In.reduce((e,t)=>(e[t]=Object.keys(ht[t]),e),{}),bt=null,An={},En={},Pn={},Nn={},On={};function Ba(e){return~Pa.indexOf(e)}function Va(e,t){let n=t.split("-"),a=n[0],i=n.slice(1).join("-");return a===e&&i!==""&&!Ba(i)?i:null}var Fn=()=>{let e=a=>Ve(de,(i,o,r)=>(i[r]=Ve(o,a,{}),i),{});An=e((a,i,o)=>(i[3]&&(a[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=o}),a)),En=e((a,i,o)=>(a[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=o}),a)),On=e((a,i,o)=>{let r=i[2];return a[o]=o,r.forEach(l=>{a[l]=o}),a});let t="far"in de||c.autoFetchSvg,n=Ve(Ua,(a,i)=>{let o=i[0],r=i[1],l=i[2];return r==="far"&&!t&&(r="fas"),typeof o=="string"&&(a.names[o]={prefix:r,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:r,iconName:l}),a},{names:{},unicodes:{}});Pn=n.names,Nn=n.unicodes,bt=Ae(c.styleDefault,{family:c.familyDefault})};Fa(e=>{bt=Ae(e.styleDefault,{family:c.familyDefault})});Fn();function vt(e,t){return(An[e]||{})[t]}function Ga(e,t){return(En[e]||{})[t]}function Q(e,t){return(On[e]||{})[t]}function Dn(e){return Pn[e]||{prefix:null,iconName:null}}function Ja(e){let t=Nn[e],n=vt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function V(){return bt}var Tn=()=>({prefix:null,iconName:null,rest:[]});function Xa(e){let t=C,n=In.reduce((a,i)=>(a[i]="".concat(c.cssPrefix,"-").concat(i),a),{});return dn.forEach(a=>{(e.includes(n[a])||e.some(i=>$a[a].includes(i)))&&(t=a)}),t}function Ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=C}=t,a=Ca[n][e];if(n===Se&&!e)return"fad";let i=Wt[n][e]||Wt[n][a],o=e in T.styles?e:null;return i||o||null}function qa(e){let t=[],n=null;return e.forEach(a=>{let i=Va(c.cssPrefix,a);i?n=i:a&&t.push(a)}),{iconName:n,rest:t}}function $t(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=t,a=null,i=qe.concat(ua),o=$t(e.filter(y=>i.includes(y))),r=$t(e.filter(y=>!qe.includes(y))),l=o.filter(y=>(a=y,!mn.includes(y))),[d=null]=l,f=Xa(o),p=s(s({},qa(r)),{},{prefix:Ae(d,{family:f})});return s(s(s({},p),ei({values:e,family:f,styles:de,config:c,canonical:p,givenPrefix:a})),Ka(n,a,p))}function Ka(e,t,n){let{prefix:a,iconName:i}=n;if(e||!a||!i)return{prefix:a,iconName:i};let o=t==="fa"?Dn(i):{},r=Q(a,i);return i=o.iconName||r||i,a=o.prefix||a,a==="far"&&!de.far&&de.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var Qa=dn.filter(e=>e!==C||e!==Se),Za=Object.keys(Xe).filter(e=>e!==C).map(e=>Object.keys(Xe[e])).flat();function ei(e){let{values:t,family:n,canonical:a,givenPrefix:i="",styles:o={},config:r={}}=e,l=n===Se,d=t.includes("fa-duotone")||t.includes("fad"),f=r.familyDefault==="duotone",p=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(d||f||p)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Qa.includes(n)&&(Object.keys(o).find(g=>Za.includes(g))||r.autoFetchSvg)){let g=aa.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=Q(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=V()||"fas"),a}var it=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]=s(s({},this.definitions[o]||{}),i[o]),at(o,i[o]);let r=ht[C][o];r&&at(r,i[o]),Fn()})}reset(){this.definitions={}}_pullDefinitions(t,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{let{prefix:o,iconName:r,icon:l}=a[i],d=l[2];t[o]||(t[o]={}),d.length>0&&d.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][r]=l}),t}},Bt=[],oe={},re={},ti=Object.keys(re);function ni(e,t){let{mixoutsTo:n}=t;return Bt=e,oe={},Object.keys(re).forEach(a=>{ti.indexOf(a)===-1&&delete re[a]}),Bt.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(r=>{n[o]||(n[o]={}),n[o][r]=i[o][r]})}),a.hooks){let o=a.hooks();Object.keys(o).forEach(r=>{oe[r]||(oe[r]=[]),oe[r].push(o[r])})}a.provides&&a.provides(re)}),n}function ot(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(oe[e]||[]).forEach(r=>{t=r.apply(null,[t,...a])}),t}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(oe[e]||[]).forEach(o=>{o.apply(null,n)})}function G(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return re[e]?re[e].apply(null,t):void 0}function rt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e,n=e.prefix||V();if(t)return t=Q(n,t)||t,Yt(Mn.definitions,n,t)||Yt(T.styles,n,t)}var Mn=new it,ai=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,ee("noAuto")},ii={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(ee("beforeI2svg",e),G("pseudoElements2svg",e),G("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Ra(()=>{ri({autoReplaceSvgRoot:t}),ee("watch",e)})}},oi={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ae(e[0]);return{prefix:n,iconName:Q(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(c.cssPrefix,"-"))>-1||e.match(Sa))){let t=Ee(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||V(),iconName:Q(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){let t=V();return{prefix:t,iconName:Q(t,e)||e}}}},A={noAuto:ai,config:c,dom:ii,parse:oi,library:Mn,findIconDefinition:rt,toHtml:he},ri=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=x}=e;(Object.keys(T.styles).length>0||c.autoFetchSvg)&&R&&c.autoReplaceSvg&&A.dom.i2svg({node:t})};function Pe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>he(n))}}),Object.defineProperty(e,"node",{get:function(){if(!R)return;let n=x.createElement("div");return n.innerHTML=e.html,n.children}}),e}function si(e){let{children:t,main:n,mask:a,attributes:i,styles:o,transform:r}=e;if(yt(r)&&n.found&&!a.found){let{width:l,height:d}=n,f={x:l/d/2,y:.5};i.style=Ie(s(s({},o),{},{"transform-origin":"".concat(f.x+r.x/16,"em ").concat(f.y+r.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function li(e){let{prefix:t,iconName:n,children:a,attributes:i,symbol:o}=e,r=o===!0?"".concat(t,"-").concat(c.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},i),{},{id:r}),children:a}]}]}function xt(e){let{icons:{main:t,mask:n},prefix:a,iconName:i,transform:o,symbol:r,title:l,maskId:d,titleId:f,extra:p,watchable:y=!1}=e,{width:g,height:S}=n.found?n:t,W=la.includes(a),q=[c.replacementClass,i?"".concat(c.cssPrefix,"-").concat(i):""].filter(ne=>p.classes.indexOf(ne)===-1).filter(ne=>ne!==""||!!ne).concat(p.classes).join(" "),E={children:[],attributes:s(s({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:q,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(S)})},j=W&&!~p.classes.indexOf("fa-fw")?{width:"".concat(g/S*16*.0625,"em")}:{};y&&(E.attributes[Z]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||me())},children:[l]}),delete E.attributes.title);let I=s(s({},E),{},{prefix:a,iconName:i,main:t,mask:n,maskId:d,transform:o,symbol:r,styles:s(s({},j),p.styles)}),{children:P,attributes:te}=n.found&&t.found?G("generateAbstractMask",I)||{children:[],attributes:{}}:G("generateAbstractIcon",I)||{children:[],attributes:{}};return I.children=P,I.attributes=te,r?li(I):si(I)}function Vt(e){let{content:t,width:n,height:a,transform:i,title:o,extra:r,watchable:l=!1}=e,d=s(s(s({},r.attributes),o?{title:o}:{}),{},{class:r.classes.join(" ")});l&&(d[Z]="");let f=s({},r.styles);yt(i)&&(f.transform=_a({transform:i,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let p=Ie(f);p.length>0&&(d.style=p);let y=[];return y.push({tag:"span",attributes:d,children:[t]}),o&&y.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),y}function ci(e){let{content:t,title:n,extra:a}=e,i=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Ie(a.styles);o.length>0&&(i.style=o);let r=[];return r.push({tag:"span",attributes:i,children:[t]}),n&&r.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),r}var{styles:Ge}=T;function st(e){let t=e[0],n=e[1],[a]=e.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat($e.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat($e.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat($e.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:i}}var fi={found:!1,width:512,height:512};function ui(e,t){!yn&&!c.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function lt(e,t){let n=t;return t==="fa"&&c.styleDefault!==null&&(t=V()),new Promise((a,i)=>{if(n==="fa"){let o=Dn(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ge[t]&&Ge[t][e]){let o=Ge[t][e];return a(st(o))}ui(e,t),a(s(s({},fi),{},{icon:c.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}var Gt=()=>{},ct=c.measurePerformance&&be&&be.mark&&be.measure?be:{mark:Gt,measure:Gt},ce='FA "6.7.2"',mi=e=>(ct.mark("".concat(ce," ").concat(e," begins")),()=>jn(e)),jn=e=>{ct.mark("".concat(ce," ").concat(e," ends")),ct.measure("".concat(ce," ").concat(e),"".concat(ce," ").concat(e," begins"),"".concat(ce," ").concat(e," ends"))},wt={begin:mi,end:jn},xe=()=>{};function Jt(e){return typeof(e.getAttribute?e.getAttribute(Z):null)=="string"}function di(e){let t=e.getAttribute?e.getAttribute(dt):null,n=e.getAttribute?e.getAttribute(pt):null;return t&&n}function pi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(c.replacementClass)}function hi(){return c.autoReplaceSvg===!0?we.replace:we[c.autoReplaceSvg]||we.replace}function gi(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function yi(e){return x.createElement(e)}function _n(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=e.tag==="svg"?gi:yi}=t;if(typeof e=="string")return x.createTextNode(e);let a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){a.appendChild(_n(o,{ceFn:n}))}),a}function bi(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var we={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(_n(n),t)}),t.getAttribute(Z)===null&&c.keepOriginalSource){let n=x.createComment(bi(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~gt(t).indexOf(c.replacementClass))return we.replace(e);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let o=n[0].attributes.class.split(" ").reduce((r,l)=>(l===c.replacementClass||l.match(a)?r.toSvg.push(l):r.toNode.push(l),r),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}let i=n.map(o=>he(o)).join(`
`);t.setAttribute(Z,""),t.innerHTML=i}};function Xt(e){e()}function zn(e,t){let n=typeof t=="function"?t:xe;if(e.length===0)n();else{let a=Xt;c.mutateApproach===wa&&(a=B.requestAnimationFrame||Xt),a(()=>{let i=hi(),o=wt.begin("mutate");e.map(i),o(),n()})}}var kt=!1;function Ln(){kt=!0}function ft(){kt=!1}var Ce=null;function qt(e){if(!_t||!c.observeMutations)return;let{treeCallback:t=xe,nodeCallback:n=xe,pseudoElementsCallback:a=xe,observeMutationsRoot:i=x}=e;Ce=new _t(o=>{if(kt)return;let r=V();le(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Jt(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Jt(l.target)&&~Ea.indexOf(l.attributeName))if(l.attributeName==="class"&&di(l.target)){let{prefix:d,iconName:f}=Ee(gt(l.target));l.target.setAttribute(dt,d||r),f&&l.target.setAttribute(pt,f)}else pi(l.target)&&n(l.target)})}),R&&Ce.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function vi(){Ce&&Ce.disconnect()}function xi(e){let t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((a,i)=>{let o=i.split(":"),r=o[0],l=o.slice(1);return r&&l.length>0&&(a[r]=l.join(":").trim()),a},{})),n}function wi(e){let t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",i=Ee(gt(e));return i.prefix||(i.prefix=V()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=Ga(i.prefix,e.innerText)||vt(i.prefix,nt(e.innerText))),!i.iconName&&c.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function ki(e){let t=le(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return c.autoA11y&&(n?t["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||me()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ci(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:i}=wi(e),o=ki(e),r=ot("parseNodeAttributes",{},e),l=t.styleParser?xi(e):[];return s({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},r)}var{styles:Si}=T;function Rn(e){let t=c.autoReplaceSvg==="nest"?Kt(e,{styleParser:!1}):Kt(e);return~t.extra.classes.indexOf(vn)?G("generateLayersText",e,t):G("generateSvgReplacementMutation",e,t)}function Ii(){return[...oa,...qe]}function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();let n=x.documentElement.classList,a=p=>n.add("".concat(Rt,"-").concat(p)),i=p=>n.remove("".concat(Rt,"-").concat(p)),o=c.autoFetchSvg?Ii():mn.concat(Object.keys(Si));o.includes("fa")||o.push("fa");let r=[".".concat(vn,":not([").concat(Z,"])")].concat(o.map(p=>".".concat(p,":not([").concat(Z,"])"))).join(", ");if(r.length===0)return Promise.resolve();let l=[];try{l=le(e.querySelectorAll(r))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let d=wt.begin("onTree"),f=l.reduce((p,y)=>{try{let g=Rn(y);g&&p.push(g)}catch(g){yn||g.name==="MissingIcon"&&console.error(g)}return p},[]);return new Promise((p,y)=>{Promise.all(f).then(g=>{zn(g,()=>{a("active"),a("complete"),i("pending"),typeof t=="function"&&t(),d(),p()})}).catch(g=>{d(),y(g)})})}function Ai(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rn(e).then(n=>{n&&zn([n],t)})}function Ei(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:rt(t||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:rt(i||{})),e(a,s(s({},n),{},{mask:i}))}}var Pi=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=D,symbol:a=!1,mask:i=null,maskId:o=null,title:r=null,titleId:l=null,classes:d=[],attributes:f={},styles:p={}}=t;if(!e)return;let{prefix:y,iconName:g,icon:S}=e;return Pe(s({type:"icon"},e),()=>(ee("beforeDOMElementCreation",{iconDefinition:e,params:t}),c.autoA11y&&(r?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||me()):(f["aria-hidden"]="true",f.focusable="false")),xt({icons:{main:st(S),mask:i?st(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:g,transform:s(s({},D),n),symbol:a,title:r,maskId:o,titleId:l,extra:{attributes:f,styles:p,classes:d}})))},Ni={mixout(){return{icon:Ei(Pi)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Qt,e.nodeCallback=Ai,e}}},provides(e){e.i2svg=function(t){let{node:n=x,callback:a=()=>{}}=t;return Qt(n,a)},e.generateSvgReplacementMutation=function(t,n){let{iconName:a,title:i,titleId:o,prefix:r,transform:l,symbol:d,mask:f,maskId:p,extra:y}=n;return new Promise((g,S)=>{Promise.all([lt(a,r),f.iconName?lt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(W=>{let[q,E]=W;g([t,xt({icons:{main:q,mask:E},prefix:r,iconName:a,transform:l,symbol:d,maskId:p,title:i,titleId:o,extra:y,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:i,transform:o,styles:r}=t,l=Ie(r);l.length>0&&(a.style=l);let d;return yt(o)&&(d=G("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(d||i.icon),{children:n,attributes:a}}}},Oi={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Pe({type:"layer"},()=>{ee("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(i=>{Array.isArray(i)?i.map(o=>{a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Fi={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:i={},styles:o={}}=t;return Pe({type:"counter",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),ci({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},Di={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=D,title:a=null,classes:i=[],attributes:o={},styles:r={}}=t;return Pe({type:"text",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),Vt({content:e,transform:s(s({},D),n),title:a,extra:{attributes:o,styles:r,classes:["".concat(c.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){let{title:a,transform:i,extra:o}=n,r=null,l=null;if(fn){let d=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();r=f.width/d,l=f.height/d}return c.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Vt({content:t.innerHTML,width:r,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ti=new RegExp('"',"ug"),Zt=[1105920,1112319],en=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),na),va),ma),ut=Object.keys(en).reduce((e,t)=>(e[t.toLowerCase()]=en[t],e),{}),Mi=Object.keys(ut).reduce((e,t)=>{let n=ut[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ji(e){let t=e.replace(Ti,""),n=Ya(t,0),a=n>=Zt[0]&&n<=Zt[1],i=t.length===2?t[0]===t[1]:!1;return{value:nt(i?t[0]:t),isSecondary:a||i}}function _i(e,t){let n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),i=isNaN(a)?"normal":a;return(ut[n]||{})[i]||Mi[n]}function tn(e,t){let n="".concat(xa).concat(t.replace(":","-"));return new Promise((a,i)=>{if(e.getAttribute(n)!==null)return a();let r=le(e.children).filter(g=>g.getAttribute(Qe)===t)[0],l=B.getComputedStyle(e,t),d=l.getPropertyValue("font-family"),f=d.match(Ia),p=l.getPropertyValue("font-weight"),y=l.getPropertyValue("content");if(r&&!f)return e.removeChild(r),a();if(f&&y!=="none"&&y!==""){let g=l.getPropertyValue("content"),S=_i(d,p),{value:W,isSecondary:q}=ji(g),E=f[0].startsWith("FontAwesome"),j=vt(S,W),I=j;if(E){let P=Ja(W);P.iconName&&P.prefix&&(j=P.iconName,S=P.prefix)}if(j&&!q&&(!r||r.getAttribute(dt)!==S||r.getAttribute(pt)!==I)){e.setAttribute(n,I),r&&e.removeChild(r);let P=Ci(),{extra:te}=P;te.attributes[Qe]=t,lt(j,S).then(ne=>{let Bn=xt(s(s({},P),{},{icons:{main:ne,mask:Tn()},prefix:S,iconName:I,extra:te,watchable:!0})),ze=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ze,e.firstChild):e.appendChild(ze),ze.outerHTML=Bn.map(Vn=>he(Vn)).join(`
`),e.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function zi(e){return Promise.all([tn(e,"::before"),tn(e,"::after")])}function Li(e){return e.parentNode!==document.head&&!~ka.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function nn(e){if(R)return new Promise((t,n)=>{let a=le(e.querySelectorAll("*")).filter(Li).map(zi),i=wt.begin("searchPseudoElements");Ln(),Promise.all(a).then(()=>{i(),ft(),t()}).catch(()=>{i(),ft(),n()})})}var Ri={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=nn,e}}},provides(e){e.pseudoElements2svg=function(t){let{node:n=x}=t;c.searchPseudoElements&&nn(n)}}},an=!1,Wi={mixout(){return{dom:{unwatch(){Ln(),an=!0}}}},hooks(){return{bootstrap(){qt(ot("mutationObserverCallbacks",{}))},noAuto(){vi()},watch(e){let{observeMutationsRoot:t}=e;an?ft():qt(ot("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},on=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{let i=a.toLowerCase().split("-"),o=i[0],r=i.slice(1).join("-");if(o&&r==="h")return n.flipX=!0,n;if(o&&r==="v")return n.flipY=!0,n;if(r=parseFloat(r),isNaN(r))return n;switch(o){case"grow":n.size=n.size+r;break;case"shrink":n.size=n.size-r;break;case"left":n.x=n.x-r;break;case"right":n.x=n.x+r;break;case"up":n.y=n.y-r;break;case"down":n.y=n.y+r;break;case"rotate":n.rotate=n.rotate+r;break}return n},t)},Hi={mixout(){return{parse:{transform:e=>on(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-transform");return n&&(e.transform=on(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:i,iconWidth:o}=t,r={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(d," ").concat(f)},y={transform:"translate(".concat(o/2*-1," -256)")},g={outer:r,inner:p,path:y};return{tag:"g",attributes:s({},g.outer),children:[{tag:"g",attributes:s({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),g.path)}]}]}}}},Je={x:0,y:0,width:"100%",height:"100%"};function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Yi(e){return e.tag==="g"?e.children:[e]}var Ui={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-mask"),a=n?Ee(n.split(" ").map(i=>i.trim())):Tn();return a.prefix||(a.prefix=V()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:i,mask:o,maskId:r,transform:l}=t,{width:d,icon:f}=i,{width:p,icon:y}=o,g=ja({transform:l,containerWidth:p,iconWidth:d}),S={tag:"rect",attributes:s(s({},Je),{},{fill:"white"})},W=f.children?{children:f.children.map(rn)}:{},q={tag:"g",attributes:s({},g.inner),children:[rn(s({tag:f.tag,attributes:s(s({},f.attributes),g.path)},W))]},E={tag:"g",attributes:s({},g.outer),children:[q]},j="mask-".concat(r||me()),I="clip-".concat(r||me()),P={tag:"mask",attributes:s(s({},Je),{},{id:j,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,E]},te={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Yi(y)},P]};return n.push(te,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(j,")")},Je)}),{children:n,attributes:a}}}},$i={provides(e){let t=!1;B.matchMedia&&(t=B.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let o=s(s({},i),{},{attributeName:"opacity"}),r={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||r.children.push({tag:"animate",attributes:s(s({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(r),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:s(s({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Bi={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Vi=[La,Ni,Oi,Fi,Di,Ri,Wi,Hi,Ui,$i,Bi];ni(Vi,{mixoutsTo:A});var fo=A.noAuto,Gi=A.config,uo=A.library,Ji=A.dom,Xi=A.parse,mo=A.findIconDefinition,po=A.toHtml,qi=A.icon,ho=A.layer,Ki=A.text,Qi=A.counter;var Wn=(()=>{class e{static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275mod=It({type:e})}static{this.\u0275inj=St({})}}return e})();var Ne=class e{socialNetwork=K.required();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["presentation-button"]],hostAttrs:[1,"animate-fade-right","border","py-2","px-4","rounded","text-center","hover:bg-secondary","hover:border-secondary","cursor-pointer"],inputs:{socialNetwork:[1,"socialNetwork"]},decls:5,vars:3,consts:[["target","_blank",3,"href"],[1,"flex","items-center","space-x-2"],[1,"w-8",3,"src"]],template:function(n,a){n&1&&(u(0,"a",0)(1,"div",1),v(2,"img",2),u(3,"span"),h(4),m()()()),n&2&&(w("href",a.socialNetwork().url,N),b(2),w("src",a.socialNetwork().image,N),b(2),O(a.socialNetwork().title))},encapsulation:2,changeDetection:0})};var Hn=[{title:"GitHub",url:"https://github.com/carlopezs",image:"images/github.png"},{title:"LinkedIn",url:"https://www.linkedin.com/in/carlosalopez10/",image:"images/linkedin.png"},{title:"Instagram",url:"https://www.instagram.com/carls.als?igsh=MWwxdHcxYzIxamRrdQ==",image:""}];var X=class e{_socialNetworks=_([]);socialNetworks=F(()=>this._socialNetworks());constructor(){}loadSocialNetworks(){setTimeout(()=>{this._socialNetworks.set([...Hn])},0)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"})};function Zi(e,t){if(e&1&&v(0,"presentation-button",7),e&2){let n=t.$implicit;w("socialNetwork",n)}}var Oe=class e{socialNetworksService=ae(X);socialNetworks=F(()=>this.socialNetworksService.socialNetworks().filter(t=>t.title!=="Instagram"));static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["home-presentation"]],decls:15,vars:0,consts:[[1,"flex","flex-row","w-auto","h-auto","items-center","justify-center","space-y-6","bg-primary","text-white"],[1,"flex","flex-col","items-center","laptop:items-start","justify-center","phone:text-center","laptop:text-left","laptop:pr-80","laptop:ml-8","space-y-5"],[1,"animate-fade-right","mt-4","text-xl"],["src","images/me2.png",1,"animate-fade-up","object-scale-down","laptop:hidden","bg-secondary","rounded-full","w-40","h-40"],[1,"animate-fade-right","text-3xl","font-bold"],[1,"animate-fade-right","text-lg","hidden","laptop:block"],[1,"pb-7","flex","space-x-10"],[3,"socialNetwork"],[1,"animate-fade-up","relative","py-10","mr-9","hidden","laptop:block"],[1,"w-[16rem]","h-[21rem]","border","border-white","relative","rounded"],["src","images/me2.png",1,"absolute","w-full","h-full","bg-secondary","rounded-lg","bottom-10","right-8"]],template:function(n,a){n&1&&(u(0,"div",0)(1,"div",1)(2,"h1",2),h(3,"Hi, I'm Carlos"),m(),v(4,"img",3),u(5,"h1",4),h(6,"Fullstack Developer"),m(),u(7,"h3",5),h(8," Software Engineer with expertise in full-stack development, creating innovative solutions using Angular, Java Spring Boot, Dart, and Flutter. "),m(),u(9,"div",6),Y(10,Zi,1,1,"presentation-button",7,H),m()(),u(12,"div",8)(13,"div",9),v(14,"img",10),m()()()),n&2&&(b(10),U(a.socialNetworks()))},dependencies:[Ne],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var Fe=class e{tool=K.required();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["home-tool"]],hostAttrs:[1,"cursor-pointer","justify-center","space-y-3","hover:scale-110"],inputs:{tool:[1,"tool"]},decls:5,vars:3,consts:[["target","_blank","rel","noopener noreferrer",1,"flex","flex-col","items-center",3,"href"],[1,"flex","items-center","justify-center","w-24","h-24","rounded-md","bg-gray-100","hover:bg-secondary"],[1,"w-11",3,"src"],[1,"text-sm"]],template:function(n,a){n&1&&(u(0,"a",0)(1,"div",1),v(2,"img",2),m(),u(3,"div",3),h(4),m()()),n&2&&(w("href",a.tool().link,N),b(2),w("src",a.tool().image,N),b(2),O(a.tool().title))},encapsulation:2,changeDetection:0})};var Yn=[{title:"JavaScript",image:"images/javascript.png",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{title:"HTML",image:"images/html.png",link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{title:"CSS",image:"images/css.png",link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{title:"Angular",image:"images/angular.png",link:"https://angular.io/"},{title:"TailWind",image:"images/tailwind.png",link:"https://tailwindcss.com/"},{title:"Material",image:"images/material.png",link:"https://material.angular.io/"},{title:"Flutter",image:"images/flutter.png",link:"https://flutter.dev/"},{title:"MongoDB",image:"images/mongodb.png",link:"https://www.mongodb.com/"},{title:"Java",image:"images/java.png",link:"https://www.java.com/"},{title:"Spring",image:"images/spring.png",link:"https://spring.io/"},{title:"Oracle",image:"images/oracle.png",link:"https://www.oracle.com/"},{title:"Firebase",image:"images/firebase.png",link:"https://firebase.google.com/"}];function eo(e,t){if(e&1&&v(0,"home-tool",6),e&2){let n=t.$implicit;w("tool",n)}}var De=class e{tools=_([...Yn]);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["home-tools"]],decls:36,vars:0,consts:[[1,"text-justify","common-vertical-padding"],[1,"flex","flex-col","w-auto","h-auto","mt-16"],[1,"flex","flex-col","items-center","mb-5","laptop:flex-row","justify-between"],[1,"text-primary","mb-4","font-bold","text-xl","laptop:text-2xl","flex-auto","w-1/2"],[1,"m-0","laptop:w-1/2","text-sm","text-secondary","text-clip","overflow-hidden","..."],[1,"grid","justify-items-center","gap-y-5","grid-cols-3","mt-2","laptop:grid-cols-6","laptop:gap-x-10"],[3,"tool"],[1,"mt-16"],[1,"flex","flex-col","space-y-6","text-xl","laptop:text-2xl","tracking-wide"],[1,"flex","items-center","space-x-4","flex-row"],[1,"text-primary","self-start"],[1,"flex-grow","h-0.5","bg-secondary"],[1,"text-primary","self-end"],[1,"flex","flex-col","items-center","space-y-7","mt-6","laptop:mt-11","laptop:flex-row","laptop:justify-between"],[1,"flex","justify-center","rounded-full","bg-secondary","w-36","h-36","ml-7"],["src","images/avatarme.png",1,"object-contain","w-24"],[1,"m-0","text-sm","text-secondary","text-clip","overflow-hidden","...","laptop:w-1/2"]],template:function(n,a){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),h(4," My Hard Skills "),m(),u(5,"p",4),h(6," Throughout my career, I have developed a solid set of technical skills that enable me to build efficient and scalable solutions. I have experience in both frontend and backend development, using modern technologies to create intuitive, optimized, and high-performance applications. "),m()(),u(7,"div",5),Y(8,eo,1,1,"home-tool",6,H),m()(),u(10,"div",7)(11,"div",8)(12,"div",9)(13,"p",10),h(14," I Have A "),u(15,"b"),h(16,"Bachelor's Degree "),m(),h(17,"in "),u(18,"b"),h(19,"Software Engineering."),m()(),v(20,"hr",11),m(),u(21,"div",9),v(22,"hr",11),u(23,"p",12),h(24," I live in "),u(25,"b"),h(26,"Ibarra"),m(),h(27,", a scenic and culturally rich city in northern "),u(28,"b"),h(29,"Ecuador"),m(),h(30,". "),m()()(),u(31,"div",13)(32,"div",14),v(33,"img",15),m(),u(34,"p",16),h(35," I hold a Bachelor\u2019s Degree in Software Engineering from Universidad T\xE9cnica del Norte. Throughout my career, I have worked in multiple teams, contributing to the development of innovative, efficient, and scalable software solutions. My experience includes collaborating with diverse professionals, adapting to new technologies, and solving complex challenges in software development. "),m()()()()),n&2&&(b(8),U(a.tools()))},dependencies:[Fe],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var Un=[{title:"Gestor",description:"A leading financial technology provider for investment banking in Latin America. I was involved in the development of platforms that optimize financial operations, ensuring high performance and security.",initDate:new Date("2023-01-15"),endDate:new Date("2023-12-31")},{title:"Icarus",description:"A personal entrepreneurial project with friends, where we focused on bringing software engineering solutions to Ecuador, particularly in Ibarra. We developed mobile apps and high-performance websites to help businesses optimize their processes.",initDate:new Date("2022-05-01"),endDate:new Date("2023-04-30")},{title:"Plus",description:"An internet provider in Ibarra, where I completed my pre-professional internship. During this time, I supported various internal software projects, gaining hands-on experience in developing solutions tailored to the company's needs.",initDate:new Date("2021-03-01"),endDate:new Date("2022-02-28")},{title:"Nous",description:"My first professional experience, where I contributed to the development of mobile applications and websites for companies looking to modernize their operations. This role helped me build a strong foundation in software development and digital transformation.",initDate:new Date("2020-09-01"),endDate:new Date("2021-08-31")}];var $n=(e,t)=>({"text-gray-300":e,"hover:underline":t}),Te=class e{actualIndexJob=_(0);jobs=_([...Un]);actualJob=F(()=>this.jobs()[this.actualIndexJob()]);isLastIndex=F(()=>this.actualIndexJob()===this.jobs().length-1);isFirstIndex=F(()=>this.actualIndexJob()===0);nextJob(){this.actualIndexJob()!==this.jobs().length-1&&this.actualIndexJob.update(t=>t+1)}previousJob(){this.actualIndexJob()!==0&&this.actualIndexJob.update(t=>t-1)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["home-experience"]],decls:25,vars:18,consts:[[1,"bg-primary","w-auto","h-auto","mt-16","py-16","common-vertical-padding","text-white"],[1,"flex","flex-col","space-y-7","items-center","laptop:justify-between","laptop:flex-row","laptop:space-x-10"],[1,"flex","flex-col","laptop:w-1/2"],[1,"text-xl","font-bold"],[1,"text-sm"],[1,"flex","flex-col","space-y-2","laptop:w-1/2"],[1,"flex","flex-col","space-y-2"],[1,"border","rounded-full","max-w-44","h-auto","px-4","py-2"],[1,"text-sm","mb-40"],[1,"h-4"],[1,"flex","flex-row","justify-end","space-x-5","text-sm"],["type","btn",3,"click","ngClass"]],template:function(n,a){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),h(4,"My Experience"),m(),u(5,"p",4),h(6," I have experience in web development with Angular, as well as mobile app development using Flutter. On the backend, I have worked with Node.js and Java. I have contributed to projects in companies like Gestor, NousClick, Plus, and Icarus "),m()(),u(7,"div",5)(8,"div",6)(9,"div",7)(10,"p",4),h(11),Ye(12,"date"),Ye(13,"date"),m()(),u(14,"h1",3),h(15),m(),v(16,"hr"),u(17,"p",8),h(18),m()(),v(19,"div",9),u(20,"div",10)(21,"button",11),Re("click",function(){return a.previousJob()}),h(22," Previous "),m(),u(23,"button",11),Re("click",function(){return a.nextJob()}),h(24," Next "),m()()()()()),n&2&&(b(11),Nt(" ",Ue(12,6,a.actualJob().initDate,"dd/MM/YY")," - ",Ue(13,9,a.actualJob().endDate,"dd/MM/YY")," "),b(4),O(a.actualJob().title),b(3),ge(" ",a.actualJob().description," "),b(3),w("ngClass",He(12,$n,a.isFirstIndex(),!a.isFirstIndex())),b(2),w("ngClass",He(15,$n,a.isLastIndex(),!a.isLastIndex())))},dependencies:[ie,ye,Ot],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var no=e=>({"laptop:flex-row-reverse":e}),ao=e=>["/projects",e];function io(e,t){if(e&1&&(u(0,"div",0)(1,"div",1),v(2,"img",2),m(),u(3,"div",3)(4,"h1",4),h(5),m(),u(6,"div",5),v(7,"img",2),m(),u(8,"p",6),h(9),m(),u(10,"div",7)(11,"button",8)(12,"div",9)(13,"span",10),h(14,"View More"),m()()()()()()),e&2){let n=Pt();w("ngClass",We(6,no,n.isReversed())),b(2),w("src",n.project().image,N),b(3),O(n.project().title),b(2),w("src",n.project().image,N),b(2),ge(" ",n.project().description," "),b(2),w("routerLink",We(8,ao,n.project().title.trim()))}}var Me=class e{isReversed=K(!1);project=K.required();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["home-project"]],inputs:{isReversed:[1,"isReversed"],project:[1,"project"]},decls:1,vars:1,consts:[[1,"flex","items-center","mt-9","laptop:justify-between",3,"ngClass"],[1,"hidden","p-14","w-1/3","bg-gray-100","rounded-xl","laptop:block"],[1,"w-96",3,"src"],[1,"flex","flex-col","space-y-4","laptop:w-1/2","laptop:justify-start"],[1,"text-xl","font-bold"],[1,"block","p-14","bg-gray-100","rounded-xl","laptop:w-1/3","laptop:hidden"],[1,"m-0","text-sm","text-secondary","line-clamp-4","text-justify"],[1,"flex","flex-row","laptop:justify-start"],["type","button",1,"border","border-secondary","w-full","py-2","px-4","rounded","text-center","hover:text-white","hover:bg-secondary","hover:border-secondary","laptop:w-auto",3,"routerLink"],[1,"flex","justify-center","items-center","space-x-2"],[1,"text-sm"]],template:function(n,a){n&1&&At(0,io,15,10,"div",0),n&2&&Et(a.project()?0:-1)},dependencies:[ie,ye,Ft],encapsulation:2,changeDetection:0})};function oo(e,t){if(e&1&&v(0,"home-project",5),e&2){let n=t.$implicit,a=t.$index;w("project",n)("isReversed",a%2===0)}}var je=class e{projects=_([...Dt]);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["home-recent-projects"]],decls:9,vars:0,consts:[[1,"mt-16","common-vertical-padding"],[1,"flex","flex-col","text-primary"],[1,"flex","flex-col","items-center","mb-5","laptop:flex-row","justify-between"],[1,"mb-4","font-bold","text-xl","text-center","laptop:text-left","laptop:text-2xl","flex-auto","w-1/2"],[1,"m-0","laptop:w-1/2","text-sm","text-justify","text-secondary"],[3,"project","isReversed"]],template:function(n,a){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),h(4," My Recent Projects "),m(),u(5,"p",4),h(6," Here are some of the latest projects I've worked on, combining innovation, efficiency, and cutting-edge technology. Each one represents a unique challenge and a step forward in delivering high-quality solutions. "),m()(),Y(7,oo,1,2,"home-project",5,H),m()()),n&2&&(b(7),U(a.projects()))},dependencies:[Me],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};function ro(e,t){if(e&1&&(u(0,"a",8),h(1),m()),e&2){let n=t.$implicit;w("href",n.url,N),b(),O(n.title)}}var _e=class e{socialNetworksService=ae(X);socialNetworks=F(()=>this.socialNetworksService.socialNetworks());static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["home-footer"]],decls:15,vars:0,consts:[[1,"bg-primary","text-white","py-10","common-vertical-padding","mt-14"],[1,"flex","flex-col-reverse","space-y-reverse","space-y-4","items-center","mb-10","laptop:flex-row","laptop:justify-between"],[1,"flex","flex-col","space-y-4","laptop:w-1/2"],[1,"text-xl"],[1,"text-sm"],[1,"flex","justify-center","rounded-full","bg-secondary","w-36","h-36","mr-7"],["src","images/avatarme.png",1,"object-contain","w-24"],[1,"flex","flex-row","space-x-8","mt-3"],["target","_blank",1,"cursor-pointer","hover:underline",3,"href"]],template:function(n,a){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),h(4,"Interesting Working "),u(5,"b"),h(6,"With Me?"),m()(),u(7,"p",4),h(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit accusamus omnis eum suscipit, sit molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. "),m()(),u(9,"div",5),v(10,"img",6),m()(),v(11,"hr"),u(12,"div",7),Y(13,ro,2,2,"a",8,H),m()()),n&2&&(b(13),U(a.socialNetworks()))},encapsulation:2,changeDetection:0})};var Ct=class e{socialNetWorkService=ae(X);ngOnInit(){this.socialNetWorkService.loadSocialNetworks()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=k({type:e,selectors:[["app-home"]],decls:5,vars:0,template:function(n,a){n&1&&v(0,"home-presentation")(1,"home-tools")(2,"home-experience")(3,"home-recent-projects")(4,"home-footer")},dependencies:[Wn,Oe,De,ie,Te,je,_e],encapsulation:2})};export{Ct as default};
