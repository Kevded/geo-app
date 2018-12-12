/*! Built with http://stenciljs.com */
(function(window,document,Context,namespace,hydratedCssClass,components,resourcesUrl){"use strict";
(function(s){s&&(resourcesUrl=s.getAttribute('data-resources-url'))})(document.querySelector("script[data-namespace='typeaheadcomponent']"));
function t(t,e){return"sc-"+t.t+(e&&e!==C?"-"+e:"")}function e(t,e){return t+(e?"-h":"-s")}function n(e,n,o,i){let r=o.t+i.mode,c=o[r];if((2===o.e||1===o.e&&!e.o.n)&&(i["s-sc"]=c?t(o,i.mode):t(o)),c||(c=o[r=o.t+C]),c){let t=n.i.head,o=e.r.get(t);if(o||e.r.set(t,o={}),!o[r]){let e;{e=c.content.cloneNode(!0),o[r]=!0;const i=t.querySelectorAll("[data-styles]");n.c(t,e,i.length&&i[i.length-1].nextSibling||t.firstChild)}}}}function o(t,e,n,o,c,f,s){if("class"!==n||f)if("style"===n){for(const t in o)c&&null!=c[t]||(/-/.test(t)?e.style.removeProperty(t):e.style[t]="");for(const t in c)o&&c[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,c[t]):e.style[t]=c[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!f&&(n in e||-1!==["object","function"].indexOf(typeof c)&&null!==c)){const o=t.f(e);o&&o.s&&o.s[n]?r(e,n,c):"ref"!==n&&(r(e,n,null==c?"":c),null!=c&&!1!==c||t.o.l(e,n))}else null!=c&&"key"!==n?function l(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(O,E(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(O,E(e),n):t.setAttribute(e,n))}(e,n,c):(f||t.o.u(e,n)&&(null==c||!1===c))&&t.o.l(e,n);else n=E(n)in e?E(n.substring(2)):E(n[2])+n.substring(3),c?c!==o&&t.o.a(e,n,c):t.o.p(e,n);else if(o!==c){const t=i(o),n=i(c),r=t.filter(t=>!n.includes(t)),f=i(e.className).filter(t=>!r.includes(t)),s=n.filter(e=>!t.includes(e)&&!f.includes(e));f.push(...s),e.className=f.join(" ")}}function i(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function r(t,e,n){try{t[e]=n}catch(t){}}function c(t,e,n,i,r){const c=11===n.d.nodeType&&n.d.host?n.d.host:n.d,f=e&&e.vattrs||x,s=n.vattrs||x;for(r in f)s&&null!=s[r]||null==f[r]||o(t,c,r,f[r],void 0,i,n.v);for(r in s)r in f&&s[r]===("value"===r||"checked"===r?c[r]:f[r])||o(t,c,r,f[r],s[r],i,n.v)}function f(t,e){function n(i,r,f,s,l,p,b,h,w){if(h=r.vchildren[f],u||(d=!0,"slot"===h.vtag&&(a&&e.m(s,a+"-s"),h.vchildren?h.y=!0:h.b=!0)),j(h.vtext))h.d=e.w(h.vtext);else if(h.b)h.d=e.w("");else{if(p=h.d=S||"svg"===h.vtag?e.g("http://www.w3.org/2000/svg",h.vtag):e.M(h.y?"slot-fb":h.vtag),t.k(p)&&t.C.delete(y),S="svg"===h.vtag||"foreignObject"!==h.vtag&&S,c(t,null,h,S),j(a)&&p["s-si"]!==a&&e.m(p,p["s-si"]=a),h.vchildren)for(l=0;l<h.vchildren.length;++l)(b=n(i,h,l,p))&&e.x(p,b);"svg"===h.vtag&&(S=!1)}return h.d["s-hn"]=m,(h.y||h.b)&&(h.d["s-sr"]=!0,h.d["s-cr"]=v,h.d["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===h.vtag&&i.d&&o(i.d)),h.d}function o(n,i,r,c){t.W=!0;const f=e.j(n);for(r=f.length-1;r>=0;r--)(c=f[r])["s-hn"]!==m&&c["s-ol"]&&(e.N(c),e.c(l(c),c,s(c)),e.N(c["s-ol"]),c["s-ol"]=null,d=!0),i&&o(c,i);t.W=!1}function i(t,o,i,r,c,f,l,u){const a=t["s-cr"];for((l=a&&e.O(a)||t).shadowRoot&&e.S(l)===m&&(l=l.shadowRoot);c<=f;++c)r[c]&&(u=j(r[c].vtext)?e.w(r[c].vtext):n(null,i,c,t))&&(r[c].d=u,e.c(l,u,s(o)))}function r(t,n,i,r){for(;n<=i;++n)j(t[n])&&(r=t[n].d,p=!0,r["s-ol"]?e.N(r["s-ol"]):o(r,!0),e.N(r))}function f(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function s(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.O(t["s-ol"]?t["s-ol"]:t)}let u,a,p,d,v,m,y;const b=[];return function h(w,g,M,$,k,C,x,W,E,N,O,A){if(y=w,m=e.S(y),v=y["s-cr"],u=$,a=y["s-sc"],d=p=!1,function u(a,p,d){const v=p.d=a.d,m=a.vchildren,y=p.vchildren;S=p.d&&j(e.A(p.d))&&void 0!==p.d.ownerSVGElement,S="svg"===p.vtag||"foreignObject"!==p.vtag&&S,j(p.vtext)?(d=v["s-cr"])?e.R(e.O(d),p.vtext):a.vtext!==p.vtext&&e.R(v,p.vtext):("slot"!==p.vtag&&c(t,a,p,S),j(m)&&j(y)?function b(t,c,a,p,d,v,m,y){let b=0,h=0,w=c.length-1,g=c[0],M=c[w],$=p.length-1,k=p[0],C=p[$];for(;b<=w&&h<=$;)if(null==g)g=c[++b];else if(null==M)M=c[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--$];else if(f(g,k))u(g,k),g=c[++b],k=p[++h];else if(f(M,C))u(M,C),M=c[--w],C=p[--$];else if(f(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.O(g.d)),u(g,C),e.c(t,g.d,e.T(M.d)),g=c[++b],C=p[--$];else if(f(M,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.O(M.d)),u(M,k),e.c(t,M.d,g.d),M=c[--w],k=p[++h];else{for(d=null,v=b;v<=w;++v)if(c[v]&&j(c[v].vkey)&&c[v].vkey===k.vkey){d=v;break}j(d)?((y=c[d]).vtag!==k.vtag?m=n(c&&c[h],a,d,t):(u(y,k),c[d]=void 0,m=y.d),k=p[++h]):(m=n(c&&c[h],a,h,t),k=p[++h]),m&&e.c(l(g.d),m,s(g.d))}b>w?i(t,null==p[$+1]?null:p[$+1].d,a,p,h,$):h>$&&r(c,b,w)}(v,m,p,y):j(y)?(j(a.vtext)&&e.R(v,""),i(v,null,p,y,0,y.length-1)):j(m)&&r(m,0,m.length-1)),S&&"svg"===p.vtag&&(S=!1)}(g,M),d){for(function t(n,o,i,r,c,f,s,l,u,a){for(c=0,f=(o=e.j(n)).length;c<f;c++){if((i=o[c])["s-sr"]&&(r=i["s-cr"]))for(l=e.j(e.O(r)),u=i["s-sn"],s=l.length-1;s>=0;s--)(r=l[s])["s-cn"]||r["s-nr"]||r["s-hn"]===i["s-hn"]||((3===(a=e.L(r))||8===a)&&""===u||1===a&&null===e.D(r,"slot")&&""===u||1===a&&e.D(r,"slot")===u)&&(b.some(t=>t.I===r)||(p=!0,r["s-sn"]=u,b.push({P:i,I:r})));1===e.L(i)&&t(i)}}(M.d),x=0;x<b.length;x++)(W=b[x]).I["s-ol"]||((E=e.w(""))["s-nr"]=W.I,e.c(e.O(W.I),W.I["s-ol"]=E,W.I));for(t.W=!0,x=0;x<b.length;x++){for(W=b[x],O=e.O(W.P),A=e.T(W.P),E=W.I["s-ol"];E=e.q(E);)if((N=E["s-nr"])&&N&&N["s-sn"]===W.I["s-sn"]&&O===e.O(N)&&(N=e.T(N))&&N&&!N["s-nr"]){A=N;break}(!A&&O!==e.O(W.I)||e.T(W.I)!==A)&&W.I!==A&&(e.N(W.I),e.c(O,W.I,A))}t.W=!1}return p&&function t(n,o,i,r,c,f,s,l){for(r=0,c=(i=e.j(n)).length;r<c;r++)if(o=i[r],1===e.L(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,f=0;f<c;f++)if(i[f]["s-hn"]!==o["s-hn"])if(l=e.L(i[f]),""!==s){if(1===l&&s===e.D(i[f],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.B(i[f]).trim()){o.hidden=!0;break}t(o)}}(M.d),b.length=0,M}}function s(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.d),t.vchildren&&t.vchildren.forEach(t=>{s(t,e)}))}function l(t,e,n,o,i){const r=t.L(e);let c,f,s,u;if(i&&1===r){(f=t.D(e,k))&&(s=f.split("."))[0]===o&&((u={}).vtag=t.S(u.d=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=u,n=u,i=""!==s[2]);for(let r=0;r<e.childNodes.length;r++)l(t,e.childNodes[r],n,o,i)}else 3===r&&(c=e.previousSibling)&&8===t.L(c)&&"s"===(s=t.B(c).split("."))[0]&&s[1]===o&&((u={vtext:t.B(e)}).d=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=u)}function u(t,e){let n,o,i=null,r=!1,c=!1;for(var f=arguments.length;f-- >2;)A.push(arguments[f]);for(;A.length>0;){let e=A.pop();if(e&&void 0!==e.pop)for(f=e.length;f--;)A.push(e[f]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&r?i[i.length-1].vtext+=e:null===i?i=[c?{vtext:e}:e]:i.push(c?{vtext:e}:e),r=c}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(f in e.class)e.class[f]&&A.push(f);e.class=A.join(" "),A.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],R):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,d:void 0,v:!1}}function a(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function p(t){const[e,n,,o,i,r]=t,c={color:{F:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];c[e[0]]={H:e[1],U:!!e[2],F:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,Q:e[4]}}return{t:e,Z:n,s:Object.assign({},c),e:i,z:r?r.map(d):void 0}}function d(t){return{G:t[0],J:t[1],K:!!t[2],V:!!t[3],X:!!t[4]}}function v(t,e){if(j(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function m(t,e,n){t.Y.add(e),t._.has(e)||(t._.set(e,!0),t.tt?t.queue.write(()=>y(t,e,n)):t.queue.tick(()=>y(t,e,n)))}async function y(t,n,o,i,r,c){if(t._.delete(n),!t.et.has(n)){if(!(r=t.nt.get(n))){if((c=t.ot.get(n))&&!c["s-rn"])return void(c["s-rc"]=c["s-rc"]||[]).push(()=>{y(t,n,o)});r=function f(t,e,n,o,i,r,c,s){try{i=new(r=t.f(e).it),function l(t,e,n,o,i,r){t.rt.set(o,n),t.ct.has(n)||t.ct.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,c])=>{(function f(t,e,n,o,i,r,c,s,l){if(e.type||e.state){const f=t.ct.get(n);e.state||(!e.attr||void 0!==f[i]&&""!==f[i]||(s=r&&r.ft)&&j(l=s[e.attr])&&(f[i]=v(e.type,l)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=v(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),e.watchCallbacks&&(f[T+i]=e.watchCallbacks.slice()),h(o,i,function u(e){return(e=t.ct.get(t.rt.get(this)))&&e[i]},function a(n,o){(o=t.rt.get(this))&&(e.state||e.mutable)&&b(t,o,i,n,c)})}})(t,c,n,o,e,i,r)})}(t,r,e,i,n,o)}catch(n){i={},t.st(n,7,e,!0)}return t.nt.set(e,i),i}(t,n,t.lt.get(n),o)}(function s(t,n,o,i,r){try{const r=n.it.host,c=n.it.encapsulation,f="shadow"===c&&t.o.n;let s,l=o;if(!o["s-rn"]){t.ut(t,t.o,n,o);const i=o["s-sc"];i&&(t.o.m(o,e(i,!0)),"scoped"===c&&t.o.m(o,e(i)))}if(i.render||i.hostData||r||s){t.at=!0;const e=i.render&&i.render();let n;t.at=!1;const r=t.pt.get(o)||{};r.d=l;const s=u(null,n,e);t.pt.set(o,t.render(o,r,s,f,c))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(t=>t()),o["s-rc"]=null)}catch(e){t.at=!1,t.st(e,8,o,!0)}})(t,t.f(n),n,r),n["s-init"]()}}function b(t,e,n,o,i,r){let c=t.ct.get(e);c||t.ct.set(e,c={}),o!==c[n]&&(c[n]=o,t.nt.get(e)&&!t.at&&e["s-rn"]&&m(t,e,i))}function h(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function w(t,e,n,o,i,r){if(t.Y.delete(e),(i=t.ot.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.ot.delete(e)),t.dt.length&&!t.Y.size)for(;r=t.dt.shift();)r()}function g(t,e,n,o,i){if(n.connectedCallback=function(){(function n(t,e,o,i){t.et.delete(o),t.vt.has(o)||(o["s-id"]||(o["s-id"]=t.mt()),t.yt=!0,t.Y.add(o),t.vt.set(o,!0),function r(t,e,n){for(n=e;n=t.o.A(n);)if(t.k(n)){t.C.has(e)||(t.ot.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.lt.set(o,function n(t,e,o,i,r){return o.mode||(o.mode=t.bt(o)),o["s-cr"]||t.D(o,$)||t.n&&1===e.e||(o["s-cr"]=t.w(""),o["s-cr"]["s-cn"]=!0,t.c(o,o["s-cr"],t.j(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),i={ht:o["s-id"],ft:{}},e.s&&Object.keys(e.s).forEach(n=>{(r=e.s[n].F)&&(i.ft[r]=t.D(o,r))}),i}(t.o,e,o)),t.wt(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n,o){!t.W&&function i(t,e){for(;e;){if(!t.O(e))return 9!==t.L(e);e=t.O(e)}}(t.o,n)&&(t.et.set(n,!0),w(t,n),s(t.pt.get(n),!0),t.o.p(n),t.gt.delete(n),[t.ot,t.Mt,t.lt].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,r,c,f){if(t.nt.get(n)&&!t.et.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.C.set(n,!0),t.$t.has(n)||(t.$t.set(n,!0),n["s-ld"]=void 0,t.o.m(n,o));try{s(t.pt.get(n)),(c=t.Mt.get(n))&&(c.forEach(t=>t(n)),t.Mt.delete(n))}catch(e){t.st(e,4,n)}w(t,n)}})(t,this,o)},n.forceUpdate=function(){m(t,this,i)},e.s){const o=Object.entries(e.s);(function r(t,e,n,o){e.forEach(([e,i])=>{const r=i.H;3&r?h(n,e,function n(){return(t.ct.get(this)||{})[e]},function n(r){b(t,this,e,v(i.Q,r),o)}):32===r&&function c(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}(n,e,N)})})(t,o,n,i)}}function M(t,e,n,o){return function(){const i=arguments;return function r(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.M(n),t.x(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const $="ssrv",k="ssrc",C="$",x={},W={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},j=t=>null!=t,E=t=>t.toLowerCase(),N=()=>{},O="http://www.w3.org/1999/xlink";let S=!1;const A=[],R={forEach:(t,e)=>{t.forEach((t,n,o)=>e(a(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(a(t),n,o)))},T="wc-";(function L(t,e,o,i,r,c,s){function a(t,e){const n=t.t;o.customElements.get(n)||(g(j,v[n]=t,e.prototype,c,d),o.customElements.define(t.t,e))}const d=o.performance,v={html:{}},y={},b=o[t]=o[t]||{},h=function w(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,kt:!1,L:t=>t.nodeType,M:t=>n.createElement(t),g:(t,e)=>n.createElementNS(t,e),w:t=>n.createTextNode(t),Ct:t=>n.createComment(t),c:(t,e,n)=>t.insertBefore(e,n),N:t=>t.remove(),x:(t,e)=>t.appendChild(e),m:(t,e)=>{t.classList.add(e)},j:t=>t.childNodes,O:t=>t.parentNode,T:t=>t.nextSibling,q:t=>t.previousSibling,S:t=>E(t.nodeName),B:t=>t.textContent,R:(t,e)=>t.textContent=e,D:(t,e)=>t.getAttribute(e),xt:(t,e,n)=>t.setAttribute(e,n),Wt:(t,e,n,o)=>t.setAttributeNS(e,n,o),l:(t,e)=>t.removeAttribute(e),u:(t,e)=>t.hasAttribute(e),bt:e=>e.getAttribute("mode")||(t.Context||{}).mode,jt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.A(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,a:(e,n,r,c,f,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.jt(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.jt(e,u[0]),n=u[1]),!p)return;let v=r;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===W[u[1]]&&r(t)})),l=i.kt?{capture:!!c,passive:!!f}:!!c,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},p:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Et:(t,n,o)=>{const i=new e.CustomEvent(n,o);return t&&t.dispatchEvent(i),i},A:(t,e)=>(e=i.O(t))&&11===i.L(e)?e.host:e};return i}(b,o,i);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=i,e.resourcesUrl=e.publicPath=r,b.h=u,b.Context=e;const k=o["s-defined"]=o["s-defined"]||{};let x=0;const j={o:h,Nt:a,Ot:e.emit,f:t=>v[h.S(t)],St:t=>e[t],isClient:!0,k:t=>!(!k[h.S(t)]&&!j.f(t)),mt:()=>t+x++,st:(t,e,n)=>void 0,At:t=>(function e(t,n,o){return{create:M(t,n,o,"create"),componentOnReady:M(t,n,o,"componentOnReady")}})(h,y,t),queue:e.queue=function N(t,e){function n(e){return n=>{e.push(n),v||(v=!0,t.raf(r))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](c())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=c())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function r(){d++,o(u);const e=f?c()+7*Math.ceil(d*(1/22)):Infinity;i(a,e),i(p,e),a.length>0&&(p.push(...a),a.length=0),(v=u.length+a.length+p.length>0)?t.raf(r):d=0}const c=()=>e.performance.now(),f=!1!==t.asyncQueue,s=Promise.resolve(),l=[],u=[],a=[],p=[];let d=0,v=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){l.push(t),1===l.length&&s.then(()=>o(l))},read:n(u),write:n(a)}}(b,o),wt:function O(t,e,n){if(t.it)m(j,e,d);else{const n="string"==typeof t.Z?t.Z:t.Z[e.mode];import(r+n+".entry.js").then(n=>{try{t.it=n[(t=>E(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,r,c){if(i){const n=e.t+(r||C);if(!e[n]){const o=t.M("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.x(t.i.head,o)}}}(h,t,t.e,t.it.style,t.it.styleMode),m(j,e,d)}catch(e){t.it=class{}}},t=>void 0)}},at:!1,tt:!1,W:!1,ut:n,ot:new WeakMap,r:new WeakMap,vt:new WeakMap,gt:new WeakMap,$t:new WeakMap,C:new WeakMap,rt:new WeakMap,lt:new WeakMap,nt:new WeakMap,et:new WeakMap,_:new WeakMap,Mt:new WeakMap,Rt:new WeakMap,pt:new WeakMap,ct:new WeakMap,Y:new Set,dt:[]};b.onReady=(()=>new Promise(t=>j.queue.write(()=>j.Y.size?j.dt.push(t):t()))),j.render=f(j,h);const S=h.i.documentElement;return S["s-ld"]=[],S["s-rn"]=!0,S["s-init"]=(()=>{j.C.set(S,b.loaded=j.tt=!0),h.Et(o,"appload",{detail:{namespace:t}})}),function A(t,e,n){const o=n.querySelectorAll(`[${$}]`),i=o.length;let r,c,f,s,u,a;if(i>0)for(t.C.set(n,!0),s=0;s<i;s++)for(r=o[s],c=e.D(r,$),(f={}).vtag=e.S(f.d=r),t.pt.set(r,f),u=0,a=r.childNodes.length;u<a;u++)l(e,r.childNodes[u],f,c,!0)}(j,h,S),s.map(p).forEach(t=>a(t,class extends HTMLElement{})),j.yt||S["s-init"](),function R(t,e,n,o,i,r){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.f(e);if(o)if(t.C.has(e))n(e);else{const o=t.Mt.get(e)||[];o.push(n),t.Mt.set(e,o)}return!!o}),i){for(r=i.length-1;r>=0;r--)e.componentOnReady(i[r][0],i[r][1])&&i.splice(r,1);for(r=0;r<o.length;r++)if(!n[o[r]].componentOnReady)return;for(r=0;r<i.length;r++)i[r][1](null);i.length=0}}(j,b,o,o["s-apps"],o["s-cr"]),b.initialized=!0,j})(namespace,Context,window,document,resourcesUrl,hydratedCssClass,components);
})(window,document,{},"typeaheadcomponent","hydrated",[["typeahead-component","ulotvwoa",1,[["byCodeCommuneResult",16],["byCodeDepartementResult",16],["byCodePostalResult",16],["byCodeResult",16],["byNomCommuneResult",16],["byNomDepartementResult",16],["byNomResult",16],["statusApi",16]]]]);