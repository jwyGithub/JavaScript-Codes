<template>
  <div class="tellogin">
    <van-cell-group>
      <van-field v-model="username" label="手机号" placeholder="请输入手机号" required />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" required>
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <Button value="登陆" @click.native="login" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { Toast } from "vant";
export default {
  name: "tellogin",
  data() {
    return {
      username: "",
      sms: ""
    };
  },
  components: {
    Button,Toast
  },
  methods: {
    login() {
      this.$axios({
        url: "http://wssd.f3322.net:13140/api/login",
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
          localStorage.setItem("username", this.account);
          this.$router.push("/my");
        }
      });
    }
  }
};
</script>