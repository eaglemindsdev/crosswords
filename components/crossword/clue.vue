<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute, useHead } from 'nuxt/app'
import { useAsyncData } from 'nuxt/app'
import { getCrosswordCluesByCategorySlugAndDate } from '@/api/service'

const route = useRoute()

const category = computed(() => {
  const name = route.params.slug || ''
  return Array.isArray(name) ? name[0] : name
})

const date = route.params.date as string
const dateFormat = formatDate(date)

const categoryName = computed(() => slugToNormalWords(category.value))

const { data, pending, error } = await useAsyncData(
  () => getCrosswordCluesByCategorySlugAndDate(category.value, date),
  { key: `${category.value}-${date}` } // Use a unique key for cache invalidation
)

const puzzles = computed(() => {
  const results = data.value?.crosswordResults || []
  return results.map((result: { updated_time: string }) => ({
    ...result,
    formattedDate: formatDate(result.updated_time),
  }))
})

function slugToNormalWords(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

useHead({
  title: `${categoryName.value} Crossword Answers - ${dateFormat}`,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'description',
      content: `Find the complete answers for the ${categoryName.value} crossword puzzle for ${dateFormat}. Get hints, tips, and detailed solutions to help you solve today's puzzle.`,
    },
    {
      name: 'keywords',
      content: `${categoryName.value} crossword answers, ${dateFormat} crossword solutions, daily crossword puzzles, puzzle-solving tips, crossword resources, crossword puzzle help`,
    },
    {
      property: 'og:title',
      content: `${categoryName.value} Crossword Answers - ${dateFormat}`,
    },
    {
      property: 'og:description',
      content: `Find ${categoryName.value} crossword answers for ${dateFormat}. Solve today’s puzzle and explore crossword-solving tips and resources.`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `https://crosswordsolveronline.com/crossword-answers/${category.value}/${date}`,
    },
    {
      name: 'canonical',
      content: `https://crosswordsolveronline.com/crossword-answers/${category.value}/${date}`,
    },
  ],
  titleTemplate: '%s | Crossword Solver Online',
})

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}
</script>

<template>
  <div class="mt-5 px-3 col-span-12 lg:col-span-8">
    <h1 class="text-1xl font-semibold text-black dark:text-zinc-300">{{ categoryName }} Crossword Answers - {{ dateFormat }}</h1>
    <p class="dark:text-zinc-300 pb-3">Welcome to the complete answers for the {{ categoryName }} crossword puzzle for {{ dateFormat }}. Find all the solutions and hints to help you solve today's puzzle efficiently.</p>

  </div>
  <div class="m-5 col-span-12 lg:col-span-4">
      <MainSearch />
    </div>
  <div class="mt-5 px-3 col-span-12 lg:col-span-8">
    <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
      <div class="pb-10 px-4">
        <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
          <Icon name="mdi:star-three-points-outline" size="1.5em" class="text-black dark:text-zinc-300" />
          <h2 class="text-1xl font-semibold text-black dark:text-zinc-300">
            {{ categoryName }} puzzle clues {{ dateFormat }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <template v-for="post in puzzles" :key="post.date">
            <div class="lg:col-span-1 lg:ml-4">
              <CrosswordCluelist :data="post" />
            </div>
          </template>
        </div>

        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <div class="lg:col-span-1">
            <div v-for="n in 9" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse">
              <div class="bg-gray-300 h-4 w-2/3 rounded" />
              <div class="bg-gray-300 h-4 w-1/4 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-5 col-span-12 lg:col-span-4">
    <MainSidebar />
  </div>
 
</template>
