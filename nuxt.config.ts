// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  compatibilityDate: '2024-08-14',
  ssr: true,
  nitro: {
    // static: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  devtools: { enabled: true },
  css: ['./assets/css/typography.css', './assets/css/app.pcss'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/devtools',
    'vue3-carousel-nuxt',
    '@nuxt/content',
    '@nuxthq/studio',
  ],
  content: {
    documentDriven: true,
    experimental: {
      search: {
        indexed: true,
      },
    },
  },

  routeRules: {
    '/': { isr: true, prerender: true },
  },
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },

})
