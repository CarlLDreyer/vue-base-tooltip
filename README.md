<p align="center">
  <a href="https://carlldreyer.github.io/vue-base-tooltip/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://carlldreyer.github.io/vue-base-tooltip/logo.svg" alt="Vue BaseTooltip logo">
  </a>
</p>


# Vue BaseTooltip
Vue BaseTooltip is a library, built with [Floating UI](https://floating-ui.com/), that aims to provide a simple way to add good-looking, performant, and flexible tooltips to your application.

### [🗒️ Documentation](https://carlldreyer.github.io/vue-base-tooltip/)

## Features
* 🫶 **Uncomplicated:** Easy to install and use.
* 🎨 **Customizable:** Style according to your needs using plain CSS.
* ☁️ **CDN:** No bundler required.
* 🤸 **Flexible:** Use as plugin or directly import the component and directive.
* 📦 **Lightweight:** The package only weighs ~2kb.
* 🦾 **Type Strong:** Written in TypeScript.

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
import { VueBaseTooltip } from 'https://unpkg.com/vue-base-tooltip/dist/vue-base-tooltip.es.js'
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

Add the default styling, this is optional in case you want to style your tooltip from scratch, as described in the [styling section](/guide/styling#use-100-of-your-own-css) of the docs.
```js
// main.ts/js
import { VueBaseTooltip } from 'vue-base-tooltip'
import 'vue-base-tooltip/style.css'

app.use(VueBaseTooltip)
```
Use the v-tooltip directive to add a tooltip to an element.
```html
<button v-tooltip="'This is a tooltip'">Button</button>
```

## Advanced Usage
For advanced usage, please check out the [docs](http://localhost:5173/vue-base-tooltip/guide.html#advanced-usage) (I didn't want to make the readme too long).

## Feedback
Any feedback is gladly received, whether it's a code improvement or feature request, open an issue / connect with me on [LinkedIn](https://www.linkedin.com/in/carlldreyer/).

## License
[MIT License](https://github.com/CarlLDreyer/vue-base-tooltip/blob/main/LICENSE) © 2022-present [Carl Lidström Dreyer](https://github.com/CarlLDreyer)
