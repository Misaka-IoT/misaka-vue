<template>
  <div id="AddD">
    <form @submit.prevent="PostDanmu">
      <input
        type="text"
        v-model="danmu"
        id="danmuinput"
        maxlength=5
        style="border: none; border-radius: 50px 0px 0px 50px; outline: none" />
      <input
        type="submit"
        value="发送"
        style="border: none; border-radius: 0px 50px 50px 0px" />
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'AddDanmuButton',
  data() {
    return {
      danmu: '',
    }
  },
  methods: {
    PostDanmu() {
      if (this.danmu != '') {
        var danmuinput=document.getElementById("danmuinput") as HTMLInputElement
        if(this.danmu.indexOf('/**/')==-1)
        {
          if(danmuinput!=null)
          {
            danmuinput.value=""
          }
          console.log('发送弹幕：', this.danmu)
          this.AddDM(this.danmu)
        }
        else
        {
          alert("请勿输入/**/")
        }
        
      }
    },
  },
  mounted() {
    /*if (localStorage.getItem('beta') != '1') {
      document.getElementById('AddD')?.setAttribute('style', 'display:none')
    }*/
  },
  props: ['AddDM'],
}
</script>
