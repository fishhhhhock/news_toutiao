<template>
  <van-tabs v-model="active" sticky>
    <van-tab :title="tabs.name" v-for="tabs in tabsList" :key="tabs.id" @click="changeItems()">
      <div class="single" @click="$router.push({path:`/articleNews/${news.id}`})"
      v-for="news in newsList" :key="news.id">
        <div class="left" >
          <p class="content">{{news.title}}</p>
          <p class="info">
              <span>{{news.user.nickname}}</span>
              <span>{{news.comment_length}} 跟帖</span>
          </p>
        </div>
        <img :src="'http://210.21.98.31:6002'+news.cover[0].url" alt="">
      </div>
      </van-tab>
  </van-tabs>
</template>

<script>
  import axios from 'axios'
  export default {
      name:'Tab',
      data() {
          return {
              active:0,
              tabsList:[],
              newsList:[]
          }
      },
      // 组件创建完毕后自动触发的函数
      created() {
        axios.get('http://210.21.98.31:6002/category')
        .then(res => {
          this.tabsList = res.data.data
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
        // 获取新闻列表数据
        axios.get('http://210.21.98.31:6002/post?category=999')
        .then(res2 => {
            this.newsList = res2.data.data
            // console.log(res2);
        })
        .catch(err => {
            console.log(err);
        })

      },
      
  }
</script>

<style lang="less" >
    .single{
        padding: 15px 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        border-bottom:  1px solid #ccc;
        flex-wrap: wrap;
        .left{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            overflow: hidden;
            .info{
                font-size:13px;
                color:#999;
                >span:nth-child(2){
                    margin-left: 10px;
                }
            }
        }
        img{
            width: 120/360 * 100vw;
            height: 70/360 * 100vw;
            object-fit: cover;
            padding-right: 5px;
        }
    }

</style>