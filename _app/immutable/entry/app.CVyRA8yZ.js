const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.sGKSVlnI.js","../chunks/disclose-version.CWOomf5-.js","../chunks/runtime.BLnCADGB.js","../chunks/snippet.q-qz_dDu.js","../chunks/entry.Ev1QFIgu.js","../chunks/index-client.BhZUesbS.js","../chunks/paths.CdvpQdgM.js","../chunks/theme.svelte.Skbnu5L3.js","../chunks/reducedMotion.svelte.Cc_3KY02.js","../assets/0.C13P_7wL.css","../nodes/1.d_oM6ucZ.js","../chunks/legacy.DCkX5r32.js","../chunks/render.B9CdqCC6.js","../chunks/props.Do6LV73C.js","../chunks/class.CCGXRkxM.js","../chunks/SpyglassLogo.JjpDHd5p.js","../assets/SpyglassLogo.DUqjBJPd.css","../nodes/2.DRwsWxyf.js","../chunks/getMostRecentArticle.B-LBpPFt.js","../chunks/each.B4xTXa4H.js","../chunks/SiteNavigation.B3ejxE9L.js","../assets/SiteNavigation.Cj1hV46s.css","../nodes/3.Bsy0GKKr.js","../nodes/4.BVuuEKq0.js","../chunks/ArticleList.B1wki1fh.js","../assets/ArticleList.DyLeTyQj.css","../nodes/5.hbx9ZX3M.js","../nodes/6.CsCS-I2k.js"])))=>i.map(i=>d[i]);
var q=e=>{throw TypeError(e)};var F=(e,t,r)=>t.has(e)||q("Cannot "+r);var u=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,i)=>(F(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as U,q as G,b as H,E as J,a as K,c as M,z as Z,aB as $,aC as tt,X as et,A as rt,ae as st,j as v,k as A,aD as at,ao as nt,Q as ot,p as it,a8 as ct,W as ut,f as w,i as lt,aE as ft,s as dt,e as mt,t as ht,r as _t,l as S,ac as C}from"../chunks/runtime.BLnCADGB.js";import{h as vt,m as gt,u as yt,s as Et}from"../chunks/render.B9CdqCC6.js";import{c as D,a as b,t as N,p as Pt,d as Rt}from"../chunks/disclose-version.CWOomf5-.js";import{p as I,i as V}from"../chunks/props.Do6LV73C.js";import{o as bt}from"../chunks/index-client.BhZUesbS.js";function p(e,t,r){U&&G();var i=e,n,o;H(()=>{n!==(n=t())&&(o&&(Z(o),o=null),n&&(o=K(()=>r(i,n))))},J),U&&(i=M)}function W(e,t){return e===t||(e==null?void 0:e[st])===t}function B(e={},t,r,i){return $(()=>{var n,o;return tt(()=>{n=o,o=[],et(()=>{e!==r(...o)&&(t(e,...o),n&&W(r(...n),e)&&t(null,...n))})}),()=>{rt(()=>{o&&W(r(...o),e)&&t(null,...o)})}}),e}function kt(e){return class extends wt{constructor(t){super({component:e,...t})}}}var g,f;class wt{constructor(t){L(this,g);L(this,f);var o;var r=new Map,i=(a,s)=>{var d=ot(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s)},set(a,s,d){return A(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});O(this,f,(t.hydrate?vt:gt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&at(),O(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||nt(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{yt(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const At="modulepreload",Tt=function(e,t){return new URL(e,t).href},z={},P=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=Tt(l,i),l in z)return;z[l]=!0;const y=l.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===l&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${T}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":At,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((m,_)=>{c.addEventListener("load",m),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},jt={};var xt=N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Lt=N("<!> <!>",1);function Ot(e,t){it(t,!0);let r=I(t,"components",23,()=>[]),i=I(t,"data_0",3,null),n=I(t,"data_1",3,null);ct(()=>t.stores.page.set(t.page)),ut(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=S(!1),a=S(!1),s=S(null);bt(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(A(a,!0),ft().then(()=>{A(s,Pt(document.title||"untitled page"))}))});return A(o,!0),E});const d=C(()=>t.constructors[1]);var l=Lt(),y=w(l);V(y,()=>t.constructors[1],E=>{var c=D();const m=C(()=>t.constructors[0]);var _=w(c);p(_,()=>v(m),(R,x)=>{B(x(R,{get data(){return i()},get form(){return t.form},children:(h,St)=>{var j=D(),Q=w(j);p(Q,()=>v(d),(X,Y)=>{B(Y(X,{get data(){return n()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),b(h,j)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),b(E,c)},E=>{var c=D();const m=C(()=>t.constructors[0]);var _=w(c);p(_,()=>v(m),(R,x)=>{B(x(R,{get data(){return i()},get form(){return t.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),b(E,c)});var T=dt(y,2);V(T,()=>v(o),E=>{var c=xt(),m=mt(c);V(m,()=>v(a),_=>{var R=Rt();ht(()=>Et(R,v(s))),b(_,R)}),_t(c),b(E,c)}),b(e,l),lt()}const qt=kt(Ot),Ft=[()=>P(()=>import("../nodes/0.sGKSVlnI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>P(()=>import("../nodes/1.d_oM6ucZ.js"),__vite__mapDeps([10,1,2,11,12,13,14,6,4,5,15,16]),import.meta.url),()=>P(()=>import("../nodes/2.DRwsWxyf.js"),__vite__mapDeps([17,18,1,2,13,19,14,12,20,6,7,21,3,8,15,16]),import.meta.url),()=>P(()=>import("../nodes/3.Bsy0GKKr.js"),__vite__mapDeps([22,1,2,11,13,14,20,6,7,21,15,16]),import.meta.url),()=>P(()=>import("../nodes/4.BVuuEKq0.js"),__vite__mapDeps([23,18,1,2,13,14,24,19,15,16,6,8,25,20,7,21]),import.meta.url),()=>P(()=>import("../nodes/5.hbx9ZX3M.js"),__vite__mapDeps([26,18,1,2,13,14,20,6,7,21,24,19,15,16,8,25]),import.meta.url),()=>P(()=>import("../nodes/6.CsCS-I2k.js"),__vite__mapDeps([27,1,2,12,13,19,14,20,6,7,21]),import.meta.url)],Ut=[],Wt={"/":[-3],"/about":[3],"/issues":[-5],"/past-issues":[-6],"/team":[-7]},zt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Wt as dictionary,zt as hooks,jt as matchers,Ft as nodes,qt as root,Ut as server_loads};