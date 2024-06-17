<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-12 items-start">
      <div class="m-5 col-span-12 lg:col-span-4">
        <MainSearch />
      </div>
      <div class="px-3 col-span-12 lg:col-span-8">
        <h1 class="text-black dark:text-zinc-300   font-semibold leading-tight text-2xl md:text-3xl my-5">
          {{ homePage.title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ homePage.description }}
        </p>

        <MainPuzzle />
      </div>
    </div>
  </div>
</template>
