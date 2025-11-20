<script setup>
import { ref } from 'vue';
import { serarchAnime } from '@/services/communicationManager';
import ItemCard from '../components/ItemCard.vue';

const searchQuery = ref('');
const results = ref([]);
const isLoading = ref(false);

async function doSearch() {
  if (!searchQuery.value.trim()) return;
  
  isLoading.value = true;
  results.value = await serarchAnime(searchQuery.value);
  isLoading.value = false;
} 

</script>

<template>
  <div>
    <h1>Buscar Anime</h1>
    <input 
      v-model="searchQuery"
      placeholder="Enter anime title"
      @keyup.enter="doSearch"
    />

    <button @click="doSearch">Buscar</button>

    <div v-if="isLoading">Cargant...</div>

    <div class="grid">
      <ItemCard 
        v-for="item in results" 
        :key="item.mal_id" 
        :item="item" 
      />
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