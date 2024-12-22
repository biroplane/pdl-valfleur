<script setup lang="ts">
import type { Service } from '~/models/service'

const route = useRoute()
const { data: service } = await useAsyncData(`[service_${route.params.slug}]` as string, () => queryContent<Service>('/services').where({ _path: { $eq: route.path as string } }).findOne())

const [prev, next] = await queryContent<Service>('/services').only(['_path', 'title']).findSurround(route.path)

useSeo({ title: service.value?.title as string, description: service.value?.description })
</script>

<template>
  <main>
    <div class="h-16 md:hidden" />
    <RoundedWrap padding>
      <Hero :title="service?.title" :image="service?.images" />
    </RoundedWrap>
    <div class="prose mx-auto my-12 px-8">
      <ContentDoc :path="$route.path" class="" />
    </div>

    <Gallery v-if="service?.gallery" :items="service?.gallery" :config="{ itemsToShow: 5 }">
      <template #item="{ item }">
        <img loading="lazy" :src="item" class="h-64 md:h-96 w-screen object-cover" :alt="`gallery${item}`">
      </template>
    </Gallery>

    <Surround :navigation="{ prev, next }" />
  </main>
</template>
