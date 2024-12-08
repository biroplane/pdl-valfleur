<script setup lang="ts">
import type { Service } from '~/models/service'

defineProps<{ service: Service }>()
</script>

<template>
  <NuxtLink :to="service._path" class=" bg-neutral-50 shadow-lg rounded-xl overflow-hidden flex flex-col">
    <div class="grid grid-cols-1 grid-rows-1">
      <ClientOnly>
        <img :src="service.cover ?? `https://unsplash.it/640/425?image=${Math.round(Math.random() * 100)}`" class="row-start-1 row-end-2 col-start-1 col-end-2 h-full w-full object-cover">
      </ClientOnly>
      <div class="row-start-1 row-end-2 col-start-1 col-end-2 bg-white/70" />
      <h2 class="text-3xl text-primary-900 font-light p-8 row-start-1 row-end-2 col-start-1 col-end-2 self-end text-balance ">
        {{ service.title }}
      </h2>
    </div>

    <div class=" p-4 px-8 flex-none">
      <div :to="service._path" class="inline tracking-[.3rem] text-xs uppercase hover:text-primary-700  py-2 border-b border-primary-600 text-primary">
        leggi
      </div>
      <div class="px-8 py-4 hidden md:block">
        <ul>
          <li v-for="(tag, t) in service.tags" :key="t">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </NuxtLink>
</template>
