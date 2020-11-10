<template>
    <div>
        <!-- <conn :options="options" resul="2"  @movieFun="getMsgFormconn"></conn> -->
        <div class="box-title ml-xs-10 mr-xs-10">
            <span class="title-lb"></span>
            <p style="display: contents;">搜索关键词{{seachName}}</p>
            <span class="pull-right font13 text-muted" id="count">
                共有
                <span class="text-color">{{seachLenth}}</span>
                个相关视频
                <span class="hidden-xs">,当前第
                    <span class="text-color">1</span>
                    页
                </span>
            </span>
        </div>
        <div class="clearfix" id="content"  v-if="flag">
            <ul class="img-list clearfix news-list">
                <li class="col-xs-1" v-for="seachMovie in seachMovieDatas" :key="seachMovie.movieId" 
                    style="height:400px;padding-bottom: 15px;border-bottom: solid gray 2px;margin-bottom: 15px;">
                    <div>
                        <div class="col-md-4 col-sm-3 col-xs-wide-35 p-xs-0">
                            <a class="img-pic" href="播放界面" title="这里是电影名称" target="_blank">
                                <img class="lazyload" :src="seachMovie.moviePicPath" 
                                    :data-original="seachMovie.moviePicPath" 
                                    :alt="seachMovie.movieName" style="">
                                <!-- <span class="title text-center text-overflow">{{seachMovie.movieName}}</span> -->
                            </a>
                        </div>
                        <div class="moviePlay">
                            <div class="text-overflow">
                                <h2 class="font16 pull-left" style="margin-top: 12px;margin-bottom: 12px;">
                                    <a href="播放界面" target="_blank">
                                        <span color="text-color">{{seachMovie.movieName}}</span>
                                    </a>
                                </h2>
                            </div>           
                            <div class="news-tips mt-xs-10">
                                <a href="连接到动作界面">{{seachMovie.movieType|filtermovieType()}}</a>
                                <!-- <span class="hidden-xs"></span> 
                                <a href="连接到动作界面" target="_blank">电影类型</a> -->
                            </div>
                            <div class="news-tips hidden-xs mt-xs-10"> 
                                <p style="color:#999;display: contents;">
                                    {{seachMovie.movieActor|filtermovieActor}}
                                </p>
                                <div v-for="(values,idnex) in seachMovie.movieActor"
                                    :key="idnex" class="actors_Par">
                                    
                                    <a href="演员连接" target="_blank" class="movieActor">
                                        <div class="_actors">
                                            {{values}}
                                        </div>
                                    </a>
                                </div> 
                            
                            </div>
                            <div class="hidden-xs col-sm-2 col-xs-1 pl-xs-0">
                                <span class="text-muted">导演：</span>
                                <a href="导演连接" target="_blank">{{seachMovie.movieDirector}}</a> 
                            </div>
                            <div class="hidden-xs col-sm-2 col-xs-1 text-muted">
                                <span>国家/地区：</span>{{seachMovie.movieRegion}}
                            </div>
                            <div class="hidden-xs col-sm-2 col-xs-1 text-muted pl-xs-0">
                                <span>时长：</span>{{seachMovie.movieDuration}}
                            </div>
                            <div class="hidden-xs col-xs-2 text-muted">
                                <span>语言/字幕：</span>{{seachMovie.movieLanguage}}
                            </div>
                            <div class="text-muted hidden-xs vod-txt" @click="onPlot()">
                                <div :style="st">
                                    {{seachMovie.moviePlot|filtermoviePlot}}
                                </div>
                            </div>
                            <div @click="playMovie(seachMovie)">
                                <el-button type="success" round style="width: 118px;margin-top: 10px;font-size: 18px;">
                                    播放
                                </el-button>
                            </div>
                        </div>
                    </div>                   
                </li>               
            </ul>
        </div>
    </div>
