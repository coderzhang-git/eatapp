import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',//实际上是自己起的路由名字
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/',
      redirect:'/msite'
  
    }
  ]
})
