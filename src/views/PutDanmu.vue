<template>
  <form @submit.prevent="putDanmu" style="text-align: center">
    页面（如/aboutrailgun）：<input type="text" ref="input" v-model="page" />
    <button type="button" @click="getDanmu">获取弹幕</button>
    <br />
    弹幕内容：<textarea v-model="danmu" />
    <br />
    密钥：<input type="text" ref="input" v-model="password" />
    <br />
    <input type="submit" value="修改弹幕" />
  </form>
  <h1 style="color: red; text-align: center" id="PutDanmuInfo"></h1>
</template>
<script lang="ts">
import axios from 'axios';
export default {
  data() {
    return {
      page: '',
      danmu: '',
      password: '',
    };
  },
  methods: {
    putDanmu() {
      axios
        .put('https://danmu.init-misaka-mikoto.workers.dev/', this.danmu, {
          headers: { page: this.page, password: this.password },
        })
        .then((res) => {
          var info = document.getElementById('PutDanmuInfo');
          if (info != null) {
            info.innerText = res.data;
          }
        });
    },
    getDanmu() {
      axios
        .get('https://danmu.init-misaka-mikoto.workers.dev/', {
          headers: { page: this.page },
        })
        .then((res) => {
          this.danmu = res.data;
        });
    },
  },
};
</script>
