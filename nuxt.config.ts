// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    './assets/css/typography.css',
    './assets/css/app.pcss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxt/image',
  ],
  content: {
    documentDriven: true,
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  site: {
    url: 'https://valfleur.it',
    name: 'Valfleur garden',
  },
})