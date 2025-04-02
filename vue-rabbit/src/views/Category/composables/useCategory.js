// 获取分类数据相关代码
import getCategoryAPI from '@/apis/category';
import { onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { ref } from 'vue';

export function useCategory() {
  const route = useRoute();   // 使用 useRoute 获取当前路由信息
  const categoryData = ref({});


  // 获取分类数据
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };

  // 组件首次加载时获取分类数据和 banner 数据
  onMounted(() => {
    getCategory(); // 获取分类数据
  })

  // 期望在路由发生变化时获取分类数据
  onBeforeRouteUpdate(async (to) => {
    await getCategory(to.params.id);
  })

  return {
    categoryData
  }
}