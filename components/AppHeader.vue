<template>
  <header class="p-4 main_nav bg-neutral-800 text-white">
    <div class="container flex justify-between items-center">
      <Logo />
      <MainMenu class="ml-8" />
    </div>
  </header>
</template>

<style lang="postcss">
.main_nav{
  @apply w-full z-10 isolate;
  animation: stickyNav ease-in-out forwards;
  animation-timeline: view();
  animation-range-start:100vh;
  animation-range-end:150vh;

  backdrop-filter: blur(10px);
  &::before{
    content: "";
    @apply w-full h-full absolute -top-20 left-0 -z-10;

  }
}

@keyframes stickyNav{
  100%{

    background-color: theme('colors.primary.100');
    top: 0;
  }
}
</style>
