<template>
  <div class="reg-body">
    <ul>
      <li>
        <input type="text" placeholder="请输入昵称" v-model="nickname" />
      </li>
      <li>
        <input type="text" placeholder="请输入账号" v-model="account" />
      </li>
      <li>
        <input type="password" placeholder="请输入密码" v-model="pwd" />
      </li>
      <li>
        <input type="text" placeholder="请输入验证码" v-model="code" />
      </li>
    </ul>
    <Button button-title="注册" @click.native="reg"></Button>
  </div>
</template>

<script>
import Button from "../../components/Button/Button.vue";
import { Toast } from "vant";
export default {
  name: "RegBody",
  data() {
    return {
      nickname: "",
      account: "",
      pwd: "",
      code: ""
    };
  },
  components: {
    Button
  },
  methods: {
    reg() {
      //  邮箱正则
      let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      // 手机正则
      let telReg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;

      if (mailReg.test(this.account) || telReg.test(this.account)) {
        let formData = new FormData();
        formData.append("nickname", this.nickname);
        formData.append("account", this.account);
        formData.append("code", this.code);
        formData.append("password", this.password);

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
      } else {
        Toast("请输入正确的手机号或邮箱");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.reg-body {
  ul {
    li {
      display: flex;
      width: 70%;
      margin: 10px auto;
      height: 30px;
      font-size: 16px;
      text-align: center;
      input {
        font-size: 18px;
        line-height: 25px;
        width: 100%;
        border: none;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.5);
        text-indent: 10px;
        background: none;
        &:focus {
          border-bottom-color: #66afe9;
          border-bottom-width: 2px;
          outline: 0;
        }
      }
      i {
        width: 70px;
        text-align: center;
        line-height: 25px;
      }
    }
  }
}
</style>