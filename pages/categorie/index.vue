<script setup lang="ts">
import type { Service } from '~/models/service'

const { data: categories } = await useAsyncData('[categorie]', () => queryContent('/categorie').find())
</script>

<template>
  <RoundedWrap>
    <Hero title="I nostri servizi" />
  </RoundedWrap>
  <div class="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
    <ServiceCard
      v-for="(category, s) in categories" :key="category._id"
      v-motion-slide-visible-bottom
      :service="(category as Service)" :delay="s * 300"
    />
  </div>
</template>
