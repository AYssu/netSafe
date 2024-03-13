import { createRouter, createWebHistory } from 'vue-router'
import LoginLayoutView from '@/views/LoginLayout.vue'
import IndexLayoutView from '@/views/IndexLayout.vue'

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
      path: '/index',
      name: 'index',
      component: IndexLayoutView,
      redirect: '/index/command', // 添加重定向到第一个子路由 
      children: [
        {
          path: 'command',
          name: 'command',
          component: () => import('@/views/command/Index.vue')
        },
        {
          path: 'depart',
          name: 'depart',
          component: () => import('@/views/depart/Index.vue')
        }
      ]
    }
  ]
})

export default router
