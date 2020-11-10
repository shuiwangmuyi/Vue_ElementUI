import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import List from '../views/list.vue'
import Map from '../views/Map.vue'
import comment from '../views/comment.vue'
import seachMovie from '../components/movie/seachMovie.vue'
import Study from '../views/Study.vue'
import Learningbook from '../views/Learningbook.vue'
import musicorvedio from '../views/musicorvedio.vue'
import playMovies from '../components/movie/playMovies.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Login' },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/list',
        name: 'List',
        component: List
      },     
      {
        path:'/list/map/:longitude/:latitude',
        //path:'/list/map',
        name:'map',
        component:Map,
      },
      {
        path: '/comment',
        name: 'comment',
        component: comment
      },
      {
        path:'/Study',
        name: 'Study',
        component:Study
      },
      {
        path:'/Learningbook',
        name: 'Learningbook',
        component:Learningbook
      },
      {
        path:'/musicorvedio',
        name: 'musicorvedio',
        component:musicorvedio        
      },
      {
         path:'/seachMovie/:seachName/:seachMovieDatas',
        //path:'/seachMovie',
        name: 'seachMovie',
        component:seachMovie   
      },
      {
        path:'/playMovies',       
        name: 'playMovies',
        component:playMovies   
     }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router
