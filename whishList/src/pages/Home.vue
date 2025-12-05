<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToFavorites() {
  router.push("/favorites");
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">

    <!-- Hero Section -->
    <section class="w-full max-w-4xl text-center py-24">
      <h1 class="text-5xl font-extrabold tracking-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          WhishList Anime
        </span>
      </h1>

      <p class="mt-4 text-gray-300 text-lg">
        Troba, descobreix i guarda els teus animes preferits.
      </p>

      <button
        @click="goToFavorites"
        class="mt-10 px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all text-lg font-medium shadow-lg"
      >
        Veure Favorits ⭐
      </button>
    </section>

    <!-- Features -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">

      <div class="p-6 bg-gray-800/50 rounded-2xl backdrop-blur border border-gray-700 shadow hover:shadow-xl transition">
        <h3 class="text-xl font-semibold">🔍 Cerca Animes</h3>
        <p class="mt-2 text-gray-400">Explora milers d’animes amb l’API de Jikan.</p>
      </div>

      <div class="p-6 bg-gray-800/50 rounded-2xl backdrop-blur border border-gray-700 shadow hover:shadow-xl transition">
        <h3 class="text-xl font-semibold">✨ Guarda Favorits</h3>
        <p class="mt-2 text-gray-400">Afegeix els teus animes preferits a una llista personal.</p>
      </div>

      <div class="p-6 bg-gray-800/50 rounded-2xl backdrop-blur border border-gray-700 shadow hover:shadow-xl transition">
        <h3 class="text-xl font-semibold">📱 Interfície Neta</h3>
        <p class="mt-2 text-gray-400">Disseny minimalista i adaptat al mode fosc.</p>
      </div>

    </section>

    <!-- Footer -->
    <footer class="mt-20 text-gray-600 text-sm">
      Fet amb ❤️ per David — 2025
    </footer>
  </div>
</template>
