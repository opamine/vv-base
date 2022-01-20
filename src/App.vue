<script setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  dayjs.locale('zh-cn');
</script>
<template>
  <a-config-provider :locale="zhCN">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view />
  </a-config-provider>
</template>
<style lang="less" scoped>
  .nav {
    text-align: center;
    background-color: #515151;

    a {
      margin: 0 8px;
      color: #fff;

      &.router-link-active {
        color: rgb(163 163 255);
      }
    }
  }
</style>
