<template>
  <div class="public-footer">
    <section>
      <router-link to="/home" active-class="active">
        <i></i>
        <p>首页</p>
      </router-link>
      <router-link to="/item" active-class="active">
        <i></i>
        <p>分类</p>
      </router-link>
      <router-link to="/search" active-class="active">
        <i></i>
        <p>搜索</p>
      </router-link>
      <router-link to="/car" active-class="active">
        <i></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/my" active-class="active">
        <i></i>
        <p>我的</p>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "public-footer",
  data() {
    return {
      active: 0,
    };
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.public-footer {
  section {
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 99999;
    justify-content: space-around;
    width: 100%;
    background: #eee;
    padding: 3px 0;
    a {
      color: #000;
      &:nth-child(1) {
        i {
          background-image: url("./imgs/home.png");
        }
      }
      &:nth-child(2) {
        i {
          background-image: url("./imgs/item.png");
        }
      }
      &:nth-child(3) {
        i {
          background-image: url("./imgs/search.png");
        }
      }
      &:nth-child(4) {
        i {
          background-image: url("./imgs/car.png");
        }
      }
      &:nth-child(5) {
        i {
          background-image: url("./imgs/my.png");
        }
      }
      i {
        display: block;
        width: 20px;
        height: 20px;
        margin: 5px auto;
        background-size: cover;
      }
    }
  }
  .active {
    color: #1296db;
  }
}
</style>
