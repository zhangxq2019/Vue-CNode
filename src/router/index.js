import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main';
import Content  from '../components/Content';
import UserInfo from "../components/UserInfo";
import SideBar from "../components/SideBar";
import Login from "../components/Login";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: Main
      }
    },
    {
      path: '/topic/:id&:name',
      name: 'Content',
      components: {
       main: Content,
        sidebar: SideBar
      }
    },
    {
      path: '/user/:loginname',
      name: 'User',
      components: {
        main: UserInfo
      }
    },
    {
      path: '/',
      name: 'Login',
      components: {
        main: Login
      }
    },
  ]
})
