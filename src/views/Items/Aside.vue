<template>
  <div class="aside">
    <ul>
      <li>
        <a href="javascript:void(0);" @click="brand">品牌推荐</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="business">商业类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="education">教育类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="build">建筑类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="fashion">时尚类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="art">文体类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="travel">旅游类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="current">时政类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="car">汽车类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="medical">医学类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="technology">科技类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="moive">电影类</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="language">外语杂志</a>
      </li>

      <li>
        <a href="javascript:void(0);" @click="report">行业报告</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "j-aside",
  data() {
    return {};
  },
  methods: {
    business() {
      this.$emit("getList", {
        dataName: "business",
        isShow: "public",
      });
    },
    brand() {
      this.$emit("getList", {
        dataName: "brand",
        isShow: "brand",
      });
    },
    education() {
      this.$emit("getList", {
        dataName: "education",
        isShow: "public",
      });
    },
    build() {
      this.$emit("getList", {
        dataName: "build",
        isShow: "public",
      });
    },
    fashion() {
      this.$emit("getList", {
        dataName: "fashion",
        isShow: "public",
      });
    },
    art() {
      this.$emit("getList", {
        dataName: "art",
        isShow: "public",
      });
    },
    travel() {
      this.$emit("getList", {
        dataName: "travel",
        isShow: "public",
      });
    },
    current() {
      this.$emit("getList", {
        dataName: "current",
        isShow: "public",
      });
    },
    car() {
      this.$emit("getList", {
        dataName: "car",
        isShow: "public",
      });
    },
    medical() {
      this.$emit("getList", {
        dataName: "food",
        isShow: "public",
      });
    },
    technology() {
      this.$emit("getList", {
        dataName: "technology",
        isShow: "public",
      });
    },
    moive() {
      this.$emit("getList", {
        dataName: "movie",
        isShow: "public",
      });
    },
    language() {
      this.$emit("getList", {
        dataName: "languages",
        isShow: "public",
      });
    },
    report() {
      this.$emit("getList", {
        dataName: "report",
        isShow: "public",
      });
    },
  },
};
</script>

<style scoped>
.aside ul {
  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
  transition-duration: 0ms;
  transform: translate(0px) translateZ(0px);
}
.aside ul li {
  padding: 5px 0;
  text-align: center;
  width: 100%;
}
.aside ul li:nth-child(odd) {
  background: #eee;
}
.aside ul li a {
  font-size: 16px;
  line-height: 48px;
  word-wrap: break-word;
}
.aside ul li a:hover {
  color: #ed5564;
  border-bottom: solid 2px #ed5564;
}
</style>
