import{s as q,e as C,t as ke,c as T,b as O,l as $e,f as m,h as v,i as j,j as I,m as xe,n as H,B as R,D as It,Z as St,_ as le,$ as Oe,a0 as Le,o as Ct,a1 as Tt,p as Et,a2 as jt,a3 as Pe,z as Mt,a4 as oe,J as Ot,a as F,d as D,v as Fe,r as Lt,w as Pt,x as Ft,y as Dt,L as At,g as fe,A as st}from"../chunks/scheduler.gOsEWCtT.js";import{S as Q,i as G,g as W,b as k,e as K,t as y,c as A,a as N,m as V,d as B,f as De}from"../chunks/index.ppapEzZj.js";import{e as ce}from"../chunks/each.D6YF6ztN.js";import{b as X}from"../chunks/paths.CZVBrT_4.js";import{i as it}from"../chunks/themeStore.BgKeu88Z.js";import{L as Nt}from"../chunks/LookingTube.Dfgf8BWe.js";function lt(t,e){const r={},n={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],l=e[s];if(l){for(const a in i)a in l||(n[a]=1);for(const a in l)o[a]||(r[a]=l[a],o[a]=1);t[s]=l}else for(const a in i)o[a]=1}for(const i in n)i in r||(r[i]=void 0);return r}function Vt(t){let e,r=t[0].shortTitle+"",n;return{c(){e=C("a"),n=ke(r),this.h()},l(o){e=T(o,"A",{href:!0,target:!0,class:!0});var s=O(e);n=$e(s,r),s.forEach(m),this.h()},h(){v(e,"href",t[1]),v(e,"target","_blank"),v(e,"class","article-header")},m(o,s){j(o,e,s),I(e,n)},p(o,[s]){s&1&&r!==(r=o[0].shortTitle+"")&&xe(n,r),s&2&&v(e,"href",o[1])},i:H,o:H,d(o){o&&m(e)}}}function Bt(t,e,r){let{article:n}=e,o=n.articleUrl;return o.startsWith("/")&&(o=X+o),t.$$set=s=>{"article"in s&&r(0,n=s.article)},[n,o]}class ct extends Q{constructor(e){super(),G(this,e,Bt,Vt,q,{article:0})}}const Z=/^[a-z0-9]+(-[a-z0-9]+)*$/,te=(t,e,r,n="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),a=o.pop(),c={provider:o.length>0?o[0]:n,prefix:a,name:l};return e&&!se(c)?null:c}const s=o[0],i=s.split("-");if(i.length>1){const l={provider:n,prefix:i.shift(),name:i.join("-")};return e&&!se(l)?null:l}if(r&&n===""){const l={provider:n,prefix:"",name:s};return e&&!se(l,r)?null:l}return null},se=(t,e)=>t?!!((t.provider===""||t.provider.match(Z))&&(e&&t.prefix===""||t.prefix.match(Z))&&t.name.match(Z)):!1,at=Object.freeze({left:0,top:0,width:16,height:16}),ae=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ne=Object.freeze({...at,...ae}),ge=Object.freeze({...ne,body:"",hidden:!1});function Ht(t,e){const r={};!t.hFlip!=!e.hFlip&&(r.hFlip=!0),!t.vFlip!=!e.vFlip&&(r.vFlip=!0);const n=((t.rotate||0)+(e.rotate||0))%4;return n&&(r.rotate=n),r}function Ae(t,e){const r=Ht(t,e);for(const n in ge)n in ae?n in t&&!(n in r)&&(r[n]=ae[n]):n in e?r[n]=e[n]:n in t&&(r[n]=t[n]);return r}function zt(t,e){const r=t.icons,n=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(r[i])return o[i]=[];if(!(i in o)){o[i]=null;const l=n[i]&&n[i].parent,a=l&&s(l);a&&(o[i]=[l].concat(a))}return o[i]}return Object.keys(r).concat(Object.keys(n)).forEach(s),o}function Rt(t,e,r){const n=t.icons,o=t.aliases||Object.create(null);let s={};function i(l){s=Ae(n[l]||o[l],s)}return i(e),r.forEach(i),Ae(t,s)}function ft(t,e){const r=[];if(typeof t!="object"||typeof t.icons!="object")return r;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),r.push(o)});const n=zt(t);for(const o in n){const s=n[o];s&&(e(o,Rt(t,o,s)),r.push(o))}return r}const Ut={provider:"",aliases:{},not_found:{},...at};function de(t,e){for(const r in e)if(r in t&&typeof t[r]!=typeof e[r])return!1;return!0}function ut(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!de(t,Ut))return null;const r=e.icons;for(const o in r){const s=r[o];if(!o.match(Z)||typeof s.body!="string"||!de(s,ge))return null}const n=e.aliases||Object.create(null);for(const o in n){const s=n[o],i=s.parent;if(!o.match(Z)||typeof i!="string"||!r[i]&&!n[i]||!de(s,ge))return null}return e}const Ne=Object.create(null);function qt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function U(t,e){const r=Ne[t]||(Ne[t]=Object.create(null));return r[e]||(r[e]=qt(t,e))}function Ie(t,e){return ut(e)?ft(e,(r,n)=>{n?t.icons[r]=n:t.missing.add(r)}):[]}function Qt(t,e,r){try{if(typeof r.body=="string")return t.icons[e]={...r},!0}catch{}return!1}let Y=!1;function dt(t){return typeof t=="boolean"&&(Y=t),Y}function Se(t){const e=typeof t=="string"?te(t,!0,Y):t;if(e){const r=U(e.provider,e.prefix),n=e.name;return r.icons[n]||(r.missing.has(n)?null:void 0)}}function Gt(t,e){const r=te(t,!0,Y);if(!r)return!1;const n=U(r.provider,r.prefix);return Qt(n,r.name,e)}function Wt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Y&&!e&&!t.prefix){let o=!1;return ut(t)&&(t.prefix="",ft(t,(s,i)=>{i&&Gt(s,i)&&(o=!0)})),o}const r=t.prefix;if(!se({provider:e,prefix:r,name:"a"}))return!1;const n=U(e,r);return!!Ie(n,t)}function Kt(t){return!!Se(t)}const ht=Object.freeze({width:null,height:null}),pt=Object.freeze({...ht,...ae}),Jt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Zt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ve(t,e,r){if(e===1)return t;if(r=r||100,typeof t=="number")return Math.ceil(t*e*r)/r;if(typeof t!="string")return t;const n=t.split(Jt);if(n===null||!n.length)return t;const o=[];let s=n.shift(),i=Zt.test(s);for(;;){if(i){const l=parseFloat(s);isNaN(l)?o.push(s):o.push(Math.ceil(l*e*r)/r)}else o.push(s);if(s=n.shift(),s===void 0)return o.join("");i=!i}}function Xt(t,e="defs"){let r="";const n=t.indexOf("<"+e);for(;n>=0;){const o=t.indexOf(">",n),s=t.indexOf("</"+e);if(o===-1||s===-1)break;const i=t.indexOf(">",s);if(i===-1)break;r+=t.slice(o+1,s).trim(),t=t.slice(0,n).trim()+t.slice(i+1)}return{defs:r,content:t}}function Yt(t,e){return t?"<defs>"+t+"</defs>"+e:e}function en(t,e,r){const n=Xt(t);return Yt(n.defs,e+n.content+r)}const tn=t=>t==="unset"||t==="undefined"||t==="none";function nn(t,e){const r={...ne,...t},n={...pt,...e},o={left:r.left,top:r.top,width:r.width,height:r.height};let s=r.body;[r,n].forEach(E=>{const _=[],g=E.hFlip,p=E.vFlip;let M=E.rotate;g?p?M+=2:(_.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),_.push("scale(-1 1)"),o.top=o.left=0):p&&(_.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),_.push("scale(1 -1)"),o.top=o.left=0);let $;switch(M<0&&(M-=Math.floor(M/4)*4),M=M%4,M){case 1:$=o.height/2+o.top,_.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:_.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:$=o.width/2+o.left,_.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}M%2===1&&(o.left!==o.top&&($=o.left,o.left=o.top,o.top=$),o.width!==o.height&&($=o.width,o.width=o.height,o.height=$)),_.length&&(s=en(s,'<g transform="'+_.join(" ")+'">',"</g>"))});const i=n.width,l=n.height,a=o.width,c=o.height;let f,u;i===null?(u=l===null?"1em":l==="auto"?c:l,f=Ve(u,a/c)):(f=i==="auto"?a:i,u=l===null?Ve(f,c/a):l==="auto"?c:l);const h={},S=(E,_)=>{tn(_)||(h[E]=_.toString())};S("width",f),S("height",u);const w=[o.left,o.top,a,c];return h.viewBox=w.join(" "),{attributes:h,viewBox:w,body:s}}const rn=/\sid="(\S+)"/g,on="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let sn=0;function ln(t,e=on){const r=[];let n;for(;n=rn.exec(t);)r.push(n[1]);if(!r.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return r.forEach(s=>{const i=typeof e=="function"?e(s):e+(sn++).toString(),l=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const me=Object.create(null);function cn(t,e){me[t]=e}function _e(t){return me[t]||me[""]}function Ce(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Te=Object.create(null),J=["https://api.simplesvg.com","https://api.unisvg.com"],ie=[];for(;J.length>0;)J.length===1||Math.random()>.5?ie.push(J.shift()):ie.push(J.pop());Te[""]=Ce({resources:["https://api.iconify.design"].concat(ie)});function an(t,e){const r=Ce(e);return r===null?!1:(Te[t]=r,!0)}function Ee(t){return Te[t]}const fn=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Be=fn();function un(t,e){const r=Ee(t);if(!r)return 0;let n;if(!r.maxURL)n=0;else{let o=0;r.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";n=r.maxURL-o-r.path.length-s.length}return n}function dn(t){return t===404}const hn=(t,e,r)=>{const n=[],o=un(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},l=0;return r.forEach((a,c)=>{l+=a.length+1,l>=o&&c>0&&(n.push(i),i={type:s,provider:t,prefix:e,icons:[]},l=a.length),i.icons.push(a)}),n.push(i),n};function pn(t){if(typeof t=="string"){const e=Ee(t);if(e)return e.path}return"/"}const gn=(t,e,r)=>{if(!Be){r("abort",424);return}let n=pn(e.provider);switch(e.type){case"icons":{const s=e.prefix,l=e.icons.join(","),a=new URLSearchParams({icons:l});n+=s+".json?"+a.toString();break}case"custom":{const s=e.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:r("abort",400);return}let o=503;Be(t+n).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{r(dn(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?r("abort",s):r("next",o)});return}setTimeout(()=>{r("success",s)})}).catch(()=>{r("next",o)})},mn={prepare:hn,send:gn};function _n(t){const e={loaded:[],missing:[],pending:[]},r=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return t.forEach(o=>{if(n.name===o.name&&n.prefix===o.prefix&&n.provider===o.provider)return;n=o;const s=o.provider,i=o.prefix,l=o.name,a=r[s]||(r[s]=Object.create(null)),c=a[i]||(a[i]=U(s,i));let f;l in c.icons?f=e.loaded:i===""||c.missing.has(l)?f=e.missing:f=e.pending;const u={provider:s,prefix:i,name:l};f.push(u)}),e}function gt(t,e){t.forEach(r=>{const n=r.loaderCallbacks;n&&(r.loaderCallbacks=n.filter(o=>o.id!==e))})}function bn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let r=!1;const n=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,l=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const c=a.name;if(t.icons[c])i.loaded.push({provider:n,prefix:o,name:c});else if(t.missing.has(c))i.missing.push({provider:n,prefix:o,name:c});else return r=!0,!0;return!1}),i.pending.length!==l&&(r||gt([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let yn=0;function vn(t,e,r){const n=yn++,o=gt.bind(null,r,n);if(!e.pending.length)return o;const s={id:n,icons:e,callback:t,abort:o};return r.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function wn(t,e=!0,r=!1){const n=[];return t.forEach(o=>{const s=typeof o=="string"?te(o,e,r):o;s&&n.push(s)}),n}var kn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function $n(t,e,r,n){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let d=t.resources.slice(0);for(i=[];d.length>1;){const b=Math.floor(Math.random()*d.length);i.push(d[b]),d=d.slice(0,b).concat(d.slice(b+1))}i=i.concat(d)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const l=Date.now();let a="pending",c=0,f,u=null,h=[],S=[];typeof n=="function"&&S.push(n);function w(){u&&(clearTimeout(u),u=null)}function E(){a==="pending"&&(a="aborted"),w(),h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function _(d,b){b&&(S=[]),typeof d=="function"&&S.push(d)}function g(){return{startTime:l,payload:e,status:a,queriesSent:c,queriesPending:h.length,subscribe:_,abort:E}}function p(){a="failed",S.forEach(d=>{d(void 0,f)})}function M(){h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function $(d,b,L){const P=b!=="success";switch(h=h.filter(x=>x!==d),a){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){f=L,p();return}if(P){f=L,h.length||(i.length?z():p());return}if(w(),M(),!t.random){const x=t.resources.indexOf(d.resource);x!==-1&&x!==t.index&&(t.index=x)}a="completed",S.forEach(x=>{x(L)})}function z(){if(a!=="pending")return;w();const d=i.shift();if(d===void 0){if(h.length){u=setTimeout(()=>{w(),a==="pending"&&(M(),p())},t.timeout);return}p();return}const b={status:"pending",resource:d,callback:(L,P)=>{$(b,L,P)}};h.push(b),c++,u=setTimeout(z,t.rotate),r(d,e,b.callback)}return setTimeout(z),g}function mt(t){const e={...kn,...t};let r=[];function n(){r=r.filter(l=>l().status==="pending")}function o(l,a,c){const f=$n(e,l,a,(u,h)=>{n(),c&&c(u,h)});return r.push(f),f}function s(l){return r.find(a=>l(a))||null}return{query:o,find:s,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:n}}function He(){}const he=Object.create(null);function xn(t){if(!he[t]){const e=Ee(t);if(!e)return;const r=mt(e),n={config:e,redundancy:r};he[t]=n}return he[t]}function In(t,e,r){let n,o;if(typeof t=="string"){const s=_e(t);if(!s)return r(void 0,424),He;o=s.send;const i=xn(t);i&&(n=i.redundancy)}else{const s=Ce(t);if(s){n=mt(s);const i=t.resources?t.resources[0]:"",l=_e(i);l&&(o=l.send)}}return!n||!o?(r(void 0,424),He):n.query(e,o,r)().abort}const ze="iconify2",ee="iconify",_t=ee+"-count",Re=ee+"-version",bt=36e5,Sn=168,Cn=50;function be(t,e){try{return t.getItem(e)}catch{}}function je(t,e,r){try{return t.setItem(e,r),!0}catch{}}function Ue(t,e){try{t.removeItem(e)}catch{}}function ye(t,e){return je(t,_t,e.toString())}function ve(t){return parseInt(be(t,_t))||0}const ue={local:!0,session:!0},yt={local:new Set,session:new Set};let Me=!1;function Tn(t){Me=t}let re=typeof window>"u"?{}:window;function vt(t){const e=t+"Storage";try{if(re&&re[e]&&typeof re[e].length=="number")return re[e]}catch{}ue[t]=!1}function wt(t,e){const r=vt(t);if(!r)return;const n=be(r,Re);if(n!==ze){if(n){const l=ve(r);for(let a=0;a<l;a++)Ue(r,ee+a.toString())}je(r,Re,ze),ye(r,0);return}const o=Math.floor(Date.now()/bt)-Sn,s=l=>{const a=ee+l.toString(),c=be(r,a);if(typeof c=="string"){try{const f=JSON.parse(c);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&e(f,l))return!0}catch{}Ue(r,a)}};let i=ve(r);for(let l=i-1;l>=0;l--)s(l)||(l===i-1?(i--,ye(r,i)):yt[t].add(l))}function kt(){if(!Me){Tn(!0);for(const t in ue)wt(t,e=>{const r=e.data,n=e.provider,o=r.prefix,s=U(n,o);if(!Ie(s,r).length)return!1;const i=r.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function En(t,e){const r=t.lastModifiedCached;if(r&&r>=e)return r===e;if(t.lastModifiedCached=e,r)for(const n in ue)wt(n,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function jn(t,e){Me||kt();function r(n){let o;if(!ue[n]||!(o=vt(n)))return;const s=yt[n];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=ve(o),i>=Cn||!ye(o,i+1))return;const l={cached:Math.floor(Date.now()/bt),provider:t.provider,data:e};return je(o,ee+i.toString(),JSON.stringify(l))}e.lastModified&&!En(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),r("local")||r("session"))}function qe(){}function Mn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,bn(t)}))}function On(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:r,prefix:n}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=_e(r)))return;s.prepare(r,n,o).forEach(l=>{In(r,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{t.missing.add(c)});else try{const c=Ie(t,a);if(!c.length)return;const f=t.pendingIcons;f&&c.forEach(u=>{f.delete(u)}),jn(t,a)}catch(c){console.error(c)}Mn(t)})})}))}const $t=(t,e)=>{const r=wn(t,!0,dt()),n=_n(r);if(!n.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(n.loaded,n.missing,n.pending,qe)}),()=>{a=!1}}const o=Object.create(null),s=[];let i,l;return n.pending.forEach(a=>{const{provider:c,prefix:f}=a;if(f===l&&c===i)return;i=c,l=f,s.push(U(c,f));const u=o[c]||(o[c]=Object.create(null));u[f]||(u[f]=[])}),n.pending.forEach(a=>{const{provider:c,prefix:f,name:u}=a,h=U(c,f),S=h.pendingIcons||(h.pendingIcons=new Set);S.has(u)||(S.add(u),o[c][f].push(u))}),s.forEach(a=>{const{provider:c,prefix:f}=a;o[c][f].length&&On(a,o[c][f])}),e?vn(e,n,s):qe},Ln=t=>new Promise((e,r)=>{const n=typeof t=="string"?te(t,!0):t;if(!n){r(t);return}$t([n||t],o=>{if(o.length&&n){const s=Se(n);if(s){e({...ne,...s});return}}r(t)})});function Pn(t,e){const r={...t};for(const n in e){const o=e[n],s=typeof o;n in ht?(o===null||o&&(s==="string"||s==="number"))&&(r[n]=o):s===typeof r[n]&&(r[n]=n==="rotate"?o%4:o)}return r}const Fn=/[\s,]+/;function Dn(t,e){e.split(Fn).forEach(r=>{switch(r.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function An(t,e=0){const r=t.replace(/^-?[0-9.]*/,"");function n(o){for(;o<0;)o+=4;return o%4}if(r===""){const o=parseInt(t);return isNaN(o)?0:n(o)}else if(r!==t){let o=0;switch(r){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-r.length));return isNaN(s)?0:(s=s/o,s%1===0?n(s):0)}}return e}function Nn(t,e){let r=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in e)r+=" "+n+'="'+e[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+t+"</svg>"}function Vn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Bn(t){return"data:image/svg+xml,"+Vn(t)}function Hn(t){return'url("'+Bn(t)+'")'}const Qe={...pt,inline:!1},zn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Rn={display:"inline-block"},we={"background-color":"currentColor"},xt={"background-color":"transparent"},Ge={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},We={"-webkit-mask":we,mask:we,background:xt};for(const t in We){const e=We[t];for(const r in Ge)e[t+"-"+r]=Ge[r]}function Un(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function qn(t,e){const r=Pn(Qe,e),n=e.mode||"svg",o=n==="svg"?{...zn}:{};t.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let s=typeof e.style=="string"?e.style:"";for(let g in e){const p=e[g];if(p!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":r[g]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&Dn(r,p);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+p+"; ";break;case"rotate":typeof p=="string"?r[g]=An(p):typeof p=="number"&&(r[g]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete o["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;Qe[g]===void 0&&(o[g]=p)}}const i=nn(t,r),l=i.attributes;if(r.inline&&(s="vertical-align: -0.125em; "+s),n==="svg"){Object.assign(o,l),s!==""&&(o.style=s);let g=0,p=e.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),{svg:!0,attributes:o,body:ln(i.body,p?()=>p+"ID"+g++:"iconifySvelte")}}const{body:a,width:c,height:f}=t,u=n==="mask"||(n==="bg"?!1:a.indexOf("currentColor")!==-1),h=Nn(a,{...l,width:c+"",height:f+""}),w={"--svg":Hn(h)},E=g=>{const p=l[g];p&&(w[g]=Un(p))};E("width"),E("height"),Object.assign(w,Rn,u?we:xt);let _="";for(const g in w)_+=g+": "+w[g]+";";return o.style=_+s,{svg:!1,attributes:o}}dt(!0);cn("",mn);if(typeof document<"u"&&typeof window<"u"){kt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Wt(n))&&console.error(r)}catch{console.error(r)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let r in e){const n="IconifyProviders["+r+"] is invalid.";try{const o=e[r];if(typeof o!="object"||!o||o.resources===void 0)continue;an(r,o)||console.error(n)}catch{console.error(n)}}}}function Qn(t,e,r,n,o){function s(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof t=="object"&&t!==null&&typeof t.body=="string")return e.name="",s(),{data:{...ne,...t}};let i;if(typeof t!="string"||(i=te(t,!1,!0))===null)return s(),null;const l=Se(i);if(!l)return r&&(!e.loading||e.loading.name!==t)&&(s(),e.name="",e.loading={name:t,abort:$t([i],n)}),null;s(),e.name!==t&&(e.name=t,o&&!e.destroyed&&o(t));const a=["iconify"];return i.prefix!==""&&a.push("iconify--"+i.prefix),i.provider!==""&&a.push("iconify--"+i.provider),{data:l,classes:a}}function Gn(t,e){return t?qn({...ne,...t},e):null}function Ke(t){let e;function r(s,i){return s[0].svg?Kn:Wn}let n=r(t),o=n(t);return{c(){o.c(),e=R()},l(s){o.l(s),e=R()},m(s,i){o.m(s,i),j(s,e,i)},p(s,i){n===(n=r(s))&&o?o.p(s,i):(o.d(1),o=n(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){s&&m(e),o.d(s)}}}function Wn(t){let e,r=[t[0].attributes],n={};for(let o=0;o<r.length;o+=1)n=le(n,r[o]);return{c(){e=C("span"),this.h()},l(o){e=T(o,"SPAN",{}),O(e).forEach(m),this.h()},h(){Le(e,n)},m(o,s){j(o,e,s)},p(o,s){Le(e,n=lt(r,[s&1&&o[0].attributes]))},d(o){o&&m(e)}}}function Kn(t){let e,r,n=t[0].body+"",o=[t[0].attributes],s={};for(let i=0;i<o.length;i+=1)s=le(s,o[i]);return{c(){e=Ct("svg"),r=new Tt(!0),this.h()},l(i){e=Et(i,"svg",{});var l=O(e);r=jt(l,!0),l.forEach(m),this.h()},h(){r.a=null,Pe(e,s)},m(i,l){j(i,e,l),r.m(n,e)},p(i,l){l&1&&n!==(n=i[0].body+"")&&r.p(n),Pe(e,s=lt(o,[l&1&&i[0].attributes]))},d(i){i&&m(e)}}}function Jn(t){let e,r=t[0]&&Ke(t);return{c(){r&&r.c(),e=R()},l(n){r&&r.l(n),e=R()},m(n,o){r&&r.m(n,o),j(n,e,o)},p(n,[o]){n[0]?r?r.p(n,o):(r=Ke(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:H,o:H,d(n){n&&m(e),r&&r.d(n)}}}function Zn(t,e,r){const n={name:"",loading:null,destroyed:!1};let o=!1,s=0,i;const l=c=>{typeof e.onLoad=="function"&&e.onLoad(c),Mt()("load",{icon:c})};function a(){r(3,s++,s)}return It(()=>{r(2,o=!0)}),St(()=>{r(1,n.destroyed=!0,n),n.loading&&(n.loading.abort(),r(1,n.loading=null,n))}),t.$$set=c=>{r(6,e=le(le({},e),Oe(c)))},t.$$.update=()=>{{const c=Qn(e.icon,n,o,a,l);r(0,i=c?Gn(c.data,e):null),i&&c.classes&&r(0,i.attributes.class=(typeof e.class=="string"?e.class+" ":"")+c.classes.join(" "),i)}},e=Oe(e),[i,n,o,s]}class Xn extends Q{constructor(e){super(),G(this,e,Zn,Jn,q,{})}}function Yn(t){let e;return{c(){e=C("div"),this.h()},l(r){e=T(r,"DIV",{class:!0}),O(e).forEach(m),this.h()},h(){v(e,"class","w-full h-full border-2 border-neutral-800 dark:border-neutral-200 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200")},m(r,n){j(r,e,n)},p:H,i:H,o:H,d(r){r&&m(e)}}}function er(t){let e,r;return e=new Xn({props:{icon:t[2]+(t[1]?"-fill":""),class:"w-full h-full"}}),{c(){A(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,o){V(e,n,o),r=!0},p(n,o){const s={};o&6&&(s.icon=n[2]+(n[1]?"-fill":"")),e.$set(s)},i(n){r||(y(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){B(e,n)}}}function tr(t){let e,r,n,o,s,i;const l=[er,Yn],a=[];function c(f,u){return f[0]?0:1}return r=c(t),n=a[r]=l[r](t),{c(){e=C("button"),n.c(),this.h()},l(f){e=T(f,"BUTTON",{class:!0,"aria-label":!0});var u=O(e);n.l(u),u.forEach(m),this.h()},h(){v(e,"class","absolute top-10 left-10 w-9 aspect-square rounded-full p-1"),v(e,"aria-label","Toggle Dark Mode")},m(f,u){j(f,e,u),a[r].m(e,null),o=!0,s||(i=[oe(e,"click",it.toggle),oe(e,"mouseenter",t[4]),oe(e,"mouseleave",t[5])],s=!0)},p(f,[u]){let h=r;r=c(f),r===h?a[r].p(f,u):(W(),k(a[h],1,1,()=>{a[h]=null}),K(),n=a[r],n?n.p(f,u):(n=a[r]=l[r](f),n.c()),y(n,1),n.m(e,null))},i(f){o||(y(n),o=!0)},o(f){k(n),o=!1},d(f){f&&m(e),a[r].d(),s=!1,Ot(i)}}}function nr(t,e,r){let n=!1,o="ph:moon";it.subscribe(f=>{r(2,o=f?"ph:sun":"ph:moon")});let s=!1,i=0;const l=["ph:sun","ph:moon","ph:sun-fill","ph:moon-fill"],a=()=>r(1,n=!0),c=()=>r(1,n=!1);return t.$$.update=()=>{t.$$.dirty&9&&(r(0,s=!0),l.forEach(f=>{const u=Kt(f);u||Ln(f).then(()=>{r(3,i++,i)}).catch(()=>{}),r(0,s=s&&u)}))},[s,n,o,i,a,c]}class rr extends Q{constructor(e){super(),G(this,e,nr,tr,q,{})}}function or(t){const e=t-1;return e*e*e+1}function Je(t,{delay:e=0,duration:r=400,easing:n=or,axis:o="y"}={}){const s=getComputedStyle(t),i=+s.opacity,l=o==="y"?"height":"width",a=parseFloat(s[l]),c=o==="y"?["top","bottom"]:["left","right"],f=c.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),u=parseFloat(s[`padding${f[0]}`]),h=parseFloat(s[`padding${f[1]}`]),S=parseFloat(s[`margin${f[0]}`]),w=parseFloat(s[`margin${f[1]}`]),E=parseFloat(s[`border${f[0]}Width`]),_=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:r,easing:n,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*i};${l}: ${g*a}px;padding-${c[0]}: ${g*u}px;padding-${c[1]}: ${g*h}px;margin-${c[0]}: ${g*S}px;margin-${c[1]}: ${g*w}px;border-${c[0]}-width: ${g*E}px;border-${c[1]}-width: ${g*_}px;`}}function Ze(t){let e,r,n;const o=t[3].default,s=Lt(o,t,t[2],null);return{c(){e=C("div"),s&&s.c(),this.h()},l(i){e=T(i,"DIV",{class:!0});var l=O(e);s&&s.l(l),l.forEach(m),this.h()},h(){v(e,"class","mt-1")},m(i,l){j(i,e,l),s&&s.m(e,null),n=!0},p(i,l){s&&s.p&&(!n||l&4)&&Pt(s,o,i,i[2],n?Dt(o,i[2],l,null):Ft(i[2]),null)},i(i){n||(y(s,i),i&&At(()=>{n&&(r||(r=De(e,Je,{},!0)),r.run(1))}),n=!0)},o(i){k(s,i),i&&(r||(r=De(e,Je,{},!1)),r.run(0)),n=!1},d(i){i&&m(e),s&&s.d(i),i&&r&&r.end()}}}function sr(t){let e,r,n,o,s,i,l,a=t[1]&&Ze(t);return{c(){e=C("div"),r=C("button"),n=ke(t[0]),o=F(),a&&a.c(),this.h()},l(c){e=T(c,"DIV",{class:!0});var f=O(e);r=T(f,"BUTTON",{class:!0});var u=O(r);n=$e(u,t[0]),u.forEach(m),o=D(f),a&&a.l(f),f.forEach(m),this.h()},h(){v(r,"class","header block text-end w-full"),Fe(r,"font-bold",t[1]),v(e,"class","w-full")},m(c,f){j(c,e,f),I(e,r),I(r,n),I(e,o),a&&a.m(e,null),s=!0,i||(l=oe(r,"click",t[4]),i=!0)},p(c,[f]){(!s||f&1)&&xe(n,c[0]),(!s||f&2)&&Fe(r,"font-bold",c[1]),c[1]?a?(a.p(c,f),f&2&&y(a,1)):(a=Ze(c),a.c(),y(a,1),a.m(e,null)):a&&(W(),k(a,1,1,()=>{a=null}),K())},i(c){s||(y(a),s=!0)},o(c){k(a),s=!1},d(c){c&&m(e),a&&a.d(),i=!1,l()}}}function ir(t,e,r){let{$$slots:n={},$$scope:o}=e,{title:s}=e,i=!1;const l=()=>r(1,i=!i);return t.$$set=a=>{"title"in a&&r(0,s=a.title),"$$scope"in a&&r(2,o=a.$$scope)},[s,i,o,n,l]}class pe extends Q{constructor(e){super(),G(this,e,ir,sr,q,{title:0})}}function lr(t){let e,r;return{c(){e=C("a"),r=ke(t[1]),this.h()},l(n){e=T(n,"A",{href:!0,class:!0});var o=O(e);r=$e(o,t[1]),o.forEach(m),this.h()},h(){v(e,"href",t[0]),v(e,"class","header")},m(n,o){j(n,e,o),I(e,r)},p(n,[o]){o&2&&xe(r,n[1]),o&1&&v(e,"href",n[0])},i:H,o:H,d(n){n&&m(e)}}}function cr(t,e,r){let{href:n=""}=e,{title:o}=e;return t.$$set=s=>{"href"in s&&r(0,n=s.href),"title"in s&&r(1,o=s.title)},[n,o]}class Xe extends Q{constructor(e){super(),G(this,e,cr,lr,q,{href:0,title:1})}}function Ye(t,e,r){const n=t.slice();return n[1]=e[r],n}function et(t,e,r){const n=t.slice();return n[1]=e[r],n}function tt(t){let e,r;return e=new ct({props:{article:t[1]}}),{c(){A(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,o){V(e,n,o),r=!0},p(n,o){const s={};o&1&&(s.article=n[1]),e.$set(s)},i(n){r||(y(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){B(e,n)}}}function nt(t){let e,r,n=t[1].archived===!1&&tt(t);return{c(){n&&n.c(),e=R()},l(o){n&&n.l(o),e=R()},m(o,s){n&&n.m(o,s),j(o,e,s),r=!0},p(o,s){o[1].archived===!1?n?(n.p(o,s),s&1&&y(n,1)):(n=tt(o),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(W(),k(n,1,1,()=>{n=null}),K())},i(o){r||(y(n),r=!0)},o(o){k(n),r=!1},d(o){o&&m(e),n&&n.d(o)}}}function ar(t){let e,r,n,o="view all",s,i=ce(t[0].articles),l=[];for(let c=0;c<i.length;c+=1)l[c]=nt(et(t,i,c));const a=c=>k(l[c],1,1,()=>{l[c]=null});return{c(){e=C("div");for(let c=0;c<l.length;c+=1)l[c].c();r=F(),n=C("a"),n.textContent=o,this.h()},l(c){e=T(c,"DIV",{class:!0});var f=O(e);for(let u=0;u<l.length;u+=1)l[u].l(f);r=D(f),n=T(f,"A",{href:!0,class:!0,"data-svelte-h":!0}),fe(n)!=="svelte-ouk6ny"&&(n.textContent=o),f.forEach(m),this.h()},h(){v(n,"href",X+"/issues"),v(n,"class","hover:font-bold article-header"),v(e,"class","flex flex-col items-end gap-1")},m(c,f){j(c,e,f);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null);I(e,r),I(e,n),s=!0},p(c,f){if(f&1){i=ce(c[0].articles);let u;for(u=0;u<i.length;u+=1){const h=et(c,i,u);l[u]?(l[u].p(h,f),y(l[u],1)):(l[u]=nt(h),l[u].c(),y(l[u],1),l[u].m(e,r))}for(W(),u=i.length;u<l.length;u+=1)a(u);K()}},i(c){if(!s){for(let f=0;f<i.length;f+=1)y(l[f]);s=!0}},o(c){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)k(l[f]);s=!1},d(c){c&&m(e),st(l,c)}}}function rt(t){let e,r;return e=new ct({props:{article:t[1]}}),{c(){A(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,o){V(e,n,o),r=!0},p(n,o){const s={};o&1&&(s.article=n[1]),e.$set(s)},i(n){r||(y(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){B(e,n)}}}function ot(t){let e,r,n=(t[1].archived===!0||t[1].archived===void 0)&&rt(t);return{c(){n&&n.c(),e=R()},l(o){n&&n.l(o),e=R()},m(o,s){n&&n.m(o,s),j(o,e,s),r=!0},p(o,s){o[1].archived===!0||o[1].archived===void 0?n?(n.p(o,s),s&1&&y(n,1)):(n=rt(o),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(W(),k(n,1,1,()=>{n=null}),K())},i(o){r||(y(n),r=!0)},o(o){k(n),r=!1},d(o){o&&m(e),n&&n.d(o)}}}function fr(t){let e,r,n,o="view all",s,i=ce(t[0].articles),l=[];for(let c=0;c<i.length;c+=1)l[c]=ot(Ye(t,i,c));const a=c=>k(l[c],1,1,()=>{l[c]=null});return{c(){e=C("div");for(let c=0;c<l.length;c+=1)l[c].c();r=F(),n=C("a"),n.textContent=o,this.h()},l(c){e=T(c,"DIV",{class:!0});var f=O(e);for(let u=0;u<l.length;u+=1)l[u].l(f);r=D(f),n=T(f,"A",{href:!0,class:!0,"data-svelte-h":!0}),fe(n)!=="svelte-6ufsb9"&&(n.textContent=o),f.forEach(m),this.h()},h(){v(n,"href",X+"/past-issues"),v(n,"class","hover:font-bold article-header"),v(e,"class","flex flex-col items-end gap-1")},m(c,f){j(c,e,f);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null);I(e,r),I(e,n),s=!0},p(c,f){if(f&1){i=ce(c[0].articles);let u;for(u=0;u<i.length;u+=1){const h=Ye(c,i,u);l[u]?(l[u].p(h,f),y(l[u],1)):(l[u]=ot(h),l[u].c(),y(l[u],1),l[u].m(e,r))}for(W(),u=i.length;u<l.length;u+=1)a(u);K()}},i(c){if(!s){for(let f=0;f<i.length;f+=1)y(l[f]);s=!0}},o(c){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)k(l[f]);s=!1},d(c){c&&m(e),st(l,c)}}}function ur(t){let e,r='<a target="_blank" class="article-header" href="mailto:rhhsspyglass@gmail.com">email</a> <a target="_blank" class="article-header" href="https://www.instagram.com/rhhspyglass" referrerpolicy="no-referrer">instagram</a> <p>DM for inquires.</p>';return{c(){e=C("div"),e.innerHTML=r,this.h()},l(n){e=T(n,"DIV",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1phkjuz"&&(e.innerHTML=r),this.h()},h(){v(e,"class","flex flex-col items-end gap-1")},m(n,o){j(n,e,o)},p:H,d(n){n&&m(e)}}}function dr(t){let e,r,n,o,s,i='<h2 class="italic text-2xl" style="line-height: 0.6">the</h2> <h1 class="text-5xl">spyglass</h1>',l,a,c,f,u,h,S,w,E,_,g,p,M,$,z;return r=new rr({}),c=new Nt({props:{class:"mt-3 mx-auto w-2/5"}}),h=new Xe({props:{href:X+"/about",title:"about"}}),w=new pe({props:{title:"recent issues",$$slots:{default:[ar]},$$scope:{ctx:t}}}),_=new pe({props:{title:"past issues",$$slots:{default:[fr]},$$scope:{ctx:t}}}),p=new Xe({props:{href:X+"/team",title:"team"}}),$=new pe({props:{title:"contact",$$slots:{default:[ur]},$$scope:{ctx:t}}}),{c(){e=C("div"),A(r.$$.fragment),n=F(),o=C("div"),s=C("div"),s.innerHTML=i,l=F(),a=C("div"),A(c.$$.fragment),f=F(),u=C("nav"),A(h.$$.fragment),S=F(),A(w.$$.fragment),E=F(),A(_.$$.fragment),g=F(),A(p.$$.fragment),M=F(),A($.$$.fragment),this.h()},l(d){e=T(d,"DIV",{class:!0});var b=O(e);N(r.$$.fragment,b),n=D(b),o=T(b,"DIV",{class:!0});var L=O(o);s=T(L,"DIV",{"data-svelte-h":!0}),fe(s)!=="svelte-1flx478"&&(s.innerHTML=i),l=D(L),a=T(L,"DIV",{class:!0});var P=O(a);N(c.$$.fragment,P),P.forEach(m),L.forEach(m),f=D(b),u=T(b,"NAV",{class:!0});var x=O(u);N(h.$$.fragment,x),S=D(x),N(w.$$.fragment,x),E=D(x),N(_.$$.fragment,x),g=D(x),N(p.$$.fragment,x),M=D(x),N($.$$.fragment,x),x.forEach(m),b.forEach(m),this.h()},h(){v(a,"class","hover:boop"),v(o,"class","cursor-pointer flex flex-col items-center"),v(u,"class","absolute right-0 bottom-0 p-10 flex flex-col gap-4 items-end max-h-screen overflow-y-auto"),v(e,"class","flex justify-center items-center w-screen h-screen overflow-hidden select-none font-serif")},m(d,b){j(d,e,b),V(r,e,null),I(e,n),I(e,o),I(o,s),I(o,l),I(o,a),V(c,a,null),I(e,f),I(e,u),V(h,u,null),I(u,S),V(w,u,null),I(u,E),V(_,u,null),I(u,g),V(p,u,null),I(u,M),V($,u,null),z=!0},p(d,[b]){const L={};b&65&&(L.$$scope={dirty:b,ctx:d}),w.$set(L);const P={};b&65&&(P.$$scope={dirty:b,ctx:d}),_.$set(P);const x={};b&64&&(x.$$scope={dirty:b,ctx:d}),$.$set(x)},i(d){z||(y(r.$$.fragment,d),y(c.$$.fragment,d),y(h.$$.fragment,d),y(w.$$.fragment,d),y(_.$$.fragment,d),y(p.$$.fragment,d),y($.$$.fragment,d),z=!0)},o(d){k(r.$$.fragment,d),k(c.$$.fragment,d),k(h.$$.fragment,d),k(w.$$.fragment,d),k(_.$$.fragment,d),k(p.$$.fragment,d),k($.$$.fragment,d),z=!1},d(d){d&&m(e),B(r),B(c),B(h),B(w),B(_),B(p),B($)}}}function hr(t,e,r){let{data:n}=e;return t.$$set=o=>{"data"in o&&r(0,n=o.data)},[n]}class vr extends Q{constructor(e){super(),G(this,e,hr,dr,q,{data:0})}}export{vr as component};
