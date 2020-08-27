<template>
  <div class="item clearfix">
    <div>
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
    </div>
    <div class="left">
      <aside>
        <Aside v-on:getList="getList" />
      </aside>
    </div>
    <article>
      <Article :data="list" :isShow="isShow" />
    </article>
  </div>
</template>

<script>
import Aside from "./Aside";

import Article from "./Article";
export default {
  name: "item",
  data() {
    return {
      list: "",
      isShow: "brand",
      value: "",
    };
  },
  components: {
    Article,
    Aside,
  },
  mounted() {},
  updated() {},
  methods: {
    getList(type) {
      this.isShow = type.isShow;
      this.$axios({
        url: `${baseUrl}/api/item?dataName=${type.dataName}`,
      }).then((res) => (this.list = res.data.list));
    },
    onSearch() {
      console.log("onSearch");
    },
    onCancel() {
      console.log("onCancel");
    },
  },
};
</script>

<style scoped>
.item .left {
  height: 100%;
  overflow: hidden;
  position: fixed;
  width: 30%;
  left: -17px;
}
.item aside {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: -17px;
  overflow: scroll;
}
article {
  width: 70%;
  position: fixed;
  right: 0;
  top: 50px;
  height: 100%;
  overflow: auto;
}
</style>
