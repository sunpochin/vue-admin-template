<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useSettingsStore } from '@/stores/settings'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
// Import SCSS variables through the :export functionality
const variables = {
  menuText: '#bfcbd9',
  menuActiveText: '#409EFF',
  subMenuActiveText: '#f4f4f5',
  menuBg: '#304156',
  menuHover: '#263445',
  subMenuBg: '#1f2d3d',
  subMenuHover: '#001528',
  sideBarWidth: '210px'
}

export default {
  components: { SidebarItem, Logo },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const appStore = useAppStore()
    const settingsStore = useSettingsStore()

    const sidebar = computed(() => appStore.sidebar)
    const routes = computed(() => router.options.routes)
    const activeMenu = computed(() => {
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })
    const showLogo = computed(() => settingsStore.sidebarLogo)
    const isCollapse = computed(() => !sidebar.value.opened)

    return {
      sidebar,
      routes,
      activeMenu,
      showLogo,
      variables,
      isCollapse
    }
  }
}
</script>
