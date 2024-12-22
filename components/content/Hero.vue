<script setup lang="ts">
defineProps<{
  title?: string
  image?: string
  description?: string | any
  ctaLabel?: string
  ctaLink?: string
  invert?: boolean
  splitted?: boolean
  huge?: boolean
}>()
</script>

<template>
  <ClientOnly>
    <div v-motion-pop-visible class="relative h-[30dvh] md:h-[50dvh]">
      <div class="absolute w-full h-full">
        <NuxtImg loading="lazy" format="webp" :src="image ?? '/img/hero.webp'" alt="hero" class="w-full h-full object-cover " />
        <div class="absolute inset-0 bg-primary/70 backdrop-blur-md" />
      </div>
      <div class="absolute w-full h-full inset-0 flex items-center justify-center">
        <div class="max-w-lg  mx-auto flex flex-col items-center">
          <slot>
            <h1
              class=" font-head text-4xl md:text-7xl text-primary-900 text-center"
            >
              {{ title ?? 'Valfleur Garden' }}
            </h1>
            <p class=" font-light  text-white text-balance text-base md:text-xl my-6 text-center">
              {{ description }}
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
  </ClientOnly>
</template>
