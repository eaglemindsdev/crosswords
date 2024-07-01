<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getCrosswords } from '@/api/service'
import { useAsyncData } from '#app';

interface Clue {
  clue_slug: string;
  crossword: string;
  answer: string;
  category_name: string;
  title: string;
}

const quickClues = ref<Clue[]>([]);
const generalClues = ref<Clue[]>([]);
const crypticClues = ref<Clue[]>([]);
const dailyClues = ref<Clue[]>([]);
const easyClues = ref<Clue[]>([]);
const mediumClues = ref<Clue[]>([]);
const expertClues = ref<Clue[]>([]);
const errorMessage = ref('');

const { data: crosswords, error } = useAsyncData('crosswords', getCrosswords);

if (error.value) {
  errorMessage.value = 'Error fetching crosswords: ' + error.value.message;
} else if (crosswords.value && Array.isArray(crosswords.value)) {
  quickClues.value = crosswords.value.slice(0, 150);
  generalClues.value = crosswords.value.slice(150, 300);
  crypticClues.value = crosswords.value.slice(300, 450);
  dailyClues.value = crosswords.value.slice(450, 600);
  easyClues.value = crosswords.value.slice(600, 750);
  mediumClues.value = crosswords.value.slice(750, 900);
  expertClues.value = crosswords.value.slice(900, 1050);
} else {
  errorMessage.value = 'Crosswords data is not in the expected format.';
}

useHead({
  title: 'Fast & Free Crossword Puzzle Solutionss | Your Ultimate Puzzle Resource',
  meta: [
   { charset: 'utf-8' },
    {
      name: 'description',
      content: 'Solve crossword puzzles quickly with our online crossword solver. Find answers and solutions for any crossword clue with our free tool. Perfect for puzzle enthusiasts worldwide.',
    },
    {
      name: 'keywords',
      content: 'crossword puzzle answers, crossword solutions, NY Times crossword, LA Times crossword, USA Today crossword, puzzle-solving tips, crossword resources, Daily Themed crossword, Wall Street Journal crossword, Eugene Sheffer crossword, Thomas Joseph crossword, CodyCross, Universal crossword, Newsday crossword, 7 Little Words, Puzzle Page',
    },    
    {
      property: 'og:title',
      content: 'Free Crossword Puzzle Answers & Solutions | Your Ultimate Puzzle Resource',
    },
    {
      property: 'og:description',
      content: 'Find solutions for popular crosswords like NY Times, LA Times, USA Today, and more. Improve your puzzle-solving skills with our tips and resources.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://crosswordsolveronline.com',
    },   
    
    {
      name: 'canonical',
      content: 'crosswordsolveronline.com',
    },
  ],
  titleTemplate: 'Crossword Solver online | %s',
})

</script>

<template>
  <main class="container max-w-6xl mx-auto text-zinc-600">
    <MainHero />
    <MainDiscover />   
    <div class="grid grid-cols-1 sm:grid-cols-12 items-center">
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Today's Crossword Clues" :clues="generalClues" />
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Quick Crossword Clues" :clues="quickClues" />
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Daily Crossword Clues" :clues="dailyClues" />
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Popular Crossword Clues" :clues="easyClues" />
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Cryptic Crossword Clues" :clues="crypticClues" />
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Expert Crossword Clues" :clues="expertClues" />
      </div>    
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Easy Crossword Clues" :clues="mediumClues" />
      </div>
    </div>
 

 
   

    <div class="pb-3 px-4 border-b border-b dark:border-gray-800 border-b-gainsboro py-3">
      <h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-5 ">Top Features of Our Crossword Solver</h2>
      <ul >
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Crossword Solver: </strong> Find accurate solutions for any crossword clue.</li>
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Quick Crossword Solver:</strong> Get rapid answers for any clue.</li>
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Free Crossword Solver:</strong> Access all solutions without any cost.</li>
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Crossword Solver Enter Clue:</strong> Input your clue and find answers easily.</li>
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Wordplays Crossword Solver:</strong> Solve wordplays and puzzles efficiently.</li>
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Crossword Solver 5 Letters:</strong> Find answers specifically for 5-letter words.</li>
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Crossword Solver 6 Letters:</strong> Get solutions for 6-letter crossword answers.</li>
        <li class="text-sm lg:truncate  dark:text-gray-300 pb-1"><strong>Best Crossword Solver:</strong> Use the top tool for solving crosswords.</li>
      </ul>
    </div>
    <div class="pb-3 px-4 border-b border-b dark:border-gray-800 border-b-gainsboro py-3">
    <h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-3 ">Fast and Free Crossword Solver</h2>
    <p class="dark:text-zinc-300">At Crossword Solver Online, we offer a powerful tool to help you find answers to your crossword clues instantly. Whether you're stuck on a difficult clue or need quick solutions, our solver is here to help.</p>

    <h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-3">Solve Any Crossword Clue Instantly</h2>
<p class="dark:text-zinc-300">No more wasting hours on a single puzzle. Our solver provides fast and accurate answers to crossword clues, enhancing your puzzle-solving experience. Ideal for enthusiasts who enjoy solving crosswords from various sources, including the New York Times, LA Times, and more.</p>

<h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-3 ">Why Choose Our Crossword Solver?</h2>
<ul>
  <li class="text-sm lg:truncate  dark:text-gray-300 pb-1" ><strong>Extensive Database</strong>: Our solver searches through a vast database of words and phrases.</li>
  <li class="text-sm lg:truncate  dark:text-gray-300 pb-1" ><strong>User-Friendly Interface</strong>: Easy to use for beginners and experienced solvers alike.</li>
  <li class="text-sm lg:truncate  dark:text-gray-300 pb-1" ><strong>Global Access</strong>: Designed to assist users from all around the world.</li>
</ul>

<h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-5 ">Find Answers to Crossword Clues</h2>
<p class="dark:text-zinc-300">Simply enter your clue or known letters into our search bar and get instant results. Our crossword solver is designed to provide accurate answers quickly.</p>




<h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-3">How to Use Our Crossword Solver</h2>
<ol>
  <li class="text-sm lg:truncate  dark:text-gray-300 pb-1" >Enter the clue or known letters into the search bar.</li>
  <li class="text-sm lg:truncate  dark:text-gray-300 pb-1" >Click on the 'Solve' button.</li>
  <li class="text-sm lg:truncate  dark:text-gray-300 pb-1" >Get instant answers and enjoy solving your crossword puzzle.</li>
</ol>
</div>


 
  
  </main>
</template>
