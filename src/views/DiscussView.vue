<template>
  <div class="artalk-comments"></div>
</template>

<script lang="ts">
import 'artalk/dist/Artalk.css'

import { defineComponent } from 'vue'
import Artalk from 'artalk'

export default defineComponent({
  mounted: () => {
    const artalk = new Artalk({
      el: '.artalk-comments',
      pageKey: `233`,
      pageTitle: 'misaka-mikoto.jp-comment-server',
      server: 'https://chat.mashiro.pub:23366',
      site: 'lolimashiro-comment-sys',
      // ...
    })
  },
})
</script>

<style>
.atk-main-editor {
  width: 83.5%;
}
</style>
