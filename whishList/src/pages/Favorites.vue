<script setup>
import { useFavoriteStore } from '@/stores/favoriteStore';
import ItemCard from '@/components/ItemCard.vue';

const store = useFavoriteStore();
</script>


<template>
  <div>
    <h2>Favorits</h2>

    <div v-if="store.favorites.length === 0">
      No tens favorits encara.
    </div>

    <div class="grid">
      <ItemCard 
        v-for="item in store.favorites" 
        :key="item.mal_id" 
        :item="item" 
      />
    </div>
    <p>Welcome to Favorites!</p>
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