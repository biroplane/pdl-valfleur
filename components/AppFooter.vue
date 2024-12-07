<template>
  <footer class="bg-black text-white p-4 md:p-12">
    <div class="container grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
      <div class="py-6 col-span-2">
        <Logo />
        <ContentDoc path="/contatti" :excerpt="true" />
      </div>

      <div class="text-[9px] lg:text-xs">
        &copy; {{ new Date().getFullYear() }} - <a href="#" title="pdl comunicazione">Pdl comunicazione</a>
      </div>
    </div>
  </footer>
</template>
