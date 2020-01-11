<template>
  <div id="app">
    <Loading v-show="$store.state.lodingStatus" />
    <transition>
      <router-view></router-view>
    </transition>
    <!-- <div class="footer"></div> -->
    <Footer v-show="isAddcar" />
  </div>
</template>
<script>
import Home from "./views/Home/Home.vue";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading";

export default {
  name: "app",
  data() {
    return {
      isAddcar: true
    };
  },
  components: {
    Footer,
    Loading
  },
  watch: {
    $route() {
      if (/info/.test(this.$route.path)) {
        this.isAddcar = false;
      } else {
        this.isAddcar = true;
      }
    }
  }
};
</script>
<style scoped>
#app {
  height: 100%;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
