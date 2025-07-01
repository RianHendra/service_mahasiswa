<template>
  <!--begin::Header-->
  <div
    id="kt_app_header"
    class="app-header"
    data-kt-sticky="true"
    data-kt-sticky-activate="{default: true, lg: true}"
    data-kt-sticky-name="app-header-minimize"
    data-kt-sticky-offset="{default: '200px', lg: '0'}"
    data-kt-sticky-animation="false"
  >
    <!--begin::Header container-->
    <div
      class="app-container container-fluid d-flex align-items-stretch justify-content-between"
      id="kt_app_header_container"
    >
      <!--begin::Sidebar mobile toggle-->
      <div
        class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
        title="Show sidebar menu"
      >
        <div
          class="btn btn-icon btn-active-color-primary w-35px h-35px"
          id="kt_app_sidebar_mobile_toggle"
        >
          <i class="ki-duotone ki-abstract-14 fs-2 fs-md-1">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
        </div>
      </div>
      <!--end::Sidebar mobile toggle-->
      <!--begin::Mobile logo-->
     
      <!--end::Mobile logo-->
      <!--begin::Header wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        id="kt_app_header_wrapper"
      >
        <!--begin::Menu wrapper-->
        <div
          class="app-header-menu app-header-mobile-drawer align-items-stretch"
          data-kt-drawer="true"
          data-kt-drawer-name="app-header-menu"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="250px"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_app_header_menu_toggle"
          data-kt-swapper="true"
          data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
          data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
        >
          <div
            class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
            id="kt_app_header_menu"
            data-kt-menu="true"
          >
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              class="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
            >
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">Halo, Selamat Datang {{ namaMhs }}</span>
                <span class="menu-arrow d-lg-none"></span>
              </span>
              <!--end:Menu link-->
            </div>
          </div>
        </div>
        <!--end::Menu wrapper-->
        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">
          <!--begin::User menu-->
          <div
            class="app-navbar-item ms-1 ms-md-4"
            id="kt_header_user_menu_toggle"
          >
            <!--begin::Menu wrapper-->
            <div
              class="cursor-pointer symbol symbol-35px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <img src="/rafly.png" class="rounded-3" alt="user" />
            </div>
            <!--begin::User account menu-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-50px me-5">
                    <img alt="Logo" src="/rafly.png" />
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Username-->
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-5">
                      {{ namaMhs }}
                      <span
                        class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2"
                        >Pro</span
                      >
                    </div>
                    <a
                      href="#"
                      class="fw-semibold text-muted text-hover-primary fs-7"
                      >{{ emailMhs }}</a
                    >
                  </div>
                  <!--end::Username-->
                </div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                  <router-link to="/profil" class="menu-link px-5">Profil</router-link>
                </div>

              <!--begin::Menu item-->
              <div class="menu-item px-5">
											<a @click="logout" class="menu-link px-5">Logout</a>
										</div>
              <!--end::Menu item-->
            </div>
            <!--end::User account menu-->
            <!--end::Menu wrapper-->
          </div>
          <!--end::User menu-->
          <!--begin::Header menu toggle-->
          <div
            class="app-navbar-item d-lg-none ms-2 me-n2"
            title="Show header menu"
          >
            <div
              class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
              id="kt_app_header_menu_toggle"
            >
              <i class="ki-duotone ki-element-4 fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </div>
          </div>
          <!--end::Header menu toggle-->
          <!--begin::Aside toggle-->
          <div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show aside">
            <div
              class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
              id="kt_app_aside_toggle"
            >
              <i class="ki-duotone ki-trello fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
              </i>
            </div>
          </div>
          <!--end::Header menu toggle-->
        </div>
        <!--end::Navbar-->
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
  <!--end::Header-->
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      namaMhs: '',
      nimMhs: '',
      emailMhs: '',
      fotoMhs: '',
    }
  },
  mounted() {
    this.getProfilMahasiswa()

    // Tunggu DOM selesai render, lalu inisialisasi dropdown menu Metronic
    this.$nextTick(() => {
      if (window.KTMenu) {
        window.KTMenu.createInstances()
        console.log('KTMenu initialized')
      } else {
        console.warn('KTMenu not available')
      }
    })
  },
  methods: {
    async getProfilMahasiswa() {
      try {
        const nim = localStorage.getItem('UserNim')
        const res = await axios.get(`https://ti054d03.agussbn.my.id/api/mahasiswa/${nim}`)
        const data = res.data

        this.namaMhs = data.nama_mhs
        this.nimMhs = data.nim
        this.emailMhs = data.email
        this.fotoMhs = data.foto_warna_url
      } catch (err) {
        console.error('Gagal ambil data profil mahasiswa:', err)
      }
    },
    methods: {
  logout() {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.removeItem('UserNim')
    localStorage.removeItem('loggedIn')

    this.$router.push('/')

    this.$nextTick(() => {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Logout',
        timer: 1500,
        showConfirmButton: false
      })
    })
    setTimeout(() => {
            this.$router.push('/')
          }, 2000)
  }
}

  }
}
</script>
