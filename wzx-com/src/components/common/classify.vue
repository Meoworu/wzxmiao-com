<template>
        <el-dropdown class="more">
            <el-button size="mini" icon="el-icon-more"></el-button>
            <el-dropdown-menu slot="dropdown" >
                <span v-for="(item,key) in arr" :key="item.key" @click="busLoad(key+1)"><el-dropdown-item >{{item.name}}</el-dropdown-item></span>
            </el-dropdown-menu>
        </el-dropdown>   
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props:{
            arr:{
                type:Array,
                default:[]
            }
        },
        created(){

        },
        methods:{
            busLoad(n){
                this.$emit('changeMark',n);
                this.$router.push('/content/technology/'+n);
            }
        }
    }
</script>
<style scoped lang="less">
    .more{
        position: absolute;
        right: 10px;
        top: 10px;
    }
</style>
