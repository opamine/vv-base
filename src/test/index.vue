<script setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
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
    width: 100px;
    color: #fff;
  }
</style>
