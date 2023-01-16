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
    <div
      class="app-top-app-bar__contents"
      ref="contents"
      @scroll="handleScroll"
    >
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
};
</script>

<style scoped lang="scss"></style>
