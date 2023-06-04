<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <button
    class="icon-btn standard no-color"
    @click="switchMusic"
    ref="music-switcher">
    <Icon :icon="icon" width="24" height="24" />
  </button>
</template>

<script lang="ts">
export default {
  name: 'MusicSwitcher',
  data() {
    return {
      icon: '',
    };
  },
  created() {
    this.icon =
      localStorage.getItem('settings.music') == 'true'
        ? 'material-symbols:volume-up'
        : 'material-symbols:volume-off';
    addEventListener('load', () => this.initMusic());
  },
  methods: {
    initMusic: function () {
      const container = document.querySelector(
        '.music-player'
      ) as HTMLDivElement;
      if (localStorage.getItem('settings.music') == 'true') {
        const player = document.createElement('random-player');
        container?.appendChild(player);
      }
    },
    switchMusic: function () {
      const container = document.querySelector(
        '.music-player'
      ) as HTMLDivElement;

      if (localStorage.getItem('settings.music') == 'true') {
        localStorage.setItem('settings.music', 'false');
        this.icon = 'material-symbols:volume-off';

        const player = document.querySelector('random-player');
        if (player) player.parentNode?.removeChild(player);
      } else {
        localStorage.setItem('settings.music', 'true');
        this.icon = 'material-symbols:volume-up';

        const player = document.createElement('random-player');
        container?.appendChild(player);
      }
    },
  },
};
</script>
