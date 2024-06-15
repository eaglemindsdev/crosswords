<script lang="ts" setup>
useHead({
  title: 'Free Crossword Puzzle Answers & Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Looking for crossword puzzle answers? Find solutions for popular crosswords like the NY Times, LA Times, USA Today, and more. Improve your puzzle-solving skills with our tips and resources.',
    },
  ],
  titleTemplate: 'Crossword Solver | %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Crossword Solve',
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/riyad.jpg',
})
</script>

<template>
  <main class="container max-w-6xl mx-auto text-zinc-600">
    <MainHero />
    <MainDiscover />
    <!-- <MainTrending /> -->
  </main>
</template>