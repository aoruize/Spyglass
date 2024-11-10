import{an as C,a3 as I,a4 as S,O as V,B as O,A as G,ao as Q,u as X,m as J,b as W,ap as K,h as T,Z as ee,T as M,x as m,o as N,c as x,M as ae,y as Y,a as k,z,q as re,E as ne,H as te,w as ie,n as F,X as B,Q as Z,j as w,k as $,aj as se,aq as ue,ar as fe,as as le,at as ce,V as oe,au as _e,ac as U,av as de,aw as ve,ax as he,ay as be,az as pe,aA as ge}from"./runtime.BLnCADGB.js";import{p as ye}from"./disclose-version.CWOomf5-.js";function me(e,a,t,n=!0){n&&t();for(var i of a)e.addEventListener(i,t);C(()=>{for(var r of a)e.removeEventListener(r,t)})}function Ee(e){var a=V,t=O;I(null),S(null);try{return e()}finally{I(a),S(t)}}const we=new Set,Te=new Set;function Se(e,a,t,n){function i(r){if(n.capture||Ae.call(a,r),!r.cancelBubble)return Ee(()=>t.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?G(()=>{a.addEventListener(e,i,n)}):a.addEventListener(e,i,n),i}function Le(e,a,t,n,i){var r={capture:n,passive:i},u=Se(e,a,t,r);(a===document.body||a===window||a===document)&&C(()=>{a.removeEventListener(e,u,r)})}function qe(e){for(var a=0;a<e.length;a++)we.add(e[a]);for(var t of Te)t(e)}function Ae(e){var y;var a=this,t=a.ownerDocument,n=e.type,i=((y=e.composedPath)==null?void 0:y.call(e))||[],r=i[0]||e.target,u=0,l=e.__root;if(l){var c=i.indexOf(l);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var o=i.indexOf(a);if(o===-1)return;c<=o&&(u=c)}if(r=i[u]||e.target,r!==a){Q(e,"currentTarget",{configurable:!0,get(){return r||t}});var v=V,_=O;I(null),S(null);try{for(var h,p=[];r!==null;){var g=r.assignedSlot||r.parentNode||r.host||null;try{var d=r["__"+n];if(d!==void 0&&!r.disabled)if(X(d)){var[R,...L]=d;R.apply(r,[e,...L])}else d.call(r,e)}catch(b){h?p.push(b):h=b}if(e.cancelBubble||g===a||g===null)break;r=g}if(h){for(let b of p)queueMicrotask(()=>{throw b});throw h}}finally{e.__root=a,delete e.currentTarget,I(v),S(_)}}}let f;function De(){f=void 0}function Ne(e){let a=null,t=T;var n;if(T){for(a=x,f===void 0&&(f=ae(document.head));f!==null&&(f.nodeType!==8||f.data!==ee);)f=M(f);f===null?m(!1):f=N(M(f))}T||(n=document.head.appendChild(J()));try{W(()=>e(n),K)}finally{t&&(m(!0),f=x,N(a))}}function xe(e,a,t,n=null,i=!1){T&&re();var r=e,u=null,l=null,c=null,o=i?ne:0;W(()=>{if(c===(c=!!a()))return;let v=!1;if(T){const _=r.data===te;c===_&&(r=ie(),N(r),m(!1),v=!0)}c?(u?Y(u):u=k(()=>t(r)),l&&z(l,()=>{l=null})):(l?Y(l):n&&(l=k(()=>n(r))),u&&z(u,()=>{u=null})),v&&m(!0)},o),T&&(r=x)}function Re(e,a,t){if(e==null)return a(void 0),F;const n=B(()=>e.subscribe(a,t));return n.unsubscribe?()=>n.unsubscribe():n}let P=!1;function Fe(e,a,t){const n=t[a]??(t[a]={store:null,source:Z(void 0),unsubscribe:F});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=F;else{var i=!0;n.unsubscribe=Re(e,r=>{i?n.source.v=r:$(n.source,r)}),i=!1}return w(n.source)}function Be(){const e={};return C(()=>{for(var a in e)e[a].unsubscribe()}),e}function Pe(e){var a=P;try{return P=!1,[e(),P]}finally{P=a}}function j(e){for(var a=O,t=O;a!==null&&!(a.f&(le|ce));)a=a.parent;try{return S(a),e()}finally{S(t)}}function Ce(e,a,t,n){var H;var i=(t&be)!==0,r=!oe||(t&_e)!==0,u=(t&pe)!==0,l=(t&ge)!==0,c=!1,o;u?[o,c]=Pe(()=>e[a]):o=e[a];var v=(H=se(e,a))==null?void 0:H.set,_=n,h=!0,p=!1,g=()=>(p=!0,h&&(h=!1,l?_=B(n):_=n),_);o===void 0&&n!==void 0&&(v&&r&&ue(),o=g(),v&&v(o));var d;if(r)d=()=>{var s=e[a];return s===void 0?g():(h=!0,p=!1,s)};else{var R=j(()=>(i?U:de)(()=>e[a]));R.f|=fe,d=()=>{var s=w(R);return s!==void 0&&(_=void 0),s===void 0?_:s}}if(!(t&ve))return d;if(v){var L=e.$$legacy;return function(s,E){return arguments.length>0?((!r||!E||L||c)&&v(E?d():s),s):d()}}var y=!1,b=!1,q=Z(o),A=j(()=>U(()=>{var s=d(),E=w(q);return y?(y=!1,b=!0,E):(b=!1,q.v=s)}));return i||(A.equals=he),function(s,E){if(arguments.length>0){const D=E?w(A):r&&u?ye(s):s;return A.equals(D)||(y=!0,$(q,D),p&&_!==void 0&&(_=D),B(()=>w(A))),s}return w(A)}}export{we as a,De as b,Ae as c,Fe as d,qe as e,Le as f,Ne as h,xe as i,me as l,Ce as p,Te as r,Be as s,Ee as w};
