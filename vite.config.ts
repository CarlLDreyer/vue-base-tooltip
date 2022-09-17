import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'VueBaseTooltip',
      fileName: (format) => `vue-base-tooltip.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@floating-ui/dom'],
      output: {
        globals: {
          vue: 'Vue',
          '@floating-ui/dom': 'FloatingUIDOM',
        },
      },
    },
    target: 'esnext',
  },
  plugins: [vue()],
})
