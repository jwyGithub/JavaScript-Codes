<template>
  <div class="carcell" v-if="data.msg != '数据为空'">
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item,index) of data"
          :key="index"
          class="box clearfix"
          @click="toggle(index)"
        >
          <div v-if="item" class="buyinfo">
            <van-checkbox :name="item.id" ref="checkboxes" slot="right-icon" />
            <img :src="item.img" />
            <div class="right">
              <h3>{{item.name}}</h3>
              <p>
                <span>年数：</span>
                {{item.orderYearCount}}
              </p>
              <p>
                <span>起刊日期：</span>
                {{item.startDate}}
              </p>
              <p class="price">
                <span>价格：</span>
                ¥{{item.price}}
              </p>
              <p>
                <van-stepper
                  v-model="item.buyCount"
                  min="1"
                  integer
                  input-width="100px"
                  button-size="25px"
                />
              </p>
            </div>
          </div>
          <p class="subtotal">
            <span>小计:</span>
            ¥ {{item.buyCount * item.price}}元
          </p>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: []
    };
  },
  props: {
    data: {
      type: [String, Array],
      default: ""
    }
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>



<style scoped>
.carcell {
  background: rgba(248, 248, 248, 0.95);
}
.box {
  margin-bottom: 20px;
  padding: 20px 0;
  background: #fff;
}
.buyinfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.van-checkbox {
  margin-left: 15px;
}
.buyinfo input {
  margin: 0 0 0 15px;
}
.buyinfo img {
  width: 100px;
  height: 130px;
  margin: 0 15px 0 0;
}
.buyinfo .right {
  flex: 1;
}
.buyinfo .right h3 {
  font-size: 16px;
  line-height: 32px;
}
.buyinfo .right p {
  font-size: 14px;
  line-height: 28px;
}
.price {
  margin-bottom: 20px;
}
.subtotal {
  /* width: 100%; */
  display: block;
  text-align: right;
  color: #db4453;
  font-size: 18px;
  line-height: 36px;
  padding-right: 20px;
  margin-top: 20px;
}
.subtotal span {
  font-size: 16px;
  line-height: 32px;
  color: #000;
  margin-right: 10px;
}
</style>