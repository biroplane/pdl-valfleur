<script setup lang="ts">

</script>

<template>
  <header class="w-full bg-white flex justify-between px-8 shadow-md fixed z-50 ">
    <Logo class="aspect-square" />
    <div class="flex gap-6 items-center">
      <AppSearch />
      <ContentNavigation v-slot="{ navigation }">
        <ul class=" flex gap-2 items-center h-full text-neutral-700">
          <li v-for="link of navigation" :key="link._path" class="cursor-pointer">
            <NuxtLink v-if="!link.children" :to="link._path" active-class="font-bold">
              {{ link.title }}
            </NuxtLink>
            <div v-else class="relative group">
              <span>{{ link.title }}</span>
              <ul class="absolute bg-primary-500 right-0 p-4 whitespace-nowrap hidden group-hover:block">
                <li v-for="child in link.children" :key="child._id">
                  <NuxtLink :to="child._path">
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </ContentNavigation>
    </div>
  </header>
</template>

<style lang="postcss">
.main_nav{
  animation: stickyNav ease-in-out forwards;
  animation-timeline: view();
  animation-range-start:100vh;
  animation-range-end:110vh;
  @apply w-full z-[9999]  ;

}

@keyframes stickyNav{
  100%{

    /* background-color: theme('colors.primary.100'); */
    top: 0;
    left: 0;
    position: fixed;
  }
}
</style>
