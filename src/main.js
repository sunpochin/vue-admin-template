import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register' // svg icon
import './permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (import.meta.env.PROD) {
  import('../mock').then(({ mockXHR }) => {
    mockXHR()
  })
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
