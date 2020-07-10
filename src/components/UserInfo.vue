<template>
  <div class="user">
    <div class="userinfo">
      <div class="user_image">
        <img :src="post.avatar_url" alt="">
      </div>

      <div class="user_detail">
        <span class="user_loginname">用户名: {{post.loginname}}</span>
        <span class="github_name">Github: {{post.githubUsername}}</span>
        <span class="user_score">积分: {{post.score}}</span>
        <span class="user_time">注册时间: {{post.create_at|formatDate}}</span>
      </div>
    </div>

    <div class="recent">
      <p class="recent_title">最近参与的话题</p>
      <ul v-for="topic in post.recent_topics">
        <router-link :to="{name:'Content',params:{id:topic.id}}">
        <li>{{topic.title}}</li>
        </router-link>
      </ul>
    </div>

    <div class="recent">
      <p class="recent_title">最近回复的话题</p>
      <ul v-for="reply in post.recent_replies">
        <router-link :to="{name:'Content',params:{id:reply.id}}">
          <li>
            {{reply.title}}
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserInfo",
      data(){
          return {
            post: {}
          }
      },
      methods: {
        getData(){
          this.$http
            .get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`,{
            })
            .then(res => {
              console.log(res.data)
              this.post = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      beforeMount(){
        this.getData()
      }
    }
</script>

<style scoped>
.user {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 0.875rem;
  background: #f7f7f7;
}
.userinfo,
.recent {
  width: 90%;
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  background: #fff;

}
.user .user_image {
    width: 6rem;
    height: 6rem;
}
 .user .user_detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 3%;
  }
  .user .recent {
    flex-direction: column;
  }
  .user .recent p {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ccc;
  }
  .user .recent li {
    padding: 0.5rem;
  }
</style>
