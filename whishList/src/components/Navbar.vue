<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  
  <nav class="w-full bg-neutral-900 text-white shadow-lg">
    <div class="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
      <RouterLink to="/" class="text-xl font-semibold tracking-wide hover:opacity-80 transition">
        WhishList
      </RouterLink>

      <div class="flex gap-6">
        <RouterLink
          to="/"
          class="trasition hover:text-blue-400"
          :class="{'text-blue-400 font-semibold': route.path === '/'}"
        >
          Home
        </RouterLink> 
        
        <RouterLink
          to="/about"
          class="trasition hover:text-blue-400"
          :class="{'text-blue-400 font-semibold': route.path === '/about'}"
        >
          About
        </RouterLink>

        <RouterLink
          to="/ai"
          class="trasition hover:text-blue-400"
          :class="{'text-blue-400 font-semibold': route.path === '/ai'}"
        >
          AI (recomanacio)
        </RouterLink>

        <RouterLink
          to="/search"
          class="trasition hover:text-blue-400"
          :class="{'text-blue-400 font-semibold': route.path === '/search'}"
        >
          Search
        </RouterLink>

        <RouterLink
          to="/favorites"
          class="trasition hover:text-blue-400"
          :class="{'text-blue-400 font-semibold': route.path === '/favorites'}"
        >
          Favorites
        </RouterLink>
      </div>
    </div>
  </nav>

</template>

<style scoped>
</style>