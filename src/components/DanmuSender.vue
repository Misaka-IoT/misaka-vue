<template>
  <div id="AddD">
    <form @submit.prevent="send">
      <input
        type="text"
        v-model="danmu"
        maxlength="100"
        ref="input"
        style="
          border: none;
          border-radius: 50px 0px 0px 50px;
          outline: none;
          opacity: 0.5;
          width: 50px;
        " />
      <input
        type="submit"
        value="发送弹幕"
        style="border: none; border-radius: 0px 50px 50px 0px; opacity: 0.7" />
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DanmuSender',
  data() {
    return {
      danmu: '',
    };
  },
  methods: {
    send() {
      if (this.danmu != '' && this.danmu.indexOf('/**/') == -1) {
        this.pushDanmu(this.danmu);
        (this.$refs.input as HTMLInputElement).value = '';
      }
    },
  },
  props: ['pushDanmu'],
};
</script>
