<template>
  <div>
    <div id="main">
      <div class="container">
        <!-- 某科学的超电磁炮 第一季 -->
        <div id="card-1" class="card">
          <div id="bg" class="bg1"></div>
          <div class="content">
            <h2>01</h2>
            <h3>某科学的超电磁炮第一季</h3>
            <p>动画生肉资源</p>
            <p><b>提取码：06if</b></p>
            <p>资源提供：@sudoriaa</p>
            <a href="https://www.aliyundrive.com/s/LgMNktwcV1o">阿里云盘</a>
          </div>
        </div>
        <!-- 某科学的超电磁炮S -->
        <div id="card-2" class="card">
          <div id="bg" class="bg2"></div>
          <div class="content">
            <h2>02</h2>
            <h3>某科学的超电磁炮S</h3>
            <p>动画生肉资源</p>
            <p><b>提取码：2fb4</b></p>
            <p>资源提供：@sudoriaa</p>
            <a href="https://www.aliyundrive.com/s/gcDkhdZvHiZ">阿里云盘</a>
          </div>
        </div>
        <!-- 某科学的超电磁炮T-->
        <div id="card-3" class="card">
          <div class="content">
            <h2>03</h2>
            <h3>某科学的超电磁炮T</h3>
            <p>动画生肉资源</p>
            <p><b>提取码：6vc3</b></p>
            <p>资源提供：@sudoriaa</p>
            <a href="https://www.aliyundrive.com/s/9PZWRyxYbUt">阿里云盘</a>
          </div>
        </div>
        <!-- index-X某系列小说汉化版 -->
        <div id="card-4" class="card">
          <div class="content">
            <h2>04</h2>
            <h3>某系列小说</h3>
            <p>网译汉化版</p>
            <p><b>下载提取码：见下文页面</b></p>
            <p>资源提供：来源于GitHub</p>
            <a href="https://github.com/1204244136/index-X">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

#main {
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  /* display: flex; */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(241, 232, 218);
  /*美琴应援色*/
}

/* 以下为卡片样式 */
.animation h1 {
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-family: '微软雅黑', '宋体', '黑体', Arial;
  font-size: 18px;
  font-weight: bold;
  height: 25px;
  line-height: 25px;
  margin: 18px 0 !important;
  padding: 8px 0 5px 5px;
  text-shadow: 2px 2px 3px #222222;
}

.container {
  position: relative;
  display: flex;
  /* flex容器（flex container） */
  justify-content: center;
  /* 定义项目在主轴上的对齐方式 */
  align-items: center;
  /* 定义项目在竖直方向上对齐方式 */
  max-width: 1200px;
  flex-wrap: wrap;
  /* 定义项目是否换行以及如何换行  */
  z-index: 1;
}

.container .card {
  width: 280px;
  height: 400px;
  margin: 30px;
  /* 设置阴影 */
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* backdrop-filter: blur(5px); */
}

.container .card::after {
  border-radius: 15px;
  /* 创建伪类 */
  content: '';
  /* 内容为空 */
  display: block;
  /* 转为块元素 */
  width: inherit;
  height: inherit;
  background: rgba(1, 1, 1, 0.15);
  /* 前三个代表颜色，最后一个代表透明度 */
  position: absolute;
  /* 决对定位 */
  /* top: 500px;	定位的位置 */
  transition: 1s;
  /* 动画过度效果 */
}

.container .card:hover:after {
  /* top: 0; */
  background: rgba(1, 1, 1, 0.5);
  /* 当鼠标经过div的时候使after的top值为0 */
}

#card-1 {
  /* 设置card1的背景 */
  background-image: url(../assets/railgun.webp);
  background-size: cover;
}

#card-2 {
  /* 设置card2的背景 */
  background: url(../assets/railgun_s.webp);
  background-size: cover;
}

#card-3 {
  /* 设置card3的背景 */
  background: url(../assets/railgun_t.webp);
  background-size: cover;
}

#card-4 {
  /* 设置card4的背景 */
  background: url(../assets/index-x.webp);
  background-size: cover;
}

.container .card .content {
  padding: 20px;
  text-align: center;
  transform: translateY(70px);
  opacity: 1;
  transition: 0.5s;
  z-index: 2;
}

.container .card:hover .content {
  transform: translateY(0px);
  opacity: 1;
}

.container .card .content h2 {
  position: absolute;
  top: -30px;
  right: 1px;
  font-size: 10em;
  color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
}

.container .card .content h3 {
  font-size: 1.8em;
  color: #fff;
  z-index: 1;
  position: relative;
  top: -30px;
}

.container .card .content p {
  font-size: 1em;
  color: #fff;
  font-weight: 300;
  position: relative;
  top: -30px;
}

.container .card .content a {
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
</style>
