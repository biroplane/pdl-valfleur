<script setup lang="ts">
/**
 * @credits @arashsheyda <https://github.com/arashsheyda>
 */

withDefaults(defineProps<{
  title?: string
  description?: string
  bg?: string
  logo?: string
  image?: string

}>(), {
  bg: 'linear-gradient(to bottom right, #171717, #131313)',

  logo: 'logo.png',
  image: '/img/hero.webp',
})
</script>

<template>
  <div
    class="relative h-full w-full flex items-center justify-center px-12 bg-neutral-900 text-white "
    :style="{ backgroundImage: bg }"
  >
    <img
      v-if="logo"
      loading="lazy"
      :src="logo"
      class=""
      style="height: 100px; width: 125px;"
      alt="logo"
    >
    <div

      v-if="image"
      class="absolute left-0 right-0 inset-0 w-full h-full opacity-30"
    >
      <img loading="lazy" :src="image" class="w-full h-full object-cover" width="1200" height="900" alt="image">
    </div>
    <div class="flex flex-col items-start  max-w-md">
      <h1 class="flex gap-4 text-7xl font-bold font-head">
        {{ title }}
      </h1>
      <p class="text-2xl max-w-3xl">
        {{ `${description?.substring(0, 100)}…` }}
      </p>
    </div>
  </div>
</template>
