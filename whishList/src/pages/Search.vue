<script setup>
import { useSearch } from "@/composables/useSearch.js";
import SearchBar from "../components/SearchBar.vue";
import AnimeCard from "../components/AnimeCard.vue";

const { results, loading, error, searchAnime } = useSearch();


</script>

<template>
  <div class="max-w-5xl mx-auto px-4">
    <h1 class="text-3xl font-semibold mb-6 text-white">Buscar Anime</h1>
    <SearchBar @search="searchAnime" />
    <p v-if="loading" class="text-gray-300 mt-4">Carregant...</p>
    <p v-if="error" class="text-red-400 mt-4">{{ error }}</p>

    <div
      v-if="results.length > 0" 
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-6"
    >
      <AnimeCard v-for="anime in results" :key="anime.mal_id" :anime="anime"/>
    </div>
    <p
      v-if="!loading && results.length === 0"
      class="text-gray-300 mt-6 text-center"
    >
      Escriu a la barra de cerca per veure resultats.
    </p>
  </div>
</template>

