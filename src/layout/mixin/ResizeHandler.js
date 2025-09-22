import { watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export function useResizeHandler() {
  const route = useRoute()
  const appStore = useAppStore()

  function isMobile() {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  function resizeHandler() {
    if (!document.hidden) {
      const mobile = isMobile()
      appStore.toggleDevice(mobile ? 'mobile' : 'desktop')

      if (mobile) {
        appStore.closeSideBar({ withoutAnimation: true })
      }
    }
  }

  watch(route, () => {
    if (appStore.device === 'mobile' && appStore.sidebar.opened) {
      appStore.closeSideBar({ withoutAnimation: false })
    }
  })

  onMounted(() => {
    const mobile = isMobile()
    if (mobile) {
      appStore.toggleDevice('mobile')
      appStore.closeSideBar({ withoutAnimation: true })
    }
    window.addEventListener('resize', resizeHandler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  return {
    device: () => appStore.device,
    sidebar: () => appStore.sidebar
  }
}