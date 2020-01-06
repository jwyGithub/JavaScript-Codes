<template>
  <div class="brand">
    <ul>
      <li v-for="item in list" :key="item._id">
        <a href="javascript:;">
          <img v-lazy="item.brand_pic" />
          <p>{{item.brand_name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "brand",
  data() {
    return {
      list: ""
    };
  },
  beforeMount() {
    this.$axios({
      url: `http://localhost:3000/api/item?dataName=brand`
    }).then(res => (this.list = res.data.list));
  }
};
</script>


<style scoped>
.brand ul{
  display: flex;
  flex-wrap: wrap;
}
.brand ul li{
    width: 50%;
    text-align: center;
    margin: 20px 0;
}

.brand ul li a img{
    width: 100px;
    height: auto;

}
.brand ul li a p{
    margin-top: 5px;
}
</style>