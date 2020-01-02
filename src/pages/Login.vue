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
    <Input :label="lables[0].username" v-model="account"/>
    <Input :label="lables[1].password" v-model="password" isPass="password"/>
    <Button value="登陆" @click.native="login"/>
    <div class="loginmsg">{{loginmsg}}</div>
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
      account:"",
      password:"",
      loginmsg:""
    }},
    components:{
      Header,Input,Button
    },
    mounted(){},
    updated(){},
    methods: {
      tel(e){
        e.target.parentElement.className = "sec";
        e.target.parentElement.nextSibling.className = "";
        this.lables[0].username = "手机号";
        this.lables[1].password = "验证码"
      },
      acc(e){
        e.target.parentElement.className = "sec";
        e.target.parentElement.previousSibling.className = "";
        this.lables[0].username = "账号";
        this.lables[1].password = "密码";
        this.account = "";
        this.password = "";
        // 18866478549
      },
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
             this.loginmsg =  res.data.msg
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
  border-bottom: solid 0.05rem #EEE;
  margin-bottom: .3rem;
}
.loginType a span{
  font: .4rem/.8rem "";
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

.sec{
    color:#309AE6;
    border-bottom: solid 0.1rem#309AE6 
}
.loginmsg{
  font: .4rem/1.3rem "";
  text-align: center;
  position: fixed;
  width: 50%;
  top: 50%;
  right: 0;
  left: 0;
  margin: 0 auto;
  background: #eee;
  color: #000;
  border-radius: .3rem;
}
</style>
