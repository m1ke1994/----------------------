import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectDetailView from '../views/project-detail.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import DataConsentView from '../views/DataConsentView.vue'

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
    path: '/projects',
    name: 'projects',
    component: ProjectDetailView,
  },
  {
    path: '/project-detail',
    redirect: '/projects',
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicyView,
  },
  {
    path: '/data-consent',
    name: 'data-consent',
    component: DataConsentView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
