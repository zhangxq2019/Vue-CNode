<template>
<div class="header">
  <div class="back">
    <router-link class="back_text" :to="{name:'root'}">
    返回首页
    </router-link>
  </div>
  <h1 class="logo">CNode</h1>
  <div class="other">
    <span class="login">
      <router-link class="login_text" :to="{name:'Login'}">
      登录
      </router-link>
    </span>
    <i class="iconfont icon-other"></i>
  </div>
</div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    background: #0084ff;
    color: #fff;
  }
  .header div {
    width: 100%;
  }
  .header .back {
    text-align: left;
    padding-left: 0.5rem;
    cursor: pointer;
    white-space: nowrap;
  }
  .header .back .back_text {
    color: #fff;
  }
  .header .other {
    text-align: right;
    padding-right: 0.5rem;
  }
  .header .other .login {
    margin-right: 1rem;
    cursor: pointer;
  }
  .header .other .login .login_text {
    color: #fff;
  }

</style>
