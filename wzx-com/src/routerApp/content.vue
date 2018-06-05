<template>
  <div id="content" >
      <div class="left animated slideInLeft" :class="{'left-out':value2,'left-in':!value2}">
          <el-switch class="switch" v-model="value2" active-color="#b1b1b1" inactive-color="#f5f6d5"></el-switch>
          <tab :class="{'animated bounceInLeft':!value2,'animated bounceOutLeft':value2}"></tab>
      </div>
      <div class="right" :class="{'right-out':value2,'right-in':!value2}">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Tab from '../components/content/tab.vue'
export default {
  components: {
      Tab
  },
    data(){
        return {
            flag:true,
            value2: false
        }
    },
    computed:{
        
    }
}
</script>

<style  lang="less">
    #content{
        height: 100%;
        background-color: #f5f6d5;
        color:#111;
        position: relative;
        padding: 0.1px;
    }
    .left{
        height: inherit;
        background-color: #b1b1b1;
        float: left;
    }
    .right{
        height: inherit;
        float: left;
        
    }
    
    .switch{
        position: absolute;
        right: -45px;
        top: 5px;
    }
    @media (max-width: 767px) {
        .switch{
            display: none;
        }
        .right{
            width:100%;
        }
        .left{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 50px;
        }
    }


    /* screen-sm-min & screen-sm-max */
    @media (min-width: 768px) and (max-width: 991px) {
        .left-in{
            transition: width 1s;
            width: 150px;
        }
        .left-out{
            transition: width 1s;
            width: 0;
        }
        .right-in{
            transition: width 1s;
            width: calc(100% - 150px);
        }
        .right-out{
            transition: width 1s;
            width: 100%;
        }
    }


    /* screen-md-min & screen-md-max */
    @media (min-width: 992px) {
        .left-in{
            transition: width 1s;
            width: 150px;
        }
        .left-out{
            transition: width 1s;
            width: 0;
        }
        .right-in{
            transition: width 1s;
            width: calc(100% - 150px);
        }
        .right-out{
            transition: width 1s;
            width: 100%;
        }
       
    }
</style>