<script setup>
import {ref} from 'vue';

const searchQuery = ref('');

const emit = defineEmits(['search']);
function handleSearch() {
  emit('search', searchQuery.value);
}
</script>

<template>
  <div class="search-bar">
    <input 
      v-model="searchQuery" 
      type="text"
      placeholder="Search for anime..." 
    />
    <button @click="handleSearch">
      Cercar
    </button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
</style>