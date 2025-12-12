<script setup>
import BaseLayout from './layouts/BaseLayout.vue';
import GlobalLoader from './components/GlobalLoader.vue';
</script>

<template>
  <GlobalLoader />
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>

