<template>
  <div class="lists">
    <div class="header">
      <a href="javascript:history.go(-1)" class="back"></a>
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          error
          clearable
          background="#eee"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <a href="/wap/category" class="categroy">
        <i></i>
      </a>
      <a id="header-nav" href="javascript:void(0);">
        <i class="more"></i>
        <sup></sup>
      </a>
    </div>

    <Cell :data="Lists" v-on:getDetail="getDetail" />
  </div>
</template>

<script>
import Cell from "../../../components/Cell/Cell.vue";

export default {
  name: "lists",
  data() {
    return {
      Lists: "",
      value: ""
    };
  },
  components: {
    Cell
  },
  methods: {
    onSearch() {
      console.log("onSearch");
    },
    onCancel() {
      console.log("onCancel");
    },
    // 获取商品详情
    getDetail(id) {
      this.$router.push({
        name: "info",
        params: {
          id: id
        }
      });
      localStorage.setItem("goodId", this.$route.params.id);
    }
  },
  mounted() {
    this.$axios({
      url: `http://wssd.f3322.net:13140/api/list/${this.$route.params.type}?dataName=${this.$route.params.type}`
    }).then(res => (this.Lists = res.data.list));
  }
};
</script>


<style scoped>
.lists .header {
  display: flex;
  align-items: center;
  height: 60px;
  background: #eee;
}
.back {
  width: 25px;
  height: 25px;
  background-image: url("./img/back.png");
  background-size: cover;
  margin-right: 10px;
  margin-left: 20px;
}

.goods-search-list-nav {
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: solid 1px #eee;
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
}
</style>