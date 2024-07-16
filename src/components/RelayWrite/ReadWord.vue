<template>
  <div v-if="on" class="Read-on">
    标题：<input
      type="text"
      :value="title"
      style="border: none; border-radius: 5px; margin-bottom: 10px; width: 100%"
      readonly /><br />
    正文：<textarea
      :value="text"
      style="border: none; border-radius: 5px; height: 65%; width: 100%"
      readonly /><br />
    <a style="color:#ffcc00">{{ info }}</a>
  </div>
  <div
    :onclick="off"
    v-if="on"
    style="
      z-index: 9;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
    "></div>
</template>
<script lang="ts">
import axios from 'axios';
export default {
  name: 'ReadWord',
  data() {
    return {
      text: '',
      title: '',
      info: '',
    };
  },
  methods: {
    off() {
      this.$emit('ReadSwich');
    },
    OnRead(id: string) {
      console.log(id);

      this.info = '加载中';
      axios
        .get('https://write.z2bguoguo.cn/', {
          headers: { mode: 'read', page: id },
        })
        .then((res) => {
          try {
            var j = res.data;
            this.title = j.title;
            this.text = j.text;
            this.info = '加载完成';
          } catch (e) {
            this.info = '加载失败';
          }
        });
    },
  },
  props: ['on'],
};
</script>
<style>
.button {
  position: absolute;
  background-color: #b35900;
  color: #fff;
  border: 0.5px #993d00;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.7);
}
.button:hover {
  background-color: #c66910;
  box-shadow: none;
  transition: 0.7s;
}
.button:focus {
  outline-color: transparent;
  outline-style: solid;
  box-shadow: 0 0 0 4px #c66910;
}
</style>
