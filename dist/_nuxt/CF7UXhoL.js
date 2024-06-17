import{_ as e}from"./wFeaFFG1.js";import{d as s,c as a}from"./DEomO74k.js";import{_ as t}from"./BCo6x5W8.js";import{o as l,c as r,a as n,F as i,C as d,t as o,p as c,e as g,g as u,b as p,z as b,G as m,v,x,D as y,u as w}from"./CNqXBxn2.js";import k from"./Djdzb1nY.js";import{_ as f}from"./rJWRpehi.js";import"./CoHveccA.js";import"./D0kKImbA.js";const h={data:()=>({puzzles:[],loading:!0}),async created(){try{const e=await s(),a=(new Date).toISOString().split("T")[0];this.puzzles=e.map((e=>({name:e.category_name,link:`crossword-answers/${e.slug}`,date:a,dateLink:e.slug})))}catch(e){}finally{this.loading=!1}}},z=e=>(c("data-v-1cc123ca"),e=e(),g(),e),D={class:"w-full mt-3"},j=z((()=>n("h2",{class:"text-[22px] leading-8 dark:text-zinc-300 lg:text-2xl lg:leading-8 lg:mb-3","data-svelte-h":"svelte-1547bw6"}," Today’s Featured Puzzles ",-1))),_=z((()=>n("p",{class:"dark:text-zinc-300"}," Stay updated with the latest puzzles and solutions. Find answers to today’s top crossword puzzles: ",-1))),S={key:0,class:"grid grid-cols-1 lg:grid-cols-2"},T={class:"lg:col-span-1"},L=[z((()=>n("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1))),z((()=>n("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)))],F={class:"lg:col-span-1 lg:ml-4"},I=[z((()=>n("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1))),z((()=>n("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)))],O={key:1,class:"grid grid-cols-1 lg:grid-cols-2"},P={class:"lg:col-span-1"},A=["href"],C=["href"],G={class:"lg:col-span-1 lg:ml-4"},J=["href"],M=["href"];const N=t(h,[["render",function(e,s,a,t,c,g){return l(),r("div",D,[j,_,c.loading?(l(),r("div",S,[n("div",T,[(l(),r(i,null,d(9,(e=>n("div",{key:e,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro border-b dark:border-gray-800 py-3 animate-pulse"},L))),64))]),n("div",F,[(l(),r(i,null,d(9,(e=>n("div",{key:e,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro border-b dark:border-gray-800 py-3 animate-pulse"},I))),64))])])):(l(),r("div",O,[n("div",P,[(l(!0),r(i,null,d(c.puzzles.slice(0,5),((e,s)=>(l(),r("div",{key:s,class:"flex justify-between gap-2 items-center border-b border-b dark:border-gray-800 border-b-gainsboro py-3"},[n("a",{href:e.link,class:"text-sm dark:text-zinc-300 lg:truncate hover:text-purple-800 active:underline"},o(e.name),9,A),n("a",{href:e.dateLink,class:"whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 dark:text-zinc-300 text-nowrap hover:text-purple-700 active:underline"},o(e.date),9,C)])))),128))]),n("div",G,[(l(!0),r(i,null,d(c.puzzles.slice(5,10),((e,s)=>(l(),r("div",{key:s,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro border-b dark:border-gray-800 py-3"},[n("a",{href:e.link,class:"text-sm dark:text-zinc-300 lg:truncate hover:text-purple-800 active:underline"},o(e.name),9,J),n("a",{href:e.dateLink,class:"whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 dark:text-zinc-300 text-nowrap hover:text-purple-700 active:underline"},o(e.date),9,M)])))),128))])]))])}],["__scopeId","data-v-1cc123ca"]]),Q={class:"container mx-auto"},R={class:"grid grid-cols-1 sm:grid-cols-12 items-start"},U={class:"m-5 col-span-12 lg:col-span-4"},V={class:"px-3 col-span-12 lg:col-span-8"},Y={class:"text-black dark:text-zinc-300 font-semibold leading-tight text-2xl md:text-3xl my-5"},$={class:"dark:text-zinc-300"},q=u({__name:"hero",setup:s=>(s,a)=>{const t=e,i=N;return l(),r("div",Q,[n("div",R,[n("div",U,[p(t)]),n("div",V,[n("h1",Y,o(b(m).title),1),n("p",$,o(b(m).description),1),p(i)])])])}}),B={class:"pb-10 px-4"},E={class:"flex flex-row items-center space-x-3 pt-5 pb-3"},H=n("h2",{class:"text-4xl font-semibold text-black dark:text-zinc-300"}," Find More Puzzles ",-1),K={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},W={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},X={class:"lg:col-span-1"},Z=[n("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),n("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)],ee={class:"lg:col-span-1 lg:ml-4"},se=[n("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),n("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)],ae={class:"lg:col-span-1 lg:ml-4"},te=[n("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),n("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)],le=u({__name:"discover",setup(e){const s=v([]),t=v(!0);function o(e){const s=new Date,a=new Date(s);a.setDate(a.getDate()-1);const t=new Date(s);switch(t.setDate(t.getDate()-2),e%3){case 0:return a.toISOString().split("T")[0];case 1:case 2:return t.toISOString().split("T")[0];default:return s.toISOString().split("T")[0]}}return x((async()=>{try{const e=await a(),t=new Date,l=new Date(t);l.setDate(l.getDate()-1);const r=new Date(t);r.setDate(r.getDate()-2),e.sort(((e,s)=>{const a=new Date(e.publish_date),t=new Date(s.publish_date);return a>t?-1:a<t?1:0})),s.value=e.map((s=>({name:s.category_name,link:s.slug,date:o(e.indexOf(s)),dateLink:s.slug})))}catch(e){}finally{t.value=!1}})),(e,a)=>{const o=k,c=f;return l(),r("div",B,[n("div",E,[p(o,{name:"mdi:star-three-points-outline",size:"2em",class:"text-black dark:text-zinc-300"}),H]),n("div",K,[(l(!0),r(i,null,d(s.value,(e=>(l(),r("div",{key:e.name,class:"lg:col-span-1 lg:ml-4"},[p(c,{name:e.name,link:e.link,date:e.date,"date-link":e.dateLink},null,8,["name","link","date","date-link"])])))),128))]),t.value?(l(),r("div",W,[n("div",X,[(l(),r(i,null,d(9,(e=>n("div",{key:e,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},Z))),64))]),n("div",ee,[(l(),r(i,null,d(9,(e=>n("div",{key:e,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},se))),64))]),n("div",ae,[(l(),r(i,null,d(9,(e=>n("div",{key:e,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},te))),64))])])):y("",!0)])}}}),re={class:"container max-w-6xl mx-auto text-zinc-600"},ne=u({__name:"index",setup:e=>(w({title:"Free Crossword Puzzle Answers & Solutions",meta:[{name:"description",content:"Looking for crossword puzzle answers? Find solutions for popular crosswords like the NY Times, LA Times, USA Today, and more. Improve your puzzle-solving skills with our tips and resources."}],titleTemplate:"Crossword Solver | %s"}),(e,s)=>{const a=q,t=le;return l(),r("main",re,[p(a),p(t)])})});export{ne as default};
