<template>
  <div class="acclogin">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <Button value="登陆" @click.native="login" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { Toast } from "vant";
export default {
  name: "acclogin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    Button,
    Toast
  },
  methods: {
    login() {
      this.$axios({
        url: `${baseUrl}/api/login`,
        method: "post",
        data: {
          account: this.username,
          password: this.password
        }
      }).then(res => {
        if (res.data.code != 200) {
          // Toast('提示内容');
          Toast(res.data.msg);
        } else {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", this.username);
          // console.log(res.data)
          this.$router.push("/my");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>