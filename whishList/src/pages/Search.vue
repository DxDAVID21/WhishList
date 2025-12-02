<script setup>
import {useSearch} from "@/composables/useSearch.js";
import {useFavoriteStore} from "@/stores/favoriteStore";
import SearchBar from "../components/SearchBar.vue";
import ItemCard from "../components/ItemCard.vue";


const { query, results, loading, error, search } = useSearch();

async function ejecutarBusqueda(valor) {
  query.value = valor;
  await search();
}

const favoritesStore = useFavoriteStore();

function toggleFavorite(item){
  if(favoritesStore.isFavorite(item.mal_id)){
    favoritesStore.removeFavorite(item.mal_id);
  } else{
    favoritesStore.addFavorite(item)
  }
}
</script>

<template>
  <div>
    <SearchBar @search="ejecutarBusqueda" />

    <p v-if="loading">Carregant...</p>
    <p v-if="error">{{ error }}</p>

    <div class="grid">
      <ItemCard
        v-for="item in results" 
        :key="item.mal_id" 
        :item="item"
      >
         <template #actions="{item}">
          <button
            @click="toggleFavorite(item)"
          >
            {{ favoritesStore.isFavorite(item.mal_id) ? "Remove 💔"  : "Add ❤️" }}
          </button>
        </template> 
      </ItemCard>
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
