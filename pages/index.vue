<template>
  <main>
    <div class="grid h-96 w-full grid-cols-2 gap-8">
      <div class="col-start-1 col-end-3 row-start-1 row-end-1 bg-red-500 ">
        <img src="/hero.jpg" alt="" class="w-full h-full object-cover">
      </div>
      <div class="col-start-1 col-end-2 row-start-1 row-end-1 bg-gradient-to-r from-white">

      </div>
      <div class="col-start-1 col-end-1 row-start-1 flex items-center justify-center">
        <div class="max-w-lg">
          <h1
            class="font-bold text-6xl text-transparent bg-gradient-to-tr from-lime-300 to-green-500 bg-clip-text inline-block ">
            Valfleur </h1>
          <p class=" font-light leading-[1.5rem] my-6 text-black">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Autem corrupti quos beatae, minus deserunt distinctio? Fuga aliquid voluptatibus doloremque assumenda.
            Provident voluptate voluptas quasi deserunt vero. Animi impedit nesciunt dignissimos.</p>
          <NuxtLink to="/"
            class=" border-2 text-lime-700 border-lime-700 hover:bg-lime-300/60 bg-lime-300/20 transition-color rounded-lg px-6 py-2 inline-block">
            I nostri servizi</NuxtLink>
        </div>

      </div>
    </div>
  </main>
</template>