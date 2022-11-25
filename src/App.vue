<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import MenuHerder from '@/components/MenuHeader.vue';
</script>

<template>
  <div>
    <MenuHerder></MenuHerder>
  </div>

  <main>
    <router-view />
  </main>
</template>

<style scoped lang="scss"></style>
