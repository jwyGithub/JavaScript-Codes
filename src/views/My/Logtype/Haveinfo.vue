<template>
  <div class="logout">
    <input type="button" value="注销" @click="logout" />
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.logout{
  margin: 0 auto;
  width: 50%;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
  margin-top: 30px;
}
.logout input{
  cursor: pointer;
  width: 50%;
  font-size: 16px;
  padding: 5px 20px;
  border: none;
  background: none;

}
</style>