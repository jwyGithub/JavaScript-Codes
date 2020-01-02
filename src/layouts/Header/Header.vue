<template>
  <div class="j-header">
    <div class="top">
      <router-link to="/home" class="home"><i></i></router-link>
      <p>登陆</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"j-header",
  data () {
    return {}
  },
  components: {},
  mounted () {},
  updated () {},
  methods: {

  }
}
</script>

<style scoped>
.top{
  display: block;
  width: 100%;
  height: 20%;
  margin: 0 auto;
  text-align: center;
  background: #F8F8F8;
}
.top a.home{
  float: left;
  display: block;
  margin: auto 0;
}
.top p{
  font-size: 0.6rem;
  line-height: 1.2rem;
}
.top a.home i{
  background-image: url('./imgs/home_b.png');
  display: block;
  background-size: 100%;
  width: .5rem;
  height: .5rem;
}
</style>
