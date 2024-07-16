<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
<template>
  <ul class="WriteIndex">
    <li class="WriteItem" v-for="(i, j) in item" :key="i.id">
      <div style="height: 100px">
        <h1
          style="width: 80%; float: left; user-select: none; height: 80%"
          @click="ReadSwich(i.id)">
          {{ i.title }}
        </h1>
        <h2
          style="
            left: 80%;
            top: -54%;
            position: relative;
            width: fit-content;
            height: 100%;
          ">
          {{ i.star }}
        </h2>
        <button
          style="float: right; top: -54%"
          class="icon-btn standard no-color"
          @click="OnStar(i.id)">
          <Icon :icon="IsIcon(i.id)" width="50px" height="50px" />
        </button>
      </div>
    </li>
  </ul>
  <button
    style="
      left: 12.5%;
      width: 50px;
      height: 50px;
      background-color: var(--color-theme);
    "
    class="icon-btn standard no-color"
    :onclick="UpSwich">
    <Icon icon="material-symbols:upload" width="50px" height="50px" />
  </button>
  <Upload :on="OnUp" @UPSwich="UpSwich"></Upload>
  <ReadWord :on="OnRead" @ReadSwich="ReadSwich('')" ref="Read"></ReadWord>
</template>
<script lang="ts">
import axios from 'axios';
import Upload from '@/components/RelayWrite/Upload.vue';
import ReadWord from '@/components/RelayWrite/ReadWord.vue';
export default {
  inject: ['AppThis'],
  data() {
    return {
      item: [{ id: '', title: '', star: '' }],
      OnUp: false,
      OnRead: false,
      dzlb: [''],
    };
  },
  watch: {
    'AppThis.drawerOpened': {
      immediate: true,
      handler: function (val, oldVal) {
        if (val) {
          this.OnUp = false;
          this.OnRead = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    UpSwich() {
      this.OnUp = !this.OnUp;
    },
    ReadSwich(id: string) {
      this.OnRead = !this.OnRead;
      (this.$refs.Read as any).OnRead(id);
    },
    OnStar(id: string) {
      var logins = localStorage.getItem('Login');
      if (logins != null) {
        var l = JSON.parse(logins);
        axios
          .get('https://write.z2bguoguo.cn/', {
            headers: { mode: 'dz', em: l?.em, token: l?.token, page: id },
          })
          .then((res) => {
            var dt = res.data;
            if (dt == 'good') {
              alert('点赞成功');
            } else if (dt == 'user') {
              alert('信息错误，请重新登陆');
            } else if (dt == 'cf') {
              alert('重复点赞');
            } else {
              alert('点赞失败');
            }
          });
      } else {
        alert('未登录');
      }
    },
    IsIcon(id: string) {
      if (
        this.dzlb.length > 0 &&
        this.dzlb.findIndex((element) => element == id) > -1
      ) {
        return 'material-symbols:heart-check';
      } else {
        return 'material-symbols:favorite';
      }
    },
  },
  created() {
    axios
      .get('https://write.z2bguoguo.cn/', {
        headers: { mode: 'index' },
      })
      .then((res) => {
        this.item = res.data;
      });
    var logins = localStorage.getItem('Login');
    if (logins != null) {
      var l = JSON.parse(logins);
      axios
        .get('https://write.z2bguoguo.cn/', {
          headers: { mode: 'dzlb', em: l?.em, token: l?.token },
        })
        .then((res) => {
          var r = res.data;
          if (r != 'user') {
            this.dzlb = res.data;
          } else {
            this.dzlb.splice(0);
          }
        });
    }
  },
  components: { Upload, ReadWord },
};
</script>
