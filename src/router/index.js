import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '@/views/Menu.vue'
import BeforeRewards from '@/views/reward/BeforeRewards.vue'
import AfterRewards from '@/views/reward/AfterRewards.vue'
import Login from '@/views/auth/Login'
import Logout from '@/views/auth/Logout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: BeforeRewards
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: AfterRewards
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
