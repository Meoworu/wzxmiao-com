<template>
    <ul class="tab">
        <li><router-link to="/content/technology">技术</router-link></li>
        <li><router-link to="/content/project">项目</router-link></li>
        <li><router-link to="/content/active">娱乐</router-link></li>
        <li><router-link to="/content/about">我的</router-link></li>
    </ul>
</template>
<script>
    export default {
        data(){
            return {
                id:1
            }
        }
    }
</script>
<style lang="less" scoped>
    .tab{
        width: 100%;
        height: 100%;
        letter-spacing: 5px;
        li{
            cursor: pointer;
            a{
                color:#555;
                display: block;
            }
            .router-link-active{
                color:#000;
            }
        }
    }
    @media (max-width: 767px) {
        .tab{
            display: flex;
            li{
                margin: auto;
            }
        }
    }


    /* screen-sm-min & screen-sm-max */
    @media (min-width: 768px) and (max-width: 991px) {
        .tab{
            li{
                height: 35px;
                line-height: 35px;
                text-indent: 25px;

            }
        }
    }


    /* screen-md-min & screen-md-max */
    @media (min-width: 992px) {
        .tab{
            li{
                height: 35px;
                line-height: 35px;
                text-indent: 25px;

            }
        }
    }
</style>
