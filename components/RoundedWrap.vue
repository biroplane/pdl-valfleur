<script setup lang="ts">
defineProps<{ padding?: boolean }>()
</script>

<template>
  <section :class="{ 'p-4 md:p-6 lg:p-12': padding }">
    <div class="md:rounded-xl overflow-hidden shadow-xl">
      <slot />
    </div>
  </section>
</template>
