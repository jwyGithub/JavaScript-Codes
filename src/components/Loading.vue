<template>
  <div class="loading">
    <div class="ciclebox">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="ciclebox">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {}
};
</script>

 <style scoped>
.ciclebox {
  height: 80px;
  width: 80px;
  margin: 100px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.ciclebox p {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #1989fa;
  position: absolute;
  animation: move 1.5s infinite linear;
}
.ciclebox p:nth-of-type(1) {
  left: 0;
  top: 0;
}

.ciclebox p:nth-of-type(2) {
  right: 0;
  top: 0;
}

.ciclebox p:nth-of-type(3) {
  right: 0;
  bottom: 0;
}

.ciclebox p:nth-of-type(4) {
  left: 0;
  bottom: 0;
}

.ciclebox:nth-of-type(2) {
  transform: rotate(45deg);
}
/*缩放设置 同时给p设置 animation 有了缩放效果 在加上时间变化效果完成 */
@keyframes move {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}
/* 加每个的变化 正数位顺时针复数位到时针*/
.ciclebox:nth-of-type(1) p:nth-of-type(1) {
  animation-delay: 0.1s;
}
.ciclebox:nth-of-type(2) p:nth-of-type(1) {
  animation-delay: 0.3s;
}
.ciclebox:nth-of-type(1) p:nth-of-type(2) {
  animation-delay: 0.5s;
}
.ciclebox:nth-of-type(2) p:nth-of-type(2) {
  animation-delay: 0.7s;
}
.ciclebox:nth-of-type(1) p:nth-of-type(3) {
  animation-delay: 0.9s;
}
.ciclebox:nth-of-type(2) p:nth-of-type(3) {
  animation-delay: 1.1s;
}
.ciclebox:nth-of-type(1) p:nth-of-type(4) {
  animation-delay: 1.3s;
}
.ciclebox:nth-of-type(2) p:nth-of-type(4) {
  animation-delay: 1.5s;
}
</style>
