<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)
const menu = ref()
onClickOutside(menu, () => isOpen.value = false)
const route = useRoute()

watch(() => route.fullPath, () => isOpen.value = false)
</script>

<template>
  <aside class=" h-[100dvh] grid place-items-center">
    <button class="p-2  w-10 h-10  flex items-center justify-center" @click="isOpen = !isOpen">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /></path><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0" /></path><path d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0" /></path></g></svg>
    </button>
    <Transition name="slide-right">
      <div v-if="isOpen" ref="menu" class="absolute z-50 top-0 shadow-lg right-0 w-screen h-screen bg-black px-8">
        <div class="flex justify-between px-4 py-6">
          <Logo />
          <button @click="isOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0" /></path></svg>
          </button>
        </div>
        <AppSearch class="px-4" />
        <MainMenu orientation="right" />
      </div>
    </Transition>
  </aside>
</template>