</template>
<script>
    import conn from "../unit/conn"
    export default {
        data(){
            return{
                seachLenth:'',
                seachName:'',
                seachMovieDatas:'',  
                flag: false,  // 开关  
                movieActors:'' ,
                flag1:false,
                plot:'',
                st:`overflow: hidden;text-overflow: ellipsis;
                    display: -webkit-box;-webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;`   
            }
        },
        mounted(){
            this.GetData()
        },
        filters:{
            filtermovieType(name){                
                return "电影类型："+name                
            },
            filtermovieActor(){
                return "演员名称："
            },
            filtermoviePlot(name){               
                return "简介："+name
            }
        },
        watch:{  
            seachMovieDatas:{
                deep: true ,
                 handler(newVal,oldVal){                                    
                    //newVal.length && (this.flag = !0)
                    if(newVal.length>0){
                        this.flag=true                       
                        for(var i=0;i<newVal.length;i++){
                            newVal[i].movieActor=newVal[i].movieActor.split('/')                            
                        }
                     }  
                },
                
            }
        },
        methods:{ 
            playMovie(seachMovie){
                console.log(seachMovie)
                this.$router.push({
                    name: 'playMovies',  
                    params:{
                        seachMovie:seachMovie
                    }
                })
            } ,
            onPlot(){ 
               // console.log(this.flag1)              
                this.flag1=!this.flag1               
                //console.log(this.flag1)  //true
                // if(this._falg)
                //     {
                //         console.log("sfsfafsssssssssssssssssssssss")
                //         this.st=`overflow: hidden;text-overflow: ellipsis;
                //             display: -webkit-box;-webkit-line-clamp: 2;
                //             -webkit-box-orient: vertical;`                                         
                //         console.log(this.flag1)            
                //     } 
                // else
                //    {
                //     console.log("fffffffffffffffffffffffffffffffffff")                   
                //     this.st='' 
                //     console.log(this.flag1)             
                //    }  
                              
                
            },          
           GetData(){ 
            // this.seachName=this.$route.query.seachkeyWord
            // this.seachMovieDatas=this.$route.query.seachMovieData
             //this.seachLenth=this.seachMovieDatas.length
            this.seachName=this.$route.params.seachkeyWord
            this.seachMovieDatas=this.$route.params.seachMovieData
            //  this.seachLenth=this.seachMovieDatas.length
            //  console.log(this.$route.params.seachMovieDatas)
            //  console.log(this.seachMovieDatas.length)        
           }
        }
    }
</script>
<style scoped>
    ._plot{       
        height: 1px;
        border-bottom: solid gray 2px;
    }
    .box-title {
        overflow: hidden;
        line-height: 35px;
        margin-bottom: 5px;
    }
    .mr-xs-10 {
    margin-right: 10px!important;
    }
    .ml-xs-10 {
        margin-left: 10px!important;
    }
    .title-lb {
        border-color: #777ffb;
        border-left: 4px solid #FFF;
        margin-right: 5px;
        padding-top: 2px;
    }
    .box-title h2, .box-title h1 {
        display: inline-block;
        font-size: 18px!important;
        margin-bottom: 0px!important;
    }
    .text-muted {
        color: #999;
    }
    .font13 {
        font-size: 13px!important;
    }
    .pull-right {
        float: right!important;
    }
    .text-color {
        color: #777ffb;
    }
    .col-xs-1 {
        width: 100%;
    }  

    .moviePlay{
            text-align: left;
            width: 80%;
            float: right;
    }
    .hidden-xs{
        line-height: 30px;
    }
    .hidden-xs .movieActor{
        border-radius: 2px 2px;
    }
    .actors_Par{
        display: inline-block;
        margin-right: 10px;
        border-radius: 40%;
        width: 60px;
        text-align: center;
        background: #e4e7ed;
        color: #999;
    }
    .img-pic, .star-pic, .vod-detail-thumb {
        display: block;
        position: relative;
        /* padding-top: 140%; */
    }
    .img-pic img, .star-pic img, .vod-detail-thumb img {
        position: absolute;
        left: 0;
        top: 0;
        box-shadow: 0 4px 10px rgba(51,51,51,0.2);
        width: 250px;
        height: 400px;
        border-radius: 5px;
        object-fit: cover;
        object-position: center top;
        background: #f3f3f3;
    }
    .img-list .title {
        z-index: 2;
        display: inline-block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 5px 10px;
        background-repeat: no-repeat;
        background-repeat: no-repeat;
        background-image: linear-gradient(transparent,rgba(0,0,0,.5));
        color: #fff;
    }
</style>