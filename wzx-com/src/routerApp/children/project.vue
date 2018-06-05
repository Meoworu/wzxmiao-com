<template>
    <div class="box">
        <classify :arr="idArray"></classify>
        <div class="markdown-body">
            <h1 @click="open()">项目</h1>
        </div>
    </div>
</template>
<script>
    import Classify from '../../components/common/classify.vue'
    export default {
        components:{
            Classify
        },
        data(){
            return {
                idArray:[
                    {name:'项目'}
                ]
            }
        },
        methods:{
            open(){
                let obj = {title:'恭喜您 上传成功',type:false};
                this.$store.commit('setMsg',obj);
            }
        }
    }
    
</script>
<style scoped lang="less">
    @media (max-width: 767px) {
         .box{
            padding: 15px 15px 0 15px;
        }
    }



    /* screen-md-min & screen-md-max */
    @media (min-width: 768px) {
        .box{
            margin: 50px 0 0 50px;
        }
    }
</style>
