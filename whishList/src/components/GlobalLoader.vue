<template>
  <transition name="fade">
    <div v-if="loading" class="loader-overlay">
      <div class="loader"></div>
    </div>
  </transition>
</template>

<script setup>
  import { inject } from 'vue';
  const loading = inject("globalLoading");
</script>

<style>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #666;
  border-top-color: #8b5cf6; 
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>