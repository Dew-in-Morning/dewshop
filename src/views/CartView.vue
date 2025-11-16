<template>
  <div class="mainview">
    <!-- 顶部导航栏 -->
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
            <li><a href="#/main">首页</a></li>
            <li><a href="#">商品分类</a></li>
            <li><a href="#/cart" class="active">购物车</a></li>
            <li><a href="#">我的订单</a></li>
            <li><a href="#">用户中心</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 页面头部 -->
    <div class="header">
      <div class="container">
        <div class="logo">
          <img src="../assets/images/pnglogo.png" alt="">
        </div>
        <div class="search">
          <input type="text" placeholder="搜索商品">
          <button><img src="../assets/images/search_icon.png" alt=""></button>
        </div>
      </div>
    </div>

    <!-- 购物车内容 -->
    <div class="cart-content">
      <div class="container">
        <!-- 购物车标题 -->
        <div class="cart-header">
          <h2>购物车</h2>
          <div class="cart-breadcrumb">
            <span><a href="#/main">首页</a></span>
            <span class="separator">></span>
            <span class="current">购物车</span>
          </div>
        </div>

        <!-- 购物车主体 -->
        <div class="cart-main" v-if="cartItems.length > 0">
          <!-- 购物车表头 -->
          <div class="cart-table-header">
            <div class="cart-checkbox">
              <input type="checkbox" v-model="selectAll" @change="toggleSelectAll">
              <span>全选</span>
            </div>
            <div class="cart-product">商品信息</div>
            <div class="cart-price">单价</div>
            <div class="cart-quantity">数量</div>
            <div class="cart-subtotal">小计</div>
            <div class="cart-action">操作</div>
          </div>

          <!-- 购物车商品列表 -->
          <div class="cart-item" v-for="item in cartItems" :key="item.id">
            <div class="cart-checkbox">
              <input type="checkbox" v-model="item.selected" @change="updateTotalPrice">
            </div>
            <div class="cart-product">
              <div class="product-image">
                <img :src="item.image" :alt="item.name">
              </div>
              <div class="product-info">
                <h4>{{ item.name }}</h4>
                <p class="product-desc">{{ item.description }}</p>
              </div>
            </div>
            <div class="cart-price">
              <span class="current-price">¥{{ item.price }}</span>
              <span class="original-price" v-if="item.originalPrice">¥{{ item.originalPrice }}</span>
            </div>
            <div class="cart-quantity">
              <div class="quantity-controls">
                <button @click="decreaseQuantity(item)" :disabled="item.quantity <= 1">-</button>
                <input type="number" v-model="item.quantity" @change="updateTotalPrice" min="1">
                <button @click="increaseQuantity(item)">+</button>
              </div>
            </div>
            <div class="cart-subtotal">
              <span class="subtotal-price">¥{{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
            <div class="cart-action">
              <button class="remove-btn" @click="removeItem(item.id)">删除</button>
            </div>
          </div>

          <!-- 购物车底部操作栏 -->
          <div class="cart-footer">
            <div class="cart-footer-left">
              <button class="clear-btn" @click="clearSelected">清空已选商品</button>
            </div>
            <div class="cart-footer-right">
              <div class="total-info">
                <span class="selected-count">已选择 {{ selectedCount }} 件商品</span>
                <span class="total-price">
                  合计：<span class="price-highlight">¥{{ totalPrice.toFixed(2) }}</span>
                </span>
              </div>
              <button class="checkout-btn" @click="checkout" :disabled="selectedCount === 0">
                去结算({{ selectedCount }})
              </button>
            </div>
          </div>
        </div>

        <!-- 空购物车提示 -->
        <div class="empty-cart" v-else>
          <div class="empty-icon">🛒</div>
          <h3>您的购物车还是空的</h3>
          <p>快去挑选您喜欢的商品吧！</p>
          <button class="go-shopping-btn" @click="goToMain">去购物</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  data() {
    return {
      selectAll: false,
      cartItems: [
        {
          id: 1,
          name: '华为 Mate 50 Pro 5G手机',
          description: '8GB+256GB 昆仑玻璃版 曜金黑',
          price: 6799,
          originalPrice: 7999,
          quantity: 1,
          image: '../assets/images/phone1.jpg',
          selected: true
        },
        {
          id: 2,
          name: 'Apple iPhone 14 Pro Max',
          description: '128GB 深空黑色 移动联通电信5G手机',
          price: 8999,
          originalPrice: 9999,
          quantity: 2,
          image: '../assets/images/phone2.jpg',
          selected: true
        },
        {
          id: 3,
          name: '小米13 Ultra',
          description: '12GB+256GB 黑色 徕卡影像 5G手机',
          price: 5499,
          quantity: 1,
          image: '../assets/images/phone3.jpg',
          selected: false
        }
      ]
    }
  },
  computed: {
    selectedCount() {
      return this.cartItems.filter(item => item.selected).reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice() {
      return this.cartItems.filter(item => item.selected).reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },
  methods: {
    toggleSelectAll() {
      this.cartItems.forEach(item => {
        item.selected = this.selectAll
      })
      this.updateTotalPrice()
    },
    updateTotalPrice() {
      // 检查是否全选
      this.selectAll = this.cartItems.every(item => item.selected)
    },
    increaseQuantity(item) {
      item.quantity++
      this.updateTotalPrice()
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--
        this.updateTotalPrice()
      }
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
      this.updateTotalPrice()
    },
    clearSelected() {
      this.cartItems = this.cartItems.filter(item => !item.selected)
      this.selectAll = false
      this.updateTotalPrice()
    },
    checkout() {
      if (this.selectedCount > 0) {
        alert(`准备结算 ${this.selectedCount} 件商品，总金额：¥${this.totalPrice.toFixed(2)}`)
        // 这里可以跳转到结算页面
      }
    },
    goToMain() {
      this.$router.push('/main')
    }
  },
  mounted() {
    this.updateTotalPrice()
  }
}
</script>

<style scoped>
/* 基础样式 */
.mainview {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.container {
  width: 1190px;
  margin: 0 auto;
}

/* 顶部导航栏样式 */
.topbar {
  background-color: #f1ffd5;
  padding: 8px 0;
  border-bottom: 1px solid #c2f587;
}

.welcome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.hello {
  color: #1ac587;
  font-weight: bold;
}

.welcome a {
  color: #666;
  text-decoration: none;
  margin: 0 5px;
}

.welcome a:hover {
  color: #1ac587;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 10px 0;
}

.nav a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
}

.nav a:hover,
.nav a.active {
  color: #1ac587;
}

/* 页面头部样式 */
.header {
  background-color: white;
  padding: 20px 0;
  border-bottom: 1px solid #c2f587;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 60px;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  width: 400px;
  height: 40px;
  padding: 0 15px;
  border: 2px solid #c2f587;
  border-radius: 20px 0 0 20px;
  outline: none;
  font-size: 14px;
}

.search button {
  height: 44px;
  width: 60px;
  border: 2px solid #c2f587;
  border-left: none;
  border-radius: 0 20px 20px 0;
  background-color: #c2f587;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search button:hover {
  background-color: #1ac587;
}

/* 购物车内容样式 */
.cart-content {
  background-color: white;
  margin-top: 20px;
  padding: 30px 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #c2f587;
}

.cart-header h2 {
  color: #1ac587;
  font-size: 24px;
  margin: 0;
}

.cart-breadcrumb {
  font-size: 14px;
  color: #666;
}

.cart-breadcrumb a {
  color: #1ac587;
  text-decoration: none;
}

.cart-breadcrumb .separator {
  margin: 0 8px;
  color: #ccc;
}

.cart-breadcrumb .current {
  color: #1ac587;
  font-weight: bold;
}

/* 购物车表格样式 */
.cart-table-header {
  display: grid;
  grid-template-columns: 100px 1fr 120px 150px 120px 100px;
  align-items: center;
  padding: 15px 0;
  background-color: #f1ffd5;
  border: 1px solid #c2f587;
  border-radius: 5px;
  font-weight: bold;
  color: #1ac587;
}

.cart-table-header > div {
  text-align: center;
}

.cart-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.cart-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr 120px 150px 120px 100px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.cart-item > div {
  text-align: center;
}

.cart-product {
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left !important;
}

.product-image img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #eee;
}

.product-info h4 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #333;
  font-weight: normal;
}

