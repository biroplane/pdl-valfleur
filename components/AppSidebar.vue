<template>
  <aside class="h-full ">
    <div class="flex lg:flex-col h-full justify-between   gap-4">
      <div class="flex-grow-0 flex lg:flex-col items-center lg:items-start">
        <Logo class="w-24 h-full lg:h-32" />
        <AppSearch class="hidden lg:inline-block w-full" />
      </div>
      <div class="flex-grow h-full hidden lg:block">
        <MainMenu />
      </div>
      <AppDrawer class="lg:hidden relative " />
      <div class=" text-sm mb-6 prose hidden lg:block">
        <ContentDoc path="/contatti" :excerpt="true" />
      </div>
    </div>
  </aside>
</template>

<style lang="postcss">
.active-link {
  @apply text-black/70 font-bold;
}
</style>
