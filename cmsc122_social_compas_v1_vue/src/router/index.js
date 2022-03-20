import { createRouter, createWebHistory } from 'vue-router'
import FLAMESView from '../views/FLAMESView.vue'

const routes = [
  {
    path: '/',
    name: 'flames',
    component: FLAMESView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
