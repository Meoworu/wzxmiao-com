<template>
    <div class="box-upload">
        <label for="upload" class="el-icon-upload upload">上传文档</label>
        <input type="file" ref='file' @change="fileChange()" id="upload" name="upload" style="display:none">
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            fileChange(){
                this.$store.commit('setUploadFlag', true);
                this.$store.commit('setFileArr', this.$refs.file.files);
            }
        }
    }
</script>
<style scoped lang="less">
.box-upload{
    position: absolute;
    height: auto;
    top: 10px;
    right: 65px;
    display: inline;
}
    .upload{
        background-color: #409effab;
        padding: 6px 9px;
        border-radius:2px;
        cursor: pointer;
    }
    .upload:hover{
        background-color: #369aff;
    }
    [class*=" el-icon-"], [class^=el-icon-]{
        color: white;
    }
</style>
