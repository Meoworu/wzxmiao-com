<template>
    <div class="msg" :class="{'success el-icon-circle-check':type, 'close el-icon-circle-close':!type}" >
        {{title}}
    </div>
</template>
<script>
   export default {
       data(){
           return {
            
           }
       },
       computed:{
           title(){
               return this.$store.state.msgTitle;
           },
           type(){
               return this.$store.state.msgType;
           }

       }
   } 
</script>
<style scoped lang="less">
    .success{
        color: #67c23a;
        position: fixed;
        top:-40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 12;
        padding: 8px 30px;
        border-radius: 4px;
        background-color: #f0f9eb;
        border:1px solid #c2e7b0;
    }
    .close{
        color: #f56c6c;
        position: fixed;
        top:-40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 12;
        padding: 8px 30px;
        border-radius: 4px;
        background-color: #fef0f0;
        border:1px solid #fbc4c4;
    }
    .msg{
        animation: changebox 5s cubic-bezier(0.25, 1.07, 0.17, 0.98);
    }
    @keyframes changebox {
        50% {  top:40px;  }
        100% { top:-40px;  }
    }
</style>
