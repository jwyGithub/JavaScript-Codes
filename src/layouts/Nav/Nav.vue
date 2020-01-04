<template>
<div class="nav">
    <ul>
        <li>
            <router-link to="/list/fashion">
                <i></i>
                <p>时尚服饰</p>
            </router-link>
            <router-link to="/list/business">
                <i></i>
                <p>商业财经</p>
            </router-link>
            <router-link to="/list/build">
                <i></i>
                <p>建筑地理</p>
            </router-link>
            <router-link to="/list/current">
                <i></i>
                <p>时政军事</p>
           </router-link>
        </li>
        <li>
            <a href="javascript:;">
                <i></i>
                <p>育儿亲子</p>
            </a>
            <a href="javascript:;">
                <i></i>
                <p>文学文稿</p>
            </a>
            <a href="javascript:;">
                <i></i>
                <p>旅游摄影</p>
            </a>
            <a href="javascript:;">
                <i></i>
                <p>汽车科技</p>
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
      
    }
}
</script>

<style scoped>
.nav ul{
    background-image: url('./imgs/wapnac_bg.png');
    background-size: 100%;
    padding: 10px 0;
}
.nav ul li{
    display: flex;
    justify-content: space-around;
    margin: 5px 0;   
}
.nav ul li a i{
    display: block;
    width: 30px;
    height: 30px;
    background-size: 100%;
    margin-bottom:3px; 
    margin: 0 auto;
}
.nav ul li a p{
    font: 16px/2 "";
    margin-top: 3px;
}
.nav ul li:nth-child(1) a:nth-child(1) i {
    background-image:url('./imgs/icon-sycj-01.png')
}
.nav ul li:nth-child(1) a:nth-child(2)  i{
    background-image: url('./imgs/icon-ssfs-02.png')
}
.nav ul li:nth-child(1) a:nth-child(3)  i{
    background-image: url('./imgs/icon-jzdl-03.png')
}
.nav ul li:nth-child(1) a:nth-child(4)  i{
    background-image: url('./imgs/icon-szjs-04.png')
}
.nav ul li:nth-child(2) a:nth-child(1)  i{
    background-image: url('./imgs/icon-yeqz-05.png')
}
.nav ul li:nth-child(2) a:nth-child(2)  i{
    background-image: url('./imgs/icon-lysy-06.png')
}
.nav ul li:nth-child(2) a:nth-child(3)  i{
    background-image: url('./imgs/icon-wxwz-07.png')
}
.nav ul li:nth-child(2) a:nth-child(4)  i{
    background-image: url('./imgs/icon-qckj-08.png')
}
</style>