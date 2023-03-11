<template>
  <div class="artalk-comments"></div>
</template>

<script lang="ts">
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

export default {
  mounted: function () {
    new Artalk({
      el: '.artalk-comments',
      pageKey: `233`,
      pageTitle: 'misaka-mikoto.jp-comment-server',
      server: 'https://chat.mashiro.pub:23366',
      site: 'lolimashiro-comment-sys',
      // ...
    })
  },
}
</script>

<style>
.atk-main-editor {
  width: 83.5%;
}
</style>
