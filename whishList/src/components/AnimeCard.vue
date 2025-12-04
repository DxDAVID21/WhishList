<script setup>
import { router } from "@/router";
import { useFavoriteStore } from "@/stores/favoriteStore";

const { anime } = defineProps({
  anime: {
    type: Object,
    required: true,
  },
});

const favoriteStore = useFavoriteStore();
console.log("ItemCard recibe:", anime);

function toggleFav() {
  const id = anime.mal_id;

  if (favoriteStore.isFavorite(id)) {
    favoriteStore.removeFavorite(id);
  } else {
    favoriteStore.addFavorite(anime);
  }
}

const go = () => {
  router.push(`/anime/${anime.mal_id}`);
}
</script>

<template>
  <div
    @click="go" 
    class="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:sahdow-lg transition-all duration-300"
  >
    <img 
      :src="anime.images.jpg.image_url" 
      :alt="anime.title"
      class="w-full h-56 object-cover" 
    />
    <div class="p-3">
      <h3 class="font-medium text-lg line-clamp-1">{{ anime.title }}</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ anime.type }}</p>
    </div>
      

    <p>Score: {{ anime.score }}</p>
    <p>Episodes: {{ anime.episodes }}</p>

    <button
      @click.stop="toggleFav"
      :class="{ active: favoriteStore.isFavorite(anime.mal_id) }">
      {{ favoriteStore.isFavorite(anime.mal_id) ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>

    <slot name="actions" :anime="anime"></slot>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
}

.card img {
  max-width: 100%;
  border-radius: 4px;
}
</style>
