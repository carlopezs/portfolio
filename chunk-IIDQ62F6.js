import{a as Dt}from"./chunk-YVWFA3ZN.js";import{h as Ft}from"./chunk-RJN3H3PQ.js";import{h as ye,i as Ot,j as ae}from"./chunk-L6N6GTHU.js";import{Ab as u,Bb as m,Cb as v,Hb as Re,Jb as Pt,Sb as g,Ta as N,Tb as O,Ub as he,Vb as Nt,Xa as b,Xb as We,Yb as He,Z as ze,Zb as Ye,_ as St,_b as Ue,cb as j,da as ie,gb as C,gc as F,hb as It,mb as At,sb as w,wa as q,wb as Et,xb as H,yb as Y,zb as U}from"./chunk-JIN2THTG.js";function Gn(e,t,n){return(t=Xn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tt(Object(n),!0).forEach(function(i){Gn(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tt(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Jn(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xn(e){var t=Jn(e,"string");return typeof t=="symbol"?t:t+""}var Mt=()=>{},mt={},sn={},ln=null,cn={mark:Mt,measure:Mt};try{typeof window<"u"&&(mt=window),typeof document<"u"&&(sn=document),typeof MutationObserver<"u"&&(ln=MutationObserver),typeof performance<"u"&&(cn=performance)}catch{}var{userAgent:Lt=""}=mt.navigator||{},B=mt,x=sn,jt=ln,be=cn,so=!!B.document,R=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",fn=~Lt.indexOf("MSIE")||~Lt.indexOf("Trident/"),Kn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,qn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,un={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",Se="duotone",Zn="sharp",ei="sharp-duotone",dn=[k,Se,Zn,ei],ti={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ni={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ii=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ai={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},oi=["fak","fa-kit","fakd","fa-kit-duotone"],_t={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ri=["kit"],si={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},li=["fak","fakd"],ci={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},zt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ui=["fak","fa-kit","fakd","fa-kit-duotone"],mi={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},di={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},pi={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Xe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},gi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ke=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...fi,...gi],hi=["solid","regular","light","thin","duotone","brands"],pn=[1,2,3,4,5,6,7,8,9,10],yi=pn.concat([11,12,13,14,15,16,17,18,19,20]),bi=[...Object.keys(pi),...hi,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY].concat(pn.map(e=>"".concat(e,"x"))).concat(yi.map(e=>"w-".concat(e))),vi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",qe=16,gn="fa",hn="svg-inline--fa",Z="data-fa-i2svg",Qe="data-fa-pseudo-element",xi="data-fa-pseudo-element-pending",dt="data-prefix",pt="data-icon",Rt="fontawesome-i2svg",wi="async",Ci=["HTML","HEAD","STYLE","SCRIPT"],yn=(()=>{try{return!0}catch{return!1}})();function pe(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[k]}})}var bn=s({},un);bn[k]=s(s(s(s({},{"fa-duotone":"duotone"}),un[k]),_t.kit),_t["kit-duotone"]);var ki=pe(bn),Ze=s({},ai);Ze[k]=s(s(s(s({},{duotone:"fad"}),Ze[k]),zt.kit),zt["kit-duotone"]);var Wt=pe(Ze),et=s({},Xe);et[k]=s(s({},et[k]),ci.kit);var gt=pe(et),tt=s({},di);tt[k]=s(s({},tt[k]),si.kit);var lo=pe(tt),Si=Kn,vn="fa-layers-text",Ii=qn,Ai=s({},ti),co=pe(Ai),Ei=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$e=Qn,Pi=[...ri,...bi],fe=B.FontAwesomeConfig||{};function Ni(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,i]=t,a=Oi(Ni(n));a!=null&&(fe[i]=a)});var xn={styleDefault:"solid",familyDefault:k,cssPrefix:gn,replacementClass:hn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fe.familyPrefix&&(fe.cssPrefix=fe.familyPrefix);var se=s(s({},xn),fe);se.autoReplaceSvg||(se.observeMutations=!1);var c={};Object.keys(xn).forEach(e=>{Object.defineProperty(c,e,{enumerable:!0,set:function(t){se[e]=t,ue.forEach(n=>n(c))},get:function(){return se[e]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(e){se.cssPrefix=e,ue.forEach(t=>t(c))},get:function(){return se.cssPrefix}});B.FontAwesomeConfig=c;var ue=[];function Fi(e){return ue.push(e),()=>{ue.splice(ue.indexOf(e),1)}}var $=qe,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Di(e){if(!e||!R)return;let t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;let n=x.head.childNodes,i=null;for(let a=n.length-1;a>-1;a--){let o=n[a],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=o)}return x.head.insertBefore(t,i),e}var Ti="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function me(){let e=12,t="";for(;e-- >0;)t+=Ti[Math.random()*62|0];return t}function le(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ht(e){return e.classList?le(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function wn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mi(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(wn(e[n]),'" '),"").trim()}function Ie(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function yt(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function Li(e){let{transform:t,containerWidth:n,iconWidth:i}=e,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(o," ").concat(r," ").concat(l)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:d,path:f}}function ji(e){let{transform:t,width:n=qe,height:i=qe,startCentered:a=!1}=e,o="";return a&&fn?o+="translate(".concat(t.x/$-n/2,"em, ").concat(t.y/$-i/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):o+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),o+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var _i=`:root, :host {
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
}`;function Cn(){let e=gn,t=hn,n=c.cssPrefix,i=c.replacementClass,a=_i;if(n!==e||i!==t){let o=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(l,".".concat(i))}return a}var Ht=!1;function Be(){c.autoAddCss&&!Ht&&(Di(Cn()),Ht=!0)}var zi={mixout(){return{dom:{css:Cn,insertCss:Be}}},hooks(){return{beforeDOMElementCreation(){Be()},beforeI2svg(){Be()}}}},z=B||{};z[_]||(z[_]={});z[_].styles||(z[_].styles={});z[_].hooks||(z[_].hooks={});z[_].shims||(z[_].shims=[]);var T=z[_],kn=[],Sn=function(){x.removeEventListener("DOMContentLoaded",Sn),Ce=1,kn.map(e=>e())},Ce=!1;R&&(Ce=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Ce||x.addEventListener("DOMContentLoaded",Sn));function Ri(e){R&&(Ce?setTimeout(e,0):kn.push(e))}function ge(e){let{tag:t,attributes:n={},children:i=[]}=e;return typeof e=="string"?wn(e):"<".concat(t," ").concat(Mi(n),">").concat(i.map(ge).join(""),"</").concat(t,">")}function Yt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Wi=function(t,n){return function(i,a,o,r){return t.call(n,i,a,o,r)}},Ve=function(t,n,i,a){var o=Object.keys(t),r=o.length,l=a!==void 0?Wi(n,a):n,d,f,p;for(i===void 0?(d=1,p=t[o[0]]):(d=0,p=i);d<r;d++)f=o[d],p=l(p,t[f],f,t);return p};function Hi(e){let t=[],n=0,i=e.length;for(;n<i;){let a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<i){let o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function nt(e){let t=Hi(e);return t.length===1?t[0].toString(16):null}function Yi(e,t){let n=e.length,i=e.charCodeAt(t),a;return i>=55296&&i<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}function Ut(e){return Object.keys(e).reduce((t,n)=>{let i=e[n];return!!i.icon?t[i.iconName]=i.icon:t[n]=i,t},{})}function it(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=n,a=Ut(t);typeof T.hooks.addPack=="function"&&!i?T.hooks.addPack(e,Ut(t)):T.styles[e]=s(s({},T.styles[e]||{}),a),e==="fas"&&it("fa",t)}var{styles:de,shims:Ui}=T,In=Object.keys(gt),$i=In.reduce((e,t)=>(e[t]=Object.keys(gt[t]),e),{}),bt=null,An={},En={},Pn={},Nn={},On={};function Bi(e){return~Pi.indexOf(e)}function Vi(e,t){let n=t.split("-"),i=n[0],a=n.slice(1).join("-");return i===e&&a!==""&&!Bi(a)?a:null}var Fn=()=>{let e=i=>Ve(de,(a,o,r)=>(a[r]=Ve(o,i,{}),a),{});An=e((i,a,o)=>(a[3]&&(i[a[3]]=o),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{i[l.toString(16)]=o}),i)),En=e((i,a,o)=>(i[o]=o,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{i[l]=o}),i)),On=e((i,a,o)=>{let r=a[2];return i[o]=o,r.forEach(l=>{i[l]=o}),i});let t="far"in de||c.autoFetchSvg,n=Ve(Ui,(i,a)=>{let o=a[0],r=a[1],l=a[2];return r==="far"&&!t&&(r="fas"),typeof o=="string"&&(i.names[o]={prefix:r,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:r,iconName:l}),i},{names:{},unicodes:{}});Pn=n.names,Nn=n.unicodes,bt=Ae(c.styleDefault,{family:c.familyDefault})};Fi(e=>{bt=Ae(e.styleDefault,{family:c.familyDefault})});Fn();function vt(e,t){return(An[e]||{})[t]}function Gi(e,t){return(En[e]||{})[t]}function Q(e,t){return(On[e]||{})[t]}function Dn(e){return Pn[e]||{prefix:null,iconName:null}}function Ji(e){let t=Nn[e],n=vt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function V(){return bt}var Tn=()=>({prefix:null,iconName:null,rest:[]});function Xi(e){let t=k,n=In.reduce((i,a)=>(i[a]="".concat(c.cssPrefix,"-").concat(a),i),{});return dn.forEach(i=>{(e.includes(n[i])||e.some(a=>$i[i].includes(a)))&&(t=i)}),t}function Ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=k}=t,i=ki[n][e];if(n===Se&&!e)return"fad";let a=Wt[n][e]||Wt[n][i],o=e in T.styles?e:null;return a||o||null}function Ki(e){let t=[],n=null;return e.forEach(i=>{let a=Vi(c.cssPrefix,i);a?n=a:i&&t.push(i)}),{iconName:n,rest:t}}function $t(e){return e.sort().filter((t,n,i)=>i.indexOf(t)===n)}function Ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=t,i=null,a=Ke.concat(ui),o=$t(e.filter(y=>a.includes(y))),r=$t(e.filter(y=>!Ke.includes(y))),l=o.filter(y=>(i=y,!mn.includes(y))),[d=null]=l,f=Xi(o),p=s(s({},Ki(r)),{},{prefix:Ae(d,{family:f})});return s(s(s({},p),ea({values:e,family:f,styles:de,config:c,canonical:p,givenPrefix:i})),qi(n,i,p))}function qi(e,t,n){let{prefix:i,iconName:a}=n;if(e||!i||!a)return{prefix:i,iconName:a};let o=t==="fa"?Dn(a):{},r=Q(i,a);return a=o.iconName||r||a,i=o.prefix||i,i==="far"&&!de.far&&de.fas&&!c.autoFetchSvg&&(i="fas"),{prefix:i,iconName:a}}var Qi=dn.filter(e=>e!==k||e!==Se),Zi=Object.keys(Xe).filter(e=>e!==k).map(e=>Object.keys(Xe[e])).flat();function ea(e){let{values:t,family:n,canonical:i,givenPrefix:a="",styles:o={},config:r={}}=e,l=n===Se,d=t.includes("fa-duotone")||t.includes("fad"),f=r.familyDefault==="duotone",p=i.prefix==="fad"||i.prefix==="fa-duotone";if(!l&&(d||f||p)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&Qi.includes(n)&&(Object.keys(o).find(h=>Zi.includes(h))||r.autoFetchSvg)){let h=ii.get(n).defaultShortPrefixId;i.prefix=h,i.iconName=Q(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||a==="fa")&&(i.prefix=V()||"fas"),i}var at=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];let a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=s(s({},this.definitions[o]||{}),a[o]),it(o,a[o]);let r=gt[k][o];r&&it(r,a[o]),Fn()})}reset(){this.definitions={}}_pullDefinitions(t,n){let i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(a=>{let{prefix:o,iconName:r,icon:l}=i[a],d=l[2];t[o]||(t[o]={}),d.length>0&&d.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][r]=l}),t}},Bt=[],oe={},re={},ta=Object.keys(re);function na(e,t){let{mixoutsTo:n}=t;return Bt=e,oe={},Object.keys(re).forEach(i=>{ta.indexOf(i)===-1&&delete re[i]}),Bt.forEach(i=>{let a=i.mixout?i.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(r=>{n[o]||(n[o]={}),n[o][r]=a[o][r]})}),i.hooks){let o=i.hooks();Object.keys(o).forEach(r=>{oe[r]||(oe[r]=[]),oe[r].push(o[r])})}i.provides&&i.provides(re)}),n}function ot(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];return(oe[e]||[]).forEach(r=>{t=r.apply(null,[t,...i])}),t}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];(oe[e]||[]).forEach(o=>{o.apply(null,n)})}function G(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return re[e]?re[e].apply(null,t):void 0}function rt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e,n=e.prefix||V();if(t)return t=Q(n,t)||t,Yt(Mn.definitions,n,t)||Yt(T.styles,n,t)}var Mn=new at,ia=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,ee("noAuto")},aa={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(ee("beforeI2svg",e),G("pseudoElements2svg",e),G("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Ri(()=>{ra({autoReplaceSvgRoot:t}),ee("watch",e)})}},oa={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ae(e[0]);return{prefix:n,iconName:Q(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(c.cssPrefix,"-"))>-1||e.match(Si))){let t=Ee(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||V(),iconName:Q(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){let t=V();return{prefix:t,iconName:Q(t,e)||e}}}},A={noAuto:ia,config:c,dom:aa,parse:oa,library:Mn,findIconDefinition:rt,toHtml:ge},ra=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=x}=e;(Object.keys(T.styles).length>0||c.autoFetchSvg)&&R&&c.autoReplaceSvg&&A.dom.i2svg({node:t})};function Pe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ge(n))}}),Object.defineProperty(e,"node",{get:function(){if(!R)return;let n=x.createElement("div");return n.innerHTML=e.html,n.children}}),e}function sa(e){let{children:t,main:n,mask:i,attributes:a,styles:o,transform:r}=e;if(yt(r)&&n.found&&!i.found){let{width:l,height:d}=n,f={x:l/d/2,y:.5};a.style=Ie(s(s({},o),{},{"transform-origin":"".concat(f.x+r.x/16,"em ").concat(f.y+r.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function la(e){let{prefix:t,iconName:n,children:i,attributes:a,symbol:o}=e,r=o===!0?"".concat(t,"-").concat(c.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},a),{},{id:r}),children:i}]}]}function xt(e){let{icons:{main:t,mask:n},prefix:i,iconName:a,transform:o,symbol:r,title:l,maskId:d,titleId:f,extra:p,watchable:y=!1}=e,{width:h,height:S}=n.found?n:t,W=li.includes(i),K=[c.replacementClass,a?"".concat(c.cssPrefix,"-").concat(a):""].filter(ne=>p.classes.indexOf(ne)===-1).filter(ne=>ne!==""||!!ne).concat(p.classes).join(" "),E={children:[],attributes:s(s({},p.attributes),{},{"data-prefix":i,"data-icon":a,class:K,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(S)})},L=W&&!~p.classes.indexOf("fa-fw")?{width:"".concat(h/S*16*.0625,"em")}:{};y&&(E.attributes[Z]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||me())},children:[l]}),delete E.attributes.title);let I=s(s({},E),{},{prefix:i,iconName:a,main:t,mask:n,maskId:d,transform:o,symbol:r,styles:s(s({},L),p.styles)}),{children:P,attributes:te}=n.found&&t.found?G("generateAbstractMask",I)||{children:[],attributes:{}}:G("generateAbstractIcon",I)||{children:[],attributes:{}};return I.children=P,I.attributes=te,r?la(I):sa(I)}function Vt(e){let{content:t,width:n,height:i,transform:a,title:o,extra:r,watchable:l=!1}=e,d=s(s(s({},r.attributes),o?{title:o}:{}),{},{class:r.classes.join(" ")});l&&(d[Z]="");let f=s({},r.styles);yt(a)&&(f.transform=ji({transform:a,startCentered:!0,width:n,height:i}),f["-webkit-transform"]=f.transform);let p=Ie(f);p.length>0&&(d.style=p);let y=[];return y.push({tag:"span",attributes:d,children:[t]}),o&&y.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),y}function ca(e){let{content:t,title:n,extra:i}=e,a=s(s(s({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=Ie(i.styles);o.length>0&&(a.style=o);let r=[];return r.push({tag:"span",attributes:a,children:[t]}),n&&r.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),r}var{styles:Ge}=T;function st(e){let t=e[0],n=e[1],[i]=e.slice(4),a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat($e.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat($e.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat($e.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:a}}var fa={found:!1,width:512,height:512};function ua(e,t){!yn&&!c.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function lt(e,t){let n=t;return t==="fa"&&c.styleDefault!==null&&(t=V()),new Promise((i,a)=>{if(n==="fa"){let o=Dn(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ge[t]&&Ge[t][e]){let o=Ge[t][e];return i(st(o))}ua(e,t),i(s(s({},fa),{},{icon:c.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}var Gt=()=>{},ct=c.measurePerformance&&be&&be.mark&&be.measure?be:{mark:Gt,measure:Gt},ce='FA "6.7.2"',ma=e=>(ct.mark("".concat(ce," ").concat(e," begins")),()=>Ln(e)),Ln=e=>{ct.mark("".concat(ce," ").concat(e," ends")),ct.measure("".concat(ce," ").concat(e),"".concat(ce," ").concat(e," begins"),"".concat(ce," ").concat(e," ends"))},wt={begin:ma,end:Ln},xe=()=>{};function Jt(e){return typeof(e.getAttribute?e.getAttribute(Z):null)=="string"}function da(e){let t=e.getAttribute?e.getAttribute(dt):null,n=e.getAttribute?e.getAttribute(pt):null;return t&&n}function pa(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(c.replacementClass)}function ga(){return c.autoReplaceSvg===!0?we.replace:we[c.autoReplaceSvg]||we.replace}function ha(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function ya(e){return x.createElement(e)}function jn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=e.tag==="svg"?ha:ya}=t;if(typeof e=="string")return x.createTextNode(e);let i=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){i.appendChild(jn(o,{ceFn:n}))}),i}function ba(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var we={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(jn(n),t)}),t.getAttribute(Z)===null&&c.keepOriginalSource){let n=x.createComment(ba(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~ht(t).indexOf(c.replacementClass))return we.replace(e);let i=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let o=n[0].attributes.class.split(" ").reduce((r,l)=>(l===c.replacementClass||l.match(i)?r.toSvg.push(l):r.toNode.push(l),r),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}let a=n.map(o=>ge(o)).join(`
`);t.setAttribute(Z,""),t.innerHTML=a}};function Xt(e){e()}function _n(e,t){let n=typeof t=="function"?t:xe;if(e.length===0)n();else{let i=Xt;c.mutateApproach===wi&&(i=B.requestAnimationFrame||Xt),i(()=>{let a=ga(),o=wt.begin("mutate");e.map(a),o(),n()})}}var Ct=!1;function zn(){Ct=!0}function ft(){Ct=!1}var ke=null;function Kt(e){if(!jt||!c.observeMutations)return;let{treeCallback:t=xe,nodeCallback:n=xe,pseudoElementsCallback:i=xe,observeMutationsRoot:a=x}=e;ke=new jt(o=>{if(Ct)return;let r=V();le(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Jt(l.addedNodes[0])&&(c.searchPseudoElements&&i(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&i(l.target.parentNode),l.type==="attributes"&&Jt(l.target)&&~Ei.indexOf(l.attributeName))if(l.attributeName==="class"&&da(l.target)){let{prefix:d,iconName:f}=Ee(ht(l.target));l.target.setAttribute(dt,d||r),f&&l.target.setAttribute(pt,f)}else pa(l.target)&&n(l.target)})}),R&&ke.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function va(){ke&&ke.disconnect()}function xa(e){let t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((i,a)=>{let o=a.split(":"),r=o[0],l=o.slice(1);return r&&l.length>0&&(i[r]=l.join(":").trim()),i},{})),n}function wa(e){let t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",a=Ee(ht(e));return a.prefix||(a.prefix=V()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=Gi(a.prefix,e.innerText)||vt(a.prefix,nt(e.innerText))),!a.iconName&&c.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ca(e){let t=le(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return c.autoA11y&&(n?t["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(i||me()):(t["aria-hidden"]="true",t.focusable="false")),t}function ka(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:i,rest:a}=wa(e),o=Ca(e),r=ot("parseNodeAttributes",{},e),l=t.styleParser?xa(e):[];return s({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},r)}var{styles:Sa}=T;function Rn(e){let t=c.autoReplaceSvg==="nest"?qt(e,{styleParser:!1}):qt(e);return~t.extra.classes.indexOf(vn)?G("generateLayersText",e,t):G("generateSvgReplacementMutation",e,t)}function Ia(){return[...oi,...Ke]}function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();let n=x.documentElement.classList,i=p=>n.add("".concat(Rt,"-").concat(p)),a=p=>n.remove("".concat(Rt,"-").concat(p)),o=c.autoFetchSvg?Ia():mn.concat(Object.keys(Sa));o.includes("fa")||o.push("fa");let r=[".".concat(vn,":not([").concat(Z,"])")].concat(o.map(p=>".".concat(p,":not([").concat(Z,"])"))).join(", ");if(r.length===0)return Promise.resolve();let l=[];try{l=le(e.querySelectorAll(r))}catch{}if(l.length>0)i("pending"),a("complete");else return Promise.resolve();let d=wt.begin("onTree"),f=l.reduce((p,y)=>{try{let h=Rn(y);h&&p.push(h)}catch(h){yn||h.name==="MissingIcon"&&console.error(h)}return p},[]);return new Promise((p,y)=>{Promise.all(f).then(h=>{_n(h,()=>{i("active"),i("complete"),a("pending"),typeof t=="function"&&t(),d(),p()})}).catch(h=>{d(),y(h)})})}function Aa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rn(e).then(n=>{n&&_n([n],t)})}function Ea(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:rt(t||{}),{mask:a}=n;return a&&(a=(a||{}).icon?a:rt(a||{})),e(i,s(s({},n),{},{mask:a}))}}var Pa=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=D,symbol:i=!1,mask:a=null,maskId:o=null,title:r=null,titleId:l=null,classes:d=[],attributes:f={},styles:p={}}=t;if(!e)return;let{prefix:y,iconName:h,icon:S}=e;return Pe(s({type:"icon"},e),()=>(ee("beforeDOMElementCreation",{iconDefinition:e,params:t}),c.autoA11y&&(r?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||me()):(f["aria-hidden"]="true",f.focusable="false")),xt({icons:{main:st(S),mask:a?st(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:h,transform:s(s({},D),n),symbol:i,title:r,maskId:o,titleId:l,extra:{attributes:f,styles:p,classes:d}})))},Na={mixout(){return{icon:Ea(Pa)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Qt,e.nodeCallback=Aa,e}}},provides(e){e.i2svg=function(t){let{node:n=x,callback:i=()=>{}}=t;return Qt(n,i)},e.generateSvgReplacementMutation=function(t,n){let{iconName:i,title:a,titleId:o,prefix:r,transform:l,symbol:d,mask:f,maskId:p,extra:y}=n;return new Promise((h,S)=>{Promise.all([lt(i,r),f.iconName?lt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(W=>{let[K,E]=W;h([t,xt({icons:{main:K,mask:E},prefix:r,iconName:i,transform:l,symbol:d,maskId:p,title:a,titleId:o,extra:y,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(t){let{children:n,attributes:i,main:a,transform:o,styles:r}=t,l=Ie(r);l.length>0&&(i.style=l);let d;return yt(o)&&(d=G("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(d||a.icon),{children:n,attributes:i}}}},Oa={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Pe({type:"layer"},()=>{ee("beforeDOMElementCreation",{assembler:e,params:t});let i=[];return e(a=>{Array.isArray(a)?a.map(o=>{i=i.concat(o.abstract)}):i=i.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},Fa={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:i=[],attributes:a={},styles:o={}}=t;return Pe({type:"counter",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),ca({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(c.cssPrefix,"-layers-counter"),...i]}})))}}}},Da={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=D,title:i=null,classes:a=[],attributes:o={},styles:r={}}=t;return Pe({type:"text",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),Vt({content:e,transform:s(s({},D),n),title:i,extra:{attributes:o,styles:r,classes:["".concat(c.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){let{title:i,transform:a,extra:o}=n,r=null,l=null;if(fn){let d=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();r=f.width/d,l=f.height/d}return c.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Vt({content:t.innerHTML,width:r,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Ta=new RegExp('"',"ug"),Zt=[1105920,1112319],en=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),ni),vi),mi),ut=Object.keys(en).reduce((e,t)=>(e[t.toLowerCase()]=en[t],e),{}),Ma=Object.keys(ut).reduce((e,t)=>{let n=ut[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function La(e){let t=e.replace(Ta,""),n=Yi(t,0),i=n>=Zt[0]&&n<=Zt[1],a=t.length===2?t[0]===t[1]:!1;return{value:nt(a?t[0]:t),isSecondary:i||a}}function ja(e,t){let n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),a=isNaN(i)?"normal":i;return(ut[n]||{})[a]||Ma[n]}function tn(e,t){let n="".concat(xi).concat(t.replace(":","-"));return new Promise((i,a)=>{if(e.getAttribute(n)!==null)return i();let r=le(e.children).filter(h=>h.getAttribute(Qe)===t)[0],l=B.getComputedStyle(e,t),d=l.getPropertyValue("font-family"),f=d.match(Ii),p=l.getPropertyValue("font-weight"),y=l.getPropertyValue("content");if(r&&!f)return e.removeChild(r),i();if(f&&y!=="none"&&y!==""){let h=l.getPropertyValue("content"),S=ja(d,p),{value:W,isSecondary:K}=La(h),E=f[0].startsWith("FontAwesome"),L=vt(S,W),I=L;if(E){let P=Ji(W);P.iconName&&P.prefix&&(L=P.iconName,S=P.prefix)}if(L&&!K&&(!r||r.getAttribute(dt)!==S||r.getAttribute(pt)!==I)){e.setAttribute(n,I),r&&e.removeChild(r);let P=ka(),{extra:te}=P;te.attributes[Qe]=t,lt(L,S).then(ne=>{let Bn=xt(s(s({},P),{},{icons:{main:ne,mask:Tn()},prefix:S,iconName:I,extra:te,watchable:!0})),_e=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=Bn.map(Vn=>ge(Vn)).join(`
`),e.removeAttribute(n),i()}).catch(a)}else i()}else i()})}function _a(e){return Promise.all([tn(e,"::before"),tn(e,"::after")])}function za(e){return e.parentNode!==document.head&&!~Ci.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function nn(e){if(R)return new Promise((t,n)=>{let i=le(e.querySelectorAll("*")).filter(za).map(_a),a=wt.begin("searchPseudoElements");zn(),Promise.all(i).then(()=>{a(),ft(),t()}).catch(()=>{a(),ft(),n()})})}var Ra={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=nn,e}}},provides(e){e.pseudoElements2svg=function(t){let{node:n=x}=t;c.searchPseudoElements&&nn(n)}}},an=!1,Wa={mixout(){return{dom:{unwatch(){zn(),an=!0}}}},hooks(){return{bootstrap(){Kt(ot("mutationObserverCallbacks",{}))},noAuto(){va()},watch(e){let{observeMutationsRoot:t}=e;an?ft():Kt(ot("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},on=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,i)=>{let a=i.toLowerCase().split("-"),o=a[0],r=a.slice(1).join("-");if(o&&r==="h")return n.flipX=!0,n;if(o&&r==="v")return n.flipY=!0,n;if(r=parseFloat(r),isNaN(r))return n;switch(o){case"grow":n.size=n.size+r;break;case"shrink":n.size=n.size-r;break;case"left":n.x=n.x-r;break;case"right":n.x=n.x+r;break;case"up":n.y=n.y-r;break;case"down":n.y=n.y+r;break;case"rotate":n.rotate=n.rotate+r;break}return n},t)},Ha={mixout(){return{parse:{transform:e=>on(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-transform");return n&&(e.transform=on(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:i,containerWidth:a,iconWidth:o}=t,r={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(l," ").concat(d," ").concat(f)},y={transform:"translate(".concat(o/2*-1," -256)")},h={outer:r,inner:p,path:y};return{tag:"g",attributes:s({},h.outer),children:[{tag:"g",attributes:s({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),h.path)}]}]}}}},Je={x:0,y:0,width:"100%",height:"100%"};function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ya(e){return e.tag==="g"?e.children:[e]}var Ua={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-mask"),i=n?Ee(n.split(" ").map(a=>a.trim())):Tn();return i.prefix||(i.prefix=V()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:i,main:a,mask:o,maskId:r,transform:l}=t,{width:d,icon:f}=a,{width:p,icon:y}=o,h=Li({transform:l,containerWidth:p,iconWidth:d}),S={tag:"rect",attributes:s(s({},Je),{},{fill:"white"})},W=f.children?{children:f.children.map(rn)}:{},K={tag:"g",attributes:s({},h.inner),children:[rn(s({tag:f.tag,attributes:s(s({},f.attributes),h.path)},W))]},E={tag:"g",attributes:s({},h.outer),children:[K]},L="mask-".concat(r||me()),I="clip-".concat(r||me()),P={tag:"mask",attributes:s(s({},Je),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,E]},te={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Ya(y)},P]};return n.push(te,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(L,")")},Je)}),{children:n,attributes:i}}}},$a={provides(e){let t=!1;B.matchMedia&&(t=B.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let n=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let o=s(s({},a),{},{attributeName:"opacity"}),r={tag:"circle",attributes:s(s({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||r.children.push({tag:"animate",attributes:s(s({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(r),n.push({tag:"path",attributes:s(s({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:s(s({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:s(s({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ba={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return e.symbol=i,e}}}},Va=[zi,Na,Oa,Fa,Da,Ra,Wa,Ha,Ua,$a,Ba];na(Va,{mixoutsTo:A});var fo=A.noAuto,Ga=A.config,uo=A.library,Ja=A.dom,Xa=A.parse,mo=A.findIconDefinition,po=A.toHtml,Ka=A.icon,go=A.layer,qa=A.text,Qa=A.counter;var Wn=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=It({type:e})}static{this.\u0275inj=St({})}}return e})();var Ne=class e{socialNetwork=q.required();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["presentation-button"]],hostAttrs:[1,"animate-fade-right","border","py-2","px-4","rounded","text-center","hover:bg-secondary","hover:border-secondary","cursor-pointer"],inputs:{socialNetwork:[1,"socialNetwork"]},decls:5,vars:3,consts:[["target","_blank",3,"href"],[1,"flex","items-center","space-x-2"],[1,"w-8",3,"src"]],template:function(n,i){n&1&&(u(0,"a",0)(1,"div",1),v(2,"img",2),u(3,"span"),g(4),m()()()),n&2&&(w("href",i.socialNetwork().url,N),b(2),w("src",i.socialNetwork().image,N),b(2),O(i.socialNetwork().title))},encapsulation:2,changeDetection:0})};var Hn=[{title:"GitHub",url:"https://github.com/carlopezs",image:"images/github.png"},{title:"LinkedIn",url:"https://www.linkedin.com/in/carlosalopez10/",image:"images/linkedin.png"},{title:"Instagram",url:"https://www.instagram.com/carls.als?igsh=MWwxdHcxYzIxamRrdQ==",image:""}];var X=class e{_socialNetworks=j([]);socialNetworks=F(()=>this._socialNetworks());constructor(){}loadSocialNetworks(){setTimeout(()=>{this._socialNetworks.set([...Hn])},0)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=ze({token:e,factory:e.\u0275fac,providedIn:"root"})};function Za(e,t){if(e&1&&v(0,"presentation-button",7),e&2){let n=t.$implicit;w("socialNetwork",n)}}var Oe=class e{socialNetworksService=ie(X);socialNetworks=F(()=>this.socialNetworksService.socialNetworks().filter(t=>t.title!=="Instagram"));static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["home-presentation"]],decls:15,vars:0,consts:[[1,"flex","flex-row","w-auto","h-auto","items-center","justify-center","space-y-6","bg-primary","text-white"],[1,"flex","flex-col","items-center","laptop:items-start","justify-center","phone:text-center","laptop:text-left","laptop:pr-96","laptop:ml-12","space-y-5"],[1,"animate-fade-right","mt-4","text-xl"],["src","images/me2.png",1,"animate-fade-up","object-scale-down","laptop:hidden","bg-secondary","rounded-full","w-40","h-40"],[1,"animate-fade-right","text-3xl","font-bold"],[1,"animate-fade-right","text-lg","hidden","laptop:block"],[1,"pb-7","flex","space-x-10"],[3,"socialNetwork"],[1,"animate-fade-up","relative","mr-26","py-10","mr-20","hidden","laptop:block"],[1,"w-[16rem]","h-[21rem]","border","border-white","relative","rounded"],["src","images/me2.png",1,"absolute","w-full","h-full","bg-secondary","rounded-lg","bottom-10","right-8"]],template:function(n,i){n&1&&(u(0,"div",0)(1,"div",1)(2,"h1",2),g(3,"Hi, I'm Carlos"),m(),v(4,"img",3),u(5,"h1",4),g(6,"Fullstack Developer"),m(),u(7,"h3",5),g(8," Software Engineer with expertise in full-stack development, creating innovative solutions using Angular, Java Spring Boot, Dart, and Flutter. "),m(),u(9,"div",6),Y(10,Za,1,1,"presentation-button",7,H),m()(),u(12,"div",8)(13,"div",9),v(14,"img",10),m()()()),n&2&&(b(10),U(i.socialNetworks()))},dependencies:[Ne],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var Fe=class e{tool=q.required();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["home-tool"]],hostAttrs:[1,"cursor-pointer","justify-center","space-y-3","hover:scale-110"],inputs:{tool:[1,"tool"]},decls:5,vars:3,consts:[["target","_blank","rel","noopener noreferrer",1,"flex","flex-col","items-center",3,"href"],[1,"flex","items-center","justify-center","w-24","h-24","rounded-md","bg-gray-100","hover:bg-secondary"],[1,"w-11",3,"src"],[1,"text-sm"]],template:function(n,i){n&1&&(u(0,"a",0)(1,"div",1),v(2,"img",2),m(),u(3,"div",3),g(4),m()()),n&2&&(w("href",i.tool().link,N),b(2),w("src",i.tool().image,N),b(2),O(i.tool().title))},encapsulation:2,changeDetection:0})};var Yn=[{title:"JavaScript",image:"images/javascript.png",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{title:"HTML",image:"images/html.png",link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{title:"CSS",image:"images/css.png",link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{title:"Angular",image:"images/angular.png",link:"https://angular.io/"},{title:"TailWind",image:"images/tailwind.png",link:"https://tailwindcss.com/"},{title:"Material",image:"images/material.png",link:"https://material.angular.io/"},{title:"Flutter",image:"images/flutter.png",link:"https://flutter.dev/"},{title:"MongoDB",image:"images/mongodb.png",link:"https://www.mongodb.com/"},{title:"Java",image:"images/java.png",link:"https://www.java.com/"},{title:"Spring",image:"images/spring.png",link:"https://spring.io/"},{title:"Oracle",image:"images/oracle.png",link:"https://www.oracle.com/"},{title:"Firebase",image:"images/firebase.png",link:"https://firebase.google.com/"}];function eo(e,t){if(e&1&&v(0,"home-tool",6),e&2){let n=t.$implicit;w("tool",n)}}var De=class e{tools=j([...Yn]);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["home-tools"]],decls:36,vars:0,consts:[[1,"text-justify","common-vertical-padding"],[1,"flex","flex-col","w-auto","h-auto","mt-16"],[1,"flex","flex-col","items-center","mb-5","laptop:flex-row","justify-between"],[1,"text-primary","mb-4","font-bold","text-xl","laptop:text-2xl","flex-auto","w-1/2"],[1,"m-0","laptop:w-1/2","text-sm","text-secondary","text-clip","overflow-hidden","..."],[1,"grid","justify-items-center","gap-y-5","grid-cols-3","mt-2","laptop:grid-cols-6","laptop:gap-x-10"],[3,"tool"],[1,"mt-16"],[1,"flex","flex-col","space-y-6","text-xl","laptop:text-2xl","tracking-wide"],[1,"flex","items-center","space-x-4","flex-row"],[1,"text-primary","self-start"],[1,"flex-grow","h-0.5","bg-secondary"],[1,"text-primary","self-end"],[1,"flex","flex-col","items-center","space-y-7","mt-6","laptop:mt-11","laptop:flex-row","laptop:justify-between"],[1,"flex","justify-center","rounded-full","bg-secondary","w-36","h-36","ml-7"],["src","images/avatarme.png",1,"object-contain","w-24"],[1,"m-0","text-sm","text-secondary","text-clip","overflow-hidden","...","laptop:w-1/2"]],template:function(n,i){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),g(4," My Hard Skills "),m(),u(5,"p",4),g(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit accusamus omnis eum suscipit, sit molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit "),m()(),u(7,"div",5),Y(8,eo,1,1,"home-tool",6,H),m()(),u(10,"div",7)(11,"div",8)(12,"div",9)(13,"p",10),g(14," I Have A "),u(15,"b"),g(16,"Bachelor's Degree "),m(),g(17,"in "),u(18,"b"),g(19,"Software Engineering."),m()(),v(20,"hr",11),m(),u(21,"div",9),v(22,"hr",11),u(23,"p",12),g(24," I live in "),u(25,"b"),g(26,"Ibarra"),m(),g(27,", a scenic and culturally rich city in northern "),u(28,"b"),g(29,"Ecuador"),m(),g(30,". "),m()()(),u(31,"div",13)(32,"div",14),v(33,"img",15),m(),u(34,"p",16),g(35," Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit accusamus omnis eum suscipit, sit molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit accusamus omnis eum suscipit, sit molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit "),m()()()()),n&2&&(b(8),U(i.tools()))},dependencies:[Fe],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var Un=[{title:"Gestor",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,initDate:new Date("2023-01-15"),endDate:new Date("2023-12-31")},{title:"Icarus",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,initDate:new Date("2022-05-01"),endDate:new Date("2023-04-30")},{title:"Plus",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,initDate:new Date("2021-03-01"),endDate:new Date("2022-02-28")},{title:"Nous",description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,initDate:new Date("2020-09-01"),endDate:new Date("2021-08-31")}];var $n=(e,t)=>({"text-gray-300":e,"hover:underline":t}),Te=class e{actualIndexJob=j(0);jobs=j([...Un]);actualJob=F(()=>this.jobs()[this.actualIndexJob()]);isLastIndex=F(()=>this.actualIndexJob()===this.jobs().length-1);isFirstIndex=F(()=>this.actualIndexJob()===0);nextJob(){this.actualIndexJob()!==this.jobs().length-1&&this.actualIndexJob.update(t=>t+1)}previousJob(){this.actualIndexJob()!==0&&this.actualIndexJob.update(t=>t-1)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["home-experience"]],decls:25,vars:19,consts:[[1,"bg-primary","w-auto","h-auto","mt-16","py-16","common-vertical-padding","text-white"],[1,"flex","flex-col","space-y-7","items-center","laptop:justify-between","laptop:flex-row","laptop:space-x-10"],[1,"flex","flex-col","laptop:w-1/2"],[1,"text-xl","font-bold"],[1,"text-sm"],[1,"flex","flex-col","space-y-2","laptop:w-1/2"],[1,"flex","flex-col","space-y-2"],[1,"border","rounded-full","max-w-44","h-auto","px-4","py-2"],[1,"text-sm","mb-40"],[1,"h-4"],[1,"flex","flex-row","justify-end","space-x-5","text-sm"],["type","btn",3,"click","ngClass"]],template:function(n,i){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),g(4,"My Experience"),m(),u(5,"p",4),g(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit accusamus omnis eum suscipit, sit molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. "),m()(),u(7,"div",5)(8,"div",6)(9,"div",7)(10,"p",4),g(11),Ye(12,"date"),Ye(13,"date"),m()(),u(14,"h1",3),g(15),m(),v(16,"hr"),u(17,"p",8),g(18),m()(),v(19,"div",9),u(20,"div",10)(21,"button",11),Re("click",function(){return i.previousJob()}),g(22," Previous "),m(),u(23,"button",11),Re("click",function(){return i.nextJob()}),g(24," Next "),m()()()()()),n&2&&(b(8),w("@slideInOut",void 0),b(3),Nt(" ",Ue(12,7,i.actualJob().initDate,"dd/MM/YY")," - ",Ue(13,10,i.actualJob().endDate,"dd/MM/YY")," "),b(4),O(i.actualJob().title),b(3),he(" ",i.actualJob().description," "),b(3),w("ngClass",He(13,$n,i.isFirstIndex(),!i.isFirstIndex())),b(2),w("ngClass",He(16,$n,i.isLastIndex(),!i.isLastIndex())))},dependencies:[ae,ye,Ot],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var no=e=>({"laptop:flex-row-reverse":e}),io=e=>["/projects",e];function ao(e,t){if(e&1&&(u(0,"div",0)(1,"div",1),v(2,"img",2),m(),u(3,"div",3)(4,"h1",4),g(5),m(),u(6,"div",5),v(7,"img",2),m(),u(8,"p",6),g(9),m(),u(10,"div",7)(11,"button",8)(12,"div",9)(13,"span",10),g(14,"View Details"),m()()()()()()),e&2){let n=Pt();w("ngClass",We(6,no,n.isReversed())),b(2),w("src",n.project().image,N),b(3),O(n.project().title),b(2),w("src",n.project().image,N),b(2),he(" ",n.project().description," "),b(2),w("routerLink",We(8,io,n.project().title.trim()))}}var Me=class e{isReversed=q(!1);project=q.required();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["home-project"]],inputs:{isReversed:[1,"isReversed"],project:[1,"project"]},decls:1,vars:1,consts:[[1,"flex","items-center","mt-9","laptop:justify-between",3,"ngClass"],[1,"hidden","p-14","w-1/3","bg-gray-100","rounded-xl","laptop:block"],[1,"w-96",3,"src"],[1,"flex","flex-col","space-y-4","laptop:w-1/2","laptop:justify-start"],[1,"text-xl","font-bold"],[1,"block","p-14","bg-gray-100","rounded-xl","laptop:w-1/3","laptop:hidden"],[1,"m-0","text-sm","text-secondary","text-justify"],[1,"flex","flex-row","laptop:justify-start"],["type","button",1,"border","border-secondary","w-full","py-2","px-4","rounded","text-center","hover:text-white","hover:bg-secondary","hover:border-secondary","laptop:w-auto",3,"routerLink"],[1,"flex","justify-center","items-center","space-x-2"],[1,"text-sm"]],template:function(n,i){n&1&&At(0,ao,15,10,"div",0),n&2&&Et(i.project()?0:-1)},dependencies:[ae,ye,Ft],encapsulation:2,changeDetection:0})};function oo(e,t){if(e&1&&v(0,"home-project",5),e&2){let n=t.$implicit,i=t.$index;w("project",n)("isReversed",i%2===0)}}var Le=class e{projects=j([...Dt]);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["home-recent-projects"]],decls:9,vars:0,consts:[[1,"mt-16","common-vertical-padding"],[1,"flex","flex-col","text-primary"],[1,"flex","flex-col","items-center","mb-5","laptop:flex-row","justify-between"],[1,"mb-4","font-bold","text-xl","text-center","laptop:text-left","laptop:text-2xl","flex-auto","w-1/2"],[1,"m-0","laptop:w-1/2","text-sm","text-justify","text-secondary"],[3,"project","isReversed"]],template:function(n,i){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),g(4," My Recent Projects "),m(),u(5,"p",4),g(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit accusamus omnis eum suscipit, sit molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit "),m()(),Y(7,oo,1,2,"home-project",5,H),m()()),n&2&&(b(7),U(i.projects()))},dependencies:[Me],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};function ro(e,t){if(e&1&&(u(0,"a",8),g(1),m()),e&2){let n=t.$implicit;w("href",n.url,N),b(),O(n.title)}}var je=class e{socialNetworksService=ie(X);socialNetworks=F(()=>this.socialNetworksService.socialNetworks());static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["home-footer"]],decls:15,vars:0,consts:[[1,"bg-primary","text-white","py-10","common-vertical-padding","mt-14"],[1,"flex","flex-col-reverse","space-y-reverse","space-y-4","items-center","mb-10","laptop:flex-row","laptop:justify-between"],[1,"flex","flex-col","space-y-4","laptop:w-1/2"],[1,"text-xl"],[1,"text-sm"],[1,"flex","justify-center","rounded-full","bg-secondary","w-36","h-36","mr-7"],["src","images/avatarme.png",1,"object-contain","w-24"],[1,"flex","flex-row","space-x-8","mt-3"],["target","_blank",1,"cursor-pointer","hover:underline",3,"href"]],template:function(n,i){n&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),g(4,"Interesting Working "),u(5,"b"),g(6,"With Me?"),m()(),u(7,"p",4),g(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit accusamus omnis eum suscipit, sit molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. "),m()(),u(9,"div",5),v(10,"img",6),m()(),v(11,"hr"),u(12,"div",7),Y(13,ro,2,2,"a",8,H),m()()),n&2&&(b(13),U(i.socialNetworks()))},encapsulation:2,changeDetection:0})};var kt=class e{socialNetWorkService=ie(X);ngOnInit(){this.socialNetWorkService.loadSocialNetworks()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=C({type:e,selectors:[["app-home"]],decls:5,vars:0,template:function(n,i){n&1&&v(0,"home-presentation")(1,"home-tools")(2,"home-experience")(3,"home-recent-projects")(4,"home-footer")},dependencies:[Wn,Oe,De,ae,Te,Le,je],encapsulation:2})};export{kt as default};
