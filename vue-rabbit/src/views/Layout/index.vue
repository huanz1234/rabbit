<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key，破坏复用机制，强制销毁组件 -->
  <!-- <RouterView :key="$route.fullPath"></RouterView>暴力销毁全部组件，banner不需要销毁  -->

  <!-- 精细化 -->
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from 'vue';

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})

</script>