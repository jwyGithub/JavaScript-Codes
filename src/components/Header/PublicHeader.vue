<template>
  <div class="public-header">
    <section>
      <a href="javascript:;" @click="back"></a>
      <h3>{{headerTitle}}</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: "PublicHeader",
  props: {
    headerTitle: {
      type: String,
      default: ""
    }
  },
  methods: {
    back() {
      history.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.public-header {
  background: rgba($color: #000000, $alpha: 0.1);
  section {
    position: relative;
    a {
      background-image: url("./imgs/back.png");
      background-size: cover;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      left: 10px;
      bottom: 0;
      margin: auto 0;
    }
    h3 {
      width: 100%;
      text-align: center;
      font: 18px/2.2 "";
    }
  }
}
</style>