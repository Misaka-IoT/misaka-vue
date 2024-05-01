<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
<template>
  <ul class="WriteIndex">
    <li class="WriteItem" v-for="(i, j)  in item" :key="i.id">
      <div style="height: 100px;">
        <h1 style="width: 80%;float: left">{{ i.title }}</h1>
        <button style="float: right; top:50%" class="icon-btn standard no-color">
          <Icon icon="material-symbols:favorite" width="50px" height="50px" />
        </button>
      </div>
    </li>
  </ul>
  <button style="left: 12.5%;width: 50px;height: 50px;background-color: var(--color-theme);" class="icon-btn standard no-color" :onclick="UpSwich">
    <Icon icon="material-symbols:upload" width="50px" height="50px" />
  </button>
  <Upload :on="OnUp"></Upload>
</template>
<script lang="ts">
  import axios from 'axios';
import Upload from '@/components/MisakaWrite/Upload.vue';
export default {
    data() {
      return {
        item:[{id:'',title:'',star:''}],
        OnUp:false
      };
    },
    methods: {
      UpSwich()
      {
        this.OnUp=!this.OnUp
      }
    },
    created()
    {
      axios.get('https://write.z2bguoguo.cn/',{
          headers: { mode:"index" },
      })
      .then((res) => {
        this.item=res.data;
      });
    },
    components:{Upload}
  };
</script>
  