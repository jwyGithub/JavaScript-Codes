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
        dataName: "Business",
        isShow: "public"
      });
    },
    brand() {
      this.$emit("getList", {
        dataName: "Brand",
        isShow: "brand"
      });
    },
    education() {
      this.$emit("getList", {
        dataName: "Education",
        isShow: "public"
      });
    },
    build() {
      this.$emit("getList", {
        dataName: "Build",
        isShow: "public"
      });
    },
    fashion() {
      this.$emit("getList", {
        dataName: "Fashion",
        isShow: "public"
      });
    },
    art() {
      this.$emit("getList", {
        dataName: "Art",
        isShow: "public"
      });
    },
    travel() {
      this.$emit("getList", {
        dataName: "Travel",
        isShow: "public"
      });
    },
    current() {
      this.$emit("getList", {
        dataName: "Current",
        isShow: "public"
      });
    },
    brand() {
      this.$emit("getList", {
        dataName: "Brand",
        isShow: "brand"
      });
    },
    car() {
      this.$emit("getList", {
        dataName: "Car",
        isShow: "public"
      });
    },
    medical() {
      this.$emit("getList", {
        dataName: "Medical",
        isShow: "public"
      });
    },
    technology() {
      this.$emit("getList", {
        dataName: "Technology",
        isShow: "public"
      });
    },
    moive() {
      this.$emit("getList", {
        dataName: "Movie",
        isShow: "public"
      });
    },
    language() {
      this.$emit("getList", {
        dataName: "Languages",
        isShow: "public"
      });
    },
    report() {
      this.$emit("getList", {
        dataName: "Report",
        isShow: "public"
      });
    }
  }
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
  font: 16px/3 "";
  word-wrap: break-word;
}
.aside ul li a:hover {
  color: #ed5564;
  border-bottom: solid 2px #ed5564;
}
</style>