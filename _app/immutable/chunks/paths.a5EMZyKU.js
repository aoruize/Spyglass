import{n as c,s as d}from"./scheduler.zSCSNv7F.js";const t=[];function g(n,l=c){let i;const o=new Set;function r(e){if(d(n,e)&&(n=e,i)){const b=!t.length;for(const s of o)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(n))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(i=l(r,f)||c),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1vde0zj)==null?void 0:u.base)??"";var a;const z=((a=globalThis.__sveltekit_1vde0zj)==null?void 0:a.assets)??h;export{z as a,h as b,g as w};
