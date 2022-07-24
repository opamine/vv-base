<template>
  <div class="swiper-container">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :spaceBetween="-100"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false, // 鼠标操作后停止轮播
        pauseOnMouseEnter: true, // 鼠标进入暂停
      }"
      :speed="600"
      :coverflow-effect="{
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 8,
        slideShadows: true,
      }"
      :loop="true"
      :modules="modules"
      direction="horizontal"
      class="mySwiper"
    >
      <swiper-slide v-for="item in imgAssetsUrl" :key="item">
        <img :src="item" style="object-fit: cover; width: 600px; height: 300px" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, EffectCoverflow } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';

  const imgUrls = ['01', '02', '03', '04'];
  const imgAssetsUrl = imgUrls.map((item) => '../src/assets/swiper/swiper' + item + '.png');

  const modules = [Autoplay, EffectCoverflow];
</script>
<style lang="less" scoped>
  .swiper-container {
    overflow: hidden;
    margin: 30px auto 0;

    :deep(.swiper) {
      overflow: visible;
      width: 600px;
      height: 300px;
      // .swiper-slide {
      //   &.swiper-slide-prev {
      //   }
      //   &.swiper-slide-active {
      //   }
      //   &.swiper-slide-next {
      //   }
      // }
    }
  }
</style>
