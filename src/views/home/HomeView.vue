<template>
  <div class="home">
    <HomeBackground />
    <HomeProducts />
  </div>
</template>

<script>
import HomeBackground from '@/views/home/HomeBackground.vue'
import HomeProducts from '@/views/home/HomeProducts.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBackground,
    HomeProducts
  }
}
</script>
