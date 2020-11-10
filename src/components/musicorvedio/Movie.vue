<template>
    <div>
        <conn :options="options" resul="2"  @movieFun="getMsgFormconn"></conn>
         <div style="margin-top: 15px;"> 
            <el-card>
                <div class="clearfix">
                    <el-tabs v-model="activeName" @tab-click="handleClick" class="tab_clearrfix">
                        <el-tab-pane v-for="pane in panes" :key="pane.id" 
                            :label="pane.movieCategoryActionName" :name="pane.movieCategoryName" :class="pane.movieCategroyClass">
                            <!-- <movieDetail :message='pane.label'></movieDetail>  -->                             
                            <movieDetail :message="pane" ref="detail"></movieDetail>       
                        </el-tab-pane>                           
                    </el-tabs>                 
                </div>                
            </el-card>
        </div>       
    </div>
       
</template>
<style scoped>
    .el-select .el-input {
        width: 130px;
    }
    .el-input-group{
        width: 500px;
        margin: auto;
    }
</style>
<script>
    import conn from "../unit/conn"
    import movieDetail from "../movie/movieDetail";
    export default {
        data(){
            return{
                activeName:"frist",   
                options:[{Id:'1',name:'电影名称'},{Id:'2',name:'演员/导演名称'}],
                panes:'',
                // panes:[
                //      {Id:'1',label:'热播',name:'frist',class:'ren'}
                //     ,{Id:'2',label:'喜剧',name:'second',class:'xuan'}
                //     ,{Id:'3',label:'动作',name:'three',class:'wu'}
                //     ,{Id:'4',label:'科幻',name:'four',class:'fan'}
                //     ,{Id:'5',label:'偶像',name:'five',class:'mao'}
                //     ,{Id:'6',label:'恐怖',name:'six',class:'jing'}
                //     ,{Id:'7',label:'警匪',name:'seven',class:'wu_d'}
                //     ,{Id:'8',label:'爱情',name:'six',class:'ai'}
                // ],
                seachMovie:null,
                seachMovieData:null
            }
        },
        components:{
            conn,
            movieDetail
        },
        mounted(){
                
        },
        methods:{
            //视频分类   
            GetMovieData(data){               
               this.panes=data              
               console.log(this.panes)
            },
            //传值给子组件
            handleClick(tab,e){
                //this.$refs.detail[tab.index].GetMovieDetail(this.activeName,this.seachMovie) 
                this.$refs.detail[tab.index].GetMovieDetail(this.activeName,this.seachMovie)                 
            },
            //搜索
             getMsgFormconn(data){  
                //  console.log(data[0].Id)
                //  console.log(data)
                  console.log(data[1])              
                this.seachMovie=data 
                this.axios({  
                    method: 'get',
                     url: 'https://localhost:44333/movie/GetSeachMovieName',
                     
                     params: {
                       movieName:data[1],
                       movieCategoryId:data[0].Id
                    }                    
                }).then(res=>{                    
                    this.seachMovieData=res.data
                    console.log(this.seachMovieData)
                     this.$router.push({
                         name: 'seachMovie',  
                        params:{
                            seachkeyWord:data[1],
                            seachMovieData:this.seachMovieData
                        }
                        // query:{
                        //     seachkeyWord:data[1],
                        //     seachMovieData:this.seachMovieData
                        // }
                    })
                }).catch(err=>{
                    console.log(err)
                })                           
               
            }
        }
    }
</script>