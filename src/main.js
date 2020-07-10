// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'Axios'
import '../github-markdown.css'
import './assets/iconfont/iconfont.css'
Vue.prototype.$http = Axios
Vue.config.productionTip = false


/* eslint-disable no-new */

Vue.filter('tabformat',function(post){
  if(post.good == true){
    return '精华'
  }else if(post.top == true){
    return '置顶'
  }else if(post.tab == 'ask'){
    return '问答'
  }else if (post.tab == 'share'){
    return '分享'
  }else if(post.good==false&&post.top==false){
    return '招聘'
  }
})
Vue.filter('formatDate',function (str) {
  var date = new Date(str)
  var time = new Date().getTime()-date.getTime()
  if(time < 0){
    return ''
  }else if(time/1000 < 30){
    return '刚刚'
  }else if(time/1000 < 60){
    return parseInt(time/1000)+'秒前'
  }else if (time/1000/60 < 60){
    return parseInt(time/1000/60) + '分钟前'
  }else if(time/1000/60/60 <24){
    return parseInt(time/1000/60/60) + '小时前'
  }else if(time/1000/60/60/24 < 31){
    return parseInt(time/1000/60/60/24) +'天前'
  }else if(time/1000/60/60/24/31 < 12){
    return parseInt(time/1000/60/60/24/31) +'月前'
  }else
    return parseInt(time/1000/60/60/24/31/12) + '年前'
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
