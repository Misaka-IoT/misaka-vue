<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="contributor-card">
    <div class="headline">
      <div class="avatar">
        <img
          :src="'https://avatars.githubusercontent.com/' + username"
          :alt="name" />
      </div>
      <div class="info">
        <span class="name">{{ name }}</span>
        <a class="github" :href="'https://github.com/' + username">
          <Icon icon="mdi:github" />
          @{{ username }}
        </a>
        <a class="email" :href="'mailto:' + email">
          <Icon icon="material-symbols:alternate-email" />
          {{ email }}
        </a>
      </div>
    </div>
    <hr />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'contributor-card',
  props: {
    email: String,
    username: String,
    name: String,
  },
}
</script>

<style lang="scss" scoped>
.contributor-card {
  margin-bottom: 8px;
  display: inline-block;
  padding-right: 16px;
  padding-bottom: 16px;
  width: 100%;
  border: 1px solid #9a9a9a;
  border-radius: 16px;
  height: 215px;
}

.headline {
  display: flex;
  margin-top: 16px;
}

.avatar img {
  margin-left: 16px;
  width: 50px;
  height: 50px;
  border-radius: 16px;
}

.info {
  margin-left: 16px;

  a {
    display: block;
    color: var(--color-theme);
    font-weight: 500;
    text-decoration: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: var(--color-theme);
    vertical-align: middle;
  }
}

hr {
  margin-left: 16px;
  border-color: #eaeaea;
}

.content {
  margin-top: 16px;
  margin-left: 16px;
}
</style>
