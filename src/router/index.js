import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import WorkPage from '../views/WorkPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    props: true
  },
  {
    path: '/WorkPage',
    name: 'WorkPage',
    component: WorkPage,
    props: true
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
