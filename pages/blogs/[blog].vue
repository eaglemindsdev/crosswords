<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAsyncData } from 'nuxt/app';
import { getBlog } from '@/api/service';
import type { BlogPost } from '@/types/blog';

// Get route and path
const route = useRoute();
const router = useRouter();
const path = route.params.blog;

// Fetch blog data
const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => getBlog(path));

if (error.value) {
  router.push('/404');
}

// Compute the blog data
const data = computed<BlogPost>(() => ({
  title: articles.value?.title || 'No title available',
  description: articles.value?.description_1 || 'No description available',
  image: `https://img.crosswordsolveronline.com/${articles.value?.image}` || '/not-found.jpg',
  alt: articles.value?.title || 'No alt text available',
  
  date: articles.value?.updated_at || 'No date available',
  
  published: articles.value?.status || false,
}));

// Table of Contents (TOC) logic
const links = ref<{ id: string; text: string }[]>([]);

const generateTOC = () => {
  const content = document.querySelector('.prose');
 // console.log(content);
  if (!content) return;

  const headers = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headers.forEach((header, index) => {
    const id = `toc-header-${index}`;
    header.id = id;
    links.value.push({
      id,
      text: header.textContent || '',
    });
  });
};

// Generate TOC on component mount
onMounted(() => {
  generateTOC();
});

function stripHtmlTags(htmlString) {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}

useHead({
  title: data.value.title || '',
  meta: [
    
    {
      name: 'description',
      content: stripHtmlTags(data.value.description),
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    // { property: 'og:site_name', content: data.value.title },
    // { hid: 'og:type', property: 'og:type', content: 'website' },
    // {
    //   property: 'og:url',
    //   content: `${path}`,
    // },
    // {
    //   property: 'og:title',
    //   content: data.value.title,
    // },
  
    // {
    //   property: 'og:image',
    //   content: data.value.image,
    // },
    // // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    // { name: 'twitter:site', content: '@qdnvubp' },
    // { name: 'twitter:card', content: 'summary_large_image' },
    // {
    //   name: 'twitter:url',
    //   content: `${seoData.mySite}/${path}`,
    // },
    // {
    //   name: 'twitter:title',
    //   content: data.value.title,
    // },
    // {
    //   name: 'twitter:description',
    //   content: data.value.description,
    // },
    // {
    //   name: 'twitter:image',
    //   content: data.value.ogImage || data.value.image,
    // },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${path}`,
    },
  ],
})



</script>
<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :date="data.date"
        
        :tags="data.tags"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
       <ContentRenderer v-if="data" :value="data">
        <p v-html="data.description"></p>
         
        </ContentRenderer> 
      </div>
    </div>
    <div class="lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end">
      <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
        <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">Table Of Content</h1>
        <NuxtLink
          v-for="link in links" :key="link.id" :to="`#${link.id}`"
          class="block text-xs mb-3 hover:underline"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
     <!-- <BlogToc />  -->

    <div class="flex flex-row  flex-wrap md:flex-nowrap mt-10 gap-2">
      <!-- <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :network="network"
        :styled="true"
        :label="true"
        class="p-1"
        aria-label="Share with {network}"
      /> -->
    </div>
  </div>
</template>