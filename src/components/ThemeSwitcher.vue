<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <button
    class="icon-btn standard no-color"
    @click="switchTheme"
    ref="theme-switcher">
    <Icon :icon="icon" width="24" height="24" />
  </button>
</template>
<script lang="ts">
export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      icon: '',
    }
  },
  created() {
    this.icon =
      localStorage.getItem('settings.theme') == 'dark'
        ? 'material-symbols:sunny'
        : 'material-symbols:bedtime'
  },
  methods: {
    switchTheme: function () {
      if (localStorage.getItem('settings.theme') == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('settings.theme', 'dark')
        this.icon = 'material-symbols:sunny'
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('settings.theme', 'light')
        this.icon = 'material-symbols:bedtime'
      }
    },
  },
}
</script>
