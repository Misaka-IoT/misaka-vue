<template>
  <div class="InterpersonalRelationshipBox" id="InterpersonalRelationshipBox">
    <div id="InterpersonalRelationship" style="height: 500px"></div>
    <div class="edge-tip" id="edgeTip"></div>
  </div>
</template>
<script lang="ts">
import { DataSet } from 'vis-data/peer';
import { Network } from 'vis-network/peer';
import 'vis-network/styles/vis-network.css';
//<图片>
import i0 from '@/assets/InterpersonalRelationshipImage/0.webp';
import i1 from '@/assets/InterpersonalRelationshipImage/1.webp';
import i2 from '@/assets/InterpersonalRelationshipImage/2.webp';
import i3 from '@/assets/InterpersonalRelationshipImage/3.webp';
import i4 from '@/assets/InterpersonalRelationshipImage/4.webp';
import i5 from '@/assets/InterpersonalRelationshipImage/5.webp';
import i6 from '@/assets/InterpersonalRelationshipImage/6.webp';
import i7 from '@/assets/InterpersonalRelationshipImage/7.webp';
import i8 from '@/assets/InterpersonalRelationshipImage/8.webp';
//</图片>

export default {
  mounted() {
    const but = document.getElementById('ThemeSwitcherButton');
    const container = document.getElementById('InterpersonalRelationship');
    const box = document.getElementById('InterpersonalRelationshipBox');
    //节点数据
    const nodeList = [
      { id: 0, label: '御坂美琴', shape: 'image', image: i0 },
      { id: 1, label: '御坂', shape: 'image', image: i1 },
      { id: 2, label: '白井黑子', shape: 'image', image: i2 },
      { id: 3, label: '食蜂操祈', shape: 'image', image: i3 },
      { id: 4, label: '初春饰利', shape: 'image', image: i4 },
      { id: 5, label: '佐天泪子', shape: 'image', image: i5 },
      { id: 6, label: '御坂美铃', shape: 'image', image: i6 },
      { id: 7, label: '上条当麻', shape: 'image', image: i7 },
      { id: 8, label: '芙兰达', shape: 'image', image: i8 },
    ];
    const nodes = new DataSet(nodeList);
    //连线数据，tip 为悬停在连线上时显示的小字（可选）
    const edgeList: {
      from: number;
      to: number;
      id: number;
      label: string;
      arrows?: string;
      tip?: string;
    }[] = [
      { from: 0, to: 1, id: 1, label: '克隆体' },
      { from: 0, to: 2, id: 2, label: '室友', tip: '她们是女同事吗？' },
      { from: 0, to: 3, id: 3, label: '同学' },
      { from: 0, to: 4, id: 4, label: '朋友' },
      { from: 0, to: 5, id: 5, label: '朋友' },
      { from: 0, to: 6, id: 6, label: '母女' },
      { from: 0, to: 7, id: 7, arrows: 'to', label: '爱慕' },
      { from: 0, to: 8, id: 11, label: '敌人' },
      { from: 4, to: 5, id: 8, label: '挚友' },
      { from: 7, to: 1, id: 9, label: '恩人' },
      { from: 7, to: 2, id: 10, label: '情敌' },
    ];
    const edges = new DataSet(edgeList);
    const data = {
      nodes: nodes,
      edges: edges,
    };
    const fontColor = box
      ? document.defaultView?.getComputedStyle(box, null).color
      : undefined;
    const options = {
      interaction: {
        hover: true,
      },
      edges: {
        color: '#66CCFF',
        font: {
          color: fontColor,
          align: 'horizontal',
        },
      },
      nodes: {
        font: {
          color: fontColor,
        },
      },
    };
    //点击节点后跳转的数组
    var link = [
      'flush-heading-a-button0',
      '/l1',
      'flush-heading-a-button2',
      '/l3',
      'flush-heading-a-button3',
      'flush-heading-a-button4',
      '/l6',
      'flush-heading-a-button1',
      '/l8',
    ];
    if (container != null) {
      var network = new Network(container, data, options);
      network.on('click', (properties) => {
        if (properties.nodes.length > 0) {
          const label = nodeList.find(
            (node) => node.id === properties.nodes[0]
          )?.label;
          if (label != null) {
            this.$emit('select-character', label);
          }
        }
      });
      const edgeTip = document.getElementById('edgeTip');
      network.on('hoverEdge', (properties) => {
        if (edgeTip == null) return;
        const hovered = edgeList.find((edge) => edge.id === properties.edge);
        if (hovered?.tip == null) return;
        edgeTip.textContent = hovered.tip;
        edgeTip.style.left = `${properties.pointer.DOM.x}px`;
        edgeTip.style.top = `${properties.pointer.DOM.y}px`;
        edgeTip.classList.add('show');
      });
      network.on('blurEdge', () => {
        edgeTip?.classList.remove('show');
      });
      //双击的事件
      network.on('doubleClick', (properties) => {
        if (properties.nodes.length > 0) {
          // let routeData = this.$router.resolve({
          //   path: link[properties.nodes[0]], //properties.nodes为双击的节点p
          // });
          // window.open(routeData.href);
          if (link[properties.nodes[0]].substring(0, 1) != '/') {
            document.getElementById(link[properties.nodes[0]])?.click(); //点击人物介绍右边的按钮
          }
        }
      });
      if (but != null) {
        but.addEventListener('click', function () {
          location.reload(); //更改树状图的色调需要刷新
        });
      }
    }
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.InterpersonalRelationshipBox {
  position: relative;
  height: 75vh;
  color: var(--color-theme);
}
.edge-tip {
  position: absolute;
  left: 0;
  top: 0;
  padding: 2px 8px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-on-theme);
  background-color: var(--color-theme);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translate(14px, -50%);
  transition: opacity 0.15s ease;
  z-index: 10;
}
.edge-tip.show {
  opacity: 1;
}
</style>
