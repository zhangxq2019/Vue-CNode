<template>
  <div class="main_post">
    <div class="banner">
      <ul>
        <li :class="{active: isActive ===1}" @click="changeTab('',1)">全部</li>
        <li :class="{active: isActive ===2}" @click="changeTab('good',2)">精华</li>
        <li :class="{active: isActive ===3}" @click="changeTab('share',3)">分享</li>
        <li :class="{active: isActive ===4}" @click="changeTab('ask',4)">问答</li>
        <li :class="{active: isActive ===5}" @click="changeTab('job',5)">招聘</li>
      </ul>
    </div>
    <div class="list">
    <ul>
      <li v-for="post in posts" :key="post.id">
<!--分三个区域-->
        <router-link :to="{name: 'User',params:{loginname:post.author.loginname}}">
        <div class="image">
<!--        头像-->
          <img :src="post.author.avatar_url" :alt="post.author.loginname">
        </div>
        </router-link>

        <div class="content">
<!--        分类-->
          <div class="content_top">
          <span class="tab" :class="[{tab_good:(post.good == true),tab_top:(post.top == true),tab_ask:(post.tab=='ask'),tab_share:(post.tab=='share'),tab_job:(post.good==false && post.top==false)}]">
            <span>{{post | tabformat}}</span>
          </span>
<!--        标题-->
            <router-link class="title" :to="{name:'Content',params:{id:post.id,name:post.author.loginname}}">
<!--              <span class="title">-->
                {{post.title}}
<!--              </span>-->
            </router-link>
          </div>
 <!--      人数-->
          <div class="content_bottom">
          <span class="count">
            {{post.reply_count}}/{{post.visit_count}}
          </span>

<!--        时间-->
            <span class="date">{{post.last_reply_at | formatDate}}</span>
          </div>
          </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Main",
      data(){
          return {
            posts: [],
            tab: '',
            isActive: 1
          }
      },
      methods: {
          getData(){
            this.$http
              .get("https://cnodejs.org/api/v1/topics",{params: {
                  // page: 1,
                  // limit: 20,
                  tab: this.tab
                }
            })
            .then(res => {
              console.log(res.data)
              this.posts = res.data.data
            })
            .catch(err => {
              console.log(err)
            })
          },
        changeTab(value,index){
            this.isActive = index
            this.tab = value
            this.getData()
        }
      },
      beforeMount(){
          this.getData()
      }
    }
</script>

<style scoped>
  .main_post {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .banner {
    height: 2rem;
    background: #0084ff;
    /*border: 1px solid red;*/
    color: #fff;
  }
  .banner ul {
    display: flex;
    height: 100%;
  }
  .banner ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;
  }
  .banner ul li:hover {
    font-size: 1.2rem;
  }
  .banner ul li.active {
    font-size: 1.2rem;
    border-bottom: 2px solid #fff;
  }
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 90%;
    margin: 1rem auto 0;
    background: #fff;

    /*border: 1px solid blue;*/
  }
  .list ul{
    width: 100%;
  }
  .list ul li {
    display: flex;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #cccccc;
  }
  .list ul li .image {
    width: 3rem;
    height: 3rem;
    font-size: 0.25rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .list ul li .image img {
    width: 100%;
    height: 100%;
  }
  .list ul li .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding-left: 2.5%;
    height: 3rem;
    overflow: hidden;
    font-size: 0.75rem;
  }
  .list ul li .content .content_top {
    display: flex;
    margin-bottom: 0.3125rem ;
    /*background: yellow;*/
  }
  .list .content_top .tab {
    margin-right: 1rem;
    padding: 0 0.3125rem;
    height: 1.25rem;
    line-height: 1.25rem;
    white-space: nowrap;
    border: 1px solid #ccc;
    border-radius: 0.3125rem;
    color: #546E7A;
    background: #ECEFF1;
  }
  .list .content_top .tab.tab_share {
    color: #43A047;
    background: #E8F5E9;
  }
  .list .content_top .tab.tab_top {
    color: #E53935;
    background: #FFEBEE;
  }
  .list .content_top .tab.tab_good{
    color: #8E24AA;
    background: #F3E5F5;
  }
  .list .content_top .tab.tab_ask{
    color: #039BE5;
    background: #E1F5FE;
  }

  .list li .content_top .title {
    text-align: left;
    font-size: 0.875rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    color: #333;
  }
  .list li .content .content_bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }



</style>
