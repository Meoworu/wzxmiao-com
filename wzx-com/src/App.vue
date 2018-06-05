<template>
  <div id="app">
      <msg v-if="msgStart"></msg>
      <upload-pop v-if='upload'></upload-pop>
      <router-view></router-view>
  </div>
</template>

<script>
import UploadPop from './components/common/uploadPop.vue'
import Msg from './components/common/msg.vue'
export default {
  name: 'App',
  components: {
      UploadPop,
      Msg
  },
  computed:{
      upload(){
          return this.$store.state.uploadWinFlag;
      },
      msgStart(){
          return this.$store.state.msgStart;
      }
  }
}
</script>
<style src="../static/less/common.less" lang='less'></style>
