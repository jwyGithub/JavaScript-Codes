<template>
  <div class="lists">
    <div class="header">
      <a href="javascript:history.go(-1)" class="back"></a>
      <!-- <form>
                <i></i>
                <input type="text" placeholder="请输入杂志关键词">
      </form>-->
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

    <Cell :data="Lists" />
  </div>
</template>

<script>
import Cell from "../../layouts/Cell/Cell.vue";

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
    }
  },
  mounted() {
    this.$axios({
      url: `http://localhost:3000/api${this.$route.path}`
    }).then(res => (this.Lists = res.data.data));
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