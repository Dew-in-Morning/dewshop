<template>
  <div class="mainview">
    <div class="topbar">
      <div class="container">
        <div class="welcome">
          <span class="hello">DEWshop欢迎您</span>
          <span>
            <a href="#/login" class="login">登录</a>
            <a href="#/login" class="register">注册</a>
          </span>
        </div>
        <div class="nav">
          <ul>
            <li><a href="#/main" class="active">首页</a></li>
            <li><a href="#">商品分类</a></li>
            <li><a href="#/cart">购物车</a></li>
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
          <li>
            <!-- 一级菜单 -->
            <a href="#">手机/运营商/数码</a>
            <!-- 二级菜单 -->
            <div class="second-menu">
              <dl>
                <dt><a href="#">电子书刊</a></dt>
                <dd><a href="#">电子书</a></dd>
                <dd><a href="#">网络原创</a></dd>
                <dd><a href="#">数字杂志</a></dd>
                <dd><a href="#">多媒体图书</a></dd>
              </dl>
              <dl>
                <dt><a href="#">音像</a></dt>
                <dd><a href="#">音乐</a></dd>
                <dd><a href="#">影视</a></dd>
                <dd><a href="#">教育音像</a></dd>
              </dl>
              <dl>
                <dt><a href="#">英文原版</a></dt>
                <dd><a href="#">少儿</a></dd>
                <dd><a href="#">商务投资</a></dd>
                <dd><a href="#">英语学习考试</a></dd>
                <dd><a href="#">文学</a></dd>
                <dd><a href="#">传记</a></dd>
                <dd><a href="#">励志</a></dd>
              </dl>
              <dl>
                <dt><a href="#">文艺</a></dt>
                <dd><a href="#">小说</a></dd>
                <dd><a href="#">文学</a></dd>
                <dd><a href="#">青春文学</a></dd>
                <dd><a href="#">传记</a></dd>
                <dd><a href="#">艺术</a></dd>
              </dl>
              <dl>
                <dt><a href="#">少儿</a></dt>
                <dd><a href="#">胎教</a></dd>
                <dd><a href="#">0-2岁</a></dd>
                <dd><a href="#">3-6岁</a></dd>
                <dd><a href="#">7-10岁</a></dd>
                <dd><a href="#">11-14岁</a></dd>
              </dl>
              <dl>
                <dt><a href="#">人文社科</a></dt>
                <dd><a href="#">历史</a></dd>
                <dd><a href="#">哲学</a></dd>
                <dd><a href="#">国学</a></dd>
                <dd><a href="#">政治/军事</a></dd>
                <dd><a href="#">法律</a></dd>
                <dd><a href="#">人文社科</a></dd>
                <dd><a href="#">心理学</a></dd>
                <dd><a href="#">文化</a></dd>
                <dd><a href="#">社会科学</a></dd>
              </dl>
              <dl>
                <dt><a href="#">经管励志</a></dt>
                <dd><a href="#">经济</a></dd>
                <dd><a href="#">金融与投资</a></dd>
                <dd><a href="#">管理</a></dd>
                <dd><a href="#">励志与成功</a></dd>
              </dl>
              <dl>
                <dt><a href="#">生活</a></dt>
                <dd><a href="#">健康与保健</a></dd>
                <dd><a href="#">家庭与育儿</a></dd>
                <dd><a href="#">旅游</a></dd>
                <dd><a href="#">烹饪美食</a></dd>
              </dl>
              <dl>
                <dt><a href="#">科技</a></dt>
                <dd><a href="#">工业技术</a></dd>
                <dd><a href="#">科普读物</a></dd>
                <dd><a href="#">建筑</a></dd>
                <dd><a href="#">医学</a></dd>
                <dd><a href="#">科学与自然</a></dd>
                <dd><a href="#">计算机与互联网</a></dd>
                <dd><a href="#">电子通信</a></dd>
              </dl>
              <dl>
                <dt><a href="#">教育</a></dt>
                <dd><a href="#">中小学教辅</a></dd>
                <dd><a href="#">教育与考试</a></dd>
                <dd><a href="#">外语学习</a></dd>
                <dd><a href="#">大中专教材</a></dd>
                <dd><a href="#">科学与自然</a></dd>
                <dd><a href="#">字典词典</a></dd>
              </dl>
              <dl>
                <dt><a href="#">艺术与收藏</a></dt>
                <dd><a href="#">经济管理</a></dd>
                <dd><a href="#">文化与艺术</a></dd>
              </dl>
              <dl>
                <dt><a href="#">其他</a></dt>
                <dd><a href="#">工具书</a></dd>
                <dd><a href="#">杂志期刊</a></dd>
                <dd><a href="#">套装书</a></dd>
                <dd><a href="#">打折图书</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">电脑/办公</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">手机通讯</a></dt>
                <dd><a href="#">手机</a></dd>
                <dd><a href="#">对讲机</a></dd>
              </dl>
              <dl>
                <dt><a href="#">运营商</a></dt>
                <dd><a href="#">合约机</a></dd>
                <dd><a href="#">选号中心</a></dd>
                <dd><a href="#">装宽带</a></dd>
              </dl>
              <dl>
                <dt><a href="#">手机配件</a></dt>
                <dd><a href="#">移动电源</a></dd>
                <dd><a href="#">蓝牙耳机</a></dd>
                <dd><a href="#">充电器</a></dd>
                <dd><a href="#">数据线</a></dd>
                <dd><a href="#">苹果周边</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">家具/家居/家装/厨具</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">大家电</a></dt>
                <dd><a href="#">平板电视</a></dd>
                <dd><a href="#">空调</a></dd>
                <dd><a href="#">冰箱</a></dd>
                <dd><a href="#">洗衣机</a></dd>
                <dd><a href="#">迷你音响</a></dd>
              </dl>
              <dl>
                <dt><a href="#">厨卫家电</a></dt>
                <dd><a href="#">燃气灶</a></dd>
                <dd><a href="#">油烟机</a></dd>
                <dd><a href="#">热水器</a></dd>
                <dd><a href="#">消毒柜</a></dd>
                <dd><a href="#">洗碗机</a></dd>
              </dl>
              <dl>
                <dt><a href="#">厨卫小电</a></dt>
                <dd><a href="#">料理机</a></dd>
                <dd><a href="#">榨汁机</a></dd>
                <dd><a href="#">电饭煲</a></dd>
                <dd><a href="#">压力锅</a></dd>
                <dd><a href="#">豆浆机</a></dd>
                <dd><a href="#">咖啡机</a></dd>
                <dd><a href="#">微波炉</a></dd>
                <dd><a href="#">电磁炉</a></dd>
              </dl>
              <dl>
                <dt><a href="#">生活电器</a></dt>
                <dd><a href="#">取暖电器</a></dd>
                <dd><a href="#">净化器</a></dd>
                <dd><a href="#">加湿器</a></dd>
                <dd><a href="#">扫地机器人</a></dd>
                <dd><a href="#">吸尘器</a></dd>
                <dd><a href="#">挂烫机</a></dd>
                <dd><a href="#">电话机</a></dd>
                <dd><a href="#">电风扇</a></dd>
              </dl>
              <dl>
                <dt><a href="#">个护健康</a></dt>
                <dd><a href="#">剃须刀</a></dd>
                <dd><a href="#">脱毛器</a></dd>
                <dd><a href="#">口腔护理</a></dd>
                <dd><a href="#">电吹风</a></dd>
                <dd><a href="#">美容仪</a></dd>
                <dd><a href="#">理发器</a></dd>
                <dd><a href="#">按摩椅</a></dd>
                <dd><a href="#">血压计</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">男装/女装/童装/内衣</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">摄影摄像</a></dt>
                <dd><a href="#">数码现货即</a></dd>
                <dd><a href="#">拍立得</a></dd>
                <dd><a href="#">镜头</a></dd>
                <dd><a href="#">户外器材</a></dd>
                <dd><a href="#">数码相框</a></dd>
              </dl>
              <dl>
                <dt><a href="#">数码配件</a></dt>
                <dd><a href="#">存储卡</a></dd>
                <dd><a href="#">读卡器</a></dd>
                <dd><a href="#">滤镜</a></dd>
                <dd><a href="#">相机包</a></dd>
                <dd><a href="#">数码支架</a></dd>
              </dl>
              <dl>
                <dt><a href="#">智能设备</a></dt>
                <dd><a href="#">智能手环</a></dd>
                <dd><a href="#">智能眼镜</a></dd>
                <dd><a href="#">健康监测</a></dd>
                <dd><a href="#">体感车</a></dd>
                <dd><a href="#">无人机</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">美妆/个护清洁/宠物</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">宠物生活</a></dt>
                <dd><a href="#">宠物粮食</a></dd>
                <dd><a href="#">宠物零食</a></dd>
                <dd><a href="#">医疗保健</a></dd>
                <dd><a href="#">宠物玩具</a></dd>
                <dd><a href="#">出行装备</a></dd>
              </dl>
              <dl>
                <dt><a href="#">生活日用</a></dt>
                <dd><a href="#">保暖防护</a></dd>
                <dd><a href="#">收纳用品</a></dd>
                <dd><a href="#">雨伞雨具</a></dd>
                <dd><a href="#">浴室用品</a></dd>
                <dd><a href="#">洗漱用品</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">女鞋/箱包/钟表/珠宝</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">电脑整机</a></dt>
                <dd><a href="#">笔记本电脑</a></dd>
                <dd><a href="#">台式机</a></dd>
                <dd><a href="#">超极本</a></dd>
                <dd><a href="#">游戏本</a></dd>
                <dd><a href="#">平板电脑</a></dd>
                <dd><a href="#">平板配件</a></dd>
              </dl>
              <dl>
                <dt><a href="#">电脑配件</a></dt>
                <dd><a href="#">CPU</a></dd>
                <dd><a href="#">主板</a></dd>
                <dd><a href="#">显卡</a></dd>
                <dd><a href="#">硬盘</a></dd>
                <dd><a href="#">SSD固态硬盘</a></dd>
                <dd><a href="#">内存</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">男鞋/运动/户外</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">刀剪菜板</a></dt>
                <dd><a href="#">菜刀</a></dd>
                <dd><a href="#">剪刀</a></dd>
                <dd><a href="#">多功能刀</a></dd>
                <dd><a href="#">道具套装</a></dd>
              </dl>
              <dl>
                <dt><a href="#">水具酒具</a></dt>
                <dd><a href="#">塑料杯</a></dd>
                <dd><a href="#">运动水壶</a></dd>
                <dd><a href="#">保温杯</a></dd>
                <dd><a href="#">保温壶</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">房产/汽车/汽车用品</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">清洁用品</a></dt>
                <dd><a href="#">纸巾湿巾</a></dd>
                <dd><a href="#">清洁工具</a></dd>
                <dd><a href="#">驱虫用品</a></dd>
                <dd><a href="#">家庭清洁</a></dd>
                <dd><a href="#">皮具护理</a></dd>
              </dl>
              <dl>
                <dt><a href="#">面部护肤</a></dt>
                <dd><a href="#">洁面乳</a></dd>
                <dd><a href="#">面膜</a></dd>
                <dd><a href="#">防晒</a></dd>
                <dd><a href="#">隔离</a></dd>
                <dd><a href="#">爽肤水</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">母婴/玩具乐器</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">男装</a></dt>
                <dd><a href="#">衬衫</a></dd>
                <dd><a href="#">针织衫</a></dd>
                <dd><a href="#">夹克</a></dd>
                <dd><a href="#">风衣</a></dd>
                <dd><a href="#">牛仔裤</a></dd>
              </dl>
              <dl>
                <dt><a href="#">女装</a></dt>
                <dd><a href="#">雪纺衫</a></dd>
                <dd><a href="#">休闲裤</a></dd>
                <dd><a href="#">小西装</a></dd>
                <dd><a href="#">皮衣</a></dd>
                <dd><a href="#">羽绒服</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">食品/酒类/生鲜/特产</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">钟表</a></dt>
                <dd><a href="#">男表</a></dd>
                <dd><a href="#">瑞士表</a></dd>
                <dd><a href="#">女表</a></dd>
                <dd><a href="#">风衣</a></dd>
                <dd><a href="#">智能手表</a></dd>
                <dd><a href="#">闹钟</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">艺术/礼品鲜花/农资绿植</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">流行男鞋</a></dt>
                <dd><a href="#">休闲鞋</a></dd>
                <dd><a href="#">商务鞋</a></dd>
                <dd><a href="#">功能鞋</a></dd>
                <dd><a href="#">布鞋</a></dd>
                <dd><a href="#">人字拖</a></dd>
              </dl>
              <dl>
                <dt><a href="#">时尚女鞋</a></dt>
                <dd><a href="#">高跟鞋</a></dd>
                <dd><a href="#">凉鞋</a></dd>
                <dd><a href="#">雪地靴</a></dd>
                <dd><a href="#">筒靴</a></dd>
                <dd><a href="#">内增高</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">医药保健/计生情趣</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">营养辅食</a></dt>
                <dd><a href="#">维生素</a></dd>
                <dd><a href="#">面条</a></dd>
                <dd><a href="#">益生菌</a></dd>
                <dd><a href="#">钙铁锌硒</a></dd>
                <dd><a href="#">DHA</a></dd>
              </dl>
              <dl>
                <dt><a href="#">妈妈专区</a></dt>
                <dd><a href="#">孕妇装</a></dd>
                <dd><a href="#">孕妇护肤</a></dd>
                <dd><a href="#">防辐射服</a></dd>
                <dd><a href="#">产后塑身</a></dd>
                <dd><a href="#">月子装</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">图书/文娱/教育/电子书</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">流行皮包</a></dt>
                <dd><a href="#">钱包</a></dd>
                <dd><a href="#">手包</a></dd>
                <dd><a href="#">钥匙包</a></dd>
                <dd><a href="#">手提包</a></dd>
                <dd><a href="#">公文包</a></dd>
              </dl>
              <dl>
                <dt><a href="#">婚庆</a></dt>
                <dd><a href="#">婚庆首饰</a></dd>
                <dd><a href="#">婚纱摄影</a></dd>
                <dd><a href="#">婚宴</a></dd>
                <dd><a href="#">婚庆服务</a></dd>
                <dd><a href="#">婚纱礼服</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">机票/酒店/旅游/生活</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">地方特产</a></dt>
                <dd><a href="#">北京</a></dd>
                <dd><a href="#">新疆</a></dd>
                <dd><a href="#">四川</a></dd>
                <dd><a href="#">福建</a></dd>
                <dd><a href="#">重庆</a></dd>
              </dl>
              <dl>
                <dt><a href="#">进口食品</a></dt>
                <dd><a href="#">饼干果干</a></dd>
                <dd><a href="#">巧克力</a></dd>
                <dd><a href="#">牛奶</a></dd>
                <dd><a href="#">调味食品</a></dd>
                <dd><a href="#">休闲零食</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">众筹/白条/保险/企业金融</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">木手串</a></dt>
                <dd><a href="#">小叶紫檀</a></dd>
                <dd><a href="#">黄花梨</a></dd>
                <dd><a href="#">禅香木</a></dd>
                <dd><a href="#">金丝楠</a></dd>
              </dl>
              <dl>
                <dt><a href="#">钻石</a></dt>
                <dd><a href="#">裸钻</a></dd>
                <dd><a href="#">钻戒</a></dd>
                <dd><a href="#">耳饰</a></dd>
                <dd><a href="#">手镯</a></dd>
                <dd><a href="#">手链</a></dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">安装/维修/清洗/二手</a>
            <div class="second-menu">
              <dl>
                <dt><a href="#">二手家电</a></dt>
                <dd><a href="#">洗衣机</a></dd>
                <dd><a href="#">烘干机</a></dd>
                <dd><a href="#">烤箱</a></dd>
                <dd><a href="#">微波炉</a></dd>
              </dl>
              <dl>
                <dt><a href="#">上门清洗</a></dt>
                <dd><a href="#">油烟机</a></dd>
                <dd><a href="#">橱柜</a></dd>
                <dd><a href="#">灶台</a></dd>
                <dd><a href="#">锅</a></dd>
                <dd><a href="#">燃气灶</a></dd>
              </dl>
            </div>
          </li>
        </ul>
        <!-- 轮播图容器 -->
        <div class="banner-carousel" 
             @mouseenter="pauseAutoPlay" 
             @mouseleave="startAutoPlay">
          <!-- 图片容器 -->
          <div class="carousel-container">
            <div class="carousel-wrapper" 
                 :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div class="carousel-item" 
                   v-for="(image, index) in bannerImages" 
                   :key="index">
                <img :src="image.src" :alt="image.alt">
              </div>
            </div>
          </div>
          
          <!-- 左右切换按钮 -->
          <button class="carousel-btn carousel-btn-prev" 
                  @click="prevImage">
            <span>&lt;</span>
          </button>
          <button class="carousel-btn carousel-btn-next" 
                  @click="nextImage">
            <span>&gt;</span>
          </button>
          
          <!-- 底部指示器 -->
          <div class="carousel-indicators">
            <span class="indicator" 
                  v-for="(image, index) in bannerImages" 
                  :key="index"
                  :class="{ active: index === currentIndex }"
                  @click="goToImage(index)">
            </span>
          </div>
        </div>
        <div class="slide-other">
          <div class="message">
            <div class="title">
              <span>尚品快报</span>
              <a href="#">更多&nbsp;&gt;</a>
            </div>
            <ul class="msg-list">
              <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
              <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
              <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
              <li><a href="#">[特惠] 毛衣+直筒裤才是YYDS</a></li>
            </ul>
          </div>
          <div class="other-nav">
            <ul class="nav-list">
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
              <li><a href="#">
                  <div class="picture">

                  </div>
                  <span>占位符</span>
                </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 秒杀 -->
    <div class="seckill">
      <div class="container">
        <img src="../assets/images/seckill.png" alt="秒杀">
        <img src="../assets/images/banner1.png" alt="秒杀1">
        <img src="../assets/images/banner2.png" alt="秒杀2">
        <img src="../assets/images/banner3.png" alt="秒杀3">
        <img src="../assets/images/baner4.png" alt="秒杀4">
      </div>
    </div>
    <!-- 楼层 -->
    <div class="floor">
      <div class="container">
        <!-- 上部分 -->
        <div class="floor-nav">
          <span class="floor-name">家用电器</span>
          <ul class="floor-nav-list">
            <li><a href="#">热门</a></li>
            <li><a href="#">大家电</a></li>
            <li><a href="#">生活电器</a></li>
            <li><a href="#">厨房电器</a></li>
            <li><a href="#">应季电器</a></li>
            <li><a href="#">空气/净水</a></li>
            <li><a href="#">高端电器</a></li>
          </ul>
        </div>
        <!-- 下部分 -->
        <div class="floor-info">
          <div class="item item1">
            <ul class="item1-list clearfix">
              <li><a href="#">节能补贴</a></li>
              <li><a href="#">4K电视</a></li>
              <li><a href="#">空气净化器</a></li>
              <li><a href="#">IH电饭煲</a></li>
              <li><a href="#">滚筒洗衣机</a></li>
              <li><a href="#">电热水器</a></li>
            </ul>
            <img src="../assets/images/编组.png" alt="广告图">
          </div>
          <div class="item item2">
            <img src="../assets/images/appliance_banner07.png" alt="广告图">
          </div>
          <div class="item item3">
            <img src="../assets/images/微波炉.png" alt="微波炉">
            <img src="../assets/images/空气炸锅.png" alt="空气炸锅">
          </div>
          <div class="item item4">
            <img src="../assets/images/冰箱.png" alt="冰箱">
          </div>
          <div class="item item5">
            <img src="../assets/images/电饭煲.png" alt="电饭煲">
            <img src="../assets/images/电饭煲2.png" alt="电饭煲2">
          </div>
        </div>
      </div>
    </div>
    <div class="floor">
        <div class="container">
            <!-- 上部分 -->
            <div class="floor-nav">
                <span class="floor-name">家用电器</span>
                <ul class="floor-nav-list">
                    <li><a href="#">热门</a></li>
                    <li><a href="#">大家电</a></li>
                    <li><a href="#">生活电器</a></li>
                    <li><a href="#">厨房电器</a></li>
                    <li><a href="#">应季电器</a></li>
                    <li><a href="#">空气/净水</a></li>
                    <li><a href="#">高端电器</a></li>
                </ul>
            </div>
            <!-- 下部分 -->
            <div class="floor-info">
                <div class="item item1">
                    <ul class="item1-list">
                        <li><a href="#">节能补贴</a></li>
                        <li><a href="#">4K电视</a></li>
                        <li><a href="#">空气净化器</a></li>
                        <li><a href="#">IH电饭煲</a></li>
                        <li><a href="#">滚筒洗衣机</a></li>
                        <li><a href="#">电热水器</a></li>
                    </ul>
                    <img src="../assets/images/编组.png" alt="广告图">
                </div>
                <div class="item item2">
                    <img src="../assets/images/appliance_banner07.png" alt="广告图">
                </div>
                <div class="item item3">
                    <img src="../assets/images/微波炉.png" alt="微波炉">
                    <img src="../assets/images/空气炸锅.png" alt="空气炸锅">
                </div>
                <div class="item item4">
                    <img src="../assets/images/冰箱.png" alt="冰箱">
                </div>
                <div class="item item5">
                    <img src="../assets/images/电饭煲.png" alt="电饭煲">
                    <img src="../assets/images/电饭煲2.png" alt="电饭煲2">
                </div>
            </div>
        </div>
    </div>
    <!-- 页脚 -->
    <div class="footer">
        <div class="container">
            <!-- 顶部链接 -->
            <div class="top-links">
                <ul class="links-list">
                    <li><a href="#">购物指南</a></li>
                    <li><a href="#">购物流程</a></li>
                    <li><a href="#">会员介绍</a></li>
                    <li><a href="#">生活旅行</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">大家电</a></li>
                    <li><a href="#">联系客服</a></li>
                </ul>
                <ul class="links-list">
                    <li><a href="#">配送方式</a></li>
                    <li><a href="#">上门自提</a></li>
                    <li><a href="#">211限时达</a></li>
                    <li><a href="#">配送服务查询</a></li>
                    <li><a href="#">配送费收取标准</a></li>
                </ul>
                <ul class="links-list">
                    <li><a href="#">支付方式</a></li>
                    <li><a href="#">货到付款</a></li>
                    <li><a href="#">在线支付</a></li>
                    <li><a href="#">生活旅行</a></li>
                    <li><a href="#">分期付款</a></li>
                    <li><a href="#">公司转账</a></li>
                </ul>
                <ul class="links-list">
                    <li><a href="#">售后服务</a></li>
                    <li><a href="#">售后政策</a></li>
                    <li><a href="#">价格保护</a></li>
                    <li><a href="#">退款说明</a></li>
                    <li><a href="#">返修/退换货</a></li>
                    <li><a href="#">取消订单</a></li>
                </ul>
                <ul class="links-list">
                    <li><a href="#">特色服务</a></li>
                    <li><a href="#">夺宝岛</a></li>
                    <li><a href="#">DIY装机</a></li>
                    <li><a href="#">延保服务</a></li>
                    <li><a href="#">尚品汇E卡</a></li>
                    <li><a href="#">尚品汇通信</a></li>
                    <li><a href="#">尚品鱼座智能</a></li>
                </ul>
                <ul class="links-list">
                    <li><a href="#">自营覆盖区县</a></li>
                    <li><a href="#">尚品汇已向全国2661个区县</a></li>
                    <li><a href="#">提供自 营配送服务，支持货到</a></li>
                    <li><a href="#">付款、POS 机刷卡和售后上门</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">服务</a></li>
                    <li><a href="#">查看详情</a></li>
                </ul>
            </div>
            <!-- 分隔线 -->
            <div class="line"></div>
            <!-- 底部链接 -->
            <div class="bottom-links">
                <ul class="bottom-links-list clearfix">
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">联系客服</a></li>
                    <li><a href="#">合作招商</a></li>
                    <li><a href="#">商家帮助</a></li>
                    <li><a href="#">营销中心</a></li>
                    <li><a href="#">手机尚品</a></li>
                    <li><a href="#">友情链接</a></li>
                    <li><a href="#">销售联盟</a></li>
                    <li><a href="#">隐私政策</a></li>
                </ul>
                <div class="copyright">京ICP备12345678901</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainView',
  data() {
    return {
      // 轮播图相关数据
      currentIndex: 0, // 当前显示的图片索引
      autoPlayTimer: null, // 自动播放定时器
      bannerImages: [
        {
          src: require('../assets/images/banner主图1.png'),
          alt: 'Banner 1'
        },
        {
          src: require('../assets/images/banner主图2.png'),
          alt: 'Banner 2'
        },
        {
          src: require('../assets/images/banner主图3.png'),
          alt: 'Banner 3'
        }
      ]
    }
  },
  methods: {
    /**
     * 切换到下一张图片
     */
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length;
    },
    
    /**
     * 切换到上一张图片
     */
    prevImage() {
      this.currentIndex = this.currentIndex === 0 
        ? this.bannerImages.length - 1 
        : this.currentIndex - 1;
    },
    
    /**
     * 跳转到指定索引的图片
     * @param {number} index - 目标图片索引
     */
    goToImage(index) {
      this.currentIndex = index;
    },
    
    /**
     * 开始自动播放
     */
    startAutoPlay() {
      this.autoPlayTimer = setInterval(() => {
        this.nextImage();
      }, 3000); // 每3秒切换一次
    },
    
    /**
     * 暂停自动播放
     */
    pauseAutoPlay() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
      }
    }
  },
  
  /**
   * 组件挂载时启动自动播放
   */
  mounted() {
    this.startAutoPlay();
  },
  
  /**
   * 组件销毁前清理定时器
   */
  beforeUnmount() {
    this.pauseAutoPlay();
  }
}
</script>
<style>
/* 
- 颜色参考：“
链接被鼠标悬浮时：#1ac587；
分割线：#c2f587
背景颜色：#f1ffd5
特殊字的字体颜色：#1ac587
其他颜色：稍浅的#c2f587、稍深的#c2f587
”
*/



