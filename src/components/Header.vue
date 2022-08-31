<template>
  <div class="header">
    <div class="logo">
        <span class="iconfont iconnew"></span>
    </div>
    <div class="search">
        <span class="iconfont iconsearch"></span>
        <span>搜索新闻</span>
    </div>
    <div class="user">
        <span class="iconfont iconwode"></span>
    </div>
  </div>
</template>

<script>
    export default {
        name:'Header'
    }
</script>

<style lang="less" scoped>
    @import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
    .header{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        background-color: #f00;
        .logo{
            color: #fff;
            .iconnew{
                font-size: 50px;
            }
        }
    }
    .search{
        flex: 1;
        height: 40px;
        margin-top: 5px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        margin: 0 10px;
    }
    .user{
        color:#fff;
        font-size: 20px;
    }
</style>