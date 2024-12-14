<template>
    <div v-if="on" class="Login-on">
        <div class="juzhong">
            <input
                    type="text"
                    v-model="em"
                    placeholder="填入你的常用邮箱"
                    class="inputbox"/>
            <br/>
        </div>
        <div class="juzhong">
            <input type="text" v-model="code" placeholder="验证码" class="inputbox"/>
            <br/>
        </div>
        <span class="WriteInfo">{{ info }}</span>
        <br/>
        <div class="juzhong">
            <button :onClick="Send" class="LoginButton">发送验证码</button>
            <button :onClick="Logins" class="LoginButton">登录</button>
        </div>
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
            loginx: {token: '', em: ''},
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
                        headers: {mode: 'login', em: l?.em, token: l?.token},
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
                    headers: {mode: 'yzm', em: this.em, code: this.code},
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
                        // 弹窗 代表登录成功
                        this.showAlert('登录成功！');
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
        // 弹窗
        showAlert(message) {
            // 创建一个新的 div 元素作为弹窗
            const alertBox = document.createElement('div');
            alertBox.textContent = message;
            alertBox.style.position = 'fixed';
            alertBox.style.top = '20px';
            alertBox.style.left = '50%';
            alertBox.style.transform = 'translateX(-50%)';
            alertBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            alertBox.style.color = '#fff';
            alertBox.style.padding = '10px 20px';
            alertBox.style.borderRadius = '5px';
            alertBox.style.zIndex = '9999';

            // 将弹窗添加到页面
            document.body.appendChild(alertBox);

            // 设置1秒后自动消失
            setTimeout(() => {
                alertBox.style.display = 'none';                        // 刷新页面
                location.reload();
            }, 1000);
        }
    },
    created() {
        this.Login();
    },
    props: ['on'],
};
</script>


<!--以下是层叠样式表的内容-->
<style>
.Login-on {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 500%;
    border-radius: 8px;
    z-index: 11;
    height: 330%;
    padding: 10px;
    width: var(--Login-w);
    border: 2px black solid;
    backdrop-filter: blur(4px);
    opacity: 0.7;
    background: var(--color-theme);
}

.juzhong {
    display: flex;
    justify-content: center;
}

.inputbox {
    line-height: 30px;
    margin: 10px;
    width: 70%;
    border: 2px black solid;
}

.inputbox::placeholder {
    font-size: 1.6em;
}

.LoginButton {
    background: transparent;
    border: 2px solid #0099cc;
    border-radius: 6px;
    color: black;
    padding: 8px 16px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin-right: 5%;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
}

.LoginButton:hover {
    background: #0099cc;
}

.WriteInfo {
    color: #ffcc00;
}
</style>
