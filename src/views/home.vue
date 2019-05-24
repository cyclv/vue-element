<template>
<!-- element布局方式 -->
<el-container>
    <el-header>Header</el-header>
    <el-container>
        <el-aside width="200px" style="overflow:hidden;">
            <el-menu v-bind:default-active="ipdth" router class="el-menu-vertical-demo" background-color="#D3DCE6" text-color="black" active-text-color="#1E90FF">
                <div v-for="(item,index) in adminlist" :key="index">
                    <el-submenu v-bind:index="item.name" v-if="item.type == 2">
                        <template slot="title"><i v-bind:class="item.icon"></i><span>{{item.name}}</span></template>
                        <el-menu-item-group>
                            <div v-for="(items,idx) in item.path" :key="idx"><el-menu-item v-bind:index="items.path" @click="home(items.path)">{{items.name}}</el-menu-item></div>
                        </el-menu-item-group>
                    </el-submenu> 
                    <el-menu-item v-if="item.type == 1" v-bind:index="item.path" @click="home(item.path)"><i v-bind:class="item.icon"></i><span slot="title">{{item.name}}</span></el-menu-item>
                </div>
            </el-menu>
        </el-aside>
        <!-- 主要内容 -->
        <el-main><router-view></router-view></el-main>
    </el-container>
</el-container>
</template>

<script>
import { getUserListPage,getUserList } from '../api/index';
export default {
    name: 'Home',
    data () {
        return {
            isCollapse: true,
            ipdth:'/wdgl',
            adminlist:[
                {id:2,name:'客户管理',type:1,icon:'el-icon-s-help',path:'./userlist'},
                {id:1,name:'添料管理',type:2,icon:'el-icon-eleme',path:[{id:1,name:'添料元',path:'/addtly'},{id:1,name:'添料审核',path:'/addtl'}]},
                {id:3,name:'代 理 商',type:1,icon:'el-icon-s-help',path:'./dls'},
                {id:4,name:'网点管理',type:1,icon:'el-icon-goods',path:'./wdgl'},
                {id:5,name:'财务管理',type:2,icon:'el-icon-upload',path:[{id:1,name:'流水表格',path:'/cwls'},{id:2,name:'分润设置',path:'/cwfr'},{id:3,name:'积分管理',path:'/cwjf'}]}
            ]
        }
    },
    created: function() {
        const ipdth =  localStorage.getItem('ipath') ;
        this.ipdth =ipdth;

       getUserList(ipdth).then((res) => {
            console.log('cesh',res)
        });

        var url = "https://cnodejs.org/api/v1/topics";
        // 发送请求:将数据返回到一个回到函数中
        var that = this;
            // 并且响应成功以后会执行then方法中的回调函数
        this.$http.get(url).then(function(result) {
            // result是所有的返回回来的数据
            // 包括了响应报文行
            // 响应报文头
            // 响应报文体
            console.log(result);
            
        });
    },
    methods: {
        home(path){
            //console.log('调整路径',path)
            localStorage.setItem('ipath',path);
        }
    }
}
</script>

<style scoped>
/* 外边框样式  */
.el-container{
    height: 100%;
}
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}

body > .el-container {
    margin-bottom: 40px;
}
/* 左侧导航条样式 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
