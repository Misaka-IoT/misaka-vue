<template>
    <button class="sidebar-toggler icon-btn material-symbols-outlined" @click="onmusic" id="onmusicsbutton">{{but}}</button>
</template>
<script lang="ts">
  export default {
    name: 'onmusic',
    data() {
        return {
            but:""
        };
    },
    created() {
            if(this.getCookie("onmusic")=="null")
            {
                this.but="volume_off"
            }
            else
            {
                this.but="volume_up"
            }
            
    },
    methods:
    {
        onmusic:function()
        {
            var button=document.getElementById("onmusicsbutton");
            var muss=document.getElementById("musc");
            if(this.getCookie("onmusic")!="null" && button !=null)
            {
                this.SetCookie("onmusic","null");
                button.innerText="volume_off";
                var rp=document.getElementById("rps");
                if(rp!=null && rp.parentNode!=null)
                rp.parentNode.removeChild(rp);
            }
            else if(button !=null)
            {
                this.SetCookie("onmusic","true");
                button.innerText="volume_up"
                var RP=document.createElement("random-player")
                RP.id="rps";
                if(muss!=null)
                muss.appendChild(RP);
            }
        },
        SetCookie:function(name:String,value:string)
        {
            document.cookie = name + "="+ value;
        },
        getCookie:function(name:string)
        {
            var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
            if(arr != null){
                return arr[2];
            }else{
                return "null";
            }
        },
        flashx:function()
        {
            if(this.getCookie("onmusic")=="null")
            {
                var rp=document.getElementById("rps");
                if(rp!=null&&rp.parentNode!=null)
                rp.parentNode.removeChild(rp);
            }
        }
    }
  };
  
</script>