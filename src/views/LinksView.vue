<template>
  <div class="container">
    <ul class="links-container">
      <li>
        <a title="ToaruNet Project" target="_blank" href="https://toarunet.com">
          <div>ToaruNet</div>
          <p>某系列作品粉丝网站,由星之相位运营</p>
        </a>
      </li>

      <li>
        <a title="mashiro blog" target="_blank" href="https://mashiro.pub">
          <div>Mashiro的博客</div>
          <p>Happy Coding , Happy Life</p>
        </a>
      </li>

      <li>
        <a
          title="misaka-fans"
          target="_blank"
          href="https://static.misaka-mikoto.jp/">
          <div>静态网站</div>
          <p>本网站的上一个版本，使用静态页面构建(停止维护)</p>
        </a>
      </li>
      <li>
        <a
          title="LiangBurs' Blog"
          target="_blank"
          href="https://blog.cnmobile.link">
          <div>LiangBurs' Blog</div>
          <p>May all the beauty be blessed. —— 《Moon Halo》</p>
        </a>
      </li>
      <li>
        <a title="倾丞の小窝" target="_blank" href="https://blog.qcmoe.com">
          <div>倾丞の小窝</div>
          <p>倾丞的小窝,记录生活,分享乐趣</p>
        </a>
      </li>

      <li>
        <a title="夜灭の小窝" target="_blank" href="https://yujie.pro">
          <div>夜灭の小窝</div>
          <p>夜灭的小窝，谈天说地热爱二次元且会写bug</p>
        </a>
      </li>

      <li>
        <a
          title="233355607的生草小站"
          target="_blank"
          href="https://www.233355607.xyz">
          <div>233355607的生草小站</div>
          <p>草还是草</p>
        </a>
      </li>

      <li>
        <a title="萌又萌" target="_blank" href="https://moeu.moe">
          <div>萌又萌</div>
          <p>API Ready！</p>
        </a>
      </li>

      <li class="莘家小站">
        <a title="萌又萌" target="_blank" href="https://blog.jiawei.xin">
          <div>莘家小站</div>
          <p>写一些不容易查到的东西</p>
        </a>
      </li>
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
}

.readers-list li a div:first-child {
  border-bottom: 1px dashed var(--color-outline);
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
