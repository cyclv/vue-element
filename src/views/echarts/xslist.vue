<template>  
    <div class="selltj flexrow flexct">
        <!-- 地区统计 -->
        <div class="left">
            <div id="zhejiangChart" :style="{width: '660px', height: '600px'}"></div>
        </div>
        <div class="right">
            <!-- 购买统计 -->
            <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
            <!-- 用户访问 -->
            <div id="userchart" :style="{width: '500px', height: '300px'}"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import zhejiang from '../../../hz_geo.json'
export default {
    data () {
        return {
           
        }

    },
    mounted(){
        this.drawLine();  // 初始化
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            let userchart = this.$echarts.init(document.getElementById('userchart'))
            let zhejiangChart = this.$echarts.init(document.getElementById('zhejiangChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '彩票种类的月销售排行' },
                tooltip: {},
                xAxis: {
                    data: ["5元","10元","15元"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [88, 20, 36]
                }]
            });
            // 统计
            userchart.setOption({
                title : {
                    text: '中彩票用户访问来源',
                    subtext: '2019年06月',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['微信小程序','支付宝','中彩票h5','中彩票App']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'微信小程序'},
                            {value:310, name:'支付宝'},
                            {value:234, name:'中彩票h5'},
                            {value:135, name:'中彩票App'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
            echarts.registerMap('zj',zhejiang)
            zhejiangChart.hideLoading();
            console.log(zhejiang)
            // var resizeMyChartContainer = function(){
            //     zhejiangChart.style.width=(1000/2)+'px'//页面一半的大小
            // } 
            // resizeMyChartContainer();
            // var zhejiang123 = this.$echarts.init(zhejiangChart); 
            function randomData() {  
                return Math.round(Math.random()*500);  
            }
            // echarts.registerMap('HK', zhejiang);
                    // 绘制图表
            var optionMap = {  
                title: {
                    text: '中彩票网点分布图 （2019）',
                    subtext: '主要是浙江省杭州市分布统计',
                },
                
                legend: {
                        orient: 'vertical',
                        left: 'left',
                        data:['']
                    },      
                visualMap: {
                        min: 800,
                        max: 50000,
                        right: '5%',
                        top: 'bottom',
                        text: ['高','低'],
                        calculable : true,
                        color:['#0b50b9','#c3e2f4']
                    },   
                selectedMode: 'single',
                series:[{
                    name: '杭州人口密度', 
                    type: 'map',
                    mapType: 'zj',
                    zoom: 1.2,
                    itemStyle: {
                        normal:{
                            borderColor: 'rgba(0, 0, 0, 0.2)'
                        },
                        emphasis:{
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    showLegendSymbol: true,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[{name: '北京',value: 20057.34 },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        
                        {name: '澳门',value: randomData() }]   
                }]
            }
     
            zhejiangChart.setOption(optionMap);
            
            
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selltj .left{
    width: 50%;
    min-width: 600px;
}
.selltj .right{
     width: 20%;
    min-width: 160px;
}
</style>
