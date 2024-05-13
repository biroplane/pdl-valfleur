// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
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
  css: ['./assets/css/app.pcss'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/devtools',
    'vue3-carousel-nuxt',
  ],

  routeRules: {
    '/': { isr: true, prerender: true },
  },
})
