<template>
  <div class="my">
    <UserInfo :status="this.status" />
    <MyInfo />
    <ul>
      <li>
        <a href="javascript:;">
          <i></i>
          <p>订单状态查询</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i></i>
          <p>售后服务</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i></i>
          <p>用户设置</p>
        </a>
      </li>
    </ul>
    <div class="nav-text">
      <router-link to="/login">登陆</router-link>
      <router-link to="/reg">注册</router-link>
      <a href="javascript:void(0);" class="gotop">返回顶部</a>
    </div>
  </div>
</template>

<script>
import UserInfo from "../components/UserInfo/UserInfo.vue";
import MyInfo from "../components/MyInfo/MyInfo.vue";
export default {
  name: "my",
  data() {
    return {
      status: "点击登陆"
    };
  },
  components: {
    UserInfo,
    MyInfo
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      let username = localStorage.getItem("username");
      this.status = username;
    }
  },
  updated() {},
  methods: {}
};
</script>

<style scoped>
.my ul li a {
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  border-bottom: solid 1px #eee;
  padding: 0 10px;
}
.my ul li a i {
  width: 30px;
  height: 30px;
  background-size: cover;
}
.my ul li:nth-child(1) a i {
  background-image: url("../assets/img/my-orderstatus.png");
}
.my ul li:nth-child(2) a i {
  background-image: url("../assets/img/my-afterservice.png");
}
.my ul li:nth-child(3) a i {
  background-image: url("../assets/img/my-setting.png");
}
.my ul li p {
  font: 18px/2.2 "";
  margin: 0 5px;
}
</style>
