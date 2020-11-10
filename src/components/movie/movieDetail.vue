<template>
    <div :id="message.movieCategroyClass">
       <!-- 每一个视频 --> 
          <div class="moviePlay" v-for="movie in movies" :key="movie.movieId">
             <img :src="movie.moviePicPath" :alt="movie.movieName"/>             
             <div class="text-overflow">
                <span>{{movie.movieName}}</span>
              </div>                
         </div>    
    </div>
</template>
<script>
import vmson from '../../store/emptyVue' 
    export default {
        data(){
            return{
                mess:this.message.movieCategoryActionName,
                movies:''
            }
        },
        //props:['message']
        props:{
                message: Object,
                required: true
            },
        mounted(){
            vmson.$off('movieFunction')
            this.GetBrotherData()
            this.movieCategory("热播")
        }, 
        methods:{
            //设置默认的选择
            movieCategory(_categoryName){
                console.log(_categoryName)
                this.axios({
                    method: 'get',
                    url:'https://localhost:44333/movie/GetMovieCategoryName',
                    params:{categoryName:_categoryName}
                }).then(res=>{                    
                    this.movies=res.data
                    console.log(this.movies)
                }).catch(err=>{
                    console.log(err)
                })
            },
            //通过父组件传值接收 
            GetMovieDetail(mes,data){ 
                //通过访问接口获取用户的数据
              //  console.log("----------------"+this.mess)
                this.movieCategory(this.mess)
            },
            GetBrotherData()  {          
                vmson.$on('movieFunction', data => {
                   // console.log(data);
                });
            }
        }
    }
</script>
<style scoped>
    .moviePlay{
        display: inline-block;
        margin: 0px 25px 40px 40px;
        /* margin: 0px 10px 40px  10px;           */        
    }
    .moviePlay:hover{
        transform: scale(1.1);
        box-shadow: 2px 4px 6px #fff;
    }
    .moviePlay img{
        width: 260px;
        height: 364px;  
    }
    .text-overflow{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        margin-top: 15px;
    }
</style>