
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createPersistedState } from 'node_modules/pinia-persistedstate-plugin/dist'

const app = createApp(App)
const persist = createPersistedState()
const pinia = createPinia()
pinia.use(persist)
app.use(pinia)
app.use(router)

app.mount('#app')
