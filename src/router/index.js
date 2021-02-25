import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/config'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'

const withAuth = (_to, _from, next) => {
  // redirect to welcome page if user not logged in
  !auth.currentUser ? next({ name: 'Welcome' }) : next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: withAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
