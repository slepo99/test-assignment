import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Main = () => import('@/pages/main/Main.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
