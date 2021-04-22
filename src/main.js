// Vanessa Gutierrez 04/22/2021
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import './index.css'

createApp(App).use(MotionPlugin).mount('#app')
