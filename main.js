(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(81),s=n.n(a),d=n(645),i=n.n(d),o=n(667),c=n.n(o),r=new URL(n(174),n.b),l=new URL(n(816),n.b),p=new URL(n(382),n.b),m=new URL(n(767),n.b),u=i()(s()),h=c()(r),f=c()(l),g=c()(p),C=c()(m);u.push([e.id,`body {\n    border: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-display: swap; \n    font-family: 'Angkor';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${h}) format('woff2'); \n}\n\n@font-face {\n    font-display: swap; \n    font-family: 'IBM Plex Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${f}) format('woff2'); \n}\n\n@font-face {\n    font-display: swap; \n    font-family: 'IBM Plex Mono';\n    font-style: normal;\n    font-weight: 600;\n    src: url(${g}) format('woff2'); \n}\n\n.header {\n    background-color: black;\n    display: flex;\n    align-items: center;\n    color: white;\n    gap: 250px;\n}\n\n.logo {\n    height: 200px;\n    width: 200px;\n    padding: 20px;\n}\n\n.topic {\n    font-size: 6rem;\n    height: 200px;\n    font-family: 'Angkor', cursive;\n    padding: 0;\n    display: flex;\n    align-items: center;\n}\n\n.info {\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 1.5rem;\n    border: 2px solid black;\n    padding: 20px 60px;\n    background-color: rgb(211, 19, 83);\n    background-image: url(${C});\n    height: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    font-weight: 900;\n}\n\n\n.data {\n    margin-bottom: 100px;\n    border: 5px dashed black;\n    padding: 50px;\n}\n\n.watermark {\n    height: 200px;\n}\n\n.footer {\n    display: flex;\n    justify-content: flex-end;\n    background-color: blueviolet;\n    align-items: center;\n    padding-right: 40px;\n}\n\n.data:first-child {\n    margin-top: 100px;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n}\n\n.homebtn,.menubtn,.contactbtn {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n    font-size: 2rem;\n    padding: 20px 34px;\n    background-color: black;\n    color: white;\n    border: 1px solid wheat;\n    border-right: none;\n}\n\n.homebtn {\n    border-top: none;\n}\n\n.contactbtn {\n    border-bottom: none;\n}\n\nbutton:active,.active {\n    background-color: brown;\n  }\n\n/**********************************************//*MENU*//*****************************************************/\n\nh1 {\n    font-family: 'Angkor', cursive;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 30px;\n    background-color: rgb(122, 83, 11);\n}\n\n.fname {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n}\n\n.main,.desrt,.dr {\n    margin-bottom: 50px;\n    background-color: white;\n    padding: 20px 40px;\n}\n\n.card1,.card2,.card3 {\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));\n    gap: 50px;\n    padding: 0 30px;\n}\n\n#content {\n    padding-top: 100px;\n    padding-bottom: 50px;\n    background-color: burlywood;\n}\n\n.mainh1 {\n    margin-bottom: 70px;\n}\n\n/**********************************************//*CONTACT*//**************************************************/\n\n.cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));\n    gap: 50px;\n    padding: 0 30px;\n}\n\n.card {\n    margin-bottom: 50px;\n    background-color: white;\n    padding: 20px 40px;\n}  \n\n.name {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n    font-size: 2rem;\n}\n\n.image {\n    height: 600px;\n    width:350px;\n}\n\n.para {\n    font-family: 'IBM Plex Mono';\n    font-weight: 600;\n    font-size:1.5rem;\n    padding: 20px 70px;\n}`,""]);const v=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,d){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);a&&i[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var d={},i=[],o=0;o<e.length;o++){var c=e[o],r=a.base?c[0]+a.base:c[0],l=d[r]||0,p="".concat(r," ").concat(l);d[r]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=s(u,a);a.byIndex=o,t.splice(o,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var d=a(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<d.length;i++){var o=n(d[i]);t[o].references--}for(var c=a(e,s),r=0;r<d.length;r++){var l=n(d[r]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}d=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},174:(e,t,n)=>{e.exports=n.p+"cd89f78ecde1b847bf52.woff2"},382:(e,t,n)=>{e.exports=n.p+"127766ed59632429f346.woff2"},816:(e,t,n)=>{e.exports=n.p+"57685f70bce71bc2281d.woff2"},767:(e,t,n)=>{e.exports=n.p+"7ea69a7493b65141e7a9.jpeg"}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var d=t[a]={id:a,exports:{}};return e[a](d,d.exports,n),d.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&!e;)e=a[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),s=n.n(a),d=n(569),i=n.n(d),o=n(565),c=n.n(o),r=n(216),l=n.n(r),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=document.createElement("div"),g=document.createElement("div");g.classList.add("info");const C=document.createElement("p");C.classList.add("data"),C.textContent="The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region(サンバス海域, Sanbasu Kaiiki?) of the East Blue, close to the entrance of the Grand Line.";const v=document.createElement("p");v.classList.add("data"),v.textContent="Zeff founded the Baratie with Sanji's help and support. After the Cook Pirates attacked the Orbit, both Zeff and a 9-year-old Sanji were stranded on a rock for 85 days. During this time, Zeff discussed with Sanji the idea of starting a restaurant floating on the sea, and Sanji promised that if they survived, he would help Zeff achieve that goal. After they were rescued on the 85th day, Zeff sold all the treasure he had and purchased the Baratie. As the restaurant's new head chef, he told Sanji (the new sous chef) that all customers would be welcome, no matter how villainous they were.";const b=document.createElement("p");b.classList.add("data"),b.textContent="The Baratie staff is noted for being a staff of outcasts, exiles and pirate types. Its owner is a renowned former pirate captain, and Sanji himself came to help co-found the restaurant after being exiled from his family. Most of the chefs (including Patty and Carne) also joined up after being chased out of other restaurants and responding to Zeff's adverts for 'damn cooks'. When the restaurant came under attack by the Krieg Pirates, the cooking staff decided to defend it because it was the one place that had accepted them. The staff mostly fights with oversized cutlery such as forks and knives unlike Zeff and Sanji.",f.appendChild(g),g.appendChild(C),g.appendChild(v),g.appendChild(b);const x=f,L=document.createElement("div"),y=document.createElement("div");y.classList.add("dish");const E=document.createElement("h1");E.classList.add("mainh1"),E.textContent="Lunch and Dinner";const w=document.createElement("div");w.classList.add("card1");const k=document.createElement("div");k.classList.add("main");const A=document.createElement("img");A.classList.add("fpic"),A.setAttribute("src","../src/images/d1.png");const S=document.createElement("p");S.classList.add("fname"),S.textContent="In Order to Save My Friends: The Vow with Shanks";const M=document.createElement("div");M.classList.add("main");const B=document.createElement("img");B.classList.add("fpic"),B.setAttribute("src","../src/images/d2.png");const T=document.createElement("p");T.classList.add("fname"),T.textContent="'In the Name of Absolute Justice': The Birth of a Man Becoming a Marine Officer";const I=document.createElement("div");I.classList.add("main");const j=document.createElement("img");j.classList.add("fpic"),j.setAttribute("src","../src/images/d3.png");const P=document.createElement("p");P.classList.add("fname"),P.textContent="'Honorable Liar': Proud Warrior's Departure";const Z=document.createElement("div");Z.classList.add("main");const O=document.createElement("img");O.classList.add("fpic"),O.setAttribute("src","../src/images/d4.png");const N=document.createElement("p");N.classList.add("fname"),N.textContent="The Fighting Cook who Had the Same Dream: The Pirate and the Little Eggplant";const z=document.createElement("div");z.classList.add("main");const R=document.createElement("img");R.classList.add("fpic"),R.setAttribute("src","../src/images/d5.jpg");const D=document.createElement("p");D.classList.add("fname"),D.textContent="Aiming to be the Best Swordsman in the World: Battle of the 'Strong Man'";const U=document.createElement("div");U.classList.add("dessert");const $=document.createElement("h1");$.classList.add("desrth1"),$.textContent="Dessert";const q=document.createElement("div");q.classList.add("card2");const F=document.createElement("div");F.classList.add("desrt");const H=document.createElement("img");H.classList.add("fpic"),H.setAttribute("src","../src/images/dess1.png");const J=document.createElement("p");J.classList.add("fname"),J.textContent="Beautiful Lady: Glossy and Smooth Creme Brulee";const G=document.createElement("div");G.classList.add("desrt");const K=document.createElement("img");K.classList.add("fpic"),K.setAttribute("src","../src/images/dess2.png");const _=document.createElement("p");_.classList.add("fname"),_.textContent="A Gentleman's Taste: Apology Panna Cotta and Macedonia Combination with Orange Sauce";const W=document.createElement("div");W.classList.add("desrt");const V=document.createElement("img");V.classList.add("fpic"),V.setAttribute("src","../src/images/dess3.png");const Q=document.createElement("p");Q.classList.add("fname"),Q.textContent="Nami's Orange Jelly";const Y=document.createElement("div");Y.classList.add("drink");const X=document.createElement("h1");X.classList.add("drh1"),X.textContent="Drink";const ee=document.createElement("card3");ee.classList.add("card3");const te=document.createElement("div");te.classList.add("dr");const ne=document.createElement("img");ne.classList.add("fpic"),ne.setAttribute("src","../src/images/drink1.png");const ae=document.createElement("p");ae.classList.add("fname"),ae.textContent="Luffy: 'I'm going to become King of the Pirates!' Berry Berry Squash";const se=document.createElement("div");se.classList.add("dr");const de=document.createElement("img");de.classList.add("fpic"),de.setAttribute("src","../src/images/drink2.png");const ie=document.createElement("p");ie.classList.add("fname"),ie.textContent="Zoro: 'Thank you. I can still become stronger.' Kiwi Lassi";const oe=document.createElement("div");oe.classList.add("dr");const ce=document.createElement("img");ce.classList.add("fpic"),ce.setAttribute("src","../src/images/drink3.png");const re=document.createElement("p");re.classList.add("fname"),re.textContent="Sanji: 'Do you know All Blue?' Blue Ocean";const le=document.createElement("div");le.classList.add("dr");const pe=document.createElement("img");pe.classList.add("fpic"),pe.setAttribute("src","../src/images/drink4.png");const me=document.createElement("p");me.classList.add("fname"),me.textContent="Cocoyasi Village: 'Never forget the strength to continue laughing.' Bellemere's Orange Juice";const ue=document.createElement("div");ue.classList.add("dr");const he=document.createElement("img");he.classList.add("fpic"),he.setAttribute("src","../src/images/drink5.png");const fe=document.createElement("p");fe.classList.add("fname"),fe.textContent="Scurvy: 'Almost had him!' Lime Juice to Save Yosaku",L.appendChild(y),y.appendChild(E),y.appendChild(w),w.appendChild(k),k.appendChild(A),k.appendChild(S),w.appendChild(M),M.appendChild(B),M.appendChild(T),w.appendChild(I),I.appendChild(j),I.appendChild(P),w.appendChild(Z),Z.appendChild(O),Z.appendChild(N),w.appendChild(z),z.appendChild(R),z.appendChild(D),L.appendChild(U),U.appendChild($),U.appendChild(q),q.appendChild(F),F.appendChild(H),F.appendChild(J),q.appendChild(G),G.appendChild(K),G.appendChild(_),q.appendChild(W),W.appendChild(V),W.appendChild(Q),L.appendChild(Y),Y.appendChild(X),Y.appendChild(ee),ee.appendChild(te),te.appendChild(ne),te.appendChild(ae),ee.appendChild(se),se.appendChild(de),se.appendChild(ie),ee.appendChild(oe),oe.appendChild(ce),oe.appendChild(re),ee.appendChild(le),le.appendChild(pe),le.appendChild(me),ee.appendChild(ue),ue.appendChild(he),ue.appendChild(fe);const ge=L,Ce=document.createElement("div"),ve=document.createElement("h1");ve.classList.add("chefs"),ve.textContent="Chefs";const be=document.createElement("div");be.classList.add("cards");const xe=document.createElement("div");xe.classList.add("card");const Le=document.createElement("img");Le.classList.add("image"),Le.setAttribute("src","../src/images/Zeff.webp"),Le.setAttribute("alt","Zeff pic");const ye=document.createElement("p");ye.classList.add("name"),ye.textContent="Zeff";const Ee=document.createElement("p");Ee.classList.add("name"),Ee.textContent="(Head Chef and Owner)";const we=document.createElement("div");we.classList.add("card");const ke=document.createElement("img");ke.classList.add("image"),ke.setAttribute("src","../src/images/sanji2.jpeg"),ke.setAttribute("alt","Sanji pic");const Ae=document.createElement("p");Ae.classList.add("name"),Ae.textContent="Sanji";const Se=document.createElement("p");Se.classList.add("name"),Se.textContent="(Sous Chef)";const Me=document.createElement("div");Me.classList.add("card");const Be=document.createElement("img");Be.classList.add("image"),Be.setAttribute("src","../src/images/Patty.webp"),Be.setAttribute("alt","Patty pic");const Te=document.createElement("p");Te.classList.add("name"),Te.textContent="Patty";const Ie=document.createElement("p");Ie.classList.add("name"),Ie.textContent="(Patisserie)";const je=document.createElement("div");je.classList.add("card");const Pe=document.createElement("img");Pe.classList.add("image"),Pe.setAttribute("src","../src/images/Carne.webp"),Pe.setAttribute("alt","Carne pic");const Ze=document.createElement("p");Ze.classList.add("name"),Ze.textContent="Carne";const Oe=document.createElement("p");Oe.classList.add("name"),Oe.textContent="(Meat Master)";const Ne=document.createElement("h1");Ne.classList.add("location"),Ne.textContent="Location";const ze=document.createElement("p");ze.classList.add("para"),ze.textContent="Baratie is an ocean-going restaurant that is run by Zeff. It is located in the Sambas Region of East Blue. It is quite close to the entrance of the Grand Line. The Baratie is a large ship in an oval shape, it has normal masts and a fish as its front piece. The Baratie also has a round bottom. They also have some cannons on the side which can be used in battle. The Baratie has four levels. The lower deck is where the main restaurant is, the middle deck has the main kitchen, and the upper deck is the place where the cooks reside. The fins that are folded from underneath are used to stabilize the restaurant during harsh weather. It is also used to prevent the restaurant from getting any collateral damage.",Ce.appendChild(ve),Ce.appendChild(be),be.appendChild(xe),xe.appendChild(Le),xe.appendChild(ye),xe.appendChild(Ee),be.appendChild(we),we.appendChild(ke),we.appendChild(Ae),we.appendChild(Se),be.appendChild(Me),Me.appendChild(Be),Me.appendChild(Te),Me.appendChild(Ie),be.appendChild(je),je.appendChild(Pe),je.appendChild(Ze),je.appendChild(Oe),Ce.appendChild(Ne),Ce.appendChild(ze);const Re=Ce,De=document.getElementById("content"),Ue=document.querySelector(".homebtn"),$e=document.querySelector(".menubtn"),qe=document.querySelector(".contactbtn");De.appendChild(x);let Fe=1,He=0,Je=0;Ue.classList.add("active"),Ue.addEventListener("click",(()=>{Ue.classList.add("active"),$e.classList.remove("active"),qe.classList.remove("active"),0!=He&&De.removeChild(ge),0!=Je&&De.removeChild(Re),0!=Fe&&De.removeChild(x),De.appendChild(x),Fe++,He=0,Je=0})),$e.addEventListener("click",(()=>{Ue.classList.remove("active"),$e.classList.add("active"),qe.classList.remove("active"),0!=He&&De.removeChild(ge),0!=Je&&De.removeChild(Re),0!=Fe&&De.removeChild(x),De.appendChild(ge),Fe=0,He++,Je=0})),qe.addEventListener("click",(()=>{Ue.classList.remove("active"),$e.classList.remove("active"),qe.classList.add("active"),0!=He&&De.removeChild(ge),0!=Je&&De.removeChild(Re),0!=Fe&&De.removeChild(x),De.appendChild(Re),Fe=0,He=0,Je++}))})()})();