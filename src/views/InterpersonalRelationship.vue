<template>
  <div>
    <div id="InterpersonalRelationship" style="height:500px"></div>
    <p align="center">使用vis-network(MIT)制作</p>
    <p align="center">Made in vis-network (MIT)</p>
  </div>
  
</template>
<script lang="ts">
import { computed } from 'vue';

import { DataSet } from "vis-data/peer";
import { Network } from "vis-network/peer";
import "vis-network/styles/vis-network.css";
export default {
  data()
  {
    return
    {
      
    };
  },
  mounted()
  {
    const container = document.getElementById("InterpersonalRelationship");
    const nodes = new DataSet([
        { id: 0, label: "御坂美琴"},
        { id: 7, label: "上条当麻" },
        { id: 1, label: "御坂" },
        { id: 2, label: "白井黑子" },
        { id: 3, label: "食蜂操祈" },
        { id: 4, label: "初春饰利" },
        { id: 5, label: "佐天泪子" },
        { id: 6, label: "御坂美铃" },
      ]);
      const edges = new DataSet([
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 0, to: 4 },
        { from: 0, to: 5 },
        { from: 0, to: 3 },
        { from: 0, to: 6 },
        { from: 0, to: 7 },
      ]);
      const data = {
        nodes: nodes,
        edges: edges
      };
      const options = {};
      const network = new Network(container, data, options);       
  },
  computed:
  {
  },
}
</script>