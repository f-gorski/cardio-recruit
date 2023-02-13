import { createRouter, createWebHistory } from "vue-router"
import Signals from "../views/Signals.vue"
// import PDF from "../views/PDF.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/signals",
      name: "signals",
      component: Signals,
    },
    {
      path: "/token-form",
      name: "token-form",
      component: () => import("../views/TokenForm.vue"),
    },
    {
      path: "/pdf",
      name: "pdf",
      component: () => import("../views/PDF.vue"),
    },
  ],
})

export default router
