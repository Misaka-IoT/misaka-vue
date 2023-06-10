<template>
  <a
    class="a"
    :style="{ color: color, 'font-size': fontSize, 'font-family': fontFamily }"
    >{{ danmu }}</a
  >
</template>
<script lang="ts">
import { ElFormItem } from 'element-plus';

export default {
  name: 'AdvancedDanMu',
  props: { txt: String },
  data() {
    return {
      danmu: '',
      color: '#D0CFCF',
      fontSize: '20px',
      css: '',
      fontFamily: 'Georgia',
    };
  },
  methods: {
    AnalyzeDanMu(str: String) {
      if (str.charAt(0) == '#') {
        this.color = str.substring(0, 7);
        this.AnalyzeDanMu(str.toString().substring(7));
      } else if (str.substring(0, 6) == '[size]') {
        this.fontSize = str.substring(6, 8) + 'px';
        this.AnalyzeDanMu(str.toString().substring(8));
      } else if (str.substring(0, 7) == '[font]{') {
        this.fontFamily = str.substring(7, str.indexOf('}'));
        this.AnalyzeDanMu(str.toString().substring(str.indexOf('}') + 1));
      } else if (str.charAt(0) == '{') {
        //屎山+114514
        this.css = str.substring(1, str.indexOf('}'));
        this.AnalyzeDanMu(str.toString().substring(str.indexOf('}') + 1));
      } else {
        this.danmu = str.toString();
      }
    },
  },
  created() {
    if (this.txt != undefined) {
      this.AnalyzeDanMu(this.txt);
    }
  },
};
</script>
<style lang="scss" scoped>
.a {
  opacity: 0.5;
  font-weight: bold;
}
</style>
