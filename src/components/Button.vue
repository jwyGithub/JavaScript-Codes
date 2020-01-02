<template>
  <div class="button">
    <a href="javascript:;">{{value}}</a>
  </div>
</template>

<script>
export default {
  name:"button",
  data () { return {} },
  props:{
    value:{
      type:String,
      default:"",
      required:true
    }
  },
  components: {},
  mounted () {},
  updated () {},
  methods: {}
}
</script>

<style scoped>
a{
  width: 80%;
  padding: 0;
  margin: 0 auto;
  font-size: 0.5rem;
  line-height: 1.1rem;
  text-align: center;
  color: #888;
  background: #309AE6;
  border: none;
  border-radius: 0.2rem;
  display: block;
  color: #fff;
}
</style>
