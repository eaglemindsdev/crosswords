<template>
    <div class="category-list">
      <h2 class="dark:text-zinc-300 font-semibold text-2xl">{{ title }}</h2>
      <ul>
        <li v-if="loading" v-for="n in 10" :key="n" class="skeleton-item mt-3 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></li>
        <li v-else v-for="(clue, index) in visibleClues" :key="index" class="text-sm lg:truncate hover:underline active:underline dark:text-gray-300 mt-3">
          <NuxtLink :to="`/clue/${clue.clue_slug}`">{{ clue.crossword }}</NuxtLink>
        </li>
      </ul>
      <div v-if="props.clues.length > 10" class="button-container mt-4">
        <button v-if="!showAll" @click="showMore" class="bg-gray-100 dark:text-black text-black py-2 px-4 rounded">
          Show More
        </button>
        <button v-else @click="showLess" class="bg-red-500 text-white py-2 px-4 rounded">
          Show Less
        </button>
      </div>
    </div>
  </template>
  
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue';
  
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
  const visibleClues = ref<Clue[]>([]);
  const showAll = ref(false);
  const loading = ref(true);
  
  const updateVisibleClues = () => {
    visibleClues.value = showAll.value ? props.clues : props.clues.slice(0, 10);
    loading.value = false; // Set loading to false once data is updated
  };
  
  // Watch for changes in the props.clues array to handle dynamic updates
  watch(() => props.clues, updateVisibleClues, { immediate: true });
  
  const showMore = () => {
    showAll.value = true;
    updateVisibleClues();
  };
  
  const showLess = () => {
    showAll.value = false;
    updateVisibleClues();
  };
  </script>
  
  
  <style scoped>
  .category-list {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  