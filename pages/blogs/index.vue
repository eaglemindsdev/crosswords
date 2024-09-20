<script lang="ts" setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useAsyncData } from 'nuxt/app'
import { useHead } from '@vueuse/head'
import { getBlogs } from '@/api/service'

const elementPerPage = ref(1000)
const pageNumber = ref(1)
const searchTest = ref('')

// Fetch blogs and refresh the data
const { data: blogData, refresh } = await useAsyncData('blogData', () =>
  getBlogs(pageNumber.value, elementPerPage.value)
)

// Watch pageNumber to refresh when it changes
watch(pageNumber, async () => {
  await refresh()
})

// Format blog data and ensure recalculation after data change
const formattedData = computed(() => {
  return blogData.value?.data?.map((article) => {
    const formattedDate = article.updated_at
      ? new Date(article.updated_at).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'not-date-available';
    return {
      path: `/blogs/${article.slug || '/blogs/'}`,
      title: article.title || 'No title available',
      description: article.description_1 || 'No description available',
      image: article.image ? `https://img.crosswordsolveronline.com/${article.image}` : '/not-found.jpg',
      alt: article.title || 'No alt text available',
      ogImage: article.image ? `https://img.crosswordsolveronline.com/${article.image}` : '/not-found.jpg',
      date: formattedDate || 'No date available',
    };
  }) || [];
});

// Search and filter based on user input
const searchData = computed(() => {
  const lowerSearchTerm = searchTest.value.toLowerCase();
  return formattedData.value.filter((data) =>
    data.title.toLowerCase().includes(lowerSearchTerm)
  );
});

// Paginate the filtered data
const paginatedData = computed(() => {
  const startInd = (pageNumber.value - 1) * elementPerPage.value;
  const endInd = pageNumber.value * elementPerPage.value;
  return searchData.value.slice(0, 19);
});

// Calculate total pages from the API response
const totalPage = computed(() => {
  return Math.ceil(blogData.value?.total_results) || 1;
});

// Handle page navigation
function onPageChange(delta: number) {
  const newPageNumber = pageNumber.value + delta;
  if (newPageNumber >= 1 && newPageNumber <= totalPage.value) {
    pageNumber.value = newPageNumber;
  }
}

// Trigger watchEffect to ensure paginated data is recalculated properly when data changes
watch(blogData, () => {
  searchData.value; // Ensure paginated data is recalculated after data is fetched
})




const defaultOgImage = '/default.jpg';

// Set OG image
const ogImage = computed(() => {
  return formattedData.value[0]?.image || defaultOgImage;
});
useHead({
  title: 'Archive - Crossword Solver Online Blog',
  meta: [
    {
      name: 'description',
      content:
        'Explore our archive of crossword solver blogs. Find tips, tricks, and strategies to solve crosswords.',
    },
    {
      name: 'keywords',
      content:
        'crossword solver, crossword tips, crossword strategies, crossword blogs, crossword solutions, crossword puzzles',
    },
    { rel: 'canonical', href: useSiteConfig().url + '/blogs' }, // Canonical URL
  ],
});
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />
    <div class="px-6">
      <input
        v-model="searchTest"
        placeholder="Search"
        type="text"
        class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>

    <div class="space-y-5 my-5 px-4">
      <template v-if="paginatedData.length > 0">
        <ArchiveCard
          v-for="post in paginatedData"
          :key="post.path"
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
        />
      </template>
      <template v-else>
        <ArchiveCard title="No Post Found" description="no descriptions" image="/not-found.jpg" />
      </template>
    </div>

    <div class="flex justify-center items-center space-x-6">
      <button :disabled="pageNumber <= 1" @click="onPageChange(-1)">
        <Icon name="mdi:code-less-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }" />
      </button>
      <p>{{ pageNumber }} / {{ totalPage }}</p>
      <button :disabled="pageNumber >= totalPage" @click="onPageChange(1)">
        <Icon name="mdi:code-greater-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }" />
      </button>
    </div>
  </main>
</template>