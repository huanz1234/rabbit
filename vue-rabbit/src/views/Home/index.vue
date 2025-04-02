<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>

  <HomeHot />
  <HomeProduct />
</template>