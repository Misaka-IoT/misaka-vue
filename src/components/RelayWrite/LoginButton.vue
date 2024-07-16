<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <Login :on="visible" @LoginSwich="toggle_visibility"></Login>
  <button class="icon-btn standard no-color" :onClick="toggle_visibility">
    <Icon icon="material-symbols:login" width="24" height="24" />
  </button>
</template>
<script lang="ts">
import Login from './Login.vue';
export default {
  name: 'LoginButton',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggle_visibility() {
      this.visible = !this.visible;
    },
  },
  created() {},
  components: { Login },
};
</script>
