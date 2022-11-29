<template>
  <div>
    <button class="fab back-to-top material-symbols-outlined">straight</button>
    <div class="container">
      <h3>一、网站基本性质</h3>
      <p>
        这个网站为公益网站，不是必须的情况下，不接受资助&投资，不会发起汇款等活动。
      </p>
      <hr />
      <h3>二、个人数据管理</h3>
      <p>
        在使用评论区系统（在匿名发布中填写邮箱）时，网站将会记录您的邮箱，用作联系邮箱。您的邮箱地址不会公开，但可以被管理员查询。
      </p>
      <hr />
      <h3>三、贡献者</h3>
      <a
        href="https://github.com/misaka-fans/misaka-fans.github.io/graphs/contributors"
        target="_blank"
        style="padding-left: 10px"
        >详情</a
      >
      <div class="contributors">
        <con-card
          username="misaka-fans"
          name="Misaka Fans"
          email="shbwb@misaka-mikoto.jp"
          >主要贡献：绝大多数内容，留言板，PWA，照片收集、整理</con-card
        >
        <con-card
          username="huge-pancake"
          name="HugePancake"
          email="huge.pancake.zxr@gmail.com"
          >主要贡献：样式，package 相关，规范化，代码复用</con-card
        >
        <con-card
          username="yutou1151"
          name="曾鼋棨"
          email="yutou1151@misaka-mikoto.jp"
          >主要贡献：字体，格式化，代码复用，服务器&域名&cdn提供</con-card
        >

        <con-card
          username="Ma3h1r0"
          name="Mashiro"
          email="lov.mashiro.e@gmail.com"
          >主要贡献：搭建&管理评论系统，人类验证</con-card
        >
      </div>
      <hr />
      <h3>四、TLS/SSL证书</h3>
      <p>
        本网站采用 Japan register service (JPRS)
        颁发的TLS/SSL证书，为网站安全性再添一层防护，
        如要验证此网站的安全性，可点击页脚的锁头查看证书的可用性。或点击浏览器上的锁头，已确保当前链接收到保护。
        <a href="ssl" target="_blank">点击此以验证证书完整性</a>
      </p>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
img {
  max-width: 100%;
  width: 400px;
  height: auto;
}
</style>
