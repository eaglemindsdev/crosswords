import{a as e,q as t}from"./B5GoZWba.js";import{g as r,M as l,s as u,q as a,H as i,K as o,y as n}from"./CNqXBxn2.js";import{h as d}from"./BpIY1J_G.js";const s=r({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(r){const{path:o,only:n,without:s,where:v,sort:p,limit:f,skip:h,locale:y,find:m}=l(r),c=u((()=>{var e;return null==(e=o.value)?void 0:e.includes("/_")})),w=!a().public.content.experimental.advanceQuery;i((()=>r),(()=>b()),{deep:!0});const q=e=>w?(null==e?void 0:e.surround)?e.surround:(null==e?void 0:e._id)||Array.isArray(e)?e:null==e?void 0:e.result:e.result,{data:g,refresh:b}=await e(`content-query-${d(r)}`,(()=>{let e;return e=o.value?t(o.value):t(),n.value&&(e=e.only(n.value)),s.value&&(e=e.without(s.value)),v.value&&(e=e.where(v.value)),p.value&&(e=e.sort(p.value)),f.value&&(e=e.limit(f.value)),h.value&&(e=e.skip(h.value)),y.value&&(e=e.where({_locale:y.value})),"one"===m.value?e.findOne().then(q):"surround"===m.value&&o.value?w?e.findSurround(o.value):e.withSurround(o.value).findOne().then(q):e.find().then(q)}));return{isPartial:c,data:g,refresh:b}},render(e){var t;const r=o(),{data:l,refresh:u,isPartial:a,path:i,only:d,without:s,where:v,sort:p,limit:f,skip:h,locale:y,find:m}=e,c={path:i,only:d,without:s,where:v,sort:p,limit:f,skip:h,locale:y,find:m};if("one"===c.find){if(!l&&(null==r?void 0:r["not-found"]))return r["not-found"]({props:c,...this.$attrs});if((null==r?void 0:r.empty)&&"markdown"===(null==l?void 0:l._type)&&!(null==(t=null==l?void 0:l.body)?void 0:t.children.length))return r.empty({props:c,...this.$attrs})}else if((!l||!l.length)&&(null==r?void 0:r["not-found"]))return r["not-found"]({props:c,...this.$attrs});if(null==r?void 0:r.default)return r.default({data:l,refresh:u,isPartial:a,props:c,...this.$attrs});return w="default",q={data:l,props:c,isPartial:a},n("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2));var w,q}});export{s as default};
