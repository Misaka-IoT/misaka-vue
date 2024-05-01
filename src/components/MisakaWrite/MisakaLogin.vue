<template>
<div v-if="on" class="Login-on">
    邮&nbsp&nbsp&nbsp箱：<input type="text" v-model="em" style="border: none;border-radius: 50px"/><br>
    验证码：<input type="text" v-model="code" style="border: none;border-radius: 50px 0px 0px 50px;"/>
    <button :onClick="Send" style="border: none;border-radius: 0px 50px 50px 0px;" >发送验证码</button><br>
    {{ info }}<br>
    <button :onClick="Logins" style="border: none;border-radius: 50px ;margin-left: 100px;margin-top: 10px;width: 100px;height: 50px;">登陆</button>
</div>
</template>
<script lang="ts">
  import axios from 'axios';
  export default {
    name: 'MisakaLogin',
    data() {
      return {
        loginx:{token:"",em:""},
        em:"",
        code:"",
        login:false,
        info:'',
      };
    },
    methods: {
        async Login(){
            
            var logins=localStorage.getItem("Login");
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
                        this.login=true;
                    }
                    else
                    {
                        localStorage.removeItem("Login")
                        this.login=false;
                    }
                    
                });
               
            }
            //this.on=!lo;
            
            
        },
        Logins()
        {
            this.info='正在登陆'
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
                    this.info="登陆成功"
                    this.em=''
                    this.code=''
                    this.$emit("LoginSwich")
                }
                else
                {
                    this.code=''
                    this.info="登陆失败"
                }
            });
        },
        Send()
        {
            this.info='正在发送'
            axios
            .put('https://yzm.z2bguoguo.cn/',this.em, {
          headers: {},})
            .then((res) => {
                if(res.data=="good")
                {
                    this.info="发送成功"
                }
                else
                {
                    this.info="发送失败"
                }
            });
        }
    },
    created() {   
        this.Login();
    },
    props:['on'],
  };
</script>
  