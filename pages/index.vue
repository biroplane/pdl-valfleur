<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

useSeo({ title: 'Valfleur garden', description: 'Fiori belli' })
definePageMeta({ })

const puntidiforza = ref([
  { title: 'Professionalità', img: '/img/professionalita.jpg' },
  { title: 'Esperienza', img: '/img/esperienza.jpg' },
  { title: 'Qualità', img: '/img/qualita.jpg' },
])

const { data: categories } = await useAsyncData('categories', () => queryContent<ParsedContent>('/categorie').find())
const { data: chisiamo } = await useAsyncData('chisiamo', () => queryContent('/pages/chi-siamo').findOne())
</script>

<template>
  <main class="relative pt-12">
    <div class="lg:px-12">
      <RoundedWrap class="p-0 ">
        <AppHero />
      </RoundedWrap>

      <div class="px-4 lg:px-12 mb-24 z-50">
        <ul class="grid grid-cols-3 gap-4 md:gap-12 -mt-24 ">
          <li v-for="(pdf, p) in puntidiforza" :key="p" v-motion-pop-visible class="" :delay="p * 100">
            <div class=" ">
              <NuxtImg :src="pdf.img" class="w-full  object-cover h-48 md:h-96 rounded-xl" />
              <h3 class="text-sm md:text-xl lg:text-4xl text-primary-800 mt-8">
                {{ pdf.title }}
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <section>
        <div class="p-6 lg:p-12 grid md:grid-cols-2 gap-24">
          <div v-motion-slide-visible-left class="image h-96">
            <NuxtImg :src="chisiamo?.cover" class="w-full h-full object-cover rounded-md" />
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
        <Gallery :items="categories" class="max-w-4xl mx-auto">
          <template #item="{ item, index }">
            <div class="w-full flex flex-col md:flex-row justify-between px-4 py-8 gap-4 md:gap-24">
              <div class="w-full md:w-1/3 h-48 md:h-96 min-w-[30%]" :class="{ 'md:order-last ': index % 2 === 0 }">
                <NuxtImg format="webp" :src="item.images" class="md:aspect-square w-full md:w-auto h-full object-center object-cover rounded-lg shadow-md" />
              </div>
              <div class=" text-left flex-grow" :class="{ 'md:-order-first': index % 2 === 1 }">
                <h3 class="text-3xl md:text-6xl mb-8 font-head text-primary-500">
                  {{ item.title }}
                </h3>
                <div class="text-balance">
                  <ContentRenderer :value="item" excerpt />
                </div>

                <!-- <ul class="flex flex-col gap-1 md:gap-4 list-disc ml-4 text-sm">
                  <li v-for="(child, i) in item.children" :key="i">
                    {{ child }}
                  </li>
                </ul> -->

                <NuxtLink :to="item._path" class="mt-12 font-bold underline inline-block">
                  Scopri di più
                </NuxtLink>
              </div>
            </div>
          </template>
        </Gallery>
      </section>
    </div>
    <!-- <ContentDoc /> -->
    <!-- -->
  </main>
</template>
