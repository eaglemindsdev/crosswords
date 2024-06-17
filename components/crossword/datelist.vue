<script lang="ts" setup>
interface Props {
  link: string
  date: string

}

withDefaults(defineProps<Props>(), {
  link: 'default',
  date: 'no-date',

})
</script>

<template>
  <NuxtLink :to="link">
    <div class="flex justify-center items-center border-b border-b-gainsboro  border-b dark:border-gray-800 py-3 dark:text-gray-300">
      <li class="whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 text-nowrap hover:underline active:underline">{{ date }}</li>
    </div>
  </NuxtLink>
</template>
