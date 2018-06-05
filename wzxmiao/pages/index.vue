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
        <div class="tab animated bounceInRight">
            <div class="tab-box">
                <figure>
                    <img src="../static/image/trval.png" alt="">
                    <p>旅行</p>
                </figure>
                <figure>
                    <img src="../static/image/trval.png" alt="">
                    <p>博客</p>
                </figure>
                <figure>
                    <img src="../static/image/trval.png" alt="">
                    <p>必应</p>
                </figure>
                <figure>
                    <img src="../static/image/trval.png" alt="">
                    <p>我的</p>
                </figure>
            </div>
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
<style src="../static/scss/common.scss"></style>
<style scoped lang="scss">

    .box{
        width:100%;
        height:100%;
        background-image: url(../static/image/all_bg.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size:cover;
        padding: 0.1px;
        .pure-u-love{
        }
        
        .tab-box{
            display: flex;
            img{
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                opacity: .6;
            }
            figure{
                margin: auto;
                text-align: center;
                span{
                    color:rgba(256,256,256,0.6);
                }
            }
        }
        .message{
            
            h1{
                font-size: 48px;
                font-weight: 700;
                color: rgba(256,256,256,0.6);
                font-family: "Helvetica Neue";
            }
            h3{
                font-size: 32px;
                font-weight: 200;
                color: rgba(256,256,256,0.6);
                font-family: "Helvetica Neue";
            }
        }
        .name{
            //font-family: "Helvetica Neue";
            font-weight: 100;
            font-size: 60px;
            letter-spacing: 10px;
            margin-top: 1rem;
            color: rgba(256,256,256,0.6);
        }
    }
    @media (max-width: 767px) {
        .pure-u-love{
            margin: 10rem 0 0 0;
            text-align: center;

        }
        .tab{
            border-radius: 6px 6px 0 0;
            height: 3rem;
            //background-color: rgba(176,193,206,0.6);
            width: 100%;
            position: absolute;
            left:0;
            bottom: 0;
            padding-top: 0.3rem;
            .tab-box{
                img{
                    width: 2.4rem;
                    height: 2.4rem;
                    border-radius: 4px;
                }
                span{
                    position: relative;
                    top:-0.3rem;
                    font-size: 12px;
                }
                p{
                    display: none;
                }

            }
        }
    }


    /* screen-sm-min & screen-sm-max */
    @media (min-width: 768px) and (max-width: 991px) {
        .pure-u-love{
            margin: 10rem 0 0 0;
            text-align: center;
        }
        .tab{
            position: absolute;
            right: 12rem;
            bottom:10rem;
            figure{
                text-align: center;
                width: 7rem;
                p{
                    font-size: 24px;
                    color: rgba(256,256,256,0.6);
                }
            }
        }
    }


    /* screen-md-min & screen-md-max */
    @media (min-width: 992px) {
        .pure-u-love{
            margin: 10rem 0 0 12rem;
        }

        .tab{
            position: absolute;
            right: 12rem;
            bottom:10rem;
            figure{
                text-align: center;
                width: 7rem;
                p{
                    font-size: 24px;
                    color: rgba(256,256,256,0.6);
                }
            }
        }
        
    }


    /* screen-lg-min */
    
</style>
