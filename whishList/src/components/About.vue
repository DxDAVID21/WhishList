<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const search = computed({
  get() {
    return route.query.search ?? '';
  },
  set(search) {
    router.replace({ query: { search } });
  },
});
</script>

<template>
  <div>
    <h1>Home Component</h1>
    <input v-model="search" placeholder="Search..." />
    <p>Current search query: {{ search }}</p>
  </div>  
</template>