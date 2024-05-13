<script setup lang="ts">
useHead({
  titleTemplate: '%s | Valfleur',
  htmlAttrs: {
    lang: 'it',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true, async: true },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
