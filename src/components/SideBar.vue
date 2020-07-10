<template>
<div class="sidebar">
  <div class="sidebar_list">
  <p class="title">作者收藏的帖子</p>
    <div  v-if="this.posts.length == 0">作者还未收藏任何帖子</div>
      <div class="title_list" v-for="post in posts" :key="post.id" v-else>
        <router-link class="collect_title" :to="{name:'Content',params:{id:post.id}}">
          {{post.title}}
        </router-link>
      </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "SideBar",
    data(){
      return {
        posts: []
      }
    },
    methods: {
      getData(){
        this.$http
          .get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`,{
          })
          .then(res => {
            console.log(this.posts)
            this.posts = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    beforeMount(){
      this.getData()
    },

  }
</script>

<style scoped>
.sidebar{
  width: 30%;
  margin: 0 0.5rem;
  text-align: left;
  font-size: 0.875rem;
}
.sidebar .title {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}
.sidebar .sidebar_list{
  padding: 0 0.5rem;
  background: #fff;
}
.sidebar .sidebar_list div{
  margin: 0.5rem 0;
  font-size: 0.75rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
  .sidebar .sidebar_list .collect_title {
    color: #666;
  }
</style>
