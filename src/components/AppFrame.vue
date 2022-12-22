<template>
  <header class="header">
    <button class="sidebar-toggler icon-btn material-symbols-outlined">
      menu
    </button>
    <onmusic></onmusic>
    <h1>爱我超电磁炮</h1>
    <div style="width: 40%">
      <div class="md-header__source">
        <a
          href="https://github.com/misaka-fans/misaka-fans.github.io"
          title="前往仓库"
          class="md-source"
          data-md-component="source"
        >
          <div class="md-source__icon md-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="24"
              height="24"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </div>
          <div
            class="md-source__repository md-source__repository--active"
            style="width: 150%"
          >
            misaka-fans.github.io
            <ul class="md-source__facts">
              <li class="md-source__fact md-source__fact--stars">
                {{ stargazers_count }}
              </li>
              <li class="md-source__fact md-source__fact--forks">
                {{ forks_count }}
              </li>
            </ul>
          </div>
        </a>
      </div>
      <!--/githubmodule/-->
    </div>
  </header>

  <aside class="sidebar">
    <router-link to="/">主页</router-link>
    <router-link to="/aboutraligun"> 关于美琴 </router-link>
    <router-link to="imgboard">美琴照片墙</router-link>

    <router-link to="eatmikoto">新概念音游</router-link>
    <router-link to="/discuss">留言板</router-link>

    <router-link to="/isml">世萌比赛</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/resource">动漫资源</router-link>

    <router-link to="/links">友情链接</router-link>
  </aside>
</template>

<script lang="ts">
import axios from 'axios';
import onmusic from '@/components/onmusic.vue'
export default {
  name: 'app-frame',
  data() {
    return {
      stargazers_count: 0,
      forks_count: 0,
    };
  },
  created() {
    let that = this;
    //使用axios获取star和fork数量
    axios
      .get('https://api.github.com/repos/misaka-fans/misaka-fans.github.io')
      .then((res) => {
        console.log(res.data.stargazers_count);
        console.log(res.data.forks_count);
        that.stargazers_count = res.data.stargazers_count;
        that.forks_count = res.data.forks_count;
      });
  },
  components:
  {
    onmusic
  }
};
</script>
