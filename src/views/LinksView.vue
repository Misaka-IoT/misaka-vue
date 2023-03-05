<template>
  <div class="container">
    <div class="page-friends">
      <ul class="readers-list clearfix">
        <li class="animated" style="visibility: visible">
          <a
            rel="project"
            title="ToaruNet Project"
            target="_blank"
            href="https://toarunet.com"
          >
            <div>ToaruNet</div>
            <div>某系列作品粉丝网站,由星之相位运营</div>
          </a>
        </li>

        <li class="animated" style="visibility: visible">
          <a
            rel="colleague"
            title="mashiro blog"
            target="_blank"
            href="https://mashiro.pub"
          >
            <div>Mashiro的博客</div>
            <div>Happy Coding , Happy Life</div>
          </a>
        </li>

        <li class="animated" style="visibility: visible">
          <a
            title="misaka-fans"
            target="_blank"
            href="https://static.misaka-mikoto.jp/"
          >
            <div>静态网站</div>
            <div>本网站的上一个版本，使用静态页面构建(停止维护)</div>
          </a>
        </li>
        <li class="animated" style="visibility: visible">
          <a
            title="LiangBurs' Blog"
            target="_blank"
            href="https://blog.cnmobile.link"
          >
            <div>LiangBurs' Blog</div>
            <div>May all the beauty be blessed. —— 《Moon Halo》</div>
          </a>
        </li>
        <li class="animated" style="visibility: visible">
          <a title="倾丞の小窝" target="_blank" href="https://blog.qcmoe.com">
            <div>倾丞の小窝</div>
            <div>倾丞的小窝,记录生活,分享乐趣</div>
          </a>
        </li>

        <li class="animated" style="visibility: visible">
          <a title="夜灭の小窝" target="_blank" href="https://yujie.pro">
            <div>夜灭の小窝</div>
            <div>夜灭的小窝，谈天说地热爱二次元且会写bug</div>
          </a>
        </li>

        <li class="animated" style="visibility: visible">
          <a
            title="233355607的生草小站"
            target="_blank"
            href="https://www.233355607.xyz"
          >
            <div>233355607的生草小站</div>
            <div>草还是草</div>
          </a>
        </li>

        <li class="animated" style="visibility: visible">
          <a title="萌又萌" target="_blank" href="https://moeu.moe">
            <div>萌又萌</div>
            <div>API Ready！</div>
          </a>
        </li>

        <li class="莘家小站" style="visibility: visible">
          <a title="萌又萌" target="_blank" href="https://blog.jiawei.xin">
            <div>莘家小站</div>
            <div>写一些不容易查到的东西</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .readers-list {
    height: 75vh;

    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;

    li {
      max-width: 450px;
      margin-left: 20px;
      a {
        div {
          padding: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--color-text);
        }
        div:first-child {
          border-bottom: 1px dashed #eee;
          font-size: 1.3em;
          color: var(--color-text-variant);
        }
      }
    }
  }
}

.readers-list li a div:first-child {
  border-bottom: 1px dashed #eee;
  font-size: 1.3em;
  color: var(--color-text-variant);
}

@media (max-width: 900px) {
  .container .readers-list {
    height: auto;
    margin: 0%;
    flex-wrap: nowrap;
    align-items: center;
    li {
      margin-left: 0%;
      width: 85vw;
    }
  }
}
</style>
