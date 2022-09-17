const VALID_PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
]

const updateAttributes = (el: HTMLElement, binding: any) => {
  const { modifiers, value } = binding

  if (!value) return

  const placement = VALID_PLACEMENTS.reduce((acc, cur) => {
    if (modifiers[cur]) acc = cur
    return acc
  }, '')

  if (placement) el.setAttribute('v-placement', placement)

  el.setAttribute('v-tooltip', value)
}

export default {
  beforeMount: (el: HTMLElement, binding: any) => updateAttributes(el, binding),
  updated: (el: HTMLElement, binding: any) => updateAttributes(el, binding),
  beforeUnmount (el: HTMLElement) {
    el.removeAttribute('v-tooltip')
    el.removeAttribute('v-placement')
  },
}
