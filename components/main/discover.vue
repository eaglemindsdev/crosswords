<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'
import { ref } from 'vue'
import { getCategories } from '@/api/service'

const { data: categories, pending, error } = await useAsyncData('categories', getCategories)

const puzzles = ref([])

const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
const dayBeforeYesterday = new Date(today)
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2)

function getDateBasedOnIndex(index: number): string {
  switch (index % 3) {
    case 0:
      return yesterday.toISOString().split('T')[0]
    case 1:
      return dayBeforeYesterday.toISOString().split('T')[0]
    case 2:
      return dayBeforeYesterday.toISOString().split('T')[0]
    default:
      return today.toISOString().split('T')[0]
  }
}

if (categories.value) {
  const sortedCategories = [...categories.value].sort((a, b) => {
    const dateA = new Date(a.publish_date)
    const dateB = new Date(b.publish_date)
    return dateB.getTime() - dateA.getTime() // Newest first
  })

  puzzles.value = sortedCategories.map((category, index) => ({
    name: category.category_name,
    link: `crossword-answers/${category.slug}`,
    date: getDateBasedOnIndex(index),
    dateLink: category.slug,
  }))
}
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300  " />
      <h2 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-5 ">
        Find More Puzzles
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="post in puzzles" :key="post.name">
        <div class="lg:col-span-1 lg:ml-4">
          <HomePuzzlelist
            :name="post.name"
            :link="post.link"
            :date="post.date"
            :date-link="post.dateLink"
          />
        </div>
      </template>
    </div>
    <div v-if="pending" class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
      <div class="lg:col-span-1">
        <div v-for="n in 9" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse">
          <div class="bg-gray-300 h-4 w-2/3 rounded" />
          <div class="bg-gray-300 h-4 w-1/4 rounded" />
        </div>
      </div>
      <div class="lg:col-span-1 lg:ml-4">
        <div v-for="n in 9" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse">
          <div class="bg-gray-300 h-4 w-2/3 rounded" />
          <div class="bg-gray-300 h-4 w-1/4 rounded" />
        </div>
      </div>
      <div class="lg:col-span-1 lg:ml-4">
        <div v-for="n in 9" :key="n" class="flex justify-between gap-2 items-center border-b border-b-gainsboro py-3 animate-pulse">
          <div class="bg-gray-300 h-4 w-2/3 rounded" />
          <div class="bg-gray-300 h-4 w-1/4 rounded" />
        </div>
      </div>
    </div>
  </div>
</template>
