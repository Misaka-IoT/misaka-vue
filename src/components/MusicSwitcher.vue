<template>
  <button
    class="icon-btn standard no-color material-symbols-outlined"
    @click="switchMusic"
    ref="music-switcher"
  >
    {{ icon }}
  </button>
</template>
<script lang="ts">
export default {
  name: 'MusicSwitcher',
  data() {
    return {
      icon: '',
    }
  },
  created() {
    this.icon =
      localStorage.getItem('settings.music') == 'true'
        ? 'volume_up'
        : 'volume_off'
    addEventListener('load', () => this.initMusic())
  },
  methods: {
    initMusic: function () {
      const container = document.querySelector(
        '.music-player'
      ) as HTMLDivElement
      if (localStorage.getItem('settings.music') == 'true') {
        const player = document.createElement('random-player')
        container?.appendChild(player)
      }
    },
    switchMusic: function () {
      const container = document.querySelector(
        '.music-player'
      ) as HTMLDivElement

      if (localStorage.getItem('settings.music') == 'true') {
        localStorage.setItem('settings.music', 'false')
        this.icon = 'volume_off'

        const player = document.querySelector('random-player')
        if (player) player.parentNode?.removeChild(player)
      } else {
        localStorage.setItem('settings.music', 'true')
        this.icon = 'volume_up'

        const player = document.createElement('random-player')
        container?.appendChild(player)
      }
    },
  },
}
</script>
