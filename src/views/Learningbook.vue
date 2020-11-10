<template>
    <el-collapse
        v-model="activeNames"
        @change="handleChange">
        <JQuery></JQuery>
        <vue></vue>
        <ASPNet></ASPNet>
        <server></server>
        <layui></layui>   
    </el-collapse>
      
    
</template>
<script>
    import JQuery from "../components/learningbook/Jquery";
    import vue from "../components/learningbook/vue";
    import ASPNet from "../components/learningbook/ASPNet";
    import server from "../components/learningbook/Server";
    import layui from "../components/learningbook/Layui";
    export default {
        data(){
            return{
                activeNames: ["1"]
            }
        },
        components:{
            JQuery,
            vue,
            ASPNet,
            server,
            layui

        },
        methods:{
            handleChange(val) {
            console.log(val);
            }
        }
    }
</script>