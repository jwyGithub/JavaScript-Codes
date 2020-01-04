<template>
  <div class="cell" @click="getDetail">
      <li v-for="item in data" :key="item._id">
        <a href="javascript:;">
          <img :src="item.goods_image_url" alt="">
          <div class="con">
            <h3 class="overonly">{{item.goods_name}}</h3>
            <h6 class="overmore">{{item.goods_jingle}}</h6>
            <span>¥ {{item.goods_price}}</span>
            <p>{{item.store_name}}</p>
          </div>
        </a>
      </li>
  </div>

</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    data: {
      type: [Object,Array,String],
      default: function () {
        return {}
      }
    },
    index: {
      type: Number,
      default: null
    },
    isJump: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  beforeMount () {
  },
  mounted () {},
  updated () {},
  methods: {
    getDetail () {
      this.isJump && this.$router.push('/detail/' + this.data._id + '?dataName=' + this.dataName)
    }
  }
}
</script>

<style >
.cell li {
  margin: 10px 0;
}
.cell li a{
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
}
.cell li a img{
  width: 120px;
  height: auto;
  vertical-align: middle
}
.cell li a .con{
  padding-left: 5px;
  flex: 3
}
.cell li a .con h3{
  color: #111;
  font: 16px/2 "";
  width: 100%;
}
.cell li a .con h6{
  width: 100%;
  font: 12px/30px "";
}
.cell li a .con span{
  color:#EC5464;
  font: 20px/20px "";
  padding-left: 3px;
  display: block;
  margin-top: 13px
}
.cell li a .con p{
  float: right;
  padding-right: 3px;
  overflow: hidden;
}
</style>
