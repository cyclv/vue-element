import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Table1 from '@/components/HelloWorld'
import userlist from '@/views/user/userlist'
import addtl from '@/views/user/adduser'
import wdgl from '@/views/wdgl/wdgl'
import dlslist from '@/views/dls/dlslist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {'path':'/table','name':'table1',component:Table1},
        {'path':'/userlist','name':'userlist',component:userlist},
        {'path':'/addtl','name':'添加填料',component:addtl},
        {'path':'/wdgl','name':'网店管理',component:wdgl},
        {'path':'/dls','name':'代理商',component:dlslist}
      ]
    }
  ]
})
