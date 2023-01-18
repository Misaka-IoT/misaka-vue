<template>
  <div class="InterpersonalRelationshipBox" id="InterpersonalRelationshipBox">
    <div id="InterpersonalRelationship" style="height: 500px"></div>
    <p align="center">使用vis-network(MIT)制作</p>
    <p align="center">Made with vis-network (MIT)</p>
    <p align="center">图片来源于网络，如侵权请联系删除</p>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue';

import { DataSet } from 'vis-data/peer';
import { Network } from 'vis-network/peer';
import 'vis-network/styles/vis-network.css';
//<图片>
import i0 from '@/assets/InterpersonalRelationshipImage/0.png';
import i1 from '@/assets/InterpersonalRelationshipImage/1.png';
import i2 from '@/assets/InterpersonalRelationshipImage/2.png';
import i3 from '@/assets/InterpersonalRelationshipImage/3.png';
import i4 from '@/assets/InterpersonalRelationshipImage/4.png';
import i5 from '@/assets/InterpersonalRelationshipImage/5.png';
import i6 from '@/assets/InterpersonalRelationshipImage/6.png';
import i7 from '@/assets/InterpersonalRelationshipImage/7.png';
//</图片>

export default {
  mounted() {
    const but=document.getElementById('CssSwitcherButton');
    const container = document.getElementById('InterpersonalRelationship');
    const box = document.getElementById('InterpersonalRelationshipBox');
    //节点数据
    const nodes = new DataSet([
      { id: 0, label: '御坂美琴', shape: 'image', image: i0 },
      { id: 1, label: '御坂', shape: 'image', image: i1 },
      { id: 2, label: '白井黑子', shape: 'image', image: i2 },
      { id: 3, label: '食蜂操祈', shape: 'image', image: i3 },
      { id: 4, label: '初春饰利', shape: 'image', image: i4 },
      { id: 5, label: '佐天泪子', shape: 'image', image: i5 },
      { id: 6, label: '御坂美铃', shape: 'image', image: i6 },
      { id: 7, label: '上条当麻', shape: 'image', image: i7 },
    ]);
    //连线数据
    const edges = new DataSet([
      { from: 0, to: 1, id: 1 },
      { from: 0, to: 2, id: 2 },
      { from: 0, to: 3, id: 3 },
      { from: 0, to: 4, id: 4 },
      { from: 0, to: 5, id: 5 },
      { from: 0, to: 6, id: 6 },
      { from: 0, to: 7, id: 7 },
      { from: 4, to: 5, id: 8,color:'#FFC854'},
      { from: 7, to: 1, id: 9,arrows:'to',color:'#FFC854'},
    ]);
    const data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {};
    if (box != null)
      options = {
        nodes: {
          font: {
            color: document.defaultView?.getComputedStyle(box, null).color,
          },
        },
      };
    //点击节点后跳转的数组
    var link = ['/l0', '/l1', '/l2', '/l3', '/l4', '/l5', '/l6', '/l7'];
    if (container != null) {
      var network = new Network(container, data, options);
      //双击的事件
      network.on('doubleClick', (properties) => {
        if (properties.nodes.length > 0) {
          let routeData = this.$router.resolve({
            path: link[properties.nodes[0]], //properties.nodes为双击的节点p
          });
          window.open(routeData.href);
        }
      });
      if(but!=null)
      {
        but.addEventListener('click', function(){
          location.reload();
        });
      }
    }
  },
  computed: {},
};
</script>

<style scoped>
.InterpersonalRelationshipBox {
  height: 75vh;
  color: var(--textcolor);
}
</style>
