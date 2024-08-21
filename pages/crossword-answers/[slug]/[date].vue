<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const category = computed(() => {
  const name = route.params.slug || ''
  return Array.isArray(name) ? name[0] : name
})

const date = route.params.date as string
</script>

<template>
  <main class="container max-w-6xl mx-auto text-zinc-600">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-12 items-start">
        
            <CrosswordClue />
         
        
      </div>
    </div>
  </main>
</template>
