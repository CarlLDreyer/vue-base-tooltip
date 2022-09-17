import { createApp } from 'vue'
import VueBaseTooltip from 'vue-base-tooltip'
import 'vue-base-tooltip/style.css'
import './style.css'
import App from './App.vue'

createApp(App)
  .use(VueBaseTooltip)
  .mount('#app')
