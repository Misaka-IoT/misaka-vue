<script setup lang="ts">
const props = defineProps(['cdnRootUrl']);
// eslint-disable-next-line vue/no-setup-props-destructure
let cdnRootUrl = props.cdnRootUrl;
let awardCards = [
  {
    title: '红宝石项链',
    time: '2010',
    imgUrl: `${cdnRootUrl}poster/2010-ruby-nl.JPG`,
  },
  {
    title: '红宝石项链',
    time: '2011',
    imgUrl: `${cdnRootUrl}poster/2011-aquamarine-nl.JPG`,
  },
  {
    title: '神圣皇冠（萌王）',
    time: '2011',
    imgUrl: `${cdnRootUrl}poster/2011-heavenly-tiara.JPG`,
  },
  {
    title: '红宝石项链',
    time: '2012',
    imgUrl: `${cdnRootUrl}poster/2012-diamond-circlet.JPG`,
  },
  {
    title: '钻石头环',
    time: '2012',
    imgUrl: `${cdnRootUrl}poster/2012-ruby-nl.JPG`,
  },
  {
    title: '海蓝宝石项链',
    time: '2014',
    imgUrl: `${cdnRootUrl}poster/2014-aquamarine-nl.JPG`,
  },
  {
    title: '萌皇',
    time: '2017',
    imgUrl: `${cdnRootUrl}poster/2017-tournament-champion.JPG`,
  },
  {
    title: '萌皇',
    time: '2018',
    imgUrl: `${cdnRootUrl}poster/2018-tournament-champion.JPG`,
  },
  {
    title: '绿宝石项链',
    time: '2020',
    imgUrl: `${cdnRootUrl}poster/2020-emerald-nl.JPG`,
  },
  {
    title: '蓝宝石项链',
    time: '2021',
    imgUrl: `${cdnRootUrl}poster/2021-sapphire-nl.JPG`,
  },
  {
    title: '黄玉项链',
    time: '2022',
    imgUrl: `${cdnRootUrl}poster/2022-topaz-nl.JPG`,
  },
  {
    title: '紫水晶项链',
    time: '2022',
    imgUrl: `${cdnRootUrl}poster/2022-amethyst-nl.PNG`,
  },
  {
    title: '神圣皇冠（萌王）',
    time: '2022',
    imgUrl: `${cdnRootUrl}poster/2022-heavenly-tiara.JPG`,
  },
];
</script>
<template>
  <div class="container">
    <h1>御坂美琴的世萌战绩</h1>

    <div class="awards-container">
      <div
        v-for="(item, index) in awardCards"
        :key="index"
        :style="{ backgroundImage: `url(${item.imgUrl})` }"
        class="award-card"
      >
        <div class="content">
          <h2>{{ item.time }}</h2>
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>

    <hr />

    <h2>辉煌战绩</h2>

    <p>
      世萌历史个人荣誉第一人，世萌御三家（<RouterLink
        to="/wiki/立华奏"
        title="立华奏"
        >天</RouterLink
      >炮<RouterLink to="/wiki/夏娜" title="夏娜">娜 </RouterLink
      >）之一，截止2022年生涯总计<span hl><b>4</b></span
      >次（超越<RouterLink to="/wiki/夏娜" title="夏娜">夏娜</RouterLink>
      独占最多）打入世萌决赛；2次<span hl><b>冠军</b></span
      >（2011神圣皇冠）；3次<span hl><b>亚军</b></span
      >（连续两年亚军）（2010,2020,2021）；1次<span hl><b>殿军</b></span
      >（2013）；1次<span hl><b>常规赛全胜</b></span
      >（2014）；2连<span hl><b>萌皇</b></span
      >（2016,2017）；<span hl><b>1</b></span
      >次头环 (2012恒星组冠军)；<span hl><b>8</b></span
      >条项链，共<span hl><b>12</b></span
      >张（位列第一）荣誉海报；常规赛连胜<span hl><b>91</b></span
      >场（位列第2，仅次于<RouterLink to="/wiki/立华奏" title="立华奏"
        >立华奏</RouterLink
      >）。
      御坂美琴在世萌生涯的顶级战力持续时间之长，使得她从2010年亚军之始，便成为世萌公认的顶级选手之一，不但是世萌史上<span
        hl
        ><b>第一位</b></span
      >萌王后仍能取得项链的角色(2012红宝石)，且直到萌王禁赛前一年（2014）依然拿下常规赛全胜战绩，萌王禁赛后拿下2连萌皇。2020年萌王解禁依然保持顶级的战力。她是世萌史上<span
        hl
        ><b>第一位</b></span
      >以及<span hl><b>唯一一位</b></span
      >双萌皇角色、<span hl><b>第一位</b></span
      >以及<span hl><b>唯一一位</b></span
      >萌皇连霸(2017、2018)角色和<span hl><b>第一位</b></span
      >十海报角色以及<span hl><b>第一位</b></span
      >"召唤神龙"(集齐七色宝石奖项)角色，也是迄今为止<span hl
        ><b>第一位</b></span
      >以及<span hl><b>唯一一位</b></span
      >萌王解禁后首年拿链的角色(2020年绿宝石)，更是<span hl
        ><b>唯一一位</b></span
      >解禁首年起两度打入决赛的角色。十年炮厨，薪火相传；历久弥新，无限进步。（摘自<a
        href="https://zh.moegirl.org.cn/%E5%BE%A1%E5%9D%82%E7%BE%8E%E7%90%B4#.E8.A7.92.E8.89.B2.E8.8D.A3.E8.AA.89"
        target="_blank"
        >萌娘百科</a
      >）
    </p>
  </div>
</template>

<style lang="scss">
.container {
  h1 {
    margin-left: 30px;
  }
  .awards-container {
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
    .award-card {
      width: 280px;
      height: 400px;
      margin: 30px;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      border-radius: 2px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      background-size: cover;
      .content {
        padding: 20px;
        text-align: center;
        transform: translateY(70px);
        opacity: 1;
        transition: 0.5s;
        z-index: 2;
        h3 {
          font-size: 1.8em;
          color: #fff;
          z-index: 1;
          position: relative;
          top: -30px;
        }
        p {
          font-size: 1em;
          color: #fff;
          font-weight: 300;
          position: relative;
          top: -30px;
        }
        a {
          position: relative;
          display: inline-block;
          padding: 8px 20px;
          top: -30px;
          background: #fff;
          color: #000;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 500;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        h2 {
          position: relative;
          top: -30px;
          z-index: 1;
          font-size: 3em;
          color: rgb(255, 255, 255);
          pointer-events: none;
        }
      }
    }
    .award-card:hover {
      .content {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    .award-card:before {
      background: linear-gradient(90deg, #7fefbd 0%, #fff689 50%, #ec0b43 100%);
      content: '';
      position: absolute;
      margin: 32px;
      width: 285px;
      height: 405px;
      border-radius: 4px;
      filter: blur(3px);
      z-index: -1;
      transform: scale(0.99) translateY(3px);
    }
    .award-card::after {
      border-radius: 2px;
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      background: rgba(1, 1, 1, 0.15);

      position: absolute;
      transition: 1s;
    }
    .award-card:hover:after {
      background: rgba(1, 1, 1, 0.5);
      backdrop-filter: blur(1px);
    }
  }

  // highlight
  [hl] {
    color: #ec0b43;
  }
}
</style>
