<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        error
        background="#eee"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="keywords">
      <h3>热门搜索</h3>
      <div class="keys">
        <a href="javascript:;" v-for="(item,index) in hotlist" :key="index">{{item}}</a>
      </div>
    </div>
    <div class="history">
      <h3>历史记录</h3>
      <div class="keys">
        <a href="javascript:;" v-for="(item,index) in historylist" :key="index">{{item.key}}</a>
      </div>
    </div>
    <a href="javascript:;" class="clear">清空历史</a>
  </div>
</template> 

<script>
export default {
  name: "search",
  data() {
    return {
      value: "",
      hotlist: "",
      historylist: ""
    };
  },
  beforeMount() {
    this.$axios({
      url: `${baseUrl}/api/keywords`
    }).then(res => (this.hotlist = res.data.list));
    this.$axios({
      url: `${baseUrl}/api/history`
    }).then(res => (this.historylist = res.data));
  },
  methods: {
    onSearch() {
      console.log("onSearch");
    },
    onCancel() {
      console.log("onCancel");
    }
  }
};
</script>

<style scoped>
.search {
  background: #f8f8f8;
  height: 100%;
}
.keywords {
  margin-top: 20px;
  margin-bottom: 20px;
}
h3 {
  font-size:20px;  line-height: 40px;

  padding-left: 20px;
}
.keys {
  display: flex;
  flex-wrap: wrap;
}
.keys a {
  display: block;
  padding: 10px 15px;
  font-size: 16px;
  line-height: 18px;
  color: #555;
  border-radius: 20px;
  background-color: #fff;
  border: solid 1px #eee;
  margin: 5px 10px;
}
.clear {
  display: inline-block;
  width: 80%;
  text-align: center;
  /* margin: 0 auto; */
  margin: 40px 0 0 10%;
  background-color: #eee;
  border-radius: 10px;
  font-size: 20px;
  line-height: 50px;
  color: #555;
}
</style>