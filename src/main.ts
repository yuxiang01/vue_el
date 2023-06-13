import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.css'
import App from './App.vue'
import registerIcons from './global/register-icon'

createApp(App).use(registerIcons).mount('#app')
