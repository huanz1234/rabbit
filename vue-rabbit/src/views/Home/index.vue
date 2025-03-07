<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanner from './components/HomePanner.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />


  <HomePanner title="新鲜好物" subTitle="新鲜好物 好多商品">
    <div>我是一个插槽</div>
  </HomePanner>

  <HomePanner title="人气推荐" subTitle="人气推荐 好多商品">
    <div>我是一个插槽</div>
  </HomePanner>
</template>