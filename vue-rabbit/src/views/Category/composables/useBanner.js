import { getBannerAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'

// 获取分类轮播图相关代码
export function useBanner() { 

  const bannerList = ref([]);

  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    });
    bannerList.value = res.result;
  }

  onMounted(() => {
    getBanner(); // 获取轮播图数据
  });

  return {
    bannerList
  }
}