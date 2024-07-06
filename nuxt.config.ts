import { defineNuxtConfig } from 'nuxt/config'
import generateSitemapEntries from './api/sitemap_categories'
import generateSitemapCategoryDateEntries from './api/sitemap/sitemap_category_datewise'
import { getMonthwiseClues } from './api/service'
import { generateSitemapEntriesForMonth, getLast10Months } from './api/sitemap/sitemap_month'

const last10Months = getLast10Months()

function monthUrl() {
  return last10Months.map(slug => ({
    path: `clue/posts-${slug}.xml`,
    urls: generateSitemapEntriesForMonth(slug),
  }))
}

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
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  sitemap: {
    hostname: 'https://www.crosswordsolveronline.com',
    gzip: true,
    exclude: ['/admin/**'],
    routes: async () => {
      const currentDate = new Date();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear();

      const categories = await getMonthwiseClues(`${month}`, `${year}`);
      console.log('Fetched categories:', categories); // Debugging log

      return categories.map(clue => ({
        url: `/clue/${clue.slug}`,
        lastmod: clue.updatedTime ? new Date(clue.updatedTime).toISOString() : new Date().toISOString(),
      }));
    },
    path: '/clue-posts-sitemap.xml',
    sitemaps: [
      {
        path: '/crossword-answer-categories.xml',
        urls: generateSitemapEntries,
        lastmod: new Date().toISOString(),
      },
      {
        path: '/crossword-answer-datewise.xml',
        urls: generateSitemapCategoryDateEntries,
        lastmod: new Date().toISOString(),
      },
      ...monthUrl().map(month => ({
        ...month,
        lastmod: new Date().toISOString(),
      })),
    ],
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
      routes: [],
    },
  },
  routeRules: {
    '/crossword-answers/**': { prerender: false },
    '/clue/**': { prerender: false },
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
  target: 'static',
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
