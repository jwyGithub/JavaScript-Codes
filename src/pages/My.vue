<template>
  <div class="my">
    <div class="member-top">
      <div class="member-info">
        <a href="login" class="default-avatar" style="display:block;"></a>
        <router-link to="/login" class="to-login">点击登陆</router-link>
      </div>
      <div class="member-collect">
        <span>
          <a href="login">
            <i class="favorite-goods"></i>
            <p>商品收藏</p>
          </a>
        </span>
        <span>
          <a href="login">
            <i class="favorite-store"></i>
            <p>店铺收藏</p>
          </a>
        </span>
        <span>
          <a href="login">
            <i class="goods-browse"></i>
            <p>我的足迹</p>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {}
};
</script>

<style scoped>
.member-top {
    animation: changeBg 20s infinite;
    background-color: 
    #ED5564;
    background-image: url(/wap/images/member_top_bg.png);
    background-size: cover;
    text-align: center;
    width: 100%;
    height: 7rem;
    position: relative;
    z-index: 1;
}
.member-info {
    width: 12rem;
    height: 6rem;
    margin: -3.5rem 0 0 -6rem;
    position: absolute;
    z-index: 1;
    top: 69%;
    left: 50%;
    animation: memberInfoDown 1000ms ease-in;
    -webkit-animation: memberInfoDown 1000ms ease-in;}
  
  .member-info .default-avatar {
    background-color: 
rgba(0,0,0,0.5);
background-image: url(/wap/images/member_w.png);
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: 60%;
width: 4rem;
height: 4rem;
margin: 0 auto;
border-radius: 100%;}

.member-info .to-login {
    font-size: 0.8rem;
    color: 
#FFF;
line-height: 1rem;
height: 1rem;
margin: 0.25rem auto}
</style>
