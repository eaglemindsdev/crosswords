import t from"./WVdQwnSK.js";import{g as e,K as l,y as a}from"./CNqXBxn2.js";import"./B5GoZWba.js";import"./BpIY1J_G.js";const o=(t,e)=>a("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:e},null,2)),d=e({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(e){const d=l(),{path:r,query:u}=e,n={...u||{},path:r||(null==u?void 0:u.path)||"/"};return a(t,n,{default:(null==d?void 0:d.default)?({data:t,refresh:e,isPartial:l})=>d.default({list:t,refresh:e,isPartial:l,...this.$attrs}):t=>o("default",t.data),empty:t=>(null==d?void 0:d.empty)?d.empty(t):o("default",null==t?void 0:t.data),"not-found":t=>{var e;return(null==d?void 0:d["not-found"])?null==(e=null==d?void 0:d["not-found"])?void 0:e.call(d,t):o("not-found",null==t?void 0:t.data)}})}});export{d as default};