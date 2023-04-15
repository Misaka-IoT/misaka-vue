<template>
  <div id="AddD">
    <form @submit.prevent="send">
      <input
        type="text"
        v-model="danmu"
        maxlength="8"
        ref="input"
        style="border: none; border-radius: 50px 0px 0px 50px; outline: none" />
      <input
        type="submit"
        value="发送"
        style="border: none; border-radius: 0px 50px 50px 0px" />
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DanmuSender',
  data() {
    return {
      danmu: '',
    }
  },
  methods: {
    send() {
      if (this.danmu != '' && this.danmu.indexOf('/**/') == -1) {
        this.pushDanmu(this.danmu)
        ;(this.$refs.input as HTMLInputElement).value = ''
      }
    },
  },
  props: ['pushDanmu'],
}
</script>
