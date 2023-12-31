<template>
  <MisakaGpt ref="MisakaGpt"></MisakaGpt>
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
import MisakaGpt from './MisakaGpt.vue';
export default {
  name: 'DanmuSender',
  data() {
    return {
      danmu: '',
    };
  },
  methods: {
    send() {
      if (this.danmu.substring(0, '/*GPT*/'.length).indexOf('/*GPT*/') != -1) {
        (this.$refs.MisakaGpt as any).GetReply(
          this.danmu.substring('/*GPT*/'.length)
        );
      } else if (this.danmu != '' && this.danmu.indexOf('/**/') == -1) {
        this.pushDanmu(this.danmu);
        (this.$refs.input as HTMLInputElement).value = '';
      }
    },
  },
  props: ['pushDanmu'],
  components: { MisakaGpt },
};
</script>
