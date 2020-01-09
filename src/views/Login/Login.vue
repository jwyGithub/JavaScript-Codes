<template>
  <div class="login">
    <Header></Header>
    <div class="loginType">
      <a href="javascript:;" class="sec" @click=" show = 'TelLogin'">
        <i></i>
        <span>手机登陆</span>
      </a>
      <a href="javascript:;" @click="show = 'AccLogin'">
        <i></i>
        <span>账号密码登陆</span>
      </a>
    </div>
    <component :is="show" class="animated bounceInLeft"></component>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import AccLogin from "./LoginType/AccLogin.vue";
import TelLogin from "./LoginType/TelLogin";

import { Toast } from "vant";

export default {
  name: "login",
  data() {
    return {
      account: "",
      password: "",
      loginmsg: "",
      show: "TelLogin"
    };
  },
  components: {
    Header,
    AccLogin,
    TelLogin
    
  },
  mounted() {},
  updated() {},
  methods: {
    login() {
      this.$axios({
        url: `${baseUrl}/api/login`,
        method: "post",
        data: {
          account: this.account,
          password: this.password
        }
      }).then(res => {
        if (res.data.code != 200) {
          // Toast('提示内容');
          Toast(res.data.msg);
        } else {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", this.username);
          console.log(res.data)
          // this.$router.push("/my");
        }
      });
    }
  }
};
</script>

<style scoped>
/* .v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
} */
.loginType {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
}
.loginType a span {
  font-size: 16px;line-height: 40px;
  margin-left: 25px;
}
.loginType a {
  position: relative;
  line-height: 40px;
}
.loginType a i {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
.loginType a:nth-child(1) i {
  background-image: url("../../assets/img/login-tel.png");
  background-size: 100%;
  margin: auto 0;
}
.loginType a:nth-child(2) i {
  background-image: url("../../assets/img/login-acc.png");
  background-size: 100%;
}
.button {
  font-size:16px;line-height: 32px;
}

.sec {
  color: #309ae6;
  border-bottom: solid 0.1rem#309AE6;
}
</style>
