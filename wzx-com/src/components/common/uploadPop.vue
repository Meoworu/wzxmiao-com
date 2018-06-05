<template>
    <div class="pop">
        <div class="fill">
            <p><span class="el-icon-close close" @click="closeWin()"></span> 文档上传</p>
            <table>
                <tr>
                    <td colspan="2" class="msg">{{msg}}</td>
                </tr>
                <tr>
                    <td>文件描述：</td>
                    <td><el-input @focus="msg = ''" v-model="value" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td>设置名称：</td>
                    <td><el-input @focus="msg = ''" v-model="name" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr height="80">
                    <td></td>
                    <td><el-button type="primary" @click="sure()">确认</el-button><el-button type="primary" plain @click="closeWin()">取消</el-button></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                name:'',
                value:'',
                msg:''
            }
        },
        created(){
            let n = this.$store.state.fileArr[0].name.lastIndexOf('.');
            this.name = this.$store.state.fileArr[0].name.slice(0, n);
        },
        methods:{
            closeWin(){
                this.$store.commit('setUploadFlag',false);
            },
            sure(){
                if(this.file.name.indexOf('.md')==-1){
                    this.msg = '上传的文档必须为markdown格式';
                }else if(this.name==""){
                    this.msg = '文件名称不能为空';
                }else if(this.value==""){
                    this.msg = '文件描述不能为空';
                }else {
                    this.file.fileName = this.name;
                    this.file.descriptive = this.value;
                    this.$store.commit('setUploadFlag',false);
                    this.$store.dispatch('uploadFile',this.file);
                }
                
            }
        },
        computed:{
            file(){
                return this.$store.state.fileArr[0];
            }
        }
    }
</script>
<style scoped lang="less">
    .pop{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,0.6);
        z-index: 10;
        div{
            width: auto;
        }
        .fill{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            width: 500px;
            height: 400px;
            background-color:#f5f6d5;
            color: #111;
            border-radius: 6px;
            table{
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-55%);
                .msg{
                    color: rgb(216, 132, 132);
                    font-size: 14px;
                }
            }
            tr{
                height: 65px;
            }
        }
        p{
            height: 40px;
            line-height: 40px;
            text-indent: 20px;
            font-size: 18px;
            border-bottom: 1px solid #b1b1b1;
            .close{
                display: inline-block;
                float: right;
                width: 40px;
                height: 40px;
                font-size: 27px;
                text-indent: 5px;
                line-height: 40px;
                color: #a1a1a1;
                cursor: pointer;
            }
            .close:hover{
                color:#111;
            }
        }
    }
</style>
