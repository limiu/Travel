import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import City from '../views/components/city/City'
import Detail from '../views/detail/Detail'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
export default router
