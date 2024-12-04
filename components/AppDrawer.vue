<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)
const menu = ref()
onClickOutside(menu, () => isOpen.value = false)
const route = useRoute()

watch(() => route.fullPath, () => isOpen.value = false)
</script>

<template>
  <aside class="relative h-full grid place-items-center">
    <button class="p-2  w-12 h-12" @click="isOpen = !isOpen">
      <svg view-box="0 0 24 20" class=" w-full h-full block ">
        <rect width="24" height="2" class="fill-current" />
        <rect width="24" height="2" y="8" class=" fill-current" />
        <rect width="24" height="2" y="16" class=" fill-current" />

      </svg>
    </button>
    <Transition name="slide-down">
      <div v-if="isOpen" ref="menu" class="absolute z-50 top-10 shadow-lg right-0">
        <MainMenu orientation="right" />
      </div>
    </Transition>
  </aside>
</template>
