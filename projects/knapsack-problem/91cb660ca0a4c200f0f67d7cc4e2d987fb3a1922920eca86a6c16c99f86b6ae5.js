export default(async()=>{function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,a=!1;function c(e,t,n,l){for(;e<t;){const o=e+(t-e>>1);n(o)<=l?e=o+1:t=o}return e}function u(e,t,n){const l=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}(e);if(!l.getElementById(t)){const e=d("style");e.id=t,e.textContent=n,function(e,t){!function(e,t){e.appendChild(t)}(e.head||e,t)}(l,e)}}function s(e,t){if(a){for(function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const l=t[n];void 0!==l.claim_order&&e.push(l)}t=e}const n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const r=t[e].claim_order,i=(o>0&&t[n[o]].claim_order<=r?o+1:c(1,o,(e=>t[n[e]].claim_order),r))-1;l[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const r=[],i=[];let a=t.length-1;for(let e=n[o]+1;0!=e;e=l[e-1]){for(r.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);r.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<r.length&&i[t].claim_order>=r[n].claim_order;)n++;const l=n<r.length?r[n]:null;e.insertBefore(i[t],l)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function f(e,t,n){a&&!n?s(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function v(){return g(" ")}function p(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e){return""===e?null:+e}function E(e){return Array.from(e.childNodes)}function b(e,t,n,l,o=!1){!function(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}(e);const r=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const r=e[l];if(t(r)){const t=n(r);return void 0===t?e.splice(l,1):e[l]=t,o||(e.claim_info.last_index=l),r}}for(let l=e.claim_info.last_index-1;l>=0;l--){const r=e[l];if(t(r)){const t=n(r);return void 0===t?e.splice(l,1):e[l]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=l,r}}return l()})();return r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,r}function w(e,t,n){return function(e,t,n,l){return b(e,(e=>e.nodeName===t),(e=>{const t=[];for(let l=0;l<e.attributes.length;l++){const o=e.attributes[l];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>l(t)))}(e,t,n,d)}function k(e,t){return b(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>g(t)),!0)}function y(e){return k(e," ")}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function N(e,t){e.value=null==t?"":t}function T(e,t,n){e.classList[n?"add":"remove"](t)}function I(e){i=e}const j=[],D=[],A=[],B=[],L=Promise.resolve();let S=!1;function P(e){A.push(e)}const U=new Set;let O=0;function V(){const e=i;do{for(;O<j.length;){const e=j[O];O++,I(e),C(e.$$)}for(I(null),j.length=0,O=0;D.length;)D.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];U.has(t)||(U.add(t),t())}A.length=0}while(j.length);for(;B.length;)B.pop()();S=!1,U.clear(),I(e)}function C(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const H=new Set;let z;function K(){z={r:0,c:[],p:z}}function M(){z.r||l(z.c),z=z.p}function R(e,t){e&&e.i&&(H.delete(e),e.i(t))}function W(e,t,n,l){if(e&&e.o){if(H.has(e))return;H.add(e),z.c.push((()=>{H.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function q(e){e&&e.c()}function G(e,t){e&&e.l(t)}function F(e,n,r,i){const{fragment:a,on_mount:c,on_destroy:u,after_update:s}=e.$$;a&&a.m(n,r),i||P((()=>{const n=c.map(t).filter(o);u?u.push(...n):l(n),e.$$.on_mount=[]})),s.forEach(P)}function J(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,o,r,c,u,s,f,m=[-1]){const d=i;I(t);const g=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:o.target||d.$$.root};f&&f(g.root);let v=!1;if(g.ctx=r?r(t,o.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return g.ctx&&u(g.ctx[e],g.ctx[e]=o)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](o),v&&function(e,t){-1===e.$$.dirty[0]&&(j.push(e),S||(S=!0,L.then(V)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],g.update(),v=!0,l(g.before_update),g.fragment=!!c&&c(g.ctx),o.target){if(o.hydrate){a=!0;const e=E(o.target);g.fragment&&g.fragment.l(e),e.forEach(h)}else g.fragment&&g.fragment.c();o.intro&&R(t.$$.fragment),F(t,o.target,o.anchor,o.customElement),a=!1,V()}I(d)}class X{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Y(e){let t,n,o,r,i,a,c,u,m,b,x,T,I,j,D,A;return{c(){t=d("label"),n=g("name "),o=d("input"),r=v(),i=d("label"),a=g("weight "),c=d("input"),u=v(),m=d("label"),b=g("value "),x=d("input"),T=v(),I=d("button"),j=g("Done"),this.h()},l(e){t=w(e,"LABEL",{});var l=E(t);n=k(l,"name "),o=w(l,"INPUT",{}),l.forEach(h),r=y(e),i=w(e,"LABEL",{});var s=E(i);a=k(s,"weight "),c=w(s,"INPUT",{type:!0}),s.forEach(h),u=y(e),m=w(e,"LABEL",{});var f=E(m);b=k(f,"value "),x=w(f,"INPUT",{type:!0}),f.forEach(h),T=y(e),I=w(e,"BUTTON",{});var d=E(I);j=k(d,"Done"),d.forEach(h),this.h()},h(){$(c,"type","number"),$(x,"type","number")},m(l,h){f(l,t,h),s(t,n),s(t,o),N(o,e[0].name),f(l,r,h),f(l,i,h),s(i,a),s(i,c),N(c,e[0].weight),f(l,u,h),f(l,m,h),s(m,b),s(m,x),N(x,e[0].value),f(l,T,h),f(l,I,h),s(I,j),D||(A=[p(o,"input",e[6]),p(c,"input",e[7]),p(x,"input",e[8]),p(I,"click",e[4])],D=!0)},p(e,t){1&t&&o.value!==e[0].name&&N(o,e[0].name),1&t&&_(c.value)!==e[0].weight&&N(c,e[0].weight),1&t&&_(x.value)!==e[0].value&&N(x,e[0].value)},d(e){e&&h(t),e&&h(r),e&&h(i),e&&h(u),e&&h(m),e&&h(T),e&&h(I),D=!1,l(A)}}}function Z(e){let t,n,o,r,i,a,c,u,m,_,b,N,T,I,j,D,A,B=e[0].name+"",L=e[0].weight+"",S=e[0].value+"";return{c(){t=d("label"),n=d("input"),r=g("\n  name: "),i=g(B),a=g(", weight: "),c=g(L),u=g(", value: "),m=g(S),_=v(),b=d("button"),N=g("Edit"),T=v(),I=d("button"),j=g("Delete"),this.h()},l(e){t=w(e,"LABEL",{});var l=E(t);n=w(l,"INPUT",{type:!0}),r=k(l,"\n  name: "),i=k(l,B),a=k(l,", weight: "),c=k(l,L),u=k(l,", value: "),m=k(l,S),l.forEach(h),_=y(e),b=w(e,"BUTTON",{});var o=E(b);N=k(o,"Edit"),o.forEach(h),T=y(e),I=w(e,"BUTTON",{});var s=E(I);j=k(s,"Delete"),s.forEach(h),this.h()},h(){$(n,"type","checkbox"),n.value=o=e[0].checked},m(l,o){f(l,t,o),s(t,n),s(t,r),s(t,i),s(t,a),s(t,c),s(t,u),s(t,m),f(l,_,o),f(l,b,o),s(b,N),f(l,T,o),f(l,I,o),s(I,j),D||(A=[p(n,"click",e[5]),p(b,"click",e[2]),p(I,"click",e[3])],D=!0)},p(e,t){1&t&&o!==(o=e[0].checked)&&(n.value=o),1&t&&B!==(B=e[0].name+"")&&x(i,B),1&t&&L!==(L=e[0].weight+"")&&x(c,L),1&t&&S!==(S=e[0].value+"")&&x(m,S)},d(e){e&&h(t),e&&h(_),e&&h(b),e&&h(T),e&&h(I),D=!1,l(A)}}}function ee(t){let n;function l(e,t){return e[1]?Y:Z}let o=l(t),r=o(t);return{c(){n=d("div"),r.c()},l(e){n=w(e,"DIV",{});var t=E(n);r.l(t),t.forEach(h)},m(e,t){f(e,n,t),r.m(n,null)},p(e,[t]){o===(o=l(e))&&r?r.p(e,t):(r.d(1),r=o(e),r&&(r.c(),r.m(n,null)))},i:e,o:e,d(e){e&&h(n),r.d()}}}function te(e,t,n){let{item:l}=t;const o=function(){const e=function(){if(!i)throw new Error("Function called outside component initialization");return i}();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const o=function(e,t,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,!1,t),l}(t,n);l.slice().forEach((t=>{t.call(e,o)}))}}}();let r=!1;return e.$$set=e=>{"item"in e&&n(0,l=e.item)},[l,r,()=>{n(1,r=!0)},()=>{o("delete")},()=>{o("update",l),n(1,r=!1)},()=>{n(0,l={...l,checked:!l.checked}),o("update",l)},function(){l.name=this.value,n(0,l)},function(){l.weight=_(this.value),n(0,l)},function(){l.value=_(this.value),n(0,l)}]}class ne extends X{constructor(e){super(),Q(this,e,te,ee,r,{item:0})}}function le(t){let n,l,o,r,i,a,c,u,m=t[1].join(",")+"";return{c(){n=d("div"),l=d("div"),o=g("value: "),r=g(t[0]),i=v(),a=d("div"),c=g("items: "),u=g(m)},l(e){n=w(e,"DIV",{});var s=E(n);l=w(s,"DIV",{});var f=E(l);o=k(f,"value: "),r=k(f,t[0]),f.forEach(h),i=y(s),a=w(s,"DIV",{});var d=E(a);c=k(d,"items: "),u=k(d,m),d.forEach(h),s.forEach(h)},m(e,t){f(e,n,t),s(n,l),s(l,o),s(l,r),s(n,i),s(n,a),s(a,c),s(a,u)},p(e,[t]){1&t&&x(r,e[0]),2&t&&m!==(m=e[1].join(",")+"")&&x(u,m)},i:e,o:e,d(e){e&&h(n)}}}function oe(e,t,n){let{value:l}=t,{itemNames:o}=t;return e.$$set=e=>{"value"in e&&n(0,l=e.value),"itemNames"in e&&n(1,o=e.itemNames)},[l,o]}class re extends X{constructor(e){super(),Q(this,e,oe,le,r,{value:0,itemNames:1})}}function ie(e){u(e,"svelte-jmmkei","table.svelte-jmmkei,td.svelte-jmmkei{border:1px solid black}.solution.svelte-jmmkei{font-weight:bold}")}function ae(e,t,n){const l=e.slice();return l[6]=t[n],l[8]=n,l}function ce(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function ue(e,t,n){const l=e.slice();return l[9]=t[n],l[8]=n,l}function se(e){let t,n,l,o,r,i,a,c,u,p,_,b,N,T=e[3].join(",")+"",I={length:e[0]},j=[];for(let t=0;t<I.length;t+=1)j[t]=fe(ue(e,I,t));let D=e[1],A=[];for(let t=0;t<D.length;t+=1)A[t]=me(ae(e,D,t));const B=e=>W(A[e],1,1,(()=>{A[e]=null}));return{c(){t=d("h3"),n=g("DP table"),l=v(),o=d("table"),r=d("thead"),i=d("td"),a=v();for(let e=0;e<j.length;e+=1)j[e].c();c=v();for(let e=0;e<A.length;e+=1)A[e].c();u=v(),p=d("p"),_=g("Optimal packing: "),b=g(T),this.h()},l(e){t=w(e,"H3",{});var s=E(t);n=k(s,"DP table"),s.forEach(h),l=y(e),o=w(e,"TABLE",{class:!0});var f=E(o);r=w(f,"THEAD",{});var m=E(r);i=w(m,"TD",{class:!0}),E(i).forEach(h),a=y(m);for(let e=0;e<j.length;e+=1)j[e].l(m);m.forEach(h),c=y(f);for(let e=0;e<A.length;e+=1)A[e].l(f);f.forEach(h),u=y(e),p=w(e,"P",{class:!0});var d=E(p);_=k(d,"Optimal packing: "),b=k(d,T),d.forEach(h),this.h()},h(){$(i,"class","svelte-jmmkei"),$(o,"class","svelte-jmmkei"),$(p,"class","solution svelte-jmmkei")},m(e,h){f(e,t,h),s(t,n),f(e,l,h),f(e,o,h),s(o,r),s(r,i),s(r,a);for(let e=0;e<j.length;e+=1)j[e].m(r,null);s(o,c);for(let e=0;e<A.length;e+=1)A[e].m(o,null);f(e,u,h),f(e,p,h),s(p,_),s(p,b),N=!0},p(e,t){if(1&t){let n;for(I={length:e[0]},n=0;n<I.length;n+=1){const l=ue(e,I,n);j[n]?j[n].p(l,t):(j[n]=fe(l),j[n].c(),j[n].m(r,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=I.length}if(7&t){let n;for(D=e[1],n=0;n<D.length;n+=1){const l=ae(e,D,n);A[n]?(A[n].p(l,t),R(A[n],1)):(A[n]=me(l),A[n].c(),R(A[n],1),A[n].m(o,null))}for(K(),n=D.length;n<A.length;n+=1)B(n);M()}(!N||8&t)&&T!==(T=e[3].join(",")+"")&&x(b,T)},i(e){if(!N){for(let e=0;e<D.length;e+=1)R(A[e]);N=!0}},o(e){A=A.filter(Boolean);for(let e=0;e<A.length;e+=1)W(A[e]);N=!1},d(e){e&&h(t),e&&h(l),e&&h(o),m(j,e),m(A,e),e&&h(u),e&&h(p)}}}function fe(t){let n,l,o=t[8]+1+"";return{c(){n=d("td"),l=g(o),this.h()},l(e){n=w(e,"TD",{class:!0});var t=E(n);l=k(t,o),t.forEach(h),this.h()},h(){$(n,"class","svelte-jmmkei")},m(e,t){f(e,n,t),s(n,l)},p:e,d(e){e&&h(n)}}}function he(e){let t,n,l;return n=new re({props:{value:e[2][e[8]][e[11]].value,itemNames:e[2][e[8]][e[11]].itemNames}}),{c(){t=d("td"),q(n.$$.fragment),this.h()},l(e){t=w(e,"TD",{class:!0});var l=E(t);G(n.$$.fragment,l),l.forEach(h),this.h()},h(){$(t,"class","svelte-jmmkei")},m(e,o){f(e,t,o),F(n,t,null),l=!0},p(e,t){const l={};4&t&&(l.value=e[2][e[8]][e[11]].value),4&t&&(l.itemNames=e[2][e[8]][e[11]].itemNames),n.$set(l)},i(e){l||(R(n.$$.fragment,e),l=!0)},o(e){W(n.$$.fragment,e),l=!1},d(e){e&&h(t),J(n)}}}function me(e){let t,n,l,o,r,i,a,c,u,p,_,b=e[6].name+"",N=e[6].weight+"",T=e[6].value+"",I={length:e[0]},j=[];for(let t=0;t<I.length;t+=1)j[t]=he(ce(e,I,t));const D=e=>W(j[e],1,1,(()=>{j[e]=null}));return{c(){t=d("tr"),n=d("td"),l=g(b),o=g(" (weight: "),r=g(N),i=g(", value: "),a=g(T),c=g(")"),u=v();for(let e=0;e<j.length;e+=1)j[e].c();p=v(),this.h()},l(e){t=w(e,"TR",{});var s=E(t);n=w(s,"TD",{class:!0});var f=E(n);l=k(f,b),o=k(f," (weight: "),r=k(f,N),i=k(f,", value: "),a=k(f,T),c=k(f,")"),f.forEach(h),u=y(s);for(let e=0;e<j.length;e+=1)j[e].l(s);p=y(s),s.forEach(h),this.h()},h(){$(n,"class","svelte-jmmkei")},m(e,h){f(e,t,h),s(t,n),s(n,l),s(n,o),s(n,r),s(n,i),s(n,a),s(n,c),s(t,u);for(let e=0;e<j.length;e+=1)j[e].m(t,null);s(t,p),_=!0},p(e,n){if((!_||2&n)&&b!==(b=e[6].name+"")&&x(l,b),(!_||2&n)&&N!==(N=e[6].weight+"")&&x(r,N),(!_||2&n)&&T!==(T=e[6].value+"")&&x(a,T),5&n){let l;for(I={length:e[0]},l=0;l<I.length;l+=1){const o=ce(e,I,l);j[l]?(j[l].p(o,n),R(j[l],1)):(j[l]=he(o),j[l].c(),R(j[l],1),j[l].m(t,p))}for(K(),l=I.length;l<j.length;l+=1)D(l);M()}},i(e){if(!_){for(let e=0;e<I.length;e+=1)R(j[e]);_=!0}},o(e){j=j.filter(Boolean);for(let e=0;e<j.length;e+=1)W(j[e]);_=!1},d(e){e&&h(t),m(j,e)}}}function de(e){let t,n,l=null!==e[2]&&se(e);return{c(){t=d("div"),l&&l.c()},l(e){t=w(e,"DIV",{});var n=E(t);l&&l.l(n),n.forEach(h)},m(e,o){f(e,t,o),l&&l.m(t,null),n=!0},p(e,[n]){null!==e[2]?l?(l.p(e,n),4&n&&R(l,1)):(l=se(e),l.c(),R(l,1),l.m(t,null)):l&&(K(),W(l,1,1,(()=>{l=null})),M())},i(e){n||(R(l),n=!0)},o(e){W(l),n=!1},d(e){e&&h(t),l&&l.d()}}}function ge(e,t,n){let l,o,r=null,i=null;return[l,o,r,i,(e,t)=>{n(0,l=e),n(1,o=t),n(2,r=((e,t)=>{const n=[];for(let l=0;l<e;l++){const e=[];for(let n=0;n<t;n++)e.push({itemIndexes:[],itemNames:[],value:0});n.push(e)}return n})(o.length,l));const a=o[0];for(let e=0;e<l;e++){const t=e+1;a.weight<=t&&n(2,r[0][e]={itemIndexes:[0],itemNames:[o[0].name],value:a.value},r)}for(let e=1;e<o.length;e++){const t=o[e];for(let i=0;i<l;i++){const l=i+1,a=r[e-1][i].itemIndexes.reduce(((e,t)=>e+o[t].value),0);let c,u,s=0;const f=l-t.weight;if(0===f)s=t.value,c=[e],u=[t.name];else if(f>0){const n=r[e-1][f-1];s=t.value+n.value,c=[...n.itemIndexes,e],u=[...n.itemNames,t.name]}n(2,r[e][i]=a<s?{itemIndexes:c,itemNames:u,value:s}:r[e-1][i],r)}}n(3,i=r[o.length-1][l-1].itemNames)}]}class ve extends X{constructor(e){super(),Q(this,e,ge,de,r,{solve:4},ie)}get solve(){return this.$$.ctx[4]}}function pe(e){u(e,"svelte-1raijby","label.svelte-1raijby{margin:0px 10px}.warn.svelte-1raijby{font-weight:bold;color:red}")}function $e(e,t,n){const l=e.slice();return l[14]=t[n],l[16]=n,l}function _e(e){let t,n,l,o;return n=new ne({props:{item:e[14]}}),n.$on("delete",(function(...t){return e[11](e[16],...t)})),n.$on("update",(function(...t){return e[12](e[16],...t)})),{c(){t=d("li"),q(n.$$.fragment),l=v()},l(e){t=w(e,"LI",{});var o=E(t);G(n.$$.fragment,o),l=y(o),o.forEach(h)},m(e,r){f(e,t,r),F(n,t,null),s(t,l),o=!0},p(t,l){e=t;const o={};2&l&&(o.item=e[14]),n.$set(o)},i(e){o||(R(n.$$.fragment,e),o=!0)},o(e){W(n.$$.fragment,e),o=!1},d(e){e&&h(t),J(n)}}}function Ee(e){let t,n,o,r,i,a,c,u,b,I,j,D,A,B,L,S,P,U,O,V,C,H,z,Q,X,Y,Z,ee,te,ne,le,oe,re,ie,ae,ce,ue,se,fe,he,me,de,ge,pe,Ee=e[1],be=[];for(let t=0;t<Ee.length;t+=1)be[t]=_e($e(e,Ee,t));const we=e=>W(be[e],1,1,(()=>{be[e]=null}));return me=new ve({props:{}}),e[13](me),{c(){t=d("main"),n=d("h1"),o=g("The knapsack problem"),r=v(),i=d("p"),a=d("a"),c=g("Knapsack problem"),u=v(),b=d("p"),I=g("Given a set of items, find a subset of items that maximizes the total sum of values while staying within the weight constraint."),j=v(),D=d("div"),A=d("label"),B=g("Weight constraint (small integer) "),L=d("input"),S=v(),P=d("h2"),U=g("Items"),O=v(),V=d("ul");for(let e=0;e<be.length;e+=1)be[e].c();C=v(),H=d("button"),z=g("Add Item"),Q=v(),X=d("div"),Y=d("p"),Z=g("Selected weight: "),ee=g(e[2]),te=v(),ne=d("p"),le=g("Selected value: "),oe=g(e[3]),re=v(),ie=d("h2"),ae=g("Solve with dynamic programming"),ce=v(),ue=d("div"),se=d("button"),fe=g("Solve"),he=v(),q(me.$$.fragment),this.h()},l(l){t=w(l,"MAIN",{});var s=E(t);n=w(s,"H1",{});var f=E(n);o=k(f,"The knapsack problem"),f.forEach(h),r=y(s),i=w(s,"P",{});var m=E(i);a=w(m,"A",{href:!0});var d=E(a);c=k(d,"Knapsack problem"),d.forEach(h),m.forEach(h),u=y(s),b=w(s,"P",{});var g=E(b);I=k(g,"Given a set of items, find a subset of items that maximizes the total sum of values while staying within the weight constraint."),g.forEach(h),j=y(s),D=w(s,"DIV",{});var v=E(D);A=w(v,"LABEL",{class:!0});var p=E(A);B=k(p,"Weight constraint (small integer) "),L=w(p,"INPUT",{type:!0}),p.forEach(h),v.forEach(h),S=y(s),P=w(s,"H2",{});var $=E(P);U=k($,"Items"),$.forEach(h),O=y(s),V=w(s,"UL",{});var _=E(V);for(let e=0;e<be.length;e+=1)be[e].l(_);_.forEach(h),C=y(s),H=w(s,"BUTTON",{});var x=E(H);z=k(x,"Add Item"),x.forEach(h),Q=y(s),X=w(s,"DIV",{});var N=E(X);Y=w(N,"P",{class:!0});var T=E(Y);Z=k(T,"Selected weight: "),ee=k(T,e[2]),T.forEach(h),te=y(N),ne=w(N,"P",{});var K=E(ne);le=k(K,"Selected value: "),oe=k(K,e[3]),K.forEach(h),N.forEach(h),re=y(s),ie=w(s,"H2",{});var M=E(ie);ae=k(M,"Solve with dynamic programming"),M.forEach(h),ce=y(s),ue=w(s,"DIV",{});var R=E(ue);se=w(R,"BUTTON",{});var W=E(se);fe=k(W,"Solve"),W.forEach(h),he=y(R),G(me.$$.fragment,R),R.forEach(h),s.forEach(h),this.h()},h(){$(a,"href","https://en.wikipedia.org/wiki/Knapsack_problem"),$(L,"type","number"),$(A,"class","svelte-1raijby"),$(Y,"class","svelte-1raijby"),T(Y,"warn",e[4])},m(l,h){f(l,t,h),s(t,n),s(n,o),s(t,r),s(t,i),s(i,a),s(a,c),s(t,u),s(t,b),s(b,I),s(t,j),s(t,D),s(D,A),s(A,B),s(A,L),N(L,e[0]),s(t,S),s(t,P),s(P,U),s(t,O),s(t,V);for(let e=0;e<be.length;e+=1)be[e].m(V,null);s(t,C),s(t,H),s(H,z),s(t,Q),s(t,X),s(X,Y),s(Y,Z),s(Y,ee),s(X,te),s(X,ne),s(ne,le),s(ne,oe),s(t,re),s(t,ie),s(ie,ae),s(t,ce),s(t,ue),s(ue,se),s(se,fe),s(ue,he),F(me,ue,null),de=!0,ge||(pe=[p(L,"input",e[10]),p(H,"click",e[8]),p(se,"click",e[9])],ge=!0)},p(e,[t]){if(1&t&&_(L.value)!==e[0]&&N(L,e[0]),194&t){let n;for(Ee=e[1],n=0;n<Ee.length;n+=1){const l=$e(e,Ee,n);be[n]?(be[n].p(l,t),R(be[n],1)):(be[n]=_e(l),be[n].c(),R(be[n],1),be[n].m(V,null))}for(K(),n=Ee.length;n<be.length;n+=1)we(n);M()}(!de||4&t)&&x(ee,e[2]),16&t&&T(Y,"warn",e[4]),(!de||8&t)&&x(oe,e[3]),me.$set({})},i(e){if(!de){for(let e=0;e<Ee.length;e+=1)R(be[e]);R(me.$$.fragment,e),de=!0}},o(e){be=be.filter(Boolean);for(let e=0;e<be.length;e+=1)W(be[e]);W(me.$$.fragment,e),de=!1},d(n){n&&h(t),m(be,n),e[13](null),J(me),ge=!1,l(pe)}}}function be(e,t,n){let l=4,o=[{name:"stereo",weight:4,value:3e3,checked:!1},{name:"laptop",weight:3,value:2e3,checked:!1},{name:"guitar",weight:1,value:1500,checked:!1}];const r=e=>{n(1,o=[...o.slice(0,e),...o.slice(e+1)])},i=(e,t)=>{const l={...o[e],...t};n(1,o=[...o.slice(0,e),l,...o.slice(e+1)])};let a,c,u=0,s=0;return e.$$.update=()=>{if(7&e.$$.dirty){let e=0,t=0;for(let n=0;n<o.length;n++){const l=o[n];l.checked&&(e+=l.weight,t+=l.value)}n(2,u=e),n(3,s=t),n(4,a=u>l)}},[l,o,u,s,a,c,r,i,()=>{n(1,o=[...o,{name:"",weight:0,value:0}])},()=>{c.solve(l,o)},function(){l=_(this.value),n(0,l)},(e,t)=>r(e),(e,t)=>i(e,t.detail),function(e){D[e?"unshift":"push"]((()=>{c=e,n(5,c)}))}]}return new class extends X{constructor(e){super(),Q(this,e,be,Ee,r,{},pe)}}({target:document.querySelector("#__snel"),props:{}}),{}})();