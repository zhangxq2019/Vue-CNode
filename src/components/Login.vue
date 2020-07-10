<template>
    <div class="login">
      <div class="form">
      <input class="input" type="password" placeholder="请输入你的 accessToken" v-model="loginValue">
      <button @click="Login">登录</button>
      <button @click="Cancle">取消</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return {
            loginValue: ''
          }
      },
      methods: {
        getData(){
          this.$http
            .post("https://cnodejs.org/api/v1/accesstoken",{accesstoken:this.loginValue})
            .then(res => {
              if(res.status === 200){
                this.updateAccesstoken({accesstoken:this.loginValue})
              }
              console.log(res.data)
              this.posts = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
        },
          Login(){
            if(!this.loginValue){
              alert('accessToken 不能为空')
            }
          }
      }
    }
</script>

<style scoped>
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .form {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    /*border: 1px solid red;*/
  }
  .input {
    height: 3rem;
    background: #f1f1f1;
    margin-bottom: 7.5rem;
    border: 1px solid #ccc;
  }
  button {
    height: 3rem;
    margin-bottom: 1rem ;
    background: #0084ff;
    border: none;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 1rem;
    color: #fff;
  }
</style>
