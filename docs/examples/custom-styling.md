---
title: Examples - Custom Styling
titleTemplate: VueBaseTooltip
---

# Custom Styling
As previously [mentioned](/guide/styling), the tooltips can be styled by simply overriding the CSS class's attributes. The example below describes how changing the tooltip's background color may work.

## CSS
```css
.v-tooltip__content {
  background-color: #646cff;
}
```

<script setup>
import DemoStyling from '../../examples/demo/DemoStyling.vue'
</script>

## Example
<DemoStyling />
<VTooltip />
