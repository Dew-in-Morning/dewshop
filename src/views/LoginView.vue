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
                <h2 class="title">登录</h2>
                <el-form :model="form" label-width="auto" style="max-width: 600px">
                    <el-form-item label="Activity name">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    
                    <el-form-item label="Resources">
                        <el-radio-group v-model="form.resource">
                            <el-radio value="Sponsor">Sponsor</el-radio>
                            <el-radio value="Venue">Venue</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

// 定义表单数据
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
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

.title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: bold;
    color: #1ac587;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

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
</style>