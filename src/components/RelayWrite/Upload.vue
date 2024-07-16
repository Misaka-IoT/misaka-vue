<template>
  <div v-if="on" class="UP-on">
    标题：<input
      type="text"
      v-model="title"
      style="
        border: none;
        border-radius: 5px;
        margin-bottom: 10px;
        width: 100%;
      " /><br />
    正文：<textarea
      v-model="text"
      style="
        border: none;
        border-radius: 5px;
        height: 65%;
        width: 100%;
      " /><br />
    <span style="color: #ffcc00"> {{ info }}</span
    ><br />
    <button
      :onClick="Send"
      class="button"
      style="
        border: none;
        border-radius: 50px;
        left: 35%;
        top: 88%;
        height: 10%;
      ">
      上传
    </button>
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
  name: 'Upload',
  data() {
    return {
      text: '',
      title: '',
      info: '',
    };
  },
  methods: {
    off() {
      this.$emit('UPSwich');
    },
    Send() {
      var logins = localStorage.getItem('Login');
      if (logins != null) {
        var l = JSON.parse(logins);
        var u = { title: this.title, star: [], text: this.text, writer: l?.em };
        axios
          .put('https://write.z2bguoguo.cn/', u, {
            headers: { mode: 'uplod', em: l?.em, token: l?.token },
          })
          .then((res) => {
            var dt = res.data;
            if (dt == 'ok') {
              this.info = '提交成功';
            } else if (dt == '用户错误') {
              this.info = '用户错误';
            } else {
              this.info = '提交失败';
            }
          });
      } else {
        this.info = '未登录';
      }
    },
  },
  created() {},
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
