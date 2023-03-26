import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'; // 引入路由配置文件
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
