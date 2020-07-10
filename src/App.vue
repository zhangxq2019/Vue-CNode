<template>
  <div id="app">
    <Header></Header>
    <div class="main">
    <router-view name="main"></router-view>
      <router-view class="sidebar" name="sidebar"></router-view>
    </div>
  </div>
</template>

<script>
  import Header  from './components/Header';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  html,body {
    height: 100%;
    background: #f1f1f1;
  }
* {
    margin: 0;
    padding: 0;
  box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
img{
  width: 100%;
  height: 100%;
}
  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
.iconfont {
  cursor: pointer;
}
  @media screen and (max-width:767px ){
    .sidebar {
      display: none;
    }
  }
</style>
