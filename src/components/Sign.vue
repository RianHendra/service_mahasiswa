<template>

		<!--begin::Root-->
		<div class="d-flex flex-column flex-root min-h-100vh" id="kt_app_root">
			<!--begin::Authentication - Sign-in -->
			<div class="d-flex flex-column flex-lg-row flex-column-fluid">
				<!--begin::Body-->
				<div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
					<!--begin::Form-->
					<div class="d-flex flex-center flex-column flex-lg-row-fluid">
						<!--begin::Wrapper-->
						<div class="w-lg-500px p-10">
							<!--begin::Form-->
							<form class="form w-100" @submit.prevent="handleLogin">
												<div class="text-center mb-11">
												<h1 class="text-gray-900 fw-bolder mb-3">Login</h1>
												<div class="text-gray-500 fw-semibold fs-6">Halaman Login Mahasiswa</div>
												</div>

												<div class="fv-row mb-8">
												<input type="text" placeholder="Username" v-model="username" autocomplete="off" class="form-control bg-transparent" />
												</div>

												<div class="fv-row mb-8">
												<input type="password" placeholder="Password" v-model="password" autocomplete="off" class="form-control bg-transparent" />
												</div>

												<div class="fv-row mb-8">
												<button type="submit" class="btn btn-primary w-100">Login</button>
												</div>

												<div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
												<div></div>
												<a href="#" class="link-primary">Lupa Password?</a>
												</div>
											</form>
							<!--end::Form-->
						</div>
						<!--end::Wrapper-->
					</div>
					<!--end::Form-->
				</div>
				<!--end::Body-->
                <!--begin::Aside-->
				<div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style="background-image: url(assets/media/misc/auth-bg.png)">
					<!--begin::Content-->
					<div class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">

						<!--begin::Logo-->
						<a href="#" class="mb-0 d-block d-lg-none">
							<img alt="Logo" src="/default_small_poliban.png" class="h-80px" />
							</a>
						
						<!--end::Logo-->
						<!--begin::Image-->
						<img class="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src="/logo_poliban_sign.png" alt="" />
						<!--end::Image-->
						<!--begin::Title-->
						<h1 class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Cepat, Efisien, dan Produktif</h1>
<!--end::Title-->
<!--begin::Text-->
							<div class="d-none d-lg-block text-white fs-base text-center">
								Dalam halaman ini, 
								<a href="#" class="opacity-75-hover text-warning fw-bold me-1">mahasiswa</a>dapat melakukan login 
								<br />dengan menggunakan akun resmi yang telah diberikan oleh 
								<a href="#" class="opacity-75-hover text-warning fw-bold me-1">pihak kampus</a>untuk mengakses 
								<br />layanan dan informasi akademik secara cepat dan efisien.
							</div>

						<!--end::Text-->
					</div>
					<!--end::Content-->
				</div>
				<!--end::Aside-->
			</div>
			<!--end::Authentication - Sign-in-->
		</div>
		

	

</template>
<script>
import axios from 'axios'
export default {
  name: 'Sign',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      errorMsg: '',
      manualLoginActive: false
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      this.errorMsg = ''

      try {
        const response = await axios.post('https://ti054d01.agussbn.my.id/api/login', {
          username: this.username, // sesuai dokumentasi (login, bukan username)
          password: this.password
        })

        const result = response.data
        console.log('API Response:', result)

        if (result.token) {
          localStorage.setItem('authToken', result.token)
          localStorage.setItem('userEmail', result.user?.email || '')
          localStorage.setItem('userRole', result.user?.role || '')
          localStorage.setItem('loggedIn', 'true')

          this.$router.push('/dashboard')
        } else {
          this.errorMsg = result.message || 'Login gagal.'
        }
      } catch (error) {
        this.errorMsg = 'Gagal menghubungi server.'
        console.error(error)
      }

      this.loading = false
    }
  }
}

</script>

