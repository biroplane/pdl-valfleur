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
  <div class="grid  w-full md:grid-cols-2 gap-8 ">
    <div class="col-start-1 col-end-3 row-start-1 row-end-1 h-[65dvh] ">
      <NuxtImg :src="image ?? '/img/hero.jpg'" alt="" class="w-full h-full object-cover object-right" />
    </div>
    <div class="col-start-1 col-end-2 row-start-1 row-end-1 bg-gradient-to-r via-primary-900/50 via-70% from-primary-900" />
    <div class="col-start-1 col-end-1 row-start-1 flex items-center justify-center px-8 md:px-0">
      <div class="max-w-lg  mx-auto">
        <slot>
          <h1
            class=" italic font-head text-4xl md:text-7xl text-primary-500"
          >
            {{ title ?? 'Valfleur Garden' }}
          </h1>
          <p class=" font-light  text-white text-balance text-base md:text-xl my-6">
            {{ description ?? 'Fiori e piante scelti con cura, addobbi floreali per eventi, giardini e terrazzi' }}
          </p>
          <NuxtLink
            v-if="ctaLink"
            :to="ctaLink"
            class=" border-2 text-primary-500 border-primary-700 hover:bg-primary-600/60 bg-primary-600/20 transition-all rounded-lg px-4 md:px-6 py-1 md:py-2 inline-block"
          >
            {{ ctaLabel }}
          </NuxtLink>
        </slot>
      </div>
    </div>
  </div>
</template>
