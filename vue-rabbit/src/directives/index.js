import { useIntersectionObserver } from '@vueuse/core'

// 封装图片懒加载的插件
export const lazyPlugin = {

  install(app) {
    // 全局注册指令
    // 定义图片懒加载的全局指令
    app.directive('img-lazy', {
      // el 指令所绑定的元素 img
      // binding.value 指令所绑定的值，即传入的图片地址
      mounted(el, binding) {
        // 监听图片是否进入可视区域,会一直监听，需要优化，第一次进入视图就应该停止监听
        const {stop} = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          
          
          if (isIntersecting) {
            console.log(1);
            el.src = binding.value
            stop() // 停止监听
          }
        })
      }
    })

  }
}