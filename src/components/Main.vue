<template>
  <!--begin::Main-->
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <!--begin::Content wrapper-->
    <div class="d-flex flex-column flex-column-fluid">
      <!--begin::Toolbar-->
      <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
        <!--begin::Toolbar container-->
        <div
          id="kt_app_toolbar_container"
          class="app-container container-xxl d-flex flex-stack"
        >
          <!--begin::Page title-->
          <div
            class="page-title d-flex flex-column justify-content-center flex-wrap me-3"
          >
            <!--begin::Title-->
            <h1
              class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0"
            >
              Dashboard
            </h1>
            <!--end::Title-->
            <!--begin::Breadcrumb-->
            <ul
              class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
            >
              <!--begin::Item-->
              <li class="breadcrumb-item text-muted">
                <a href="#" class="text-muted text-hover-primary"
                  >Yuk, intip progres dan info penting kuliahmu di sini
                </a>
              </li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
          </div>
          <!--end::Page title-->

          <!--begin::Actions-->

          <!--end::Actions-->
        </div>

        <!--end::Toolbar container-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <!--begin::Content container-->
        <div id="kt_app_content_container" class="app-container container-xxl">
          <!-- Notif Tugas -->
         <div class="card bg-light-danger  mb-5">
  <div class="card-body py-3 d-flex flex-column justify-content-center">
    <div class="d-flex align-items-center">
      <i class="ki-duotone ki-notification-on fs-2hx text-danger me-3"></i>
      <div>
        <div class="fs-6 fw-bold text-danger mb-1">Tugas Aktif</div>
        <div class="text-muted fs-7">
          Kamu memiliki <span class="fw-bold text-danger">3 tugas</span> yang belum dikerjakan. Ayo selesaikan segera!
        </div>
      </div>
    </div>
  </div>
