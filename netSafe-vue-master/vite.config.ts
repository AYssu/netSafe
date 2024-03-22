import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import postcss from 'postcss-px2rem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        postcss({
          remUnit: 160 // 设计图给的375的图就写37.5，也就是1rem=37.5px
        })
      ]
    }
},

})
