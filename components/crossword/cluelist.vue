<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

interface Props {
  data: {
    id: number,
    clue_slug: string;
    crossword: string;
    
  }
}

withDefaults(defineProps<Props>(), {
  data: {
    clue_slug: 'No Name',
    crossword: 'No Date'

  }
});
</script>

<template>
  <NuxtLink :to="`/clue/${data.clue_slug}`">
    <div class="flex justify-start items-center border-b border-b-gainsboro py-3">
      <li class="text-sm lg:truncate hover:underline active:underline">{{ data.crossword }} Crossword Clue</li>
      
    </div>
  </NuxtLink>
</template>
