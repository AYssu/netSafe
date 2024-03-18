import '@/assets/main.less'


import { DefineComponent, createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import locale from 'element-plus/dist/locale/zh-cn.js'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.ts'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key as string, component as DefineComponent)
}
app.use(ElementPlus,{locale});
app.use(createPinia().use(createPersistedState()))
app.use(router)
app.mount('#app')
