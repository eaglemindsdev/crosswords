<template>
    <div class="category-list">
      <h2 class="dark:text-zinc-300 font-semibold text-2xl">{{ title }}</h2>
     
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ul>
          <li v-if="loading" v-for="n in 10" :key="n" class="skeleton-item mt-3 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></li>
          <li v-else v-for="(clue, index) in column1" :key="index" class="text-sm lg:truncate hover:underline active:underline dark:text-gray-300 mt-3">
            <NuxtLink :to="`/clue/${clue.clue_slug}`">{{ clue.crossword }}</NuxtLink>
          </li>
        </ul>
        <ul>
          <li v-if="loading" v-for="n in 10" :key="n" class="skeleton-item mt-3 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></li>
          <li v-else v-for="(clue, index) in column2" :key="index" class="text-sm lg:truncate hover:underline active:underline dark:text-gray-300 mt-3">
            <NuxtLink :to="`/clue/${clue.clue_slug}`">{{ clue.crossword }}</NuxtLink>
          </li>
        </ul>
        <ul>
          <li v-if="loading" v-for="n in 10" :key="n" class="skeleton-item mt-3 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></li>
          <li v-else v-for="(clue, index) in column3" :key="index" class="text-sm lg:truncate hover:underline active:underline dark:text-gray-300 mt-3">
            <NuxtLink :to="`/clue/${clue.clue_slug}`">{{ clue.crossword }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div v-if="props.clues.length > 30" class="button-container mt-4">
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
  
  const column1 = ref<Clue[]>([]);
  const column2 = ref<Clue[]>([]);
  const column3 = ref<Clue[]>([]);
  
  const updateVisibleClues = () => {
    visibleClues.value = showAll.value ? props.clues : props.clues.slice(0, 30);
    loading.value = false; // Set loading to false once data is updated
    splitIntoColumns();
  };
  
  const splitIntoColumns = () => {
    const col1 = [];
    const col2 = [];
    const col3 = [];
    
    visibleClues.value.forEach((clue, index) => {
      if (index % 3 === 0) {
        col1.push(clue);
      } else if (index % 3 === 1) {
        col2.push(clue);
      } else {
        col3.push(clue);
      }
    });
    
    column1.value = col1;
    column2.value = col2;
    column3.value = col3;
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
    max-width: 1200px;
    margin: 0 auto;
  }
  .skeleton-item {
    height: 1.5rem;
    background-color: #e0e0e0;
    border-radius: 4px;
    animation: skeleton-loading 1.5s infinite;
  }
  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
  </style>
  
  