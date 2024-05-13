<script setup lang="ts">
const { $seo } = useNuxtApp()

$seo('servizi', 'Ecco i nostri servizi: Bouquet e Composizioni Floreali Uniche, Piante da Interno e da Esterno di Qualità, Allestimenti Floreali per Matrimoni ed Eventi', '/composizioni_3.png')
</script>

<template>
  <main class="">
    <NuxtImg src="/servizi.png" class="h-[50vh] md:min-h-[70vh] w-full object-cover mb-8" />
    <div class=" max-w-4xl mx-auto py-12 px-12 md:px-0">
      <h1 class="text-primary-500 text-5xl pb-12 text-center">
        I nostri servizi
      </h1>
      <article class="grid md:grid-cols-2 gap-8">
        <div class="">
          <NuxtImg format="webp" src="/bouquet.jpg" class="max-h-[50vh] object-center w-full object-cover rounded-lg" />
        </div>
        <div class="">
          <h2>Bouquet e Composizioni Floreali Uniche</h2>
          <p>
            I nostri maestri fioristi lavorano con dedizione e maestria per creare bouquet e composizioni floreali che raccontano storie, emozionano e lasciano un'impronta indelebile nei vostri ricordi. Utilizzando solo fiori freschi e di altissima qualità, ogni nostro lavoro è un'opera d'arte unica, pensata su misura per voi.
          </p>
        </div>

        <div class="">
          <h2>Piante da Interno e da Esterno di Qualità</h2><p>
            Portate la natura nelle vostre case e nei
            vostri spazi esterni con le nostre piante
            selezionate con cura. Dalle eleganti
            orchidee alle robuste piante da giardino,
            offriamo una vasta gamma di opzioni per
            arricchire il vostro ambiente con verde
            rigoglioso e colori vivaci.
          </p>
        </div>
        <div class="">
          <NuxtImg format="webp" src="/piante_interno.jpg" class="max-h-[50vh] object-center w-full object-cover rounded-lg" />
        </div>
        <div class="">
          <NuxtImg format="webp" src="/composizioni_matrimonio.jpg" class="max-h-[50vh] object-center w-full object-cover rounded-lg" />
        </div>
        <div class="">
          <h2>Allestimenti Floreali per Matrimoni ed Eventi</h2>
          <p>
            Il vostro giorno speciale merita una cornice floreale
            altrettanto speciale. Con la nostra esperienza e
            creatività, trasformiamo i vostri sogni in realtà,
            creando allestimenti floreali che catturano
            l'essenza della vostra storia d'amore o l'atmosfera
            unica del vostro evento. Dalle cerimonie intime alle
            sfarzose celebrazioni, ci occupiamo di ogni
            dettaglio per garantire un risultato sorprendente.
          </p>
        </div>
      </article>
    </div>
  </main>
</template>
