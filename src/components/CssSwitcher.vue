<template>
  <button
    class="icon-btn standard no-color material-symbols-outlined"
    @click="CssSwitchers"
    id="CssSwitcherButton"
  >
    {{ but }}
  </button>
</template>
<script lang="ts">
export default {
  name: 'CssSwitcher',
  data() {
    return {
      but: '', //按钮的图标
    };
  },
  created() {
    if (
      localStorage.getItem('css') == 'null' ||
      localStorage.getItem('css') == null ||
      localStorage.getItem('css') == 'main'
    ) {
      this.but = 'sunny'; //设置按钮图标为默认
    } else {
      this.but = 'bedtime'; //设置按钮图标为黑色
    }
  },
  methods: {
    CssSwitchers: function () {
      if (
        localStorage.getItem('css') == 'null' ||
        localStorage.getItem('css') == null ||
        localStorage.getItem('css') == 'main'
      ) {
        document.documentElement.setAttribute('data-theme', 'black');
        localStorage.setItem('css', 'black');
        this.but = 'bedtime';
      } else {
        document.documentElement.setAttribute('data-theme', 'main');
        localStorage.setItem('css', 'main');
        this.but = 'sunny';
      }
    },
  },
};
</script>
