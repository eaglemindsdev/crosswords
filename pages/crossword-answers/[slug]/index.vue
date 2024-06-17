<script setup lang="ts">

</script>

<template>
  <main class="container max-w-6xl mx-auto text-zinc-600">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-12 items-start">
        <div class="mt-5 px-3 col-span-12 lg:col-span-8">
          <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
            <CrosswordArchive />
          </div>
        </div>
        <div class="m-5 col-span-12 lg:col-span-4">
          <MainSidebar />
        </div>
      </div>
    </div>
  </main>
</template>
