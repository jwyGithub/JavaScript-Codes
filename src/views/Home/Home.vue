<template>
  <div class="home">
    <Banner />
    <Nav />
    <img src="" alt="" class="lq" />
    <List :data="list" />
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Nav from "./Nav/Nav.vue";
import List from "../Home/List.vue";
export default {
  name: "home",
  data() {
    return {
      list: [],
    };
  },
  components: {
    Banner,
    Nav,
    List,
  },
  mounted() {
    this.$axios({
      url: `${baseUrl}/api/home`,
    }).then((res) => (this.list = res.data.data));
  },
  updated() {},
  methods: {},
};
</script>

<style scoped>
.lq {
  width: 100%;
}
</style>
