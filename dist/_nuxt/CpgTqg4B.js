import{z as t,H as e,I as n,J as o,u as i,q as l,g as a,K as r,L as s,y as d}from"./CNqXBxn2.js";import u from"./elGaghbc.js";import p from"./WVdQwnSK.js";import"./p9CQRNSF.js";import"./BWiNefnl.js";import"./BpIY1J_G.js";import"./B5GoZWba.js";const c=(a,r=n())=>{const s=t(a),d=l();e((()=>t(a)),((t=s)=>{if(!r.path||!t)return;const e=Object.assign({},(null==t?void 0:t.head)||{});e.meta=[...e.meta||[]],e.link=[...e.link||[]];const n=e.title||(null==t?void 0:t.title);n&&(e.title=n),d.public.content.host;const l=(null==e?void 0:e.description)||(null==t?void 0:t.description);l&&0===e.meta.filter((t=>"description"===t.name)).length&&e.meta.push({name:"description",content:l}),(null==e?void 0:e.image)||null==t||t.image,o((()=>i(e)))}),{immediate:!0})},m=a({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(t){const{contentHead:e}=l().public.content,o=r(),{tag:i,excerpt:a,path:m,query:v,head:f}=t,h=void 0===f?e:f,y={...v||{},path:m||(null==v?void 0:v.path)||s(n().path),find:"one"};return d(p,y,{default:(null==o?void 0:o.default)?({data:t,refresh:e,isPartial:n})=>{var i;return h&&c(t),null==(i=o.default)?void 0:i.call(o,{doc:t,refresh:e,isPartial:n,excerpt:a,...this.$attrs})}:({data:t})=>(h&&c(t),d(u,{value:t,excerpt:a,tag:i,...this.$attrs},{empty:e=>(null==o?void 0:o.empty)?o.empty(e):((t,e)=>d("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:e},null,2)))("default",t)})),empty:t=>{var e;return(null==(e=null==o?void 0:o.empty)?void 0:e.call(o,t))||d("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var e;return(null==(e=null==o?void 0:o["not-found"])?void 0:e.call(o,t))||d("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{m as default};
