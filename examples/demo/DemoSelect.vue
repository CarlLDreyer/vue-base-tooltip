<template>
  <div class="demo-select">
    <label v-if="label">{{ label }}</label> <!-- TO-DO: Fix semantics -->

    <div class="demo-select__select">
      <select
        v-model="model"
        name="select"
        placeholder="Select placement"
      >
        <option v-for="(item, index) in items" :key="index">
          {{ item }}
        </option>
      </select>
  
      <div class="demo-select__chevron-down">
        <VPIconChevronDown />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import VPIconChevronDown from 'vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue'

interface Props {
  items?: string[]
  label?: string
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  label: '',
  modelValue: '',
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  },
})
</script>

<style lang="css" scoped>
.demo-select {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  width: 100%;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
}

.demo-select__select {
  align-items: center;
  background-color: var(--vp-button-alt-bg);
  border: 1px solid var(--vp-c-divider-light-2);
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  position: relative;
  transition: border-color 0.25s;
}

.demo-select__select:hover {
  border-color: var(--vp-c-gray);
}

select {
  background-color: transparent;
  cursor: pointer;
  font-size: 0.875rem;
  min-height: 2.5rem;
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  width: 100%;
}

.demo-select__chevron-down {
  color: inherit;
  height: 1rem;
  min-width: 1rem;
  position: absolute;
  right: 0.75rem;
  width: 1rem;
}

.demo-select__chevron-down svg {
  fill: var(--vp-c-text-1);
}
</style>
