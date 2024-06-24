<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <div class="py-5 dark:border-gray-800  mt-5 text-zinc-700 dark:text-zinc-300">
    <div class="px-6 container max-w-5xl mx-auto">
       <div class="grid grid-cols-1 md:grid-cols-1">
        <!-- <FooterSite v-if="path === 'about'" /> -->
        <!-- <FooterDeveloper v-else /> -->
        <FooterLink />
        <!-- <FooterConnect /> -->
      </div> 

      <div class="border-t dark:border-gray-800 mt-5 text-center p-2 text-xs">
        © 2020-2024 All Rights Reserved. Crossword Solver Online.
      </div>
    </div>
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
