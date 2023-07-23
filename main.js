(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(81),d=n.n(a),s=n(645),o=n.n(s),i=n(667),c=n.n(i),r=new URL(n(174),n.b),l=new URL(n(816),n.b),p=new URL(n(382),n.b),m=new URL(n(767),n.b),u=o()(d()),h=c()(r),f=c()(l),g=c()(p),b=c()(m);u.push([e.id,`body {\n    border: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-display: swap; \n    font-family: 'Angkor';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${h}) format('woff2'); \n}\n\n@font-face {\n    font-display: swap; \n    font-family: 'IBM Plex Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${f}) format('woff2'); \n}\n\n@font-face {\n    font-display: swap; \n    font-family: 'IBM Plex Mono';\n    font-style: normal;\n    font-weight: 600;\n    src: url(${g}) format('woff2'); \n}\n\n.header {\n    background-color: black;\n    display: flex;\n    align-items: center;\n    color: white;\n    gap: 250px;\n}\n\n.logo {\n    height: 200px;\n    width: 200px;\n    padding: 20px;\n}\n\n.topic {\n    font-size: 6rem;\n    height: 200px;\n    font-family: 'Angkor', cursive;\n    padding: 0;\n    display: flex;\n    align-items: center;\n}\n\n.info {\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 1.5rem;\n    border: 2px solid black;\n    padding: 20px 60px;\n    background-color: rgb(211, 19, 83);\n    background-image: url(${b});\n    height: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    font-weight: 900;\n}\n\n\n.data {\n    margin-bottom: 100px;\n    border: 5px dashed black;\n    padding: 50px;\n}\n\n.watermark {\n    height: 200px;\n}\n\n.footer {\n    display: flex;\n    justify-content: flex-end;\n    background-color: blueviolet;\n    align-items: center;\n    padding-right: 40px;\n}\n\n.data:first-child {\n    margin-top: 100px;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n}\n\n.homebtn,.menubtn,.contactbtn {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n    font-size: 2rem;\n    padding: 20px 34px;\n    background-color: black;\n    color: white;\n    border: 1px solid wheat;\n    border-right: none;\n}\n\n.homebtn {\n    border-top: none;\n}\n\n.contactbtn {\n    border-bottom: none;\n}\n\nbutton:active,.active {\n    background-color: brown;\n  }\n\n/**********************************************//*MENU*//*****************************************************/\n\nh1 {\n    font-family: 'Angkor', cursive;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 30px;\n    background-color: rgb(122, 83, 11);\n}\n\n.fname {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n}\n\n.main,.desrt,.dr {\n    margin-bottom: 50px;\n    background-color: white;\n    padding: 20px 40px;\n}\n\n.card1,.card2,.card3 {\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));\n    gap: 50px;\n    padding: 0 30px;\n}\n\n#content {\n    padding-top: 100px;\n    padding-bottom: 50px;\n    background-color: burlywood;\n}\n\n.mainh1 {\n    margin-bottom: 70px;\n}\n\n/**********************************************//*CONTACT*//**************************************************/\n\n.cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));\n    gap: 50px;\n    padding: 0 30px;\n}\n\n.card {\n    margin-bottom: 50px;\n    background-color: white;\n    padding: 20px 40px;\n}  \n\n.name {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n    font-size: 2rem;\n}\n\n.image {\n    height: 600px;\n    width:350px;\n}\n\n.para {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n    font-size:1.5rem;\n    padding: 20px 70px;\n}`,""]);const C=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,d,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);a&&o[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),d&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=d):l[4]="".concat(d)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var s={},o=[],i=0;i<e.length;i++){var c=e[i],r=a.base?c[0]+a.base:c[0],l=s[r]||0,p="".concat(r," ").concat(l);s[r]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=d(u,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var s=a(e=e||[],d=d||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var i=n(s[o]);t[i].references--}for(var c=a(e,d),r=0;r<s.length;r++){var l=n(s[r]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,d&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},174:(e,t,n)=>{e.exports=n.p+"cd89f78ecde1b847bf52.woff2"},382:(e,t,n)=>{e.exports=n.p+"127766ed59632429f346.woff2"},816:(e,t,n)=>{e.exports=n.p+"57685f70bce71bc2281d.woff2"},767:(e,t,n)=>{e.exports=n.p+"7ea69a7493b65141e7a9.jpeg"}},t={};function n(a){var d=t[a];if(void 0!==d)return d.exports;var s=t[a]={id:a,exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var d=a.length-1;d>-1&&!e;)e=a[d--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),d=n.n(a),s=n(569),o=n.n(s),i=n(565),c=n.n(i),r=n(216),l=n.n(r),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=document.createElement("div"),g=document.createElement("div");g.classList.add("info");const b=document.createElement("p");b.classList.add("data"),b.textContent="The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region(サンバス海域, Sanbasu Kaiiki?) of the East Blue, close to the entrance of the Grand Line.";const C=document.createElement("p");C.classList.add("data"),C.textContent="Zeff founded the Baratie with Sanji's help and support. After the Cook Pirates attacked the Orbit, both Zeff and a 9-year-old Sanji were stranded on a rock for 85 days. During this time, Zeff discussed with Sanji the idea of starting a restaurant floating on the sea, and Sanji promised that if they survived, he would help Zeff achieve that goal. After they were rescued on the 85th day, Zeff sold all the treasure he had and purchased the Baratie. As the restaurant's new head chef, he told Sanji (the new sous chef) that all customers would be welcome, no matter how villainous they were.";const v=document.createElement("p");v.classList.add("data"),v.textContent="The Baratie staff is noted for being a staff of outcasts, exiles and pirate types. Its owner is a renowned former pirate captain, and Sanji himself came to help co-found the restaurant after being exiled from his family. Most of the chefs (including Patty and Carne) also joined up after being chased out of other restaurants and responding to Zeff's adverts for 'damn cooks'. When the restaurant came under attack by the Krieg Pirates, the cooking staff decided to defend it because it was the one place that had accepted them. The staff mostly fights with oversized cutlery such as forks and knives unlike Zeff and Sanji.",f.appendChild(g),g.appendChild(b),g.appendChild(C),g.appendChild(v);const x=f,L=n.p+"3bb5045bec691970ef9e.png",y=n.p+"498b02ea5bd55f0788f4.png",E=n.p+"5ca872901d8507bf4002.png",w=n.p+"73cc41eea71c0105cfd3.png",k=n.p+"d7a84fe56d23b522d14f.jpg",A=n.p+"7e45306d9364d4ab5db8.png",S=n.p+"62e57f05ef3e3000b62a.png",M=n.p+"df63eb3a7ae26634a30a.png",B=n.p+"eb071e99b90d0759b90d.png",T=n.p+"cd65e6f698aa2a2bdfc3.png",I=n.p+"feb2ba069a2e53cf3fba.png",j=n.p+"0716cc3c1f4a22de62af.png",P=n.p+"7a1a3463e4ab3b9812a5.png",Z=document.createElement("div"),O=document.createElement("div");O.classList.add("dish");const N=document.createElement("h1");N.classList.add("mainh1"),N.textContent="Lunch and Dinner";const z=document.createElement("div");z.classList.add("card1");const R=document.createElement("div");R.classList.add("main");const D=document.createElement("img");D.classList.add("fpic"),D.setAttribute("src",L);const U=document.createElement("p");U.classList.add("fname"),U.textContent="In Order to Save My Friends: The Vow with Shanks";const $=document.createElement("div");$.classList.add("main");const q=document.createElement("img");q.classList.add("fpic"),q.setAttribute("src",y);const F=document.createElement("p");F.classList.add("fname"),F.textContent="'In the Name of Absolute Justice': The Birth of a Man Becoming a Marine Officer";const H=document.createElement("div");H.classList.add("main");const J=document.createElement("img");J.classList.add("fpic"),J.setAttribute("src",E);const G=document.createElement("p");G.classList.add("fname"),G.textContent="'Honorable Liar': Proud Warrior's Departure";const K=document.createElement("div");K.classList.add("main");const _=document.createElement("img");_.classList.add("fpic"),_.setAttribute("src",w);const W=document.createElement("p");W.classList.add("fname"),W.textContent="The Fighting Cook who Had the Same Dream: The Pirate and the Little Eggplant";const V=document.createElement("div");V.classList.add("main");const Q=document.createElement("img");Q.classList.add("fpic"),Q.setAttribute("src",k);const Y=document.createElement("p");Y.classList.add("fname"),Y.textContent="Aiming to be the Best Swordsman in the World: Battle of the 'Strong Man'";const X=document.createElement("div");X.classList.add("dessert");const ee=document.createElement("h1");ee.classList.add("desrth1"),ee.textContent="Dessert";const te=document.createElement("div");te.classList.add("card2");const ne=document.createElement("div");ne.classList.add("desrt");const ae=document.createElement("img");ae.classList.add("fpic"),ae.setAttribute("src",A);const de=document.createElement("p");de.classList.add("fname"),de.textContent="Beautiful Lady: Glossy and Smooth Creme Brulee";const se=document.createElement("div");se.classList.add("desrt");const oe=document.createElement("img");oe.classList.add("fpic"),oe.setAttribute("src",S);const ie=document.createElement("p");ie.classList.add("fname"),ie.textContent="A Gentleman's Taste: Apology Panna Cotta and Macedonia Combination with Orange Sauce";const ce=document.createElement("div");ce.classList.add("desrt");const re=document.createElement("img");re.classList.add("fpic"),re.setAttribute("src",M);const le=document.createElement("p");le.classList.add("fname"),le.textContent="Nami's Orange Jelly";const pe=document.createElement("div");pe.classList.add("drink");const me=document.createElement("h1");me.classList.add("drh1"),me.textContent="Drink";const ue=document.createElement("card3");ue.classList.add("card3");const he=document.createElement("div");he.classList.add("dr");const fe=document.createElement("img");fe.classList.add("fpic"),fe.setAttribute("src",B);const ge=document.createElement("p");ge.classList.add("fname"),ge.textContent="Luffy: 'I'm going to become King of the Pirates!' Berry Berry Squash";const be=document.createElement("div");be.classList.add("dr");const Ce=document.createElement("img");Ce.classList.add("fpic"),Ce.setAttribute("src",T);const ve=document.createElement("p");ve.classList.add("fname"),ve.textContent="Zoro: 'Thank you. I can still become stronger.' Kiwi Lassi";const xe=document.createElement("div");xe.classList.add("dr");const Le=document.createElement("img");Le.classList.add("fpic"),Le.setAttribute("src",I);const ye=document.createElement("p");ye.classList.add("fname"),ye.textContent="Sanji: 'Do you know All Blue?' Blue Ocean";const Ee=document.createElement("div");Ee.classList.add("dr");const we=document.createElement("img");we.classList.add("fpic"),we.setAttribute("src",j);const ke=document.createElement("p");ke.classList.add("fname"),ke.textContent="Cocoyasi Village: 'Never forget the strength to continue laughing.' Bellemere's Orange Juice";const Ae=document.createElement("div");Ae.classList.add("dr");const Se=document.createElement("img");Se.classList.add("fpic"),Se.setAttribute("src",P);const Me=document.createElement("p");Me.classList.add("fname"),Me.textContent="Scurvy: 'Almost had him!' Lime Juice to Save Yosaku",Z.appendChild(O),O.appendChild(N),O.appendChild(z),z.appendChild(R),R.appendChild(D),R.appendChild(U),z.appendChild($),$.appendChild(q),$.appendChild(F),z.appendChild(H),H.appendChild(J),H.appendChild(G),z.appendChild(K),K.appendChild(_),K.appendChild(W),z.appendChild(V),V.appendChild(Q),V.appendChild(Y),Z.appendChild(X),X.appendChild(ee),X.appendChild(te),te.appendChild(ne),ne.appendChild(ae),ne.appendChild(de),te.appendChild(se),se.appendChild(oe),se.appendChild(ie),te.appendChild(ce),ce.appendChild(re),ce.appendChild(le),Z.appendChild(pe),pe.appendChild(me),pe.appendChild(ue),ue.appendChild(he),he.appendChild(fe),he.appendChild(ge),ue.appendChild(be),be.appendChild(Ce),be.appendChild(ve),ue.appendChild(xe),xe.appendChild(Le),xe.appendChild(ye),ue.appendChild(Ee),Ee.appendChild(we),Ee.appendChild(ke),ue.appendChild(Ae),Ae.appendChild(Se),Ae.appendChild(Me);const Be=Z,Te=document.createElement("div"),Ie=document.createElement("h1");Ie.classList.add("chefs"),Ie.textContent="Chefs";const je=document.createElement("div");je.classList.add("cards");const Pe=document.createElement("div");Pe.classList.add("card");const Ze=document.createElement("img");Ze.classList.add("image"),Ze.setAttribute("src","../src/images/Zeff.webp"),Ze.setAttribute("alt","Zeff pic");const Oe=document.createElement("p");Oe.classList.add("name"),Oe.textContent="Zeff";const Ne=document.createElement("p");Ne.classList.add("name"),Ne.textContent="(Head Chef and Owner)";const ze=document.createElement("div");ze.classList.add("card");const Re=document.createElement("img");Re.classList.add("image"),Re.setAttribute("src","../src/images/sanji2.jpeg"),Re.setAttribute("alt","Sanji pic");const De=document.createElement("p");De.classList.add("name"),De.textContent="Sanji";const Ue=document.createElement("p");Ue.classList.add("name"),Ue.textContent="(Sous Chef)";const $e=document.createElement("div");$e.classList.add("card");const qe=document.createElement("img");qe.classList.add("image"),qe.setAttribute("src","../src/images/Patty.webp"),qe.setAttribute("alt","Patty pic");const Fe=document.createElement("p");Fe.classList.add("name"),Fe.textContent="Patty";const He=document.createElement("p");He.classList.add("name"),He.textContent="(Patisserie)";const Je=document.createElement("div");Je.classList.add("card");const Ge=document.createElement("img");Ge.classList.add("image"),Ge.setAttribute("src","../src/images/Carne.webp"),Ge.setAttribute("alt","Carne pic");const Ke=document.createElement("p");Ke.classList.add("name"),Ke.textContent="Carne";const _e=document.createElement("p");_e.classList.add("name"),_e.textContent="(Meat Master)";const We=document.createElement("h1");We.classList.add("location"),We.textContent="Location";const Ve=document.createElement("p");Ve.classList.add("para"),Ve.textContent="Baratie is an ocean-going restaurant that is run by Zeff. It is located in the Sambas Region of East Blue. It is quite close to the entrance of the Grand Line. The Baratie is a large ship in an oval shape, it has normal masts and a fish as its front piece. The Baratie also has a round bottom. They also have some cannons on the side which can be used in battle. The Baratie has four levels. The lower deck is where the main restaurant is, the middle deck has the main kitchen, and the upper deck is the place where the cooks reside. The fins that are folded from underneath are used to stabilize the restaurant during harsh weather. It is also used to prevent the restaurant from getting any collateral damage.",Te.appendChild(Ie),Te.appendChild(je),je.appendChild(Pe),Pe.appendChild(Ze),Pe.appendChild(Oe),Pe.appendChild(Ne),je.appendChild(ze),ze.appendChild(Re),ze.appendChild(De),ze.appendChild(Ue),je.appendChild($e),$e.appendChild(qe),$e.appendChild(Fe),$e.appendChild(He),je.appendChild(Je),Je.appendChild(Ge),Je.appendChild(Ke),Je.appendChild(_e),Te.appendChild(We),Te.appendChild(Ve);const Qe=Te,Ye=document.getElementById("content"),Xe=document.querySelector(".homebtn"),et=document.querySelector(".menubtn"),tt=document.querySelector(".contactbtn");Ye.appendChild(x);let nt=1,at=0,dt=0;Xe.classList.add("active"),Xe.addEventListener("click",(()=>{Xe.classList.add("active"),et.classList.remove("active"),tt.classList.remove("active"),0!=at&&Ye.removeChild(Be),0!=dt&&Ye.removeChild(Qe),0!=nt&&Ye.removeChild(x),Ye.appendChild(x),nt++,at=0,dt=0})),et.addEventListener("click",(()=>{Xe.classList.remove("active"),et.classList.add("active"),tt.classList.remove("active"),0!=at&&Ye.removeChild(Be),0!=dt&&Ye.removeChild(Qe),0!=nt&&Ye.removeChild(x),Ye.appendChild(Be),nt=0,at++,dt=0})),tt.addEventListener("click",(()=>{Xe.classList.remove("active"),et.classList.remove("active"),tt.classList.add("active"),0!=at&&Ye.removeChild(Be),0!=dt&&Ye.removeChild(Qe),0!=nt&&Ye.removeChild(x),Ye.appendChild(Qe),nt=0,at=0,dt++}))})()})();