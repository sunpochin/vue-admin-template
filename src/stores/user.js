import { defineStore } from 'pinia'
import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    avatar: ''
  }),

  actions: {
    // user login
    async login(userInfo) {
      const { username, password } = userInfo
      try {
        const response = await login({ username: username.trim(), password: password })
        const { data } = response
        this.token = data.token
        setToken(data.token)
      } catch (error) {
        throw error
      }
    },

    // get user info
    async getInfo() {
      try {
        const response = await getInfo(this.token)
        const { data } = response

        if (!data) {
          throw new Error('Verification failed, please Login again.')
        }

        const { name, avatar } = data
        this.name = name
        this.avatar = avatar
        return data
      } catch (error) {
        throw error
      }
    },

    // user logout
    async logout() {
      try {
        await logout(this.token)
        removeToken()
        resetRouter()
        this.resetState()
      } catch (error) {
        throw error
      }
    },

    // remove token
    async resetToken() {
      removeToken()
      this.resetState()
    },

    // reset state
    resetState() {
      this.token = ''
      this.name = ''
      this.avatar = ''
    }
  }
})