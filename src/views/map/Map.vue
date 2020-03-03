<template>
    <div>
        <div style="display: flex;justify-content: space-between">
            <el-button icon="el-icon-plus" type="primary" @click="showAddMapView">添加地图</el-button>
            <el-button icon="el-icon-refresh" type="success" @click="initMap"></el-button>
        </div>
        <div style="margin-top: 10px">
            <el-table :data="maps" border stripe>
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column width="120" prop="mapNo" label="地图编号"></el-table-column>
                <el-table-column width="120" prop="mapName" label="地图名称"></el-table-column>
                <el-table-column width="70" prop="description" label="地图描述"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                            <el-button @click="preview(scope.row)">预览</el-button>
                            <el-button @click="showEditMapView(scope.row)">编辑</el-button>
                            <el-button type="danger" @click="deleteMap(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
                :title="previewMapText"
                :visible.sync="dialogPreviewVisible"
                width="50%">
            <l-map style="width:100%;height:600px;"
                :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :lat-lng="marker">
                    <l-popup :content="text"></l-popup>
                </l-marker>
            </l-map>
        </el-dialog>
    </div>
</template>


<script >
    import {LMap,LTileLayer,LMarker,LPopup} from 'vue2-leaflet';
    export default {
        name: "Map",
        components:{
            LMap,
            LTileLayer,
            LMarker,
            LPopup
        },
        data() {
            return {
                dialogPreviewVisible: false,
                dialogTitle: '添加地图',
                previewMapText:"地图预览",
                maps: [
                    {
                        mapNo:0,
                        mapName:'示例',
                        description:'示例描述',
                    },{
                        mapNo: 1,
                        mapName:'示例2',
                        description: '示例描述'
                    }
                ],
                activeItemIndex: 0,
                mapObject:null,
                xys:[
                    {
                        x:36.918410,
                        y:118.849953
                    },{
                        x:110.123231,
                        y:87.123112
                    }
                ],
                currentX:36.91841,
                currentY:118.849953,
                zoom:13,
                center:L.latLng(this.currentX,this.currentY),
                url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
                text: 'this is a marker'
            }
        },
        mounted() {

        },
        methods: {
            preview(){
                this.dialogPreviewVisible = true;
                let no = data.mapNo;
                console.log('地图编号'+no);
                let x = this.xys[no].x;
                let y = this.xys[no].y;
                console.log(x);
                console.log(y);
                this.initMap(x,y);
            }
        }
    }
</script>

<style scoped>
#myMap{
    width:100%;
    height: 100vh;
}
</style>