import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import { router } from './router/index.js'

const app = createApp(App);

const globalLoading = ref(false);
app.provide("globalLoading", globalLoading);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
