import{g as t,K as r,s as e,y as n,V as a}from"./CNqXBxn2.js";const i=["p","h1","h2","h3","h4","h5","h6","li"];function l(t,r){return t.type===r||("object"==typeof t.type&&t.type.tag===r||t.tag===r)}function o(t){return l(t,"text")||l(t,Symbol.for("v-txt"))}function u(t){var r;return Array.isArray(t.children)||"string"==typeof t.children?t.children:"function"==typeof(null==(r=t.children)?void 0:r.default)?t.children.default():[]}function s(t){if(!t)return"";if(Array.isArray(t))return t.map(s).join("");if(o(t))return t.children||t.value||"";const r=u(t);return Array.isArray(r)?r.map(s).filter(Boolean).join(""):""}function p(t,r=[]){if(Array.isArray(t))return t.flatMap((t=>p(t,r)));let e=t;return r.some((r=>"*"===r||l(t,r)))&&(e=u(t)||t,!Array.isArray(e)&&i.some((r=>l(t,r)))&&(e=[e])),e}function f(t,r=[]){return t=Array.isArray(t)?t:[t],r.length?t.flatMap((t=>f(p(t,[r[0]]),r.slice(1)))).filter((t=>!(o(t)&&""===s(t).trim()))):t}const c=t({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:n}=a(),{default:i}=r();return{fallbackSlot:i,tags:e((()=>"string"==typeof t.unwrap?t.unwrap.split(" "):["*"])),parent:n}},render({use:t,unwrap:r,fallbackSlot:e,tags:a,parent:i}){var l;try{let u=t;return"string"==typeof t&&(u=(null==i?void 0:i.slots[t])||(null==(l=null==i?void 0:i.parent)?void 0:l.slots[t])),u?r?function(t,r=[]){return"string"==typeof r&&(r=r.split(",").map((t=>t.trim())).filter(Boolean)),r.length?f(t,r).reduce(((t,r)=>(o(r)?"string"==typeof t[t.length-1]?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t)),[]):t}(u(),a):[u()]:e?e():n("div")}catch(u){return n("div")}}}),y=t({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render:t=>n(c,t)});export{y as default};
