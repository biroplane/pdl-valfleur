<script setup lang="ts">
const menu = ref([
  { label: 'Home', route: '/' },
  { label: 'Servizi', route: '/servizi' },
  { label: 'Contatti', route: '/contatti' },

])
</script>

<template>
  <ul class="flex gap-4 text-white font-thin mt-1">
    <li v-for="(nav, n) in menu" :key="n">
      <NuxtLink :to="nav.route" active-class="underline">
        {{ nav.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
