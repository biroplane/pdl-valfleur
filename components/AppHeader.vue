<template>
  <header class="fixed p-4 main_nav">
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
  animation-range-start:110vh;
  animation-range-end:150vh;

  backdrop-filter: blur(10px);
  &::before{
    content: "";
    @apply w-full h-full absolute -top-20 left-0 -z-10;

  }
}

@keyframes stickyNav{
  100%{

    background-color: theme('colors.primary.900');
    top: 0;
    box-shadow: 0 0 0.75rem #000;
  }
}
</style>
