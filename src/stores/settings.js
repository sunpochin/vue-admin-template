import { defineStore } from 'pinia'
import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    showSettings: showSettings,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
  }),

  actions: {
    changeSetting({ key, value }) {
      if (this.hasOwnProperty(key)) {
        this[key] = value
      }
    }
  }
})