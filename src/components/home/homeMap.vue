<template>
    <div class="homeMap">
        <div class="block">
        <span class="demonstration">今天日期：</span>
        <el-date-picker
            v-model="value2"
            align="left"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
            :picker-options="pickerOptions" >
        </el-date-picker>
        <span style="float:right">当前位置为：
            <span class="addres">{{city}}</span>
        </span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                location:"",
                city: "",
                zoom: 10,
                pickerOptions: {
                    disabledDate(time) {
                    return time.getTime() > Date.now();
                    },
                    shortcuts: [
                    {
                        text: "今天",
                        onClick(picker) {
                        picker.$emit("pick", new Date());
                        }
                    },
                    {
                        text: "昨天",
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit("pick", date);
                        }
                    },
                    {
                        text: "一周前",
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit("pick", date);
                        }
                    }
                    ]
                },
                value2: ""
                };
        },
        // unmount() {
        //     distanceTool && distanceTool.close();
        // },
        created() {
            this.getTime();
        },
        mounted() {
            //this.getlocationSuccess();
            this.getCity();
        },
         methods: {
             getCity(){        
                   var _this = this       
               var geolocation = new BMap.Geolocation()
                geolocation.getCurrentPosition((r) => {
                    console.log(r.point.lat)
                    console.log(r.point.lng)
                    var new_point=new BMap.Point(r.point.lng, r.point.lat)
                    var gc=new BMap.Geocoder()
                    gc.getLocation(new_point,rs=>{             
                         _this.city=rs.address
                         console.log("=========="+ rs.address)
                    })                 
                }, {enableHighAccuracy: true})

            
             },          
            getlocationSuccess() {
                var _this = this;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            /*
                            coords其他返回信息：
                            coords.accuracy：返回经纬度的精度（米）
                            coords.speed :速度
                            coords.altitude ：当前的高度，海拔（米）
                            coords.altitudeAccuracy：高度的精度（米）
                            coords.heading：朝向
                            */
                            _this.GetAddress(
                                position.coords.longitude,
                                position.coords.latitude
                            );
                        },
                        function(error) {
                            switch (error.code) {
                            case error.PERMISSION_DENIED: // code == 1 用户拒绝
                                _this.$message({
                                message: "您拒绝共享位置信息",
                                center: true
                                });
                                break;
                            case error.POSITION_UNAVAILABLE:
                                _this.$message({
                                message: "获取不到位置信息",
                                center: true
                                });
                                break;
                            case error.TIMEOUT:
                                _this.$message({
                                message: "获取位置信息超时",
                                center: true
                                });
                                break;
                            case error.UNKNOWN_ERROR:
                                _this.$message({
                                message: "获取地址失败",
                                center: true
                                });
                                break;
                            }
                        },
                        {
                            enableHighAccuracy: true, //是否获取高精度经纬度，默认值为false
                            timeout: 5000, //获取位置信息的超时时间。单位为毫秒（ms），默认值为不超时
                            maximumAge: 0, //获取位置信息的缓存时间。单位为毫秒（ms），默认值为0（立即更新获取）。如果设备缓存的位置信息超过指定的缓存时间，将重新更新位置信息后再返回。
                            provider:
                            "baidu" /*(String 类型 )优先使用的定位模块。可取以下供应者： "system"：表示系统定位模块，支持wgs84坐标系； "baidu"：表示百度定位模块，支持gcj02/bd09/bd09ll坐标系；
                                                "amap"：表示高德定位模板，支持gcj02坐标系。 默认值按以下优先顺序获取（amap>baidu>system），若指定的provider不存在或无效则返回错误回调。
                                                注意：百度/高德定位模块需要配置百度/高德地图相关参数才能正常使用。平台支持Android - 2.2+ (支持)，iOS - 4.5+ (支持): provider为“baidu”时，
                                                仅支持bd09ll坐标系，暂不支持高德定位模块。*/,
                            coordsType:
                            "bd09" /*(String 类型 )指定获取的定位数据坐标系类型。可取以下坐标系类型： “wgs84”：表示WGS-84坐标系；
                                                “gcj02”：表示国测局经纬度坐标系； “bd09”：表示百度墨卡托坐标系； “bd09ll”：表示百度经纬度坐标系；
                                                provider为“system”时，默认使用“wgs84”类型；provider为“baidu”是，默认使用“bd09ll”类型。
                                                如果设置的坐标系类型provider不支持，则返回错误。*/,

                            geocode: true /*(Boolean 类型 )是否解析地址信息。解析的地址信息保存到Position对象的address、addresses属性中，
                                        //  true表示解析地址信息，false表示不解析地址信息，返回的Position对象的address、addresses属性值为undefined，默认值为true。
                                            //如果解析地址信息失败则返回的Position对象的address、addresses属性值为null。*/
                        }
                    );
                }
            },
            GetAddress(longitude, latitude) {
             
                var _this = this
                var new_point=new BMap.Point(longitude, latitude)
                var gc=new BMap.Geocoder()
                gc.getLocation(new_point,rs=>{
                    //console.log(rs)
                    _this.city=rs.address
                    console.log("=========="+ _this.city)
                })
            },
            getTime() {
                let date = new Date();
                let y = date.getFullYear();
                let m = date.getMonth() + 1;
                let d = date.getDate();
                let time = y + "-" + m + "-" + d;
                this.value2 = time;
            }
        }
    }
</script>
<style>
    .bm-view {
    margin-top: 8px;
    width: 100%;
    height: 500px;
    }
    .is-selected {
    color: #1989fa;
    }
</style>