import{_ as z}from"./IM-RHXMq.js";import{d as $,c as D}from"./CLt63tRj.js";import{_ as S}from"./DlAUqK2U.js";import{o,c as n,a as e,F as d,C as _,t as g,p as I,e as F,g as b,b as m,z as f,G as v,v as w,x as L,D as T,u as C}from"./C4IJNObd.js";import j from"./DiLVbxaj.js";import{_ as B}from"./CRMBu0Nu.js";import"./CvPl5tTm.js";import"./w6QQwc2S.js";const O={data(){return{puzzles:[],loading:!0}},async created(){try{const i=await $(),u=new Date().toISOString().split("T")[0];this.puzzles=i.map(l=>({name:l.category_name,link:"crossword-answers/"+l.slug,date:u,dateLink:l.slug}))}catch(i){console.error("Failed to load puzzles:",i)}finally{this.loading=!1}}},h=i=>(I("data-v-6015570c"),i=i(),F(),i),M={class:"w-full mt-3"},P=h(()=>e("h2",{class:"text-[22px] leading-8 dark:text-zinc-300 lg:text-2xl lg:leading-8 lg:mb-3","data-svelte-h":"svelte-1547bw6"},"Today’s Featured Puzzles",-1)),A=h(()=>e("p",{class:"dark:text-zinc-300"},"Stay updated with the latest puzzles and solutions. Find answers to today’s top crossword puzzles:",-1)),N={key:0,class:"grid grid-cols-1 lg:grid-cols-2"},H={class:"lg:col-span-1"},V=h(()=>e("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1)),Y=h(()=>e("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)),E=[V,Y],G={class:"lg:col-span-1 lg:ml-4"},U=h(()=>e("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1)),q=h(()=>e("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)),J=[U,q],K={key:1,class:"grid grid-cols-1 lg:grid-cols-2"},Q={class:"lg:col-span-1"},R=["href"],W=["href"],X={class:"lg:col-span-1 lg:ml-4"},Z=["href"],ee=["href"];function te(i,u,l,p,a,c){return o(),n("div",M,[P,A,a.loading?(o(),n("div",N,[e("div",H,[(o(),n(d,null,_(9,t=>e("div",{key:t,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro border-b dark:border-gray-800 py-3 animate-pulse"},E)),64))]),e("div",G,[(o(),n(d,null,_(9,t=>e("div",{key:t,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro border-b dark:border-gray-800 py-3 animate-pulse"},J)),64))])])):(o(),n("div",K,[e("div",Q,[(o(!0),n(d,null,_(a.puzzles.slice(0,5),(t,r)=>(o(),n("div",{key:r,class:"flex justify-between gap-2 items-center border-b border-b dark:border-gray-800 border-b-gainsboro py-3"},[e("a",{href:t.link,class:"text-sm dark:text-zinc-300 lg:truncate hover:text-purple-800 active:underline"},g(t.name),9,R),e("a",{href:t.dateLink,class:"whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 dark:text-zinc-300 text-nowrap hover:text-purple-700 active:underline"},g(t.date),9,W)]))),128))]),e("div",X,[(o(!0),n(d,null,_(a.puzzles.slice(5,10),(t,r)=>(o(),n("div",{key:r,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro border-b dark:border-gray-800 py-3"},[e("a",{href:t.link,class:"text-sm dark:text-zinc-300 lg:truncate hover:text-purple-800 active:underline"},g(t.name),9,Z),e("a",{href:t.dateLink,class:"whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 dark:text-zinc-300 text-nowrap hover:text-purple-700 active:underline"},g(t.date),9,ee)]))),128))])]))])}const se=S(O,[["render",te],["__scopeId","data-v-6015570c"]]),oe={class:"container mx-auto"},ne={class:"grid grid-cols-1 sm:grid-cols-12 items-start"},ae={class:"m-5 col-span-12 lg:col-span-4"},re={class:"px-3 col-span-12 lg:col-span-8"},ie={class:"text-black dark:text-zinc-300 font-semibold leading-tight text-2xl md:text-3xl my-5"},le={class:"dark:text-zinc-300"},ce=b({__name:"hero",setup(i){return(u,l)=>{const p=z,a=se;return o(),n("div",oe,[e("div",ne,[e("div",ae,[m(p)]),e("div",re,[e("h1",ie,g(f(v).title),1),e("p",le,g(f(v).description),1),m(a)])])])}}}),de={class:"pb-10 px-4"},_e={class:"flex flex-row items-center space-x-3 pt-5 pb-3"},ue=e("h2",{class:"text-4xl font-semibold text-black dark:text-zinc-300"}," Find More Puzzles ",-1),pe={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},ge={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},me={class:"lg:col-span-1"},he=e("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),be=e("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1),xe=[he,be],ye={class:"lg:col-span-1 lg:ml-4"},fe=e("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),ve=e("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1),we=[fe,ve],ke={class:"lg:col-span-1 lg:ml-4"},ze=e("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),$e=e("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1),De=[ze,$e],Se=b({__name:"discover",setup(i){const u=w([]),l=w(!0);L(async()=>{try{const a=await D(),c=new Date,t=new Date(c);t.setDate(t.getDate()-1);const r=new Date(c);r.setDate(r.getDate()-2),a.sort((s,k)=>{const x=new Date(s.publish_date),y=new Date(k.publish_date);return x>y?-1:x<y?1:0}),u.value=a.map(s=>({name:s.category_name,link:s.slug,date:p(a.indexOf(s)),dateLink:s.slug}))}catch(a){console.error("Failed to load puzzles:",a)}finally{l.value=!1}});function p(a){const c=new Date,t=new Date(c);t.setDate(t.getDate()-1);const r=new Date(c);switch(r.setDate(r.getDate()-2),a%3){case 0:return t.toISOString().split("T")[0];case 1:return r.toISOString().split("T")[0];case 2:return r.toISOString().split("T")[0];default:return c.toISOString().split("T")[0]}}return(a,c)=>{const t=j,r=B;return o(),n("div",de,[e("div",_e,[m(t,{name:"mdi:star-three-points-outline",size:"2em",class:"text-black dark:text-zinc-300"}),ue]),e("div",pe,[(o(!0),n(d,null,_(u.value,s=>(o(),n("div",{key:s.name,class:"lg:col-span-1 lg:ml-4"},[m(r,{name:s.name,link:s.link,date:s.date,dateLink:s.dateLink},null,8,["name","link","date","dateLink"])]))),128))]),l.value?(o(),n("div",ge,[e("div",me,[(o(),n(d,null,_(9,s=>e("div",{key:s,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},xe)),64))]),e("div",ye,[(o(),n(d,null,_(9,s=>e("div",{key:s,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},we)),64))]),e("div",ke,[(o(),n(d,null,_(9,s=>e("div",{key:s,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},De)),64))])])):T("",!0)])}}}),Ie={class:"container max-w-6xl mx-auto text-zinc-600"},Pe=b({__name:"index",setup(i){return C({title:"Free Crossword Puzzle Answers & Solutions",meta:[{name:"description",content:"Looking for crossword puzzle answers? Find solutions for popular crosswords like the NY Times, LA Times, USA Today, and more. Improve your puzzle-solving skills with our tips and resources."}],titleTemplate:"Crossword Solver | %s"}),(u,l)=>{const p=ce,a=Se;return o(),n("main",Ie,[m(p),m(a)])}}});export{Pe as default};
