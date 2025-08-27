<script lang="ts" setup>
import FriendLink from '@/components/FriendLink.vue';

const data = [
/*
  {
    name: 'ToaruNet',
    desc: '某系列作品粉丝网站，由星之相位运营',
    link: 'https://toarunet.com',
  },
  {
    name: 'Mashiro 的博客',
    desc: 'Happy Coding , Happy Life',
    link: 'https://mashiro.pub',
  },
  {
    name: '静态网站',
    desc: '本网站的上一个版本，使用静态页面构建（停止维护）',
    link: 'https://static.misaka-mikoto.jp/',
  },
  {
    name: "liangburs' blog",
    desc: 'May all the beauty be blessed. —— 《Moon Halo》',
    link: 'https://blog.cnmobile.link/',
  },
*/
  {
    name: '倾丞の小窝',
    desc: '倾丞的小窝，记录生活，分享乐趣',
    link: 'https://blog.qcmoe.com',
  },
  {
    name: '夜灭の小窝',
    desc: '夜灭的小窝，谈天说地热爱二次元且会写bug',
    link: 'https://yujie.pro',
  },
  {
    name: '233355607的生草小站',
    desc: '草还是草',
    link: 'https://www.233355607.xyz',
  },
  {
    name: '萌又萌',
    desc: 'API Ready!',
    link: 'https://moeu.moe',
  },
  {
    name: '莘家小站',
    desc: '写一些不容易查到的东西',
    link: 'https://blog.jiawei.xin',
  },
/*
  {
    name: 'MisakaNoの小破站',
    desc: '这只是一个小破站而已！',
    link: 'https://www.misaka.rest',
  },
*/
  {
    name: '何穷',
    desc: '龙驭的博客 | 世事无极，谁可穷之？',
    link: 'https://blog.misaka-mikoto.cn',
  },
  {
    name: 'Gensokyo Mail',
    desc: '幻想乡邮箱 | 向你喜欢的幻想乡角色发送邮件吧！',
    link: 'https://gskmail.lapis-net.top',
  },

];
</script>
/* tweak */
<template>
  <div class="container">
    <h1>友情链接</h1>
    <ul class="links-container">
      <FriendLink
        v-for="(item, index) in data"
        :key="index"
        :name="item.name"
        :desc="item.desc"
        :link="item.link" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.links-container {
  list-style: none;

  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  gap: 16px;
  box-sizing: border-box;
}
</style>
