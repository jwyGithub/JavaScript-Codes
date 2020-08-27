<template>
  <div class="login-body">
    <section>
      <!-- 账号密码输入区域 -->
      <ul>
        <li>
          <input
            type="text"
            class="account"
            placeholder="手机/邮箱"
            v-model="acc"
          />
        </li>
        <li>
          <input type="password" class="pwd" placeholder="密码" v-model="pwd" />
        </li>
      </ul>
      <!-- 忘记密码-->
      <a href="javascript:;" class="forget">忘记密码？</a>
      <!-- 第三方登陆 -->
      <div class="third">
        <a href="javascript:;" class="qq">
          <i></i>
          <span>QQ</span>
        </a>
        <a href="javascript:;" class="wechat">
          <i></i>
          <span>微信</span>
        </a>
      </div>
      <Button button-title="登陆" @click.native="login"></Button>
    </section>
  </div>
</template>
<script>
import { Toast } from "vant";
import Button from "../../components/Button/Button";
export default {
  name: "LoginBody",
  data() {
    return {
      acc: "",
      pwd: "",
    };
  },
  components: {
    Button,
  },
  methods: {
    //  登陆
    login() {
      //  邮箱正则
      let mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      // 手机正则
      let telReg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
      if (!mailReg.test(this.acc) || !telReg.test(this.acc)) {
        this.$axios({
          url: `${baseUrl}/api/login`,
          method: "post",
          data: {
            account: this.acc,
            password: this.pwd,
          },
        }).then((res) => {
          if (res.data.code == 200 && res.data.msg == "登陆成功") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", this.acc);
            this.$router.push({ name: "my" });
          } else {
            Toast(res.data.msg);
          }
        });
      } else {
        Toast("请输入正确的邮箱或者手机号");
      }
    },
  },
};
</script>

<style lang="scss">
.login-body {
  height: 100%;
  padding-top: 15px 0;
  section {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      li {
        text-align: center;
        width: 100%;
        height: 50px;
        margin: 5px 0;
        input {
          font-size: 18px;
          line-height: 40px;
          width: 70%;
          background: none;
          border: none;
          border-bottom: 1px solid rgba($color: #000000, $alpha: 0.5);
          text-indent: 10px;
          &:focus {
            border-bottom-color: #66afe9;
            border-bottom-width: 2px;
            outline: 0;
          }
        }
      }
    }
    .forget {
      position: absolute;
      right: 15%;
    }
    .third {
      margin-top: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a {
        text-align: center;
        i {
          display: block;
          width: 25px;
          height: 25px;
          margin: 0 auto;
          margin-bottom: 3px;
          background-size: cover;
        }
        &:nth-child(1) {
          i {
            background-image: url("./img/qq.png");
          }
        }
        &:nth-child(2) {
          i {
            background-image: url("./img/wechat.png");
          }
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
