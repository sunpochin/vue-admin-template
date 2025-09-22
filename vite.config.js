import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // Disable Element Plus auto-import - using global registration instead
    // Components({
    //   resolvers: [ElementPlusResolver({
    //     importStyle: false, // 禁用自動樣式導入
    //     ssr: false, // 確保客戶端導入
    //     resolveIcons: false // 禁用圖標解析
    //   })],
    // }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // 使用現代 Sass API
      }
    }
  },
  server: {
    port: 9528,
    open: true
    // Proxy disabled - using MockJS for API responses
    // proxy: {
    //   '/dev-api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev-api/, '')
    //   }
    // }
  }
})