import './assets/main.less'

import { DefineComponent, createApp } from 'vue'
import { createPinia } from 'pinia'
import {createPersistedState} from'pinia-persistedstate-plugin'
import locale from 'element-plus/dist/locale/zh-cn.js'
const pinia = createPinia()
pinia.use(createPersistedState())
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key as string, component as DefineComponent)
}
app.use(ElementPlus,{locale});
app.use(pinia)
app.use(router)
app.mount('#app')
