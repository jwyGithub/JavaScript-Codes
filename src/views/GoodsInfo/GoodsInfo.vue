<template>
  <div class="goodsinfo" v-if="datas.goods_info">
    <div class="back" v-show="isShow">
      <a href="javascript:history.go(-1)"></a>
      <h3>{{datas.goods_info.goods_name}}</h3>
    </div>
    <div class="backheight"></div>
    <img :src="datas.goods_image" alt class="good_img" />
    <div class="title">
      <h3>{{datas.goods_info.goods_name}}</h3>
      <span class="price">{{datas.goods_info.goods_price}}/年 【全年/12期】</span>
    </div>
    <div class="discount">
      <span>促销</span>
      <i>满送</i>
      <p>领888元优惠券+满包邮=双重优惠</p>
    </div>
    <ul class="detail">
      <li>
        <span>杂志名称：</span>
        <p>{{datas.goods_info.zazhi_name}}</p>
      </li>
      <li>
        <span>发刊周期：</span>
        <p>{{datas.goods_info.zazhi_cycle}}</p>
      </li>
      <li>
        <span>全年期数：</span>
        <p>{{datas.goods_info.zazhi_items}}</p>
      </li>
      <li>
        <span>出版社：</span>
        <p>{{datas.goods_info.zazhi_public}}</p>
      </li>
      <li>
        <span>刊号：</span>
        <p>{{datas.goods_info.zazhi_ser}}</p>
      </li>
      <li>
        <span>配送次数：</span>
        <p>{{datas.goods_info.zazhi_times}}</p>
      </li>
    </ul>
    <img src="./img/d2s1hdsm.png" alt style="width:100%;margin-top:20px" />
    <h3 class="introduce">商品介绍</h3>
    <div class="introduction">
      <h3>杂志简介</h3>
      <p>《HBRC哈佛商业评论中文版》哈佛商学院标志性刊物，传播工商管理领域中最前沿的思想理论。( Harvard Business Review，简称 HBR )创建于1922年，是哈佛商学院的标志性杂志。建立之初，它的使命就是致力于改进管理实践。发展90年后，HBR已经成为先进管理理念的发源地，致力于给全世界的专业人士提供缜密的管理见解和最好的管理实践，并对他们及其机构产生积极的影响。目前，HBR在全世界有10种语言的11个授权版本,包括在台湾地区发行的繁体字版和2012年7月起在大陆地区出版的简体中文版。</p>
      <h3>杂志社简介</h3>
      <p>作为哈佛大学商学院的附属机构，哈佛商学院出版社更是具有相当强的使命感，从某种程度上来说，哈佛商学院出版社兼具了部分学校的职能作为知识力量的载体，它旨在给最多的人带去最优秀、最前沿的管理理念，让全世界更多无法在哈佛课堂中学习的读者能直接接触哈佛深邃、先进的管理理念和管理知识。</p>
    </div>
    <Add @click.native="showPopup" />
    <!-- prop弹出层  -->
    <van-popup v-model="show" position="bottom" style="height:80% ">
      <div class="top">
        <img :src="datas.goods_image" />
        <div class="top-detail">
          <h3>{{datas.goods_info.goods_name}}</h3>
          <span>¥{{datas.goods_info.goods_price}}</span>
        </div>
      </div>
      <div class="center">
        <ul>
          <li>
            <span>起刊：</span>
            <a
              href="javascript:;"
              v-for="(item,index) in datas.goods_info.goodsqikailist"
              :key="index"
              ref="active"
              @click="secStart(index)"
            >{{item}}</a>
          </li>
          <li>
            <span>订数：</span>
            <a
              href="javascript:;"
              v-for="(n,index) in 3"
              :key="index"
              ref="active2"
              @click="secYear(index)"
            >{{n}}年</a>
          </li>
        </ul>
      </div>

      <div class="buycount">
        <span>购买数量：</span>
        <van-stepper
          v-model="CarGoodInfo.buyCount"
          min="1"
          integer
          input-width="100px"
          button-size="25px"
        />
      </div>
      <ul class="add">
        <li>
          <i></i>
          <span>客服</span>
        </li>
        <li>
          <a href="javascript:;" @click.stop="addCarInfo(CarGoodInfo)">加入购物车</a>
        </li>
        <li>
          <i>
            <em v-show="this.$store.state.count > 0 ? true : false">{{this.$store.state.count}}</em>
          </i>
          <span>购物车</span>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import Add from "../Car/AddCar.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "goodsinfo",
  data() {
    return {
      // 商品详情
      datas: "",
      // 控制header显示
      isShow: true,
      // 监视滚动值控制header显示
      scrollH: "",
      // 弹出层显示控制
      show: false,

      // 存actions的购物车信息
      CarGoodInfo: {
        // 用户
        user: "",
        // 商品id
        id: "",
        // 商品名称
        name: "",
        // 商品图片
        img: "",
        // 商品价格
        price: 0,
        // 起刊日期
        startDate: "",
        // 订数
        orderYearCount: "",
        // 订购数量
        buyCount: 1,
        // 默认勾选
        sec: true
      }
    };
  },
  methods: {
    // 显示popup
    showPopup() {
      this.show = true;
    },
    // 选择开始时间样式
    secStart(index) {
      this.$refs.active.forEach(item => (item.className = ""));
      this.$refs.active[index].className = "active";
      this.CarGoodInfo.startDate = this.$refs.active[index].innerHTML;
    },
    // 选择开始年份样式
    secYear(index) {
      this.$refs.active2.forEach(item => (item.className = ""));
      this.$refs.active2[index].className = "active";
      this.CarGoodInfo.orderYearCount = this.$refs.active2[index].innerHTML;
    },
    ...mapActions(["addCarInfo"])
  },
  components: {
    Add
  },
  beforeMount() {},
  mounted() {
    // 滚动事件
    window.onscroll = () => {
      this.scrollH = document.documentElement.scrollTop;
    };

    // 获取查询详情的商品id
    this.good_id = this.$route.params.id || localStorage.getItem("goodId");
    this.$axios({
      url: `${baseUrl}/api/goodsinfo?id=${this.good_id}`
    }).then(res => {
      //   console.log(res.data.datas.goods_info.goods_name);
      this.CarGoodInfo.id = res.data.goods_id;
      this.CarGoodInfo.img = res.data.datas.goods_image;
      this.datas = res.data.datas;
      this.CarGoodInfo.name = res.data.datas.goods_info.goods_name;
      this.CarGoodInfo.price = res.data.datas.goods_info.goods_price;
    });

    // 购物车中的数据
    this.CarGoodInfo.user = localStorage.getItem("username");
  },
  watch: {
    // 监视滚动值
    scrollH: function(a, b) {
      a > 100 ? (this.isShow = true) : (this.isShow = false);
    }
  }
};
</script>

