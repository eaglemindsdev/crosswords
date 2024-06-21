<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useHead } from '@vueuse/head'

const props = defineProps({
  puzzles: Object, // Ensure you define the correct prop type
})

useHead({
  title: `Clue: ${props.puzzles?.crossword} | ${props.puzzles?.crossword} Crossword Answer | ${props.puzzles?.formattedDate}`,

  // Other SEO metadata as needed
})

const showAnswer = ref(false)

function revealAnswer() {
  showAnswer.value = true
}
</script>

<template>
  <div>
    <h1 class="text-xl md:text-2xl lg:text-2xl font-bold mb-4">
      {{ puzzles ? `${puzzles?.crossword} Crossword Clue` : 'Loading...' }}
    </h1>
    <p class="text-xs sm:text-sm my-3 mx-auto text-zinc-600 dark:text-zinc-400">
      Here is the answer for the crossword clue {{ puzzles?.crossword }} featured in {{ puzzles?.category_name }} puzzle on {{ puzzles?.formattedDate }}.
    </p>
    <p class="text-xs sm:text-sm my-3 mx-auto text-zinc-600 dark:text-zinc-400">
      We have found 40 possible answers for this clue in our database. Among them, one solution stands out with a 98% match which has a length of 5 letters. We think the likely answer to this clue is <span class="font-bold">{{ puzzles?.answer }}</span>.
    </p>
    <h2 class="text-xl md:text-2xl lg:text-2xl font-semibold">
      Crossword Answer:
    </h2>
    <a href="#all-related-clues-answer-by-date">{{ puzzles?.category_name }}, {{ puzzles?.formattedDateOne }}</a>
    <div class="p-4 rounded-lg mb-4">
      <div class="flex justify-between items-center border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
        <div class="flex space-x-2">
          <span v-for="(char, index) in puzzles?.answer.split('')" v-if="puzzles?.answer" :key="index" class="text-3xl dark:font-bold p-2 border border-gray-300">{{ showAnswer ? char : '?' }}</span>
          <span v-else class="text-3xl dark:font-bold p-2 border border-gray-300">{{ '?' }}</span>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600" @click="revealAnswer">
          Show
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Your component's scoped styles */
</style>
