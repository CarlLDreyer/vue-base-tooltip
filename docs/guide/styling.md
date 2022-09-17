---
title: Get Started
titleTemplate: VueBaseTooltip
---

# Styling
The easiest way to style the tooltip component is to override the default styling through global css.

## Structure
The tooltip component is structured according to:

```html
<div class="v-tooltip">
  <Transition>
    <div class="v-tooltip__content">
      <div class="v-tooltip__inner">
        <!-- Content -->
      </div>
      <div class=v-tooltip__arrow" />
    </div>
  </Transition>
</div>
```

## Default Styling
The component contains the following default styling:
```css
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
```

## Transition
The default transition is named tooltip and may be overridden using the following classes:

 ```css
.tooltip-enter-active
.tooltip-leave-active {}

.tooltip-enter-from,
.tooltip-leave-to {}
```


## Use 100% of your own CSS

Let's say you don't want to import:
```js
import 'vue-base-tooltip/style.css'
```
And instead, want to create your own styling from scratch.
Let's break down the classes:
`v-tooltip` is not too flexible, I wouldn't recommend changing too much here.

```css
.v-tooltip {
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 7000; /** Can be replaced, but keep it high! */
}
```

`v-tooltip__content` is extremely flexible, add your own crazy styling here.

```css
.v-tooltip__content {
  /** Your own styling, add whatever you want here */
}
```

`v-tooltip__arrow` is not too flexible, unless you don't want it to look like an arrow :)
```css
.v-tooltip__arrow {
  background-color: inherit;
  height: 0.75rem;
  position: absolute;
  transform: rotate(45deg);
  width: 0.75rem;
}
```
