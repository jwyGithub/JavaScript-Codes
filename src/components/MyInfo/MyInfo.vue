<template>
  <div class="myinfo">
    <div class="center clearfix">
      <dl>
        <dt class="myorder"><i></i>我的订单</dt>
        <dd class="allorder"><i></i>全部订单</dd>
        <dd class="nopay"><i></i>代付款</dd>
      </dl>
      <dl>
        <dt class="myhave"><i></i>我的财产</dt>
        <dd class="gift"><i></i>礼品卡</dd>
        <dd class="integral"><i></i>积分</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "myinfo",
  data() {
    return {};
  },
  components: {
  },
  mounted() {
  },
  updated() {},
  methods: {}
};
</script>

<style scoped>
.myinfo{
    background: #eee;
}
.myinfo .center{
  display: flex;
  justify-content: space-between;

  margin: .3rem 0;
}
.myinfo .center dl{
  width: 49%;
  background: #fff;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0,0,0,0.05);
  margin: .2rem 0;
}
.myinfo .center dl dt{
  font: .5rem/.6rem "";
  padding: 0.3rem 0.7rem 0.3rem 0;
  margin-left: 0.5rem;
  border-bottom: solid 0.05rem#EEE;
  text-align: center
}
.myinfo .center dl dt i{
  display: inline-block;
  width: .5rem;
  height: .5rem;
  background-size: 100%;
  margin-right: .3rem;
}
.myinfo .center dl .myorder i{
  background-image: url('./img/my-myorder.png');
}
.myinfo .center dl .myhave i{
  background-image: url('./img/my-have.png');
}
.myinfo .center dl dd{
  float: left;
  width: 50%;
  text-align: center;
  margin: .2rem 0;
}
.myinfo .center dl dd i{
  display:block;
  width: .8rem;
  height: .8rem;
  background-size: cover;
  margin: .3rem auto;
}
.myinfo .center dl .allorder i{
  background-image: url('./img/my-allorder.png');
}
.myinfo .center dl .nopay i{
  background-image: url('./img/my-nopay.png')
}
.myinfo .center dl .gift i{
  background-image: url('./img/my-gift.png')
}
.myinfo .center dl .integral i{
  background-image: url('./img/my-integral.png')
}

</style>
