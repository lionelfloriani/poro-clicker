const ce=function(){const K=document.createElement("link").relList;if(K&&K.supports&&K.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))oe(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const j of d.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&oe(j)}).observe(document,{childList:!0,subtree:!0});function re(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerpolicy&&(d.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?d.credentials="include":c.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function oe(c){if(c.ep)return;c.ep=!0;const d=re(c);fetch(c.href,d)}};ce();const f=document.getElementById("poro"),u=document.getElementById("score"),n=document.getElementById("bonus-multiplier"),o=document.getElementById("bonus-multiplier5"),l=document.getElementById("bonus-multiplier10"),s=document.getElementById("bonus-auto-clicker"),t=document.getElementById("bonus-time"),O=document.getElementById("reset"),ie=[],k=document.getElementById("clicks"),M=document.getElementById("obtain"),T=document.getElementById("spent"),v=document.getElementById("rpclicks"),A=document.getElementById("autoclicksecond"),z=document.getElementById("notification1"),G=document.getElementById("notification2"),J=document.getElementById("notification3"),Q=document.getElementById("notification4"),U=document.getElementById("notification5"),R=document.getElementById("rpicon"),x=document.getElementById("shop"),N=document.getElementById("github");let i=parseInt(localStorage.getItem("score")||"0"),e=parseInt(localStorage.getItem("pointsPerClick")||"1"),L=parseInt(localStorage.getItem("click")||"0"),E=parseInt(localStorage.getItem("totalObtainScore")||"0"),B=parseInt(localStorage.getItem("totalSpentScore")||"0"),C=parseInt(localStorage.getItem("numberPurchaseAutoClick")||"0");k&&(k.innerHTML=L.toString());M&&(M.innerHTML=E.toString());T&&(T.innerHTML=B.toString());v&&(v.innerHTML=e.toString());u&&(u.innerHTML=i.toString());A&&(A.innerHTML=C.toString());function V(){i>=m?s&&(s.classList.remove("disabled"),s.classList.add("enabled")):s&&(s.classList.add("disabled"),s.classList.remove("enabled"))}function $(){i>=p?n&&(n.classList.remove("disabled"),n.classList.add("enabled")):n&&(n.classList.add("disabled"),n.classList.remove("enabled"))}function q(){i>=g?o&&(o.classList.remove("disabled"),o.classList.add("enabled")):o&&(o.classList.add("disabled"),o.classList.remove("enabled"))}function F(){i>=S?l&&(l.classList.remove("disabled"),l.classList.add("enabled")):l&&(l.classList.add("disabled"),l.classList.remove("enabled"))}function H(){i>=a&&y===0?t&&(t.classList.remove("disabled"),t.classList.add("enabled")):t&&(t.classList.add("disabled"),t.classList.remove("enabled"))}function ae(){i=0,te=0,e=1,m=X,p=Y,g=Z,S=_,a=ee,ie.forEach(clearInterval),I=-1,y=0,V(),$(),q(),F(),H();for(let r in localStorage)localStorage.removeItem(r);i=parseInt(localStorage.getItem("score")||"0"),e=parseInt(localStorage.getItem("pointsPerClick")||"1"),L=parseInt(localStorage.getItem("click")||"0"),E=parseInt(localStorage.getItem("totalObtainScore")||"0"),B=parseInt(localStorage.getItem("totalSpentScore")||"0"),m=X,p=Y,g=Z,S=_,a=ee,C=0,b(),k&&(k.innerHTML=L.toString()),M&&(M.innerHTML=E.toString()),T&&(T.innerHTML=B.toString()),v&&(v.innerHTML=e.toString()),u&&(u.innerHTML=i.toString())}function ne(){i+=e,localStorage.setItem("score",i.toString()),u&&(u.innerHTML=i.toString()),V(),$(),q(),F(),H(),ue(e),de(),fe(),me(),h(),se()}function b(){u&&(u.innerHTML=i.toString()),V(),$(),q(),F(),H(),se()}function ue(r){E+=r}function de(){localStorage.setItem("totalObtainScore",E.toString()),M&&(M.innerHTML=E.toString())}function P(r){B+=r}function w(){localStorage.setItem("totalSpentScore",B.toString()),T&&(T.innerHTML=B.toString())}function fe(){localStorage.setItem("click",L.toString()),L+=1}function me(){localStorage.setItem("click",L.toString()),k&&(k.innerHTML=L.toString())}function h(){v&&(v.innerHTML=e.toString())}function se(){A&&(A.innerHTML=C.toString())}const X=50;let m=parseInt(localStorage.getItem("priceAutoClicker")||X.toString());s&&(s.onmouseover=function(){s.innerHTML=m+"RP"});s&&(s.onmouseout=function(){s.innerHTML="Auto Click"});if(parseInt(localStorage.getItem("priceAutoClicker")||"50")>X)for(let r=0;r<parseInt(localStorage.getItem("numberPurchaseAutoClick")||"0");r++)ie.push(setInterval(ne,1e3));function pe(){return i>=m?(C++,ie.push(setInterval(ne,1e3)),i-=m,P(m),m*=5,b(),w(),h(),localStorage.setItem("priceAutoClicker",m.toString()),localStorage.setItem("numberPurchaseAutoClick",C.toString()),!0):!1}const Y=500;let p=parseInt(localStorage.getItem("priceMultiplier")||Y.toString());n&&(n.onmouseover=function(){n.innerHTML=p+"RP"});n&&(n.onmouseout=function(){n.innerHTML="X2"});function ge(){return i>=p?(e=e*2,localStorage.setItem("pointsPerClick",e.toString()),i-=p,P(p),p*=10,b(),w(),h(),localStorage.setItem("priceMultiplier",p.toString()),!0):!1}const Z=2500;let g=parseInt(localStorage.getItem("priceMultiplier5")||Z.toString());o&&(o.onmouseover=function(){o.innerHTML=g+"RP"});o&&(o.onmouseout=function(){o.innerHTML="X5"});function Se(){return i>=g?(e=e*5,localStorage.setItem("pointsPerClick",e.toString()),i-=g,P(g),g*=15,b(),w(),h(),localStorage.setItem("priceMultiplier5",g.toString()),!0):!1}const _=5e3;let S=parseInt(localStorage.getItem("priceMultiplier10")||_.toString());l&&(l.onmouseover=function(){l.innerHTML=S+"RP"});l&&(l.onmouseout=function(){l.innerHTML="X10"});function ye(){return i>=S?(e=e*10,localStorage.setItem("pointsPerClick",e.toString()),i-=S,P(S),S*=20,b(),w(),h(),localStorage.setItem("priceMultiplier10",S.toString()),!0):!1}const ee=200;let a=parseInt(localStorage.getItem("priceTime")||ee.toString());t&&(t.onmouseover=function(){y===0&&(t.innerHTML=a+"RP")});t&&(t.onmouseout=function(){y===0&&(t.innerHTML="Bonus Time")});let te=0,y=0,I=30;function Ie(){I===-1?t&&(t.innerHTML="Bonus Time"):(I>=10?t&&(t.innerHTML=`00:${I}`):t&&(t.innerHTML=`00:0${I}`),I--)}function Le(){if(y===0)if(te===0){if(i>=a){setInterval(Ie,1e3),y=1;const r=e;return e=e+r,setTimeout(function(){e=e-r,y=0},3e4),setTimeout(function(){H()},31900),i-=a,b(),P(a),a*=5,I=30,te=1,w(),h(),localStorage.setItem("priceTime",a.toString()),!0}}else if(i>=a){y=1;const r=e;return e=e+r,setTimeout(function(){e=e-r,y=0,H()},3e4),i-=a,b(),a*=2,I=30,localStorage.setItem("priceTime",a.toString()),!0}else return!1;else return!1;return!1}f&&f.addEventListener("click",ne);f&&f.addEventListener("click",function(){TweenLite.to(f,.1,{scale:1.2,ease:Power1.easeInOut}),TweenLite.to(f,.1,{scale:1,delay:.1,ease:Power1.easeInOut})});n&&n.addEventListener("click",function(){ge()===!0&&z&&(z.classList.add("show"),setTimeout(()=>{z.classList.remove("show")},2e3))});o&&o.addEventListener("click",function(){Se()===!0&&G&&(G.classList.add("show"),setTimeout(()=>{G.classList.remove("show")},2e3))});l&&l.addEventListener("click",function(){ye()===!0&&J&&(J.classList.add("show"),setTimeout(()=>{J.classList.remove("show")},2e3))});s&&s.addEventListener("click",function(){pe()===!0&&Q&&(Q.classList.add("show"),setTimeout(()=>{Q.classList.remove("show")},2e3))});t&&t.addEventListener("click",function(){Le()===!0&&U&&(U.classList.add("show"),setTimeout(()=>{U.classList.remove("show")},2e3))});O&&O.addEventListener("click",ae);document.addEventListener("DOMContentLoaded",function(){s&&s.classList.add("disabled"),n&&n.classList.add("disabled"),o&&o.classList.add("disabled"),l&&l.classList.add("disabled"),t&&t.classList.add("disabled")});const D=document.getElementById("play"),W=document.getElementById("game"),le=document.getElementById("welcomepage");D&&D.addEventListener("click",function(){parseInt(localStorage.getItem("score")||"0")!=0&&(V(),$(),q(),F(),H()),W&&(W.classList.remove("blur"),W.style.pointerEvents="auto"),le&&(le.style.display="none"),f&&(f.style.display="block"),n&&(n.style.display="block"),o&&(o.style.display="block"),l&&(l.style.display="block"),s&&(s.style.display="block"),t&&(t.style.display="block"),R&&(R.style.display="block"),x&&(x.style.display="block"),u&&(u.style.display="block"),N&&(N.style.display="block")});D&&(D.style.pointerEvents="auto");O&&(O.style.pointerEvents="auto");f&&(f.style.display="none");n&&(n.style.display="none");o&&(o.style.display="none");l&&(l.style.display="none");s&&(s.style.display="none");t&&(t.style.display="none");R&&(R.style.display="none");x&&(x.style.display="none");u&&(u.style.display="none");N&&(N.style.display="none");
