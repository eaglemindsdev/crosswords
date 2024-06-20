import { defineNuxtConfig } from 'nuxt/config';
import generateSitemapEntries from './api/sitemap_categories';
import generateSitemapCategoryDateEntries from './api/sitemap/sitemap_category_datewise';

import { getLast10Months, generateSitemapEntriesForMonth } from './api/sitemap/sitemap_month'; // Adjust path as per your project structure

const last10Months = getLast10Months();

const monthUrl = () =>
last10Months.map(slug => ({
  
    path: `clue/posts-${slug}.xml`, // Path for dynamic sitemap
    urls: generateSitemapEntriesForMonth(slug),
  
}));
// Define the structure of the sitemap routes
interface SitemapRoute {
  url: string;
  changefreq: string;
  priority: number;
}

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Crossword Solver',
      titleTemplate: '%s | Crossword Solver',
      meta: [{ name: 'description', content: 'Website' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    path: '/sitemap.xml', // Main sitemap path (optional)
    hostname: 'http://localhost:3000', // Your website URL
    gzip: true, // Enable gzip compression for the generated sitemap.xml
    exclude: ['/admin/**'], // Optional: Array of URLs to exclude from the sitemap
    routes: async (): Promise<SitemapRoute[]> => {
      let routes: SitemapRoute[] = [];

      // Example: Define main routes
      routes.push(
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 }
      );

      return routes;
    },
    sitemaps: {  
      
      
      'crossword-answer-categories': {
        path: '/crossword-answer-categories.xml',       
        urls: generateSitemapEntries,
      },
      'crossword-answer-datewise': {
        path: '/crossword-answer-datewise.xml',       
        urls: generateSitemapCategoryDateEntries,
      },      
      ...monthUrl(),
      
      
     
      // Generate sitemap configuration for each of the last 10 months
   
    
      
    },

   
  },
  site: {
    url: 'https://c139f532.crosswords-ai8.pages.dev',
    
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
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
      theme: 'dracula',
    },
  },
});
