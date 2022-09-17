---
title: Examples - Delay
titleTemplate: VueBaseTooltip
---

# Delay
The default value of the delay is `400ms`, due to [Nielsen Norman Group's](https://www.nngroup.com/) recommendations for [timing exposing contents](https://www.nngroup.com/articles/timing-exposing-content/) where they recommend a delay of 0.3-0.5 seconds.

## Plugin
Implementation of the delay using the plugin options.
```js
// main.ts/js // [!code focus]
import { VueBaseTooltip } from 'vue-base-tooltip'

app.use(VueBaseTooltip, { delay: 1000 }) // [!code focus]
```

## Prop
Implementation of the delay using the component prop.
```vue
// App.vue // [!code focus]
<template>
  <RouterView />
  <VTooltip :delay="1000" /> // [!code focus]
</template>
```

<script setup>
import DemoDelay from '../../examples/demo/DemoDelay.vue'
</script>

## Example
<DemoDelay />
<VTooltip :delay="1000" />
