import '@/styles/common.scss' // 引入全局样式

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 引入持久化插件

import App from './App.vue'
import router from './router'

import { lazyPlugin } from './directives'
import { componentPlugin } from './components'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 使用持久化插件
app.use(pinia)
app.use(router)
app.mount('#app')
app.use(lazyPlugin)
app.use(componentPlugin)






