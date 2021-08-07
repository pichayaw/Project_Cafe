import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '@/views/Menu.vue'
import BeforeRewards from '@/views/reward/BeforeRewards.vue'
import Login from '@/views/auth/Login'
import Logout from '@/views/auth/Logout'
import Topup from '@/views/Topup'
import BuyHistory from "@/views/BuyHistory"
import AdminReward from '@/views/admin/AdminReward'
import AdminCreateReward from '@/views/admin/CreateReward'
import AdminEditReward from '@/views/admin/EditReward'
import AdminLeaderboard from '@/views/admin/AdminLeaderboard'
import Register from '@/views/auth/Register'
import Shop from '@/views/Shop'

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
    path: '/admin/rewards',
    name: 'AdminReward',
    component: AdminReward
  },

  {
    path: '/admin/create',
    name: 'AdminCreateReward',
    component: AdminCreateReward
  },

  {
    path: '/admin/:id/edit',
    name: 'AdminEditReward',
    component: AdminEditReward
  },

  {
    path: '/admin/leaderboard',
    name: 'AdminLeaderboard',
    component: AdminLeaderboard
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
 
  {
    path: '/topup',
    name: 'topup',
    component: Topup
  },

  {
    path: '/buyhistory',
    name: 'buyhistory',
    component: BuyHistory
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },


  {
    path: '/rewards/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
