<template>
  <div class="cell" @click="getDetail">
      <h2>
          <span v-show="index!=null">{{index + 1}}.</span>
          {{data.sub_title}}
      </h2>
    <p>{{data.title}}</p>
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
      type: Object,
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

<style >
  .cell{
    display: flex;
    flex-direction: column;
    padding-left: .3rem;
    border-bottom: .01rem solid gray
  }
  .cell h2{
    font: .2rem/.6rem "";
  }
  .cell p{
    text-indent: .2rem;
    margin-bottom: .1rem
  }
</style>
