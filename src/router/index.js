import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crypto',
    name: 'crypto',
    component: () => import('../views/CryptoView.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    component: () => import('../views/StockView.vue')
  },
  {
    path: '/forex',
    name: 'forex',
    component: () => import('../views/ForexView.vue')
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('../views/MarketView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/MarketView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
