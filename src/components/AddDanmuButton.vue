<template>
    <div id="AddD">
        <form @submit.prevent="PostDanmu">
            <input type="text" v-model="danmu" style="border:none;border-radius:50px 0px 0px 50px; outline:none;">
            <input type="submit" value="发送" style="border:none;border-radius:0px 50px 50px 0px;">
        </form>
    </div>
</template>
<script lang="ts">
export default {
    name: 'AddDanmuButton',
    data() {
        return {
            danmu:'',
        }
    },
    methods: {
        PostDanmu()
        {
            if(this.danmu!='')
            {
                console.log("发送弹幕：",this.danmu);
                this.AddDM(this.danmu)
            }
        },
    },
    mounted(){
        if(localStorage.getItem("beta")!="1")
        {
            console.log(document.getElementById("AddD"));
            document.getElementById("AddD")?.setAttribute("style","display:none")
        }
    },
    props: ['AddDM'],
}
</script>
  