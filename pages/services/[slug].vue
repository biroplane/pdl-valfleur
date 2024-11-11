<script setup lang="ts">
// const route = useRoute()

// const { data: service } = await useAsyncData(`[service_${route.params.slug}]`, () => queryContent('services').where({ _path: { $eq: route.path } }).findOne())
</script>

<template>
  <main class="prose mx-auto">
    <ContentDoc :path="$route.path" />
  </main>
</template>
