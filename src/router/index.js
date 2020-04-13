import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

/* 
** 如何使用 vue-router？

1. npm i vue-router
2. 创建目录 router/index.js
3. 在 index.js 中，import router from 'vue-router'
4. 在 index.js 中，Vue.use(router)
5. 在 index.js 中
import HelloWorld from '../components/HelloWorld'
export default new router({
  routes: [
    {
      path: '/hello',
      component: HelloWorld
    }
  ]
}) 
6. 在 App.vue 中使用 <router-view></router-view> 决定视图的位置。

** 路由如何跳转？


*/

import HelloWorld from '../components/HelloWorld'
import HelloYou from '../components/HelloYou'
import list from '../components/list'
import Axios from '../components/axios'
import Hejianxin from '../components/hejianxin'
import hehe from '../components/hehe'
import jianjian from '../components/jianjian'
import obj from '../components/ob'

export default new router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: list
      } 
    },
    {
      name: 'helloworld',
      path: '/helloworld/:worldmsg',
      components: {main: HelloWorld}
    },
    {
      name: 'helloyou',
      path: '/helloyou/:youmsg',
      components: {main: HelloYou}
    },
    {
      name: 'list',
      path: '/list',
      component: {main: list}
    },
    {
      name: 'axios',
      path: '/axios',
      components: {main: Axios}
    },
    {
      name: 'hejianxin',
      path: '/hejianxin/:xinxin',
      components: {
        main: Hejianxin
      }
    },
    {
      name: 'hehe',
      path: '/hehe/:xxx',
      components: {
        main: hehe
      }
    },
    {
      name: 'jianjian',
      path: '/jianjian/:jian',
      components: {
        main: jianjian
      }
    },
    {
     name: 'obj',
     path: '/obj/:ooo',
     components: {
       main: obj
     }
    }
  ]
})