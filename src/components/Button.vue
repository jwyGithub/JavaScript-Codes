<template>
  <div class="j-button">
    <a href="javascript:;">{{ value }}</a>
  </div>
</template>

<script>
export default {
  name: "j-button",
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: "",
      required: true,
    },
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<style scoped>
.j-button {
  margin: 0.5rem 0;
}
a {
  width: 80%;
  padding: 0;
  margin: 0 auto;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #888;
  background: #309ae6;
  border: none;
  border-radius: 0.2rem;
  display: block;
  color: #fff;
}
</style>
