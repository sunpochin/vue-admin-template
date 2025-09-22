import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import {
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElScrollbar,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElTooltip,
  ElAlert,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import SvgIcon from '@/components/SvgIcon/index.vue' // global svg component

import 'virtual:svg-icons-register' // svg icon
import './permission' // permission control

/**
 * Enable MockJs for development and production
 * This provides mock API responses when no backend is available
 */
if (import.meta.env.DEV || import.meta.env.PROD) {
  import('../mock').then(({ mockXHR }) => {
    mockXHR()
  })
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Register Element Plus components individually
const components = [
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElScrollbar,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElTooltip,
  ElAlert,
  ElBreadcrumb,
  ElBreadcrumbItem
]

// Register components with both PascalCase and kebab-case names
components.forEach(component => {
  app.component(component.name, component)
})

// Explicitly register el-submenu for kebab-case usage
app.component('el-submenu', ElSubMenu)

// Register global components
app.component('svg-icon', SvgIcon)

app.mount('#app')
