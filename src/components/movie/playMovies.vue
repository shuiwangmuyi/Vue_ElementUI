<template>
    <div class="video-player_head">
        <vue-video-player 
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)">
        </vue-video-player>
    </div>
</template>
<script>
    import videoPlayer from 'vue-video-player'
    import 'videojs-contrib-hls'
    import 'vue-video-player/src/custom-theme.css'
    import 'video.js/dist/video-js.css'
    export default {
        data(){
            return{
                playerOptions:{                   
                    playbackRates:[0.5,1,1.5,2.0], //播放速度                   
                    autoplay:false,  //如果true,浏览器准备好时开始回放。                   
                    muted:false,// 默认情况下将会消除任何音频                    
                    loop:false,// 导致视频一结束就重新开始。
                    preload:'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持） 
                    language:'zh-CN',                   
                    aspectRatio:'16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）                   
                    fluid:true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources:[{
                        //类型
                        type:"video/mp4",
                        //url地址
                        src:'https://www.117ww.com/dp/?url=https://yiyi.55zuiday.com/20181210/Ap2gj4Wf/index.m3u8'
                    }],  
                    hls:true, 
                    poster:'', //你的封面地址                   
                    notSupportedMessage:'此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar:{
                        timeDivider:true,
                        durationDisplay:true,
                        remainingTimeDisplay:false,
                        //全屏按钮
                        fullscreenToggle:true
                    }
                }
            }
        },
        computed:{
            player(){
                return this.$refs.videoPlayer.player
            }
        }
    }
</script>
<style>
    .video-player_head{
        display: inline-block;
        width: 600px;
        height: 338px;
        text-align: center;
        line-height: 100px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background-attachment: #fff;
        position:relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 2);
        margin-right: 4px;
    }
    .video-player_head:hover{
        display: block;
    }
</style>