import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import newToy from '../views/newToy.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ["/home"],
    meta: {
      login: true,
    },
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    alias: ["/list"]
  },
  {
    path: '/newToy',
    name: 'NewToy',
    component: newToy,
    alias: ["/newToy"]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
