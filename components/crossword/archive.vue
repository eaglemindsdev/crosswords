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
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300" />
      <h2 class="text-2xl font-semibold text-black dark:text-zinc-300">
        Grouped Puzzles for {{ categoryName }}
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
      <span>{{ page }} / {{ totalPages }}</span>
      <button :disabled="page === totalPages" class="ml-2 px-4 py-2 bg-gray-300 rounded-md" @click="changePage(page + 1)">
        Next
      </button>
    </div>
  </div>
</template>
