<template>
  <div @click="handleClick" id="SidebarLinkDiv">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SidebarLink',
  data() {
    return {
      element: document.getElementById('SidebarLinkDiv'),
    };
  },
  methods: {
    handleClick: function (e: Event) {
      if (this.element != null && this.element.id != 'd')
        this.element.style.backgroundColor = '';
      this.element = e.target as HTMLTextAreaElement;
      this.element.style.backgroundColor = 'var(--color-surface-variant)';
    },
  },
};
</script>
