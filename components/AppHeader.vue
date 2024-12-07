<script setup lang="ts">

</script>

<template>
  <div class="w-full px-12 ">
    <header class="w-fit h-16 mx-auto bg-black text-white/70 items-center flex justify-between px-8 fixed mt-10 z-50 rounded-xl main_nav ">
      <div class="flex gap-6 items-center">
        <Logo class="" />
        <div class="hidden md:block">
          <ContentNavigation v-slot="{ navigation }">
            <ul class=" flex gap-2 items-center h-full ">
              <li v-for="link of navigation" :key="link._path" class="cursor-pointer">
                <NuxtLink v-if="!link.children" :to="link._path" active-class="font-bold text-primary-500">
                  {{ link.title }}
                </NuxtLink>
                <div v-else class="relative group">
                  <span>{{ link.title }}</span>
                  <ul class="absolute bg-black left-0 py-2 whitespace-nowrap hidden group-hover:block">
                    <li v-for="child in link.children" :key="child._id" class="px-4 py-1 font-light hover:bg-white/10">
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
      </div>
      <AppDrawer class="md:hidden  " />

      <AppSearch class="hidden md:block" />
    </header>
  </div>
</template>

<style lang="postcss">
.main_nav{
  animation: stickyNav ease-in-out forwards;
  animation-timeline: view();
  animation-range-start:100vh;
  animation-range-end:130vh;
  @apply w-full z-[9999]  ;

}
.w-fit{
  width:calc(100% - theme('spacing.20'))
}

@keyframes stickyNav{
  to{

    /* background-color: theme('colors.primary.100'); */
    margin-top:0;
    top: 0;
    left: 0;
    width:100%;
    border-radius:0
  }
}
</style>
