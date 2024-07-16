<template>
  <div v-if="on" class="Login-on">
    邮&nbsp&nbsp&nbsp箱：<input
      type="text"
      v-model="em"
      style="border: none; border-radius: 50px" /><br />
    验证码：<input
      type="text"
      v-model="code"
      style="border: none; border-radius: 50px 0px 0px 50px; width: 40%" />
    <button
      :onClick="Send"
      style="border: none; border-radius: 0px 50px 50px 0px">
      发送验证码</button
    ><br />
    {{ info }}<br />
    <button
      :onClick="Logins"
      class="button"
      style="
        border: none;
        border-radius: 50px;
        left: 35%;
        top: 70%;
        width: 20%;
        height: 25%;
      ">
      登陆
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
  name: 'Login',
  data() {
    return {
      loginx: { token: '', em: '' },
      em: '',
      code: '',
      login: false,
      info: '',
    };
  },
  methods: {
    off() {
      this.$emit('LoginSwich');
    },
    async Login() {
      var logins = localStorage.getItem('Login');
      if (logins != null) {
        var l = JSON.parse(logins);
        await axios
          .get('https://yzm.z2bguoguo.cn/', {
            headers: { mode: 'login', em: l?.em, token: l?.token },
          })
          .then((res) => {
            if (res.data == 'ok') {
              this.loginx = l;
              this.login = true;
            } else {
              localStorage.removeItem('Login');
              this.login = false;
            }
          });
      }
      //this.on=!lo;
    },
    Logins() {
      this.info = '正在登陆';
      axios
        .get('https://yzm.z2bguoguo.cn/', {
          headers: { mode: 'yzm', em: this.em, code: this.code },
        })
        .then((res) => {
          var b = res.data;
          if (b?.con == 'ok') {
            this.loginx.token = b.token;
            this.loginx.em = this.em;
            localStorage.setItem('Login', JSON.stringify(this.loginx));
            this.info = '登陆成功';
            this.em = '';
            this.code = '';
            this.$emit('LoginSwich');
          } else {
            this.code = '';
            this.info = '登陆失败';
          }
        });
    },
    Send() {
      this.info = '正在发送';
      axios
        .put('https://yzm.z2bguoguo.cn/', this.em, {
          headers: {},
        })
        .then((res) => {
          if (res.data == 'good') {
            this.info = '发送成功';
          } else {
            this.info = '发送失败';
          }
        });
    },
  },
  created() {
    this.Login();
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
