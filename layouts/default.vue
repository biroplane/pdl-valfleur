<template>
  <div class="">
    <AppHeader />
    <div class="">
      <slot />
    </div>
    <AppFooter />
  </div>
  <!-- <div class="w-screen h-screen flex overflow-hidden flex-col lg:flex-row ">
    <div class="w-full h-24 bg-white shadow-xl lg:shadow-none fixed lg:static z-10 lg:w-64 lg:h-full lg:overflow-y-auto lg:overflow-x-hidden flex-none px-6">
      <AppSidebar class="z-30" />
    </div>
    <div class="flex-grow h-full lg:overflow-y-auto overflow-x-hidden pb-8 px-8">
      <div class="h-28 lg:hidden" />
      <slot />
      <AppFooter class="lg:hidden" />
    </div>
  </div> -->
</template>
