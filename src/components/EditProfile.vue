<template>
    <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
			<!--begin::Page-->
			<div class="app-page flex-column flex-column-fluid" id="kt_app_page">
				<!--begin::Header-->
				<div id="kt_app_header" class="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false">
					<!--begin::Header container-->
					<div class="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
						<!--begin::Sidebar mobile toggle-->
						<div class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
							<div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
								<i class="ki-duotone ki-abstract-14 fs-2 fs-md-1">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</div>
						</div>
						<!--end::Sidebar mobile toggle-->
						<!--begin::Mobile logo-->
						<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
							<router-link to="/dashboard" class="d-lg-none">
								<img alt="Logo" src="/default_small_poliban.png" class="h-30px" />
							</router-link>
						</div>
						<!--end::Mobile logo-->
						<!--begin::Header wrapper-->
						<div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
							<!--begin::Menu wrapper-->
							<div class="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
								<div class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
                                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" class="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
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
								<div class="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">
									<!--begin::Menu wrapper-->
									<div class="cursor-pointer symbol symbol-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<img src="/logo_poliban.png" class="rounded-3" alt="user" />
									</div>
									<!--begin::User account menu-->
									<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
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
													<div class="fw-bold d-flex align-items-center fs-5">{{ namaMhs }} </div>
													<a href="#" class="fw-semibold text-muted text-hover-primary fs-7">{{ emailMhs }}</a>
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
											<router-link href="/profile" class="menu-link px-5">Profil</router-link>
										</div>
										<!--end::Menu item-->
										
										<!--end::Menu item-->
										<!--begin::Menu item-->
										<div class="menu-item px-5">
											<a href="#" class="menu-link px-5">Logout</a>
										</div>
										<!--end::Menu item-->
									</div>
									<!--end::User account menu-->
									<!--end::Menu wrapper-->
								</div>
								<!--end::User menu-->
								<!--begin::Header menu toggle-->
								<div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
									<div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
										<i class="ki-duotone ki-element-4 fs-1">
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
									</div>
								</div>
								<!--end::Header menu toggle-->
								<!--begin::Aside toggle-->
								<div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show aside">
									<div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_aside_toggle">
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
				<!--begin::Wrapper-->
				<div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
					<!--begin::Sidebar-->
					<div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
						<!--begin::Logo-->
						<div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
							<!--begin::Logo image-->
							<router-link to="/dashboard">
								<img alt="Logo" src="/default_dark_poliban.png" class="h-25px app-sidebar-logo-default" />
								<img alt="Logo" src="/default_small_poliban.png" class="h-20px app-sidebar-logo-minimize" />
							</router-link>
							<!--end::Logo image-->
							<!--begin::Sidebar toggle-->
							<!--begin::Minimized sidebar setup:   -->
           
      
							<div id="kt_app_sidebar_toggle" class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
								<i class="ki-duotone ki-black-left-line fs-3 rotate-180">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</div>
							<!--end::Sidebar toggle-->
						</div>
						<!--end::Logo-->
						<!--begin::sidebar menu-->
						<div class="app-sidebar-menu overflow-hidden flex-column-fluid">
							<!--begin::Menu wrapper-->
							<div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper">
								<!--begin::Scroll wrapper-->
								<div id="kt_app_sidebar_menu_scroll" class="scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
									<!--begin::Menu-->
									<div class="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
										<!--begin:Menu item-->
										<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
											<!--begin:Menu link-->
											<span class="menu-link">
												<span class="menu-icon">
													<i class="ki-duotone ki-element-11 fs-2">
														<span class="path1"></span>
														<span class="path2"></span>
														<span class="path3"></span>
														<span class="path4"></span>
													</i>
												</span>
												<span class="menu-title">Dashboard</span>
											</span>
											<!--end:Menu link-->
										</div>
										<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
											<!--begin:Menu link-->
											<span class="menu-link">
												<span class="menu-icon">
													<i class="ki-duotone ki-user fs-2">
														<span class="path1"></span>
														<span class="path2"></span>
													</i>
												</span>
												<span class="menu-title">Presensi</span>
											</span>
											<!--end:Menu link-->
										</div>
										<!--end:Menu item-->
										<!--begin:Menu item-->
										<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
											<!--begin:Menu link-->
											<span class="menu-link">
												<span class="menu-icon">
													<i class="ki-duotone ki-bank fs-2">
														<span class="path1"></span>
														<span class="path2"></span>
													</i>
												</span>
												<span class="menu-title">Akademik</span>
												<span class="menu-arrow"></span>
											</span>
											<!--end:Menu link-->
											<!--begin:Menu sub-->
											<div class="menu-sub menu-sub-accordion">
												<!--begin:Menu item-->
												<div class="menu-item">
													<!--begin:Menu link-->
													<a class="menu-link" href="pages/user-profile/overview.html">
														<span class="menu-bullet">
															<span class="bullet bullet-dot"></span>
														</span>
														<span class="menu-title">Kartu Rencana Studi</span>
													</a>
													<!--end:Menu link-->
												</div>
												<!--end:Menu item-->
											</div>
											<!--end:Menu sub-->
										</div>
										<!--end:Menu item-->
										<!--begin:Menu item-->
										<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
											<!--begin:Menu link-->
											<span class="menu-link">
												<span class="menu-icon">
													<i class="ki-duotone ki-address-book fs-2">
														<span class="path1"></span>
														<span class="path2"></span>
														<span class="path3"></span>
													</i>
												</span>
												<span class="menu-title">Hasil Studi</span>
												<span class="menu-arrow"></span>
											</span>
											<!--end:Menu link-->
											<!--begin:Menu sub-->
											<div class="menu-sub menu-sub-accordion">
												<!--begin:Menu item-->
												<div class="menu-item">
													<!--begin:Menu link-->
													<a class="menu-link" href="pages/user-profile/overview.html">
														<span class="menu-bullet">
															<span class="bullet bullet-dot"></span>
														</span>
														<span class="menu-title">Kartu Hasil Studi</span>
													</a>
													<!--end:Menu link-->
												</div>
												<!--end:Menu item-->
											</div>
											<!--end:Menu sub-->
										</div>
										<!--end:Menu item-->
										
									</div>
									<!--end::Menu-->
								</div>
								<!--end::Scroll wrapper-->
							</div>
							<!--end::Menu wrapper-->
						</div>
						<!--end::sidebar menu-->
					</div>
					<!--end::Sidebar-->
					<!--begin::Main-->
					<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
						<!--begin::Content wrapper-->
						<div class="d-flex flex-column flex-column-fluid">
							<!--begin::Toolbar-->
							<div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
								<!--begin::Toolbar container-->
								<div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
									<!--begin::Page title-->
									<div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
										<!--begin::Title-->
										<h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Pengaturan Mahasiswa</h1>
										<!--end::Title-->
										<!--begin::Breadcrumb-->
										<ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
											<!--begin::Item-->
											<li class="breadcrumb-item text-muted">
												<a href="#" class="text-muted text-hover-primary">Yuk, pantau dan kelola data akademik mahasiswa dengan mudah di sini!</a>
											</li>
											<!--end::Item-->
										</ul>
										<!--end::Breadcrumb-->
									</div>
									<!--end::Page title-->
								</div>
								<!--end::Toolbar container-->
							</div>
							<!--end::Toolbar-->
							<!--begin::Content-->
							<div id="kt_app_content" class="app-content flex-column-fluid">
								<!--begin::Content container-->
								<div id="kt_app_content_container" class="app-container container-xxl">
								
									<!--begin::Basic info-->
									<div class="card mb-5 mb-xl-10">
										<!--begin::Card header-->
										<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
											<!--begin::Card title-->
											<div class="card-title m-0">
												<h3 class="fw-bold m-0">Profile Details</h3>
											</div>
											<!--end::Card title-->
										</div>
										<!--begin::Card header-->
										<!--begin::Content-->
										<div id="kt_account_settings_profile_details" class="collapse show">
											<!--begin::Form-->
											<form id="kt_account_profile_details_form" class="form" @submit.prevent="updateProfil">
                                                <!--begin::Card body-->
                                                <div class="card-body border-top p-9">
                                                  <!-- Foto -->
                                                  <div class="row mb-6">
                                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Foto</label>
                                                    <div class="col-lg-8">
                                                      <div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url('/rafly.png')">
                                                        <div class="image-input-wrapper w-125px h-125px" style="background-image: url(/rafly.png)"></div>
                                                        <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                          <i class="ki-duotone ki-pencil fs-7"><span class="path1"></span><span class="path2"></span></i>
                                                          <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                          <input type="hidden" name="avatar_remove" />
                                                        </label>
                                                        <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                          <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>
                                                        </span>
                                                        <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                          <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>
                                                        </span>
                                                      </div>
                                                      <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                                                    </div>
                                                  </div>
												   <!-- NIM -->
                                                  <div class="row mb-6">
                                                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">NIM</label>
                                                    <div class="col-lg-8 fv-row">
                                                      <input type="text" name="nim" disabled class="form-control form-control-lg form-control-solid" placeholder="NIM" v-model="nimMhs"/>
                                                    </div>
                                                  </div>
                                                  <!-- Nama Lengkap -->
                                                  <div class="row mb-6">
                                                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">Nama Lengkap</label>
                                                  
                                                        <div class="col-lg-8 fv-row">
                                                          <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" v-model="namaMhs" />
                                                   
                                                    </div>
                                                  </div>
                                                  <!-- Email -->
													<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-semibold fs-6">Email</label>
													<div class="col-lg-8 fv-row">
														<input type="email" name="email" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" v-model="emailMhs" />
													</div>
													</div>

                                                 
                                                  <!-- No HP/WA -->
                                                  <div class="row mb-6">
                                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">
                                                      <span class="required">No. HP/WA</span>
                                                      <span class="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
                                                        <i class="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                          <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                                                        </i>
                                                      </span>
                                                    </label>
                                                    <div class="col-lg-8 fv-row">
                                                      <input type="tel" name="phone" class="form-control form-control-lg form-control-solid" placeholder="Phone number" v-model="handphone" />
                                                    </div>
                                                  </div>
                                                </div>
                                                <!--end::Card body-->
                                                <!--begin::Actions-->
                                                <div class="card-footer d-flex justify-content-end py-6 px-9">
												  <router-link to="/profile" class="btn btn-light btn-active-light-primary me-2">Kembali</router-link>
                                                  <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">Simpan Perubahan</button>
                                                </div>
                                                <!--end::Actions-->
                                              </form>
                                              
                                              
											<!--end::Form-->
										</div>
										<!--end::Content-->
									</div>
									<!--end::Basic info-->
								</div>
								<!--end::Content container-->
							</div>
							<!--end::Content-->
						</div>
						<!--end::Content wrapper-->
						<!--begin::Footer-->
					</div>
					<!--end:::Main-->
					<!--begin::aside-->
					<!--end::aside-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
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
        this.handphone = data.handphone
        
      } catch (err) {
        console.error('Gagal ambil data profil mahasiswa:', err)
      }
    },
    async updateProfil() {
  try {
    const nim = this.nimMhs || localStorage.getItem('nim')
    const payload = {
      nama_mhs: this.namaMhs,
      email: this.emailMhs,
      handphone: this.handphone
    }

    const response = await axios.put(
      `https://ti054d01.agussbn.my.id/api/mahasiswa/${nim}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    console.log('Update berhasil:', response.data)

    Swal.fire({
      icon: 'success',
      title: 'Berhasil Update',
      timer: 2000,
      showConfirmButton: false
    })
  } catch (error) {
    console.error('Gagal update:', error)
    Swal.fire({
      icon: 'error',
      title: 'Gagal Update',
      text: error.response?.data?.message || 'Terjadi kesalahan saat mengirim data'
    })
  }
}


  }
}
</script>