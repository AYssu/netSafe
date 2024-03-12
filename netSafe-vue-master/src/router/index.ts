import { createRouter, createWebHistory } from 'vue-router'
// import LoginLayoutView from '@/views/LoginLayout.vue'
import LoginLayoutView from '@/views/LoginLayout.vue'
import RegisterLayoutView from '@/views/RegisterLayout.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginLayoutView,
    },
    {
      path: '/',
      redirect: {name:'login'}
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterLayoutView
    }
  ]
})

export default router
