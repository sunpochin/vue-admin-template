<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
/**
 * Layout Component - Main application layout wrapper
 *
 * Migrated from Vue 2 to Vue 3:
 * - Replaced Vuex with Pinia stores
 * - Converted from Options API with mixins to Composition API
 * - Replaced mixin usage with composable functions
 */
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { useSettingsStore } from '@/stores/settings'
import { useResizeHandler } from './mixin/ResizeHandler'
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  setup() {
    const appStore = useAppStore()
    const settingsStore = useSettingsStore()

    // Use resize handler composable (replaces Vue 2 mixin)
    useResizeHandler()

    // Computed properties using Pinia stores (replaces Vuex mapGetters)
    const sidebar = computed(() => appStore.sidebar)
    const device = computed(() => appStore.device)
    const fixedHeader = computed(() => settingsStore.fixedHeader)
    const classObj = computed(() => ({
      hideSidebar: !sidebar.value.opened,
      openSidebar: sidebar.value.opened,
      withoutAnimation: sidebar.value.withoutAnimation,
      mobile: device.value === 'mobile'
    }))

    // Event handlers using Pinia actions (replaces Vuex dispatch)
    const handleClickOutside = () => {
      appStore.closeSideBar({ withoutAnimation: false })
    }

    return {
      sidebar,
      device,
      fixedHeader,
      classObj,
      handleClickOutside
    }
  }
}
</script>

<style lang="scss" scoped>
  @use "@/styles/mixin.scss" as mixin;
  @use "@/styles/variables.scss" as variables;

  .app-wrapper {
    @include mixin.clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{variables.$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
