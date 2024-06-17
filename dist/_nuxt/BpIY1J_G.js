import{v as t,W as e,T as r,H as i,a3 as n,a2 as o,J as s,I as a}from"./CNqXBxn2.js";const c=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function l(t,e,r){const i=r||{},n=i.encode||d;if("function"!=typeof n)throw new TypeError("option encode is invalid");if(!c.test(t))throw new TypeError("argument name is invalid");const o=n(e);if(o&&!c.test(o))throw new TypeError("argument val is invalid");let s=t+"="+o;if(void 0!==i.maxAge&&null!==i.maxAge){const t=i.maxAge-0;if(Number.isNaN(t)||!Number.isFinite(t))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(t)}if(i.domain){if(!c.test(i.domain))throw new TypeError("option domain is invalid");s+="; Domain="+i.domain}if(i.path){if(!c.test(i.path))throw new TypeError("option path is invalid");s+="; Path="+i.path}if(i.expires){if(a=i.expires,!("[object Date]"===Object.prototype.toString.call(a)||a instanceof Date)||Number.isNaN(i.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+i.expires.toUTCString()}var a;if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.priority){switch("string"==typeof i.priority?i.priority.toLowerCase():i.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(i.sameSite){switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i.partitioned&&(s+="; Partitioned"),s}function u(t,e){try{return e(t)}catch{return t}}function p(t){return t.includes("%")?decodeURIComponent(t):t}function d(t){return encodeURIComponent(t)}const h=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function f(t,e){const r=g(e=e?{...h,...e}:h);return r.dispatch(t),r.toString()}const y=Object.freeze(["prototype","__proto__","constructor"]);function g(t){let e="",r=new Map;const i=t=>{e+=t};return{toString:()=>e,getContext:()=>r,dispatch(e){t.replacer&&(e=t.replacer(e));return this[null===e?"null":typeof e](e)},object(e){if(e&&"function"==typeof e.toJSON)return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let o="";const s=n.length;o=s<10?"unknown:["+n+"]":n.slice(8,s-1),o=o.toLowerCase();let a=null;if(void 0!==(a=r.get(e)))return this.dispatch("[CIRCULAR:"+a+"]");if(r.set(e,r.size),"undefined"!=typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(e))return i("buffer:"),i(e.toString("utf8"));if("object"!==o&&"function"!==o&&"asyncfunction"!==o)this[o]?this[o](e):t.ignoreUnknown||this.unkown(e,o);else{let r=Object.keys(e);t.unorderedObjects&&(r=r.sort());let n=[];!1===t.respectType||v(e)||(n=y),t.excludeKeys&&(r=r.filter((e=>!t.excludeKeys(e))),n=n.filter((e=>!t.excludeKeys(e)))),i("object:"+(r.length+n.length)+":");const o=r=>{this.dispatch(r),i(":"),t.excludeValues||this.dispatch(e[r]),i(",")};for(const t of r)o(t);for(const t of n)o(t)}},array(e,n){if(n=void 0===n?!1!==t.unorderedArrays:n,i("array:"+e.length+":"),!n||e.length<=1){for(const t of e)this.dispatch(t);return}const o=new Map,s=e.map((e=>{const r=g(t);r.dispatch(e);for(const[t,i]of r.getContext())o.set(t,i);return r.toString()}));return r=o,s.sort(),this.array(s,!1)},date:t=>i("date:"+t.toJSON()),symbol:t=>i("symbol:"+t.toString()),unkown(t,e){if(i(e),t)return i(":"),t&&"function"==typeof t.entries?this.array(Array.from(t.entries()),!0):void 0},error:t=>i("error:"+t.toString()),boolean:t=>i("bool:"+t),string(t){i("string:"+t.length+":"),i(t)},function(e){i("fn:"),v(e)?this.dispatch("[native]"):this.dispatch(e.toString()),!1!==t.respectFunctionNames&&this.dispatch("function-name:"+String(e.name)),t.respectFunctionProperties&&this.object(e)},number:t=>i("number:"+t),xml:t=>i("xml:"+t.toString()),null:()=>i("Null"),undefined:()=>i("Undefined"),regexp:t=>i("regex:"+t.toString()),uint8array(t){return i("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return i("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return i("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return i("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return i("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return i("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return i("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return i("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return i("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return i("arraybuffer:"),this.dispatch(new Uint8Array(t))},url:t=>i("url:"+t.toString()),map(e){i("map:");const r=[...e];return this.array(r,!1!==t.unorderedSets)},set(e){i("set:");const r=[...e];return this.array(r,!1!==t.unorderedSets)},file(t){return i("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(t.ignoreUnknown)return i("[blob]");throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n')},domwindow:()=>i("domwindow"),bigint:t=>i("bigint:"+t.toString()),process:()=>i("process"),timer:()=>i("timer"),pipe:()=>i("pipe"),tcp:()=>i("tcp"),udp:()=>i("udp"),tty:()=>i("tty"),statwatcher:()=>i("statwatcher"),securecontext:()=>i("securecontext"),connection:()=>i("connection"),zlib:()=>i("zlib"),context:()=>i("context"),nodescript:()=>i("nodescript"),httpparser:()=>i("httpparser"),dataview:()=>i("dataview"),signal:()=>i("signal"),fsevent:()=>i("fsevent"),tlswrap:()=>i("tlswrap")}}const w="[native code] }",m=w.length;function v(t){return"function"==typeof t&&Function.prototype.toString.call(t).slice(-m)===w}class b{constructor(t,e){t=this.words=t||[],this.sigBytes=void 0===e?4*t.length:e}toString(t){return(t||S).stringify(this)}concat(t){if(this.clamp(),this.sigBytes%4)for(let e=0;e<t.sigBytes;e++){const r=t.words[e>>>2]>>>24-e%4*8&255;this.words[this.sigBytes+e>>>2]|=r<<24-(this.sigBytes+e)%4*8}else for(let e=0;e<t.sigBytes;e+=4)this.words[this.sigBytes+e>>>2]=t.words[e>>>2];return this.sigBytes+=t.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new b([...this.words])}}const S={stringify(t){const e=[];for(let r=0;r<t.sigBytes;r++){const i=t.words[r>>>2]>>>24-r%4*8&255;e.push((i>>>4).toString(16),(15&i).toString(16))}return e.join("")}},x={stringify(t){const e=[];for(let r=0;r<t.sigBytes;r+=3){const i=(t.words[r>>>2]>>>24-r%4*8&255)<<16|(t.words[r+1>>>2]>>>24-(r+1)%4*8&255)<<8|t.words[r+2>>>2]>>>24-(r+2)%4*8&255;for(let n=0;n<4&&8*r+6*n<8*t.sigBytes;n++)e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(i>>>6*(3-n)&63))}return e.join("")}},_={parse(t){const e=t.length,r=[];for(let i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new b(r,e)}},B={parse:t=>_.parse(unescape(encodeURIComponent(t)))};class k{constructor(){this._data=new b,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=16}reset(){this._data=new b,this._nDataBytes=0}_append(t){"string"==typeof t&&(t=B.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_doProcessBlock(t,e){}_process(t){let e,r=this._data.sigBytes/(4*this.blockSize);r=t?Math.ceil(r):Math.max((0|r)-this._minBufferSize,0);const i=r*this.blockSize,n=Math.min(4*i,this._data.sigBytes);if(i){for(let t=0;t<i;t+=this.blockSize)this._doProcessBlock(this._data.words,t);e=this._data.words.splice(0,i),this._data.sigBytes-=n}return new b(e,n)}}class j extends k{update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t)}}const A=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],T=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],O=[];class E extends j{constructor(){super(...arguments),this._hash=new b([...A])}reset(){super.reset(),this._hash=new b([...A])}_doProcessBlock(t,e){const r=this._hash.words;let i=r[0],n=r[1],o=r[2],s=r[3],a=r[4],c=r[5],l=r[6],u=r[7];for(let p=0;p<64;p++){if(p<16)O[p]=0|t[e+p];else{const t=O[p-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,r=O[p-2],i=(r<<15|r>>>17)^(r<<13|r>>>19)^r>>>10;O[p]=e+O[p-7]+i+O[p-16]}const r=i&n^i&o^n&o,d=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),h=u+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&c^~a&l)+T[p]+O[p];u=l,l=c,c=a,a=s+h|0,s=o,o=n,n=i,i=h+(d+r)|0}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+a|0,r[5]=r[5]+c|0,r[6]=r[6]+l|0,r[7]=r[7]+u|0}finalize(t){super.finalize(t);const e=8*this._nDataBytes,r=8*this._data.sigBytes;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[14+(r+64>>>9<<4)]=Math.floor(e/4294967296),this._data.words[15+(r+64>>>9<<4)]=e,this._data.sigBytes=4*this._data.words.length,this._process(),this._hash}}function z(t,e={}){const r="string"==typeof t?t:f(t,e);return(i=r,(new E).finalize(i).toString(x)).slice(0,10);var i}function C(t){if("object"!=typeof t)return t;var e,r,i=Object.prototype.toString.call(t);if("[object Object]"===i){if(t.constructor!==Object&&"function"==typeof t.constructor)for(e in r=new t.constructor,t)t.hasOwnProperty(e)&&r[e]!==t[e]&&(r[e]=C(t[e]));else for(e in r={},t)"__proto__"===e?Object.defineProperty(r,e,{value:C(t[e]),configurable:!0,enumerable:!0,writable:!0}):r[e]=C(t[e]);return r}if("[object Array]"===i){for(e=t.length,r=Array(e);e--;)r[e]=C(t[e]);return r}return"[object Set]"===i?(r=new Set,t.forEach((function(t){r.add(C(t))})),r):"[object Map]"===i?(r=new Map,t.forEach((function(t,e){r.set(C(e),C(t))})),r):"[object Date]"===i?new Date(+t):"[object RegExp]"===i?((r=new RegExp(t.source,t.flags)).lastIndex=t.lastIndex,r):"[object DataView]"===i?new t.constructor(C(t.buffer)):"[object ArrayBuffer]"===i?t.slice(0):"Array]"===i.slice(-6)?new t.constructor(t):t}const P={path:"/",watch:!0,decode:t=>o(decodeURIComponent(t)),encode:t=>encodeURIComponent("string"==typeof t?t:JSON.stringify(t))};function N(o,a){var c;const u={...P,...a},p=I(u)||{};let d;void 0!==u.maxAge?d=1e3*u.maxAge:u.expires&&(d=u.expires.getTime()-Date.now());const h=void 0!==d&&d<=0,y=C(h?void 0:p[o]??(null==(c=u.default)?void 0:c.call(u))),g=d&&!h?function(o,s,a){let c,l,u=0;const p=a?t(o):{value:o};e()&&r((()=>{null==l||l(),clearTimeout(c)}));return n(((t,e)=>{function r(){clearTimeout(c);const t=s-u,i=t<M?t:M;c=setTimeout((()=>{if(u+=i,u<s)return r();p.value=void 0,e()}),i)}return a&&(l=i(p,e)),{get:()=>(t(),p.value),set(t){r(),p.value=t,e()}}}))}(y,d,u.watch&&"shallow"!==u.watch):t(y);{let t=null;try{"undefined"!=typeof BroadcastChannel&&(t=new BroadcastChannel(`nuxt:cookies:${o}`))}catch{}const n=()=>{u.readonly||function(t,e,r={}){return t===e||f(t,r)===f(e,r)}(g.value,p[o])||(!function(t,e,r={}){document.cookie=function(t,e,r={}){if(null==e)return l(t,e,{...r,maxAge:-1});return l(t,e,r)}(t,e,r)}(o,g.value,u),p[o]=C(g.value),null==t||t.postMessage({value:u.encode(g.value)}))},a=t=>{var e;const r=t.refresh?null==(e=I(u))?void 0:e[o]:u.decode(t.value);c=!0,p[o]=g.value=r,s((()=>{c=!1}))};let c=!1;e()&&r((()=>{c=!0,n(),null==t||t.close()})),t&&(t.onmessage=({data:t})=>a(t)),u.watch?i(g,(()=>{c||n()}),{deep:"shallow"!==u.watch}):n()}return g}function I(t={}){return function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");const r={},i=(e||{}).decode||p;let n=0;for(;n<t.length;){const e=t.indexOf("=",n);if(-1===e)break;let o=t.indexOf(";",n);if(-1===o)o=t.length;else if(o<e){n=t.lastIndexOf(";",e-1)+1;continue}const s=t.slice(n,e).trim();if(void 0===r[s]){let n=t.slice(e+1,o).trim();34===n.codePointAt(0)&&(n=n.slice(1,-1)),r[s]=u(n,i)}n=o+1}return r}(document.cookie,t)}const M=2147483647;const U=()=>({isEnabled:()=>{const t=a().query;return!(Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview)&&(!(!t.preview&&!N("previewToken").value)||!!sessionStorage.getItem("previewToken"))},getPreviewToken:()=>N("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{N("previewToken").value=t,a().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{z as h,U as u};