.product-desc {
  margin: 0;
  font-size: 12px;
  color: #999;
}

.cart-price .current-price {
  color: #1ac587;
  font-weight: bold;
  font-size: 16px;
}

.cart-price .original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.quantity-controls button {
  width: 30px;
  height: 30px;
  border: 1px solid #c2f587;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #1ac587;
}

.quantity-controls button:hover:not(:disabled) {
  background-color: #c2f587;
  color: white;
}

.quantity-controls button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.quantity-controls input {
  width: 50px;
  height: 28px;
  border: 1px solid #c2f587;
  border-left: none;
  border-right: none;
  text-align: center;
  outline: none;
}

.subtotal-price {
  color: #1ac587;
  font-weight: bold;
  font-size: 16px;
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  text-decoration: underline;
}

.remove-btn:hover {
  color: #e74c3c;
}

/* 购物车底部操作栏 */
.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #eee;
  margin-top: 20px;
}

.clear-btn {
  background: none;
  border: 1px solid #c2f587;
  color: #1ac587;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.clear-btn:hover {
  background-color: #c2f587;
  color: white;
}

.cart-footer-right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.total-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.selected-count {
  font-size: 14px;
  color: #666;
}

.total-price {
  font-size: 16px;
  color: #333;
}

.price-highlight {
  color: #1ac587;
  font-size: 20px;
  font-weight: bold;
}

.checkout-btn {
  background-color: #1ac587;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.checkout-btn:hover:not(:disabled) {
  background-color: #0ea670;
}

.checkout-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* 空购物车样式 */
.empty-cart {
  text-align: center;
  padding: 80px 0;
  color: #666;
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 20px;
  opacity: 0.6;
}

.empty-cart h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.empty-cart p {
  font-size: 16px;
  margin-bottom: 30px;
}

.go-shopping-btn {
  background-color: #1ac587;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.go-shopping-btn:hover {
  background-color: #0ea670;
}

/* 响应式样式 */
@media (max-width: 1200px) {
  .container {
    width: 95%;
    max-width: 1190px;
  }
}

@media (max-width: 768px) {
  .cart-table-header,
  .cart-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cart-product {
    justify-content: flex-start;
  }

  .search input {
    width: 250px;
  }
}
</style>