<template>
  <div :class="classes">
    <header class="app-top-app-bar">
      <section class="app-top-app-bar__sections start">
        <slot name="navBtns"></slot>
      </section>
      <section class="app-top-app-bar__sections middle">
        <span class="app-top-app-bar__title">
          <slot name="title"></slot>
        </span>
      </section>
      <section class="app-top-app-bar__sections end">
        <slot name="actionBtns"></slot>
      </section>
    </header>
    <div class="app-top-app-bar__contents" ref="contents" @scroll="handleScroll">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    classes(): string {
      return [
        'app-top-app-bar__container',
        this.scrolled ? 'app-top-app-bar--scrolled' : '',
      ].join(' ');
    },
  },
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    handleScroll(e: Event) {
      this.scrolled =
        (this.$refs.contents as HTMLDivElement).scrollTop > 0 ? true : false;
    },
  },
  props: {
    backToTop: Boolean,
  },
  watch: {
    backToTop: function (newVal, oldVal) {
      if (newVal === oldVal) return;
      (this.$refs.contents as HTMLDivElement).scroll(0, 0);
    },
  },
};
</script>

<style scoped lang="scss">
.app-top-app-bar {
  color: var(--color-on-theme);
  background-color: rgba(var(--color-theme-rgb), 0.7);
  backdrop-filter: blur(1.5px);
  box-sizing: border-box;
  display: flex;
  min-height: 64px;
  position: relative;
  width: 100%;
  z-index: 800;

  .app-top-app-bar__sections {
    align-items: center;
    display: flex;
    padding: 12px 8px;

    &.middle,
    &.end {
      flex: 1;
    }

    &.start {
      gap: 8px;
      justify-content: flex-start;
    }

    &.end {
      gap: 8px;
      justify-content: flex-end;
    }
  }

  .app-top-app-bar__title {
    display: inline-flex;
    align-items: center;
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0rem;
  }
}

.app-top-app-bar__container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
}

.app-top-app-bar__contents {
  flex: 1;
  overflow: auto;
  margin-top: -64px;
  padding-top: 64px;
  height: calc(100% + 64px);
  scroll-behavior: smooth;
}
</style>
