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
    class="cursor-pointer bg-neutral text-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <img 
      :src="anime.images.jpg.image_url" 
      :alt="anime.title"
      class="w-full h-60 object-cover" 
    />
    <div class="p-4 space-y-1">
      <h3 class="font-semibold text-lg line-clamp-1">{{ anime.title }}</h3>

      <p class="text-sm text-gray-500 dark:text-gray-400">{{ anime.type }}</p>
    </div>
      
    <div class="text-sm text-gray-600 pt-2 dark:text-gray-300 flex justify-between">
      <span>⭐ {{ anime.score }}</span>
      <span>🎞️ {{ anime.episodes }} eps</span>
    </div>

    <button
      @click.stop="toggleFav"
      class="w-full py-2 font-semibold text-sm transition bg-neutral-800 hover:bg-neutral-700"
      :class="{ 'text-red-400': favoriteStore.isFavorite(anime.mal_id) }"
    >
      {{ favoriteStore.isFavorite(anime.mal_id) ? 'Eliminar de favorits' : 'Afegir a favorits' }}
    </button>

    <slot name="actions" :anime="anime"></slot>
  </div>
</template>

