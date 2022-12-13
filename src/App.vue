<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
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

  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
