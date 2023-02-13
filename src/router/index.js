import { createRouter, createWebHistory } from "vue-router"
import Signals from "../views/Signals.vue"

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
  ],
})

export default router
