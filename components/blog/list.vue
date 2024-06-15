<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>

    <NuxtLink :to="path">
     
        <div class="flex justify-between gap-2 items-center border-b border-b-gainsboro py-3">
         <a  class="text-sm lg:truncate hover:underline active:underline">{{title}}</a>
         <a  class="whitespace-nowrap place-self-start text-cws-gray-900 text-sm/7 text-nowrap hover:underline active:underline">{{date}}</a>
       </div>
    </NuxtLink>
 
</template>
