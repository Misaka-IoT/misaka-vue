<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavDrawer from '@/components/AppNavDrawer.vue';
import AppTopAppBar from '@/components/AppTopAppBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import DelText from '@/components/DelText.vue';
</script>

<template>
  <AppNavDrawer :open="drawerOpened" :statusChanged="handleDrawerChange">
    <template #drawer>
      <SidebarLink>
        <RouterLink to="/">主页</RouterLink>
        <RouterLink to="/aboutraligun"> 关于美琴 </RouterLink>
        <RouterLink to="/Character">相关人物介绍</RouterLink>
        <RouterLink to="/InterpersonalRelationship">人际关系</RouterLink>
        <RouterLink to="/imgboard">美琴照片墙</RouterLink>
        <RouterLink to="/awards">世萌战绩</RouterLink>
        <RouterLink to="/isml">世萌投票</RouterLink>
        <RouterLink to="" @click="loadEatMikoto">新概念音游</RouterLink>
        <RouterLink to="/discuss">留言板</RouterLink>
        <RouterLink to="/resource">动漫资源</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
        <RouterLink to="/links">友情链接</RouterLink>
      </SidebarLink>
    </template>
    <AppTopAppBar>
      <template #navBtns>
        <button
          class="icon-btn standard no-color material-symbols-outlined drawer-opener"
          ref="drawerOpener"
          @click="drawerOpened = true"
        >
          {{ navIcon }}
        </button>
        <onmusic></onmusic>
      </template>

      <template #title>
        <span>爱我超电磁炮</span>

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
                  {{ stargazersCount }}
                </li>
                <li class="md-source__fact md-source__fact--forks">
                  {{ forksCount }}
                </li>
              </ul>
            </div>
          </a>
        </div>

        <select name="" id="" class="select-site" @change="shangeSite">
          <option value="1" :selected="selectedId == 1">中国站</option>
          <option value="2" :selected="selectedId == 2">海外站</option>
        </select>
      </template>

      <RouterView></RouterView>

      <FooterComponent></FooterComponent>
    </AppTopAppBar>
  </AppNavDrawer>
</template>

<script lang="ts">
import axios from 'axios';
import onmusic from '@/components/onmusic.vue';
import SidebarLink from '@/components/SidebarLink.vue';
export default {
  computed: {
    navIcon(): string {
      return this.drawerOpened ? 'menu_open' : 'menu';
    },
  },
  created() {
    // 根据url获取当前处于哪个站点
    console.log(window.location.href);
    if (
      location.href == 'https://misaka-mikoto.jp' ||
      location.href == 'https://www.misaka-mikoto.jp'
    ) {
      this.selectedId = 2; // 如果url 是jp ，选中第二项，默认显示海外站，反之中国站
    } else if (
      location.href == 'https://misaka-mikoto.cn' ||
      location.href == 'https://www.misaka-mikoto.cn'
    ) {
      this.selectedId = 1;
    } else {
      // 都不是则为其他站点，默认显示中国站
    }

    // 使用axios获取star和fork数量
    axios
      .get('https://api.github.com/repos/misaka-fans/misaka-fans.github.io')
      .then((res) => {
        this.stargazersCount = res.data.stargazers_count;
        this.forksCount = res.data.forks_count;
      });
  },
  data() {
    return {
      drawerOpened: false,
      stargazersCount: 0,
      forksCount: 0,
      selectedId: 1,
    };
  },
  methods: {
    handleDrawerChange(value: boolean) {
      this.drawerOpened = value;
      if (!this.drawerOpened)
        (this.$refs.drawerOpener as HTMLButtonElement).focus();
    },
    /**
     * @author: longyu12345
     *
     * 觉得写得离谱就打他去 o(*￣▽￣*)ブ
     */
    loadEatMikoto(): void {
      location.href = 'eat-mikoto/index.html';
    },

    shangeSite(): void {
      console.log('changesiste');
      switch (this.selectedId) {
        case 1:
          location.href = 'https://misaka-mikoto.cn';
          break;
        case 2:
          location.href = 'https://misaka-mikoto.jp';

          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.app-nav-drawer a {
  position: relative;
  padding: 0 12px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  color: var(--md-sys-color-on-surface);
  text-decoration: none !important;
  border-radius: 12px;
  flex-shrink: 0;
}

.app-nav-drawer a::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: currentColor;
  border-radius: inherit;
  opacity: 0;
}

.app-nav-drawer a:hover::before {
  opacity: 0.08;
}

.app-nav-drawer a:focus-visible:before {
  opacity: 0.12;
}

.icon-btn:active::before,
.fab:active::before,
.app-nav-drawer a:active:before {
  opacity: 0.16;
}

.drawer-opener {
  display: none !important;
}

@media (max-width: 1200px) {
  .drawer-opener {
    display: inline-flex !important;
  }
}

.select-site {
  display: block;
  width: 140px;
  height: 34px;
  padding: 4px 10px;
  font-size: 17px;
  line-height: 17px;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  position: absolute;
  right: 40px;
  color: white;
  outline: none;
  appearance: none;
  background: url() no-repeat scroll right center transparent;

  option {
    background: white;
    color: black;
  }
}
</style>
