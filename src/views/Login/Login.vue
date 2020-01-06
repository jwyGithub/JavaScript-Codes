<template>
  <div class="login">
    <Header></Header>
    <div class="loginType">
        <a href="javascript:;" class="sec">
          <i></i>
          <span @click="tel" >手机登陆</span>
        </a>
        <a href="javascript:;" >
          <i></i>
          <span @click="acc" >账号密码登陆</span>
        </a>
    </div>
    <!-- <Input :label="lables[0].username" v-model="account"/>
    <Input :label="lables[1].password" v-model="password" isPass="password"/> -->
    <component :is="'AccLogin'"></component>
    <Button value="登陆" @click.native="login"/>
    <!-- <mt-button type="default">登陆</mt-button> -->
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import AccLogin from './LoginType/AccLogin'
import TelLogin from './LoginType/TelLogin'
// import Input from '../components/Input.vue'
import Button from '@/components/Button.vue'
import { Toast } from 'mint-ui';
  export default {
    name:"login",
    data(){return {
      lables:[
        {username:"手机号"},
        {password:"验证码"}
      ],
      account:"",
      password:"",
      loginmsg:""
    }},
    components:{
      Header,Button,AccLogin,TelLogin
    },
    mounted(){},
    updated(){},
    methods: {
      login(){
        this.$axios({
          url: 'http://localhost:3000/api/login',
          method:"post",
          data: {
            account: this.account,
            password: this.password
          }
        }).then(
          res => {
            if(res.data.code != 200){
             Toast({
                message: res.data.msg,
                position: 'middle',
                duration: 2000
             });
            }else{
              localStorage.setItem("token",res.data.token);
              localStorage.setItem("username",this.account);
              this.$router.push("/my")
            }
          }
        )
      }
    }
}
</script>

<style scoped>
.loginType{
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
}
.loginType a span{
  font: 16px/40px "";
  margin-left: 25px;
}
.loginType a{
  position: relative;
  line-height: 40px
}
.loginType a i{
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
.loginType a:nth-child(1) i{
  background-image: url('../../assets/img/login-tel.png');
  background-size: 100%;
  margin: auto 0;
}
.loginType a:nth-child(2) i{
  background-image: url('../../assets/img/login-acc.png');
  background-size: 100%;
}
.button{
  font: 16px/2 "";
}

.sec{
    color:#309AE6;
    border-bottom: solid 0.1rem#309AE6 
}

</style>
