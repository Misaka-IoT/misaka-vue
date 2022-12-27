<template>
  <footer>
    <div class="footer">
      <p>&copy 2022 shbwb(misaka-fans)</p>
      <p>
        <span id="busuanzi_container_site_uv"
          >本站总访问次数<span id="busuanzi_value_site_pv"></span>次</span
        >
      </p>
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
