import { createRouter, createWebHistory } from "vue-router";
//import Table from "./components/table.vue";

import Table from "./views/table.vue";
import About from "./views/about.vue";
import Home from "./views/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/table",
    name: "Table",
    component: Table
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
