<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { compile } from 'path-to-regexp'

// Get the current route and router instance
const route = useRoute()
const router = useRouter()

// Breadcrumb navigation list
const levelList = ref([])

// Check if it is a dashboard route
const isDashboard = (r) => {
  const name = r.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

// Get breadcrumb data
const getBreadcrumb = () => {
  // Filter routes that contain meta.title
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  const first = matched[0]

  // Manually add dashboard if it's not the first one
  if (!isDashboard(first)) {
    matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
  }

  // Filter out items that don't need to be displayed in the breadcrumb
  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}

// Compile path with parameters
const pathCompile = (path) => {
  const { params } = route
  const toPath = compile(path)
  return toPath(params)
}

// Handle link click
const handleLink = (item) => {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
    return
  }
  router.push(pathCompile(path))
}

// Watch for route changes
watch(
  () => route.path,
  () => {
    getBreadcrumb()
  }
)

// Get initial breadcrumb before component mount
onBeforeMount(() => {
  getBreadcrumb()
})
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>