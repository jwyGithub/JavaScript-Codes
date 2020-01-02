<template>
    <div class="lists">
        <div class="header">
            <a href="javascript:history.go(-1)" class="back"></a>
            <form>
                <i></i>
                <input type="text" placeholder="请输入杂志关键词">
            </form>
            <a href="/wap/category" class="categroy">
                <i></i>
            </a>
            <a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup></sup></a>
                <!-- {{Lists}} -->
        </div>
        <div class="goods-search-list-nav">
            <ul id="nav_ul">
                <li><a href="javascript:void(0);" class="" id="sort_default">综合排序<i></i></a></li>
                <li><a href="javascript:void(0);" class="current" onclick="init_get_list('2', '1')">销量优先</a></li>
            </ul>
            <div class="browse-mode"><a href="javascript:void(0);" id="show_style"><span class="browse-list"></span></a></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"lists", 
    data () {
    return {
        Lists:this.$store.state.Lists
    }
  },

  computed: {
    //   Lists () {
    //     return this.$store.state.Lists
    //   }
    }
}
</script>


<style scoped>
.lists .header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.2rem;
    background: #eee;
}
.back{
    width: .5rem;
    height: .5rem;
    background-image: url('./img/back.png');
    background-size: cover
}
.lists form {
    position: relative;
    border: solid 0.05rem#DEDEDE;
    border-radius: 0.2rem;
    background-color:#FFF;
    text-align: left;
    width: 5rem
}
.lists form i{
    position: absolute;
    width: .5rem;
    height: .5rem;
    background-image: url('./img/search_ico.png');
    background-size: cover;
    opacity: 0.3;
    top: 0;
    bottom: 0;
    margin: auto 0;
}
.lists form input{
    background: none;
    border: none;
    font: .4rem/.6rem "";
    padding-left: .7rem
}
.goods-search-list-nav {
    display: block;
    width: 100%;
    background: rgba(255,255,255,0.95);
    border-bottom: solid 0.05rem#EEE;
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
}
.goods-search-list-nav ul {
    font-size: 0;
    display: block;
}
.goods-search-list-nav ul li a {
    font-size: 0.65rem;
    color: #888;
    line-height: .8rem;
    text-align: center;
    display: block;
}
.goods-search-list-nav ul li{
    float: left;
}
</style>