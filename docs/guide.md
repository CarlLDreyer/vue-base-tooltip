---
title: Get Started
titleTemplate: VueBaseTooltip
---

# Get Started
Vue BaseTooltip is a library, built with [Floating UI](https://floating-ui.com/), that aims to provide a simple way to add good-looking, performant, and flexible tooltips to your application.

## Motivation
Most tooltip libraries today have a serious problem, they don't scale well. The common solution to custom tooltips is to, for each element with a tooltip:
* Bind `mouseover` and `mouseout` listeners to the element
* Dynamically create a tooltip
There are even some libraries that create all tooltips of the page on load, in other words, X DOM-elements of tooltips, but let's not go down that path.

### So how is this library any different?
The idea is to:
* Have a single tooltip component always lurking in the `body`
* Use a tooltip directive that provides the given element with a `v-tooltip` attribute
* Have a single `mouseover` listener that listens to the document
* Once an element has been hovered, check whether it includes the`v-tooltip` attribute or not
* If it does: Toggle the visibility of the component and with the help of [Floating UI](https://floating-ui.com/), calculate the tooltip's position

### So what is the drawback of this approach?
Given the current implementation, it's only possible to "spawn" a single tooltip at any given point. However, this can be solved with an idea from the common solutions: Each time an element with the `v-tooltip` attribute is hovered, dynamically render a tooltip component and then remove it upon mouseout.

## Installation
Vue BaseTooltip can be installed using your favorite package manager or directly via CDN.

### npm
```shell
npm i -S vue-base-tooltip
```

### Yarn
```shell
yarn add vue-base-tooltip
```

### CDN
Vue BaseTooltip can be loaded via CDN using ESM or UMD format.

#### ESM
```js
import VueBaseTooltip from 'https://unpkg.com/vue-base-tooltip/dist/vue-base-tooltip.es.js'
```

#### UMD
```html
<script src="https://unpkg.com/vue-base-tooltip/dist/vue-base-tooltip.umd.js"></script>
```

#### Default CSS
```html
<link rel="stylsheet" href="https://unpkg.com/vue-base-tooltip/dist/style.css" />
```

## Simple Usage
Import the plugin to your app and install it.
```js
// main.ts/js
import { VueBaseTooltip } from 'vue-base-tooltip'

app.use(VueBaseTooltip)
```

Add the default styling, this is optional in case you want to style your tooltip from scratch, as described in the [styling section](/guide/styling#use-100-of-your-own-css)
```js
// main.ts/js // [!code focus]
import { VueBaseTooltip } from 'vue-base-tooltip'
import 'vue-base-tooltip/style.css' // [!code focus]

app.use(VueBaseTooltip)
```
Use the v-tooltip directive to add a tooltip to an element.
```html
<button v-tooltip="'This is a tooltip'">Button</button>
```
::: info
You can't pass text directly to the directive, unlike the `title` attribute where you can write title="This is a tooltip".
:::

## Advanced Usage
The plugin will automatically install the component and directive. The component is injected into the body upon installation.
Alternatively, you can import the component and directive directly:
```js
import { Tooltip, VTooltip } from 'vue-base-tooltip'

app.directive('tooltip', Tooltip)
app.component('VTooltip', VTooltip)
```

Add the default styling, this is optional in case you want to style your tooltip from scratch, as described in the [styling section](/guide/styling#use-100-of-your-own-css)
```js
// main.ts/js // [!code focus]
import { Tooltip, VTooltip } from 'vue-base-tooltip'
import 'vue-base-tooltip/style.css' // [!code focus]

app.directive('tooltip', Tooltip)
app.component('VTooltip', VTooltip)
```

Then you need to place `VTooltip` somewhere in your application. For example, in `App.vue`.
```vue
// App.vue
<template>
  <RouterView />
  <VTooltip />
</template>
```
