export default defineNuxtPlugin(() => {
  // nuxtApp.provide('seo', () => 'my function')

  return {
    provide: {
      seo: (title: string, description: string, image: string) => {
        useHead({
          title,
        })
        useSeoMeta({
          description,
          ogTitle: title,
          ogDescription: description,
          ogImage: image,
          twitterTitle: title,
          twitterDescription: description,
          twitterImage: image,
          twitterCard: 'summary',
          ogUrl: import.meta.env.BASE_URL,
        })
      },

    },
  }
})
