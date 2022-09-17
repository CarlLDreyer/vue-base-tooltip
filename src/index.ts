import TooltipComponent from './components/VTooltip.vue'
import tooltipDirective from './directives/vTooltip'
import RenderComponent from './util/render-component'

import type { App, Plugin, VNodeProps } from 'vue'

const VueBaseTooltip: Plugin = {
  install (app: App, options: any = {}) {
    app.component('VTooltip', TooltipComponent)
    app.directive('tooltip', tooltipDirective)

    const tooltipComponent = new RenderComponent({
      el: document.body,
      rootComponent: TooltipComponent,
      props: options as VNodeProps,
      appContext: app._context,
    })

    tooltipComponent.mount()
  },
}

// Component
export const VTooltip = TooltipComponent

// Directive
export const Tooltip = tooltipDirective

// Plugin
export default VueBaseTooltip
