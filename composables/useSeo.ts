export function useSeo({ title, description }: { title: string, description: string }) {
  defineOgImageComponent('NuxtSeo', {
    title,
    description,
    theme: 'DE454F',
  })
  return useSeoMeta({
    title,
    description,
    ogDescription: description,
    twitterDescription: description,
    ogTitle: title,
    twitterTitle: title,

  })
}
