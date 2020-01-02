import Vue from 'vue'
import App from '@/layouts/App.vue'
import router from './plugins/router.js'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入基础样式
import './assets/css/base.css' // ~~ src ='...'

// 引入字体比例校验 js
import '@/assets/js/font.js' // ~~ src='..'

// 引入axios插件的配置
import './plugins/axios.js'

Vue.use(vueSwiper)
Vue.config.productionTip = false
new Vue({
  name: 'app',
  render: h => h(App),
  router
}).$mount('#app')
