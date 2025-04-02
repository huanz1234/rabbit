import '@/styles/common.scss' // 引入全局样式

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { lazyPlugin } from './directives'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(lazyPlugin)





