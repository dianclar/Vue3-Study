import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'

const routes = [{ path: '/', component: () => import('@/view/index.vue') }]

export default createRouter({
  history: createWebHistory(),
  routes,
})
