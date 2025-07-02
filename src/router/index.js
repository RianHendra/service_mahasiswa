import { createRouter, createWebHistory } from 'vue-router'
import Sign from '../components/Sign.vue'
import Dashboard from '../views/Dashboard.vue'
import Profil from '../components/Profile.vue'
import EditProfil from '../components/EditProfile.vue'
import EditOrangTua from '../components/EditOrangTua.vue'

const routes = [
  {
    path: '/',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // ini tandanya halaman ini butuh login
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-profil',
    name: 'EditProfil',
    component: EditProfil,
    meta: { requiresAuth: true }
  },
  
  {
    path: '/edit-profil-ortu',
    name: 'TambahOrtua',
    component: EditOrangTua,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-profil-ortu:1',
    name: 'EditOrangTua',
    component: EditOrangTua,
    meta: { requiresAuth: true }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('loggedIn') === 'true'

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Sign' })
  } else {
    next()
  }
})
router.afterEach((to) => {
  if (to.name === 'Sign') {
    document.title = 'SIMPADU | Login'
  } else if (to.name === 'Dashboard') {
    document.title = 'SIMPADU | Dashboard Mahasiswa'
  } else {
    document.title = 'SIMPADU | Mahasiswa'
  }
})

export default router
