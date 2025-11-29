import { createRouter, createWebHistory } from 'vue-router'

// استيراد الصفحات
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreateRide from '../views/CreateRide.vue'
import FindRide from '../views/FindRide.vue'
import Profile from '../views/Profile.vue'

// تعريف المسارات
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/create', component: CreateRide },
  { path: '/find', component: FindRide },
  { path: '/profile', component: Profile }
]

// إنشاء الراوتر
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router