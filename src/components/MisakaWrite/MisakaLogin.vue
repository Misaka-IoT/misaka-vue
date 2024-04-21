<template>
<div v-if="on" style="border: solid;border-radius:25px;padding:10px;margin: 10px;width:250px">
    <from @submit.prevent="Logins">
        邮箱：<input type="text" v-model="em"/><br>
        验证码：<input type="text" v-model="code"/>
        <button :onClick="Send">发送验证码</button><br>
        <input type="submit" value="登陆" />
    </from>
</div>
</template>
<script lang="ts">
  import axios from 'axios';
  export default {
    name: 'MisakaLogin',
    data() {
      return {
        loginx:{token:"",em:""},
        on:false,
        em:"",
        code:"",
      };
    },
    methods: {
        Login(tokens:string,ems:string):Boolean{
            axios
            .get('https://yzm.z2bguoguo.cn/',{
                headers: { mode:"login",em:ems,token:tokens },
            })
            .then((res) => {
                return res.data=="ok";
            });
            return false;
        },
        Logins()
        {
            axios
            .get('https://yzm.z2bguoguo.cn/',{
                headers: { mode:"yzm",em:this.em,code:this.code },
            })
            .then((res) => {
                var b=JSON.parse(res.data);
                if(b?.con=="ok")
                {
                    this.loginx.token=b.token;
                    this.loginx.em=this.em;
                    alert("登陆成功")
                }
                else
                {
                    alert("登陆失败")
                }
            });
        },
        Send()
        {
            axios
            .put('http://yzm.z2bguoguo.cn/',this.em, {
          headers: {},})
            .then((res) => {
                if(res.data=="good")
                {
                    alert("发送成功")
                }
                else
                {
                    alert("发送失败")
                }
            });
        }
    },
    created() {   
        var logins=localStorage.getItem("Login");
        var lo=false;
        if(logins!=null)
        {
            var l=JSON.parse(logins)
            if(this.Login(l?.token,l?.em))
            {
                this.loginx=l
                lo=true;
            }
            else
            {
                localStorage.removeItem("Login")
                lo=false;
            }
        }
        if(!lo)
        {
            this.on=true;
        }
    },
  };
</script>
  