<template>
  <div :class="classes">
    <span class="app-nav-drawer__overlap" @click="closeDrawer"></span>
    <aside class="app-nav-drawer" tabindex="-1" ref="drawer" @keydown="handleKeydown">
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
        this.closing ? 'app-nav-drawer--closing' : ''
      ].join(' ');
    }
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
    }
  },
  props: {
    open: Boolean,
    statusChanged: Function,
  },
  watch: {
    open: function (newVal, oldVal) {
      if (newVal === oldVal) return;
      newVal ? this.openDrawer() : this.closeDrawer();
    }
  }
}
</script>

<style scoped lang="scss">
.app-nav-drawer__container {
  display: flex;
  height: 100%;
  width: 100%;
}

.app-nav-drawer__overlap {
  background-color: var(--md-sys-color-on-surface);
  inset: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  will-change: opacity;
  z-index: 1100;
}

.app-nav-drawer {
  background: var(--md-sys-color-surface);
  border-inline-end: 1px solid var(--md-sys-color-outline);
  flex-shrink: 0;
  height: 100%;
  overflow-y: auto;
  padding: 16px;
  width: 300px;
  will-change: transform;
  z-index: 1200;
}

.app-nav-drawer__contents {
  width: 100%;
}

@media (max-width: 1200px) {
  .app-nav-drawer {
    position: fixed;
    display: none;
    background: var(--md-sys-elevation-surface-2);
    transform: translateX(-100%);
    border-inline-end: 0;
    border-end-end-radius: 16px;
    border-start-end-radius: 16px;
  }

  [dir='rtl'] .app-nav-drawer {
    transform: translateX(100%);
  }

  .app-nav-drawer__opener,
  .app-nav-drawer__closer {
    display: inline-flex;
  }

  .app-nav-drawer--opened .app-nav-drawer {
    display: block;
    transform: translateX(0);
    transition: transform 500ms cubic-bezier(0.2, 0, 0, 1);
  }

  .app-nav-drawer--opened .app-nav-drawer__overlap {
    transition: opacity 500ms cubic-bezier(0.2, 0, 0, 1);
  }

  .app-nav-drawer--opening .app-nav-drawer {
    display: block;
  }

  .app-nav-drawer--opened .app-nav-drawer__overlap {
    opacity: 0.32;
    pointer-events: auto;
  }

  .app-nav-drawer--closing .app-nav-drawer {
    transform: translateX(-100%);
    transition: transform 200ms cubic-bezier(0.2, 0, 0, 1);
  }

  [dir='rtl'] .app-nav-drawer--closing .app-nav-drawer {
    transform: translateX(100%);
  }

  .app-nav-drawer--closing .app-nav-drawer__overlap {
    opacity: 0;
    transition: 200ms cubic-bezier(0.2, 0, 0, 1);
  }
}
</style>
