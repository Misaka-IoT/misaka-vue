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
      this.messages.push({ role: 'user', parts:[{"text": newmessage}] });
      axios
        .post('https://misakagpt.z2bguoguo.cn/', JSON.stringify(this.messages))
        .then((res) => {
          this.messages.push({ role: 'model',parts:[{"text": res.data.candidates[0].content.parts[0].text}]});
          alert(res.data.candidates[0].content.parts[0].text);
          console.log(res.data.candidates[0].content.parts[0].text);
        });
    },
    GetReply2(newmessage: string) {
      this.messages.push({ role: 'user', parts:[{"text": newmessage}] });
      axios
        .post('https://misakagpt.z2bguoguo.cn/', JSON.stringify(this.messages))
        .then((res) => {   
          this.messages.push({ role: 'model', parts:[{"text": res.data.candidates[0].content.parts[0].text}] });
          this.SendGPT(res.data.candidates[0].content.parts[0].text);
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
