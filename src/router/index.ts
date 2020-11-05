import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/user/login.vue'
import Index from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/boiling',
    name: 'Boiling',
    component: () => import(/* webpackChunkName: "boiling" */ '../views/boiling/index.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
