<script setup lang="ts">

</script>

<template>
<div class="example-tooltip">
  <button v-tooltip="'This is an auto tooltip'">
    Auto
  </button>
  <button v-tooltip.top="'This is a top tooltip'">
    Top
  </button>
  <button v-tooltip.bottom-start="'This is a bottom start tooltip'">
    Bottom Start
  </button>
  <button v-tooltip.right-end="'This is a right tooltip'">
    Right End
  </button>
  <button v-tooltip="'This is an auto tooltip'">
    Auto
  </button>
</div>
</template>

<style lang="scss" scoped>
.example-tooltip {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  button {
    white-space: nowrap;
  }
}
</style>
