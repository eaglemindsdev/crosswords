<script setup lang="ts">

</script>

<template>
  <main class="container max-w-6xl mx-auto text-zinc-600">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-12 items-start">
        <div class="mt-5 px-3 col-span-12 lg:col-span-8">
          <div>
          <h1 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-5">Find Crossword Answers Online</h1>
          <p class="dark:text-zinc-300">Discover instant solutions to any crossword puzzle clue with our comprehensive solver.</p>
          <h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-1xl md:text-2xl my-3">Comprehensive Crossword Puzzle Solutions</h2>
          <p class="dark:text-zinc-300">Our solver offers accurate answers for puzzles from newspapers, magazines, and online platforms. Perfect for quick solutions or detailed answers, it helps you solve crossword puzzles effortlessly.</p>
          </div>
          <div class="border dark:border-gray-800 mt-2 rounded-md min-w-[200px] dark:bg-slate-900">
            <CrosswordPuzzle />
          </div>
        </div>
        <div class="m-5 col-span-12 lg:col-span-4">
          <MainSearch />
          <MainSidebar />
        </div>         
      </div>
    </div>
  </main>
</template>
