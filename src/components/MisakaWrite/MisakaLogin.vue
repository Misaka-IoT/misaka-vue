<template>
<div v-if="on" style="border: solid;border-radius:25px;padding:10px;margin: 10px;width:250px">
    邮箱：<input type="text" v-model="em"/><br>
    验证码：<input type="text" v-model="code"/>
    <button :onClick="Send">发送验证码</button><br>
    <button :onClick="Logins">登陆</button>
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
        async Login(){
            
            var logins=localStorage.getItem("Login");
            var lo=false;
            if(logins!=null)
            {
                var l=JSON.parse(logins)
                await axios
                .get('https://yzm.z2bguoguo.cn/',{
                    headers: { mode:"login",em:l?.em,token:l?.token },
                })
                .then((res) => {
                    if(res.data=="ok")
                    {
                        this.loginx=l
                        lo=true;
                    }
                    else
                    {
                        localStorage.removeItem("Login")
                        lo=false;
                    }
                    
                });
               
            }
            this.on=!lo;
            
            
        },
        Logins()
        {
            axios
            .get('https://yzm.z2bguoguo.cn/',{
                headers: { mode:"yzm",em:this.em,code:this.code },
            })
            .then((res) => {
                var b=res.data;
                if(b?.con=="ok")
                {
                    this.loginx.token=b.token;
                    this.loginx.em=this.em;
                    localStorage.setItem("Login", JSON.stringify( this.loginx))
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
            .put('https://yzm.z2bguoguo.cn/',this.em, {
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
        this.Login();
        
    },
  };
</script>
  