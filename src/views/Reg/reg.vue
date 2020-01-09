<template>
  <div class="reg">
    <Header title="注册"></Header>
    <p class="reginfo">请填写注册信息</p>
    <van-cell-group>
      <van-field v-model="nickname" clearable label="昵称" placeholder="请输入昵称" />
      <van-field v-model="account" required clearable label="账号" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field center clearable label="头像" placeholder="请上传头像" class="icon"></van-field>
      <van-uploader class="upload" :after-read="afterRead">
        <van-button type="primary" size="small">上传图片</van-button>
      </van-uploader>
      <van-field v-model="sms" center clearable label="验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <input type="button" value="注册" class="regbtn" @click="addreginfo" />

  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";

import { Toast } from "vant";

export default {
  name: "login",
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
    Header
  },
  mounted() {},
  updated() {},
  methods: {
    // 获取上传的文件路径
    afterRead(file) {
      this.icon = file.file;
    },
    addreginfo() {
      let formData = new FormData();
      formData.append("nickname", this.nickname);
      formData.append("account", this.account);
      formData.append("code", this.sms);
      formData.append("password", this.password);

      //   let file = document.getElementById("file");
      //   console.log(file.files[0]);
      formData.append("icon", this.icon);

      this.$axios({
        url: `${baseUrl}/api/reg`,
        method: "post",
        data: formData
      }).then(res => {
        if (res.data.code == 200 && res.data.msg == "注册成功") {
          Toast(res.data.msg);
          this.$router.push({ name: "login" });
        } else {
          Toast(res.data.msg);
        }
      });
    }
  }
};
</script>

<style scoped>
.reginfo {
  font-size: 16px;
  line-height: 50px;
  padding-left: 20px;
}
.icon {
  position: relative;
}

.upload {
  position: absolute;
  bottom: 58px;
  right: 14px;
  z-index: 1;
}
.regbtn {
  padding: 0 20px;
  border: 1px solid gray;
  background: #1989fa;
  display: block;
  width: 80%;
  font-size: 20px;
  line-height: 40px;
  border-radius: 10px;
  margin: 20px auto;
  color: #fff;
  cursor: pointer;
}
</style>
