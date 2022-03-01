<script setup>
  import { ref } from 'vue';
  import CryptoJS from 'crypto-js';

  const origin = ref(''); // 目标值
  const result = ref(''); // 结果
  const key = ref(''); // 秘钥
  // AES 加密函数
  const encryptFunc = () => {
    const encryptedData = CryptoJS.AES.encrypt(origin.value, key.value, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    result.value = encryptedData;
  };
  // AES 解密函数
  const decryptFunc = () => {
    const decryptedData = CryptoJS.AES.decrypt(origin.value, key.value, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    result.value = decryptedData;
  };
</script>
<template>
  <div class="container">
    <a-row
      ><a-col :span="8"
        ><a-input v-model:value="origin" placeholder="请输入原始值" /><a-input
          v-model:value="key"
          placeholder="请输入秘钥" /><a-input
          v-model:value="iv"
          placeholder="请输入初始向量" /></a-col
      ><a-col :span="4"
        ><a-button @click="encryptFunc">加密</a-button
        ><a-button @click="decryptFunc">解密</a-button></a-col
      ><a-col :span="8"
        ><a-input
          type="textarea"
          :value="result"
          :disabled="true"
          placeholder="这里是结果" /></a-col
    ></a-row>
  </div>
</template>
<style lang="less" scoped>
  .container {
    padding: 12px;
  }
</style>
