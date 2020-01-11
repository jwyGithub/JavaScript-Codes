import Vue from 'vue'
import App from './App.vue'

//全局 baseUrl
let config = require('../config/config')
window.baseUrl = config.baseUrl.localhost

// 引入路由
import router from './plugins/router.js'

// 引入animate.css
import 'animate.css'

// 引入swiper
import vueSwiper from 'vue-awesome-swiper'
// 引入swiper样式文件
import 'swiper/dist/css/swiper.css'

// 引入基础样式
import './assets/css/base.css'

// 引入字体比例校验 js
// import '@/assets/js/font.js' 

// 引入px转rem js
import './assets/js/rem'

// 引入axios插件的配置
import './plugins/axios.js'

// 引入状态管理

import store from './plugins/vuex.js'

// 引入懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);

// 引入vantUI样式
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(Vant);

Vue.use(vueSwiper);

Vue.config.productionTip = false
new Vue({
  name: 'app',
  render: h => h(App),
  router,
  store
}).$mount('#app')

