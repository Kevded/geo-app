const e="typeaheadcomponent";let t=0,n=!1;const s=window,l=document,o={t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)},r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),c=new WeakMap,i=e=>c.get(e),a=(e,t)=>c.set(t.l=e,t),$=(e,t)=>t in e,f=e=>console.error(e),u=new Map,d=new Map,p=[],m=[],h=[],y=(e,t)=>s=>{e.push(s),n||(n=!0,t&&4&o.t?g(b):o.raf(b))},w=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(l){f(l)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},b=()=>{t++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){f(t)}e.length=0})(p);const e=2==(6&o.t)?performance.now()+10*Math.ceil(t*(1/22)):1/0;w(m,e),w(h,e),m.length>0&&(h.push(...m),m.length=0),(n=p.length+m.length+h.length>0)?o.raf(b):t=0},g=e=>Promise.resolve().then(e),_=y(m,!0),j={},S=e=>null!=e,v=e=>"object"==(e=typeof e)||"function"===e,M=()=>s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_typeaheadcomponent("./p-1635c1a0.js").then(()=>{o.o=s.__stencil_cssshim}),x=async()=>{o.o=s.__stencil_cssshim;const t=new RegExp(`/${e}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(l.querySelectorAll("script")).find(n=>t.test(n.src)||n.getAttribute("data-stencil-namespace")===e),r=n["data-opts"];{const e=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,s.location.href));return L(e.href),window.customElements||await __sc_import_typeaheadcomponent("./p-d0882b30.js"),Object.assign(Object.assign({},r),{resourcesUrl:e.href})}},L=t=>{const n=(e=>`__sc_import_${e.replace(/\s|-/g,"_")}`)(e);try{s[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const e=new Map;s[n]=o=>{const r=new URL(o,t).href;let c=e.get(r);if(!c){const t=l.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${n}.m = m;`],{type:"application/javascript"})),c=new Promise(e=>{t.onload=()=>{e(s[n].m),t.remove()}}),e.set(r,c),l.head.appendChild(t)}return c}}},U=new WeakMap,O=e=>"sc-"+e,R=(e,t,...n)=>{let s=null,l=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)s=t[n],Array.isArray(s)?c(s):null!=s&&"boolean"!=typeof s&&((l="function"!=typeof e&&!v(s))&&(s=String(s)),l&&o?r[r.length-1].i+=s:r.push(l?{t:0,i:s}:s),o=l)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}return{t:0,$:e,u:r.length>0?r:null,p:void 0,h:t}},k={},C=(e,t,n,s,l,r)=>{if(n===s)return;let c=$(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList;E(n).forEach(e=>t.remove(e)),E(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if(c||"o"!==t[0]||"n"!==t[1]){const o=v(s);if((c||o&&null!==s)&&!l)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;null!=n&&e[t]==l||(e[t]=l)}}catch(a){}null==s||!1===s?e.removeAttribute(t):(!c||4&r||l)&&!o&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.substr(3):$(e,i)?i.substr(2):i[2]+t.substr(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)},E=e=>e?e.split(/\s+/).filter(e=>e):[],I=(e,t,n,s)=>{const l=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.h||j,r=t.h||j;for(s in o)s in r||C(l,s,o[s],void 0,n,t.t);for(s in r)C(l,s,o[s],r[s],n,t.t)},P=(e,t,n)=>{let s,o,r=t.u[n],c=0;if(S(r.i))r.p=l.createTextNode(r.i);else if(s=r.p=l.createElement(r.$),I(null,r,!1),r.u)for(c=0;c<r.u.length;++c)(o=P(e,r,c))&&s.appendChild(o);return r.p},T=(e,t,n,s,l,o)=>{let r,c=e;for(;l<=o;++l)s[l]&&(r=P(null,n,l))&&(s[l].p=r,c.insertBefore(r,t))},A=(e,t,n)=>{for(;t<=n;++t)S(e[t])&&e[t].p.remove()},W=(e,t)=>e.$===t.$,F=(e,t)=>{const n=t.p=e.p,s=e.u,l=t.u;S(t.i)?e.i!==t.i&&(n.textContent=t.i):(I(e,t,!1),S(s)&&S(l)?((e,t,n,s)=>{let l,o=0,r=0,c=t.length-1,i=t[0],a=t[c],$=s.length-1,f=s[0],u=s[$];for(;o<=c&&r<=$;)null==i?i=t[++o]:null==a?a=t[--c]:null==f?f=s[++r]:null==u?u=s[--$]:W(i,f)?(F(i,f),i=t[++o],f=s[++r]):W(a,u)?(F(a,u),a=t[--c],u=s[--$]):W(i,u)?(F(i,u),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],u=s[--$]):W(a,f)?(F(a,f),e.insertBefore(a.p,i.p),a=t[--c],f=s[++r]):(l=P(t&&t[r],n,r),f=s[++r],l&&i.p.parentNode.insertBefore(l,i.p));o>c?T(e,null==s[$+1]?null:s[$+1].p,n,s,r,$):r>$&&A(t,o,c)})(n,s,t,l):S(l)?(S(e.i)&&(n.textContent=""),T(n,null,t,l,0,l.length-1)):S(s)&&A(s,0,s.length-1))},q=(e,t,n,s)=>{t.t|=16;const l=t.l,o=()=>B(e,t,n,l,s);let r;return s&&(r=V(l,"componentWillLoad")),Y(r,()=>_(o))},B=(e,t,n,s,o)=>{t.t&=-17,e["s-lr"]=!1,o&&((e,t)=>{((e,t)=>{let n=O(t.g),s=d.get(n);if(e=11===e.nodeType?e:l,s)if("string"==typeof s){let t,o=U.get(e=e.head||e);o||U.set(e,o=new Set),o.has(n)||(e.host&&(t=e.firstElementChild)&&"STYLE"===t.tagName?t.innerHTML=s:((t=l.createElement("style")).setAttribute("data-styles",""),t.innerHTML=s,e.insertBefore(t,e.querySelector("link"))),o&&o.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])})(e.getRootNode(),t)})(e,n),t.t|=4;try{((e,t,n,s)=>{const l=t._||{t:0},o=(e=>e&&e.$===k)(s)?s:R(null,null,s);o.$=null,o.t|=4,t._=o,o.p=l.p=e,F(l,o)})(e,t,0,s.render())}catch(r){f(r)}t.t&=-5,e["s-lr"]=!0,t.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),H(e,t)},H=(e,t,n)=>{if(!e["s-al"]){const s=t.j;64&t.t||(t.t|=64,e.classList.add("hydrated"),t.S(e),s||N()),s&&((n=s["s-al"])&&(n.delete(e),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),t.j=void 0)}},N=()=>{l.documentElement.classList.add("hydrated"),o.t|=2},V=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(s){f(s)}},Y=(e,t)=>e&&e.then?e.then(t):t(),z=(e,t,n)=>{if(t.v){const s=Object.entries(t.v),l=e.prototype;s.forEach(([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(l,e,{get(){return((e,t)=>i(e).M.get(t))(this,e)},set(n){((e,t,n,s)=>{const l=i(this),o=l.L,r=l.M.get(t),c=l.t,a=l.l;(n=(e=>(null==e||v(e),e))(n))===r||8&c&&void 0!==r||(l.M.set(t,n),a&&2==(22&c)&&q(o,l,s,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})})}return e},D=(e,t,n,s,l,o,r)=>{let c,i,a,$;if(1===o.nodeType){for((c=o.getAttribute("c-id"))&&((i=c.split("."))[0]!==r&&"0"!==i[0]||(a={t:0,U:i[0],O:i[1],R:i[2],k:i[3],$:o.tagName.toLowerCase(),p:o},t.push(a),o.removeAttribute("c-id"),e.u||(e.u=[]),e.u[a.k]=a,e=a,s&&"0"===a.R&&(s[a.k]=a.p))),$=o.childNodes.length-1;$>=0;$--)D(e,t,n,s,l,o.childNodes[$],r);if(o.shadowRoot)for($=o.shadowRoot.childNodes.length-1;$>=0;$--)D(e,t,n,s,l,o.shadowRoot.childNodes[$],r)}else 8===o.nodeType?(i=o.nodeValue.split("."))[1]!==r&&"0"!==i[1]||(a={t:0,U:i[1],O:i[2],R:i[3],k:i[4],p:o},"t"===(c=i[0])?(a.p=o.nextSibling,a.p&&3===a.p.nodeType&&(a.i=a.p.textContent,t.push(a),o.remove(),e.u||(e.u=[]),e.u[a.k]=a,s&&"0"===a.R&&(s[a.k]=a.p))):a.U===r&&"s"===c&&(a.$="slot",o["s-sn"]=i[5]?a.C=i[5]:"",o["s-sr"]=!0,n.push(a),e.u||(e.u=[]),e.u[a.k]=a)):e&&"style"===e.$&&(e.u=[{k:"0",i:o.textContent,p:o}])},G=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)G(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)G(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-sd"]=""===n[3])}},J=(e,t={})=>{const n=[],a=t.exclude||[],$=l.head,p=s.customElements,m=$.querySelector("meta[charset]"),h=l.createElement("style");let y;Object.assign(o,t),o.s=new URL(t.resourcesUrl||"./",l.baseURI).href,t.syncQueue&&(o.t|=4),o.t|=2,e.forEach(e=>e[1].forEach(t=>{const s={t:t[0],g:t[1],v:t[2],I:t[3]},$=s.g,m=class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,L:e,M:new Map};t.P=new Promise(e=>t.S=e),c.set(e,t)}})(e)}connectedCallback(){y&&(clearTimeout(y),y=null),o.jmp(()=>((e,t)=>{if(0==(1&o.t)){const n=i(e);if(!(1&n.t)){let s;n.t|=1,(s=e.getAttribute("s-id"))&&((e,t,n,s)=>{const r=e.shadowRoot,c=[],i=s._={t:0,$:t};o.T||G(l.body,o.T=new Map),e["s-id"]=n,e.removeAttribute("s-id"),D(i,c,[],null,e,e,n),c.forEach(e=>{const n=e.U+"."+e.O,s=o.T.get(n),l=e.p;s&&(s["s-sd"]||"0"===e.U)&&s.parentNode.insertBefore(l,s.nextSibling),r||(l["s-hn"]=t,s&&(l["s-ol"]=s,l["s-ol"]["s-nr"]=l)),o.T.delete(n)})})(e,t.g,s,n);{let t=e;for(;t=t.parentNode||t.host;)if(1===t.nodeType&&t.hasAttribute("s-id")||t["s-init"]&&!1===t["s-lr"]){n.j=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}g(()=>(async(e,t,n,s,l)=>{if(0==(32&t.t)){t.t|=32,(l=(e=>{const t=e.g.replace(/-/g,"_"),n=e.A,s=u.get(n);return s?s[t]:__sc_import_typeaheadcomponent(`./${n}.entry.js`).then(e=>(u.set(n,e),e[t]),f)})(n)).then&&(l=await l),l.isProxied||(z(l,n,2),l.isProxied=!0),t.t|=8;try{new l(t)}catch(i){f(i)}t.t&=-9;const e=O(n.g);!d.has(e)&&l.style&&((e,t,n)=>{let s=d.get(e);r&&n?(s=s||new CSSStyleSheet).replace(t):s=t,d.set(e,s)})(e,l.style,!!(1&n.t))}const o=t.j,c=()=>q(e,t,n,!0);o&&!1===o["s-lr"]&&o["s-rc"]?o["s-rc"].push(c):c()})(e,n,t))}}})(this,s))}disconnectedCallback(){o.jmp(()=>void 0)}"s-init"(){const e=i(this);e.l&&H(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=i(e);2&n.t&&q(e,n,t,!1)}})(this,s)}componentOnReady(){return i(this).P}};s.A=e[0],a.includes($)||p.get($)||(n.push($),p.define($,z(m,s,1)))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),$.insertBefore(h,m?m.nextSibling:$.firstChild),o.jmp(()=>y=setTimeout(N,30))};export{M as a,J as b,R as h,x as p,a as r};