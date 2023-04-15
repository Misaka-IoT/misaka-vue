<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>
<template>
    <button @click="loops" class="icon-btn standard no-color" v-if="danmuon">
        <Icon :icon="icon" width="24" height="24"/>
    </button>
    <button @click="ondanmu" class="icon-btn standard no-color">
        <Icon :icon="icon2" width="24" height="24" />
    </button>
</template>
<script lang="ts">
export default {
  name: 'DanmuSwitcher',
  data() {
    return {
      icon: 'material-symbols:sync-disabled',
      icon2: 'material-symbols:toggle-on',
      danmuon:true
    }
  },
  methods: {
    loops() {
      localStorage.setItem(
        'danmu.loops',
        localStorage.getItem('danmu.loops') == '1' ? '0' : '1'
      )
      this.icon =
        localStorage.getItem('danmu.loops') == '1'
          ? 'material-symbols:sync'
          : 'material-symbols:sync-disabled'
      this.loopsDanmu()
    },
    ondanmu() {
      localStorage.setItem(
        'danmu.on',
        localStorage.getItem('danmu.on') == '1' ? '0' : '1'
      )
      this.danmuon=localStorage.getItem('danmu.on') == '1'
          ? true
          : false
      this.icon2 =
        localStorage.getItem('danmu.on') == '1'
          ? 'material-symbols:toggle-on'
          : 'material-symbols:toggle-off'
      this.onDanmu()
    },
  },
  created() {
    if (localStorage.getItem('danmu.loops') == null) {
      localStorage.setItem('danmu.loops', '1')
    }
    if (localStorage.getItem('danmu.on') == null) {
      localStorage.setItem('danmu.on', '1')
    }
    this.danmuon=localStorage.getItem('danmu.on') == '1'
        ? true
        : false
    this.icon =
      localStorage.getItem('danmu.loops') == '1'
        ? 'material-symbols:sync'
        : 'material-symbols:sync-disabled'
    this.icon2 =
      localStorage.getItem('danmu.on') == '1'
        ? 'material-symbols:toggle-on'
        : 'material-symbols:toggle-off'
  },
  props: ['loopsDanmu', 'onDanmu'],
}
</script>
