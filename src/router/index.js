import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '@/views/Menu.vue'
import Rewards from '@/views/Rewards.vue'

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
    component: Rewards
  }
]

const router = new VueRouter({
  routes
})

export default router
