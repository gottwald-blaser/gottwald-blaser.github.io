import{S as s,i as t,s as a,a as e,e as i,q as r,f as n,g as l,c,d as o,j as h,k as d,l as p,n as u,o as f,p as v}from"./client.4856f992.js";const{document:m}=v;function g(s){let t,a,f,v,g,E,y,w,H=s[0].title+"",j=s[0].html+"";return m.title=t=s[0].title,{c(){a=e(),f=i("div"),v=i("div"),g=i("h1"),E=e(),y=i("div"),w=i("div"),this.h()},l(s){r('[data-svelte="svelte-rixpl3"]',m.head).forEach(n),a=l(s),f=c(s,"DIV",{id:!0,class:!0});var t=o(f);v=c(t,"DIV",{class:!0});var e=o(v);g=c(e,"H1",{class:!0}),o(g).forEach(n),e.forEach(n),t.forEach(n),E=l(s),y=c(s,"DIV",{id:!0,class:!0});var i=o(y);w=c(i,"DIV",{class:!0}),o(w).forEach(n),i.forEach(n),this.h()},h(){h(g,"class","post-title svelte-vgaays"),h(v,"class","wrapper-inner"),h(f,"id","headline"),h(f,"class","svelte-vgaays"),h(w,"class","wrapper-inner"),h(y,"id","content"),h(y,"class","article svelte-vgaays")},m(s,t){d(s,a,t),d(s,f,t),p(f,v),p(v,g),g.innerHTML=H,d(s,E,t),d(s,y,t),p(y,w),w.innerHTML=j},p(s,[a]){1&a&&t!==(t=s[0].title)&&(m.title=t),1&a&&H!==(H=s[0].title+"")&&(g.innerHTML=H),1&a&&j!==(j=s[0].html+"")&&(w.innerHTML=j)},i:u,o:u,d(s){s&&n(a),s&&n(f),s&&n(E),s&&n(y)}}}async function E({params:s,query:t}){const a=await this.fetch(`./${s.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function y(s,t,a){let{post:e}=t;return f(()=>{document.documentElement.setAttribute("data-theme","white-gray")}),s.$set=s=>{"post"in s&&a(0,e=s.post)},[e]}export default class extends s{constructor(s){super(),t(this,s,y,g,a,{post:0})}}export{E as preload};
