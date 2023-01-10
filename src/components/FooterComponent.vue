<template>
  <footer>
    <div class="footer">
      <p>&copy 2022 shbwb(misaka-fans)</p>
      <p>
        <span id="busuanzi_container_site_uv"
          >本站总访问次数<span id="busuanzi_value_site_pv"></span>次</span
        >
      </p>

      <div class="beian-cn" v-if="site == 'cn'">
        <a href="https://beian.miit.gov.cn/" target="_blank"
          >鄂ICP备2022000892号-3</a
        >
      </div>

      <div class="beian-jp" v-else>
        <a href="https://icp.gov.moe/?keyword=20220436" target="_blank"
          >萌ICP备20220436号</a
        >
        <form
          action="https://sitesealinfo.pubcert.jprs.jp/SiteSealReference"
          name="SiteSealReference"
          method="post"
          target="_blank"
        >
          <!--お客様の証明ページを別ウィンドウにて開きます。-->
          <input
            type="image"
            name="Sticker"
            :src="jprs_DV_png"
            alt="クリックして証明書の内容をご確認ください。"
            oncontextmenu="return false;"
          />

          <!--ダウンロードしたサイトシール画像のパス名を指定します。-->
          <input
            type="hidden"
            name="certificateCn"
            value="www.misaka-mikoto.jp"
          />
          <input type="hidden" name="certificateClass" value="DV" />
          <!--証明書のコモンネーム及び証明書種別（DVもしくはOV）を指定します。-->
        </form>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import jprs_DV_png from '@/assets/jprs_DV.png';

export default {
  data() {
    return {
      jprs_DV_png,
      site:'jp'
    };
  },
  created() {
    if(location.href.indexOf('misaka-mikoto.cn')!= -1){
      this.site = 'cn'
    }
  },
};
</script>

<style scoped></style>
