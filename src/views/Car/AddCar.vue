<template>
  <div class="addcar">
    <ul class="add">
      <li>
        <i></i>
        <span>客服</span>
      </li>
      <li>
        <a href="javascript:;">加入购物车</a>
      </li>
      <li>
        <i>
          <em v-show="this.$store.state.count > 0 ? true : false">{{this.$store.state.count}}</em>
        </i>
        <span>购物车</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "addcar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style  scoped>
.addcar {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  background: rgba(245, 245, 245, 0.95);
  width: 100%;
}
.add {
  display: flex;
  width: 100%;
}
.add li:nth-child(1) {
  flex: 1;
  text-align: center;
  padding-top: 5px;
}
.add li:nth-child(2) {
  flex: 3;
  text-align: center;
  font-size: 20px;line-height: 50px;
  background: #fb6e52;
}
.add li:nth-child(2) a {
  color: #fff;
}
.add li:nth-child(3) {
  flex: 1;
  text-align: center;
  padding-top: 5px;
}
.add li i {
  display: block;
  margin: 0 auto;
  width: 25px;
  height: 25px;
  background-image: url("../GoodsInfo/img/heart_kefu.png");
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: cover;
  opacity: 0.65;
}
.add li:nth-child(3) i {
  background-image: url("../GoodsInfo/img/heart_flow.png");
  position: relative;
}
.add li:nth-child(3) i em {
  position: absolute;
  color: #ed5564;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  width: 14px;
  border: solid 1px #ed5564;
  border-radius: 50%;
  z-index: 1;
  background: #fff;
}
</style>