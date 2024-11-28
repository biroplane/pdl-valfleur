<script setup lang="ts">
import type { Service } from '~/models/service'

defineProps<{ service: Service }>()
</script>

<template>
  <article class="border-4 border-neutral-100 bg-neutral-50 shadow-lg rounded-xl overflow-hidden flex flex-col">
    <div class="grid grid-cols-1 grid-rows-1  border-b">
      <ClientOnly>
        <img :src="service.cover ?? `https://unsplash.it/640/425?image=${Math.round(Math.random() * 100)}`" class="row-start-1 row-end-2 col-start-1 col-end-2 h-full w-full object-cover">
      </ClientOnly>
      <div class="row-start-1 row-end-2 col-start-1 col-end-2 bg-black/70" />
      <h2 class="text-3xl text-primary-500 italic font-light p-8 row-start-1 row-end-2 col-start-1 col-end-2 self-end ">
        {{ service.title }}
      </h2>
    </div>
    <div class="px-8 py-4 hidden md:block">
      <ul>
        <li v-for="(tag, t) in service.tags" :key="t">
          {{ tag }}
        </li>
      </ul>
    </div>
    <div class="font-light p-8 flex-grow hidden md:block">
      <ContentRendererMarkdown :value="service" class="prose" excerpt />
    </div>
    <div class="border-t p-4 px-8 flex-none">
      <NuxtLink :to="service._path" class=" tracking-[.3rem] text-xs uppercase hover:text-primary-700  py-2 border-b border-primary-600 text-primary">
        leggi
      </NuxtLink>
    </div>
  </article>
</template>
