<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterComponentVue from './components/FooterComponent.vue';
import AppFrame from '@/components/AppFrame.vue';
import DelText from '@/components/DelText.vue';
</script>

<template>
  <div>
    <AppFrame></AppFrame>
  </div>

  <main>
    <router-view />
  </main>

  <!-- <Footer></Footer> -->
  <FooterComponentVue></FooterComponentVue>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>
