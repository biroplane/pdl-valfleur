<script setup lang="ts">
const route = useRoute()
const { data: category } = await useAsyncData(route.params.slug as string, () => queryContent('/categorie').where({ _path: { $eq: route.path as string } }).findOne())
const { data: services } = await useAsyncData(`[category-${route.params.slug}]`, () => queryContent('/services').where({ categories: { $eq: route.params.slug as string } }).find())
const [prev, next] = await queryContent('/categorie').only(['_path', 'title']).where({ _path: { $ne: route.path as string } }).limit(2).find()

useSeo({ title: category.value?.title as string, description: 'category' })

console.log('FOUND SERVICE ', prev, next)
</script>

<template>
  <main>
    <AppHero :title="category?.title" :description="category?.body" />
    <AppHero
      v-for="(service, s) in services" :key="service._id"
      :image="service.image"
      :invert="s % 2 === 0"
    >
      <h2 class="text-5xl text-primary">
        {{ service.title }}
      </h2>
      <div class="my-6 text-white font-light">
        <ContentRendererMarkdown :value="service" />
      </div>
      <NuxtLink

        :to="service._path"
        class=" border-2 text-primary-500 border-primary-700 hover:bg-primary-600/60 bg-primary-600/20 transition-all rounded-lg px-4 md:px-6 py-1 md:py-2 inline-block"
      >
        Leggi
      </NuxtLink>
    </AppHero>
    <div class="grid grid-cols-2 gap-4 py-12 text-sm uppercase  text-neutral-800">
      <NuxtLink :to="prev._path" class="text-right flex items-center justify-end tracking-widest hover:tracking-[.2rem] transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z" />
        </svg> {{ prev?.title }}
      </NuxtLink>
      <NuxtLink :to="next._path" class="flex gap-2 items-center tracking-widest hover:tracking-[.2rem] transition-all">
        {{ next?.title }}
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
        </svg>
      </NuxtLink>
    </div>
  </main>
</template>
