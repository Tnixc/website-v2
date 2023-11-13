import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "HomeView", component: HomeView },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
