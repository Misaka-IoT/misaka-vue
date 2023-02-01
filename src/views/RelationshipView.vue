<template>
  <div class="container-fluid">
    <div class="IR">
      <InterpersonalRelationship></InterpersonalRelationship>
    </div>

    <!-- Container -->
    <div class="accordion" id="accordionFlush">
      <RelationshipItem
        name="御坂美琴"
        img="https://misaka-mikoto.jp/assets/御坂美琴2.ef1d561c.png"
        info="学园都市中仅有的七名超能力者中排名第三位，学园都市最强“电击使”， 代号“超电磁炮”。贵族女校常盘台中学二年级学生，有“常盘台的王牌”和“最强无敌的电击公主”之称。 性格好胜、正义感强，有着男孩子般的爽朗性格，但是却没有耐心，非常不坦率。"
      ></RelationshipItem>
      <RelationshipItem
        name="上条当麻"
        img=""
        info="就读于学园都市某高中，刺猬头发型的高中生。都市传说中“拥有能将任何能力无效化的能力的男人”的真身，其寄宿“幻想杀手”的右手有着不论善恶，让大多魔法或超能力消失的特异能力。 有着但凡遇到有烦恼的人都会伸出援手的性格。爱华斯评价他是“未受过任何人指导，仅遵循自己内心涌现的感情勇往直前之人”，在一次次事件中，充分了解了学园都市的黑暗与科学和魔法间的纷争。"
      ></RelationshipItem>
      <RelationshipItem
        name="白井黑子"
        img="https://misaka-mikoto.jp/assets/白井黑子3.2267be59.png"
        info="学园都市中名校常盘台中学的一年级生，御坂美琴的学妹兼室友，能力为Level 4的空间移动，双马尾茶色头发的少女。 非常仰慕御坂美琴，甚至到近乎变态的程度，称呼美琴为“姐姐大人”。 喜欢冲击力极强、布料很少的泳衣和内衣裤。 身为风纪委员，具有很强的责任感和正义感。"
      ></RelationshipItem>
      <RelationshipItem
        name="初春饰利"
        img="https://misaka-mikoto.jp/assets/初春飾利3.096e62a6.png"
        info="有着稳重的行为谈吐。对贵族女校常盘台中学相当憧憬， 会往奇怪的方向学习日常生活和礼仪。 和白井十分要好。在风纪委员中负责通信与情报管理，技术力连白井都十分吃惊。所拥有的能力为“定温保存”。 特征是头上所带的发饰——“会走路的花瓶”。 她的声音很甜美，但却与她的工作的手段相违背，可以发挥非常恐怖的情报处理能力，在风纪委员里是担当支援的角色。"
      ></RelationshipItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import InterpersonalRelationship from './InterpersonalRelationship.vue';
import RelationshipItem from '@/components/RelationshipItem.vue';
</script>

<style scoped lang="scss">
@media screen and (min-width: 900px) {
  .container-fluid {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    .accordion {
      width: 30vw;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .IR {
      width: 30vw;
    }
  }

  a img {
    padding: 6px;
  }
}
</style>
