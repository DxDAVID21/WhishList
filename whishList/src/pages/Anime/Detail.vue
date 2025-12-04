<script setup>
import {onMounted} from 'vue';
import { useRoute } from 'vue-router';
import { useAnimeDetail } from '@/composables/useAnimeDetail.js';

const route = useRoute();
console.log("Route PARAMS:", route.params);


const id = Number(route.params.id);
console.log("Anime Detail ID:", id);  

const { anime, characters, staff, recommendations, loading, error, fetchAnime } = useAnimeDetail();

onMounted(() => {
  fetchAnime(id);
});

</script>

<template>
  <div v-if="loading" class="loading">Carregant...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <div v-if="anime" class="anime-detail">
    <h1>{{ anime.title }}</h1>

    <div class="main-info">
      <img :src="anime.images.jpg.image_url" :alt="anime.title" />

      <div class="info">
        <p><strong>Type:</strong> {{ anime.type }}</p>
        <p><strong>Episodes:</strong> {{ anime.episodes }}</p>
        <p><strong>Status:</strong> {{ anime.status }}</p>
        <p><strong>Aired:</strong> {{ anime.aired.string }}</p>
        <p><strong>Score:</strong> {{ anime.score }}</p>
      </div>
    </div>
    <h2>Synopsis</h2>
    <p>{{ anime.synopsis }}</p>

    <h2>Characters</h2>
    <div class="grid">
      <div v-for="char in characters" :key="char.character.mal_id" class="char-card">
        <img :src="char.character.images.jpg.image_url" :alt="char.character.name" />
        <p>{{ char.character.name }}</p>
      </div>
    </div>

    <h2>Staff</h2>
    <div class="grid">
      <div v-for="s in staff" :key="s.person.mal_id" class="staff-card">
        <img :src="s.person.images.jpg.image_url" :alt="s.person.name" />
        <p>{{ s.person.name }} - {{ s.positions.join(', ') }}</p>
        <small>{{ s.positions.join(', ') }}</small>
      </div>
    </div>

    <h2>Recommendations</h2>
    <div class="grid">
      <div
        v-for="rec in recommendations"
        :key="rec.entry.mal_id"
        class="rec-card"
        @click="$router.push(`/anime/${rec.entry.mal_id}`)"
      >
        <img :src="rec.entry.images.jpg.image_url" :alt="rec.entry.title" />
        <p>{{ rec.entry.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-info {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.poster {
  max-width: 200px;
  width: 250px;
  border-radius: 8px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 10px;
} 

.char-card, .staff-card, .rec-card {
  text-align: center;
  cursor: pointer;
}

.char-card img, .staff-card img, .rec-card img {
  width: 100%;
  border-radius: 8px;
}
</style>