<template>
  <div class="mainview">
    <div class="topbar">
      <div class="container">
        <div class="welcome">
          <span class="hello">DEWshop欢迎您</span>
          <span>
            <a href="#" class="login">登录</a>
            <a href="#" class="register">注册</a>
          </span>
        </div>
        <div class="nav">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">商品分类</a></li>
            <li><a href="#">购物车</a></li>
            <li><a href="#">我的订单</a></li>
            <li><a href="#">用户中心</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container">
        <div class="logo">
          <img src="../assets/images/pnglogo.png" alt="">
        </div>
        <div class="search">
          <input type="text">
          <button><img src="../assets/images/search_icon.png" alt=""></button>
        </div>
      </div>
    </div>  
    <div class="main-nav">
      <div class="container">
        <div class="all-type">
          <a href="#">全部商品分类</a>
        </div>
        <div class="type-nav">
          <ul>
            <li><a href="#">手机</a></li>
            <li><a href="#">平板</a></li>
            <li><a href="#">笔记本</a></li>
            <li><a href="#">智能电视</a></li>
            <li><a href="#">智能音响</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
.container{
  width: 1190px;
  margin: 0 auto;
  
}
/* #region 顶部导航栏 */
.topbar .container{
display: flex;
  justify-content: space-between;
  align-items: center;
}
.topbar{
  height:30px;
  background-color: #ECECEC;
}
.welcome{
  height: 30px;
  line-height: 30px;
  color: #666;
  font-size: 12px;
}
.hello{
  margin-right: 28px;
}
.login{
  padding-right: 10px;
  border-right: 1px solid #666;
}
.register{
  padding-left: 10px;
}
.nav{
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.nav ul{
  display: flex;
}
.nav li{
  margin-right: 28px;
}
.nav li:last-child{
  margin-right: 0;
}
.nav a{
  color: #666;
}
.nav a:hover{
  color: #000;
}
/* #endregion */
/* #region 头部搜索栏 */
.header{
  height: 120px;
  background-color: #f1ffd5;
}
.header .container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img{
  height: 120px;
}
.search{
  height: 120px;
  line-height: 120px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.search input{
  width: 400px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #c2f587;
}
.search button{
  width: 80px;
  height: 32px;
  background-color: #c2f587;
}
.search button img{
  margin: 0 auto;
  height: 25px;
}
/* #endregion */

</style>