<template>
  <div class="demo-styling example">
    <div class="example__content">
      <button
        v-tooltip.top="'This is a styled tooltip'"
        class="example__button"
      >
        Hover me
      </button>
    </div>
  </div>
</template>

<style lang="css">
body:has(.demo-styling) .v-tooltip__content {
  background-color: #646cff;
}
</style>
