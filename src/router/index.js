import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    name: "Home",

    component: () => import("../views/home_page.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () => import("../views/login_page.vue"),
  },
  {
    path: "/register",
    name: "Register",

    component: () => import("../views/register_page.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () => import("../views/contact_page.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: () => import("../views/dashboard_page.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
