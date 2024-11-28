<script setup lang="ts">
defineProps<{
  title?: string
  image?: string
  description?: string | any
  ctaLabel?: string
  ctaLink?: string
  invert?: boolean
  splitted?: boolean
}>()
</script>

<template>
  <ClientOnly>
    <div class="relative h-[30dvh] md:h-[65dvh]">
      <div class="absolute w-full h-full">
        <NuxtImg format="webp" :src="image ?? '/img/hero.jpg'" alt="" class="w-full h-full object-cover " />
        <div class="absolute inset-0 bg-black/70" />
      </div>
      <div class="absolute w-full h-full inset-0 flex items-center justify-center">
        <div class="max-w-lg  mx-auto flex flex-col items-center">
          <slot>
            <h1
              class="italic font-head text-4xl md:text-7xl text-primary-500 text-center"
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
    <!-- <div class="grid  w-full md:grid-cols-2 gap-8 ">
      <div class=" " :class="{ 'col-start-1 col-end-3 row-start-1 row-end-1 h-[30dvh] md:h-[65dvh] ': !splitted, 'h-[65dvh]': splitted, 'order-last': invert }">
        <NuxtImg :src="image ?? '/img/hero.jpg'" alt="" class="w-full h-full object-cover object-right" />
      </div>
      <div v-if="!splitted" class="col-start-1 col-end-2 row-start-1 row-end-1 bg-gradient-to-r via-primary-900/50 via-70% from-primary-900" />
      <div class=" flex items-center justify-center px-8 md:px-0" :class="{ 'col-start-1 col-end-1 row-start-1': !splitted }">
        <div class="max-w-lg  mx-auto">
          <slot>
            <h1
              class="italic font-head text-4xl md:text-7xl text-primary-500"
            >
              {{ title ?? 'Valfleur Garden' }}
            </h1>
            <p class=" font-light  text-white text-balance text-base md:text-xl my-6">
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
    </div> -->
  </ClientOnly>
</template>
