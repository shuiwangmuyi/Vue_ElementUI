<template>
     <el-tabs v-model="activeName" @tab-click="handleClick" id="musicandmovie">
          <el-tab-pane label="音乐" name="first" class="music"><Music ref="musicdata"></Music></el-tab-pane>
          <el-tab-pane label="视频" name="second" class="movie"><Movie ref="moviedata"></Movie></el-tab-pane>        
    </el-tabs>
</template>
<script>
   import Music from '../components/musicorvedio/Music'
   import Movie from '../components/musicorvedio/Movie'
    export default {
        data(){
            return{                
                activeName: 'first',     
                musicData:''           
            }
        },
        components:{
            Music,
            Movie
        },
        mounted(){
           this.GetactiveName()           
        },
        methods:{ 
            //默认是音乐
            GetactiveName(){
                this.selecttMusic("first")
                console.log(this.activeName+"d")
            } ,         
            handleClick(tab, event) {              
               // console.log(this.activeName+"ddddddddddd")
                this.selecttMusic(this.activeName.trim())     
            },
            selecttMusic(_activeName){               
                if(_activeName==="first"){
                   this.axios({
                        method: 'get',
                        url:'https://localhost:44333/Music/GetMusiCategoryNames',                                   
                    }).then(res=>{
                        this.musicData=res.data
                        this.$refs.musicdata.GetMusicData(this.musicData)                       
                    }).catch(err=>{
                        console.log(err)
                    })   
               } else if(_activeName==="second"){
                    this.axios({
                        method: 'get',
                        url:'https://localhost:44333/movie/GetMovieCategoryNames',                                   
                    }).then(res=>{
                        this.musicData=res.data
                        this.$refs.moviedata.GetMovieData(this.musicData)                       
                    }).catch(err=>{
                        console.log(err)
                    })  
               }
            }
        }
    }
</script>
<style>   
     .el-tabs__nav-wrap {       
        /* margin: auto; */
        width: auto;
    } 
</style>