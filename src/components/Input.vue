<template>
  <div class="j-input">
    <h4>{{label}}：</h4>
    <input :type="isPass" :value="value" @input="$emit('input',$event.target.value)" :placeholder=" '请输入' + label"/>
  </div>
</template>

<script>
export default {
  name:"j-input",
  data () { return {} },
  props:{
    value:{
      type:String,
      default:''
    },
    label:{
      type:String,
      default:'标题'
    },
    isPass:{
      type:String,
      default:'text'
    }
  },
  components: {},
  mounted () {},
  updated () {},
  methods: {}
}
</script>

<style scoped>
.j-input{
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
.j-input h4{
  font: .4rem/1.4rem "";
  width: 3rem;
  text-align: center;
}
.j-input input{
    font: .4rem/1rem "";
    border-radius: .2rem;
    border: .01rem solid #000;
    padding: 0 0 0 .5rem;
    width: 67%;
}
</style>
