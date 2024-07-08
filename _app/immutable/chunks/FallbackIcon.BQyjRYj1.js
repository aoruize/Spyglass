import{s as ke,x as C,i as F,n as ce,f as v,z as Ge,I as Ke,J as z,K as le,e as Je,c as We,b as Ce,L as fe,u as Xe,M as Ye,v as Ze,N as $e,O as ae,P as et,D as tt,F as nt,G as ot,H as rt}from"./scheduler.DI5yTIc8.js";import{S as Te,i as je,g as st,b as B,e as it,t as H,c as ct,a as lt,m as ft,d as at}from"./index.BciIcuIa.js";function Pn(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Oe(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const l in i)l in c||(r[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);e[s]=c}else for(const l in i)o[l]=1}for(const i in r)i in n||(n[i]=void 0);return n}const O=/^[a-z0-9]+(-[a-z0-9]+)*$/,L=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!D(f)?null:f}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!D(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!D(c,n)?null:c}return null},D=(e,t)=>e?!!((e.provider===""||e.provider.match(O))&&(t&&e.prefix===""||e.prefix.match(O))&&e.name.match(O)):!1,Pe=Object.freeze({left:0,top:0,width:16,height:16}),q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),M=Object.freeze({...Pe,...q}),K=Object.freeze({...M,body:"",hidden:!1});function ut(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ue(e,t){const n=ut(e,t);for(const r in K)r in q?r in e&&!(r in n)&&(n[r]=q[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function dt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return Object.keys(n).concat(Object.keys(r)).forEach(s),o}function ht(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=ue(r[c]||o[c],s)}return i(t),n.forEach(i),ue(e,s)}function Ee(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=dt(e);for(const o in r){const s=r[o];s&&(t(o,ht(e,o,s)),n.push(o))}return n}const pt={provider:"",aliases:{},not_found:{},...Pe};function U(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Fe(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!U(e,pt))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(O)||typeof s.body!="string"||!U(s,K))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(O)||typeof i!="string"||!n[i]&&!r[i]||!U(s,K))return null}return t}const de=Object.create(null);function gt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const n=de[e]||(de[e]=Object.create(null));return n[t]||(n[t]=gt(e,t))}function ee(e,t){return Fe(t)?Ee(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function mt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let P=!1;function Le(e){return typeof e=="boolean"&&(P=e),P}function te(e){const t=typeof e=="string"?L(e,!0,P):e;if(t){const n=k(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function bt(e,t){const n=L(e,!0,P);if(!n)return!1;const r=k(n.provider,n.prefix);return mt(r,n.name,t)}function yt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),P&&!t&&!e.prefix){let o=!1;return Fe(e)&&(e.prefix="",Ee(e,(s,i)=>{i&&bt(s,i)&&(o=!0)})),o}const n=e.prefix;if(!D({provider:t,prefix:n,name:"a"}))return!1;const r=k(t,n);return!!ee(r,e)}function wt(e){return!!te(e)}const Me=Object.freeze({width:null,height:null}),Ae=Object.freeze({...Me,...q}),xt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,_t=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function he(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(xt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=_t.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function St(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(o+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function It(e,t){return e?"<defs>"+e+"</defs>"+t:t}function vt(e,t,n){const r=St(e);return It(r.defs,t+r.content+n)}const kt=e=>e==="unset"||e==="undefined"||e==="none";function Ct(e,t){const n={...M,...e},r={...Ae,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(S=>{const m=[],g=S.hFlip,u=S.vFlip;let _=S.rotate;g?u?_+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):u&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let w;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:w=o.height/2+o.top,m.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,m.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}_%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),m.length&&(s=vt(s,'<g transform="'+m.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,l=o.width,f=o.height;let a,d;i===null?(d=c===null?"1em":c==="auto"?f:c,a=he(d,l/f)):(a=i==="auto"?l:i,d=c===null?he(a,f/l):c==="auto"?f:c);const p={},b=(S,m)=>{kt(m)||(p[S]=m.toString())};b("width",a),b("height",d);const y=[o.left,o.top,l,f];return p.viewBox=y.join(" "),{attributes:p,viewBox:y,body:s}}const Tt=/\sid="(\S+)"/g,jt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ot=0;function Pt(e,t=jt){const n=[];let r;for(;r=Tt.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(Ot++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const J=Object.create(null);function Et(e,t){J[e]=t}function W(e){return J[e]||J[""]}function ne(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const oe=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],R=[];for(;j.length>0;)j.length===1||Math.random()>.5?R.push(j.shift()):R.push(j.pop());oe[""]=ne({resources:["https://api.iconify.design"].concat(R)});function Ft(e,t){const n=ne(t);return n===null?!1:(oe[e]=n,!0)}function re(e){return oe[e]}const Lt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let pe=Lt();function Mt(e,t){const n=re(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function At(e){return e===404}const Nt=(e,t,n)=>{const r=[],o=Mt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Dt(e){if(typeof e=="string"){const t=re(e);if(t)return t.path}return"/"}const Rt=(e,t,n)=>{if(!pe){n("abort",424);return}let r=Dt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;pe(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(At(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},zt={prepare:Nt,send:Rt};function Bt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),f=l[i]||(l[i]=k(s,i));let a;c in f.icons?a=t.loaded:i===""||f.missing.has(c)?a=t.missing:a=t.pending;const d={provider:s,prefix:i,name:c};a.push(d)}),t}function Ne(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Ht(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(e.icons[f])i.loaded.push({provider:r,prefix:o,name:f});else if(e.missing.has(f))i.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Ne([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let qt=0;function Qt(e,t,n){const r=qt++,o=Ne.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Vt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?L(o,t,n):o;s&&r.push(s)}),r}var Ut={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Gt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let h=e.resources.slice(0);for(i=[];h.length>1;){const x=Math.floor(Math.random()*h.length);i.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}i=i.concat(h)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",f=0,a,d=null,p=[],b=[];typeof r=="function"&&b.push(r);function y(){d&&(clearTimeout(d),d=null)}function S(){l==="pending"&&(l="aborted"),y(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function m(h,x){x&&(b=[]),typeof h=="function"&&b.push(h)}function g(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:p.length,subscribe:m,abort:S}}function u(){l="failed",b.forEach(h=>{h(void 0,a)})}function _(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function w(h,x,T){const A=x!=="success";switch(p=p.filter(I=>I!==h),l){case"pending":break;case"failed":if(A||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){a=T,u();return}if(A){a=T,p.length||(i.length?V():u());return}if(y(),_(),!e.random){const I=e.resources.indexOf(h.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",b.forEach(I=>{I(T)})}function V(){if(l!=="pending")return;y();const h=i.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{y(),l==="pending"&&(_(),u())},e.timeout);return}u();return}const x={status:"pending",resource:h,callback:(T,A)=>{w(x,T,A)}};p.push(x),f++,d=setTimeout(V,e.rotate),n(h,t,x.callback)}return setTimeout(V),g}function De(e){const t={...Ut,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=Gt(t,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(a),a}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function ge(){}const G=Object.create(null);function Kt(e){if(!G[e]){const t=re(e);if(!t)return;const n=De(t),r={config:t,redundancy:n};G[e]=r}return G[e]}function Jt(e,t,n){let r,o;if(typeof e=="string"){const s=W(e);if(!s)return n(void 0,424),ge;o=s.send;const i=Kt(e);i&&(r=i.redundancy)}else{const s=ne(e);if(s){r=De(s);const i=e.resources?e.resources[0]:"",c=W(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),ge):r.query(t,o,n)().abort}const me="iconify2",E="iconify",Re=E+"-count",be=E+"-version",ze=36e5,Wt=168,Xt=50;function X(e,t){try{return e.getItem(t)}catch{}}function se(e,t,n){try{return e.setItem(t,n),!0}catch{}}function ye(e,t){try{e.removeItem(t)}catch{}}function Y(e,t){return se(e,Re,t.toString())}function Z(e){return parseInt(X(e,Re))||0}const Q={local:!0,session:!0},Be={local:new Set,session:new Set};let ie=!1;function Yt(e){ie=e}let N=typeof window>"u"?{}:window;function He(e){const t=e+"Storage";try{if(N&&N[t]&&typeof N[t].length=="number")return N[t]}catch{}Q[e]=!1}function qe(e,t){const n=He(e);if(!n)return;const r=X(n,be);if(r!==me){if(r){const c=Z(n);for(let l=0;l<c;l++)ye(n,E+l.toString())}se(n,be,me),Y(n,0);return}const o=Math.floor(Date.now()/ze)-Wt,s=c=>{const l=E+c.toString(),f=X(n,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&t(a,c))return!0}catch{}ye(n,l)}};let i=Z(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,Y(n,i)):Be[e].add(c))}function Qe(){if(!ie){Yt(!0);for(const e in Q)qe(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=k(r,o);if(!ee(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Zt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in Q)qe(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function $t(e,t){ie||Qe();function n(r){let o;if(!Q[r]||!(o=He(r)))return;const s=Be[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Z(o),i>=Xt||!Y(o,i+1))return;const c={cached:Math.floor(Date.now()/ze),provider:e.provider,data:t};return se(o,E+i.toString(),JSON.stringify(c))}t.lastModified&&!Zt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function we(){}function en(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Ht(e)}))}function tn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=W(n)))return;s.prepare(n,r,o).forEach(c=>{Jt(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{e.missing.add(f)});else try{const f=ee(e,l);if(!f.length)return;const a=e.pendingIcons;a&&f.forEach(d=>{a.delete(d)}),$t(e,l)}catch(f){console.error(f)}en(e)})})}))}const Ve=(e,t)=>{const n=Vt(e,!0,Le()),r=Bt(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,we)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===i)return;i=f,c=a,s.push(k(f,a));const d=o[f]||(o[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:d}=l,p=k(f,a),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(d)||(b.add(d),o[f][a].push(d))}),s.forEach(l=>{const{provider:f,prefix:a}=l;o[f][a].length&&tn(l,o[f][a])}),t?Qt(t,r,s):we},nn=e=>new Promise((t,n)=>{const r=typeof e=="string"?L(e,!0):e;if(!r){n(e);return}Ve([r||e],o=>{if(o.length&&r){const s=te(r);if(s){t({...M,...s});return}}n(e)})});function on(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Me?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const rn=/[\s,]+/;function sn(e,t){t.split(rn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function cn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}function ln(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function fn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function an(e){return"data:image/svg+xml,"+fn(e)}function un(e){return'url("'+an(e)+'")'}const xe={...Ae,inline:!1},dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},hn={display:"inline-block"},$={"background-color":"currentColor"},Ue={"background-color":"transparent"},_e={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Se={"-webkit-mask":$,mask:$,background:Ue};for(const e in Se){const t=Se[e];for(const n in _e)t[e+"-"+n]=_e[n]}function pn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function gn(e,t){const n=on(xe,t),r=t.mode||"svg",o=r==="svg"?{...dn}:{};e.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let s=typeof t.style=="string"?t.style:"";for(let g in t){const u=t[g];if(u!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&sn(n,u);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+u+"; ";break;case"rotate":typeof u=="string"?n[g]=cn(u):typeof u=="number"&&(n[g]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete o["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;xe[g]===void 0&&(o[g]=u)}}const i=Ct(e,n),c=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),r==="svg"){Object.assign(o,c),s!==""&&(o.style=s);let g=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),{svg:!0,attributes:o,body:Pt(i.body,u?()=>u+"ID"+g++:"iconifySvelte")}}const{body:l,width:f,height:a}=e,d=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),p=ln(l,{...c,width:f+"",height:a+""}),y={"--svg":un(p)},S=g=>{const u=c[g];u&&(y[g]=pn(u))};S("width"),S("height"),Object.assign(y,hn,d?$:Ue);let m="";for(const g in y)m+=g+": "+y[g]+";";return o.style=m+s,{svg:!1,attributes:o}}Le(!0);Et("",zt);if(typeof document<"u"&&typeof window<"u"){Qe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!yt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Ft(n,o)||console.error(r)}catch{console.error(r)}}}}function mn(e,t,n,r,o){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",s(),{data:{...M,...e}};let i;if(typeof e!="string"||(i=L(e,!1,!0))===null)return s(),null;const c=te(i);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:Ve([i],r)}),null;s(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function bn(e,t){return e?gn({...M,...e},t):null}function Ie(e){let t;function n(s,i){return s[0].svg?wn:yn}let r=n(e),o=r(e);return{c(){o.c(),t=C()},l(s){o.l(s),t=C()},m(s,i){o.m(s,i),F(s,t,i)},p(s,i){r===(r=n(s))&&o?o.p(s,i):(o.d(1),o=r(s),o&&(o.c(),o.m(t.parentNode,t)))},d(s){s&&v(t),o.d(s)}}}function yn(e){let t,n=[e[0].attributes],r={};for(let o=0;o<n.length;o+=1)r=z(r,n[o]);return{c(){t=Je("span"),this.h()},l(o){t=We(o,"SPAN",{}),Ce(t).forEach(v),this.h()},h(){fe(t,r)},m(o,s){F(o,t,s)},p(o,s){fe(t,r=Oe(n,[s&1&&o[0].attributes]))},d(o){o&&v(t)}}}function wn(e){let t,n,r=e[0].body+"",o=[e[0].attributes],s={};for(let i=0;i<o.length;i+=1)s=z(s,o[i]);return{c(){t=Xe("svg"),n=new Ye(!0),this.h()},l(i){t=Ze(i,"svg",{});var c=Ce(t);n=$e(c,!0),c.forEach(v),this.h()},h(){n.a=null,ae(t,s)},m(i,c){F(i,t,c),n.m(r,t)},p(i,c){c&1&&r!==(r=i[0].body+"")&&n.p(r),ae(t,s=Oe(o,[c&1&&i[0].attributes]))},d(i){i&&v(t)}}}function xn(e){let t,n=e[0]&&Ie(e);return{c(){n&&n.c(),t=C()},l(r){n&&n.l(r),t=C()},m(r,o){n&&n.m(r,o),F(r,t,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=Ie(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:ce,o:ce,d(r){r&&v(t),n&&n.d(r)}}}function _n(e,t,n){const r={name:"",loading:null,destroyed:!1};let o=!1,s=0,i;const c=f=>{typeof t.onLoad=="function"&&t.onLoad(f),et()("load",{icon:f})};function l(){n(3,s++,s)}return Ge(()=>{n(2,o=!0)}),Ke(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),e.$$set=f=>{n(6,t=z(z({},t),le(f)))},e.$$.update=()=>{{const f=mn(t.icon,r,o,l,c);n(0,i=f?bn(f.data,t):null),i&&f.classes&&n(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+f.classes.join(" "),i)}},t=le(t),[i,r,o,s]}class Sn extends Te{constructor(t){super(),je(this,t,_n,xn,ke,{})}}const In=e=>({}),ve=e=>({});function vn(e){let t;const n=e[5].fallback,r=tt(n,e,e[4],ve);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,s){r&&r.m(o,s),t=!0},p(o,s){r&&r.p&&(!t||s&16)&&nt(r,n,o,o[4],t?rt(n,o[4],s,In):ot(o[4]),ve)},i(o){t||(H(r,o),t=!0)},o(o){B(r,o),t=!1},d(o){r&&r.d(o)}}}function kn(e){let t,n;return t=new Sn({props:{icon:e[1],class:e[2]}}),{c(){ct(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,o){ft(t,r,o),n=!0},p(r,o){const s={};o&2&&(s.icon=r[1]),o&4&&(s.class=r[2]),t.$set(s)},i(r){n||(H(t.$$.fragment,r),n=!0)},o(r){B(t.$$.fragment,r),n=!1},d(r){at(t,r)}}}function Cn(e){let t,n,r,o;const s=[kn,vn],i=[];function c(l,f){return l[0]?0:1}return t=c(e),n=i[t]=s[t](e),{c(){n.c(),r=C()},l(l){n.l(l),r=C()},m(l,f){i[t].m(l,f),F(l,r,f),o=!0},p(l,[f]){let a=t;t=c(l),t===a?i[t].p(l,f):(st(),B(i[a],1,1,()=>{i[a]=null}),it(),n=i[t],n?n.p(l,f):(n=i[t]=s[t](l),n.c()),H(n,1),n.m(r.parentNode,r))},i(l){o||(H(n),o=!0)},o(l){B(n),o=!1},d(l){l&&v(r),i[t].d(l)}}}function Tn(e,t,n){let{$$slots:r={},$$scope:o}=t,{icon:s}=t,{loaded:i=!1}=t,{class:c=""}=t,l=0;return e.$$set=f=>{"icon"in f&&n(1,s=f.icon),"loaded"in f&&n(0,i=f.loaded),"class"in f&&n(2,c=f.class),"$$scope"in f&&n(4,o=f.$$scope)},e.$$.update=()=>{e.$$.dirty&11&&(n(0,i=wt(s)),i||nn(s).then(()=>n(3,l++,l)).catch(()=>{}))},[i,s,c,l,o,r]}class En extends Te{constructor(t){super(),je(this,t,Tn,Cn,ke,{icon:1,loaded:0,class:2})}}export{En as F,Pn as e};
