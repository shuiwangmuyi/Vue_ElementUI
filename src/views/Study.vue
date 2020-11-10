<template>
    <div v-show="show">
       <el-card>
            <el-card>
                <div slot="header">
                    <h3 style="text-align:center">{{IEDS}}</h3>
                </div>
                <div style="margin:0 auto;text-align:center">
                    <div v-for="item in projectName"
                        :key="item.Id" style="display:inline-block;">
                        <el-card v-show="item.categoryId==1" style="margin:30px;">
                            <div style="text-align: center;margin-bottom:10px;">{{item.EDIName}}</div>
                            <el-link :underline="false" type="success" :href="item.EDIUrl">
                                <div>
                                    <el-image :src="item.EDIPath" style="width:180px;height:180px;"></el-image>
                                    <div style="text-align: center;margin-top:13px;">提取码:{{item.EDIExtraction}}</div>
                                </div>
                            </el-link>
                        </el-card>
                    </div>
                </div>
            </el-card>
            <el-card>
                <div slot="header">
                    <h3 style="text-align:center">{{pro}}</h3>
                </div>
                 <div style="margin:0 auto;text-align:center">
                    <div v-for="item in projectName"
                        :key="item.Id" style="display:inline-block;">
                        <el-card class="_card" v-show="item.categoryId==2" style="margin:30px;">
                            <el-tooltip
                                class="item _button" effect="dark" :content="item.EDIName" placement="right">
                                 <el-button>{{item.EDIName|studentName}}</el-button>
                            </el-tooltip>
                            <!-- <div style="text-align: center;margin-bottom:10px;" @click="mousehover">{{item.name|studentName}}</div> -->
                            <el-link :underline="false" type="success" :href="item.EDIUrl">
                                <div>
                                    <el-image :src="item.EDIPath" style="width:180px;height:180px;"></el-image>
                                    <div style="text-align: center;margin-top:13px;">提取码:{{item.EDIExtraction}}</div>
                                </div>
                            </el-link>
                        </el-card>
                    </div>
                </div>
            </el-card>
       </el-card>
    </div>
</template>
<script>
    export default({
        data() {
            return { 
                show:false,  
                IEDS:"",  
                pro:"",            
                projectName: []      
            };
        },  
        created() {  
            this.selectStudent()
        },
        mounted(){
            //this.GetUserName()           
        },
        filters:{
            studentName(val){
                if(val.length>9){
                    return val.slice(0,10)+"……";
                }
                return val
            },
         
        },
        methods:{
            GetUserName(){   
                if(this.$route.query.userName==undefined||this.$route.query.userName==null)
                    this.$router.push("/login");
            },            
            selectStudent(){       
                this.axios({
                    method: "get",
                    // url: "http://122.51.230.174:5000/api/SelectSudent",
                   // url: "http://127.0.0.1:1111/api/SelectStudy",
                   url:'http://localhost:5000/api/SelectStudy'
                }).then(res=>{   
                    this.IEDS="IDE工具下载" 
                    this.pro="个人项目下载" 
                    this.show=true
                    this.projectName=res.data.message  
                   // console.log( this.projectName)                   
                }) .catch(err => {
                console.log(err);
                });
            }
        }
    })
</script>
<style>
    ._tese{
        width: 80%;
    margin:0 auto;
    }
    .test{
        width:220px;
        text-align:center;
        display: inline-block;
        margin: 12px;
    }
    ._card{
        width: 220px;
        border: 0;
    }
    ._button{
        width:180px;
        text-align: center;
        /* margin-bottom:10px; */
        margin:0 0 10px 0 ;
        display:inline-block;
        border: 0px solid #DCDFE6;
    }
    ._button:focus, ._button:hover{
        color: #409EFF;
        border-color: white;
        background-color: white;
    }
</style>