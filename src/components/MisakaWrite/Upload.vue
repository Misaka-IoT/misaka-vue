<template>
<div v-if="on" class="UP-on">
    标题：<input type="text" v-model="title" style="border: none;border-radius: 5px;margin-bottom:10px;"/><br>
    正文：<textarea v-model="text" style="border: none;border-radius: 5px;height: 300px;width:300px"/><br>
    {{ info }}<br>
    <button :onClick="Send" style="border: none;border-radius: 50px ;margin-left: 100px;margin-top: 10px;width: 100px;height: 50px;">上传</button>
</div>
</template>
<script lang="ts">
  import axios from 'axios';
  export default {
    name: 'Upload',
    data() {
      return {
        text:'',
        title:'',
        info:''
      };
    },
    methods: {
        Send()
        {
            var logins=localStorage.getItem("Login");
            if(logins!=null)
            {
                var l=JSON.parse(logins)
                var u={title:this.title,star:[],text:this.text,writer:l?.em}
                axios
                .put('https://write.z2bguoguo.cn/',u,{
                    headers: {mode: 'uplod',em:l?.em,token:l?.token },
                })
                .then((res) => { 
                    var dt=res.data
                    if(dt=='ok')
                    {
                        this.info='提交成功'
                    }
                    else if(dt=='用户错误')
                    {
                        this.info='用户错误'
                    }
                    else
                    {
                        this.info='提交失败'
                    }
                });
            }
            else
            {
                this.info='没有登陆'
            }

            
        }
    },
    created() {   
    },
    props:['on'],
  };
</script>
  