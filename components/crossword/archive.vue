<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getDatelistsByCategorySlug } from '@/api/service'

const route = useRoute()

const category = computed(() => {
  const name = route.params.slug || ''
  return Array.isArray(name) ? name[0] : name
})

const categoryName = computed(() => {
  return slugToNormalWords(category.value)
})

const puzzles = ref<any[]>([])
const loading = ref(true)
const page = ref(1)
const limit = ref(10)
const totalPages = ref(1)

async function fetchPuzzles() {
  loading.value = true
  try {
    const data = await getDatelistsByCategorySlug(category.value, page.value, limit.value)
    puzzles.value = data.results.map((category: { updated_date: string }) => ({
      date: category.updated_date,
    }))
    totalPages.value = data.pagination.pageCount
  }
  catch (error) {
    console.error('Failed to load puzzles:', error)
  }
  finally {
    loading.value = false
  }
}

onMounted(fetchPuzzles)

async function changePage(newPage: number) {
  page.value = newPage
  await fetchPuzzles()
}

function slugToNormalWords(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

useHead({
  title: `${categoryName.value} Crossword Answers `,
  meta: [
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
    <div class="m-5 col-span-12 lg:col-span-4">
      <MainSearch />
    </div>
    <div class="mt-3 px-3 col-span-12 lg:col-span-8">
      <h1 class="text-black dark:text-zinc-300 font-bold leading-tight text-1xl md:text-2xl my-5">{{ categoryName }} Crossword Answers</h1>
      <p class="text-1xl dark:text-zinc-300">Get instant solutions to <strong>{{ categoryName }}</strong> crossword puzzles with our comprehensive solver.</p>
      <h2 class="text-black dark:text-zinc-300 font-bold leading-tight text-1xl md:text-2xl my-3">Quick and Accurate Solutions for {{ categoryName }} Crosswords</h2>
    <p class="text-1xl dark:text-zinc-300">Our solver offers precise answers for <strong>{{ categoryName }}</strong> crossword puzzles. Whether you’re solving puzzles from today's edition or past issues, our tool helps you find the correct answers quickly and effortlessly.</p>
     
    </div>
    
    <div class="mt-5 px-3 col-span-12 lg:col-span-8">
      <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
        <div class="pb-5 px-2">
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

          <div v-if="loading" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
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
    </div>
    <div class="m-5 col-span-12 lg:col-span-4">
      <MainSidebar />
    </div>

    <!-- <div class="mt-3 px-3 col-span-12 lg:col-span-12">
      <p class="text-1xl dark:text-zinc-300 pb-3"> Our free crossword solver is ideal for enthusiasts seeking fast, accurate crossword answers. Use our tool for quick solutions and to enhance your puzzle-solving experience.</p>

<h2 class="text-1xl font-bold text-black dark:text-zinc-300">FAQ</h2>
<h3 class="text-black dark:text-zinc-300 font-semibold leading-tight">What is the {{ categoryName }}?</h3>
<p class="dark:text-zinc-300 pb-3">The {{ categoryName }} is a smaller, quicker version of the traditional crossword puzzle, often found in newspapers like the New York Times and USA Today.</p>

<h3 class="text-black dark:text-zinc-300 font-semibold leading-tight">Is {{ categoryName }} Crossword free?</h3>
<p class="dark:text-zinc-300 pb-3">Yes, the {{ categoryName }} Crossword offers a free version that users can enjoy, though there might be in-app purchases or ads.</p>

<h3 class="text-black dark:text-zinc-300 font-semibold leading-tight">How often is the {{ categoryName }} crossword?</h3>
<p class="dark:text-zinc-300 pb-3">The {{ categoryName }} crossword is typically available daily, providing a quick and engaging puzzle experience every day.</p>

<h3 class="text-black dark:text-zinc-300 font-semibold leading-tight">How to play {{ categoryName }} crossword?</h3>
<p class="dark:text-zinc-300 pb-3">To play the {{ categoryName }} crossword, simply read the clues and fill in the answers in the corresponding boxes. It's a shorter version of the regular crossword, designed for quick play.</p>
     
    </div> -->
  
  </template>
