// eslint-disable-next-line ts/explicit-function-return-type
export function useSeo({ title, description }: { title: string, description: string }) {
  defineOgImageComponent('CustomOg', {
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
