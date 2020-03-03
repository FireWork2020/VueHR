<template>
    <div>
        <div style="margin-top: 10px">
           <div class="line-echarts">
               <div class="line-echarts-ii" id="lineChart" ></div>
           </div>
        </div>

    </div>
</template>

<script>
    let echarts = require('echarts');
    export default {
        name: "Statistic",
        data() {
            return {
                dialogVisible: false,
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine(){
                let lineChart = echarts.init(document.getElementById('lineChart'));
                lineChart.setOption({
                    title:{text:'学习时间统计'},
                    tooltip:{},
                    xAxis:{
                        data:['第1天','第2天','第3天','第4天','第15天','第6天','第7天','第8天']
                    },
                    yAxis:{},
                    series:[{
                        name:'时长',
                        type:'line',
                        data:[3,2,5,3,6,5]
                    }]
                })
            }
        }
    }
</script>

<style scoped>
.line-echarts-ii{
    width:500px;
    height:500px
}
</style>