import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectDetailView from '../views/project-detail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/project-detail',
    name: 'project-detail',
    component: ProjectDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
