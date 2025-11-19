<script setup>
import TheNavbar from './components/TheNavbar.vue';

</script>

<template>
  <TheNavbar />
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <main>
    <RouterView />
  </main>

</template>


<style scoped></style>
