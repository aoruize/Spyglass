import{n as c,s as g}from"./scheduler.zSCSNv7F.js";const e=[];function d(i,a=c){let o;const n=new Set;function r(t){if(g(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=a(r,u)||c),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1rmxol8)==null?void 0:f.base)??"/sveltekit-github-pages";var l;const m=((l=globalThis.__sveltekit_1rmxol8)==null?void 0:l.assets)??h;export{m as a,h as b,d as w};
