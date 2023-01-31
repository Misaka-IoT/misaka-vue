<template>
  <div id="imgboard">
    <img
      v-for="(item, index) in list"
      :key="index"
      v-lazy="item.url"
      :alt="item.name"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: ['cdnRootUrl'],
  data() {
    return {
      list: [
        { url: 'misaka-battle-group.webp', name: '御坂战术小组' },
        { url: 'fight-bot.webp', name: '驱动铠' },
        { url: 'revolution.webp', name: '革命的时刻！' },
        { url: 'railgun.webp', name: 'biu---' },
        { url: 'with-misaki2.webp', name: 'Misaka Misaka' },
        { url: 'with-misaki.webp', name: 'Misaka Misaka' },
        { url: 'misaka-default.webp', name: '美琴经典原皮' },
        { url: 'fly.webp', name: 'Flying Misaka' },
        { url: 'night-kuroko.webp', name: '晚上的黑子，变得更变态了呢' },
        { url: 'kuroko.webp', name: 'kuroko1' },
        { url: 'meet-kamijo.webp', name: '不是上琴桥！' },
        { url: 'with-friends.webp', name: '似曾相识的图片？' },
        { url: 'cafe.webp', name: '在咖啡店' },
        { url: 'eat-cake.webp', name: '美琴吃蛋糕' },
        { url: 'daihaseisai2.webp', name: '派大星祭' },
        { url: 'daihaseisai3.webp', name: '派大星祭' },
        { url: 'sister10031.webp', name: 'Last to die…' },
        { url: 'tsundere2.webp', name: 'tesundere' },
        { url: 'daihaseisai.webp', name: '惩罚游戏？！' },
        { url: 'kawaii-no-misaka.webp', name: 'awa' },
        { url: 'railgun-t.webp', name: 'Railgun-T!' },
        { url: 'shining-eyes.webp', name: ':D' },
        { url: 'younger-misaka.webp', name: 'sis…ter?' },
        { url: 'noon-smile.webp', name: 'Smile' },
        { url: 'night-smile.webp', name: 'Smile' },
        { url: 'care.webp', name: 'Who are you caring about?' },
        { url: 'chest.webp', name: 'hentai kuroko' },
        { url: 'sister9982.webp', name: 'Remember her!' },
        { url: 'tsundere.webp', name: 'tsundere' },
        { url: 'worring.webp', name: 'Why are you worring?' },
        { url: 'get-up.webp', name: 'Good morning, Misaka!' },
      ],
    };
  },
  created: function () {
    let that = this;
    this.list.forEach((element) => {
      element.url = that.cdnRootUrl + 'pic/' + element.url;
    });
  },
};
</script>
<style scoped lang="scss">
img {
  border: 5px solid silver;
  box-shadow: 12px 12px 13px 1px gray;
}

@media (min-width: 1200px) {
  #imgboard {
    height: 230vw;
    display: flex;
    flex-flow: column wrap;
    padding: 0%;
    img {
      margin: 1vw;
      width: calc(30.8%);
      border-radius: 30px;
    }
  }
}
@media (max-width: 1500px) {
  #imgboard {
    height: 4800px;
    img {
      margin: 2vw;
      width: calc(45%);
      border-radius: 20px;
    }
  }
}

@media (max-width: 1200px) {
  #imgboard {
    height: 9250px;
    img {
      margin: 3vw;
      width: calc(94%);
      border-radius: 20px;
    }
  }
}
</style>
