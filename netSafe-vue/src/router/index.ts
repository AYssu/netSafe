import { createRouter, createWebHistory } from 'vue-router'  
import HomeView from '../views/HomeView.vue'  
import IndexPageVue from '@/views/Main/IndexPage.vue'  
import GroupListVue from '@/views/Main/GroupList.vue'  
import PersonalCenterVue from '@/views/Main/PersonalCenter.vue'  
import MainPortalVue from '@/views/Main/MainPortal.vue'  
  
const routes = [  
  { path: '/', name: 'Home', component: HomeView },  
  { path: '/index', name: 'IndexPage', component: IndexPageVue },  
  { path: '/group', name: 'GroupList', component: GroupListVue },  
  { path: '/personal', name: 'PersonalCenter', component: PersonalCenterVue },  
  { path: '/portal', name: 'MainPortal', component: MainPortalVue },  
]  
  
const router = createRouter({  
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes, // 简写，相当于 routes: routes  
})  
  
export default router