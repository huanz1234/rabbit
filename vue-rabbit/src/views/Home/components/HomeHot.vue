<script setup>
import { onMounted } from 'vue';
import HomePanner from './HomePanner.vue'
import { getHotAPI } from "@/apis/getHot";
import { ref } from 'vue'

const hotList = ref([])
// 获取人气推荐数据
const getHot = async () => {
  const res = await getHotAPI()
  hotList.value = res.result
}

onMounted(() => {
  getHot()
})
</script>

<template>
  <HomePanner title="人气推荐" subTitle="热门推荐 · 品质保证">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="desc">{{ item.alt }}</p>
          <p class="price">&yen;999</p>
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