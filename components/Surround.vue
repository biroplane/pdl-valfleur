<script setup lang="ts">
const props = defineProps<{ navigation: any }>()

console.log('navigation', props.navigation)
</script>

<template>
  <div class="grid grid-cols-2 gap-4 py-12 text-sm uppercase  text-neutral-800">
    <NuxtLink v-if="navigation.prev" :to="navigation.prev._path" class="text-right flex items-center justify-end tracking-widest hover:tracking-[.2rem] transition-all">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z" />
      </svg> {{ navigation.prev?.title }}
    </NuxtLink>
    <NuxtLink v-if="navigation.next" :to="navigation.next._path" class="flex gap-2 items-center tracking-widest hover:tracking-[.2rem] transition-all">
      {{ navigation.next?.title }}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
      </svg>
    </NuxtLink>
  </div>
</template>
