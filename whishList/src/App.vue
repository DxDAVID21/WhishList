<script setup>
import BaseLayout from './layouts/BaseLayout.vue';
import GlobalLoader from './components/GlobalLoader.vue';
</script>

<template>
  <BaseLayout>
    <GlobalLoader />
    <RouterView />
  </BaseLayout>
</template>

