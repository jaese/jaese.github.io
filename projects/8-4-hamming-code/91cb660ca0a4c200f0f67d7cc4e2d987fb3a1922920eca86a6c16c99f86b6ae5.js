export default(async()=>{function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let l=i?()=>window.performance.now():()=>Date.now(),s=i?t=>requestAnimationFrame(t):t;const d=new Set;function u(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&s(u)}let f=!1;function h(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function b(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function m(t){const e=y("style");return p(b(t),e),e.sheet}function p(t,e){!function(t,e){t.appendChild(e)}(t.head||t,e)}function _(t,e){if(f){for(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const o=e[n];void 0!==o.claim_order&&t.push(o)}e=t}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const a=e[t].claim_order,c=(r>0&&e[n[r]].claim_order<=a?r+1:h(1,r,(t=>e[n[t]].claim_order),a))-1;o[t]=n[c]+1;const i=c+1;n[i]=t,r=Math.max(i,r)}const a=[],c=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(a.push(e[t-1]);i>=t;i--)c.push(e[i]);i--}for(;i>=0;i--)c.push(e[i]);a.reverse(),c.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<c.length;e++){for(;n<a.length&&c[e].claim_order>=a[n].claim_order;)n++;const o=n<a.length?a[n]:null;t.insertBefore(c[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function g(t,e,n){f&&!n?_(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function $(){return E(" ")}function k(){return E("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t){return Array.from(t.childNodes)}function N(t,e,n,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const a=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const e=n(a);return void 0===e?t.splice(o,1):t[o]=e,r||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const e=n(a);return void 0===e?t.splice(o,1):t[o]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return o()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function D(t,e,n){return function(t,e,n,o){return N(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o(e)))}(t,e,n,y)}function A(t,e){return N(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function S(t){return A(t," ")}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e){t.value=null==e?"":e}const H=new Map;let I,P=0;function O(t,e,n,o,r,a,c,i=0){const l=16.666/o;let s="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*a(t);s+=100*t+`%{${c(o,1-o)}}\n`}const d=s+`100% {${c(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${i}`,f=b(t),{stylesheet:h,rules:p}=H.get(f)||function(t,e){const n={stylesheet:m(e),rules:{}};return H.set(t,n),n}(f,t);p[u]||(p[u]=!0,h.insertRule(`@keyframes ${u} ${d}`,h.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${u} ${o}ms linear ${r}ms 1 both`,P+=1,u}function R(t){I=t}const L=[],U=[],M=[],j=[],F=Promise.resolve();let q=!1;function z(t){M.push(t)}const W=new Set;let G,J=0;function K(){const t=I;do{for(;J<L.length;){const t=L[J];J++,R(t),Q(t.$$)}for(R(null),L.length=0,J=0;U.length;)U.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];W.has(e)||(W.add(e),e())}M.length=0}while(L.length);for(;j.length;)j.pop()();q=!1,W.clear(),R(t)}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function V(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const X=new Set,Y={duration:0};function Z(n,o,c,i){let f=o(n,c),h=i?0:1,b=null,m=null,p=null;function _(){p&&function(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),P-=r,P||s((()=>{P||(H.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),H.clear())})))}(n,p)}function g(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:a=0,duration:c=300,easing:i=e,tick:v=t,css:y}=f||Y,E={start:l()+a,b:o};o||(E.group=void 0,(void 0).r+=1),b||m?m=E:(y&&(_(),p=O(n,h,o,c,a,i,y)),o&&v(0,1),b=g(E,c),z((()=>V(n,o,"start"))),function(t){let e;0===d.size&&s(u),new Promise((n=>{d.add(e={c:t,f:n})}))}((t=>{if(m&&t>m.start&&(b=g(m,c),m=null,V(n,b.b,"start"),y&&(_(),p=O(n,h,b.b,b.duration,0,i,f.css))),b)if(t>=b.end)v(h=b.b,1-h),V(n,b.b,"end"),m||(b.b?_():--b.group.r||r(b.group.c)),b=null;else if(t>=b.start){const e=t-b.start;h=b.a+b.d*i(e/b.duration),v(h,1-h)}return!(!b&&!m)})))}return{run(t){a(f)?(G||(G=Promise.resolve(),G.then((()=>{G=null}))),G).then((()=>{f=f(),v(t)})):v(t)},end(){_(),b=m=null}}}function tt(e,c,i,l,s,d,u,h=[-1]){const b=I;R(e);const m=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(b?b.$$.context:[])),callbacks:o(),dirty:h,skip_bound:!1,root:c.target||b.$$.root};u&&u(m.root);let p=!1;if(m.ctx=i?i(e,c.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(L.push(t),q||(q=!0,F.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!l&&l(m.ctx),c.target){if(c.hydrate){f=!0;const t=T(c.target);m.fragment&&m.fragment.l(t),t.forEach(v)}else m.fragment&&m.fragment.c();c.intro&&(_=e.$$.fragment)&&_.i&&(X.delete(_),_.i(undefined)),function(t,e,o,c){const{fragment:i,on_mount:l,on_destroy:s,after_update:d}=t.$$;i&&i.m(e,o),c||z((()=>{const e=l.map(n).filter(a);s?s.push(...e):r(e),t.$$.on_mount=[]})),d.forEach(z)}(e,c.target,c.anchor,c.customElement),f=!1,K()}var _;R(b)}function et(t,{delay:n=0,duration:o=400,easing:r=e}={}){const a=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*a}}function nt(t){!function(t,e,n){const o=b(t);if(!o.getElementById(e)){const t=y("style");t.id=e,t.textContent="table.svelte-bhkb04,td.svelte-bhkb04{border:1px solid black}td.svelte-bhkb04{width:2rem}.b0.svelte-bhkb04{background-color:#FBC02D}.parity.svelte-bhkb04{background-color:#FFEB3B}section.svelte-bhkb04{margin:2rem 0rem}",p(o,t)}}(t,"svelte-bhkb04")}function ot(t){let e,n,o,r,a=null!==t[4]&&rt(t);return{c(){e=y("p"),n=E(t[5]),o=$(),a&&a.c(),r=k()},l(c){e=D(c,"P",{});var i=T(e);n=A(i,t[5]),i.forEach(v),o=S(c),a&&a.l(c),r=k()},m(t,c){g(t,e,c),_(e,n),g(t,o,c),a&&a.m(t,c),g(t,r,c)},p(t,e){32&e&&C(n,t[5]),null!==t[4]?a?a.p(t,e):(a=rt(t),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},d(t){t&&v(e),t&&v(o),a&&a.d(t),t&&v(r)}}}function rt(t){let e,n,o,r=t[4].toString(2)+"";return{c(){e=y("p"),n=E("Decoded (binary): "),o=E(r)},l(t){e=D(t,"P",{});var a=T(e);n=A(a,"Decoded (binary): "),o=A(a,r),a.forEach(v)},m(t,r){g(t,e,r),_(e,n),_(e,o)},p(t,e){16&e&&r!==(r=t[4].toString(2)+"")&&C(o,r)},d(t){t&&v(e)}}}function at(t){let e,n,o,a,c,i,l,s,d,u,f,h,b,m,p,k,N,H,I,P,O,R,L,U,M,j,F,q,W,G,J,K,Q,V,X,Y,tt,nt,rt,at,ct,it,lt,st,dt,ut,ft,ht,bt,mt,pt,_t,gt,vt,yt,Et,$t,kt,xt,wt,Tt,Nt,Dt,At,St,Ct,Bt,Ht,It,Pt,Ot,Rt,Lt,Ut,Mt=t[6](t[2],0)+"",jt=t[6](t[2],1)+"",Ft=t[6](t[2],2)+"",qt=t[6](t[2],3)+"",zt=t[6](t[2],4)+"",Wt=t[6](t[2],5)+"",Gt=t[6](t[2],6)+"",Jt=t[6](t[2],7)+"",Kt=t[2].toString(2)+"",Qt=""!==t[5]&&ot(t);return{c(){e=y("main"),n=y("h1"),o=E("[8,4] Hamming code"),a=$(),c=y("p"),i=y("a"),l=E("[7,4] Hamming code with an additional parity bit"),s=$(),d=y("p"),u=E("[8,4] Hamming code encodes a 4-bit data onto a 8 bit code. Upon decoding, any one-bit error can be corrected and two-bit error can be detected."),f=$(),h=y("section"),b=y("h2"),m=E("Encode"),p=$(),k=y("label"),N=E("Input (4 bit binary):\n      "),H=y("input"),I=$(),P=y("p"),O=E("(input in decimal: "),R=E(t[1]),L=E(")"),U=$(),M=y("button"),j=E("Encode"),F=$(),q=y("table"),W=y("tr"),G=y("td"),J=E(Mt),K=$(),Q=y("td"),V=E(jt),X=$(),Y=y("td"),tt=E(Ft),nt=$(),rt=y("td"),at=E(qt),ct=$(),it=y("tr"),lt=y("td"),st=E(zt),dt=$(),ut=y("td"),ft=E(Wt),ht=$(),bt=y("td"),mt=E(Gt),pt=$(),_t=y("td"),gt=E(Jt),vt=$(),yt=y("p"),Et=E("Encoded output (8 bit binary): "),$t=E(Kt),kt=$(),xt=y("section"),wt=y("h2"),Tt=E("Decode"),Nt=$(),Dt=y("label"),At=E("Code (8 bit binary)\n      "),St=y("input"),Ct=$(),Bt=y("button"),Ht=E("Decode"),Pt=$(),Qt&&Qt.c(),this.h()},l(r){e=D(r,"MAIN",{});var _=T(e);n=D(_,"H1",{});var g=T(n);o=A(g,"[8,4] Hamming code"),g.forEach(v),a=S(_),c=D(_,"P",{});var y=T(c);i=D(y,"A",{href:!0});var E=T(i);l=A(E,"[7,4] Hamming code with an additional parity bit"),E.forEach(v),y.forEach(v),s=S(_),d=D(_,"P",{});var $=T(d);u=A($,"[8,4] Hamming code encodes a 4-bit data onto a 8 bit code. Upon decoding, any one-bit error can be corrected and two-bit error can be detected."),$.forEach(v),f=S(_),h=D(_,"SECTION",{class:!0});var x=T(h);b=D(x,"H2",{});var w=T(b);m=A(w,"Encode"),w.forEach(v),p=S(x),k=D(x,"LABEL",{});var C=T(k);N=A(C,"Input (4 bit binary):\n      "),H=D(C,"INPUT",{}),C.forEach(v),I=S(x),P=D(x,"P",{});var B=T(P);O=A(B,"(input in decimal: "),R=A(B,t[1]),L=A(B,")"),B.forEach(v),U=S(x),M=D(x,"BUTTON",{});var z=T(M);j=A(z,"Encode"),z.forEach(v),F=S(x),q=D(x,"TABLE",{class:!0});var Z=T(q);W=D(Z,"TR",{});var et=T(W);G=D(et,"TD",{class:!0});var ot=T(G);J=A(ot,Mt),ot.forEach(v),K=S(et),Q=D(et,"TD",{class:!0});var It=T(Q);V=A(It,jt),It.forEach(v),X=S(et),Y=D(et,"TD",{class:!0});var Ot=T(Y);tt=A(Ot,Ft),Ot.forEach(v),nt=S(et),rt=D(et,"TD",{class:!0});var Rt=T(rt);at=A(Rt,qt),Rt.forEach(v),et.forEach(v),ct=S(Z),it=D(Z,"TR",{});var Lt=T(it);lt=D(Lt,"TD",{class:!0});var Ut=T(lt);st=A(Ut,zt),Ut.forEach(v),dt=S(Lt),ut=D(Lt,"TD",{class:!0});var Vt=T(ut);ft=A(Vt,Wt),Vt.forEach(v),ht=S(Lt),bt=D(Lt,"TD",{class:!0});var Xt=T(bt);mt=A(Xt,Gt),Xt.forEach(v),pt=S(Lt),_t=D(Lt,"TD",{class:!0});var Yt=T(_t);gt=A(Yt,Jt),Yt.forEach(v),Lt.forEach(v),Z.forEach(v),vt=S(x),yt=D(x,"P",{});var Zt=T(yt);Et=A(Zt,"Encoded output (8 bit binary): "),$t=A(Zt,Kt),Zt.forEach(v),x.forEach(v),kt=S(_),xt=D(_,"SECTION",{class:!0});var te=T(xt);wt=D(te,"H2",{});var ee=T(wt);Tt=A(ee,"Decode"),ee.forEach(v),Nt=S(te),Dt=D(te,"LABEL",{});var ne=T(Dt);At=A(ne,"Code (8 bit binary)\n      "),St=D(ne,"INPUT",{}),ne.forEach(v),Ct=S(te),Bt=D(te,"BUTTON",{});var oe=T(Bt);Ht=A(oe,"Decode"),oe.forEach(v),Pt=S(te),Qt&&Qt.l(te),te.forEach(v),_.forEach(v),this.h()},h(){w(i,"href","https://en.wikipedia.org/wiki/Hamming_code#[7,4]_Hamming_code_with_an_additional_parity_bit"),w(G,"class","b0 svelte-bhkb04"),w(Q,"class","parity svelte-bhkb04"),w(Y,"class","parity svelte-bhkb04"),w(rt,"class","svelte-bhkb04"),w(lt,"class","parity svelte-bhkb04"),w(ut,"class","svelte-bhkb04"),w(bt,"class","svelte-bhkb04"),w(_t,"class","svelte-bhkb04"),w(q,"class","svelte-bhkb04"),w(h,"class","svelte-bhkb04"),Bt.disabled=It=""==t[3],w(xt,"class","svelte-bhkb04")},m(r,v){g(r,e,v),_(e,n),_(n,o),_(e,a),_(e,c),_(c,i),_(i,l),_(e,s),_(e,d),_(d,u),_(e,f),_(e,h),_(h,b),_(b,m),_(h,p),_(h,k),_(k,N),_(k,H),B(H,t[0]),_(h,I),_(h,P),_(P,O),_(P,R),_(P,L),_(h,U),_(h,M),_(M,j),_(h,F),_(h,q),_(q,W),_(W,G),_(G,J),_(W,K),_(W,Q),_(Q,V),_(W,X),_(W,Y),_(Y,tt),_(W,nt),_(W,rt),_(rt,at),_(q,ct),_(q,it),_(it,lt),_(lt,st),_(it,dt),_(it,ut),_(ut,ft),_(it,ht),_(it,bt),_(bt,mt),_(it,pt),_(it,_t),_(_t,gt),_(h,vt),_(h,yt),_(yt,Et),_(yt,$t),_(e,kt),_(e,xt),_(xt,wt),_(wt,Tt),_(xt,Nt),_(xt,Dt),_(Dt,At),_(Dt,St),B(St,t[3]),_(xt,Ct),_(xt,Bt),_(Bt,Ht),_(xt,Pt),Qt&&Qt.m(xt,null),Rt=!0,Lt||(Ut=[x(H,"input",t[9]),x(M,"click",t[7]),x(St,"input",t[10]),x(Bt,"click",t[8])],Lt=!0)},p(t,[e]){1&e&&H.value!==t[0]&&B(H,t[0]),(!Rt||2&e)&&C(R,t[1]),(!Rt||4&e)&&Mt!==(Mt=t[6](t[2],0)+"")&&C(J,Mt),(!Rt||4&e)&&jt!==(jt=t[6](t[2],1)+"")&&C(V,jt),(!Rt||4&e)&&Ft!==(Ft=t[6](t[2],2)+"")&&C(tt,Ft),(!Rt||4&e)&&qt!==(qt=t[6](t[2],3)+"")&&C(at,qt),(!Rt||4&e)&&zt!==(zt=t[6](t[2],4)+"")&&C(st,zt),(!Rt||4&e)&&Wt!==(Wt=t[6](t[2],5)+"")&&C(ft,Wt),(!Rt||4&e)&&Gt!==(Gt=t[6](t[2],6)+"")&&C(mt,Gt),(!Rt||4&e)&&Jt!==(Jt=t[6](t[2],7)+"")&&C(gt,Jt),(!Rt||4&e)&&Kt!==(Kt=t[2].toString(2)+"")&&C($t,Kt),8&e&&St.value!==t[3]&&B(St,t[3]),(!Rt||8&e&&It!==(It=""==t[3]))&&(Bt.disabled=It),""!==t[5]?Qt?Qt.p(t,e):(Qt=ot(t),Qt.c(),Qt.m(xt,null)):Qt&&(Qt.d(1),Qt=null)},i(t){Rt||(z((()=>{Ot||(Ot=Z(e,et,{},!0)),Ot.run(1)})),Rt=!0)},o(t){Ot||(Ot=Z(e,et,{},!1)),Ot.run(0),Rt=!1},d(t){t&&v(e),Qt&&Qt.d(),t&&Ot&&Ot.end(),Lt=!1,r(Ut)}}}function ct(t,e,n){let o="1100";const r=(t,e)=>t>>e&1,a=t=>{let e=15&(t^t>>4);return e=3&(e^e>>2),e=1&(e^e>>1),e};let c=0,i=NaN,l="",s=0,d=null,u="";const f=t=>r(t,3)+(r(t,5)<<1)+(r(t,6)<<2)+(r(t,7)<<3);return t.$$.update=()=>{1&t.$$.dirty&&n(1,c=parseInt(o,2))},[o,c,i,l,d,u,r,()=>{n(2,i=(t=>{let e=a(11&t)<<1;return e+=a(13&t)<<2,e+=a(14&t)<<4,e+=(1&t)<<3,e+=(2&t)<<4,e+=(4&t)<<4,e+=(8&t)<<4,e+=a(e),e})(c))},()=>{s=parseInt(l,2);const t=a(s),e=(a(170&s)<<0)+(a(204&s)<<1)+(a(240&s)<<2);n(5,u=""),n(4,d=null),0===t?0===e?(n(4,d=f(s)),n(5,u="No error detected.")):n(5,u="Possible two bit errors."):0===e?(n(4,d=f(s)),n(5,u="Error on bit 0; corrected.")):(n(4,d=f(s^1<<e)),n(5,u=`Error on bit ${e}; corrected.`))},function(){o=this.value,n(0,o)},function(){l=this.value,n(3,l)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(1),n.on_destroy=n.fragment=null,n.ctx=[])}(this),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),tt(this,t,ct,at,c,{},nt)}}({target:document.querySelector("#__snel"),props:{}}),{}})();