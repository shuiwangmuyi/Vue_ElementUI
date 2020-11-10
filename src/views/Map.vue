<template> 
    <div style="width:100%">
        <el-autocomplete
            v-model="mapLocation.address"
            :fetch-suggestions="querySearch"
            placeholder="请输入详细地址"
            style="width: 100%"
            :trigger-on-focus="false"
            @select="handleSelect"/> 
        <baidu-map class="bm-view" :zoom="zoom" 
            :center="mapCenter"
            @ready="setDistanceToolInstance"
            :scroll-wheel-zoom="true"> 
                <!-- 点 -->
                <bm-marker :position="mapCenter" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                     <bm-label content :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
                </bm-marker>
                <!-- 地图/卫星 -->
                <bm-map-type  :map-types="['BMAP_NORMAL_MAP', 'BMAP_SATELLITE_MAP','BMAP_HYBRID_MAP']" 
                    anchor="BMAP_ANCHOR_TOP_LEFT">                
                </bm-map-type>
                <!-- 缩放 -->
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT">
                </bm-navigation>
                <!-- 缩略图 -->
                <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_LEFT" 
                                :isOpen="true">
                </bm-overview-map> 
                <!-- 定位 -->
                <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" 
                                :showAddressBar="true"  
                                :autoLocation="true">
                </bm-geolocation>
                <div id="el_button" :offset="{width: 35, height: 30}">   
                        <el-button  @click="addZoom(19)">缩放至最大</el-button >
                        <el-button  @click="addZoom(10)">还原</el-button >
                        <el-button  @click="addZoom(3)">缩放至最小</el-button >
                        <el-button  @click="openDistanceTool">开启测距</el-button>
                </div>             
        </baidu-map>  
    </div>
</template>
<style>  
    #el_button{
        margin-right: 100px;
        position:relative;
        z-index: 999;
        float: right;
        margin-top: -790px;
    }
    .BMap_cpyCtrl {
        display: none;
    }  
    .bm-view {        
        width: 100%;
        height: 800px;
        margin-top: 0px;
    }
</style>
<script> 
    import Vue from 'vue'   
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue' 
    import DistanceTool from "bmaplib.distancetool";

     export default ({
         name:'Map',
         data () {
            return {
                mapLocation: {
                    address: '',
                    coordinate: ''
                  },
                mapCenter: { lng: 116.404, lat:39.915 },                
                keyword: '',
                zoom: 10
            }
        },
        created(){            
            this.getAddress();
        },
        unmount () {           
            distanceTool && distanceTool.close()
        },
        methods: {
            //获取List页面传递的经纬度
            getAddress(){              
                this.mapCenter.lng=this.$route.params.longitude
                this.mapCenter.lat=this.$route.params.latitude
                //console.log("aaaaaaaaaa"+this.mapCenter.lng+"    "+this.mapCenter.lat)
            },
            //搜索地点
            querySearch(queryString, cb) {
                var that = this
                var myGeo = new this.BMap.Geocoder()
                myGeo.getPoint(queryString, function(point) {
                    if (point) {
                        that.mapLocation.coordinate = point
                        that.makerCenter(point)
                    } else {
                        that.mapLocation.coordinate = null
                    }
                 }, this.locationCity)
                     var options = {
                        onSearchComplete: function(results) {
                             if (local.getStatus() === 0) {
                                 // 判断状态是否正确
                                 var s = []
                                for (var i = 0; i < results.getCurrentNumPois(); i++) {
                                    var x = results.getPoi(i)
                                    var item = { 
                                        value: x.address + x.title, point: x.point }
                                        s.push(item)
                                        cb(s)
                                }
                            } else {
                                cb()
                            }
                        }
                    }
                var local = new this.BMap.LocalSearch(this.map, options)
                local.search(queryString)
            },
            //查询相关的地点
            handleSelect(item) {
                var { point } = item
                this.mapLocation.coordinate = point
                this.makerCenter(point)
            },
            makerCenter(point) {
                if (this.map) {
                    this.map.clearOverlays()
                    this.map.addOverlay(new this.BMap.Marker(point))
                    this.mapCenter.lng = point.lng
                    this.mapCenter.lat = point.lat
                    this.mapZoom = 15
                }
            },
            getMap(){
               
            },
            setDistanceToolInstance ({map}) {           
                this.BMap = BMap
                this.map = map
                //点击到某个点
                var _this=this                
                map.addEventListener('click', e=>{
                    _this.mapCenter.lng=e.point.lng
                    _this.mapCenter.lat=e.point.lat
                    //console.log(e.point.lng, e.point.lat)
                })
                if (this.mapLocation.coordinate && this.mapLocation.coordinate.lng) {
                    this.mapCenter.lng = this.mapLocation.coordinate.lng
                    this.mapCenter.lat = this.mapLocation.coordinate.lat
                    this.mapZoom = 15
                    map.addOverlay(new this.BMap.Marker(this.mapLocation.coordinate))
                } else {
                    this.mapCenter.lng=this.$route.params.longitude
                    this.mapCenter.lat=this.$route.params.latitude
                    this.mapZoom = 10
                };    
                this.distanceTool = new DistanceTool(map, {lineStroke : 2})
            },
            //测距
            openDistanceTool (e) {            
                const {distanceTool} = this
                distanceTool && distanceTool.open()
            },
            //放大缩小地图
            addZoom (level) {
                this.zoom = level
            },
        }
    })
</script>