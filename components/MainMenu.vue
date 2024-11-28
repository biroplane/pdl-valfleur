<script setup lang="ts">
const menu = ref([
  { label: 'Home', route: '/' },
  { label: 'Servizi', route: '/servizi' },
  { label: 'Contatti', route: '/contatti' },

])
</script>

<template>
  <ul class="flex gap-4  underline-offset-8 font-light  mt-1">
    <li v-for="(nav, n) in menu" :key="n">
      <NuxtLink :to="nav.route" active-class="underline text-primary-500">
        {{ nav.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
