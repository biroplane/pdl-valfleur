<script setup lang="ts">
import type { Service } from '~/models/service'

const route = useRoute()
const { data: service } = await useAsyncData(`[service_${route.params.slug}]` as string, () => queryContent<Service>('/services').where({ _path: { $eq: route.path as string } }).findOne())

const [prev, next] = await queryContent<Service>('/services').only(['_path', 'title']).findSurround(route.path)

useSeo({ title: service.value?.title as string, description: service.value?.description })
</script>

<template>
  <main>
    <RoundedWrap>
      <Hero :title="service?.title" :image="service?.images" />
    </RoundedWrap>

    <ContentDoc :path="$route.path" class="prose mx-auto my-12 px-8" />

    <Gallery v-if="service?.gallery" :items="service?.gallery" />

    <Surround :navigation="{ prev, next }" />
  </main>
</template>
