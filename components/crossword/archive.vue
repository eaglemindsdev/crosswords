<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncData } from 'nuxt/app'
import { getDatelistsByCategorySlug } from '@/api/service'

const route = useRoute()

const category = computed(() => {
  const name = route.params.slug || ''
  return Array.isArray(name) ? name[0] : name
})

const categoryName = computed(() => slugToNormalWords(category.value))

const page = ref(1)
const limit = ref(10)

const { data, pending, error } = await useAsyncData(
  () => getDatelistsByCategorySlug(category.value, page.value, limit.value)
)

const puzzles = computed(() => {
  return data.value?.results.map((category: { updated_date: string }) => ({
    date: category.updated_date,
  })) || []
})

const totalPages = computed(() => data.value?.pagination.pageCount || 1)

async function changePage(newPage: number) {
  page.value = newPage
  await useAsyncData(
    () => getDatelistsByCategorySlug(category.value, page.value, limit.value),
    { key: `${category.value}-${page.value}` } // Use a unique key for cache invalidation
  )
}

function slugToNormalWords(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

useHead({
  title: `${categoryName.value} Crossword Answers`,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'description',
      content: `Find the latest ${categoryName.value} crossword answers online. Stay updated with daily puzzle answers and improve your crossword skills with our tips and resources.`,
    },
    {
      name: 'keywords',
      content: `${categoryName.value} crossword answers, ${categoryName.value} crossword solutions, daily crossword puzzles, puzzle-solving tips, crossword resources`,
    },
    {
      property: 'og:title',
      content: `${categoryName.value} Crossword Answers & Solutions | Your Ultimate Puzzle Resource`,
    },
    {
      property: 'og:description',
      content: `Find the latest ${categoryName.value} crossword answers and solutions. Stay updated with daily puzzle answers and improve your crossword skills with our tips and resources.`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `https://crosswordsolveronline.com/crossword-answers/${category.value}`,
    },
    {
      name: 'canonical',
      content: `https://crosswordsolveronline.com/crossword-answers/${category.value}`,
    },
  ],
  titleTemplate: '%s | Fast & Accurate Puzzle Solutions',
})
</script>

  <template>
    
    <div class="mt-3 px-3 col-span-12 lg:col-span-8">
      <div>
      <h1 class="text-black dark:text-zinc-300 font-bold leading-tight text-1xl md:text-2xl my-5">{{ categoryName }} Crossword Answers</h1>
      <p class="text-1xl dark:text-zinc-300">Get instant solutions to <strong>{{ categoryName }}</strong> crossword puzzles with our comprehensive solver.</p>
      <h2 class="text-black dark:text-zinc-300 font-bold leading-tight text-1xl md:text-2xl my-3">Quick and Accurate Solutions for {{ categoryName }} Crosswords</h2>
    <p class="text-1xl dark:text-zinc-300">Our solver offers precise answers for <strong>{{ categoryName }}</strong> crossword puzzles. Whether you’re solving puzzles from today's edition or past issues, our tool helps you find the correct answers quickly and effortlessly.</p>
      </div>
      <div class="border dark:border-gray-800 p-2 mt-2 rounded-md min-w-[200px] dark:bg-slate-900">
        
          <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
            <Icon name="mdi:star-three-points-outline" size="1em" class="text-black dark:text-zinc-300" />
            <h2 class="text-1xl font-bold text-black dark:text-zinc-300">
              Grouped {{ categoryName }} Crossword Puzzles by Date
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            <template v-for="post in puzzles" :key="post.date">
              <div class="lg:col-span-1 lg:ml-4">
                <CrosswordDatelist :date="post.date" :link="`${category}/${post.date}`" />
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

          <div class="flex justify-center mt-5">
            <button :disabled="page === 1" class="mr-2 px-4 py-2 bg-gray-300 rounded-md" @click="changePage(page - 1)">
              Previous
            </button>
            <span class="dark:text-zinc-300 py-2">{{ page }} / {{ totalPages }}</span>
            <button :disabled="page === totalPages" class="ml-2 px-4 py-2 bg-gray-300 rounded-md" @click="changePage(page + 1)">
              Next
            </button>
          </div>
        
      </div>
    </div>
    <div class="m-5 col-span-12 lg:col-span-4">
      <MainSearch />
      <MainSidebar />
    </div>  
  </template>