.container {
  width: 1190px;
  margin: 0 auto;
}

li a:hover {
  color: #1ac587;
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

/* .type-nav li a:hover {
  color: #1ac587;
} */
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
  position: relative;
}

.main-content .slide-nav li {
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  padding-left: 16px;
}

.main-content .slide-nav li:hover {
  background-color: #c2f587;

}

.main-content .slide-nav li:hover>a {
  color: #1ac587;
}

/* 二级菜单 */
.second-menu {
  width: 680px;
  height: 458px;
  background-color: #F4F4F4;
  position: absolute;
  top: 0;
  left: 190px;
  padding-left: 20px;
  display: none;
}

.main-content .slide-nav li:hover .second-menu {
  display: block;
}

.second-menu dl {
  height: 36px;
  line-height: 36px;
}

.second-menu dl:first-child {
  margin-top: 10px;
}

.second-menu dl {
  display: flex;
}

.second-menu dt {
  width: 70px;
  font-weight: bold;
  margin-right: 10px;
}

.second-menu dd a {
  padding: 0 10px;
  border-left: 1px solid #666;
}

.second-menu dd a:hover,
.second-menu dt a:hover {
  color: #1ac587;
}



/* 轮播图容器样式 */
.main-content .banner-carousel {
  width: 690px;
  height: 458px;
  margin: 0 10px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 图片容器 */
.carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
}

