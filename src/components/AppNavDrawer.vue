<template>
  <div :class="classes">
    <span class="app-nav-drawer__overlap" @click="closeDrawer"></span>
    <aside
      class="app-nav-drawer"
      tabindex="-1"
      ref="drawer"
      @keydown="handleKeydown">
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
      ].join(' ')
    },
  },
  data() {
    return {
      opened: false,
      opening: false,
      closing: false,
    }
  },
  methods: {
    openDrawer() {
      this.opening = true
      setTimeout(() => {
        this.opening = false
        this.opened = true
        ;(this.$refs.drawer as HTMLElement).focus()
        this.statusChanged?.(this.opened)
        // this.updateDrawerFocusTrap();
      }, 16)
    },
    closeDrawer() {
      this.closing = true
      setTimeout(() => {
        this.closing = false
        this.opened = false
        this.statusChanged?.(this.opened)
        // this.updateDrawerFocusTrap();
      }, 200)
    },
    handleKeydown({ key }: { key: string }) {
      switch (key) {
        case 'ESC':
        case 'Escape':
          this.closeDrawer()
          break

        default:
          break
      }
    },
  },
  props: {
    open: Boolean,
    statusChanged: Function,
  },
  watch: {
    open: function (newVal, oldVal) {
      if (newVal === oldVal) return
      newVal ? this.openDrawer() : this.closeDrawer()
    },
  },
}
</script>

<style lang="scss">
.app-nav-drawer a {
  position: relative;
  padding: 0 12px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  border-radius: 12px;
  flex-shrink: 0;
  color: var(--color-text);
}

.app-nav-drawer a::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: currentColor;
  border-radius: inherit;
  opacity: 0;
}

.app-nav-drawer a:hover::before {
  opacity: 0.08;
}

.app-nav-drawer a:focus-visible:before {
  opacity: 0.12;
}

// 外链图标
.app-nav-drawer a[target='_blank']::after {
  content: '';
  margin-left: auto;
  display: inline-block;
  width: 16px;
  height: 16px;
  color: var(--color-text);
}
[data-theme='light'] .app-nav-drawer a[target='_blank']::after {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iYmxhY2siIGQ9Ik02LjQgMThMNSAxNi42TDE0LjYgN0g2VjVoMTJ2MTJoLTJWOC40TDYuNCAxOFoiPjwvcGF0aD48L3N2Zz4K');
}
[data-theme='dark'] .app-nav-drawer a[target='_blank']::after {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik02LjQgMThMNSAxNi42TDE0LjYgN0g2VjVoMTJ2MTJoLTJWOC40TDYuNCAxOFoiPjwvcGF0aD48L3N2Zz4K');
}

.icon-btn:active::before,
.fab:active::before,
.app-nav-drawer a:active:before {
  opacity: 0.16;
}

.drawer-opener {
  display: none !important;
}

@media (max-width: 1200px) {
  .drawer-opener {
    display: inline-flex !important;
  }
}

.app-nav-drawer__container {
  display: flex;
  height: 100%;
  width: 100%;
}

.app-nav-drawer__overlap {
  background-color: #000000;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  will-change: opacity;
  z-index: 1100;
}

.app-nav-drawer {
  background: var(--color-background);
  border-inline-end: 1px solid var(--color-outline);
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
    background: var(--color-surface);
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
