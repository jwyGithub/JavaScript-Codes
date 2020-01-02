<template>
  <div id="app">
    <!-- <Header/> -->
    <router-view></router-view>
    <div class="footer1"></div>
    <Footer/>
  </div>
</template>
<script>
import Home from '../pages/Home.vue'
// import Header from './header.vue'
import Footer from '../layouts/Footer/Footer'

export default {
  components: {
    Footer
  }
}
</script>
<style scoped>
.footer1{
  height: 5.3rem;
}
</style>
