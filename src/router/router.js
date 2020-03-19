import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const BookInfo = () => import('views/books/BookInfo')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/bookinfo',
    component: BookInfo
  }
]

const router = new VueRouter({
  routes,
  modal: 'history'
})

export default router
