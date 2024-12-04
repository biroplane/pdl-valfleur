<template>
  <footer class="bg-black text-white p-12">
    <div class="container grid grid-cols-4 gap-4 items-center">
      <div class="">
        <Logo />
        <ContentDoc path="/contatti" :excerpt="true" />
      </div>

      <div class="">
        &copy; {{ new Date().getFullYear() }} - <a href="#" title="pdl comunicazione">Pdl comunicazione</a>
      </div>
    </div>
  </footer>
</template>
