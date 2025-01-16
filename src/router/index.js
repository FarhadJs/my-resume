import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "AboutMe",
    // Lazy-loaded route
    component: () => import("../pages/AboutMe.vue"),
  },
  {
    path: "/contact-me",
    name: "ContactMe",
    // Lazy-loaded route
    component: () => import("../pages/ContactMe.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
  },
  {
    path: "/projects",
    name: "MyProjects",
    // Lazy-loaded route
    component: () => import("../pages/MyProjects.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../pages/Auth.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../pages/404Page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
