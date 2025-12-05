<script setup>
import { useFavoriteStore } from "@/stores/favoriteStore";
import AnimeCard from "@/components/AnimeCard.vue";

const store = useFavoriteStore();
</script>

<template>
  <h2 class="text-2xl font-semibold mb-4">Favorits</h2>
  <div v-if="store.list.length === 0" class="text gray-500 dark:text-gray-400">
    Encara no has afegit cap anime a la teva llista de favorits.
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <AnimeCard
      v-for="anime in store.list"
      :key="anime.mal_id"
      :anime="anime"
    />
  </div>
</template>
