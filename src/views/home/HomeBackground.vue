<template>
  <div class = "flex items-center justify-center">
    <Splide :options="splideOptions" class="w-full max-w-5xl mx-auto">
      <SplideSlide v-for="(img, index) in images" :key="index">
        <img
          :src="img"
          alt="Slide"
          class="w-full h-full object-cover"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>


<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const images = [
  new URL('@/assets/bg_pic.jpg', import.meta.url).href,
  new URL('@/assets/bg_pic_2.jpg', import.meta.url).href,
]

const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  arrows: true,
  pagination: false,
  classes: {
    arrows: 'splide__arrows',
    arrow: 'splide__arrow text-black hover:bg-orange-500',
    prev: 'splide__arrow--prev',
    next: 'splide__arrow--next',
  }
}
</script>
