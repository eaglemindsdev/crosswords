<script lang="ts" setup>
useHead({
  title: 'Free Crossword Puzzle Answers & Solutions | Your Ultimate Puzzle Resource',
  meta: [
    {
      name: 'description',
      content: 'Your number one source for solving all types of crossword puzzles. Find solutions for popular crosswords like NY Times, LA Times, USA Today, and more. Improve your puzzle-solving skills with our tips and resources.',
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

// Generate OG Image
// defineOgImageComponent('About', {
//   headline: 'Greetings 👋',
//   title: 'Crossword Solver Online',
//   description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
//   link: '/riyad.jpg',
// })
</script>

<template>
  <main class="container max-w-6xl mx-auto text-zinc-600">
    <MainHero />
    <MainDiscover />
    <!-- <MainTrending /> -->
  </main>
</template>
