<template>
  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Home from './views/Home/Home.vue'
import Footer from './components/Footer/Footer'

export default {
  components: {
    Footer
  }
}
</script>
<style scoped>

</style>
