import{S as e,i as a,s,a as t,e as l,t as i,q as c,f as r,g as n,c as o,d,h,j as u,r as p,k as f,l as m,u as v,v as E,w,x as b,y as g,n as I,o as j,p as y}from"./client.4c5098a5.js";const{document:k}=y;function N(e){let a,s,j,y,N,S,T,A,x,O,q,D,V,_,z,H,U,F,P,B,M,R,J,K,X,C,G,L,Q,W,Y;return{c(){a=t(),s=l("div"),j=l("div"),y=l("h1"),N=i("Hinterlassen Sie mir eine "),S=l("span"),T=i("Nachricht"),A=t(),x=l("h2"),O=i("Ich melde mich gerne bei Ihnen, falls Sie an einer Online-Fortbildung interessiert sind."),q=t(),D=l("div"),V=l("div"),_=l("form"),z=l("textarea"),U=t(),F=l("div"),P=l("input"),M=t(),R=l("input"),K=t(),X=l("button"),C=i("neu"),L=t(),Q=l("button"),W=i(e[3]),this.h()},l(t){c('[data-svelte="svelte-uee4nd"]',k.head).forEach(r),a=n(t),s=o(t,"DIV",{id:!0});var l=d(s);j=o(l,"DIV",{class:!0});var i=d(j);y=o(i,"H1",{});var u=d(y);N=h(u,"Hinterlassen Sie mir eine "),S=o(u,"SPAN",{class:!0});var p=d(S);T=h(p,"Nachricht"),p.forEach(r),u.forEach(r),A=n(i),x=o(i,"H2",{});var f=d(x);O=h(f,"Ich melde mich gerne bei Ihnen, falls Sie an einer Online-Fortbildung interessiert sind."),f.forEach(r),i.forEach(r),l.forEach(r),q=n(t),D=o(t,"DIV",{id:!0});var m=d(D);V=o(m,"DIV",{class:!0});var v=d(V);_=o(v,"FORM",{class:!0});var E=d(_);z=o(E,"TEXTAREA",{class:!0,disabled:!0,type:!0,placeholder:!0,id:!0,spellcheck:!0}),d(z).forEach(r),U=n(E),F=o(E,"DIV",{id:!0,class:!0});var w=d(F);P=o(w,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0,required:!0,autocomplete:!0,autocorrect:!0,autocapitalize:!0,spellcheck:!0}),M=n(w),R=o(w,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0,required:!0,autocomplete:!0,autocorrect:!0,autocapitalize:!0,spellcheck:!0}),w.forEach(r),K=n(E),X=o(E,"BUTTON",{class:!0});var b=d(X);C=h(b,"neu"),b.forEach(r),L=n(E),Q=o(E,"BUTTON",{type:!0,disabled:!0,class:!0});var g=d(Q);W=h(g,e[3]),g.forEach(r),E.forEach(r),v.forEach(r),m.forEach(r),this.h()},h(){k.title="Kontakt",u(S,"class","emph"),u(j,"class","wrapper-inner"),u(s,"id","headline"),u(z,"class","form-input svelte-1s1wjoa"),z.disabled=e[6],u(z,"type","text"),u(z,"placeholder","Ihre Anfrage"),u(z,"id","frage"),u(z,"spellcheck",H=!1),u(P,"id","name"),u(P,"class","form-input svelte-1s1wjoa"),u(P,"type","text"),u(P,"placeholder","Name"),P.required=B=!0,u(P,"autocomplete","off"),u(P,"autocorrect","off"),u(P,"autocapitalize","off"),u(P,"spellcheck","false"),u(R,"id","mail"),u(R,"class","form-input svelte-1s1wjoa"),u(R,"type","email"),u(R,"placeholder","E-Mail-Adresse"),R.required=J=!0,u(R,"autocomplete","off"),u(R,"autocorrect","off"),u(R,"autocapitalize","off"),u(R,"spellcheck","false"),u(F,"id","name_mail"),u(F,"class","svelte-1s1wjoa"),u(X,"class",G=p(e[4]?"dontshow":"show")+" svelte-1s1wjoa"),u(Q,"type","submit"),Q.disabled=e[5],u(Q,"class","svelte-1s1wjoa"),u(_,"class","svelte-1s1wjoa"),u(V,"class","wrapper-inner"),u(D,"id","content")},m(t,l,i){f(t,a,l),f(t,s,l),m(s,j),m(j,y),m(y,N),m(y,S),m(S,T),m(j,A),m(j,x),m(x,O),f(t,q,l),f(t,D,l),m(D,V),m(V,_),m(_,z),v(z,e[0]),m(_,U),m(_,F),m(F,P),v(P,e[1]),m(F,M),m(F,R),v(R,e[2]),m(_,K),m(_,X),m(X,C),m(_,L),m(_,Q),m(Q,W),i&&E(Y),Y=[w(z,"input",e[11]),w(P,"input",e[12]),w(R,"input",e[13]),w(X,"click",e[8]),w(_,"submit",b(e[7]))]},p(e,[a]){64&a&&(z.disabled=e[6]),1&a&&v(z,e[0]),2&a&&P.value!==e[1]&&v(P,e[1]),4&a&&R.value!==e[2]&&v(R,e[2]),16&a&&G!==(G=p(e[4]?"dontshow":"show")+" svelte-1s1wjoa")&&u(X,"class",G),8&a&&g(W,e[3]),32&a&&(Q.disabled=e[5])},i:I,o:I,d(e){e&&r(a),e&&r(s),e&&r(q),e&&r(D),E(Y)}}}function S(e,a,s){j(()=>{document.documentElement.setAttribute("data-theme","full-yellow")});let t="",l="",i="",c="senden",r=!0,n=!1,o=!1;const d=()=>{s(3,c="gesendet"),s(4,r=!1)},h=e=>{alert("Senden der Email ist fehlgeschlagen!\r\n Antwort:\n "+JSON.stringify(e))};return[t,l,i,c,r,n,o,()=>{t.length>0&&(s(5,n=!0),s(6,o=!0),s(3,c="senden..."),emailjs.send("default_service","ktp",{message_html:t,sender_email:i,sender_name:l}).then(d,h))},()=>{s(0,t=""),s(4,r=!0),s(5,n=!1),s(6,o=!1),s(3,c="senden")},d,h,function(){t=this.value,s(0,t)},function(){l=this.value,s(1,l)},function(){i=this.value,s(2,i)}]}export default class extends e{constructor(e){super(),a(this,e,S,N,s,{})}}
