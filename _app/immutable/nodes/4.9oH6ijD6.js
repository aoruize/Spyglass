import{s as S,a as g,e as p,o as V,f as m,d as v,c as b,b as y,g as C,h as $,i as k,j as w,p as E}from"../chunks/scheduler.DI5yTIc8.js";import{S as H,i as I,t as _,e as L,b as d,c as M,a as U,m as j,d as q,g as B}from"../chunks/index.BciIcuIa.js";import{e as T}from"../chunks/FallbackIcon.BQyjRYj1.js";import{b as N}from"../chunks/paths.jrOqitgA.js";import{A as P}from"../chunks/ArticleView.DXgeG9jE.js";function A(s,n,r){const e=s.slice();return e[2]=n[r],e[4]=r,e}function z(s){let n,r;return n=new P({props:{article:s[2],id:s[1](s[2]),clickUp:"#"+(s[4]>0?s[1](s[0].articles[s[4]-1]):""),clickDown:"#"+(s[4]<s[0].articles.length-1?s[1](s[0].articles[s[4]+1]):"")}}),{c(){M(n.$$.fragment)},l(e){U(n.$$.fragment,e)},m(e,c){j(n,e,c),r=!0},p(e,c){const i={};c&1&&(i.article=e[2]),c&1&&(i.id=e[1](e[2])),c&1&&(i.clickUp="#"+(e[4]>0?e[1](e[0].articles[e[4]-1]):"")),c&1&&(i.clickDown="#"+(e[4]<e[0].articles.length-1?e[1](e[0].articles[e[4]+1]):"")),n.$set(i)},i(e){r||(_(n.$$.fragment,e),r=!0)},o(e){d(n.$$.fragment,e),r=!1},d(e){q(n,e)}}}function F(s){let n,r,e,c=`<a class="font-serif hover:font-bold text-lg svelte-1ariz70" href="${N}/">home</a>`,i,u,f=T(s[0].articles),l=[];for(let t=0;t<f.length;t+=1)l[t]=z(A(s,f,t));const D=t=>d(l[t],1,1,()=>{l[t]=null});return{c(){n=g(),r=p("div"),e=p("nav"),e.innerHTML=c,i=g();for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){V("svelte-bg6c3b",document.head).forEach(m),n=v(t),r=b(t,"DIV",{class:!0});var a=y(r);e=b(a,"NAV",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-kfgv2r"&&(e.innerHTML=c),i=v(a);for(let h=0;h<l.length;h+=1)l[h].l(a);a.forEach(m),this.h()},h(){document.title="The Spyglass | issues",$(e,"class","fixed bottom-10 right-10 svelte-1ariz70"),$(r,"class","w-full flex flex-col items-center svelte-1ariz70")},m(t,o){k(t,n,o),k(t,r,o),w(r,e),w(r,i);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(r,null);u=!0},p(t,[o]){if(o&3){f=T(t[0].articles);let a;for(a=0;a<f.length;a+=1){const h=A(t,f,a);l[a]?(l[a].p(h,o),_(l[a],1)):(l[a]=z(h),l[a].c(),_(l[a],1),l[a].m(r,null))}for(B(),a=f.length;a<l.length;a+=1)D(a);L()}},i(t){if(!u){for(let o=0;o<f.length;o+=1)_(l[o]);u=!0}},o(t){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)d(l[o]);u=!1},d(t){t&&(m(n),m(r)),E(l,t)}}}function G(s,n,r){let{data:e}=n;const c=i=>i.shortTitle.replaceAll(" ","-");return s.$$set=i=>{"data"in i&&r(0,e=i.data)},[e,c]}class W extends H{constructor(n){super(),I(this,n,G,F,S,{data:0})}}export{W as component};
