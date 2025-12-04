<script>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  
  <nav>
    <RouterLink to = "/" >Go to Home</RouterLink>
    <RouterLink to = "/about" >Go to About</RouterLink>
    <RouterLink to = "/search" >Search</RouterLink>
    <RouterLink to = "/favorites" >Go to Favourites</RouterLink>
  </nav>

</template>

<style scoped>
nav {
  margin-bottom: 1em;
  display: flex;
  gap: 1em;
  background-color: aliceblue;
  position: relative;
  padding: 1em;
  border-radius: 8px;
  margin-top: 0%;
}

</style>