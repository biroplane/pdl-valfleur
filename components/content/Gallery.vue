<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'

defineProps<{ items: any, config?: any }>()

const currentSlide = ref(0)
</script>

<template>
  <div class="">
    <Carousel v-bind="config" v-model="currentSlide" class="w-full" :wrap-around="true" :pause-autoplay-on-hover="true">
      <Slide v-for="(item, i) in items" :key="i">
        <div class="px-4">
          <slot name="item" :item="item" :index="i" />
        </div>
      </Slide>
    </Carousel>
    <div class="flex items-center">
      <ul class="flex gap-2 mx-auto mt-4">
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
