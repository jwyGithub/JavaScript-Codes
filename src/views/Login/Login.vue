<template>
  <div class="login">
    <Header header-title="登陆"></Header>
    <LoginLogo></LoginLogo>
    <LoginBody></LoginBody>
  </div>
</template>

<script>
import Header from "../../components/Header/PublicHeader";
import LoginLogo from "./LoginLogo";
import LoginBody from "./LoginBody";

export default {
  name: "Login",
  components: {
    Header,
    LoginLogo,
    LoginBody,
  },
  mounted() {},
};
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("./img/bg.jpeg") no-repeat 0% 20% / cover;
  overflow-y: hidden;
}
</style>
