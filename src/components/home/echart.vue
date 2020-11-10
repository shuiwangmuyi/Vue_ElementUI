<template>
    <div class="earthmap" id="earth">
    </div> 
   
</template>

<script>
    import echarts from 'echarts'
    import 'echarts/map/js/world.js'
    import 'echarts-gl'
   
    export default {
        data(){
            return{                    
                  //立体球形纹路
                option:{
                     globe:{
                         show :true,
                         globeRadius:83,//地球的半径。单位相对于三维空间                           
                         //environment: require("../../assets/logo.png"), //环境贴图。支持纯色、渐变色、全景贴图的 url
                         baseTexture:'',
                         //heightTexture:require("../../assets/img/map.jpg"),//地球的高度纹理。高度纹理可以用于凹凸贴图表现地球表面的明暗细节
                        // displacementScale:2,//地球顶点位移的大小。默认为 0， 也就是没位移
                         //displacementQuality :'medium'//球顶点位移的质量。支持设置成 'low', 'medium', 'high', 'ultra'
                        shading:'realistic',//'color' 只显示颜色，不受光照等其它因素的影响。 'lambert' 通过经典的 lambert 着色表现光照带来的明暗。
                        // realisticMaterial://真实感材质相关的配置项，在 shading 为'realistic'时有效。
                        realisticMaterial:{
                            roughness : 0.5,//属性用于表示材质的粗糙度，0为完全光滑，1完全粗糙，中间的值则是介于这两者之间。
                            metalness:0.2,//示材质是金属还是非金属，0为非金属，1为金属，中间的值则是介于这两者之间。通常设成0和1就能满足大部分场景了。
                            roughnessAdjust : 1,//金属度调整，在使用金属度贴图的时候有用。可以对贴图整体的金属度进行调整。默认为 0.5，0的时候为非金属，1的时候为金属。
                        },                     
                       
                       
                        light:{//在 shading 为 'color' 的时候无效。
                            main: {
                                color: '#fff',//主光源颜色
                                intensity: 0,//主光源 强度
                                shadow: true,//是否投射阴影  默认NO
                                shadowQuality: 'high',//阴影的质量。可选'low', 'medium', 'high', 'ultra'
                                alpha: 55,//主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向
                                beta: 10
                            },
                            ambient: {
                                color: '#fff',//环境光的颜色
                                intensity: 1//环境光的强度。
                            }
                        },
                        postEffect:{
                            enable:false,//  是否开启后处理特效。默认关闭
                           // bloomObject:20,//高光特效。高光特效用来表现很“亮”的颜色，因为传统的 RGB 只能表现0 - 255范围的颜色，所以对于超出这个范围特别“亮”的颜色，会通过这种高光溢出的特效去表现。
                            SSAO:{
                                enable:true,//是否开启环境光遮蔽。默认不开启
                                //quality:'high',//环境光遮蔽的质量。支持'low', 'medium', 'high', 'ultra'。
                                radius:10,//环境光遮蔽的采样半径。半径越大效果越自然，但是需要设置较高的'quality'
                               // intensity:12//环境光遮蔽的强度。值越大颜色越深
                            }
                        },
                        viewControl: {
                            autoRotate: true,//是否开启视角绕物体的自动旋转查看。
                           // autoRotateDirection :'cw',//物体自转的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
                           // autoRotateSpeed :10,//物体自转的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈
                           // autoRotateAfterStill:3,//在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。
                           // damping :0.8,//鼠标进行旋转，缩放等操作时的迟滞因子，在大于 0 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。
                            //rotateSensitivity :1,//旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1。 设置为0后无法旋转。
                            //zoomSensitivity:1,//缩放操作的灵敏度，值越大越灵敏。默认为1。 设置为0后无法缩放。
                            //panSensitivity:1,平移操作的灵敏度，值越大越灵敏。默认为1。 设置为0后无法
                            //panMouseButton:'left',//平移操作使用的鼠标按键， 'left' 鼠标左键（默认）鼠标中键  'right' 鼠标右键
                             //rotateMouseButton 'left',//旋转操作使用的鼠标按键 'left' 鼠标左键（默认）鼠标中键  'right' 鼠标右键
                            animationDurationUpdate: 2000,//过渡动画的时长。
                            targetCoord: ''//定位目标的经纬度坐标
                        }
                     },
                    series: [
                    {
                        name: 'lines3D',
                        type: 'lines3D',
                        coordinateSystem: 'globe',
                        effect:{
                                show: true,//是否显示
                                period: 2,//速度
                                trailWidth: 3,//线条的宽度
                                trailLength: 0.5,//轨迹长度
                                trailOpacity: 1,
                                trailColor: 'red' //线条颜色
                        }, 
                        blendMode: 'lighter',
                        //线条样式
                        lineStyle: {
                            width: 1,
                            color: '#0087f4',
                            opacity: 0
                        },
                        data: [],
                        silent: false,
                    }],
                },  
                //平面地球 主要是设置地球的样式
                mapOption: {
                    backgroundColor: 'rgba(20,104,121,0.71)',//当和立体球形贴图是海洋的颜色
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 100000
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'world',
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            environment: 'rgba(0,0,0,0)',
                            boundingCoords: [
                                [-180, 90],
                                [180, -90]
                            ],
                            itemStyle: {
                                normal: {
                                    borderWidth: 2,
                                    borderColor: 'rgb(0,232,232)',//地球纹路的颜色
                                    areaColor: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        //相邻每个板块 从上到下的颜色变化
                                        colorStops: [{
                                            offset: 0.2, color: 'rgb(0,48,62)' // 0% 处的颜色
                                        }, {
                                            offset: 0.8, color: 'rgba(0,179,188,0.8)' // 100% 处的颜色
                                        }],
                                        global: false // 缺省为 false
                                    },
                                }
                            }
                        }
                    ]
                }
            }
        },
        mounted(){
            this.initMap()          
        },
        methods:{             
            initMap(){
                 this.mapChart = echarts.init(document.createElement('canvas'), null, {
                     width: 3086,
                     height: 3048
                 });
                 //获取容器并对其初始化
                 this.myChart = echarts.init(document.getElementById('earth'))
                 //将平面地球和立体球形的纹路重叠
                 this.mapChart.setOption(this.mapOption)
                 this.option.globe.baseTexture = this.mapChart
                 //随机划多条线
                 for (let i = 0; i < 150; i++) {
                     this.option.series[0].data = this.option.series[0].data.concat(this.rodamData())
            
                 }                              
                 this.myChart.setOption(this.option);                
                //this.myChart.setOption(this.mapOption);// 平面展开图
             },
            //调用划线方法
            rodamData() {
                //let name = '随机点' + Math.random().toFixed(5) * 100000
                // let longitude = Math.random() * 62 + 73
                let longitude = 105.18
                let longitude2 = Math.random() * 360 - 180
                // let latitude = Math.random() * 50 + 3.52
                let latitude = 37.51
                let latitude2 = Math.random() * 180 - 90
                return {
                    coords: [
                        [longitude2, latitude2],
                        [longitude, latitude]
                    ],
                    value: (Math.random() * 3000).toFixed(2)
                }
            }
        }
    }
</script>
<style>
    .earthmap{
        width: 30%;
        height: 400px;
        display: inline-block;
        margin-top: 10px;
        margin-left: 50px;
         /* background: rgba(16, 167, 202, 0.39);  */
    }
</style>