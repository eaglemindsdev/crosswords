import a from"./Djdzb1nY.js";import{_ as s}from"./D0kKImbA.js";import{g as e,o as l,E as t,w as r,a as d,t as i,B as n,s as o,v as c,x as u,c as p,b as m,F as v,C as g,D as b}from"./CNqXBxn2.js";import{b as x}from"./DEomO74k.js";import{_ as f}from"./BLs82_j-.js";import{_ as y}from"./BCo6x5W8.js";import"./CoHveccA.js";const k={class:"flex justify-center items-center border-b border-b-gainsboro border-b dark:border-gray-800 py-3 dark:text-gray-300"},w={class:"whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 text-nowrap hover:underline active:underline"},j=e({__name:"datelist",props:{link:{default:"default"},date:{default:"no-date"}},setup:a=>(a,e)=>{const n=s;return l(),t(n,{to:a.link},{default:r((()=>[d("div",k,[d("a",w,i(a.date),1)])])),_:1},8,["to"])}}),h={class:"pb-10 px-4"},_={class:"flex flex-row items-center space-x-3 pt-5 pb-3"},z={class:"text-2xl font-semibold text-black dark:text-zinc-300"},C={class:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1"},A={key:0,class:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1"},P={class:"lg:col-span-1"},U=[d("div",{class:"bg-gray-300 h-4 w-2/3 rounded"},null,-1),d("div",{class:"bg-gray-300 h-4 w-1/4 rounded"},null,-1)],$={class:"flex justify-center mt-5"},B=["disabled"],D=["disabled"],E=e({__name:"archive",setup(s){const e=n(),t=o((()=>{const a=e.params.slug||"";return Array.isArray(a)?a[0]:a})),r=o((()=>t.value.split("-").map((a=>a.charAt(0).toUpperCase()+a.slice(1))).join(" "))),f=c([]),y=c(!0),k=c(1),w=c(10),E=c(1);async function F(){y.value=!0;try{const a=await x(t.value,k.value,w.value);f.value=a.results.map((a=>({date:a.updated_date}))),E.value=a.pagination.pageCount}catch(a){}finally{y.value=!1}}async function G(a){k.value=a,await F()}return u(F),(s,e)=>{const n=a,o=j;return l(),p("div",h,[d("div",_,[m(n,{name:"mdi:star-three-points-outline",size:"2em",class:"text-black dark:text-zinc-300"}),d("h2",z," Grouped Puzzles for "+i(r.value),1)]),d("div",C,[(l(!0),p(v,null,g(f.value,(a=>(l(),p("div",{key:a.date,class:"lg:col-span-1 lg:ml-4"},[m(o,{date:a.date,link:`${t.value}/${a.date}`},null,8,["date","link"])])))),128))]),y.value?(l(),p("div",A,[d("div",P,[(l(),p(v,null,g(9,(a=>d("div",{key:a,class:"flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse"},U))),64))])])):b("",!0),d("div",$,[d("button",{disabled:1===k.value,class:"mr-2 px-4 py-2 bg-gray-300 rounded-md",onClick:e[0]||(e[0]=a=>G(k.value-1))}," Previous ",8,B),d("span",null,i(k.value)+" / "+i(E.value),1),d("button",{disabled:k.value===E.value,class:"ml-2 px-4 py-2 bg-gray-300 rounded-md",onClick:e[1]||(e[1]=a=>G(k.value+1))}," Next ",8,D)])])}}}),F={class:"container max-w-6xl mx-auto text-zinc-600"},G={class:"container mx-auto"},J={class:"grid grid-cols-1 sm:grid-cols-12 items-start"},N={class:"mt-5 px-3 col-span-12 lg:col-span-8"},O={class:"border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900"},Q={class:"m-5 col-span-12 lg:col-span-4"};const T=y({},[["render",function(a,s){const e=E,t=f;return l(),p("main",F,[d("div",G,[d("div",J,[d("div",N,[d("div",O,[m(e)])]),d("div",Q,[m(t)])])])])}]]);export{T as default};