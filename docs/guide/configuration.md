---
title: Configuration
titleTemplate: VueBaseTooltip
---

# Configuration
The following parameters can be configured.

## Placement
The placement of the tooltip can be configured using the directive modifier. For example, if you want your tooltips to have the position `top`:

```html
<button v-tooltip.top="'This is a tooltip top'">Button</button>
```
The following placements are available:
* `top`
* `top-start`
* `top-end`
* `right`
* `right-start`
* `right-end`
* `bottom`
* `bottom-start`
* `bottom-end`
* `left`
* `left-start`
* `left-end`

When no placement is specific, the component will fallback to `auto`.

## Delay
Delay is the amount of time between the element has been interacted with (mouseover) and the tooltip has become visible. The delay can be configured differently depending on how you have implemented the library.
::: info
The unit of the delay is `ms` and the default value is `400`.
:::

### Plugin
Simply pass the delay along the plugin installation:
```js
// main.ts/js // [!code focus]
import VueBaseTooltip from 'vue-base-tooltip'

app.use(VueBaseTooltip, { delay: 500 }) // [!code focus]
```

### Advanced (Prop)
In case you're directly using the component, you may simply pass the delay to the component as a prop:
```vue
// App.vue // [!code focus]
<template>
  <RouterView />
  <VTooltip :delay="500" /> // [!code focus]
</template>
```

## Offset
Offset is the distance between the tooltip and the trigger element.
::: info
The unit of the offset is `px` and the default value is `8`.
:::

### Plugin
Simply pass the offset along the plugin installation:
```js
// main.ts/js // [!code focus]
import VueBaseTooltip from 'vue-base-tooltip'

app.use(VueBaseTooltip, { offset: 16 }) // [!code focus]
```

### Advanced (Prop)
In case you're directly using the component, you may simply pass the offset to the component as a prop:
```vue
// App.vue // [!code focus]
<template>
  <RouterView />
  <VTooltip :offset="16" /> // [!code focus]
</template>
```