</div>


          <!-- End Notif -->
          <!--begin::About card-->
          <div class="card">
            <!--begin::Body-->
            <div class="card-body p-lg-17">
              <!--begin::About-->
              <div class="mb-10">
                <!--begin::Wrapper-->
                <div class="mb-10">
                  <!--begin::Overlay-->
                  <div class="overlay">
                    <!--begin::Image-->
                    <img class="w-100 card-rounded" src="/banner.jpg" alt="" />
                    <!--end::Image-->
                  </div>
                  <!--end::Container-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::About-->
              <div class="row g-5 g-xl-8 mb-5">
                <div class="col-xl-4">
                  <!--begin: Statistics Widget 6-->
                  <div class="card bg-light-warning card-xl-stretch mb-xl-8">
                    <!--begin::Body-->
                    <div class="card-body my-3">
                      <a
                        href="#"
                        class="card-title fw-bold text-warning fs-5 mb-3 d-block"
                        >Progress Perkuliahan Semester Ini</a
                      >
                      <div class="py-1">
                        <span class="text-gray-900 fs-1 fw-bold me-2">35%</span>
                        <span class="fw-semibold text-muted fs-7"
                          >Perjalanan masih panjang, Tetap semangat yaa.</span
                        >
                      </div>
                      <div class="progress h-7px bg-warning bg-opacity-50 mt-7">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style="width: 35%"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <!--end:: Body-->
                  </div>
                  <!--end: Statistics Widget 6-->
                </div>
                <div class="col-xl-4">
                  <!--begin: Statistics Widget 6-->
                  <div class="card bg-light-success card-xl-stretch mb-xl-8">
                    <!--begin::Body-->
                    <div class="card-body my-3">
                      <a
                        href="#"
                        class="card-title fw-bold text-success fs-5 mb-3 d-block"
                        >Progress Kehadiran</a
                      >
                      <div class="py-1">
                        <span class="text-gray-900 fs-1 fw-bold me-2"
                          >100%</span
                        >
                        <span class="fw-semibold text-muted fs-7"
                          >Hadir terus! Mantap, pertahankan
                          konsistensinya.</span
                        >
                      </div>
                      <div class="progress h-7px bg-success bg-opacity-50 mt-7">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 100%"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <!--end:: Body-->
                  </div>
                  <!--end: Statistics Widget 6-->
                </div>

                <div class="col-xl-4">
                  <!--begin: Statistics Widget 6-->
                  <div
                    class="card bg-light-primary card-xl-stretch mb-5 mb-xl-8"
                  >
                    <!--begin::Body-->
                    <div class="card-body my-3">
                      <a
                        href="#"
                        class="card-title fw-bold text-primary fs-5 mb-3 d-block"
                        >Total Tagihan UKT</a
                      >
                      <div class="py-1">
                        <span class="text-gray-900 fs-1 fw-bold me-2">50%</span>
                        <span class="fw-semibold text-muted fs-7"
                          >Masih ada sisa Rp 1.500.000 nih. Gak buru-buru kok,
                          cicil aja pelan-pelan.</span
                        >
                      </div>
                      <div class="progress h-7px bg-primary bg-opacity-50 mt-7">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <!--end:: Body-->
                  </div>
                  <!--end: Statistics Widget 6-->
                </div>
              </div>

              <!--begin::List Widget 7-->
              <div class="card card-xl-stretch mb-xl-8 mb-10">
                <!--begin::Header-->
                <div class="card-header align-items-center border-0 mt-4">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="fw-bold text-gray-900"
                      >Cek Kehadiranmu Hari Ini</span
                    >
                    <span class="text-muted mt-1 fw-semibold fs-7"
                      >Ini rincian kehadiranmu untuk setiap sesi hari ini.
                      Periksa dengan teliti, dan pastikan kamu tidak melewatkan
                      sesi penting.</span
                    >
                  </h3>
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="card-body pt-3">
                  <div v-for="(kelas, index) in daftarKelas" :key="index" class="d-flex align-items-sm-center mb-7 border-bottom border-3">
                    <div class="symbol symbol-60px symbol-2by3 me-4">
                      <div class="symbol-label" :style="`background-image: url('${kelas.image}')`"></div>
                    </div>
                    <div class="d-flex flex-row-fluid flex-wrap align-items-center">
                      <div class="flex-grow-1 me-2 mb-5">
                        <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6" >{{ kelas.namaMatkul }}</a>
                        <span class="text-muted fw-semibold d-block pt-1">{{
                          kelas.id_pegawai
                        }}</span>
                        <span class="text-muted fw-semibold d-block pt-1">{{
                          kelas.alias
                        }}</span>
                        <span class="text-muted fw-semibold d-block pt-1 ">{{
                          kelas.jam
                        }}</span>
                      </div>

                      <!-- Jika kelas sedang dibuka -->
                      <template v-if="kelas.statusKelas === 'dibuka'">
                        <button
                            v-if="kelas.statusMahasiswa === 'belum'"
                            @click="klikHadir(index)"
                            :disabled="loadingIndex === index"
                            class="btn btn-sm btn-success kedap-kedip-jreng"
                          >
                            <span v-if="loadingIndex === index">
                              <i class="fa fa-spinner fa-spin"></i> Tunggu..
                            </span>
                            <span v-else>
                              Hadir
                            </span>
                          </button>
                        <span
                            v-else-if="kelas.statusMahasiswa === 'hadir'"
                            class="badge badge-light-success fs-8 fw-bold my-2"
                          >
                            Hadir
                          </span>
                      </template>

                      <!-- Jika kelas sudah ditutup -->
                      <template v-else>
                        <span
                          v-if="kelas.statusMahasiswa === 'hadir'" class="badge badge-light-success fs-8 fw-bold my-2"> Hadir
                        </span>
                        <span
                          v-else
                          class="badge badge-light-danger fs-8 fw-bold my-2">Alfa
                        </span>
                      </template>
                    </div>
                  </div>
                </div>
                <!--end::Body-->
              </div>
              <!--end::List Widget 7-->
              <!--begin::Section-->
              <div class="mb-17">
                <!--begin::Content-->
                <div class="d-flex flex-stack mb-5">
                  <!--begin::Title-->
                  <h3 class="text-gray-900">Info Perkuliahan & Pengumuman</h3>
                  <!--end::Title-->
                  <!--begin::Link-->
                  <a href="#" class="fs-6 fw-semibold link-primary"
                    >Lihat Semua Pengumuman</a
                  >
                  <!--end::Link-->
                </div>
                <!--end::Content-->
                <!--begin::Separator-->
                <div class="separator separator-dashed mb-9"></div>
                <!--end::Separator-->
                <!--begin::Row-->
                <div class="row g-10">
                  <div
                    class="col-md-4"
                     v-for="item in pengumuman" :key="item.id"
                  >
                    <!--begin::Feature post-->
                    <div class="card-xl-stretch mx-md-3">
                      <a
                        class="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5"
                        :style="{
                          backgroundImage: 'url(' + item.gambar_url + ')',
                        }"
                        data-fslightbox="lightbox-video-tutorials"
                      >
                      </a>

                      <div class="m-0">
                        <a
                          href="#"
                          class="fs-4 text-gray-900 fw-bold text-hover-primary text-gray-900 lh-base"
                        >
                          {{ item.judul }}
                        </a>

                        <div
                          class="fw-semibold fs-5 text-gray-600 text-gray-500 my-4 text-justify"
                        >
                          {{
                            isExpanded
                              ? item.isi
                              : truncateText(item.isi)
                          }}
                          <span
                            v-if="item.isi.length > maxLength"
                            @click="toggleExpanded"
                            style="color: blue; cursor: pointer"
                          >
                            {{
                              isExpanded
                                ? 'Lihat Lebih Sedikit'
                                : 'Lihat Selengkapnya'
                            }}
                          </span>
                        </div>

                        <div class="fs-6 fw-bold">
                          <a href="#" class="text-gray-700 text-hover-primary"
                            >Admin Akademik</a
                          >
                          <span class="text-muted">
                            | on
                            {{ new Date().toLocaleDateString('id-ID') }}</span
                          >
                          <!-- Karena dari API tidak ada tanggal created_at, jadi aku pakai today date -->
                        </div>
                      </div>
                    </div>
                    <!--end::Feature post-->
                  </div>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Section-->
            <!--end::Row-->
          </div>
          <!--end::Body-->
        </div>
        <!--end::About card-->
      </div>
      <!--end::Content container-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  props: {
    item: Object,
  },
  data() {
    return {
      pengumuman: [],
      isExpanded: false,
      maxLength: 200,
       daftarKelas: [],
      loadingIndex: null,
    };
  },
  computed: {
    truncatedIsi() {
      if (this.item && this.item.isi && this.item.isi.length > this.maxLength) {
        return this.item.isi.slice(0, this.maxLength) + '... ';
      }
      return this.item?.isi || '';
    },
    isTruncated() {
      return (
        this.item && this.item.isi && this.item.isi.length > this.maxLength
      );
    },
  },
  mounted() {
   this.getKelasHariIni()
    axios
      .get('http://36.91.27.150:818/api/pengumuman')
      .then((response) => {
        this.pengumuman = response.data;
        console.log('Data berhasil:', this.pengumuman);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  },
  methods: {
   async getKelasHariIni() {
  try {
    const nim = localStorage.getItem('UserNim')
    const res = await axios.get(`https://ti054d01.agussbn.my.id/api/mahasiswa/${nim}/presensi-aktif`)
    const dataPresensi = res.data
    console.log(dataPresensi)
    

    const today = new Date().toISOString().split('T')[0]
   

      
    const seen = new Set()
    const hariIni = dataPresensi.filter(item => {
      
      const idMk = item.presensi_dosen?.id_kelas_mk
      const isToday = item.presensi_dosen?.tgl_presesi === today
      const isOpen = item.presensi_dosen?.status_presensi_dosen === "1"
      if (idMk && isToday && isOpen && !seen.has(idMk)) {
        seen.add(idMk)
        return true
      }
      return false
    })
    // Map data sederhana
    const images = [
  'https://i.pinimg.com/736x/c7/32/aa/c732aa4a7ac0a2ca5089badbfded8a24.jpg',
  'https://i.pinimg.com/564x/bb/41/01/bb410105e2708d0c949d4c360b6f0718.jpg',
  'https://i.pinimg.com/564x/2f/8c/2e/2f8c2e2c3db60ac35234909c5cb52fcd.jpg',
  'https://i.pinimg.com/564x/25/d4/6a/25d46a49149c7a3a9638de437e0eaad1.jpg',
  'https://i.pinimg.com/564x/6c/c3/35/6cc33570d9db8e1e009dc1be20ad758f.jpg'
]
    this.daftarKelas = hariIni.map(item => {
  const randomImage = images[Math.floor(Math.random() * images.length)]
  return {
    id_kelas_mk: item.presensi_dosen.id_kelas_mk,
    namaMatkul: `Kelas MK ${item.presensi_dosen.id_kelas_mk}`,
    alias: '',
    jam: item.presensi_dosen.waktu_presensi || '08.00 – 09.40',
    id_pegawai: '',
    image: randomImage,
    statusKelas: 'dibuka',
    statusMahasiswa: item.status_presensi_mhs === '1' ? 'hadir' : 'belum',
    namaKelas: ''
  }
})
  } catch (err) {
    console.error('Gagal ambil data kelas hari ini:', err)
  }
},


  klikHadir(index) {
  this.loadingIndex = index;
  const kelas = this.daftarKelas[index];
  const nim = localStorage.getItem('nim');

  // Panggil API presensi mahasiswa
  axios.post('https://ti054d01.agussbn.my.id/api/presensi-mahasiswa/hadir', {
    id_presensi_dosen: kelas.id_presensi_dosen,
    nim: nim
  })
  .then(() => {
    this.daftarKelas[index].statusMahasiswa = 'hadir';
    this.loadingIndex = null;

    Swal.fire({
      icon: 'success',
      title: 'Kehadiran tercatat!',
      text: `Anda telah hadir di kelas ${kelas.namaMatkul}.`,
      showConfirmButton: false,
      timer: 2000,
      position: 'center',
    });
  })
  .catch((error) => {
    console.error('Gagal presensi:', error);
    this.loadingIndex = null;

    Swal.fire({
      icon: 'error',
      title: 'Gagal mencatat kehadiran',
      text: 'Silakan coba lagi atau hubungi admin.'
    });
  });
},
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
    truncateText(text) {
      if (!text) return '';
      if (text.length > this.maxLength) {
        return text.slice(0, this.maxLength) + '... ';
      }
      return text;
    }
  },
};
</script>

<style scoped>
.text-justify {
  text-align: justify;
}
@keyframes kedapKedipJreng {
  0%, 100% {
    transform: scale(1);
    background-color: #28a745; /* hijau sukses */
    box-shadow: 0 0 0px rgba(40, 167, 69, 0.8);
  }
  50% {
    transform: scale(1.1);
    background-color: #34d058; /* hijau terang */
    box-shadow: 0 0 20px rgba(40, 167, 69, 0.8);
  }
}

.kedap-kedip-jreng {
  animation: kedapKedipJreng 1s infinite;
  transition: all 0.3s ease-in-out;
}


</style>
