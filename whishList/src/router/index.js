
import { createRouter, createMemoryHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Search from "../pages/Search.vue";
import Favorites from "../pages/Favorites.vue";
import ItemDetail from "../components/ItemDetail.vue";

const routes = [
  {path: "/", component: Home},
  {path: "/about", component: About },
  {path: "/search", component: Search},
  {path: "/favorites", component: Favorites},
  {path: "/item/:id", component: ItemDetail},
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
