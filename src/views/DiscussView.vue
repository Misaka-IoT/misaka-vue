<template>
  <div class="artalk-comments"></div>
</template>

<script lang="ts">
import 'artalk/dist/Artalk.css';
import Artalk from 'artalk';

export default {
  mounted: function () {
    new Artalk({
      el: '.artalk-comments',
      // pageKey: `233`,
      pageTitle: '爱我超电磁炮',
      server: 'https://misaka-mikoto.cn/talk',
      site: '爱我超电磁炮',
      // ...
    });

    Artalk.init({
      avatarURLBuilder: (comment) => {
        // 调用
        return `https://cravatar.cn/avatar/${comment.email_encrypted}`;
      },
    });
  },
};
</script>

<style>
.atk-main-editor {
  width: 83.5%;
}
</style>
