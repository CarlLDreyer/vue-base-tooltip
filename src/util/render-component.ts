import { AppContext, Component, createVNode, render } from 'vue'
import type { VNodeProps } from 'vue'

interface RenderComponentOptions {
  el: HTMLElement | HTMLDivElement | HTMLBodyElement
  rootComponent: Component
  props?: VNodeProps
  appContext?: Partial<AppContext>
}

export default class RenderComponent {
  el: HTMLElement | HTMLDivElement | HTMLBodyElement
  rootComponent: Component
  props?: VNodeProps
  appContext?: Partial<AppContext> = {}

  constructor (options: RenderComponentOptions) {
    this.el = options.el
    this.rootComponent = options.rootComponent
    this.props = options?.props ?? {}
    this.appContext = { ...(options?.appContext ?? {}) }
  }

  mount () {
    const componentVNode = createVNode(this.rootComponent, this.props)
    render(componentVNode, this.el)
  }

  unmount () {
    render(null, this.el)
  }
}
