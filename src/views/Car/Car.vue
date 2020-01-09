<template>
  <div class="car">
    <div class="hei" style="height:40px"></div>
    <van-nav-bar title="购物车" :fixed="true" left-text="返回" left-arrow @click-left="onClickLeft" />
    <Cell :data="data" ref="checkboxGroup"/>
  </div>
</template>

<script>
import Cell from "./CarCell.vue";
export default {
  name: "car",
  data() {
    return {
      data: ""
    };
  },
  components: {
    Cell
  },
  mounted() {
    let user = localStorage.getItem("username");

    let localdata = localStorage.getItem("CarGoodInfo");
    let statedata = this.$store.state.goodsinfo;

    if (statedata.length > 0) {
      this.data = statedata;
    } else if (localdata && JSON.parse(localdata).length > 0) {
      this.data = JSON.parse(localdata);
    } else {
      this.$axios({
        url: `${baseUrl}/api/carinfo?user=${user}`
      }).then(res => {
        this.data = res.data.carinfo;
      });
    }
  },
  updated() {},
  methods: {
    onClickLeft() {
      history.go(-1);
    }
  }
};
</script>

<style scoped>
</style>
