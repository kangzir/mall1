import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const Hoem = () =>import('../views/hoem/Hoem')
const Category = () =>import('../views/category/Category')
const Shopcart = () =>import('../views/shopcart/Shopcart')
const Profile = () =>import('../views//profile/Profile')


const routes = [
    {
      path:'',
      redirect:'/hoem'
    },
    {
      path:'/hoem',
      component:Hoem
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/profile',
      component:Profile
    },
]
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router