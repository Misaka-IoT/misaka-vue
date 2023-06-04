<template>
  <span class="del-text" title="你知道的太多了……">
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'del-text',
};
</script>

<style lang="scss" scoped>
.del-text {
  display: content;
  background-color: currentColor;
  transition: 120ms background-color;
  transition-delay: 0s;
  cursor: default;
  border-radius: 5px;
}

.del-text:hover {
  background-color: transparent;
  transition-delay: 100ms;
}
</style>
