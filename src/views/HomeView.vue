<script setup lang="ts">
import DelText from '@/components/DelText.vue';
import { ref } from 'vue';
let carouselHeight = ref('60vw'); // 定义一变量控制轮播高度,在页面宽度不同时返回不同高度
if (window.innerWidth > 600) {
  carouselHeight.value = '400px';
}

let isPnone = ref(window.innerWidth > 600);
</script>
<template>
  <div class="homeview-box">
    <section class="banner">
      <p style="font-size: 120%; font-family: 'Yuji Mai'">
        君の指先を舞ってる電光は、私の一生変わらない信仰であり、このレールガンだけが永遠！
      </p>
    </section>
    <section class="marquee">
      <el-carousel
        v-if="isPnone"
        type="card"
        class="carousel"
        :height="carouselHeight"
        arrow="never"
        interval="3500">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            fit="cover"
            :src="`https://raw.misaka-fans.space/pic/waterfall${item}.webp`"
            class="carousel-img"
            alt="" />
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        v-else
        class="carousel"
        :height="carouselHeight"
        arrow="never"
        interval="3000">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            fit="cover"
            :src="`https://raw.misaka-fans.space/pic/waterfall${item}.webp`"
            class="carousel-img"
            alt="" />
        </el-carousel-item>
      </el-carousel>
    </section>
    <main class="container">
      <div class="music-player"></div>
      <hr />
      <h2>Hi，朋友，你好！</h2>
      <p>
        如果你还不了解御坂美琴的话，这个页面可能会帮到你！欢迎访问导航栏中的“关于电磁炮”栏目详细了解御坂美琴。
      </p>
      <p>
        御坂美琴(简介)：为人正义感强，是一个有着男孩子般的爽朗性格的中学生，但是却没有耐心，非常不坦率。
        <del-text>（遇到当麻会脸红）</del-text>
      </p>
      <img
        src="../assets/炮姐吃蛋糕.webp"
        alt="炮姐吃蛋糕"
        style="width: 180px; height: 180px; float: right" />
      <hr />
      <h2>你可以在这里找到：</h2>
      <p>超电磁炮小百科：新人可以初步了解御坂美琴的性格、人设等信息。</p>
      <p>美琴相册：收集、分享美琴的照片</p>
      <p>
        新概念音游：引用自项目<a href="https://github.com/arcxingye/EatKano"
          >吃掉小鹿乃</a
        >
      </p>
      <p>获奖时间线：了解美琴在各个萌战活动中的战绩</p>
      <p>留言板：在这里留下你宝贵的意见</p>
      <hr />
      <h2>什么？想加入计划？</h2>
      <p>
        如果你想参加开发这个网页，或有好的建议，欢迎联系<a
          href="mailto:contact@misaka-fans.space"
          >contact@misaka-fans.space</a
        >或在bilibili私信<a
          href="https://space.bilibili.com/1421279902"
          target="_blank"
          >@shbwb</a
        >，也可以访问<a
          href="https://github.com/Misaka-IoT/misaka-vue"
          target="_blank"
          >GitHub 仓库</a
        >获取更多信息！QQ群：872099522
      </p>
    </main>
  </div>
  <el-backtop :right="100" :bottom="300" />
</template>

<style lang="scss">
.banner {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 64px;
  padding: 12px 24px;
  z-index: 10;
  p {
    color: var(--color-theme);
    font-size: 0.875rem;
    font-weight: 100;
    letter-spacing: 0.5em;
    margin: 0;
  }
}

.marquee {
  margin-top: 32px;
}

.el-carousel--horizontal {
  overflow: hidden;
}
.el-carousel__mask {
  background-color: var(--color-background) !important;
}

@media screen and (min-width: 600px) {
  .homeview-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .marquee {
      width: 70vw;

      .carousel-img {
        display: flex;
        justify-content: center;
        height: 380px;
        border: 4px solid #c49582;
        border-radius: 10px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .homeview-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .marquee {
      width: 100%;
      display: flex;
      justify-content: center;

      .carousel {
        width: 100vw;
        height: 55vw;
      }
    }
  }
}
</style>
