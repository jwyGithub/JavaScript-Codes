<template>
  <div class="footer" >
    <router-link to="/home"><i></i><p>首页</p></router-link>
    <router-link to="/item"><i></i><p>分类</p></router-link>
    <router-link to="/search"><i></i><p>搜索</p></router-link>
    <router-link to="/car"><i></i><p>购物车</p></router-link>
    <router-link to="/my"><i></i><p>我的</p></router-link>
  </div>
</template>

<script>
export default {
  data () { return {} },
  components: {},
  mounted () {},
  updated () {},
  methods: {}
}
</script>

<style scoped>
  .footer{
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 99999;
    justify-content: space-around;
    width: 100%;
    background: #e5e5e5;
  }
  .footer a i{
    display: block;
    width: 20px;
    height: 20px;
    background-size: 100%;
    margin: 0 auto;
    margin-bottom: 7px;
    margin-top:7px;
  }
  .footer a p{
    font: 16px/20px "";
  }
  .footer a:nth-child(1) i{
    background-image: url('./imgs/home_b.png')
  }
  .footer a:nth-child(2) i{
    background-image: url('./imgs/browse_list.png')
  }
  .footer a:nth-child(3) i{
    background-image: url('./imgs/search_ico.png')
  }
  .footer a:nth-child(4) i{
    background-image: url('./imgs/cart_b.png')
  }
  .footer a:nth-child(5) i{
    background-image: url('./imgs/member_b.png')
  }
</style>
