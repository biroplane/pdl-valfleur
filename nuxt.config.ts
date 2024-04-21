// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    static: true,
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
  image: {

    // provider: process.env.NODE_ENV === 'development' ? '' : 'ipx',
    // providers: ['netlify', 'ipx'],
  },
  routeRules: {
    '/': { isr: true, prerender: true },
  },
})
