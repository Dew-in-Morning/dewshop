<template>
    <div class="login-view">
        <video ref="bgVideo" autoplay loop muted playsinline id="bg-video">
            <source src="../assets/登录页面.mp4" type="video/mp4">
            您的浏览器不支持 HTML5 视频。
        </video>
        <!-- 静音/解除静音按钮 -->
        <button class="mute-button" @click="toggleMute">
            {{ isMuted ? '🔇' : '🔊' }}
        </button>
        <div>
            <div class="logo">
                <img src="../assets/images/pnglogo.png" alt="logo">
            </div>
            <div class="login-container">
                <h2 class="title1">登录</h2>
                <h2 class="title2">注册</h2>
                <el-form :model="form" label-width="auto" style="max-width: 600px ;display: none;">
                    <el-form-item>
                        <el-input clearable v-model="form.name" :placeholder="placeholderText" />
                    </el-form-item>
                    <el-form-item>
                        <el-input clearable show-password v-model="form.password" placeholder="请输入密码" type="password" />
                    </el-form-item>
                    <el-form-item>
                        <el-radio-group v-model="form.loginMethod">
                            <el-radio value="username">用户名登录</el-radio>
                            <el-radio value="phone">手机号登录</el-radio>
                            <el-radio value="email">邮箱登录</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    
                    <el-form-item class="submit-group">
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
                <el-form :model="form2" label-width="auto" style="max-width: 600px ;display: block;">
                    <el-form-item>
                        <el-input clearable v-model="form2.name" :placeholder="placeholderText2" />
                    </el-form-item>
                    <el-form-item>
                        <el-input clearable show-password v-model="form2.password" placeholder="请输入密码" type="password" />
                    </el-form-item>
                    <el-form-item>
                        <el-input clearable show-password v-model="form2.confirmPassword" placeholder="请确认密码" type="password" />
                    </el-form-item>
                    <el-form-item>
                        <el-radio-group v-model="form2.registerMethod">
                            <el-radio value="phone">手机号注册</el-radio>
                            <el-radio value="email">邮箱注册</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    
                    <el-form-item class="submit-group">
                        <el-button type="primary" @click="onSubmit">注册</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'

// 定义表单数据
const form = reactive({
  name: '',
  password: '',
  
loginMethod: 'username', // 默认登录方式
})
const form2 = reactive({
  name: '',
  password: '',
  confirmPassword: '',
registerMethod: 'phone', // 默认注册方式
})
// 提交表单
const onSubmit = () => {
  console.log('submit!')
}




// 视频元素引用
const bgVideo = ref(null)
// 静音状态
const isMuted = ref(true)

// 切换静音状态
const toggleMute = () => {
  if (bgVideo.value) {
    bgVideo.value.muted = !bgVideo.value.muted
    isMuted.value = bgVideo.value.muted
  }
}

onMounted(() => {
  if (bgVideo.value) {
    // 确保视频初始状态是静音的
    bgVideo.value.muted = true
    isMuted.value = true
  }
})




// 根据登录方式动态改变输入框提示文本
const placeholderText = computed(() => {
  switch (form.loginMethod) {
    case 'username':
      return '请输入用户名'
    case 'phone':
      return '请输入手机号'
    case 'email':
      return '请输入邮箱'
    default:
      return '请输入'
  }
})
// 根据注册方式动态改变输入框提示文本
const placeholderText2 = computed(() => {
  switch (form2.registerMethod) {
    case 'phone':
      return '请输入手机号'
    case 'email':
      return '请输入邮箱'
    default:
      return '请输入'
  }
})
</script>

<style scoped>
#bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    /* 在内容后面 */
    object-fit: cover;
    /* 保持比例填充 */

}

.login-view {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100vh;
}

.login-container {
    position: relative;
    z-index: 1;
    width: 400px;
    height: 450px;
    background-color: #fff;
    padding: 20px;
    margin-right: 100px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title1 {
    text-align: center;
    margin: 20px 0px 40px 0px;
    font-size: 40px;
    font-weight: bold;
    color: #1ac587;

}
.title2 {
    position: absolute;
    top: 40px;
    right: -20px;
    
    width: 100%;

    text-align: center;
    margin: 20px 0px 40px 0px;
    font-size: 30px;
    font-weight: bold;
    color: #1ac587;

    /* 透明度 */
    opacity: 0.5;
    cursor: pointer;
}
.submit-group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 110px;
    margin-top: 50px;
}



/* #region 静音按钮 */
.mute-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 10;
}

.mute-button:hover {
    opacity: 1;
}
/* #endregion */
</style>