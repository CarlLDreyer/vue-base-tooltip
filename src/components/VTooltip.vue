<template>
  <Teleport to="body">
    <div ref="domTooltip" class="v-tooltip">
      <Transition name="tooltip">
        <div v-if="activeElement" class="v-tooltip__content">
          <div class="v-tooltip__inner">
            {{ content }}
          </div>
          <div ref="domArrow" class="v-tooltip__arrow" />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { arrow, autoPlacement, computePosition, offset } from '@floating-ui/dom'

import type { Ref } from 'vue'

import type {
  ComputePositionConfig,
  ComputePositionReturn,
  Placement,
} from '@floating-ui/dom'

export interface Props {
  delay?: number
  offset?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 400,
  offset: 8,
})

const domArrow = ref()
const domTooltip = ref()

const content = ref<string | null>('')
const activeElement = ref<HTMLElement | null>(null)
const delayTimeout: Ref<ReturnType<typeof setTimeout> | null> = ref(null)

const mouseoverListener = (e: MouseEvent) => {
  const target = (e.target as HTMLElement).closest('[v-tooltip]')

  if (delayTimeout.value) {
    clearTimeout(delayTimeout.value)
    delayTimeout.value = null
  }

  if (activeElement.value !== target) {
    activeElement.value = null
  }

  if (target?.hasAttribute('v-tooltip')) {
    delayTimeout.value = setTimeout(() => {
      activeElement.value = target as HTMLElement
    }, props.delay)
  }
}

const showTooltip = async () => {
  if (!activeElement.value) return

  await nextTick()

  const elPlacement = activeElement.value.getAttribute('v-placement')

  content.value = activeElement.value.getAttribute('v-tooltip') ?? ''

  const options: Partial<ComputePositionConfig> = {
    ...(elPlacement && { placement: elPlacement as Placement }),
    middleware: [
      ...(!elPlacement ? [autoPlacement()] : []),
      offset(props.offset),
      arrow({ element: domArrow.value }),
    ],
  }

  computePosition(activeElement.value, domTooltip.value, options).then(
    ({ x, y, placement, middlewareData }: ComputePositionReturn) => {
      Object.assign(domTooltip.value.style, {
        left: `${x}px`,
        top: `${y}px`,
      })

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]]

      Object.assign(domArrow.value.style, {
        ...(middlewareData.arrow?.y && {
          top: `${middlewareData.arrow.y}px`,
        }),
        ...(middlewareData.arrow?.x && {
          left: `${middlewareData.arrow.x}px`,
        }),
        right: '',
        bottom: '',
        [staticSide as string]: '-0.25rem',
      })
    }
  )
}

const hideTooltip = () => {
  activeElement.value = null
  content.value = null
}

watch(activeElement, async (el) => {
  if (el) await showTooltip()
  else hideTooltip()
})

onMounted(() => {
  document.addEventListener('mouseover', mouseoverListener)
})

onBeforeUnmount(() => {
  if (delayTimeout.value) clearTimeout(delayTimeout.value)
  document.removeEventListener('mouseover', mouseoverListener)
})
</script>

<style lang="css">
.v-tooltip {
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 7000;
}

.v-tooltip__content {
  align-items: center;
  background-color: #2e3136;
  border-radius: 0.25rem;
  box-shadow: rgba(0 0 0, 16%) 0 0.125rem 0.25rem 0;
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  white-space: pre;
}

.v-tooltip__arrow {
  background-color: inherit;
  height: 0.75rem;
  position: absolute;
  transform: rotate(45deg);
  width: 0.75rem;
}

.tooltip-enter-active {
  transition: opacity 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
}
</style>
