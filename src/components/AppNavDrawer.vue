<template>
  <div :class="classes">
    <span class="app-nav-drawer__overlap" @click="closeDrawer"></span>
    <aside
      class="app-nav-drawer"
      tabindex="-1"
      ref="drawer"
      @keydown="handleKeydown"
    >
      <slot name="drawer"></slot>
    </aside>
    <div class="app-nav-drawer__contents" ref="contents">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    classes(): string {
      return [
        'app-nav-drawer__container',
        this.opened ? 'app-nav-drawer--opened' : '',
        this.opening ? 'app-nav-drawer--opening' : '',
        this.closing ? 'app-nav-drawer--closing' : '',
      ].join(' ');
    },
  },
  data() {
    return {
      opened: false,
      opening: false,
      closing: false,
    };
  },
  methods: {
    openDrawer() {
      this.opening = true;
      setTimeout(() => {
        this.opening = false;
        this.opened = true;
        (this.$refs.drawer as HTMLElement).focus();
        this.statusChanged?.(this.opened);
        // this.updateDrawerFocusTrap();
      }, 16);
    },
    closeDrawer() {
      this.closing = true;
      setTimeout(() => {
        this.closing = false;
        this.opened = false;
        this.statusChanged?.(this.opened);
        // this.updateDrawerFocusTrap();
      }, 200);
    },
    handleKeydown({ key }: { key: string }) {
      switch (key) {
        case 'ESC':
        case 'Escape':
          this.closeDrawer();
          break;

        default:
          break;
      }
    },
  },
  props: {
    open: Boolean,
    statusChanged: Function,
  },
  watch: {
    open: function (newVal, oldVal) {
      if (newVal === oldVal) return;
      newVal ? this.openDrawer() : this.closeDrawer();
    },
  },
};
</script>

<style scoped lang="scss">

</style>
