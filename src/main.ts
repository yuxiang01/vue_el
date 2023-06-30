import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.css'
import App from './App.vue'
import registerIcons from './global/register-icon'
import router from './router'

createApp(App).use(registerIcons).use(router).mount('#app')
