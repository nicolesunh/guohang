// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 全局配置信息
import './global.js'
// 路由插件
import router from './router'
// 状态管理插件
import Vuex from 'vuex'
import store from './store/index';
// http请求插件
import vueResource from 'vue-resource'
// 前端ui插件样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//公用样式
import './assets/style/site.css'
//vue路由插件
import VueRouter from 'vue-router'
//读取错误编码表
import  './resource/zh-cn'
// 兼容360急速模式
import 'babel-polyfill'
//引入axios
import axios from "axios"
//引入qs
import qs from 'qs'
//引入vshare
import vshare from 'vshare'


// 使用路由功能
Vue.use(VueRouter)
// 使用 (eleUI) 功能
Vue.use(ElementUI);
// 使用（状态管理）功能
Vue.use(Vuex);
// 使用 (http) 功能
Vue.use(vueResource);
// 使用 axios 功能
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
// 使用 qs 功能
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
// 使用 vshare功能
Vue.use(vshare)
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;
// 开启错误提示
Vue.config.debug = false;




//设置全局loading加载
import {Loading } from 'element-ui'; //项目已经全局引入element的话可以不单独引入
let loading   //定义loading变量
function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        fullscreen: true,
        text: '加载中……',
        background:'none',
        customClass:"mainLoading"
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}
//那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}
export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}





/* 路由发生变化修改页面 */
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */
    if(to.meta.content){
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        meta.content = to.meta.content;
        head[0].appendChild(meta)
    }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    /* 判断路由是否需要登录权限(在地址栏输入网址，如果需要登录权限且token为null,则返回登录页)*/
    if (to.matched.some(record => record.meta.requireAuth )) {
        if (store.state.common.manageToken == null || store.state.common.manageToken == "" || store.state.common.manageToken == undefined ) {
            //是否要跳转到信息平台系统的首页
            if(to.fullPath == '/p/report'){
                next({
                    name: 'NewsletterLogin',
                    query: {redirect: to.fullPath},
                    params:{name:'report'}
                });
            }else{
                next({
                    name: 'Login',
                    query: {redirect: to.fullPath}// 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        }else{
            next()
        }
    } else {
        next()
    }
});





//定义一个请求拦截器
axios.interceptors.request.use(function(config){
    // config.headers['Content-Type'] = "application/x-www-form-urlencoded";
    //登录情况下添加token
    if (config.url.indexOf(serviceUrl) >= 0) {
        if (store.state.common.manageToken != null) {
            // config.headers['Authorization'] = AUTH_TOKEN_SCHEME + ' ' + store.state.common.manageToken; // 新增键值对
        }
    }
    //在这里对返回的数据进行处理
     showFullScreenLoading() //开启loading
     return config
})
//定义一个响应拦截器
axios.interceptors.response.use(function(config){
    //在这里对返回的数据进行处理
    if(config.data.code == 200 || config.data.code == undefined  || config.data.code == 1  || config.data.code == null){
        tryHideFullScreenLoading() //关闭loading
    }

    if(config.data.code == 401) {
        this.$router.push({name: 'login'});
    }
    return config
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  data: {},
  computed: {},
  router,
  components: { App },
  template: '<App/>'
})
/*浏览器回退事件，Firefox可能不会触发此事件*/
window.addEventListener('popstate', () => {
    App.currentRoute = window.location.pathname
    //刷新网页
    // window.location.reload();
})
