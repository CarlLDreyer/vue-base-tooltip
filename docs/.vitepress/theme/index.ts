import DefaultTheme from 'vitepress/theme'
import { Tooltip, VTooltip } from '../../../src/index'
import './style.css'
import './demo.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('VTooltip', VTooltip)
    ctx.app.directive('tooltip', Tooltip)
  }
}
