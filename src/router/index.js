import { createRouter, createWebHistory } from 'vue-router'
import Sign from '../components/Sign.vue'
import Dashboard from '../views/Dashboard.vue'

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
