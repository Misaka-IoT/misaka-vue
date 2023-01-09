<template>
  <footer>
    <div class="footer">
      <p>&copy 2022 shbwb(misaka-fans)</p>
      <p>
        <span id="busuanzi_container_site_uv"
          >本站总访问次数<span id="busuanzi_value_site_pv"></span>次</span
        >
      </p>
     <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022000892号-3</a>
    </div>
  </footer>
</template>

<script lang="ts">
import jprs_DV_png from '@/assets/jprs_DV.png';

export default {
  data() {
    return {
      jprs_DV_png,
    };
  },
};
</script>

<style scoped>
.footer {
  font-family: 'Noto Sans SC', 'Noto Sans JP', sans-serif;
  display: block;
  padding: 0px 24px 20px 24px;
  color: #5a5a5a;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
