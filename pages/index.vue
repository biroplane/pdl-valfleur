<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

useSeo({ title: 'Valfleur garden', description: 'Fiori belli' })

const puntidiforza = ref([
  { title: 'Professionalità', img: '/img/professionalita.webp' },
  { title: 'Esperienza', img: '/img/esperienza.webp' },
  { title: 'Qualità', img: '/img/qualita.webp' },
])

const { data: categories } = await useAsyncData('categories', () => queryContent<ParsedContent>('/categorie').find())
const { data: services } = await useAsyncData('services', () => queryContent<ParsedContent>('/services').where({ _type: { $ne: 'yaml' } }).sort({ categories: 1 }).find())
const { data: chisiamo } = await useAsyncData('chisiamo', () => queryContent('/pages/chi-siamo').findOne())
</script>

<template>
  <main>
    <AppHero />
    <div class="banner pt-12 lg:pt-24 pb-12 bg-green-500/20 text-center">
      <h2 class="text-3xl text-primary-900">
        Hai bisogno di un preventivo?
      </h2>
      <NuxtLink to="/contatti" class=" inline-block px-2 py-1 text-green-900 mt-4 border-b border-b-green-900">
        Contattaci
      </NuxtLink>
    </div>
    <div class="px-4 lg:px-12  py-12">
      <h1 class="text-center text-3xl lg:text-5xl">
        I nostri punti di forza
      </h1>
      <ul class="grid lg:grid-cols-3 gap-4 md:gap-24 mt-6  ">
        <li v-for="(pdf, p) in puntidiforza" :key="p" v-motion-pop-visible :delay="p * 100" class="mb-4 text-center">
          <div class=" ">
            <NuxtImg loading="lazy" :src="pdf.img" class="w-full  object-cover h-32 md:h-96 rounded-xl" :alt="`punto di fornza numero ${p}` " />
            <h3 class="text-sm md:text-3xl lg:text-4xl text-primary-800 mt-4 lg:mt-8">
              {{ pdf.title }}
            </h3>
          </div>
        </li>
      </ul>
    </div>
    <div class="p-8 lg:p-12 bg-green-950/10 ">
      <h2 class="text-center text-5xl p-4 lg:py-12 text-green-900">
        Gallerie
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container gap-6 lg:gap-12">
        <ServiceCard v-for="(service) in services" :key="service._path" v-motion-pop-visible :service="service" />
      </div>
    </div>
    <section>
      <div class="p-6 lg:p-12 grid md:grid-cols-2 gap-24">
        <div v-motion-slide-visible-left class="image h-96">
          <NuxtImg loading="lazy" :src="chisiamo?.cover" class="w-full h-full object-cover rounded-md" alt="chi siamo" />
        </div>
        <div class="max-w-xl">
          <h3 v-motion-slide-visible-right class="text-4xl  mb-12">
            {{ chisiamo?.title }}
          </h3>

          <ContentRendererMarkdown v-motion-slide-visible-right :delay="300" :value="chisiamo as Record<string, any>" class="leading-8" />
        </div>
      </div>
    </section>
    <section v-motion-slide-visible-bottom>
      <div class="text-center">
        <h2 class="text-center text-6xl py-12">
          Servizi
        </h2>
        <div class="">
          Scopri i servizi
        </div>
      </div>
      <Gallery :items="categories" class="max-w-4xl mx-auto" :config="{ breakpoints: { 700: { itemsToShow: 1 } } }">
        <template #item="{ item, index }">
          <div class="w-full flex flex-col md:flex-row justify-between px-4 py-8 gap-4 md:gap-24">
            <div class="w-full md:w-2/5 h-48 md:h-96 min-w-[40%]" :class="{ 'md:order-last ': index % 2 === 0 }">
              <NuxtImg loading="lazy" format="webp" :src="item.images" class="md:aspect-square w-full md:w-auto h-full object-center object-cover rounded-lg shadow-md" alt="gallery" />
            </div>
            <div class=" text-left flex-grow" :class="{ 'md:-order-first': index % 2 === 1 }">
              <h3 class="text-3xl md:text-6xl mb-8 font-head text-primary-500">
                {{ item.title }}
              </h3>
              <div class="text-balance">
                <ContentRenderer :value="item" excerpt />
              </div>

              <NuxtLink :to="item._path" class="mt-12 font-bold underline inline-block">
                Scopri di più
              </NuxtLink>
            </div>
          </div>
        </template>
      </Gallery>
    </section>
    <!--

     -->
  </main>
</template>
