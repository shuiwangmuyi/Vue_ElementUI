<template>
    <div>
        <conn :options="options" resul="1"  @musicFun="getMsgFormconn"></conn>
        <div style="margin-top: 15px;">
            <el-card>
                <div class="clearfix">
                    <el-tabs v-model="activeName" @tab-click="handleClick" class="tab_clearrfix">
                        <el-tab-pane v-for="pane in panes" :key="pane.musiCategoryId"
                            :label="pane.musiCategorLeable" :name="pane.musiCategoryName" :class="pane.musicCategorClass">
                             <musicdetail :message="pane" ref="detail" @PlayMusic="_PlayMusic"></musicdetail>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-card>
        </div>
        <div id="musicfixed">
            <aplayer v-if='isShow' :float="foat" autoplay :music="musicList"
                ref="player" :loop="loopMode "
                @play="onPlayerPlay($event,musicList)"
                @pause="onPlayerPause($event,musicList)"                               
                >
            </aplayer>            
        </div>
        <dialog></dialog>
    </div>
</template>
<style>
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-select-dropdown__list{
      height:auto;
  }
  .tab_clearrfix{
    margin: 0;
    text-align: left;
    /* height: 37px; */
  }
  #musicfixed{
      position: fixed;
        bottom: 0;
        width: 100%;
        height: 77px;
        background-color: #eee;
        z-index: 9999;
    }
  /* .el-card__body{
      height: 640px;
  } */
</style>
<script>
    import conn from "../unit/conn"
    import musicdetail from "../music/musicdetail"
    import aplayer from 'vue-aplayer'
    export default {
        data() {
            return {   
                loopMode :'all',           
                foat:true,//知否浮窗
                activeName:"frist",
                options:[{Id:'1',name:'歌曲名称'},{Id:'2',name:'歌手名称'}],
                panes:''/*[
                    {Id:'1',label:'华语',name:'frist',class:'hua'}
                    ,{Id:'2',label:'流行',name:'second',class:'liu'}
                    ,{Id:'3',label:'民谣',name:'three',class:'min'}
                    ,{Id:'4',label:'电子',name:'four',class:'dian'}
                ]*/,
                musicList:{
                    artist: "清莞"
                    ,pic: "http://p2.music.126.net/1-THPVfCi05CV3EORHq4eA==/42880953495560.jpg?param=100x100"
                    ,src: "http://music.163.com/song/media/outer/url?id=285196.mp3"
                    ,title: "千年缘"
                }, //当前播放的音乐
                MymusicList:[],  //所有的音乐
                nextMusic:null,    //下一首音乐
                seachMusic:null,//搜索音乐
                show:1,
                isShow:true
            }
        },
       
        components:{
            conn,
            musicdetail,
            aplayer
        },
        mounted () {            
        },
        computed:{
            player(){
                return this.$refs.player.player()
            }
        },
        methods:{   
            onPlayerPlay(player,_musicList){    } ,              
            //当 歌曲播放完自动播放下一首歌曲
            onPlayerPause(player,_musicList){ 
                //console.log(this.$refs.player.playStat)  
               // console.log(parseInt(this.$refs.player.playStat.duration))           
                //console.log(parseInt(this.$refs.player.playStat.playedTime))               
                for(var i=0;i<this.MymusicList.length;i++){
                   //是否播放完成
                   if(parseInt(this.$refs.player.playStat.duration)===parseInt(this.$refs.player.playStat.playedTime))
                    {                       
                        this.musicList=this.MymusicList[parseInt(Math.random()*this.MymusicList.length)]
                        this.$nextTick(() => {
                            this.$refs.player.play()
                        })
                    }
                }
            },
            //播放音乐
             _PlayMusic(_music){
                let obj = {
                    title:_music.musicName,
                    artist:_music.musicAuthor,
                    src:_music.musicUrl,
                    pic:_music.musicPic
                }
                this.musicList=obj
                this.$nextTick(() => {
                    this.$refs.player.play()
                })
               //添加所有播放过的记录
                this.MymusicList.push(obj)
            },
            //获取音乐类别列表
            GetMusicData(musicData){
                this.panes=musicData
               // console.log(musicData)
            },
            //搜索
            getMsgFormconn(data){               
                this.seachMusic=data               
            },
              //传值给子组件
            handleClick(tab,e){
                //console.log(this.activeName+"sssssssssssssss")
               this.$refs.detail[tab.index].GetMusicDetail(this.activeName,this.seachMusic)
            }
        }
    }
</script>