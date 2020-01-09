import axios from 'axios';
import Vue from 'vue';
// import vm from '../main.js'
import store from './vuex.js'

// let token = window.localStorage.getItem('user');;
// token = token ? token : '';

// 添加一个请求的拦截
axios.interceptors.request.use((config) => {
    // let user = window.localStorage.getItem('user');
    // user = user ? JSON.parse(user) : '';
    // config.headers={'token': user.token}
    // config.headers={'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNoZW5naGFvIiwiaWQiOiI1ZTA5NWQ0NDA2MTdhNzMzMzgyOGMwYzMiLCJpYXQiOjE1NzgwMzU2ODEsImV4cCI6MTU3ODEyMjA4MX0.bNDlQy65UkYZfIvTFqnvhrJ5xSdxZiVDugoXT3UT_f4'}
    let token = localStorage.getItem("token");
    token = token ? token : '';
    config.headers = { 'token': token }
    // Do 请求发出去之前,做点事
    // console.log('请求拦截');
    store.commit('LOADING', true)
    return config;
}, function (error) {
    // 请求错误时做点事
    return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function (response) {
    // console.log('响应拦截');
    store.commit('LOADING', false)
    return response;
}, function (error) {

    return Promise.reject(error);
});

Vue.prototype.$axios = axios;
window.axios = axios;
export default axios;



