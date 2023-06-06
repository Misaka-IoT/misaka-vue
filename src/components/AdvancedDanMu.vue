<template>
  <a class="a" :style="{'color':color}">{{ danmu }}</a>
</template>
  <script lang="ts">
  export default {
    name: 'AdvancedDanMu',
    props:{txt:String},
    data() {
      return {
        danmu:'',
        color:'#D0CFCF',
      };
    },
    methods: {
    },
    created() {
      if(this.txt!=undefined)
      {  
        if(this.txt.charAt(0)=='#')
        {
          this.color=this.txt.substring(0,7)
          this.danmu=this.txt?.toString().substring(7)
        }
        else
        {
          this.danmu=this.txt?.toString()
        }
        
      }
    },
    
  };
</script>
<style lang="scss" scoped>
.a{
  opacity:0.5;
  font-weight:bold;
}
</style>
  