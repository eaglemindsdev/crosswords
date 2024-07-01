<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { getCrosswords } from '@/api/service';
import { useAsyncData } from 'nuxt/app';

interface Clue {
  clue_slug: string;
  crossword: string;
  answer: string;
  category_name: string;
  title: string;
}

const quickClues = ref<Clue[]>([]);
const generalClues = ref<Clue[]>([]);
const crypticClues = ref<Clue[]>([]);
const dailyClues = ref<Clue[]>([]);
const easyClues = ref<Clue[]>([]);
const mediumClues = ref<Clue[]>([]);
const expertClues = ref<Clue[]>([]);
const errorMessage = ref('');
const loading = ref(true);

const { data: crosswords, pending, error } = await useAsyncData('crosswords', getCrosswords);

watchEffect(() => {
  if (pending.value) {
    loading.value = true;
  } else if (error.value) {
    errorMessage.value = 'Error fetching crosswords: ' + error.value.message;
    loading.value = false;
  } else if (crosswords.value && Array.isArray(crosswords.value)) {
    quickClues.value = crosswords.value.slice(0, 150);
    generalClues.value = crosswords.value.slice(150, 300);
    crypticClues.value = crosswords.value.slice(300, 450);
    dailyClues.value = crosswords.value.slice(450, 600);
    easyClues.value = crosswords.value.slice(600, 750);
    mediumClues.value = crosswords.value.slice(750, 900);
    expertClues.value = crosswords.value.slice(900, 1050);
    loading.value = false;
  } else {
    errorMessage.value = 'Crosswords data is not in the expected format.';
    loading.value = false;
  }
});
</script>


<template>
    <div class="grid grid-cols-1 sm:grid-cols-12 items-center">
      <div class="m-5 col-span-12 lg:col-span-12">
      <HomeToday title="Today's Crossword Clues" :clues="generalClues" />
      </div>
      <div class="m-5 col-span-12 lg:col-span-12">
        <HomeToday title="Popular Crossword Clues" :clues="quickClues" />
        
      </div>
    </div>
 
    <div class="grid grid-cols-1 sm:grid-cols-12 items-center">
      
     
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory title="Daily Crossword Clues" :clues="dailyClues" />
        
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory  title="Popular Crossword Clues" :clues="easyClues" />
        
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory  title="Cryptic Crossword Clues" :clues="crypticClues" />
        
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory  title="Expert Crossword Clues" :clues="expertClues" />
       
      </div>
      <div class="m-5 col-span-12 lg:col-span-4">
        <HomeCategory  title="Easy Crossword Clues" :clues="mediumClues" />
        
      </div>
    </div>

</template>
