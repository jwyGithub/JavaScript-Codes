<template>
<div class="nav">
    <ul>
        <li>
            <a href="javascript:;" @click="fashion">
                <i></i>
                <p>时尚服饰</p>
            </a>
            <a href="javascript:;" @click="business">
                <i></i>
                <p>商业财经</p>
            </a>
            <a href="javascript:;" @click="build">
                <i></i>
                <p>建筑地理</p>
            </a>
            <a href="javascript:;" @click="current">
                <i></i>
                <p>时政军事</p>
            </a>
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
        fashion(){
            this.$axios({
                url: 'http://localhost:3000/api/fashion'
            }).then(
                res => this.$store.state.Lists = res.data.data
            )
            this.$router.push("/list/fashion")
        },
        business(){
            this.$axios({
                url: 'http://localhost:3000/api/business'
            }).then(
                res => this.$store.state.Lists = res.data.data
            )
            this.$router.push("/list/fashion")
        },
        current(){
            this.$axios({
                url: 'http://localhost:3000/api/current'
            }).then(
                res => this.$store.state.Lists = res.data.data
            )
            this.$router.push("/list/fashion")
        },
        build(){
            this.$axios({
                url: 'http://localhost:3000/api/build'
            }).then(
                res => this.$store.state.Lists = res.data.data
            )
            this.$router.push("/list/fashion")
        }
    }
}
</script>

<style scoped>
.nav ul{
    background-image: url('./imgs/wapnac_bg.png');
    background-size: 100%;
}
.nav ul li{
    display: flex;
    justify-content: space-around;
    margin: .2rem 0;    
}
.nav ul li a i{
    display: block;
    width: 1rem;
    height: 1rem;
    background-size: 100%;
    margin-bottom:.1rem; 
    margin: 0 auto;
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