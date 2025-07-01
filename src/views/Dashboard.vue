<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Main from '../components/Main.vue'
import Aside from '../components/Aside.vue'

// Fungsi logout
const logout = () => {
  localStorage.removeItem('loggedIn')
  window.location.href = '/' // redirect ke login
}
</script>

<template>
  <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
    <Header />
    <Sidebar />
    <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
      <Main />
      <Aside />
    </div>

  
  </div>
</template>