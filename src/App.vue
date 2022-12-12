<script setup lang="ts">
import { RouterView } from 'vue-router';

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
</template>

<style scoped lang="scss"></style>
