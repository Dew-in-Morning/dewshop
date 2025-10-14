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
  </div>
</template>
<script>

</script>
<style>
.container{
  width: 1190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* #region 顶部导航栏 */
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


</style>