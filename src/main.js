import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './plugins/router.js'

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
import Vuex from 'vuex'
import store from './store/store.js'

// 引入mintUI
import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css'

// 引入vantUI样式
import 'vant/lib/index.css';
import { Search } from "vant";
import { Field } from 'vant';

Vue.use(Field);

Vue.use(Search);

Vue.use(Mint); 
Vue.use(Vuex)
Vue.use(vueSwiper);

Vue.config.productionTip = false
new Vue({
  name: 'app',
  render: h => h(App),
  router,
  store
}).$mount('#app')

