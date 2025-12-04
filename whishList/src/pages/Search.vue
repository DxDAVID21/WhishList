<script setup>
import { useSearch } from "@/composables/useSearch.js";
//import { useFavoriteStore } from "@/stores/favoriteStore";
import SearchBar from "../components/SearchBar.vue";
import AnimeCard from "../components/AnimeCard.vue";

const { results, loading, error, searchAnime } = useSearch();
/*
async function ejecutarBusqueda(valor) {
  query.value = valor;
  await searchAnime();
}

const favoritesStore = useFavoriteStore();

function toggleFavorite(item) {
  if (favoritesStore.isFavorite(item.mal_id)) {
    favoritesStore.removeFavorite(item.mal_id);
  } else {
    favoritesStore.addFavorite(item);
  }
}
*/
</script>

<template>
  <div>
    <SearchBar @search="searchAnime" />

    <p v-if="loading">Carregant...</p>
    <p v-if="error">{{ error }}</p>

    <div class="grid">
      <AnimeCard v-for="anime in results" :key="anime.mal_id" :anime="anime"/>
        <!--<template #actions="{ item }">
          <button @click="toggleFavorite(item)">
            {{
              favoritesStore.isFavorite(item.mal_id) ? "Remove 💔" : "Add ❤️"
            }}
          </button>
        </template>
        */-->
    </div>
    <p>Welcome to Searching!</p>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
</style>
