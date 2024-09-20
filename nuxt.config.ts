import { defineNuxtConfig } from 'nuxt/config'
import { getSitemaps } from './api/service'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Crossword Solver Online',
      titleTemplate: '%s | Crossword Solver Online',
      meta: [
        {
          name: 'description',
          content: 'Solve crossword puzzles quickly with our online crossword solver. Find answers and solutions for any crossword clue with our free tool. Perfect for puzzle enthusiasts worldwide.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://www.crosswordsolveronline.com/favicon.ico' }
      ],
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9567878898298626',
          async: true,
          crossorigin: 'anonymous',
        },
      ],
     
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  // sitemap: {
  //   strictNuxtContentPaths: true,
  // },
  sitemap: {
    hostname: 'https://www.crosswordsolveronline.com',  // Replace with your actual domain
    gzip: true,  // Compress the sitemap
    routes: async () => {
      try {
      // Use the Nuxt 3 useAsyncData hook to fetch blog data
      const { data: articles } = await useAsyncData('blogs', () => getSitemaps());
      console.log('Articles:', articles.value);

      // Map the data to the required route format
      return articles.value.map((article: { slug: string }) => `/blogs/${article.slug}`);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      return []; // Return an empty array on error
    }
    },
    path: '/sitemap.xml',  // The path to the sitemap file
    exclude: [],  // Exclude routes if necessary
  },
  site: {
    url: 'https://www.crosswordsolveronline.com',
  },
  typescript: {
    strict: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [       
      ],
    },
  },
  routeRules: {
    '/crossword-answers/**': { prerender: false },
    '/clue/**': { prerender: false },
    '/blogs/**': { prerender: false },
  },
 
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
 
  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
  ],
  content: {
    highlight: {
      theme: 'night-owl',
    },
  },
})
