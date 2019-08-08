import Vue from 'vue'
import Router from 'vue-router'

const home =()=> import('../views/home/Home.vue')
const product = ()=> import('../views/product/Product.vue')
const cart = ()=> import('../views/cart/Cart.vue')
const me = ()=> import('../views/me/Me.vue')
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'',
      redirect:home
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/product',
      component:product
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/me',
      component:me
    }
  ]
})