/* 图片包装器 */
.carousel-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

/* 单个图片项 */
.carousel-item {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 左右切换按钮 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn-prev {
  left: 15px;
}

.carousel-btn-next {
  right: 15px;
}

/* 底部指示器 */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.indicator.active {
  background-color: #1ac587;
  transform: scale(1.3);
}


.main-content .slide-other {
  width: 290px;
  height: 458px;
  /* background-color: orange; */
}

.slide-other .message {
  width: 260px;
  height: 156px;
  padding: 0 14px;
  border: 1px solid #D9D9D9;
}

.slide-other .message .title {
  height: 38px;
  line-height: 38px;
  border-bottom: 1px solid #D9D9D9;
  display: flex;
  justify-content: space-between;
}

.slide-other .message .title span {
  font-size: 14px;
}

.slide-other .message .title a {
  font-size: 12px;
}

.slide-other .msg-list li {
  height: 26px;
  line-height: 26px;
}

/* #region 侧边精灵图导航 */
.slide-other .other-nav {
  margin-top: 10px;
  width: 290px;
  height: 290px;
}

.nav-list {
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 17px 22px;
}

.nav-list li {
  width: 48px;
  height: 70px;
  font-align: center;
}

.nav-list .picture {
  width: 48px;
  height: 48px;
  background-image: url('../assets/images/精灵图-侧边功能.png');
}

/* 第1行图标 */
.nav-list li:nth-child(1) .picture {
  background-position: 0 0;
}

.nav-list li:nth-child(2) .picture {
  background-position: -48px 0;
}

.nav-list li:nth-child(3) .picture {
  background-position: -96px 0;
}

.nav-list li:nth-child(4) .picture {
  background-position: -144px 0;
}

/* 第2行图标 */
.nav-list li:nth-child(5) .picture {
  background-position: 0 -48px;
}

.nav-list li:nth-child(6) .picture {
  background-position: -48px -48px;
}

.nav-list li:nth-child(7) .picture {
  background-position: -96px -48px;
}

.nav-list li:nth-child(8) .picture {
  background-position: -144px -48px;
}

/* 第3行图标 */
.nav-list li:nth-child(9) .picture {
  background-position: 0 -96px;
}

.nav-list li:nth-child(10) .picture {
  background-position: -48px -96px;
}

.nav-list li:nth-child(11) .picture {
  background-position: -96px -96px;
}

.nav-list li:nth-child(12) .picture {
  background-position: -144px -96px;
}

.nav-list li span {
  font-size: 12px;
  width: 48px;
  text-align: center;
  display: block;
}

/* #endregion */
/* #endregion */
/* #region 秒杀 */
.seckill {
  margin-top: 10px;
}

.seckill .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* #endregion */
/* #region楼层区start*/
.floor {
  margin-top: 48px;
}

.floor-name {
  font-size: 20px;
}

.floor-nav {
  height: 30px;
  line-height: 30px;
  padding-bottom: 4px;
  border-bottom: 2px solid #c2f587;
  display: flex;
  justify-content: space-between;
}

.floor-nav-list {
  display: flex;
}

.floor-nav-list li {
  font-size: 14px;
}

.floor-nav-list li a {
  padding: 0 10px;
  border-right: 1px solid #666;
}

.floor-nav-list li:first-child a {
  padding-left: 0;
}

.floor-nav-list li:last-child a {
  padding-right: 0;
  border: 0;
}

.floor-info {
  display: flex;
}

.floor-info .item1 {
  width: 190px;
  height: 392px;
  background-color: #F4F4F4;
  padding: 20px;
}

.item1-list {
  margin-bottom: 29px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  row-gap: 14.4px;
}

.item1-list li {
  width: 90px;
  height: 22px;
  padding-bottom: 3.5px;
  border-bottom: 1px solid #D9D9D9;
  font-size: 16px;
  text-align: center;
}


.floor-info .item2 {
  width: 340px;
  height: 432px;
}

.floor-info .item3,
.floor-info .item4,
.floor-info .item5 {
  width: 206px;
  height: 432px;
}

.floor-info .item3 img,
.floor-info .item4 img,
.floor-info .item5 img {
  border-bottom: 1px solid #E2E2E2;
}

.floor-info .item3,
.floor-info .item4 {
  border-right: 1px solid #E2E2E2;
}

/* #endregion楼层区end*/


/* #region页脚区start */
.footer {
    margin-top: 48px;
    height: 440px;
    background-color: #483E3E ;
}
.top-links {
    display: flex;
    justify-content: space-between;
}
.links-list {
    width: 190px;
    height: 176px;
    margin-top: 48px;
    margin-right: 10px;
}
.links-list:last-child {
    margin-right: 0px;
}
.links-list a {
    color: white;
    font-size: 14px;
}
.line {
    margin-top: 22px;
    height: 1px;
    background-color: #584D4D;
}
.bottom-links {
    text-align: center;
    margin-top: 47px;
}
.bottom-links-list {
    display: flex;
    justify-content: center;
}

.bottom-links-list li a {
    padding: 0 26px;
    border-right: 1px solid white;
    color: white;
}
.bottom-links-list li:first-child a {
    padding-left: 0;
}
.bottom-links-list li:last-child a {
    padding-right: 0;
    border: 0;
}
.copyright {
    margin-top: 10px;
    color: white;
}


/* #endregion页脚区end */
</style>