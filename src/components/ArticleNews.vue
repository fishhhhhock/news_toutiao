<template>
  <div class="articlenews">
    <div class="header">
        <div class="left">
            <span class="iconfont iconjiantou" @click="$router.back()"></span>
            <span class="iconfont iconnew new"></span>
        </div>
        <span>关注</span>
    </div>
    <div class="detail">
        <div class="title">{{news.title}}</div>
        <div class="desc">
            <span>{{news.user.nickname}}</span>&nbsp;&nbsp;
            <span>日期</span>
        </div>
        <div class="content"
            v-html="news.content"
        >
            
        </div>
        <div class="opt">
            <span class="like">
                <span class="iconfont icondianzan">点赞</span>
            </span>
            <span class="chat">
                <span class="iconfont iconweixin">微信</span>
            </span>
        </div>
    </div>
    <!-- 精彩跟贴 -->
    <div class="keeps">
        <h2>精彩跟贴</h2>
        <div class="item">
            <div class="head">
                <img src="../assets/logo.png" alt="">
                <div>
                    <p>火星网友</p>
                    <span>2小时前</span>
                </div>
                <span>回复</span>
            </div>
            <div class="text">文章说的很有道理</div>
        </div>
        <div class="more">更多跟贴</div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'ArticleNews',
        data() {
            return {
                news:{}
            }
        },
        mounted() {
            let id = this.$route.params.id
            axios.get('http://210.21.98.31:6002/post/' + id)
            .then(res => {
                console.log(res);
                this.news = res.data.data
            })
            .catch(err => {
                console.log(err);
            })
        },
    }
</script>

<style lang="less" scoped>
    .header{
      padding: 0 10px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      >.left{
        height: 100%;
        display: flex;
        align-items: center;
        >span.new{
            font-size: 50px;
        }
      }
      >span{
        padding: 5px 15px;
        background-color: #f00;
        color: #fff;
        text-align: center;
        border-radius: 15px;
        font-size: 13px;
        &.active{
            background-color: transparent;
            color:#000;
            border:1px solid #888;
        }
      }
    }
    .detail{
        padding: 15px;
        .title{
            font-size: 18px;
            font-weight: bold;
            padding: 10px 0;
        }
        .desc{
            line-height: 30px;
            color: #999;
            font-size: 13px;
        }
        .content{
            line-height: 24px;
            font-size: 15px;
            padding-bottom: 30px;
            width: 100%;
            /deep/ p {
                text-indent: 2em;
            }
        }
    }
    .opt{
        display: flex;
        justify-content: space-around;
        .like,
        .chat{
            height: 25px;
            padding: 0 15px;
            font-size: 14px;
            line-height: 25px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 15px;
        }
        .active{
            color:red;
        }
        .w{
            color:rgb(84, 163, 5)
        }
    }
    .keeps{
        border-top: 5px solid #ddd;
        padding: 0 15px;
        >h2{
            line-height: 50px;
            text-align: center;
        }
        .item{
            padding:10px 0;
            border-bottom:1px solid #ccc;
            .head{
                display:flex;
                justify-content: space-between;
                align-items: center;
                >img{
                    width: 50/360*100vw;
                    height:50/360*100vw ;
                    display: block;
                    border-radius: 50%;
                }
                >div{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    >span{
                        font-size: 12px;
                        color: #999;
                        line-height: 25px;
                    }
                }
                >span{
                    color:#999;
                    font-size:13px;
                }
            }
            .text{
                font-size:14px;
                color:#333;
                padding: 20px 0 10px 0;
            }
        }
    }
    .more{
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 15px;
        margin: 20px auto;
        font-size: 13px;
    }
</style>