// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  experimental: {
    viewTransition: true,
  },
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [{ name: 'theme-color', content: '#1F1F1D' }],
      htmlAttrs: {
        lang: 'it',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    './assets/css/tailwind.pcss',
    './assets/css/typography.css',
    './assets/css/app.pcss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxthq/studio',
  ],
  studio: {
    enabled: true,
  },
  content: {
    // documentDriven: true,
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
  ogImage: {
    defaults: {
      component: 'CustomOg',
    },
  },
})
