<template>
  <div class="home">
    <Banner/>
    <Nav/>
    <img src="../assets/img/lq.png" alt="" class="lq">
    <List :data='list'/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Nav from '../layouts/Nav/Nav.vue'
import List from '../components/List'
export default {
  name:"home",
  data () {
    return {
      list: []
    }
  },
  components: {
    Banner,
    Nav,
    List
  },
  mounted () {
    this.$axios({
      url: 'http://localhost:3000/api/home'
    }).then(
      res => this.list = res.data.data
    )
  },
  updated () {},
  methods: {

  }
}
</script>

<style scoped>
.lq{
  width: 100%;
}
</style>