<style  scoped>
.back {
  position: fixed;
  top: 0;
  height: 40px;
  left: 0;
  background: #f8f8f8;
  width: 100%;
  display: flex;
  align-items: center;
}
.backheight {
  height: 40px;
  margin-bottom: 10px;
}
.back a {
  width: 20px;
  height: 20px;
  background-image: url("./img/arrow_left_b.png");
  background-size: 100%;
  margin-left: 10px;
  cursor: pointer;
}
.back h3 {
  font-size: 20px;
  margin-left: 40px;
}
.goodsinfo {
  background: #f5f5f5;
}

.good_img {
  display: block;
  height: 100%;
  width: 80%;
  margin: 0 auto;
}
.title {
  margin-top: 20px;
  padding-left: 20px;
  background: #fff;
}
.title h3 {
  color: #666;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
}
.title span.price {
  font-size: 20px;
  line-height: 40px;

  color: #db4453;
}
.discount {
  margin-top: 15px;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: solid 1px #eee;
}
.discount span {
  font-size: 16px;
  line-height: 50px;
  color: #888;
}
.discount i {
  vertical-align: top;
  padding: 0 2px;
  margin: 1px 10px 0;
  font-size: 10px;
  color: #fff;
  background: #ed5564;
  border-radius: 3px;
}
.discount p {
  color: #888;
  font-size: 14px;
  line-height: 28px;
}
.detail {
  background: #fff;
  padding-top: 10px;
}
.detail li {
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 35px;
  padding-left: 20px;
}
.detail li p {
  margin-left: 5px;
}
.introduce {
  width: 100%;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
}
.introduction {
  font-size: 18px;
  line-height: 36px;
  margin: 10px 0;
}
.introduction h3 {
  padding: 0 20px;
}
.introduction p {
  text-indent: 32px;
  padding: 0 10px;
  font-size: 14px;
}
.top {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 0 20px 10px 10px;
  border-bottom: solid 1px #eee;
}
.top img {
  width: 30%;
  height: 100%;
}
.top-detail h3 {
  font-size: 18px;
  line-height: 36px;
}
.top-detail span {
  font-size: 16px;
  line-height: 48px;
  color: #db4453;
}
.center {
  border-bottom: solid 1px #eee;
  padding: 20px 0;
}
.center li:nth-child(1) {
  margin-bottom: 20px;
}
.center li {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 28px;
}
.center span {
  width: 20%;
  text-align: center;
}
.center li a {
  flex: 1;
  text-align: center;
  border: 2px solid #999;
  margin: 0 5px;
}
.center ul li a.active {
  border-color: red;
  color: red;
}
.buycount {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
}
.buycount span {
  font-size: 16px;
  line-height: 32px;
}

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
  position: relative;
  bottom: 0;
}
.add li:nth-child(1) {
  flex: 1;
  text-align: center;
  padding-top: 5px;
}
.add li:nth-child(2) {
  flex: 3;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
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
.add li:nth-child(3) {
  cursor: pointer;
}
.add li:nth-child(3) i em {
  position: absolute;
  color: #ed5564;
  text-align: center;
  font-weight: 600px;
  font-size: 12px;
  line-height: 14px;
  width: 14px;
  border: solid 1px #ed5564;
  border-radius: 50%;
  z-index: 1;
  background: #fff;
}
</style>