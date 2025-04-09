// 封装倒计时函数 
import { computed, ref } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  const time = ref(0)
  // 格式化时间
  const formatTime = computed(() => dayjs.unix(time.value).format('mm:ss'))

  const start = (curTime) => {
    time.value = curTime
    const timer = setInterval(() => {
      time.value--
      if (time.value <= 0) {
        clearInterval(timer)
        time.value = 0
      }
    }, 1000)
  }
  return {
    formatTime,
    start
  }
}