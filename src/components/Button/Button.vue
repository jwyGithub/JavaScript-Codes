<template>
  <div class="public-button">
    <div class="btn">
      <input type="button" :value="buttonTitle" id="login" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicButton",
  props: {
    buttonTitle: {
      type: String,
      default: "登陆",
    },
  },
};
</script>

<style lang="scss" scoped>
.public-button {
  .btn {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    input {
      width: 70%;
      font-size: 16px;
      line-height: 30px;
      background: none;
      border: 1px solid rgba($color: #1989fa, $alpha: 0.9);
      border-radius: 10px;
      color: #000;
      cursor: pointer;
      box-shadow: 3px 3px 1px rgba($color: #000, $alpha: 0.1);
      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 0 6px #999;
        transition: all 0.2s ease-out;
      }
    }
  }
}
</style>
