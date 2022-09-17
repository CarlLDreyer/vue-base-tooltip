import { createApp } from 'vue'
import { VTooltip, Tooltip } from 'vue-base-tooltip'
import 'vue-base-tooltip/style.css'
import './style.css'
import App from './App.vue'

createApp(App)
  .directive('tooltip', Tooltip)
  .component('VTooltip', VTooltip)
  .mount('#app')
