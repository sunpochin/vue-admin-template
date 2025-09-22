<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

export default {
  name: 'Dashboard',
  setup() {
    const userStore = useUserStore()
    const name = computed(() => userStore.name)

    return {
      name
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
