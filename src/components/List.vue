<template>
  <div class="list">
    <div v-for="(item,index) in data" :key="index">
      <h3><img src="./s0_05646744256521730.png" alt=""></h3>
      <ul class="top">
        <li class="main">
          <a>
            <img :src="item.main" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img :src="item.top1img" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img :src="item.top2img" alt="">
          </a>
        </li>
      </ul>
      <ul class="bottom">
        <li v-for="(item,index) in item.otherimg" :key="index">
          <a href="javascript:;">
            <img :src="item" alt="">
          </a>
        </li>
      </ul>
      </div>
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
      type: [Object,Array],
      default: function () {
        return {}
      }
    },
    dataName: {
      type: String,
      default: null
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

<style scoped>
.list h3 img{
  width: 100%;
  border-bottom: .01rem solid #eee;
}
ul.top{
  overflow: hidden;
  border-bottom: .01rem solid #eee;
}
ul li{
  float: left;
  width: 50%
}
ul.top li a{
  display: block;
  width: 100%
}
ul li a img{
  width: 100%;
}


</style>
