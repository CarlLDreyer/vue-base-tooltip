<template>
  <div class="demo-position example">
    <div class="example__content">
      <button
        v-tooltip="`This is a tooltip ${ activePlacement }`"
        :v-placement="activePlacement !== 'auto' && activePlacement || ''"
        class="example__button"
      >
        Hover me
      </button>
    </div>

    <div class="example__controls">
      <DemoSelect
        v-model="activePlacement"
        :items="placements"
        label="Placement"
      />      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DemoSelect from './DemoSelect.vue'

const activePlacement = ref('auto')

const placements = [
  'auto',
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
</script>
