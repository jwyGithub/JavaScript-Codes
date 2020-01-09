<template>
  <div class="banner">
    <ul class="clearfix">
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item) in slide" :key="item._id">
          <img :src="item.imgurl" alt=""/>
          <div class="text-box">
            <h2>{{item.sub_title}}</h2>
            <p class="overmore">{{item.title}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </ul>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      slide: [],
      swiperOption: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许分页点击跳转
        },
        // 自动轮播
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 开启循环模式
        loop: true,
        // 开启鼠标滚轮控制Swiper切换
        mousewheel: true,
        initialSlide: 0,
        speed: 1000
      }
    }
  },
  components: {

  },
  beforeMount () {
    console.log(this)
    axios({
      url: 'http://wssd.f3322.net:13140/api/banner'
    }).then(
      // eslint-disable-next-line no-return-assign
      res => this.slide = res.data.data
      // res=>console.log(res.data)

    )
  },
  updated () {},
  methods: {}
}
</script>

<style>
.swiper-slide{
  position: relative;
}
.swiper-slide img{
    width:100%;
}
.text-box{
  width:100%;
  padding:0 10px;
  position:absolute;
  left:0; 
  bottom:0;
  color:#000;
  background:rgba(255,255,255,0.4);
}
.text-box h2{
  font-size: 16px;line-height: 20px;
  font-weight:normal;
  margin: 3px 0;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.text-box p{
  font-size: 14px;
  line-height: 18px;
  height: 18px;
}
.overmore {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
