<template>
<!-- element布局方式 -->
<el-container>
    <el-header class="flexlb">账户昵称：{{userinfo.name}}
        <!-- <el-button type="info" @click="loginout">退出登录</el-button> -->
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color='#D3DCE6'>
            <el-submenu index="1">
                <template slot="title">管理员信息</template>
                <el-menu-item index="2-1">基本信息</el-menu-item>
                <el-menu-item index="2-2">修改密码</el-menu-item>
                <el-menu-item index="loginout">退出登录</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-header>
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
            // isCollapse: true,
            userinfo:JSON.parse(this.$store.state.userinfo),
            ipdth:'/wdgl',
            adminlist:[-
                {id:0,name:'管理平台',type:1,icon:'el-icon-s-help',path:'./admin'},
                {id:2,name:'客户管理',type:1,icon:'el-icon-s-help',path:'./userlist'},
                {id:1,name:'添料管理',type:2,icon:'el-icon-eleme',path:[{id:1,name:'添料元',path:'/addtly'},{id:1,name:'添料审核',path:'/addtl'}]},
                {id:3,name:'代 理 商',type:1,icon:'el-icon-s-help',path:'./dls'},
                {id:4,name:'网点管理',type:1,icon:'el-icon-goods',path:'./wdgl'},
                {id:1,name:'权限管理',type:2,icon:'el-icon-eleme',path:[{id:1,name:'管理员列表',path:'/adminlist'},{id:1,name:'角色列表',path:'/authority'},{id:1,name:'权限列表',path:'/authlist'}]},
                {id:5,name:'财务管理',type:2,icon:'el-icon-upload',path:[{id:1,name:'流水表格',path:'/cwls'},{id:2,name:'分润设置',path:'/cwfr'},{id:3,name:'积分管理',path:'/cwjf'}]},
                {id:1,name:'echarts图表',type:2,icon:'el-icon-eleme',path:[{id:1,name:'销售统计',path:'/echarts'},{id:1,name:'网点统计',path:'/map'}]},
            ]
        }
    },
    created: function() {
        const ipdth =  localStorage.getItem('ipath') ;
        const ceshiu = this.$store.state.showFooter
        const ceshiu2 = this.$store.state.changableNum
        const ceshiu3 = this.$store.state.userinfo
        console.log('vuex测试',ceshiu,ceshiu2,ceshiu3)
    },
    methods: {
        home(path){
            //console.log('调整路径',path)
            localStorage.setItem('ipath',path);
        },
        loginout:function(){
            console.log(111)
        },
        handleSelect(key, keyPath) {
            if(key == 'loginout'){
                localStorage.clear('userinfo')
                this.$router.push('/login')
                console.log('退出登录')
            }
        }
    }
}
</script>

<style>
/* 外边框样式  */
body,html,#app{
    height: 100%;
    margin: 0px;
}
.el-container{
    height: 100%;
}
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 10%;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 90%;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 90%;
}
/* 左侧导航条样式 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
  }
</style>
