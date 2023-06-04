<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
<template>
  <button @click="settings" class="fab danmu-setting" title="弹幕设置">
    <Icon :icon="iconsettings" width="24" height="24" />
  </button>
  <div class="danmu-setting-on" v-if="settingon">
    <button
      @click="toggleLoop"
      class="icon-btn standard no-color"
      title="弹幕循环播放"
      v-if="danmuon">
      <Icon :icon="iconLoop" width="24" height="24" />
    </button>
    <button
      @click="toggleDanmus"
      class="icon-btn standard no-color"
      title="开关弹幕">
      <Icon :icon="iconEnable" width="24" height="24" />
    </button>
    <DanmuSender :pushDanmu="pushDanmu" v-if="danmuon"></DanmuSender>
  </div>
</template>
<script lang="ts">
import DanmuSender from './DanmuSender.vue';
export default {
  name: 'DanmuSwitcher',
  data() {
    return {
      iconLoop: '',
      iconEnable: '',
      iconsettings: 'material-symbols:chat',
      danmuon: true,
      settingon: false,
    };
  },
  methods: {
    toggleLoop() {
      localStorage.setItem(
        'danmu.toggleLoop',
        localStorage.getItem('danmu.toggleLoop') == '1' ? '0' : '1'
      );
      this.iconLoop =
        localStorage.getItem('danmu.toggleLoop') == '1'
          ? 'material-symbols:sync'
          : 'material-symbols:sync-disabled';
      this.toggleLoopDanmu();
    },
    toggleDanmus() {
      localStorage.setItem(
        'danmu.on',
        localStorage.getItem('danmu.on') == '1' ? '0' : '1'
      );
      this.danmuon = localStorage.getItem('danmu.on') == '1' ? true : false;
      this.iconEnable =
        localStorage.getItem('danmu.on') == '1'
          ? 'material-symbols:toggle-on'
          : 'material-symbols:toggle-off';
      this.toggleDanmu();
    },
    settings() {
      this.iconsettings =
        this.iconsettings == 'material-symbols:chat'
          ? 'material-symbols:close'
          : 'material-symbols:chat';
      this.settingon = !this.settingon;
    },
  },
  created() {
    if (localStorage.getItem('danmu.toggleLoop') == null) {
      localStorage.setItem('danmu.toggleLoop', '1');
    }
    if (localStorage.getItem('danmu.on') == null) {
      localStorage.setItem('danmu.on', '1');
    }
    this.danmuon = localStorage.getItem('danmu.on') == '1' ? true : false;
    this.iconLoop =
      localStorage.getItem('danmu.toggleLoop') == '1'
        ? 'material-symbols:sync'
        : 'material-symbols:sync-disabled';
    this.iconEnable =
      localStorage.getItem('danmu.on') == '1'
        ? 'material-symbols:toggle-on'
        : 'material-symbols:toggle-off';
  },
  props: ['toggleLoopDanmu', 'toggleDanmu', 'pushDanmu'],
};
</script>
