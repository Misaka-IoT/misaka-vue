<template></template>
<script lang="ts">
import axios from 'axios';
export default {
  name: 'MisakaGpt',
  data() {
    return {
      messages: [{}],
    };
  },
  methods: {
    GetReply(newmessage: string) {
      this.messages.push({ role: 'user', content: newmessage });
      axios
        .post('https://misakagpt.z2bguoguo.cn/', JSON.stringify(this.messages))
        .then((res) => {
          this.messages.push({ role: 'assistant', content: res.data.result });
          alert(res.data.result);
          console.log(res.data.result);
        });
    },
    GetReply2(newmessage: string) {
      this.messages.push({ role: 'user', content: newmessage });
      axios
        .post('https://misakagpt.z2bguoguo.cn/', JSON.stringify(this.messages))
        .then((res) => {
          this.messages.push({ role: 'assistant', content: res.data.result });
          this.SendGPT(res.data.result);
        });
    },
  },
  created() {
    this.messages.splice(0, this.messages.length);
  },
  props: ['SendGPT'],
};
</script>
<style lang="scss" scoped></style>
