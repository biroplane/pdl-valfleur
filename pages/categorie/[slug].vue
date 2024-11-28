<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import type { Service } from '~/models/service'

const route = useRoute()
const { data: category } = await useAsyncData(route.params.slug as string, () => queryContent('/categorie').where({ _path: { $eq: route.path as string } }).findOne())
const { data: services } = await useAsyncData(`[service-${route.params.slug}]`, () => queryContent <Service>('/services').where({ categories: { $eq: route.params.slug as string } }).find())
const [prev, next] = await queryContent('/categorie').only(['_path', 'title']).where({ _path: { $ne: route.path as string } }).limit(2).find()

useSeo({ title: category.value?.title as string, description: 'category' })

console.log('FOUND SERVICE ', prev, next)
</script>

<template>
  <main>
    <RoundedWrap>
      <Hero :title="category?.title" :image="category?.images" />
    </RoundedWrap>
    <div class="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      <ServiceCard
        v-for="service in services" :key="service._id"
        :service="service"
      />
    </div>
    <Surround :navigation="{ prev, next }" />
  </main>
</template>
