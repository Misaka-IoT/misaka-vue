<template>
  <div class="character-box">
    <div class="cards">
      <div
        class="character-card"
        v-for="(item, index) in imgList"
        @click="change_character(index)"
        :key="index"
      >
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="content" :style="content_styles">
      <p>
        {{ content_text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import a from '@/assets/characters/御坂美琴2.png';
import b from '@/assets/characters/佐天淚子2.png';
import c from '@/assets/characters/初春飾利3.png';
import d from '@/assets/characters/白井黑子3.png';
import e from '@/assets/characters/食蜂操祈2.png';
import back_img1 from '@/assets/characters/1.png';
import back_img2 from '@/assets/characters/2.png';
import back_img3 from '@/assets/characters/3.png';
import back_img4 from '@/assets/characters/4.png';
import back_img5 from '@/assets/characters/5.png';

export default {
  data() {
    return {
      imgList: [a, b, c, d, e],
      back_img_list: [back_img1, back_img2, back_img3, back_img4, back_img5],
      content_text: '',
      contents: [
        {
          name: '美琴',
          text: '镰池和马所著轻小说《魔法禁书目录》的主要角色之一，外传漫画《某科学的超电磁炮》的主人公。被画师灰村清孝在官网上称为从旧约5开始的双女主之一，并在电击文库3000本突破感谢企划之女主泳装中以新约魔禁名义入选.学园都市中仅有的七名超能力者（Level5）中排名第三位，学园都市最强电击使，贵族女校常盘台中学二年级生，有“常盘台的王牌”和“电击公主”之称。曾被上条当麻因能力称做“哔哩哔哩（ビリビリ）放电妹”,但妹妹篇以后称呼本姓“御坂”。',
        },
        {
          name: 'df',
          text: '栅川中学一年级，留有披肩的黑色长发，头戴五瓣白梅形状花饰的少女。天真烂漫的性格给人以乐天派的感觉，一眼看上去非常随便，但正好相反她也会表现出洞察周围气氛这种对他人的细致关怀。重视朋友间的友情。和同班同学的初春饰利是死党，经常用掀裙子的方式来打招呼（初春限定），宣称“掀裙子是亲密的标志”。也因此在学园都市里有了掀裙魔的称号。非常细心体贴，明明生日比初春要略小却经常像姐姐一样照顾着初春。经初春的关系与御坂美琴和白井黑子相识并成为朋友。在学艺都市广域社会参观期间与魔法师少女索绮特亦结下深厚的友谊。平常表现为无能力（Level 0）其实是当妈小号，大多数时候对此大大咧咧毫不在乎，但内心仍然有获得能力的潜在愿望，因此在偶然得到“幻想御手”时贸然使用，结果表现出了“空力使”。',
        },
        {
          name: 'df',
          text: '栅川中学一年级学生，与白井黑子同为第177支部的风纪委员，掀裙魔的施暴对象。害羞谦逊，拥有极高的洞察力和强烈的正义感。身材娇小，肩膀又窄，看起来多了些稚气的少女。短短的黑发上戴着满是玫瑰、扶桑花、孔雀草、木槿等各式各样花朵造型的头饰，远远看去好像头上顶着个大花瓶，有“移动花瓶/会走路的花瓶”（步く花瓶）之称，但据本人所说头上的花是人造花，并且每朵花都可以自由拿下来。',
        },
        {
          name: 'df',
          text: '白井黑子是学园都市常盘台中学初一生，隶属风纪委员第3/177活动支部，能力等级Level4，名称“空间移动”身高略矮于国中女生的平均身高，留着茶色头发的少女。发型是系着蝴蝶结的双马尾，因为是自然卷，所以她常到坂岛道端的美容院整理发尾，将头发烫直。由于学校的校规，即使是在校外、宿舍内和寒暑假期间也都穿着制服，在原作中被形容为“可爱”（hentai）。除了原作《魔法禁书目录》中后期的小说插图、漫画版和原作《某科学的超电磁炮》的漫画人设以外，黑子的前发都是中分。性格出于对成为“正义的伙伴”的向往，白井黑子选择成为风纪委员，她为人富有正义感，在面对公务时会义无反顾地承担其作为风纪委员的责任，愿意以生命为筹码去维护学园都市的治安，即使危害都市治安的人是自己身边最为亲近的人，白井黑子也会选择去阻止对方。',
        },
        {
          name: 'df',
          text: '食蜂操祈是常盘台中学最大派阀的女王大人，有“常盘台的白丝女王”之称，学园都市中排名第五位的超能力者，其能力为“心理掌握”。能力本质是通过细微控制大脑中的水分子来影响大脑，进而进行各种心理操作。虽然是最强大的心理系超能力者，但派阀成员皆是因为其人格魅力而加入，并不会通过使用能力强迫他人。星形的瞳孔，金色的长发，身材纤瘦却丰满，令御坂美琴发出有“你真的是中学生吗？”的疑惑。虽然只有14岁却有168cm的身高，在已知的level 5能力者中排第三（仅次于垣根帝督和削板军霸），和16岁的一方通行、上条当麻一样高。',
        },
      ],
      content_styles: {
        backgroundImage: `url(${back_img1})`,
      },
    };
  },

  methods: {
    change_character: function (id: number) {
      this.content_styles.backgroundImage = `url(${this.back_img_list[id]})`;
      this.content_text = this.contents[id].text;
    },
  },
  created() {
    this.content_text = this.contents[0].text;
  },
};
</script>

<style scoped lang="scss">
.character-box {
  margin-top: 50px;
  width: 85vw;
  display: flex;
  flex-flow: column;
  align-items: center;

  .cards {
    display: flex;
    justify-content: center;

    .character-card {
      margin: 11px;
      img {
        height: 300px;
      }
    }
  }

  .character-card:hover {
    transform: scale(1.1);
  }

  .content {
    width: 1005px;
    height: 549px;
    margin: 20px 0px 0px 0px;
    padding: 170px 40px 10px 40px;
    background-repeat: no-repeat;
  }
}
</style>
