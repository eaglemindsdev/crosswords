<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const clue = ref('');
const router = useRouter();

const handleSubmit = () => {
  router.push({ path: `/clue/${encodeURIComponent(clue.value)}` });
};
</script>

<template>
  <section class="p-3 lg:my-2 border dark:border-gray-800 rounded-md min-w-[200px] dark:bg-slate-900" data-location="SearchBox">
    <h2 class="mb-5 text-xl leading-7 dark:text-zinc-300  lg:block">
      Search Crossword Answers
    </h2>
    <form @submit.prevent="handleSubmit">
      <label for="text-input_1" class="text-base mb-3 block text-zinc-300 ">Enter Clue</label>
      <div class="relative w-full">
        <input id="text-input_1" v-model="clue" class="border border-washed-black focus:border-bailey-bells focus:shadow-[0px_0px_0px_1px_#888AD3_inset] rounded p-2 w-full" type="text" placeholder="e.g. games" title="e.g. japanese farewell" data-event="Enter Clue">
        <div class="input-controls mr-3 absolute right-0 top-3">
          <span aria-label="search">
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.75,20.689425 L16.085925,15.02535 C18.9133336,11.6309352 18.5707781,6.61300919 15.3083015,3.63432866 C12.0458249,0.655648126 7.01751807,0.769911934 3.893715,3.893715 C0.769911934,7.01751807 0.655648126,12.0458249 3.63432866,15.3083015 C6.61300919,18.5707781 11.6309352,18.9133336 15.02535,16.085925 L20.689425,21.75 L21.75,20.689425 Z M3,9.75 C3,6.02207794 6.02207794,3 9.75,3 C13.4779221,3 16.5,6.02207794 16.5,9.75 C16.5,13.4779221 13.4779221,16.5 9.75,16.5 C6.02379137,16.4958667 3.00413335,13.4762086 3,9.75 Z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>
      <!-- <div class="mt-6">
            <p class="text-base mb-3 text-zinc-300">Select Length</p>
            <section class="mb-2 relative">
              Length buttons go here
            </section>
            <p class="text-sm text-seared-grey">For multiple-word answers, ignore spaces. E.g., YESNO (yes no), etc.</p>
          </div> -->
      <button type="submit" class="mt-6 px-6 py-3.5 w-full text-base font-bold text-white bg-purple-500 hover:bg-denim-blue rounded transition-colors">
        Find Answer
      </button>
    </form>
  </section>
</template>
