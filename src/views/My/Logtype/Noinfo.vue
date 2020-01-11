<template>
  <div class="haveinfo">
    <div class="nav-text">
      <router-link to="/login">登陆</router-link>
      <router-link to="/reg">注册</router-link>
    </div>
  </div>
</template>


<style scoped>
.nav-text {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.nav-text a{
    width: 40%;
    border: 1px solid #000;
    text-align: center;
    margin: 0 10px;
    font-size: 16px;
    line-height: 35px;
    border-radius: 10px;
}


</style>