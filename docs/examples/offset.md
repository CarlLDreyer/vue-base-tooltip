---
title: Examples - Offset
titleTemplate: VueBaseTooltip
---

# Offset
The offset's default value is `8px` which accounts for the size of the arrow. The offset utilizes Floating UI's [offset middleware](https://floating-ui.com/docs/offset). Currently, passing a number is only supported, specifying an axis will be supported in the future.

## Plugin
Implementation of the offset using the plugin options.
```js
// main.ts/js // [!code focus]
import { VueBaseTooltip } from 'vue-base-tooltip'

app.use(VueBaseTooltip, { offset: 24 }) // [!code focus]
```

## Prop
Implementation of the offset using the component prop.
```vue
// App.vue // [!code focus]
<template>
  <RouterView />
  <VTooltip :offset="24" /> // [!code focus]
</template>
```

<script setup>
import DemoOffset from '../../examples/demo/DemoOffset.vue'
</script>

## Example
<DemoOffset />
<VTooltip :offset="24" />
