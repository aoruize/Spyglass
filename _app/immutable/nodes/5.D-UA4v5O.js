import{g as N,_ as O,a as P,b as z,c as D,d as H,e as B,f as F,h as G,i as J,j as K,k as Q,l as U,m as V,n as W,o as X,p as Y,q as Z,r as x,s as tt}from"../chunks/getMostRecentArticle.D2xEmV5L.js";import{s as et,e as f,a as T,b as E,h as nt,c as g,d as l,f as M,j as s,k as d,l as h,n as it}from"../chunks/scheduler.zSCSNv7F.js";import{S as at,i as _t,c as S,a as R,m as j,t as I,b as L,d as q}from"../chunks/index.Dk43XADV.js";import{A as st}from"../chunks/ArticleList.DJjR88Wx.js";import{S as lt}from"../chunks/SiteNavigation.Dvr2Qu3w.js";function ot(r){let e,n,i;return{c(){e=f("meta"),n=E(),i=f("meta"),this.h()},l(a){e=g(a,"META",{property:!0,content:!0}),n=M(a),i=g(a,"META",{property:!0,content:!0}),this.h()},h(){s(e,"property","og:image"),s(e,"content",r[1].img.src),s(i,"property","thumbnail"),s(i,"content",r[1].img.src)},m(a,o){h(a,e,o),h(a,n,o),h(a,i,o)},p:it,d(a){a&&(l(e),l(n),l(i))}}}function rt(r){let e;return{c(){e=f("meta"),this.h()},l(n){e=g(n,"META",{property:!0,content:!0}),this.h()},h(){s(e,"property","og:url"),s(e,"content","https://rhhspyglass.com")},m(n,i){h(n,e,i)},d(n){n&&l(e)}}}function mt(r){let e,n,i,a,o,u,y,$,b,A,p,v;document.title=e=w;let m=r[1]&&ot(r),c=rt();return b=new lt({props:{showHome:!0,overlayLg:!0}}),p=new st({props:{articles:r[0].articles}}),{c(){n=f("meta"),i=f("meta"),a=f("meta"),o=f("meta"),m&&m.c(),u=T(),c&&c.c(),y=T(),$=E(),S(b.$$.fragment),A=E(),S(p.$$.fragment),this.h()},l(t){const _=nt("svelte-192zryt",document.head);n=g(_,"META",{name:!0,content:!0}),i=g(_,"META",{property:!0,content:!0}),a=g(_,"META",{property:!0,content:!0}),o=g(_,"META",{property:!0,content:!0}),m&&m.l(_),u=T(),c&&c.l(_),y=T(),_.forEach(l),$=M(t),R(b.$$.fragment,t),A=M(t),R(p.$$.fragment,t),this.h()},h(){s(n,"name","description"),s(n,"content",C),s(i,"property","og:title"),s(i,"content",w),s(a,"property","og:description"),s(a,"content",C),s(o,"property","og:type"),s(o,"content","website")},m(t,_){d(document.head,n),d(document.head,i),d(document.head,a),d(document.head,o),m&&m.m(document.head,null),d(document.head,u),c&&c.m(document.head,null),d(document.head,y),h(t,$,_),j(b,t,_),h(t,A,_),j(p,t,_),v=!0},p(t,[_]){(!v||_&0)&&e!==(e=w)&&(document.title=e),t[1]&&m.p(t,_);const k={};_&1&&(k.articles=t[0].articles),p.$set(k)},i(t){v||(I(b.$$.fragment,t),I(p.$$.fragment,t),v=!0)},o(t){L(b.$$.fragment,t),L(p.$$.fragment,t),v=!1},d(t){t&&(l($),l(A)),l(n),l(i),l(a),l(o),m&&m.d(t),l(u),c&&c.d(t),l(y),q(b,t),q(p,t)}}}const w="The Spyglass | past issues",C="Read our past issues.";function pt(r,e,n){let{data:i}=e;const a=Object.assign({"../../lib/thumbnails/fall_2018.pdf.1.png":O,"../../lib/thumbnails/fall_2019.pdf.1.png":P,"../../lib/thumbnails/fall_2020.pdf.1.png":z,"../../lib/thumbnails/fall_2022.pdf.1.png":D,"../../lib/thumbnails/fall_2023.pdf.1.png":H,"../../lib/thumbnails/spring_2020.pdf.1.png":B,"../../lib/thumbnails/spring_2021.pdf.1.png":F,"../../lib/thumbnails/spring_2023.pdf.1.png":G,"../../lib/thumbnails/spring_2024.pdf.1.png":J,"../../lib/thumbnails/summer_2018.pdf.1.png":K,"../../lib/thumbnails/summer_2019.pdf.1.png":Q,"../../lib/thumbnails/summer_2020.pdf.1.png":U,"../../lib/thumbnails/summer_2024.pdf.1.png":V,"../../lib/thumbnails/winter_2017.pdf.1.png":W,"../../lib/thumbnails/winter_2019.pdf.1.png":X,"../../lib/thumbnails/winter_2020.pdf.1.png":Y,"../../lib/thumbnails/winter_2021.pdf.1.png":Z,"../../lib/thumbnails/winter_2023.pdf.1.png":x,"../../lib/thumbnails/winter_2024.pdf.1.png":tt}),o=N(i.articles,a,"../../lib");return r.$$set=u=>{"data"in u&&n(0,i=u.data)},[i,o]}class dt extends at{constructor(e){super(),_t(this,e,pt,mt,et,{data:0})}}export{dt as component};
