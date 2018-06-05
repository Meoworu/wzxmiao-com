<template>
    <div class="box">
        <div class="pure-u-love animated bounceInLeft">
            <div class="message">
                <h1 class="slogan">Dream Afar</h1>
                <h3 class="value-prop">A new way to explore the world</h3>
            </div>

            <div class="name">
                <h1>吴志祥</h1>
            </div>
        </div>
        <div class="start animated bounceInRight">
            <h3>让我们开始吧！哈哈哈～</h3>
            <router-link to="/content" class="pure-button button-success big">开始</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        created(){

            
        }
    }
</script>
<style scoped lang="less">
    .button-success {
        background: rgba(256,256,256,0.8); /* this is a green */
    }
    .button-success:hover{
        background: rgba(256,256,256,1);
    }
    .big{
        padding: .4rem 1.4rem;
    }
    .box{
        width:100%;
        height:100%;
        background-color: #111;
        background-image: url(../../static/image/wzx_bg.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size:cover;
        padding: 0.1px;
        
        
        .message{
            
            h1{
                font-size: 48px;
                font-weight: 700;
                color: rgba(256,256,256,0.8);
                font-family: "Helvetica Neue";
            }
            h3{
                font-size: 32px;
                font-weight: 200;
                color: rgba(256,256,256,0.8);
                font-family: "Helvetica Neue";
            }
        }
        .name{
            //font-family: "Helvetica Neue";
            font-weight: 100;
            font-size: 60px;
            letter-spacing: 10px;
            margin-top: 1rem;
            color: rgba(256,256,256,0.8);
        }
    }
    @media (max-width: 767px) {
        .pure-u-love{
            margin: 6rem 0 0 0;
            text-align: center;

        }
        .start{
            margin-top: 8rem;
            text-align: center;
            font-size: 24px;
            h3{
                margin-bottom: 2.5rem;
            }
        }
    }


    /* screen-sm-min & screen-sm-max */
    @media (min-width: 768px) and (max-width: 991px) {
        .pure-u-love{
            margin: 10rem 0 0 0;
            text-align: center;
        }
        .start{
            margin-top: 8rem;
            text-align: center;
            font-size: 32px;
            h3{
                margin-bottom: 1.5rem;
            }
        }
       
    }


    /* screen-md-min & screen-md-max */
    @media (min-width: 992px) {
        .pure-u-love{
            margin: 10rem 0 0 12rem;
        }
        .start{
            position: absolute;
            right: 12rem;
            bottom:12rem;
            font-size: 32px;
            text-align: right;
            h3{
                margin-bottom: 1.5rem;
            }
        }

        
        
    }    
</style>