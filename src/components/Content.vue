<template>
  <div class="content">
<!--    <div class="category" :class="[{tab_good:(post.good == true),tab_top:(post.top == true),tab_ask:(post.tab=='ask'),tab_share:(post.tab=='share'),tab_job:(post.good==false && post.top==false)}]">-->
<!--      {{ post | tabformat}}-->
<!--    </div>-->
    <div class="container">
    <div class="detail">
      <p class="title">{{post.title}}</p>
      <div class="detail_bottom">
        <router-link :to="{name: 'User',params:{loginname:post.author.loginname}}">
          <div class="image">
            <img :src="post.author.avatar_url" alt="">
          </div>
        </router-link>
      <div class="info">
        <router-link :to="{name: 'User',params:{loginname:post.author.loginname}}">
        <div class="loginname">{{post.author.loginname}}</div>
        </router-link>
        <span>&nbsp;发布于{{post.create_at | formatDate}}</span>
        <span>&nbsp;浏览人数{{post.visit_count}}</span>
      </div>
      </div>
    </div>
    <div class="main_content markdown-body" v-html="post.content">
    </div>
    <p class="reply_count">共{{post.reply_count}}条评论</p>
    <div class="comment" v-for="(reply,index) in post.replies">
      <div class="reply_top">

        <div class="reply-image">
        <img :src="reply.author.avatar_url" alt="">
        </div>

        <span class="reply_loginname">{{reply.author.loginname}}</span>
      </div>
      <div  class="reply_content markdown-body" v-html="reply.content">
      </div>
      <div class="reply_info">
        <span class="reply_time">{{reply.create_at |formatDate }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Content",
      data(){
          return {
            post: {
              author: {}
            }
          }
      },
      methods: {
        getData(){
          this.$http
            .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,{
            })
            .then(res => {
              // console.log(res.data)
              this.post = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      beforeMount(){
        this.getData()
      },
      watch:{
        '$route'(to,from){
          this.getData()
        }
      }
    }
</script>

<style scoped>
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    /*border: 1px solid red;*/
    text-align: left;
    background: #fff;
  }
  .category {
    height: 2rem;
    background: #75bef5;
    /*border: 1px solid red;*/
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
  }
  .content .container {
    width: 90%;
    margin: 0 auto;
  }
  .detail {
    /*margin: 0.5rem 1rem;*/
    border-bottom: 1px solid #ccc;
  }
  .detail p {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .detail  {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    font-size: 0.875rem;
  }
  .detail .detail_bottom {
    display: flex;
    align-items: center;
    color: #666;
  }
  .detail .image {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .detail .image img {
    width: 100%;
    height: 100%;
  }
  .content .main_content {
    font-size: 0.875rem;
  }
  p.reply_count {
    padding: 0.5rem 0 0.5rem 1rem ;
    background: #ccc;
  }
  .comment {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
    background: #fff;
  }
  .comment .reply_top {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .comment .reply-image {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    overflow: hidden;
    background: lightgreen;
    border-radius: 0.3125rem;
  }
  .comment .reply-image img{
    width: 100%;
    height: 100%;
  }
  .comment .reply_content {
    white-space: pre-wrap;
    font-size: 0.875rem;
  }
  .comment .markdown-body p {
    margin-bottom: 0;
  }
  .comment .reply_info {
    font-size: 0.75rem;
  }
</style>
