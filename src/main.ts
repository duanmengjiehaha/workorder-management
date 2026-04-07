import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import './style.css'

// 创建Vue应用实例
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

// 挂载应用
app.mount('#app')
