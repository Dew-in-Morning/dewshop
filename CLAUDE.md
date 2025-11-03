# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个名为"DewShop"的Vue 3电商前端项目，是一个学习性质的电商购物平台前端实现。项目使用Vue CLI创建，集成了Element Plus UI库，目前包含登录和主页两个主要页面。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vue CLI 5.0
- **UI框架**: Element Plus 2.11.5
- **路由**: Vue Router 4.0.3
- **样式**: CSS3 + 自定义样式
- **开发语言**: JavaScript (非TypeScript)

## 常用命令

```bash
# 安装依赖
npm install

# 开发服务器 (热重载)
npm run serve

# 生产构建
npm run build

# 代码检查和修复
npm run lint
```

## 项目结构

```
src/
├── assets/                 # 静态资源
│   ├── images/            # 图片资源 (商品图片、图标、精灵图等)
│   ├── 登录页面.mp4        # 登录页背景视频
│   └── reset.css          # CSS重置样式
├── components/            # 可复用组件
├── router/                # 路由配置
├── views/                 # 页面组件
│   ├── LoginView.vue      # 登录/注册页
│   └── MainView.vue       # 主页 (电商首页)
├── App.vue               # 根组件
└── main.js              # 应用入口
```

## 核心架构特点

### 1. 路由设计
- 使用Hash路由模式 (`createWebHashHistory`)
- 默认重定向到登录页 (`/login`)
- 两个主要路由: `/login` (登录) 和 `/main` (主页)

### 2. 登录页面 (LoginView.vue)
- **视频背景**: 使用HTML5 video元素作为全屏背景
- **双表单切换**: 支持登录和注册模式切换
- **多种认证方式**: 支持用户名/手机号/邮箱登录，手机号/邮箱注册
- **Element Plus集成**: 使用el-form、el-input、el-button等组件
- **响应式交互**: 包含静音按钮控制背景视频
- **Composition API**: 使用Vue 3的setup语法糖

### 3. 主页面 (MainView.vue)
- **电商布局**: 完整的电商首页布局结构
- **导航系统**: 包含顶部导航、搜索栏、主导航和侧边分类菜单
- **多级菜单**: 侧边栏支持一级和二级分类展示
- **轮播图**: 自定义实现的图片轮播组件，支持自动播放、手动控制
- **商品楼层**: 家电类商品展示区域
- **响应式设计**: 鼠标悬停效果和交互反馈

### 4. 样式组织
- 全局CSS重置 (reset.css)
- 组件级scoped样式
- 响应式布局 (固定宽度1190px容器)
- 精灵图技术用于图标显示
- 绿色主题色系 (#1ac587, #c2f587, #f1ffd5)

### 5. 静态资源
- 大量商品和分类图标
- 轮播图图片素材
- 品牌Logo和装饰性图片
- 精灵图优化的小图标

## 开发注意事项

### Element Plus使用
- 项目全局引入Element Plus和样式
- 主要使用表单相关组件 (el-form, el-input, el-button, el-radio)
- 未使用按需引入，全量引入可能影响打包大小

### 视频资源处理
- 登录页使用MP4视频作为背景
- 需要注意视频文件大小和加载性能
- 实现了静音/解除静音控制以符合浏览器自动播放策略

### 样式规范
- 使用传统CSS而非CSS预处理器
- 遵循BEM命名规范的变体
- 大量使用flexbox和grid布局
- 固定像素值而非响应式单位

### 路由和状态
- 目前未集成状态管理 (Vuex/Pinia)
- 页面间数据传递需要通过路由参数或localStorage
- 登录状态管理需要额外实现

## Git提交历史关键信息
- 最近提交包含注册功能完成
- 之前实现了登录部分
- 添加了视频静音按钮以应对浏览器限制
- 使用了Element Plus表单组件

## 潜在改进方向
- 添加状态管理
- 实现真实的用户认证
- 优化静态资源加载
- 添加更多页面 (商品详情、购物车等)
- 移动端适配