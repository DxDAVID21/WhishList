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
    class="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <img 
      :src="anime.images.jpg.image_url" 
      :alt="anime.title"
      class="w-full h-60 object-cover" 
    />
    <div class="p-4 flex flex-col gap-2">
      <h3 class="font-medium text-lg line-clamp-1">{{ anime.title }}</h3>

      <p class="text-sm text-gray-500 dark:text-gray-400">{{ anime.type }}</p>
    </div>
      
    <div class="text-sm text-gray-600 dark:text-gray-300 flex justify-between">
      <span>⭐ {{ anime.score }}</span>
      <span>🎞️ {{ anime.episodes }} eps</span>
    </div>

    <button
      @click.stop="toggleFav"
      class="mt-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200"
      :class="{ active: favoriteStore.isFavorite(anime.mal_id) 
        ? 'bg-red-500 text-white border-red-600 hover:bg-red-600'
        : 'bg-gray-100 dark:gb-gray-700 hover:bg-gray-200 dark:hover:br-gray-600' 
      }">
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
