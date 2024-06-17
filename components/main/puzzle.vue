<script>
import { getFeaturedCategories } from '@/api/service'

export default {

  data() {
    return {
      puzzles: [],
      loading: true,
    }
  },
  async created() {
    try {
      const categories = await getFeaturedCategories()
      const today = new Date().toISOString().split('T')[0]
      this.puzzles = categories.map(category => ({
        name: category.category_name,
        link: `crossword-answers/${category.slug}`,
        date: today, // Adjust according to the actual data structure
        dateLink: category.slug, // Adjust according to the actual data structure
      }))
    }
    catch (error) {
      console.error('Failed to load puzzles:', error)
    }
    finally {
      this.loading = false
    }
  },
}
</script>

<template>
  <div class="w-full mt-3">
    <h2 class="text-[22px] leading-8 dark:text-zinc-300 lg:text-2xl lg:leading-8 lg:mb-3">
      Today’s Featured Puzzles
    </h2>
    <p class="dark:text-zinc-300">
      Stay updated with the latest puzzles and solutions. Find answers to today’s top crossword puzzles:
    </p>

    <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-2">
      <div class="lg:col-span-1">
        <div v-for="n in 9" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro dark:border-gray-800 py-3 animate-pulse">
          <div class="bg-gray-300 h-4 w-2/3 rounded" />
          <div class="bg-gray-300 h-4 w-1/4 rounded" />
        </div>
      </div>
      <div class="lg:col-span-1 lg:ml-4">
        <div v-for="n in 9" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro dark:border-gray-800 py-3 animate-pulse">
          <div class="bg-gray-300 h-4 w-2/3 rounded" />
          <div class="bg-gray-300 h-4 w-1/4 rounded" />
        </div>
      </div>
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-2">
      <div class="lg:col-span-1">
        <div v-for="(puzzle, index) in puzzles.slice(0, 5)" :key="index" class="flex justify-between gap-2 items-center border-b dark:border-gray-800 border-b-gainsboro py-3">
          <NuxtLink :to="puzzle.link">
            <ul>
              <li class="text-sm dark:text-zinc-300 lg:truncate hover:text-purple-800 active:underline">{{ puzzle.name }}</li>
            </ul>
          </NuxtLink>
          <NuxtLink :to="puzzle.link+'/'+puzzle.date">
            <ul>
              <li class="text-sm dark:text-zinc-300 lg:truncate hover:text-purple-800 active:underline">{{ puzzle.date }}</li>
            </ul>
          </NuxtLink>
        </div>
      </div>
      <div class="lg:col-span-1 lg:ml-4">
        <div v-for="(puzzle, index) in puzzles.slice(5, 10)" :key="index" class="flex justify-between gap-2 items-center border-b border-b-gainsboro dark:border-gray-800 py-3">
          <NuxtLink :to="puzzle.link">
            <ul>
              <li class="text-sm dark:text-zinc-300 lg:truncate hover:text-purple-800 active:underline">{{ puzzle.name }}</li>
            </ul>
          </NuxtLink>
          <NuxtLink :to="puzzle.link">
            <ul>
              <li class="whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 dark:text-zinc-300 hover:text-purple-700 active:underline">{{ puzzle.date }}</li>
            </ul>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


  <style scoped>
  /* Add your Tailwind CSS styles here */
  </style>
