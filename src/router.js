import { createRouter, createWebHistory } from "vue-router";
//import Table from "./components/table.vue";
import About from "./views/about.vue";
import Page from "./views/page.vue";

const routes = [
  {
    path: "/",
    name: "Page",
    component: Page
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
