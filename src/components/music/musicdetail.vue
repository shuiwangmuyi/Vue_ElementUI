<template>
    <div :id="message.class" style="margin-top: 10px;">
        <!-- {{message.musiCategorLeable}} -->
        <el-badge v-for="music in musics" :key="music.id" :value="music.musicHot" class="item">
            <el-row :gutter="20">
                <el-col :span="12" class="_col" style=" width: 105%;">
                    <div class="grid-content bg-purple">
                            <!-- :content="music.musicAuthor|filterinfor(music.musicHot)" -->
                           <div style="width: 60%;display: inline-block;">{{music.musicName|filterMusicName}}</div>
                           <span>{{music.musicAuthor|filterMusicName}}</span>
                        <div class="playbtn" @click="musicPaly(music)">
                            <p class="el-icon-video-play _play _playBtn" ></p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-badge>          
    </div>      
</template>
<script>
     import vmson from '../../store/emptyVue'
    export default {
        data(){
            return{
                _play:'el-icon-video-play',
                mess:this.message.musiCategorLeable,
                musics:''
            }
        },
        //props:['message'],
        props:{
            message: Object,
            required: true
        },
        mounted(){
            vmson.$off('musicFunction')
            this.GetBrotherData()
            this.musiCategory("古风")
        },
        filters:{
            filterinfor(_musicAuthor,_musicHot){
                return "歌手："+_musicAuthor+"Hot："+_musicHot ;
            },
            filterMusicName(val)
            {
                 if(val.length>17)
                   return val.slice(0,18);
                return val
            }
        },
        methods:{ 
            //默认的类型
            musiCategory(_categoryName){               
               this.axios({
                    method: 'get',
                    url:'https://localhost:44333/Music/GetMusic',
                    params:{categoryName:this.mess}
                }).then(res=>{
                   console.log(res)
                   this.musics=res.data
                }).catch(err=>{
                   console.log(err)
                })
            },         
            
            //通过父组件传值接收
            GetMusicDetail(mes){
               //通过访问接口获取用户的数据
              console.log(this.mess)
              this.musiCategory(this.mess)             
            },
            //接受兄弟组件的传值
            GetBrotherData() {
               vmson.$on('musicFunction', data => {
                    console.log(data);
                });
            },
            //播放音乐
            musicPaly(_music){
                console.log(_music)
               this.$emit("PlayMusic",_music)
            },
            //查询音乐列表
            selectMusicPlay(){

            }

        }
    }
</script>
<style>
  .el-badge__content.is-fixed{
        right: 35px;
    }
    .el-badge{
        width: 30%;
        margin-left: 15px;
        margin-right: 15px;
        height: 50px;
    }
    .el-row {
        margin-bottom: 20px;
       width: 100%;
        display: inline-block;
        /* &:last-child {
        margin-bottom: 0;
        } */
    }
    .el-col {
        border-radius: 4px;
    }    
    .el-col-12 {
        width: 90%;
    }
    .playbtn{
        width: 40px;
        float: right;
        line-height: 36px;
    }
    ._playBtn{
        background:#d3dce6;
        border: none;
        font-size: 23px;
        margin-top: 8px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .el-icon-video-play{
        color: #333;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        line-height: 36px;
    }
  
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>