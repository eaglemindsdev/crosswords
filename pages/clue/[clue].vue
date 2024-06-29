<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { getClueAnswerBySlug, getCrosswordCluesByCategorySlugAndDate } from '@/api/service'


const route = useRoute()
const showAnswer = ref(false)

const category = computed(() => {
  const name = route.params.clue || ''
  return Array.isArray(name) ? name[0] : name
})

const { data: puzzles, pending: loading } = useAsyncData('puzzles', async () => {
  try {
    const response = await getClueAnswerBySlug(category.value)
    const puzzle = response[0] // Assuming the response structure
    puzzle.formattedDate = formatDate(puzzle.updated_time)
    puzzle.formattedDateOne = formatDateOne(puzzle.updated_time)
    return puzzle
  } catch (error) {
    console.error('Failed to load puzzles:', error)
    return null
  }
})

const puzzlesData = ref([])
const loadingData = ref(true)

watch(puzzles, async (newPuzzle) => {
  if (newPuzzle) {
    try {
      loadingData.value = true
      const response = await getCrosswordCluesByCategorySlugAndDate(newPuzzle.cat_slug, extractDate(newPuzzle.updated_time))
      puzzlesData.value = response.crosswordResults // Assuming the response structure
    } catch (error) {
      console.error('Failed to load puzzles data:', error)
      puzzlesData.value = []
    } finally {
      loadingData.value = false
    }
  }
}, { immediate: true })

useHead(computed(() => {
  if (!puzzles.value) return {}

  return {
    title: `${puzzles?.value?.crossword} Crossword Clue ${puzzles?.value ? puzzles.value.answer.length : 1} letters`,

    meta: [
      {
        name: 'description',
        content: `Discover the answer for the crossword clue '${puzzles.value.crossword}' featured in the ${puzzles.value.category_name} puzzle on ${puzzles.value.formattedDate}. Find the most likely solution and enhance your crossword-solving skills.`
      },
      {
        name: 'keywords',
        content: `${puzzles.value.crossword} clue, crossword clue ${puzzles.value.answer}, USA Today crossword ${puzzles.value.formattedDate}, crossword answers, puzzle-solving platform`
      },
      {
        property: 'og:title',
        content: `Clue: ${puzzles.value.crossword} | USA Today Crossword Answer | ${puzzles.value.formattedDate}`
      },
      {
        property: 'og:description',
        content: `Discover the crossword clue "${puzzles.value.crossword}" with answer "${puzzles.value.answer}" from the USA Today crossword dated ${puzzles.value.formattedDate}. Find crossword answers and solutions on our puzzle-solving platform.`
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: `https://crosswordsolveronline.com/clue/${route.params.clue}`, // Replace with actual URL
      },
      {
        name: 'canonical',
        content: `https://crosswordsolveronline.com/clue/${route.params.clue}`, // Replace with actual canonical URL
      },
    ],
    titleTemplate: '%s - Crossword Solver Online',
  }
}))

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

function formatDateOne(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)
  const [month, day, year] = formattedDate.split(' ')
  return `${month.toUpperCase()} / ${day.replace(',', '')} / ${year}`
}

function extractDate(dateString: string): string {
  const date = dateString ? new Date(dateString) : new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function slugToNormalWords(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const categoryName = computed(() => slugToNormalWords(category.value))

function revealAnswer() {
  showAnswer.value = true
}
</script>
<template>
  <main class="container max-w-6xl mx-auto">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-12 items-start">
        
        <div class="col-span-12 lg:col-span-8">
          <div class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">
            <div class="container mx-auto p-4">
              <div v-if="loading" class="skeleton-loader">
                <div class="skeleton h-8 w-3/4 mb-4" />
                <div class="skeleton h-4 w-full my-3" />
                <div class="skeleton h-4 w-full my-3" />
                <div class="skeleton h-4 w-full my-3" />
                <div class="skeleton h-4 w-full my-3" />
                <div class="skeleton h-6 w-full mb-2" />
                <div class="skeleton h-6 w-1/2 mb-2" />
                <div class="skeleton h-4 w-1/3 mb-4" />
                <div class="flex justify-between items-center border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
                  <div class="flex space-x-2">
                    <div v-for="n in 5" :key="n" class="skeleton h-12 w-12" />
                  </div>
                  <div class="skeleton h-10 w-24" />
                </div>
              </div>
              <div v-else>
                <h1 class="text-xl md:text-2xl lg:text-2xl font-bold mb-4">
                  {{ puzzles ? `${puzzles.crossword} Crossword Clue` : 'Loading...' }}
                </h1>
                <p class="text-sm sm:text-sm my-3 mx-auto text-zinc-600 dark:text-zinc-400">
                  Here’s the solution for the crossword clue {{ puzzles?.crossword }} featured in the {{ puzzles?.category_name }} puzzle on {{ puzzles?.formattedDate }}.
                </p>
                <p class="text-sm sm:text-sm my-3 mx-auto text-zinc-600 dark:text-zinc-400">
                  We have found possible answers for this clue in our database, with the most likely answer being '{{ puzzles?.answer }}', which is a {{puzzles?.answer.length}}-letter word with a 98% match. which has a length of {{puzzles?.answer.length}} letters.
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
            </div>
          </div>
          <section id="all-related-clues-answer-by-date">
                <div class="p-3 border dark:border-gray-800 rounded-md  dark:bg-slate-900">
                  <div class="px-2 flex flex-row items-start space-y-1 space-x-2">
                    <Icon name="mdi:star-three-points-outline" size="1.5em" class="text-black dark:text-zinc-300 mt-1" />
                    <h2 class="text-1xl font-semibold text-black dark:text-zinc-300">
                      Clue {{ puzzles?.category_name }} puzzle on {{ puzzles?.formattedDate }}
                    </h2>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    <template v-for="post in puzzlesData" :key="post.id">
                      <div class="lg:ml-4">
                        <CrosswordCluelist :data="post" />
                      </div>
                    </template>
                  </div>
                  <div v-if="loadingData" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    <div class="lg:col-span-1">
                      <div v-for="n in 25" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse">
                        <div class="bg-gray-300 h-5 w-2/4 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        </div>
        <div class="m-5 col-span-12 lg:col-span-4">
          <MainSearch />
          <MainSidebar />
        </div>   
        
      </div>
    </div>
  </main>
</template>

<style scoped>
.skeleton {
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
}
.skeleton-loader .skeleton {
  border-radius: 4px;
  margin-bottom: 10px;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
