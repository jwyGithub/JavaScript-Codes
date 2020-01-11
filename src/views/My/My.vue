<template>
  <div class="my">
    <div class="member-top">
      <div class="member-info clearfix">
        <a href="javascript:;" class="default-avatar" style="display:block;">
          <img :src="icon" alt class="icon" />
        </a>
        <a href="javascript:;" class="to-login">{{user}}</a>
      </div>
    </div>
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
    <component :is="show"></component>
  </div>
</template>

<script>
import MyInfo from "./MyInfo/MyInfo.vue";
import Haveinfo from "./Logtype/Haveinfo";
import Noinfo from "./Logtype/Noinfo";
export default {
  name: "my",
  data() {
    return {
      isShow: true,
      user: "",
      icon: "",
      show: "Noinfo"
    };
  },
  components: {
    MyInfo,
    Noinfo,
    Haveinfo
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.user = "请登录";
    } else {
      let username = localStorage.getItem("username");
      // if (!username) {
      //   return false;
      // } else {
      this.$axios({
        url: `${baseUrl}/api/info?account=${username}`
      }).then(res => {
        this.show = "Haveinfo";
        this.user = res.data.nickname;
        this.icon = `${baseUrl}${res.data.icon}`;
      });
      // }
    }
  },
  updated() {},
  methods: {}
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
.icon {
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
  height: 60px;
  display: block;
}
.my ul li {
  margin: 5px 0;
}
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
  background-image: url("../../assets/img/my-orderstatus.png");
}
.my ul li:nth-child(2) a i {
  background-image: url("../../assets/img/my-afterservice.png");
}
.my ul li:nth-child(3) a i {
  background-image: url("../../assets/img/my-setting.png");
}
.my ul li p {
  font-size: 18px;
  line-height: 39.6px;
  margin: 0 10px;
}
.copyright {
  text-align: center;
  margin-top: 100px;
}
.copyright p {
  font-size: 12px;
  line-height: 24px;
}
</style>
