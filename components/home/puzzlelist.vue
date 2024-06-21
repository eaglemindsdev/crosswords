<script lang="ts" setup>
interface Props {
  name: string
  link: string
  date: string
  dateLink: string
}

withDefaults(defineProps<Props>(), {
  name: '/',
  link: 'no-title',
  date: 'no-date',
  dateLink: 'no-description',

})
</script>

<template>
  <div class="flex justify-between gap-2 items-center border-b border-b dark:border-gray-800 border-b-gainsboro py-3">
    <NuxtLink :to="`${link}`">
      <ul>
        <li class="text-sm lg:truncate hover:underline active:underline dark:text-gray-300">
          {{ name }}
        </li>
      </ul>
    </NuxtLink>
    <NuxtLink :to="`${link}/${date}`">
      <ul>
        <li class="whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 text-nowrap dark:text-gray-300 hover:underline active:underline">
          {{ date }}
        </li>
      </ul>
    </NuxtLink>
  </div>
</template>
