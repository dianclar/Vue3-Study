//new Vue() => createApp()
//createRouter() createStore()
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import router from './router'

const pinia = createPinia()
createApp(App).use(pinia.use(persistedstate)).use(router).mount('#app')
