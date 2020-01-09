<template>
  <div class="j-header">
    <div class="top">
      <router-link to="/home" class="home">
        <i></i>
      </router-link>
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "j-header",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "登陆"
    }
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {}
};
</script>

<style scoped>
.top {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background: #f8f8f8;
}
.top a.home {
  float: left;
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}
.top p {
  font-size: 20px;
  line-height: 40px;
}
.top a.home i {
  background-image: url("./imgs/home_b.png");
  display: block;
  background-size: 100%;
  width: 20px;
  height: 20px;
}
</style>
