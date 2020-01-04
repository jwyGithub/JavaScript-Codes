<template>
  <div class="userinfo">
    <div class="member-top">
      <div class="member-info clearfix">
        <a href="javascript:;" class="default-avatar" style="display:block;"></a>
        <a href="javascript:;" class="to-login" @click="login">{{status}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {};
  },
  props: {
    status: {
      type: [String, Number],
      default: "点击登陆"
    }
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    login() {
      if (this.status != "点击登陆") {
        return;
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped>
.member-top {
  background-color: #ed5564;
  background-image: url(/wap/images/member_top_bg.png);
  background-size: cover;
  text-align: center;
  width: 100%;
}
.member-info .default-avatar {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("./img/default.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 100%;
  margin-top: 20px;
}

.member-info .to-login {
  color: #fff;
  font: 26px/60px "";
}
</style>
