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

// 獲取當前的路由和路由器實例
const route = useRoute()
const router = useRouter()

// 麵包屑導航列表
const levelList = ref([])

// 判斷是否為儀表板路由
const isDashboard = (r) => {
  const name = r.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

// 獲取麵包屑數據
const getBreadcrumb = () => {
  // 過濾出包含 meta.title 的路由
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  const first = matched[0]

  // 如果第一個不是儀表板，則手動添加
  if (!isDashboard(first)) {
    matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
  }

  // 過濾掉不需要在麵包屑中顯示的項目
  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}

// 編譯帶有參數的路徑
const pathCompile = (path) => {
  const { params } = route
  const toPath = compile(path)
  return toPath(params)
}

// 處理連結點擊
const handleLink = (item) => {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
    return
  }
  router.push(pathCompile(path))
}

// 監聽路由變化
watch(
  () => route.path,
  () => {
    getBreadcrumb()
  }
)

// 在組件掛載前獲取初始麵包屑
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