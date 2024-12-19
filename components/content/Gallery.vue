<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'

defineProps<{ items: any, config?: any }>()

const currentSlide = ref(0)

const breakpoints = {
  320: {
    itemsToShow: 1.2,
  },
  700: {
    itemsToShow: 3.2,
  },
  1024: {
    itemsToShow: 4,
  },
}
</script>

<template>
  <div class="">
    <Carousel
      v-bind="config" v-model="currentSlide" class="w-full" :wrap-around="true" :pause-autoplay-on-hover="true" :transition="500" :autoplay="3000"
      :breakpoints="config.breakpoints || breakpoints"
    >
      <Slide v-for="(item, i) in items" :key="i">
        <div class="px-4 w-full ">
          <slot name="item" :item="item" :index="i" class="w-full h-full" />
        </div>
      </Slide>
    </Carousel>
    <div class="flex items-center px-8">
      <ul class="flex gap-2 mx-auto mt-4 flex-wrap items-center justify-center">
        <li v-for="(page, p) in items" :key="p">
          <button
            class="w-3 h-3 transition-all duration-700 rounded-full bg-primary-300"
            :class="{ active: currentSlide === p }"
            aria-label="Call to action"
            @click.prevent="currentSlide = p"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss">
.active {
  @apply bg-primary-500 w-16;
}
</style>
