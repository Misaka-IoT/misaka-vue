<template>
  <li>
    <a :title="name" :href="link" target="_blank">
      <div>{{ name }}</div>
      <p>{{ desc }}</p>
    </a>
  </li>
</template>

<style lang="scss" scoped>
li {
  position: relative;
  margin: 0;
  padding: 0 10px;
  max-width: 50ch;

  a {
    display: block;
    border: 1px solid var(--color-outline);
    border-left: 3px solid var(--color-theme);
    border-radius: 6px;
    padding-left: 15px;
    transition: all 0.3s;
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 26px 40px -24px rgba(0, 0, 0, 0.3);
    }

    div {
      margin: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border-bottom: 1px dashed var(--color-outline);
      font-size: 1.3rem;
      color: var(--color-text-variant);
    }
    p {
      margin: 12px;
    }
  }
}
</style>

<script lang="ts">
export default {
  name: 'friend-link',
  props: {
    name: String,
    desc: String,
    link: String,
  },
}
</script>
