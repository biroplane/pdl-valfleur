<script>
const { $seo } = useNuxtApp()

$seo('Contatti', 'Ecco come raggiungerci e contattatarci', '/hero.jpg')
</script>

<template>
  <main class="">
    <div class="h-20 bg-black mb-12" />

    <div class="prose mx-auto">
      <h1 class="">
        Contatti
      </h1>
      <div class="">
        <h2><strong>Valfleur</strong> di Valentino Cagnetta</h2>
        <p>Via Cimitero, 4</p>
        <p>70038 - Terlizzi (Ba)</p>
        <a href="tel://0803516254" class="">Chiamaci</a>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1153.3547105737323!2d16.54316862664979!3d41.121201061757034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347f61b03495a69%3A0x90c2e9b0b31da051!2sValfleur%20Di%20Cagnetta%20Valentino!5e0!3m2!1sit!2sit!4v1715622068589!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full aspect-video rounded-lg" />
    </div>

    <!-- <ContactForm title="Richiedi informazioni" description="Compila il form per richiere informazioni o un preventivo" /> -->
  </main>
</template>
