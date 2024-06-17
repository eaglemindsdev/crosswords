import { defineNuxtConfig } from 'nuxt/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

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
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://blog.nurriyad.xyz',
    identity: {
      type: 'Person',
    },
    twitter: '@qdnvubp',
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
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  build: {
    analyze: true, // Enable bundle analyzer
    extend(config, { isDev, isClient }) {
      if (!isDev && isClient) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './bundle-report.html',
            openAnalyzer: false
          })
        );
      }
    }
  },

  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
        },
      },
    },
  },

  hooks: {
    'build:before'(builder) {
      if (process.env.NODE_ENV === 'production') {
        const { default: PurgeCSS } = require('@fullhuman/postcss-purgecss')
        builder.options.build.postcss.plugins.push(
          PurgeCSS({
            content: [
              'components/**/*.vue',
              'layouts/**/*.vue',
              'pages/**/*.vue',
              'plugins/**/*.js',
              'nuxt.config.js',
            ],
            safelist: ['html', 'body'],
          })
        )
      }
    },
  },
})
