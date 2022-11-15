import{_ as c,r as i,o as e,c as s,a as p,w as r,b as _,d,e as a,f as m}from"./app.68622ec9.js";const h={},u={class:"demo-styling example"},y={class:"example__content"},g={class:"example__button"};function x(o,l){const t=i("tooltip");return e(),s("div",u,[p("div",y,[r((e(),s("button",g,[_(" Hover me ")])),[[t,"This is a styled tooltip",void 0,{top:!0}]])])])}const D=c(h,[["render",x]]),C=m(`<h1 id="custom-styling" tabindex="-1">Custom Styling <a class="header-anchor" href="#custom-styling" aria-hidden="true">#</a></h1><p>As previously <a href="/vue-base-tooltip/guide/styling.html">mentioned</a>, the tooltips can be styled by simply overriding the CSS class&#39;s attributes. The example below describes how changing the tooltip&#39;s background color may work.</p><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">v-tooltip__content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">646cff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>`,5),f=JSON.parse('{"title":"Examples - Custom Styling","titleTemplate":"VueBaseTooltip","description":"","frontmatter":{"title":"Examples - Custom Styling","titleTemplate":"VueBaseTooltip"},"headers":[{"level":2,"title":"CSS","slug":"css","link":"#css","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"examples/custom-styling.md"}'),v={name:"examples/custom-styling.md"},S=Object.assign(v,{setup(o){return(l,t)=>{const n=d("VTooltip");return e(),s("div",null,[C,a(D),a(n)])}}});export{f as __pageData,S as default};