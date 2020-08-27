<template>
  <div class="public">
    <ul>
      <li v-for="item in data" :key="item.gc_id">
        <a href="javascript:;" class="overonly">{{ item.gc_name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [String, Array],
      default: "",
    },
  },
};
</script>

<style scoped>
.public ul {
  display: flex;
  flex-wrap: wrap;
}
.public ul li {
  width: 50%;
  text-align: center;
  margin: 10px 0;
}
.public ul li a {
  font-size: 16px;
  line-height: 32px;
  background: #eee;
  padding: 10px 20px;
  overflow: hidden;
}
</style>
