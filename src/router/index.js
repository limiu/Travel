import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import City from '../views/components/city/City'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/city',
  name: 'City',
  component: City
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
