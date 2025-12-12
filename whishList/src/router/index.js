
import { createRouter, createMemoryHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../components/About.vue";
import Search from "../pages/Search.vue";
import Favorites from "../pages/Favorites.vue";
import AI from "../pages/IA.vue";

import AnimeDetail from "../pages/Anime/Detail.vue";
import { compile } from "vue";

const routes = [
  {path: "/", component: Home},
  {path: "/about", component: About },
  {path: "/search", component: Search},
  {path: "/favorites", component: Favorites},
  {path: "/ai", component: AI},

  {path: "/anime/:id", component: AnimeDetail},
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
}); 

