import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      iffooter:true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),

    meta:{
      iffooter:true
    }
  },
  {
    path: '/sort',
    name: 'sort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sort/Sort.vue'),

    meta:{
      iffooter:true
    }
  },
  {
    path: '/find',
    name: 'find',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/find/Find.vue'),

    meta:{
      iffooter:true
    }
  }, 
  {
    path: '/Creative/:id',
    name: 'Creative',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Creative/Creative.vue'),

    meta:{
      iffooter:true
    }
  },
  {
    path: '/my',
    name: 'my',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/My/My.vue'),

    meta:{
      iffooter:true
    }
  },
  {
    path: '/buycar',
    name: 'buycar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BuyCar/BuyCar.vue'),

    meta:{
      iffooter:false
    }
  },
  {
    path: '/saveaddress',
    name: 'saveaddress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/saveaddress/index.vue'),

    meta:{
      iffooter:false
    }
  },
  {
    path: '/order',
    name: 'order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Order/order.vue'),

    meta:{
      iffooter:false
    }
  },
  {
    path: '/sale',
    name: 'sale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sale/sale.vue'),

    meta:{
      iffooter:false
    }
  },
  {
    path: '/Creative/detil/:id',
    name: 'Creativedetil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Creative/detil/index'),

    meta:{
      iffooter:false
    }
  },
  {
    path: '/collect',
    name: 'collect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/collect/collect.vue'),

    meta:{
      iffooter:false
    }
  },
  {
    path: '/article',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/article/article.vue'),

    meta:{
      iffooter:false
    }
    
  },
  {
    path: '/brand',
    name: 'brand',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Brand/Brand.vue'),

    meta:{
      iffooter:false
    }
    
  },
  {
    path: '/brand',
    name: 'brand',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Brand/Brand.vue'),

    meta:{
      iffooter:false
    }
    
  },
  {
    path: '/card',
    name: 'card',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Card/Card.vue'),

    meta:{
      iffooter:false
    }
    
  },
  {
    path: '/address',
    name: 'address',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/address/address.vue'),

    meta:{
      iffooter:false
    }
    
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue'),

    meta:{
      iffooter:false
    }
    
  },
  {
    path: '/registered',
    name: 'registered',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/registered/registered.vue'),

    meta:{
      iffooter:false
    }
    
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/search/search.vue'),

    meta:{
      iffooter:false
    }
    
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
