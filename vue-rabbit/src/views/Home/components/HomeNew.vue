<script setup>
import { onMounted } from 'vue';
import HomePanner from './HomePanner.vue'
import { getNewsAPI } from "@/apis/getNews";
import { ref } from 'vue'

const newsList = ref([])
// 获取新鲜好物数据
const getNews = async () => {
  const res = await getNewsAPI()
  newsList.value = res.result
}

onMounted(() => {
  getNews()
})
</script>

<template>
  <HomePanner title="新鲜好物" subTitle="新鲜出炉 · 品质保证">
    <ul class="goods-list">
      <li v-for="item in newsList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanner>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>