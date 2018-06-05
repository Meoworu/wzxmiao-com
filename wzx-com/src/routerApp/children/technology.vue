<template>
    <div class="box">
        <classify :arr="tabArr" v-on:changeMark="getMarkdown"></classify>
        <upload class="up-pon"></upload>
        <!--<div class="bor"></div>-->
        <div v-html="markHtml" class="markdown-body"></div>
    </div>
</template>
<script>
    import Classify from '../../components/common/classify.vue'
    import Upload from '../../components/common/upload.vue'
    export default {
        data(){
            return {

            }
        },
        components:{
            Classify,
            Upload
        },
        created(){
            this.getClass();
            this.getMarkdown();
        },
        methods:{
            getClass(){
                this.$store.dispatch('getTab');
            },
            getMarkdown(m){
                let n = m || this.$route.params.id;
                this.$store.dispatch('markdown',n);
            }

        },
        computed:{
            tabArr(){
                return this.$store.state.tabArr;
            },
            markHtml(){
                return this.$store.state.markHtml;
            }
        }
        
        
    }
</script>
<style scoped lang="less">
    .box{
        height: calc(100% - 50px);
        overflow-y: scroll;
    }
    hr{
        color: #111;
    }
    @media (max-width: 767px) {
        .box{
            padding: 15px 15px 0 15px;
        }
    }


    /* screen-sm-min & screen-sm-max */


    /* screen-md-min & screen-md-max */
    @media (min-width: 768px) {
        .box{
            margin: 50px 0 0 50px;
            padding-right: 50px;
        }
    }
</style>
