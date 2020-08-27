<template>
  <div class="article">
    <component :is="isShow" :data="data"></component>
  </div>
</template>

<script>
import Brand from "./Brand/Brand";
import Public from "./Public";

export default {
  name: "j-article",
  data() {
    return {
      show: "Public",
    };
  },
  props: {
    data: {
      type: [String, Array],
      default: "",
    },
    isShow: {
      type: String,
      default: "",
    },
  },
  components: {
    Brand,
    Public,
  },
};
</script>

<style scoped></style>
