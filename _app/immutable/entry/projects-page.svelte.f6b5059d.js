import{J as se,K as de,L as he,M as _e,S as ce,i as ue,s as fe,k as b,a as O,l as w,m as A,h as _,c as M,n as c,p as H,b as q,D as a,H as ee,N as me,I as K,o as ve,e as le,q as W,r as N,O as Q,u as B,t as ge,P as x,Q as pe,y as Ee,z as ye,A as be,g as we,d as ke,B as Ie}from"../chunks/index.fdf9304b.js";import{w as Ae}from"../chunks/index.42e397df.js";function V(t){const e=t-1;return e*e*e+1}function re(t){return Object.prototype.toString.call(t)==="[object Date]"}function te(t,e){if(t===e||t!==t)return()=>t;const l=typeof t;if(l!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map((o,s)=>te(t[s],o));return o=>n.map(s=>s(o))}if(l==="object"){if(!t||!e)throw new Error("Object cannot be null");if(re(t)&&re(e)){t=t.getTime(),e=e.getTime();const s=e-t;return r=>new Date(t+r*s)}const n=Object.keys(e),o={};return n.forEach(s=>{o[s]=te(t[s],e[s])}),s=>{const r={};return n.forEach(h=>{r[h]=o[h](s)}),r}}if(l==="number"){const n=e-t;return o=>t+o*n}throw new Error(`Cannot interpolate ${l} values`)}function z(t,e={}){const l=Ae(t);let n,o=t;function s(r,h){if(t==null)return l.set(t=r),Promise.resolve();o=r;let p=n,g=!1,{delay:f=0,duration:i=400,easing:m=_e,interpolate:d=te}=se(se({},e),h);if(i===0)return p&&(p.abort(),p=null),l.set(t=o),Promise.resolve();const y=de()+f;let v;return n=he(D=>{if(D<y)return!0;g||(v=d(t,r),typeof i=="function"&&(i=i(t,r)),g=!0),p&&(p.abort(),p=null);const S=D-y;return S>i?(l.set(t=r),!1):(l.set(t=v(m(S/i))),!0)}),n.promise}return{set:s,update:(r,h)=>s(r(o,t),h),subscribe:l.subscribe}}const Pe=""+new URL("../assets/this-website.9f51793e.png",import.meta.url).href,De=""+new URL("../assets/mate.a9ce8bf2.png",import.meta.url).href,je=""+new URL("../assets/robbe.ccc01866.png",import.meta.url).href;function ie(t,e,l){const n=t.slice();return n[21]=e[l],n}function Ce(t){let e,l,n,o,s,r,h,p=t[21].title+"",g,f,i,m=t[21].description+"",d,y,v,D,S,C,U;function T(...I){return t[16](t[21],...I)}return{c(){e=b("article"),l=b("aside"),n=b("img"),s=O(),r=b("aside"),h=b("h1"),g=W(p),f=O(),i=b("p"),d=W(m),y=O(),v=b("p"),D=W("Click to view!"),S=O(),this.h()},l(I){e=w(I,"ARTICLE",{class:!0,style:!0});var R=A(e);l=w(R,"ASIDE",{class:!0});var k=A(l);n=w(k,"IMG",{alt:!0,src:!0,class:!0}),k.forEach(_),s=M(R),r=w(R,"ASIDE",{class:!0});var P=A(r);h=w(P,"H1",{class:!0});var E=A(h);g=N(E,p),E.forEach(_),f=M(P),i=w(P,"P",{class:!0});var G=A(i);d=N(G,m),G.forEach(_),y=M(P),v=w(P,"P",{style:!0,class:!0});var u=A(v);D=N(u,"Click to view!"),u.forEach(_),P.forEach(_),S=M(R),R.forEach(_),this.h()},h(){c(n,"alt","preview of project"),Q(n.src,o=t[21].img)||c(n,"src",o),c(n,"class","svelte-1ufp5u3"),c(l,"class","left svelte-1ufp5u3"),c(h,"class","svelte-1ufp5u3"),c(i,"class","svelte-1ufp5u3"),H(v,"font-weight","bold"),H(v,"text-decoration","underline"),c(v,"class","svelte-1ufp5u3"),c(r,"class","right svelte-1ufp5u3"),c(e,"class","preview svelte-1ufp5u3"),H(e,"visibility","hidden")},m(I,R){q(I,e,R),a(e,l),a(l,n),a(e,s),a(e,r),a(r,h),a(h,g),a(r,f),a(r,i),a(i,d),a(r,y),a(r,v),a(v,D),a(e,S),C||(U=[x(e,"click",T),x(e,"keydown",Le)],C=!0)},p(I,R){t=I},d(I){I&&_(e),C=!1,pe(U)}}}function Re(t){let e,l,n,o,s,r,h,p=t[21].title+"",g,f,i,m=t[21].description+"",d,y,v,D,S,C,U;function T(...I){return t[15](t[21],...I)}return{c(){e=b("article"),l=b("aside"),n=b("img"),s=O(),r=b("aside"),h=b("h1"),g=W(p),f=O(),i=b("p"),d=W(m),y=O(),v=b("p"),D=W("Click to view!"),S=O(),this.h()},l(I){e=w(I,"ARTICLE",{class:!0});var R=A(e);l=w(R,"ASIDE",{class:!0});var k=A(l);n=w(k,"IMG",{alt:!0,src:!0,class:!0}),k.forEach(_),s=M(R),r=w(R,"ASIDE",{class:!0});var P=A(r);h=w(P,"H1",{class:!0});var E=A(h);g=N(E,p),E.forEach(_),f=M(P),i=w(P,"P",{class:!0});var G=A(i);d=N(G,m),G.forEach(_),y=M(P),v=w(P,"P",{style:!0,class:!0});var u=A(v);D=N(u,"Click to view!"),u.forEach(_),P.forEach(_),S=M(R),R.forEach(_),this.h()},h(){c(n,"alt","preview of project"),Q(n.src,o=t[21].img)||c(n,"src",o),c(n,"class","svelte-1ufp5u3"),c(l,"class","left svelte-1ufp5u3"),c(h,"class","svelte-1ufp5u3"),c(i,"class","svelte-1ufp5u3"),H(v,"font-weight","bold"),H(v,"text-decoration","underline"),c(v,"class","svelte-1ufp5u3"),c(r,"class","right svelte-1ufp5u3"),c(e,"class","preview svelte-1ufp5u3")},m(I,R){q(I,e,R),a(e,l),a(l,n),a(e,s),a(e,r),a(r,h),a(h,g),a(r,f),a(r,i),a(i,d),a(r,y),a(r,v),a(v,D),a(e,S),C||(U=[x(e,"click",T),x(e,"keydown",Te)],C=!0)},p(I,R){t=I},d(I){I&&_(e),C=!1,pe(U)}}}function ae(t){let e;function l(s,r){return s[21]!==s[0]?Re:Ce}let n=l(t),o=n(t);return{c(){o.c(),e=le()},l(s){o.l(s),e=le()},m(s,r){o.m(s,r),q(s,e,r)},p(s,r){n===(n=l(s))&&o?o.p(s,r):(o.d(1),o=n(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&_(e)}}}function oe(t){let e,l,n,o,s,r,h=t[0].title+"",p,g,f,i=t[0].description+"",m,d,y,v=t[0].extraDescription+"",D,S,C,U,T,I=t[0].repository+"",R,k,P,E,G;return{c(){e=b("aside"),l=b("img"),o=O(),s=b("aside"),r=b("h1"),p=W(h),g=O(),f=b("p"),m=W(i),d=O(),y=b("p"),D=W(v),S=O(),C=b("p"),U=W("Repository: "),T=b("a"),R=W(I),P=O(),E=b("p"),G=W("Click outside to close!"),this.h()},l(u){e=w(u,"ASIDE",{class:!0});var j=A(e);l=w(j,"IMG",{alt:!0,src:!0,class:!0}),j.forEach(_),o=M(u),s=w(u,"ASIDE",{class:!0});var L=A(s);r=w(L,"H1",{class:!0});var F=A(r);p=N(F,h),F.forEach(_),g=M(L),f=w(L,"P",{class:!0});var X=A(f);m=N(X,i),X.forEach(_),d=M(L),y=w(L,"P",{class:!0});var Y=A(y);D=N(Y,v),Y.forEach(_),S=M(L),C=w(L,"P",{class:!0});var J=A(C);U=N(J,"Repository: "),T=w(J,"A",{href:!0,class:!0});var Z=A(T);R=N(Z,I),Z.forEach(_),J.forEach(_),P=M(L),E=w(L,"P",{style:!0,class:!0});var $=A(E);G=N($,"Click outside to close!"),$.forEach(_),L.forEach(_),this.h()},h(){c(l,"alt","preview of project"),Q(l.src,n=t[0].img)||c(l,"src",n),c(l,"class","svelte-1ufp5u3"),c(e,"class","left svelte-1ufp5u3"),c(r,"class","svelte-1ufp5u3"),c(f,"class","svelte-1ufp5u3"),c(y,"class","svelte-1ufp5u3"),c(T,"href",k=t[0].repository),c(T,"class","svelte-1ufp5u3"),c(C,"class","svelte-1ufp5u3"),H(E,"font-weight","bold"),H(E,"text-decoration","underline"),c(E,"class","svelte-1ufp5u3"),c(s,"class","right svelte-1ufp5u3")},m(u,j){q(u,e,j),a(e,l),q(u,o,j),q(u,s,j),a(s,r),a(r,p),a(s,g),a(s,f),a(f,m),a(s,d),a(s,y),a(y,D),a(s,S),a(s,C),a(C,U),a(C,T),a(T,R),a(s,P),a(s,E),a(E,G)},p(u,j){j&1&&!Q(l.src,n=u[0].img)&&c(l,"src",n),j&1&&h!==(h=u[0].title+"")&&B(p,h),j&1&&i!==(i=u[0].description+"")&&B(m,i),j&1&&v!==(v=u[0].extraDescription+"")&&B(D,v),j&1&&I!==(I=u[0].repository+"")&&B(R,I),j&1&&k!==(k=u[0].repository)&&c(T,"href",k)},d(u){u&&_(e),u&&_(o),u&&_(s)}}}function ne(t){let e,l,n,o,s,r,h=t[0].title+"",p,g,f,i=t[0].description+"",m,d,y,v=t[0].extraDescription+"",D,S,C,U,T,I=t[0].repository+"",R,k,P,E,G;return{c(){e=b("aside"),l=b("img"),o=O(),s=b("aside"),r=b("h1"),p=W(h),g=O(),f=b("p"),m=W(i),d=O(),y=b("p"),D=W(v),S=O(),C=b("p"),U=W("Repository: "),T=b("a"),R=W(I),P=O(),E=b("p"),G=W("Click outside to close!"),this.h()},l(u){e=w(u,"ASIDE",{class:!0});var j=A(e);l=w(j,"IMG",{alt:!0,src:!0,class:!0}),j.forEach(_),o=M(u),s=w(u,"ASIDE",{class:!0});var L=A(s);r=w(L,"H1",{class:!0});var F=A(r);p=N(F,h),F.forEach(_),g=M(L),f=w(L,"P",{class:!0});var X=A(f);m=N(X,i),X.forEach(_),d=M(L),y=w(L,"P",{class:!0});var Y=A(y);D=N(Y,v),Y.forEach(_),S=M(L),C=w(L,"P",{class:!0});var J=A(C);U=N(J,"Repository: "),T=w(J,"A",{href:!0,class:!0});var Z=A(T);R=N(Z,I),Z.forEach(_),J.forEach(_),P=M(L),E=w(L,"P",{style:!0,class:!0});var $=A(E);G=N($,"Click outside to close!"),$.forEach(_),L.forEach(_),this.h()},h(){c(l,"alt","preview of project"),Q(l.src,n=t[0].img)||c(l,"src",n),c(l,"class","svelte-1ufp5u3"),c(e,"class","left svelte-1ufp5u3"),c(r,"class","svelte-1ufp5u3"),c(f,"class","svelte-1ufp5u3"),c(y,"class","svelte-1ufp5u3"),c(T,"href",k=t[0].repository),c(T,"class","svelte-1ufp5u3"),c(C,"class","svelte-1ufp5u3"),H(E,"font-weight","bold"),H(E,"text-decoration","underline"),c(E,"class","svelte-1ufp5u3"),c(s,"class","right svelte-1ufp5u3")},m(u,j){q(u,e,j),a(e,l),q(u,o,j),q(u,s,j),a(s,r),a(r,p),a(s,g),a(s,f),a(f,m),a(s,d),a(s,y),a(y,D),a(s,S),a(s,C),a(C,U),a(C,T),a(T,R),a(s,P),a(s,E),a(E,G)},p(u,j){j&1&&!Q(l.src,n=u[0].img)&&c(l,"src",n),j&1&&h!==(h=u[0].title+"")&&B(p,h),j&1&&i!==(i=u[0].description+"")&&B(m,i),j&1&&v!==(v=u[0].extraDescription+"")&&B(D,v),j&1&&I!==(I=u[0].repository+"")&&B(R,I),j&1&&k!==(k=u[0].repository)&&c(T,"href",k)},d(u){u&&_(e),u&&_(o),u&&_(s)}}}function Se(t){let e,l,n,o,s,r,h=t[7],p=[];for(let i=0;i<h.length;i+=1)p[i]=ae(ie(t,h,i));let g=t[0]&&oe(t),f=t[0]&&ne(t);return{c(){e=b("div"),l=b("div");for(let i=0;i<p.length;i+=1)p[i].c();n=O(),o=b("article"),g&&g.c(),s=O(),r=b("article"),f&&f.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var m=A(e);l=w(m,"DIV",{class:!0,style:!0});var d=A(l);for(let D=0;D<p.length;D+=1)p[D].l(d);d.forEach(_),n=M(m),o=w(m,"ARTICLE",{class:!0,style:!0});var y=A(o);g&&g.l(y),y.forEach(_),s=M(m),r=w(m,"ARTICLE",{id:!0,style:!0,class:!0});var v=A(r);f&&f.l(v),v.forEach(_),m.forEach(_),this.h()},h(){c(l,"class","grid absolute svelte-1ufp5u3"),H(l,"opacity",t[2]),c(o,"class","full svelte-1ufp5u3"),H(o,"top",t[3]+"px"),H(o,"left",t[4]+"px"),H(o,"width",t[5]+"px"),H(o,"height",t[1]+"px"),H(o,"opacity",t[6]),c(r,"id","hidden-full"),H(r,"visibility","hidden"),c(r,"class","svelte-1ufp5u3"),c(e,"class","container svelte-1ufp5u3")},m(i,m){q(i,e,m),a(e,l);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(l,null);a(e,n),a(e,o),g&&g.m(o,null),a(e,s),a(e,r),f&&f.m(r,null)},p(i,[m]){if(m&16513){h=i[7];let d;for(d=0;d<h.length;d+=1){const y=ie(i,h,d);p[d]?p[d].p(y,m):(p[d]=ae(y),p[d].c(),p[d].m(l,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=h.length}m&4&&H(l,"opacity",i[2]),i[0]?g?g.p(i,m):(g=oe(i),g.c(),g.m(o,null)):g&&(g.d(1),g=null),m&8&&H(o,"top",i[3]+"px"),m&16&&H(o,"left",i[4]+"px"),m&32&&H(o,"width",i[5]+"px"),m&2&&H(o,"height",i[1]+"px"),m&64&&H(o,"opacity",i[6]),i[0]?f?f.p(i,m):(f=ne(i),f.c(),f.m(r,null)):f&&(f.d(1),f=null)},i:ee,o:ee,d(i){i&&_(e),me(p,i),g&&g.d(),f&&f.d()}}}const Te=()=>{},Le=()=>{};function He(t,e,l){let n,o,s,r,h,p,g=[{title:"Project Porfolio",img:Pe,description:"That's this site!",extraDescription:"I created this site to try out building a website using SvelteKit, which is something I have only dipped my toes in before.",repository:"https://github.com/parslie/webbu-hackathon-23"},{title:"MATE",img:De,description:"A TUI text editor made with Rust.",extraDescription:`It's name is an acronym for "Marvelous Application for Text Editing".`,repository:"https://github.com/parslie/mate"},{title:"Robbe Robot",img:je,description:"A Discord bot with various commands.",extraDescription:"It's written in Python using the discord.py library.",repository:"https://github.com/parslie/robbe-robot"}],f=null,i=!1,m=null;const d=z(0,{duration:500,easing:V});K(t,d,k=>l(4,r=k));const y=z(0,{duration:500,easing:V});K(t,y,k=>l(3,s=k));const v=z(0,{duration:500,easing:V});K(t,v,k=>l(5,h=k));const D=z(0,{duration:500,easing:V});K(t,D,k=>l(1,n=k));const S=z(0,{duration:500,easing:V});K(t,S,k=>l(6,p=k));const C=z(1,{duration:500,easing:V});K(t,C,k=>l(2,o=k));async function U(k,P){i=!0,l(0,m=P);let E=k.target,G=E.parentElement;for(;E.nodeName!=="ARTICLE"&&G;)E=G,G=E.parentElement;let u=E.offsetLeft,j=E.offsetTop,L=E.offsetWidth,F=E.offsetHeight;d.set(u,{duration:0}),y.set(j,{duration:0}),v.set(L,{duration:0}),D.set(F,{duration:0}),d.set(0),y.set(0),G&&f&&(v.set(G.offsetWidth),await ge(),D.set(f.offsetHeight)),S.set(1,{duration:0}),C.set(0)}function T(k){if(i)i=!1;else{let P=!1,E=k.target;for(;;){if(E.className.startsWith("full")){P=!0;break}else if(!E.parentElement)break;E=E.parentElement}P||(l(0,m=null),S.set(0),y.set(-n*2,{duration:1e3}),C.set(1))}}return ve(()=>{f=document.getElementById("hidden-full"),document.onclick=T}),[m,n,o,s,r,h,p,g,d,y,v,D,S,C,U,(k,P)=>U(P,k),(k,P)=>U(P,k)]}class Oe extends ce{constructor(e){super(),ue(this,e,He,Se,fe,{})}}function Me(t){let e,l;return e=new Oe({}),{c(){Ee(e.$$.fragment)},l(n){ye(e.$$.fragment,n)},m(n,o){be(e,n,o),l=!0},p:ee,i(n){l||(we(e.$$.fragment,n),l=!0)},o(n){ke(e.$$.fragment,n),l=!1},d(n){Ie(e,n)}}}class Ne extends ce{constructor(e){super(),ue(this,e,null,Me,fe,{})}}export{Ne as default};