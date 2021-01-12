import { createRouter, createWebHashHistory } from "vue-router";
import Analyzer from "../views/Analyzer.vue";

const routes = [
  {
    path: "/",
    name: "Analyzer",
    component: Analyzer
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    component: () =>
      import(/* webpackChunkName: "tutorial" */ "../views/Tutorial.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
