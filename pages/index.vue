<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { $seo } = useNuxtApp()

interface Category extends ParsedContent {
  title: string
}
interface Page extends ParsedContent {
  cover: string
}
// import seo from '~/plugins/seo'

// import { Carousel, Slide } from "vue3-carousel"
// import "vue3-carousel/dist/carousel.css"

// useSeo
$seo('Benvenuti', 'Valfleur offre ai propri clienti un vasto assortimento di fiori recisi e in vaso, piante ornamentali, da interno ed esterno, vasi in ceramica, vetro e plastica, accessori per la casa e idee regalo.', '/hero.jpg')
// const puntidiforza = ref([
//   { title: 'Professionalità', img: '/professionalita.jpg' },
//   { title: 'Esperienza', img: '/esperienza.jpg' },
//   { title: 'Qualità', img: '/qualita.jpg' },
// ])
// const cosaOffriamo = ref([
//   { img: '/composizioni.jpg', name: 'Fiori e composizioni', children: ['Fiori freschi recisi', 'Bouquet', 'Ghirlande', 'Composizioni originali', 'Corone di laurea'],
//   },
//   { img: '/servizi_speciali.jpg', name: 'Servizi speciali', children: [
//     'Addobbi floreali',
//     'Servizi per matrimoni',
//     'Allestimenti per eventi',
//     'Decori e arredi floreali',
//   ] },
//   { img: '/piante_tropicali.jpg', name: 'Piante da appartamento', children: ['Piante tropicali', 'Piante da interni pendenti', 'Piante profumate', 'Piante resistenti per appartamenti', 'Piante che vivono con poca luce'] },
//   { img: '/giardino_verticale.jpg', name: 'Giardini e terrazzi', children: ['Assistenza alla progettazione', 'Manutenzione giardini e terrazzi', 'Giardini verticali', 'Giardini sempreverdi', 'Terrazzi con piante'],
//   },
// ])

const { data: categories } = await useAsyncData('categories', () => queryContent<Category>('categoria').find())
const { data: chi_siamo } = await useAsyncData('chisiamo', () => queryContent<Page>('/pages/chi-siamo').findOne())
console.log('Categorie', categories.value)
console.log('Chi siamo', chi_siamo.value)
</script>

<template>
  <main>
    <AppHero />
    <div class="grid md:grid-cols-2 gap-6 md:gap-16 pb-12 md:py-24">
      <NuxtImg format="webp" :src="chi_siamo?.cover" class=" w-full max-h-[50vh] object-cover md:object-contain md:object-right md:rounded-lg" />
      <div class="prose max-w-md text-balance md:py-12 px-8 md:px-0">
        <h2 class="text-5xl text-primary-500">
          Chi siamo
        </h2>
        <p class="text-pretty">
          <strong>Valfleur</strong> offre ai propri clienti un vasto assortimento di fiori recisi e in vaso, piante ornamentali, da interno ed esterno, vasi in ceramica, vetro e plastica, accessori per la casa e idee regalo.
          Siamo un punto di riferimento per la creazione di stupendi bouquet e composizioni di mazzi di fiori recisi. Realizziamo addobbi floreali di grande eleganza per festeggiamenti, celebrazioni religiose, civili, eventi e ricorrenze.
        </p>
      </div>
    </div>

    <section class=" py-12 bg-primary-50 flex items-center justify-center px-8 md:px-0">
      <div class="">
        <div class="col-span-full text-center">
          <h2 class="">
            I nostri punti di forza
          </h2>
        </div>
        <ul class="grid md:grid-cols-3 max-w-6xl  w-full mx-auto gap-6">
          <li v-for="(category, c) in categories" :key="c" class="card">
            <!-- <NuxtImg format="webp" :src="category" class="w-full h-64 aspect-square object-cover rounded-t-md" /> -->
            <div class="p-8 text-center font-bold text-xl">
              {{ category.title }}
            </div>
          </li>
        </ul>
        <!-- <div class="card">
          Professionalità
        </div>
        <div class="card">
          Esperienza
        </div>
        <div class="card">
          Qualità
        </div> -->
      </div>
    </section>
    <section class="px-6 py-4 md:py-12 justify-center bg-neutral-100 ">
      <div class="max-w-4xl mx-auto">
        <h2 class="w-full text-center md:text-left ">
          Cosa offriamo
        </h2>
        <Gallery :items="categories as any">
          <template #item="{ item, index }">
            <div class="w-full flex flex-col md:flex-row justify-between px-4 py-8 gap-4 md:gap-24">
              <div class="w-full md:w-1/3 h-48 md:h-96" :class="{ 'md:order-last ': index % 2 === 0 }">
                <NuxtImg format="webp" :src="item.img" class="md:aspect-square w-full md:w-auto h-full object-center object-cover rounded-lg shadow-md" />
              </div>
              <div class=" text-left flex-grow" :class="{ 'md:-order-first': index % 2 === 1 }">
                <h3 class="text-3xl md:text-6xl mb-8 font-head text-primary-500">
                  {{ item.title }}
                </h3>
                <ul class="flex flex-col gap-1 md:gap-4 list-disc ml-4 text-sm">
                  <li v-for="(child, i) in item.children" :key="i">
                    {{ child }}
                  </li>
                </ul>
                <pre>{{ item }}</pre>
                <NuxtLink :to="`/categoria/${item._slug}`" class="mt-12 font-bold underline inline-block">
                  Scopri di più
                </NuxtLink>
              </div>
            </div>
          </template>
        </Gallery>
      </div>
    </section>
  </main>
</template>

<style lang="postcss">
h2{
  @apply text-3xl md:text-5xl text-primary-500  py-6;
}
.card{
  @apply w-full h-full border-4 shadow-lg border-primary-500 rounded-lg bg-primary-800/50 text-white;
}
</style>
