<template>
  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Home from '../pages/Home.vue'
import Footer from '../layouts/Footer/Footer'

export default {
  components: {
    Footer
  }
}
</script>
<style scoped>

</style>
