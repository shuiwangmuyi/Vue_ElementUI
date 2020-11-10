<template>
    <div id="test1" style="height:500px">
    </div>
</template>
<style>
    .wddd{
        width: 1200px;


    }
</style>
<script>
import echarts from 'echarts'
export default {
    data(){
        return{
             orgOptions :{
                  title:{
                    text: '网址访问图',//标题名称
                    x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                    y: 'top',//垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                    //textAlign: null,//水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'cente
                    // link:'http://localhost:8888/home',//主标题文本超链接,默认值true
                    target: 'self',//null 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                    //subtext: '副标题',//副标题文本，'\n'指定换行
                    //sublink: '',//副标题文本超链接
                    //subtarget: null,//指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                    //backgroundColor: '#ccc',//标题背景颜色，默认'rgba(0,0,0,0)'透明
                    //padding: 5,//标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
                    //itemGap: 10,//主副标题纵向间隔，单位px，默认为10
                    textStyle:{//主样式
                        fontFamily: '宋体',
                        fontSize: 18,
                    },
                    // 副标题样式
                    subtextStyle:{},
                    zlevel: 0,//一级层叠控制。默认0,每一个不同的zlevel将产生一个独立的canvas，相同zlevel的组件或图标将在同一个canvas上渲染。zlevel越高越靠顶层，canvas对象增多会消耗更多的内存和性能，并不建议设置过多的zlevel，大部分情况可以通过二级层叠控制z实现层叠控制。
                       z: 6,//二级层叠控制，默认6,同一个canvas（相同zlevel）上z越高约靠顶层。
                },
                 //图例
                legend: {
                    orient:'vertical',//horizontal (横)
                    x:'right',
                    y:'center',
                    itemGap:10, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                    itemHeight:14,//图例标记的图形高度
                },
                dataset:{
                    source: [
                        ['X','6:00','8:00','10:00', '12:00','14:00','16:00','18:00','20:00','22:00','24:00','2:00','4:00'],
                        ['下载数量',0,3, 2, 8, 4,4, 2, 3,5,4,12,0],
                        ['评论数量',9, 4,1, 8, 2,3, 0, 8,1,0,6,1],
                        ['注册数量',0, 1,0, 2, 6,1, 0, 0,2,3,5,2],
                        ['访问数量',6, 2,5, 11, 3,7, 6, 10,4,7,9,2]
                    ]
                },
                //提示框
                tooltip: {
                    trigger: 'axis'
                },
                //边距
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    //top:'8%',
                    containLabel: true
                },
                toolbox:{//工具栏
                    //show:true,
                    //  orient:'horizontal',//vertical (横)
                    //itemSize:工具栏 icon 的大小
                    showTitle:true,//是否在鼠标 hover 的时候显示每个工具 icon 的标题。
                    feature:{//定义工具按钮。
                        saveAsImage:{//保存为图片。
                            show:true,
                            type:'jpeg',//'png'
                            //name:'',//保存的文件名称，默认使用 title.text 作为名称。
                        } ,
                        restore:{//配置项还原。
                            show:true,
                        },
                        dataView:{//数据视图工具
                            show:true,
                        },
                        dataZoom:{//缩放和还原的标题文本。
                            show:true,
                        },
                        magicType:{//动态类型切换
                            show:true,
                            type: ['line', 'bar']//包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）。
                        },
                        brush:{
                            show:true,
                        }
                    },
                },
                xAxis: {type: 'category'},
                yAxis: {
                    gridIndex: 0,
                    splitNumber:6,//一共用多少个Y值
                    max:30,
                },
                series: [
                    { type: 'line',smooth: true, seriesLayoutBy: 'row'},
                    { type: 'line',smooth: true, seriesLayoutBy: 'row'},
                    { type: 'line',smooth: true, seriesLayoutBy: 'row'},
                    { type: 'line',smooth: true, seriesLayoutBy: 'row'}
                ]
            }
        }
    },
    mounted(){  
        this.initChart()
        this.timer=setInterval(() => {
            this.initChart()         
        },1000);
        
    },
    methods:{      
        initChart(){                 
            this.mapCharts = echarts.init(document.createElement('canvas'), null, {
                width: 3086,
                height: 3048
            });
          this.mapCharts = echarts.init(document.getElementById('test1'))
            this.mapCharts.setOption(this.orgOptions); 
            for(var i=1;i<this.orgOptions.dataset.source.length;i++){
                for(var ii=1;ii<this.orgOptions.dataset.source[i].length;ii++){
                     if(parseInt(this.orgOptions.dataset.source[i][ii])==0)
                    {
                        this.orgOptions.dataset.source[i][ii]=parseInt(this.orgOptions.dataset.source[i][ii])+parseInt(Math.random()*2)
                       // console.log(this.orgOptions.dataset.source)
                    }
                   else{
                       //console.log(this.orgOptions.dataset.source)
                            this.orgOptions.dataset.source[i][ii]=parseInt(this.orgOptions.dataset.source[i][ii])+parseInt((Math.random()*2-1)*2)
                       if(parseInt(this.orgOptions.dataset.source[i][ii])<=0)
                            this.orgOptions.dataset.source[i][ii]=parseInt(Math.random()*2)
                        //console.log(this.orgOptions.dataset.source)
                    }
                }
            }               
        } ,
    }
}
</script>
