<template>
  <div class="userinfo">

  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      icon:"",
      nickname:""
    };
  },
  props: {
    user: {
      type: [String, Number],
      default: "点击登陆"
    }
  },
  components: {},
  mounted() {
    let username = localStorage.getItem("username");
    if (!username) {
      return false;
    } else {
      this.$axios({
        url: `${baseUrl}/api/info?account=${username}`
      }).then(res => {
        this.nickname = res.data.nickname;
        this.icon = `${baseUrl}${res.data.icon}`
      });
    }
  },
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
  /* background-image: url(/wap/images/member_top_bg.png); */
  background-size: cover;
  text-align: center;
  width: 100%;
}
.icon{
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.member-info .default-avatar {
  background-color: rgba(0, 0, 0, 0.5);
  /* background-image: url("./img/default.png"); */
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 100%;
  margin-top: 25px;
}

.member-info .to-login {
  color: #fff;
  font-size: 26px;
  line-height: 60px;
}
</style>
