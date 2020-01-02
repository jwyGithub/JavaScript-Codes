<template>
  <div class="login">
    <Header></Header>
    <div class="loginType">
        <a href="javascript:;">
          <i></i>
          <span @click="tel">手机登陆</span>
        </a>
        <a href="javascript:;">
          <i></i>
          <span @click="acc">账号密码登陆</span>
        </a>
    </div>
    <Input :label="lables[0].username" v-model="username"/>
    <Input :label="lables[1].password" v-model="password" isPass="password"/>
    <Button value="登陆" @click.native="login"/>
  </div>
</template>

<script>
import Header from '../layouts/Header/Header.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
  export default {
    name:"login",
    data(){return {
      lables:[
        {username:"手机号"},
        {password:"验证码"}
      ],
      username:"",
      password:""
    }},
    components:{
      Header,Input,Button
    },
    mounted(){},
    updated(){},
    methods: {
      tel(){
        this.lables[0].username = "手机号";
        this.lables[1].password = "验证码"
      },
      acc(){
        this.lables[0].username = "账号";
        this.lables[1].password = "密码";
        this.username = "";
        this.password = "";
      },
      login(){
        console.log(111)
      }
    }
}
</script>

<style scoped>
.loginType{
  display: flex;
  justify-content: space-around;
  border-bottom: solid 0.05rem #EEE;
  margin-bottom: .3rem;
}
.loginType a span{
  font: .5rem/1rem "";
  margin-left: .6rem;
}
.loginType a{
  position: relative;
  line-height: 1.5rem
}
.loginType a i{
  position: absolute;
  width: .5rem;
  height: .5rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
.loginType a:nth-child(1) i{
  background-image: url('../assets/img/login-tel.png');
  background-size: 100%;
  margin: auto 0;
}
.loginType a:nth-child(2) i{
  background-image: url('../assets/img/login-acc.png');
  background-size: 100%;
}
.button{
  margin: .8rem 0;
}
</style>
