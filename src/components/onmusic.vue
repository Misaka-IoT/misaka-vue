<template>
  <button
    class="icon-btn standard no-color material-symbols-outlined"
    @click="onmusic"
    id="onmusicsbutton"
  >
    {{ but }}
  </button>
</template>
<script lang="ts">
export default {
  name: 'onmusic',
  data() {
    return {
      but: '', //按钮的图标
    };
  },
  created() {
    if (
      localStorage.getItem('onmusic') == 'null' ||
      localStorage.getItem('onmusic') == null
    ) {
      this.but = 'volume_off'; //设置按钮图标为关闭
    } else {
      this.but = 'volume_up'; //设置按钮图标为开启
    }
  },
  methods: {
    onmusic: function () {
      var button = document.getElementById('onmusicsbutton'); //按钮
      var muss = document.getElementById('musc'); //音乐模块的外部div
      if (
        localStorage.getItem('onmusic') != 'null' &&
        button != null &&
        localStorage.getItem('onmusic') != null
      ) {
        //当音乐模块显示时
        localStorage.setItem('onmusic', 'null');
        button.innerText = 'volume_off';
        var rp = document.getElementById('rps'); //音乐模块
        if (rp != null && rp.parentNode != null) rp.parentNode.removeChild(rp); //删除音乐模块
      } else if (button != null) {
        //当音乐模块被隐藏时
        var rp = document.getElementById('rps'); //音乐模块
        if (rp != null && rp.parentNode != null) {
          //如果音乐模块没有彻底删除，适用于第一次点击按钮的时候
          rp.parentNode.removeChild(rp); //删除音乐模块
        }
        localStorage.setItem('onmusic', 'true');
        button.innerText = 'volume_up';
        var RP = document.createElement('random-player'); //创建音乐模块
        RP.id = 'rps';
        if (muss != null) muss.appendChild(RP); //添加音乐模块
      }
    },
    flashx: function () {
      //刷新按钮的图标和在音乐模块存在但不应该存在的时候删除音乐模块
      if (
        localStorage.getItem('onmusic') == 'null' ||
        localStorage.getItem('onmusic') == null
      ) {
        var rp = document.getElementById('rps');
        if (rp != null && rp.parentNode != null) rp.parentNode.removeChild(rp);
      }
    },
  },
};
</script>
