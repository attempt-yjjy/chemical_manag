import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/user-manag',
    component:()=>import('views/user-manag.vue'),
    children:[
      {
        path:"/user-manag",
        redirectTo:'/user-manag/user-manag'
      },
      {
        path:"/user-manag/common-user-manag",
        component:()=>import("views/user-manag/common-user-manag.vue")
      }
    ]
  },
  {
    path:'/input-manag',
    component:()=>import('views/input-management.vue'),
    children:[
      {
        path:"/input-manag/",
        redirectTo:"/input-manag/chemical-info-list"
      },
      {
        path:'/input-manag/chemical-info-list',
        component:()=>import('views/input/chemical-info-list.vue')
      },
      {
        path:'/input-manag/device-info-list',
        component:()=>import('views/input/device-info-list.vue')
      },
      {
        path:'/input-manag/entering-info',
        component:()=>import('views/input/entering-info.vue')
      },
      {
        path:'/input-manag/return-input',
        component:()=>import('views/input/return-input.vue')
      }
    ]
  },
  {
    path:"/output-manag",
    component:()=>import('views/output-management.vue'),
    children:[
      {
        path:"/output-manag/",
        redirectTo:"/output-manag/chemical-info-list"
      },
      {
        path:'/output-manag/chemical-info-list',
        component:()=>import('views/output/chemical-info-list.vue')
      },
      {
        path:'/output-manag/device-info-list',
        component:()=>import('views/output/device-info-list.vue')
      }
    ]
  },
  {
    path:"/setting",
    component:()=>import('views/setting.vue'),
    children:[
      {
        path:'/setting/inventory-remind',
        component:()=>import("views/settings/inventory-remind.vue")
      },
      {
        path:'/setting/pre-expiration-remind',
        component:()=>import("views/settings/pre-expiration-remind.vue")
      }
    ]
  },
  {
    path:"/data-statistics",
    component:()=>import("views/data-statistics.vue")
  }
]

const router = new VueRouter({
  routes,
  mode:"hash"
})

export default router
