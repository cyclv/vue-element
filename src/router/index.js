import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Table1 from '@/components/HelloWorld'
import userlist from '@/views/user/userlist'
import addtl from '@/views/user/adduser'
import wdgl from '@/views/wdgl/wdgl'
import dlslist from '@/views/dls/dlslist'
import adminlist from '@/views/admin/adminlist'
import userif from '@/views/user/usgm'
import login from '@/views/login'
import authority from '@/views/admin/authority'
import authlist from '@/views/admin/authlist'
import map from '@/views/echarts/map'
import ceshi from '@/views/echarts/cdshi'

import echarts from '@/views/echarts/xslist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home,
      children:[
        {'path':'/table','name':'table1',component:Table1},
        {'path':'/userlist','name':'userlist',component:userlist},
        {'path':'/addtl','name':'添加填料',component:addtl},
        {'path':'/wdgl','name':'网店管理',component:wdgl},
        {'path':'/dls','name':'代理商',component:dlslist},
        {'path':'/userif','name':'用户信息表格',component:userif},
        {'path':'/adminlist','name':'管理员列表',component:adminlist},
        {'path':'/authority','name':'角色列表',component:authority},
        {'path':'/authlist','name':'权限列表',component:authlist},
        {'path':'/echarts','name':'图表展示',component:echarts},
        {'path':'/map','name':'图表展示',component:map}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    }
  ]
})
