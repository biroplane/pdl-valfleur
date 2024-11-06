<script setup lang="ts">
const route = useRoute()
const { data: services } = await useAsyncData(`[category_${route.params.slug}]`, () => queryContent('1.services').where({ categoia: route.params.slug }).find())

console.log('FOUND SERVICE ', services)
</script>

<template>
  <main>
    Categorie {{ $route.params.slug }}
  </main>
</template>
