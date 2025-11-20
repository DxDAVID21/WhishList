<script setup>
const props = defineProps(['item']);
</script>

<template>
  <div class="card">
    <img 
      :src="item.images.jpg.image_url" 
      :alt="item.title"
    >
    <h3>{{ item.title }}</h3>
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