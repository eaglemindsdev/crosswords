<script>
import { getCategories } from '@/api/service';
export default {

  data() {
  return {
    puzzles: [],
    loading: true,
  };
},
async created() {
  try {
    const categories = await getCategories();
    const today = new Date().toISOString().split('T')[0];
    this.puzzles = categories.map(category => ({
      name: category.category_name,
      link: '/crossword-answers/'+category.slug,
      date: today, // Adjust according to the actual data structure
      dateLink: category.slug, // Adjust according to the actual data structure
    }));
  } catch (error) {
    console.error('Failed to load puzzles:', error);
  } finally {
    this.loading = false;
  }
},
};
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
</style>

<template>
  <div class="lg:col-span-3 sticky top-28 h-96  hidden lg:block  justify-self-end">
    <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 dark:text-gray-300 pb-2">
        Crossword Answers
      </h1>
      
      <NuxtLink
        v-for="link in puzzles" :key="link.id" :to="`${link.link}`"
        class="block text-xs mb-3 hover:underline dark:text-gray-300"
      >
        {{ link.name }}
      </NuxtLink>
      
    </div>
  </div>
</template>
