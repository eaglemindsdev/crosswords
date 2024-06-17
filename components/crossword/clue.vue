<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCrosswordCluesByCategorySlugAndDate } from '@/api/service'

const route = useRoute()

const category = computed(() => {
  const name = route.params.slug || ''
  return Array.isArray(name) ? name[0] : name
})

const date = route.params.date as string

const dateFormat = formatDate(date);

const categoryName = computed(() => {
  return slugToNormalWords(category.value)
})

const puzzles = ref<any[]>([])
const loading = ref(true)

async function fetchPuzzles() {
  loading.value = false
  try {
    const response = await getCrosswordCluesByCategorySlugAndDate(category.value, date)
   // console.log(response)
    puzzles.value = response.crosswordResults // Assuming the response structure
    puzzles.value.formattedDate = formatDate(puzzles.value.updated_time)
  }
  catch (error) {
    console.error('Failed to load puzzles:', error);
  }
  finally {
    loading.value = false
  }
}

onMounted(fetchPuzzles)

function slugToNormalWords(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
useHead({
  title: categoryName.value+' Crossword Answers - '+dateFormat ,
  meta: [
    {
      name: 'description',
      content: 'Find '+categoryName.value+' crossword answers for '+dateFormat+'. Solve today’s puzzle and explore crossword-solving tips and resources.',
    },
    {
      name: 'keywords',
      content: categoryName.value+' crossword answers, '+dateFormat+', crossword solutions, daily crossword puzzles, puzzle-solving tips, crossword resources',
    },
    {
      property: 'og:title',
      content: categoryName.value+' Crossword Answers - '+dateFormat,
    },
    {
      property: 'og:description',
      content: 'Find '+categoryName.value+' crossword answers for '+dateFormat+'. Solve today’s puzzle and explore crossword-solving tips and resources.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://yourwebsite.com/crossword-answers/'+category.value+'/'+date,
    },
    {
      property: 'og:image',
      content: 'https://yourwebsite.com/images/usa-today-2024-06-15-og-image.jpg',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: categoryName.value+' Crossword Answers - '+dateFormat+' | Crossword Solver',
    },
    {
      name: 'twitter:description',
      content: 'Find '+categoryName.value+' crossword answers for '+dateFormat+'. Solve today’s puzzle and explore crossword-solving tips and resources.',
    },
    {
      name: 'twitter:image',
      content: 'https://yourwebsite.com/images/usa-today-2024-06-15-twitter-image.jpg',
    },
    {
      name: 'canonical',
      content: 'https://yourwebsite.com/crossword-answers/'+category.value+'/'+date,
    }
  ],
  titleTemplate: 'Crossword Solver Online | %s',
})

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="1.5em" class="text-black dark:text-zinc-300" />
      <h2 class="text-2xl font-semibold text-black dark:text-zinc-300">
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

    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <div class="lg:col-span-1">
        <div v-for="n in 9" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse">
          <div class="bg-gray-300 h-4 w-2/3 rounded" />
          <div class="bg-gray-300 h-4 w-1/4 rounded" />
        </div>
      </div>
    </div>
  </div>
</template>
