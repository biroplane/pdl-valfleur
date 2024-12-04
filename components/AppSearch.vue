<script lang="ts" setup>
import { watchDebounced } from '@vueuse/core'
import debounce from 'lodash/debounce'

const searchTerm = ref('')
const searchResults = ref()
// async function search() {
//   await debounce(async () => searchResults.value = (await searchContent(searchTerm)).value, 500)
// }
// const search = debounce(async () => {
//   const results = await searchContent(searchTerm)
//   console.log('RESULTS ', results.value)
//   searchResults.value = results.value
// }, 1000)
watchDebounced(searchTerm, async () => {
  searchResults.value = (await searchContent(searchTerm)).value
}, { debounce: 500, maxWait: 1000 })
</script>

<template>
  <div class="relative z-30">
    <div class="flex items-center border-white/50 bg-white/0 transition-colors border-b h-10 text-white focus-within:border-neutral-300 focus-within:bg-neutral-100/20 ">
      <div class="w-8 h-8 mt-0.5 mr-1 text-white/50">
        <svg v-if="searchTerm === ''" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="5.5" />
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 15l4 4" />
          </g>
        </svg>

        <button v-else @click="searchTerm = ''">
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z" />
          </svg>
        </button>
      </div>
      <input v-model="searchTerm" class="bg-transparent focus:outline-none px-2 ">
    </div>
    <transition name="slide-up">
      <div v-if="searchResults && searchResults?.length > 0" class="absolute rounded-md mt-4 shadow-lg bg-primary-700 z-50 isolate max-h-96 overflow-y-auto no-scrollbar text-neutral-200 min-w-64 z-50">
        <h5 class="font-bold py-4 border-b border-current/10 px-4">
          Risultati della ricerca
        </h5>
        <ul class="py-4">
          <li v-for="result in searchResults" :key="result._id" class="hover:bg-neutral-700/20 py-1 px-4 ">
            <NuxtLink :to="result.id" class="flex justify-between">
              <span>{{ result.title }}</span>
              ⟩
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div v-else-if="searchResults?.length === 0 && searchTerm !== ''" class="absolute rounded-md mt-4 shadow-lg bg-primary-700 z-50 isolate max-h-96 overflow-y-auto no-scrollbar text-neutral-200 min-w-64 p-8">
        <h5 class="font-bold text-2xl">
          Spiacenti!
        </h5>
        <span class="text-sm">Nessun risultato per la ricerca</span>
      </div>
    </transition>
  </div>
</template>
