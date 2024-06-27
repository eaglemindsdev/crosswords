<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAsyncData } from 'nuxt/app'
import { getCategories } from '@/api/service'

const { data: categories, pending, error } = await useAsyncData('categories', getCategories)

const puzzles = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return categories.value?.map(category => ({
    name: category.category_name,
    link: `/crossword-answers/${category.slug}`,
    date: today, // Adjust according to the actual data structure
    dateLink: category.slug, // Adjust according to the actual data structure
  })) || []
})
</script>

<template>
  <div class="lg:col-span-3 sticky top-28  lg:block  justify-self-end">
    <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 dark:text-gray-300 pb-2">
        Crossword Answers
      </h1>

      <NuxtLink
        v-for="link in puzzles" :key="link.id" :to="`${link.link}`"
        class="block text-sm mb-3 hover:underline dark:text-gray-300"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Add your Tailwind CSS styles here */
</style>
