<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
<template>
  <MisakaGpt ref="MisakaGpts" :SendGPT="SendGPTs"></MisakaGpt>
  <button class="fab GPT-setting" :onClick="ClickChat">
    <Icon icon="material-symbols:forum" width="24" height="24" />
  </button>
  <div>
    <beautiful-chat
      :participants="participants"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :showEmoji="false"
      :showFile="false"
      :showEdition="false"
      :showDeletion="false"
      :deletionConfirmation="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="false"
      :showCloseButton="true"
      :showHeader="false"
      :colors="colors"
      :close="closeChat"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false"
      :messageStyling="messageStyling"
      @onType="handleOnType" />
  </div>
  <vueLive2d
    style="position: fixed; bottom: 0; right: 50; opacity: 0.6"
    :model="mode"
    apiPath="https://misaka-fans.github.io/live2d/"></vueLive2d>
</template>
<script lang="ts">
import MisakaGpt from './MisakaGpt.vue';
import vueLive2d from 'vue-live2d';
export default {
  name: 'ChatMisaka',
  components: { MisakaGpt },
  data() {
    return {
      mode: ['mikoto', 'mikoto.model'],
      participants: [
        {
          id: 'Misaka',
          name: 'Misaka',
          imageUrl:
            'https://vue.misaka-fans.space/assets/%E7%82%AE%E5%A7%90%E5%90%83%E8%9B%8B%E7%B3%95.6c221c5c.webp',
        },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      messageList: [{ type: 'text', author: `me`, data: { text: `` } }], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        launcher: {
          bg: '#c49582',
        },
        messageList: {
          bg: '#ffffff',
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        receivedMessage: {
          bg: '#c49582',
          text: '#222222',
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867',
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  methods: {
    sendMessage(text: any) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: 'support',
          type: 'text',
          data: { text },
        });
      }
    },
    onMessageWasSent(message: any) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
      (this.$refs.MisakaGpts as any).GetReply2(message.data.text);
      this.messageList = [
        ...this.messageList,
        { type: 'text', author: `Misaka`, data: { text: '生成中...' } },
      ];
    },
    ClickChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = !this.isChatOpen;
      document
        .getElementsByClassName('sc-chat-window')[0]
        .setAttribute('style', 'bottom:200px;z-index:20;max-height:50%');
      document
        .getElementsByClassName('sc-user-input--text')[0]
        .setAttribute('placeholder', '请输入想询问御坂的内容');
      document
        .getElementsByClassName('sc-message-list')[0]
        .setAttribute('style', 'border-radius:50px');
      this.newMessagesCount = 0;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {},
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    SendGPTs(res: any) {
      this.messageList[this.messageList.length - 1] = {
        type: 'text',
        author: `Misaka`,
        data: { text: res },
      };
    },
  },
  created() {
    this.messageList.splice(0, this.messageList.length);
  },
  mounted() {
    document
      .getElementsByClassName('vue-live2d-tool')[0]
      .setAttribute('style', 'opacity:0');
    document
      .getElementsByClassName('vue-live2d-tip vue-live2d-tip-on-top')[0]
      .setAttribute('style', 'opacity:0');
  },
};
</script>
<style lang="scss" scoped></style>
