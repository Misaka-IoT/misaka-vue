<template>
  <button
    class="icon-btn standard no-color material-symbols-outlined"
    @click="ThemeSwitchers"
    id="ThemeSwitcherButton"
  >
    {{ icon }}
  </button>
</template>
<script lang="ts">
export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      icon: '',
    };
  },
  created() {
    this.icon =
      localStorage.getItem('settings.theme') == 'dark' ? 'sunny' : 'bedtime';
  },
  methods: {
    ThemeSwitchers: function () {
      if (localStorage.getItem('settings.theme') == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('settings.theme', 'dark');
        this.icon = 'sunny';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('settings.theme', 'light');
        this.icon = 'bedtime';
      }
    },
  },
};
</script>
