import { createRouter, createWebHistory } from 'vue-router'
import LoginLayoutView from '@/views/LoginLayout.vue'
import IndexLayoutView from '@/views/IndexLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginLayoutView
    },
    {
      name: 'redirect',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/index',
      name: 'index',
      component: IndexLayoutView,
      children: [
        {
          path: 'command',
          name: 'command',
          component: () => import('@/views/command/IndexLayout.vue')
        },
        {
          path: 'depart',
          name: 'depart',
          component: () => import('@/views/depart/IndexLayout.vue')
        },
        {
          path: 'notice',
          name: 'notice',
          component: () => import('@/views/notice/IndexLayout.vue')
        },
        {
          path: 'screen',
          name: 'screen',
          redirect: { name: 'oneQuestion' },
          component: () => import('@/views/screen/IndexLayout.vue'),
          children: [
            {
              path: 'oneQuestion',
              name: 'oneQuestion',
              component: () => import('@/views/screen/oneQuestion.vue')
            },
            {
              path: 'ploceTrain',
              name: 'ploceTrain',
              component: () => import('@/views/screen/ploceTrain.vue')
            },
            {
              path: 'invesTigation',
              name: 'invesTigation',
              component: () => import('@/views/screen/invesTigation.vue')
            },
            {
              path: 'policeOffice',
              name: 'policeOffice',
              component: () => import('@/views/screen/policeOffice.vue')
            },
            {
              path: 'jointProblems',
              name: 'jointProblems',
              component: () => import('@/views/screen/jointProblems.vue')
            },
            {
              path: 'policeLogistics',
              name: 'policeLogistics',
              component: () => import('@/views/screen/policeLogistics.vue')
            },
            {
              path: 'ondutyToday',
              name: 'ondutyToday',
              component: () => import('@/views/screen/ondutyToday.vue')
            },
            {
              path: 'threeMentions',
              name: 'threeMentions',
              component: () => import('@/views/screen/threeMentions.vue')
            }
          ]
        },
        {
          name: 'redirect2',
          path: '', // 空字符串代表父路由的根路径
          redirect: { name: 'command' }
        }
      ]
    }
  ]
})

export default router
