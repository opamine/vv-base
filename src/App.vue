<template>
  <a-config-provider :locale="zhCN">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/alarm/list">告警列表</router-link>
      <router-link to="/alarm/detail">告警详情</router-link>
    </div>
    <router-view />
  </a-config-provider>
</template>
<script setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  dayjs.locale('zh-cn');
</script>
<style lang="less" scoped>
  .nav {
    padding: 16px 32px;
    background-color: #24292f;
    font-weight: 600;
    font-size: 14px;
    text-align: center;

    a {
      margin: 0 8px;
      color: #fff;

      &.router-link-active {
        color: #409aff;
      }
    }
  }
</style>
