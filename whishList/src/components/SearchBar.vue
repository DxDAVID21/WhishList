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
    <form @submit.prevent="handleSearch">
      <input 
        v-model="searchQuery" 
        type="text"
        placeholder="Search for anime..." 
      />
      <button type="submit">
        Cercar
      </button>
    </form>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
</style>