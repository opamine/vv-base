<template>
  <div>{{ pageTitle }}</div>
  <div class="swiper-container">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :slides-per-view="1"
      :spaceBetween="30"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :autoplay="{
        delay: 3000,
      }"
      :coverflow-effect="{
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 6,
        slideShadows: true,
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in imgAssetsUrl" :key="item"
        ><img :src="item" style="width: 600px; height: 300px; object-fit: cover"
      /></swiper-slide>
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

  console.log(imgAssetsUrl);

  const modules = [Autoplay, EffectCoverflow];
</script>
<style lang="css" scoped>
  .title {
    padding-bottom: 12px;
    font-size: 24px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }

  .swiper-container {
    overflow: hidden;
    margin: 30px auto 0;
    width: 1000px;
  }

  :deep(.swiper) {
    overflow: visible;
    width: 600px;
    height: 300px;
  }

  :deep(.swiper-slide) {
    background-color: #eee;
  }

  /* .swiper-slide {
    background-color: #eee;
  } */

  /* :deep(.swiper-slide-active) {
    transition: all 0.4s;
  } */
  :deep(.swiper-slide-prev) {
    transition: all 0.4s;
  }

  :deep(.swiper-slide-next) {
    transition: all 0.4s;
  }
</style>
