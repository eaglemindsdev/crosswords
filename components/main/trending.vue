<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAsyncData } from 'nuxt/app'
import { useHead } from '@vueuse/head'
import { getBlogs } from '@/api/service'

const elementPerPage = ref(5)
const pageNumber = ref(2)
const searchTest = ref('')
const data = ref<any[]>([])



const { data: blogDataTrend, refresh } = await useAsyncData('blogDataTrend', () =>
  getBlogs(pageNumber.value, elementPerPage.value)
)

const formattedData = computed(() => {
  return blogDataTrend.value?.data?.map((articles) => ({
    path: '/blogs/'+articles.slug || 'gg',
    title: articles.title || 'no-title available',
    description: atob(articles.description_1) || 'no-description available',
    image: articles.image ? `https://www.crosswordsolveronline.com/${articles.image}` : '/not-found.jpg',
    alt: articles.title || 'no alter data available',
    ogImage: articles.image ? `https://www.crosswordsolveronline.com/${articles.image}` : '/not-found.jpg',
    date: articles.updated_at || 'not-date-available',
 
  })) || []
})
</script>

<template>
  <div class="px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300  " />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300  ">
        Trending Post
      </h2>
    </div>
    <div class="grid grid-cols-1 ">
      <template v-for="post in formattedData" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :tags="post.tags"
          
        />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
