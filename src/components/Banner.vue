<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'

const bannerImages = ref([
  `${import.meta.env.VITE_DO_BASE_URL}/assets/SMB.jpg`,
  `${import.meta.env.VITE_DO_BASE_URL}/assets/RVC-1.jpg`,
  `${import.meta.env.VITE_DO_BASE_URL}/assets/Gaur-Nitai-1.jpg`
])
// Add Swiper configuration
const swiperOptions = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 1,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: true,
  pagination: { clickable: true }
}
</script>
<template>
  <div class="home-banner">
    <Swiper v-bind="swiperOptions" class="banner-swiper">
      <SwiperSlide v-for="image in bannerImages" :key="image">
        <img class="home-banner-image" :src="image" alt="Banner image" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style scoped lang="scss">
.home-banner {
  margin-top: 40px;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .banner-swiper {
    width: 98%;
    margin: 0 auto;
  }

  :deep(.swiper-slide) img {
    width: 100%;
    height: 400px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
    }
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #fff;
    &::after {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  :deep(.swiper-pagination-bullet) {
    background: #fff;
  }
}
</style>
