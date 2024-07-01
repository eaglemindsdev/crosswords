<template>
    <div class="category-list items-center border-b border-b dark:border-gray-800 border-b-gainsboro py-3">
      <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
      <ul>
        <li v-for="(clue, index) in visibleClues" :key="index" class="text-sm lg:truncate hover:underline active:underline dark:text-gray-300">
          <NuxtLink :to="`clue/${clue.clue_slug}`">{{ clue.crossword }}</NuxtLink>
        </li>
      </ul>
      <button v-if="!showAll" @click="showMore" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Show More
      </button>
      <button v-else @click="showLess" class="mt-4 bg-red-500 text-white py-2 px-4 rounded">
        Show Less
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  interface Clue {
    clue_slug: string;
    crossword: string;
    answer: string;
    category_name: string;
    title: string;
  }
  
  interface Props {
    title: string;
    clues: Clue[];
  }
  
  const props = defineProps<Props>();
  const visibleClues = ref<Clue[]>(props.clues.slice(0, 10));
  const showAll = ref(false);
  
  const showMore = () => {
    visibleClues.value = props.clues;
    showAll.value = true;
  };
  
  const showLess = () => {
    visibleClues.value = props.clues.slice(0, 10);
    showAll.value = false;
  };
  </script>
  
  <style scoped>
  .category-list {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  