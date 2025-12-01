<script setup>
import { ref } from "vue";
import { searchAnime } from "@/services/communicationManager";
import {useFavoriteStore} from "@/stores/favoriteStore";
import SearchBar from "../components/SearchBar.vue";
import ItemCard from "../components/ItemCard.vue";

const results = ref([]);
const isLoading = ref(false);
const error = ref(null);

const favoritesStore = useFavoriteStore();

async function handleSearch(query) {
  try {
    isLoading.value = true;
    error.value = null;

    const response = await searchAnime(query);
    console.log("Search response:", response);

    results.value = response;
  } catch (err) {
    console.error("Search error:", err);

    error.value = "Error loading results.";
  } finally {
    isLoading.value = false; 
  }
}

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
    <SearchBar @search="handleSearch" />

    <p v-if="isLoading">Loading...</p>
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
