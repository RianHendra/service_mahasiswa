<template>
  <!--begin::aside-->
  <div
    id="kt_app_aside"
    class="app-aside flex-column mt-7"
    data-kt-drawer="true"
    data-kt-drawer-name="app-aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="auto"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_app_aside_toggle"
  >
    <!--begin::Aside wrapper-->
    <div
      id="kt_app_aside_wrapper"
      class="hover-scroll-y px-5 mx-5 my-5"
      data-kt-scroll="true"
      data-kt-scroll-activate="true"
      data-kt-scroll-height="auto"
      data-kt-scroll-dependencies="#kt_app_header"
      data-kt-scroll-wrappers="#kt_app_aside"
      data-kt-scroll-offset="5px"
      data-kt-scroll-save-state="true"
    >
      <!--begin::Aside 5-->
      <div class="card card-reset card-p-0">
        <!--begin::Header-->
        <div class="card-header align-items-center min-h-auto mb-5">
          <h3 class="card-title text-gray-900 fs-3 fw-bold mb-0">
            Tugas yang harus dikerjakan
          </h3>
          <!--end::Title-->
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div class="card-body">
          <!--begin::List-->
          <div class="mb-5">
            <!--begin::Items-->
            <div class="py-1">
              <div class="d-flex flex-stack align-items-center py-1">
                <!--begin::Title-->
                <span class="fs-6 text-gray-500 fw-bold d-block"
                  >Deadline - Senin, 28 April</span
                >
                <!--end::Title-->
              </div>
              <!--begin::Timeline-->
              <div class="timeline">
                <!--begin::Timeline item-->
                <div class="timeline-item">
                  <!--begin::Timeline content-->
                  <div
                    class="timeline-content d-flex flex-row align-items-center sm-0"
                  >
                    <!--begin::Time-->
                    <span class="fs-4 text-800 fw-bold me-5">11:59</span>
                    <!--end::Time-->
                    <!--begin::Bullet-->
                    <span
                      data-kt-element="bullet"
                      class="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-danger"
                    ></span>
                    <!--end::Bullet-->
                    <!--begin:Author-->
                    <div class="flex-grow-1 me-2">
                      <span
                        class="text-gray-500 text-hover-primary fs-7 fw-bold"
                        >Keamanan Jaringan</span
                      >
                      <span class="text-gray-800 fw-bold d-block fs-6"
                        >Install Kali Linux</span
                      >
                    </div>
                    <!--end:Author-->
                  </div>
                  <!--end::Timeline content-->
                </div>
                <!--end::Timeline item-->
              </div>
              <!--end::Timeline-->
              <div class="d-flex flex-stack align-items-center py-1">
                <!--begin::Title-->
                <span class="fs-6 text-gray-500 fw-bold d-block"></span>
                <!--end::Title-->
              </div>
              <div class="d-flex flex-stack align-items-center py-1">
                <!--begin::Title-->
                <span class="fs-6 text-gray-500 fw-bold d-block"></span>
                <!--end::Title-->
              </div>
              <div class="d-flex flex-stack align-items-center py-1">
                <!--begin::Title-->
                <span class="fs-6 text-gray-500 fw-bold d-block"
                  >Deadline - Rabu, 30 April</span
                >
                <!--end::Title-->
              </div>
              <!--begin::Timeline-->
              <div class="timeline">
                <!--begin::Timeline item-->
                <div class="timeline-item">
                  <!--begin::Timeline content-->
                  <div
                    class="timeline-content d-flex flex-row align-items-center sm-0"
                  >
                    <!--begin::Time-->
                    <span class="fs-4 text-800 fw-bold me-5">15:00</span>
                    <!--end::Time-->
                    <!--begin::Bullet-->
                    <span
                      data-kt-element="bullet"
                      class="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-danger"
                    ></span>
                    <!--end::Bullet-->
                    <!--begin:Author-->
                    <div class="flex-grow-1 me-2">
                      <span
                        class="text-gray-500 text-hover-primary fs-7 fw-bold"
                        >Pemrograman Perangkat Bergerak</span
                      >
                      <span class="text-gray-800 fw-bold d-block fs-6"
                        >Laporan Praktek Flutter</span
                      >
                    </div>
                    <!--end:Author-->
                  </div>
                  <!--end::Timeline content-->
                </div>
                <!--end::Timeline item-->
              </div>
              <!--end::Timeline-->
              <div class="d-flex flex-stack align-items-center py-1">
                <!--begin::Title-->
                <span class="fs-6 text-gray-500 fw-bold d-block"></span>
                <!--end::Title-->
              </div>
              <!--begin::Timeline-->
              <div class="timeline">
                <!--begin::Timeline item-->
                <div class="timeline-item">
                  <!--begin::Timeline content-->
                  <div
                    class="timeline-content d-flex flex-row align-items-center sm-0"
                  >
                    <!--begin::Time-->
                    <span class="fs-4 text-800 fw-bold me-5">11:59</span>
                    <!--end::Time-->
                    <!--begin::Bullet-->
                    <span
                      data-kt-element="bullet"
                      class="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-danger"
                    ></span>
                    <!--end::Bullet-->
                    <!--begin:Author-->
                    <div class="flex-grow-1 me-2">
                      <span
                        class="text-gray-500 text-hover-primary fs-7 fw-bold"
                        >Administrasi Database</span
                      >
                      <span class="text-gray-800 fw-bold d-block fs-6"
                        >Laporan Manajemen User</span
                      >
                    </div>
                    <!--end:Author-->
                  </div>
                  <!--end::Timeline content-->
                </div>
                <!--end::Timeline item-->
              </div>
              <!--end::Timeline-->
            </div>
            <!--end::Items-->
          </div>
          <!--end::List-->
          <!--begin::Action-->
          <a href="#" class="btn btn-light btn-color-gray-700 fw-bold w-100"
            >Lihat Lengkap</a
          >
          <!--end::Action-->
        </div>
        <!--end: Card Body-->
      </div>
      <!--end::Aside 5-->
    </div>
    <!--end::Aside wrapper-->
  </div>
</template>
