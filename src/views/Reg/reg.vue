<template>
  <div class="reg">
    <Header header-title="注册"></Header>
    <div class="reg-wel">
      <p>欢迎来到图书馆</p>
      <Logo></Logo>
    </div>
    <RegBody></RegBody>
  </div>
</template>

<script>
import Header from "../../components/Header/PublicHeader";
import Logo from "../Login/LoginLogo";
import RegBody from "./RegBody";

export default {
  name: "Reg",
  data() {
    return {
      nickname: "",
      account: "",
      password: "",
      sms: "",
      icon: ""
    };
  },
  components: {
    Header,
    Logo,
    RegBody
  }
};
</script>

<style lang="scss" scoped>
.reg {
  height: 100%;

  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("../Login/img/bg.jpeg") no-repeat 0% 20% / cover;
  overflow-y: hidden;
  .reg-wel {
    padding: 20px 0;
    p {
      font-size: 20px;
      line-height: 25px;
      margin-left: 20px;
    }
  }
}
</style>