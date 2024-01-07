<template>
  <div>
    <div class="container">
      <h1>关于</h1>
      <h2>一、网站</h2>
      <p>
        这个网站为<i><b>公益网站</b></i
        >，非必须情况下，不接受资助或投资，不会发起<i><b>汇款</b></i
        >或强制性付款等活动，仅以自愿捐款形式在底部留有一个收款码以贴支出，不存在其他收款方式。目前共回收成本：8元。
      </p>
      <hr />
      <h2>二、联系</h2>
      <p>你可以通过以下方式同我们取得联系。</p>
      <ul>
        <li>QQ群：872099522</li>
        <li>
          GitHub：<a href="https://github.com/Misaka-IoT/misaka-vue"
            >Misaka-IoT/misaka-vue</a
          >
        </li>
      </ul>
      <hr />
      <h2>三、隐私和数据</h2>
      <p>
        在使用评论区系统（包括在匿名发布中填写邮箱）时，网站将会记录您的邮箱，用作联系邮箱。您的邮箱地址不会公开，但可以被管理员查询。
      </p>
      <hr />
      <h2>四、安全</h2>
      <p>
        本网站采用 Let's Encrypt（来源于CloudFlare）
        颁发的TLS/SSL证书，为网站安全性再添一层防护，
        如要验证此网站的安全性，可点击页脚的锁头查看证书的可用性。或点击浏览器上的锁头，已确保当前链接收到保护。
        <a href="ssl" target="_blank">点击此以验证证书完整性</a>
      </p>
      <hr />
      <h2>五、贡献</h2>
      <a
        href="https://github.com/Misaka-IoT/misaka-vue/graphs/contributors"
        target="_blank"
        >详情</a
      >
      <div class="contributors">
        <ContributorCard
          username="misaka-fans"
          name="Misaka Fans"
          email="contact@misaka-fans.space">
          主要贡献：绝大多数内容，留言板，PWA，照片收集、整理，吉祥物，细节内容审查修改
        </ContributorCard>
        <ContributorCard
          username="volpan"
          name="HugePancake"
          email="huge.pancake.zxr@gmail.com">
          主要贡献：样式，package相关，规范化，代码复用，开启vue项目
        </ContributorCard>
        <ContributorCard
          username="yutou1151"
          name="高坂 筑穂"
          email="yutou1151@misaka-mikoto.jp">
          主要贡献：字体，格式化，代码复用，服务器&域名&cdn提供，站长的code-server提供（doge
        </ContributorCard>
        <ContributorCard
          username="Ma3h1r0"
          name="Mashiro"
          email="lov.mashiro.e@gmail.com">
          主要贡献：搭建&管理评论系统，人类验证
        </ContributorCard>
        <ContributorCard
          username="z2bguoguo"
          name="中二病guoguo"
          email="z2bguoguo@z2bguoguos.ml">
          主要贡献：css切换器，静音按钮，人际关系页面，部分内容的美化，参与vue版改造
        </ContributorCard>
        <ContributorCard
          username="longyu2"
          name="龙驭"
          email="litong4576@gmail.com">
          主要贡献：迁移到vue，样式修改，新页面建设，参与vue版改造
        </ContributorCard>
        <ContributorCard
          username="sudoriaa"
          name="苏多莉亚"
          email="rc@ricecandy.cn">
          主要贡献：网站页面优化、新页面开发、资源提供
        </ContributorCard>
      </div>
      <hr />
      <h2>六、项目引用</h2>
      <p>
        <a href="https://visjs.github.io/vis-network/" target="_blank"
          >Vis-network（许可证：MIT）：人物介绍</a
        ><br />
        <a href="https://github.com/hellodigua/vue-danmaku" target="_blank"
          >vue3-danmaku（许可证：MIT）：弹幕功能</a
        ><br />
        <a href="https://github.com/arcxingye/EatKano/" target="_blank"
          >吃掉小鹿乃（许可证：MIT）：新概念音游</a
        ><br />
        <a href="https://github.com/Sitronik/vue3-beautiful-chat" target="_blank"
          >vue3-beautiful-chat（许可证：MIT）：御坂AI入口UI</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContributorCard from '@/components/ContributorCard.vue';
</script>

<style scoped>
img {
  max-width: 100%;
  width: 400px;
  height: auto;
}

.contributors {
  margin-top: 16px;
  column-count: 3;
  column-gap: 16px;
}

@media (max-width: 1080px) {
  .contributors {
    column-count: 2;
  }
}

@media (max-width: 780px) {
  .contributors {
    column-count: 1;
  }
}
</style>
