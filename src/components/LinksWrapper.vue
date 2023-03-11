<template>
  <div @click="handleClick" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LinksWrapper',
  data() {
    return {
      lastLink: document.createElement('a'),
    }
  },
  methods: {
    handleClick: function (e: Event): void {
      const target = e.target as HTMLAnchorElement
      if (target.target === '_blank') return
      if (this.lastLink) {
        this.lastLink.style.backgroundColor = ''
      }
      target.style.backgroundColor = 'var(--color-surface-variant)'
      this.lastLink = target
    },
  },
}
</script>
