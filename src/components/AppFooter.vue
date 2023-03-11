<template>
  <footer class="app-footer">
    <RouterLink to="/donate"><b>捐助此项目</b></RouterLink>
    <p>&copy; 2022 shbwb(misaka-fans)</p>
    <p>
      <span id="busuanzi_container_site_uv"
        >本站总访问次数 <span id="busuanzi_value_site_pv"></span> 次</span
      >
    </p>

    <div class="site-record site-record--cn" v-if="site == 'cn'">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >鄂ICP备2022000892号-3</a
      >
    </div>

    <div class="site-record site-record--jp" v-else-if="site == 'jp'">
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

    <div class="site-record site-record--jp" v-else>
      <p>陌生的域名……</p>
      <p>你多半在开发服务器里（</p>
    </div>
  </footer>
</template>

<script lang="ts">
import jprs_DV_png from '@/assets/jprs_DV.png';

export default {
  data() {
    return {
      jprs_DV_png,
      site: 'unknown',
    };
  },
  created() {
    if (location.href.indexOf('misaka-mikoto.cn') != -1) {
      this.site = 'cn';
    } else if (location.href.indexOf('misaka-mikoto.jp') != -1) {
      this.site = 'jp';
    }
  },
};
</script>

<style scoped lang="scss">
.app-footer {
  padding: 0px 24px 20px 24px;
  color: var(--color-text);
  background-color: var(--color-background);
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
