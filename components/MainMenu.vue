<script setup lang="ts">
withDefaults(

  defineProps<{ orientation?: 'left' | 'right' }>(),
  {
    orientation: 'left',
  },
)
</script>

<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul class=" flex flex-col gap-2  h-full mt-4 bg-white p-4 lg:p-0" :class="{ 'items-start': orientation === 'left', 'items-end text-right': orientation === 'right' }">
      <li v-for="link of navigation" :key="link._path" class="cursor-pointer ">
        <NuxtLink v-if="!link.children" :to="link._path" active-class="active-link">
          {{ link.title }}
        </NuxtLink>
        <div v-else class="flex flex-col">
          <NuxtLink :to="link._path" active-class="active-link">
            {{ link.title }}
          </NuxtLink>
          <ul class=" bg-white left-0 py-2 whitespace-nowrap">
            <li v-for="child in link.children" :key="child._id" class="px-4 py-1 font-light hover:text-black/70">
              <NuxtLink :to="child._path" active-class="active-link">
                {{ child.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </ContentNavigation>
</template>
