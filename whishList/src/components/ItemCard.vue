<script setup>
import { useFavoriteStore } from "@/stores/favoriteStore";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const favoriteStore = useFavoriteStore();
console.log("ItemCard recibe:", props.item);

</script>

<template>
  <div class="card">
    <img 
      :src="item.images.jpg.image_url" 
      :alt="item.title" 
    />
    <h3>{{ item.title }}</h3>

    <p>Score: {{ item.score }}</p>
    <p>Episodes: {{ item.episodes }}</p>

    <button
      @click="
        favoriteStore.isFavorite(item)
          ? favoriteStore.removeFavorite(item)
          : favoriteStore.addFavorite(item)
      "
    >
      {{
        favoriteStore.isFavorite(item)
          ? "Remove from Favorites"
          : "Add to Favorites"
      }}
    </button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.card img {
  max-width: 100%;
  border-radius: 4px;
}
</style>
