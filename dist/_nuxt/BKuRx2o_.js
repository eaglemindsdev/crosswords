import C from"./DiLVbxaj.js";import{_ as w}from"./DKwJa6zr.js";import{g as f,B as v,s as m,v as p,x as $,o,c as a,a as s,b as l,t as g,z as A,F as h,C as x,D as B}from"./C4IJNObd.js";import{a as N}from"./CLt63tRj.js";import{_ as D}from"./DKDdmzs0.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./w6QQwc2S.js";const F={class:"pb-10 px-4"},S={class:"flex flex-row items-center space-x-3 pt-5 pb-3"},V={class:"text-2xl font-semibold text-black dark:text-zinc-300"},j={class:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1"},M={key:0,class:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1"},P={class:"lg:col-span-1"},R=s("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),E=s("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1),I=[R,E],L=f({__name:"clue",setup(y){const r=v(),t=m(()=>{const e=r.params.slug||"";return Array.isArray(e)?e[0]:e}),i=r.params.date,d=m(()=>b(t.value)),n=p([]),_=p(!0);$(async()=>{_.value=!1;try{const e=await N(t.value,i);console.log(e),n.value=e.crosswordResults}catch(e){console.error("Failed to load puzzles:",e)}finally{_.value=!1}});function b(e){return e.split("-").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ")}return console.log(n),(e,u)=>{const z=C,k=w;return o(),a("div",F,[s("div",S,[l(z,{name:"mdi:star-three-points-outline",size:"1.5em",class:"text-black dark:text-zinc-300"}),s("h2",V,g(d.value)+" puzzle clues "+g(A(i)),1)]),s("div",j,[(o(!0),a(h,null,x(n.value,c=>(o(),a("div",{key:c.date,class:"lg:col-span-1 lg:ml-4"},[l(k,{data:c},null,8,["data"])]))),128))]),_.value?(o(),a("div",M,[s("div",P,[(o(),a(h,null,x(9,c=>s("div",{key:c,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},I)),64))])])):B("",!0)])}}}),T={class:"container max-w-6xl mx-auto text-zinc-600"},U={class:"container mx-auto"},W={class:"grid grid-cols-1 sm:grid-cols-12 items-start"},q={class:"mt-5 px-3 col-span-12 lg:col-span-8"},G={class:"border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900"},H={class:"m-5 col-span-12 lg:col-span-4"},ts=f({__name:"[date]",setup(y){const r=v();return m(()=>{const t=r.params.slug||"";return Array.isArray(t)?t[0]:t}),r.params.date,(t,i)=>{const d=L,n=D;return o(),a("main",T,[s("div",U,[s("div",W,[s("div",q,[s("div",G,[l(d)])]),s("div",H,[l(n)])])])])}}});export{ts as default};