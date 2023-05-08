var details;(()=>{"use strict";var e,r,t,n,o={553:(e,r,t)=>{var n={"./Details":()=>t.e(95).then((()=>()=>t(95)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})},945:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof host)return e();t.l("http://localhost:8080/remoteEntry.js",(t=>{if("undefined"!=typeof host)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"host")})).then((()=>host))}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.c=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="details:",i.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+o),s.src=t),e[t]=[n];var p=(r,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={95:[699]},n={699:["default","./store",945]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),i.m[e]=()=>{throw r},o.p=0},s=(e,t,n,i,s,u)=>{try{var l=e(t,n);if(!l||!l.then)return s(l,i,u);var f=l.then((e=>s(e,i)),a);if(!u)return f;r.push(o.p=f)}catch(e){a(e)}},u=(e,r,n)=>s(r.get,o[1],t,0,l,n),l=r=>{o.p=1,i.m[e]=e=>{e.exports=r()}};s(i,o[2],0,0,((e,r,t)=>e?s(i.I,o[0],0,e,u,t):a()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var a=i.S[t],s="details",u=[];return"default"===t&&(((e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(1!=!u.eager?n:s>u.from))&&(o[r]={get:()=>i.e(294).then((()=>()=>i(294))),from:s,eager:!1})})("react","18.2.0"),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=i(945);if(!o)return;var a=e=>e&&e.init&&e.init(i.S[t],n);if(o.then)return u.push(o.then(a,r));var s=a(o);if(s&&s.then)return u.push(s.catch(r))}catch(e){r(e)}})()),u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),i.p="http://localhost:3002",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(s=e[a]))[0]?"-":(o>0?".":"")+(o=2,s);return n}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?i.pop()+" "+i.pop():r(s))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,s=1,u=!0;;s++,i++){var l,f,d=s<r.length?(typeof r[s])[0]:"";if(i>=n.length||"o"==(f=(typeof(l=n[i]))[0]))return!u||("u"==d?s>o&&!a:""==d!=a);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(s<=o){if(l!=r[s])return!1}else{if(a?l>r[s]:l<r[s])return!1;l!=r[s]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||s<=o)return!1;u=!1,s--}else{if(s<=o||f<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,s--)}}var p=[],h=p.pop.bind(p);for(i=1;i<r.length;i++){var c=r[i];p.push(1==c?h()|h():2==c?h()&h():c?t(c,n):!h())}return!!h()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,o,i,u)=>{var l=n(e,i);return t(u,l)||a(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,i,l,u)),s(e[i][l])},a=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},s=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,o){var a=i.I(r);return a&&a.then?a.then(e.bind(e,r,i.S[r],t,n,o)):e(r,i.S[r],t,n,o)})(((e,r,t,n,a)=>r&&i.o(r,t)?o(r,0,t,n):a())),l={},f={416:()=>u("default","react",[1,18,2,0],(()=>i.e(294).then((()=>()=>i(294)))))},d={95:[416]};i.f.consumes=(e,r)=>{i.o(d,e)&&d[e].forEach((e=>{if(i.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete l[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var o=f[e]();o.then?r.push(l[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{var e={767:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),s=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,s,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);u&&u(i)}for(r&&r(t);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkdetails=self.webpackChunkdetails||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0;var s=i(553);details=s})();