<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>
<template>
  <div id="AddD">
    <form @submit.prevent="">
      <fieldset>
        <input
          type="text"
          v-model="danmu"
          maxlength="8"
          ref="input"
          style="
            border: none;
            border-radius: 50px 0px 0px 50px;
            outline: none;
          " />
        <input
          type="submit"
          value="发送"
          style="border: none; border-radius: 0px 50px 50px 0px"
          @click="send" />
        <button @click="loops" class="icon-btn standard no-color">
          <Icon :icon="icon" width="24" height="24" />
        </button>
        <button @click="ondanmu" class="icon-btn standard no-color">
          <Icon :icon="icon2" width="24" height="24" />
        </button>
      </fieldset>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DanmuSender',
  data() {
    return {
      danmu: '',
      icon: 'material-symbols:sync-disabled',
      icon2: 'material-symbols:toggle-on',
    }
  },
  methods: {
    send() {
      if (this.danmu != '' && this.danmu.indexOf('/**/') == -1) {
        this.pushDanmu(this.danmu)
        ;(this.$refs.input as HTMLInputElement).value = ''
      }
    },
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
    this.icon =
      localStorage.getItem('danmu.loops') == '1'
        ? 'material-symbols:sync'
        : 'material-symbols:sync-disabled'
    this.icon2 =
      localStorage.getItem('danmu.on') == '1'
        ? 'material-symbols:toggle-on'
        : 'material-symbols:toggle-off'
  },
  props: ['pushDanmu', 'loopsDanmu', 'onDanmu'],
}
</script>
