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
            <li><a href="#">尚品超市</a></li>
            <li><a href="#">优惠券</a></li>
            <li><a href="#">买啥</a></li>
            <li><a href="#">尚品家电</a></li>
            <li><a href="#">尚品生鲜</a></li>
            <li><a href="#">plus会员</a></li>
            <li><a href="#">进口好物</a></li>
            <li><a href="#">品牌闪购</a></li>
            <li><a href="#">拍卖</a></li>
            <li><a href="#">五金店</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 主要内容区 -->
    <div class="main-content">
        <div class="container ">
            <ul class="slide-nav">
                <li><a href="#">手机/运营商/数码</a></li>
                <li><a href="#">电脑/办公</a></li>
                <li><a href="#">家具/家居/家装/厨具</a></li>
                <li><a href="#">男装/女装/童装/内衣</a></li>
                <li><a href="#">美妆/个护清洁/宠物</a></li>
                <li><a href="#">女鞋/箱包/钟表/珠宝</a></li>
                <li><a href="#">男鞋/运动/户外</a></li>
                <li><a href="#">房产/汽车/汽车用品</a></li>
                <li><a href="#">母婴/玩具乐器</a></li>
                <li><a href="#">食品/酒类/生鲜/特产</a></li>
                <li><a href="#">艺术/礼品鲜花/农资绿植</a></li>
                <li><a href="#">医药保健/计生情趣</a></li>
                <li><a href="#">图书/文娱/教育/电子书</a></li>
                <li><a href="#">机票/酒店/旅游/生活</a></li>
                <li><a href="#">众筹/白条/保险/企业金融</a></li>
                <li><a href="#">安装/维修/清洗/二手</a></li>
            </ul>
            <div class="banner">2</div>
            <div class="slide-other">3</div>
        </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
.container {
  width: 1190px;
  margin: 0 auto;

}

/* #region 顶部导航栏 */
.topbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topbar {
  height: 30px;
  background-color: #ECECEC;
}

.welcome {
  height: 30px;
  line-height: 30px;
  color: #666;
  font-size: 12px;
}

.hello {
  margin-right: 28px;
}

.login {
  padding-right: 10px;
  border-right: 1px solid #666;
}

.register {
  padding-left: 10px;
}

.nav {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}

.nav ul {
  display: flex;
}

.nav li {
  margin-right: 28px;
}

.nav li:last-child {
  margin-right: 0;
}

.nav a {
  color: #666;
}

.nav a:hover {
  color: #000;
}

/* #endregion */
/* #region 头部搜索栏 */
.header {
  height: 120px;
  background-color: #f1ffd5;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 120px;
}

.search {
  height: 120px;
  line-height: 120px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.search input {
  width: 400px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #c2f587;
}

.search button {
  width: 80px;
  height: 32px;
  background-color: #c2f587;
}

.search button img {
  margin: 0 auto;
  height: 25px;
}

/* #endregion */

/* #region 主导航栏 */
.main-nav {
    height: 48px;
    border-bottom: 1px solid #c2f587;
    background-color: #f1ffd5;
}
.main-nav .container {
    display: flex;
    align-items: center;
}
.main-nav .all-type {
    width: 190px;
    height: 48px;
    line-height: 48px;
    background-color: #c2f587;
    color: #1ac587;
    text-align: center;
    font-size: 16px;
}
.main-nav .all-type a {
    color: #1ac587;
}
.type-nav ul {
    height: 48px;
    line-height: 48px;
    display: flex;
}
.type-nav li {
    margin: 0 10px;
    font-size: 16px;
}
/* #endregion */

/* #region 侧导航栏  */

.main-content {
    margin-top: 10px;
}
.main-content .container {
    display: flex;
}
.main-content .slide-nav {
    width: 190px;
    height: 458px;
    background-color: #F4F4F4;
}
.main-content .slide-nav li {
    font-size: 14px;
    height: 28px;
    line-height: 28px;
    padding-left: 16px;
}
.main-content .slide-nav li:hover {
    background-color: #DD302D;
}
.main-content .slide-nav li:hover a {
    color: white;
}



.main-content .banner {
    width: 690px;
    height: 458px;
    background-color: green;
    margin: 0 10px;
}
.main-content .slide-other {
    width: 290px;
    height: 458px;
    background-color: orange;
}


/* #endregion */
</style>