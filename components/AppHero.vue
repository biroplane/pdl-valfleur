<script setup lang="ts">
defineProps<{
  title?: string
  image?: string
  description?: string | any
  ctaLabel?: string
  ctaLink?: string
  invert?: boolean
}>()
</script>

<template>
  <div class="grid w-full grid-cols-2 grid-rows-2 gap-8 h-[100dvh] lg:h-[80dvh] ">
    <div class="col-start-1 col-end-3 row-start-1 row-end-3">
      <NuxtImg :src="image ?? '/bouquet.jpg'" alt="" class="w-full h-full object-cover object-right masked" />
    </div>
    <div class="row-start-2 col-start-1 col-end-3 lg:col-end-2 p-4 lg:p-12">
      <div class="p-8 lg:p-12 bg-green-950 rounded-2xl shadow-lg max-w-lg mt-12">
        <h1
          class="  font-head text-4xl md:text-6xl text-primary"
        >
          {{ title ?? 'Valfleur Garden' }}
        </h1>
        <p class=" font-light text-balance text-base md:text-xl my-6 text-white/50">
          {{ description ?? 'Fiori e piante scelti con cura, addobbi floreali per eventi, giardini e terrazzi' }}
        </p>
        <NuxtLink
          v-if="ctaLink"
          :to="ctaLink"
          class=" border-2 text-primary-500 border-primary-700 hover:bg-primary-600/60 bg-primary-600/20 transition-all rounded-lg px-4 md:px-6 py-1 md:py-2 inline-block"
        >
          {{ ctaLabel }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
