<script setup>
  import { useRoute } from 'vue-router';
  import $api from '@/api';
  const pageTitle = useRoute().meta.title;

  const http = () => {
    $api.demo.getTodayPoetry({ name: 1 }).then((res) => {
      console.log(res);
    });
  };
</script>
<template>
  <div>{{ pageTitle }}</div>
  <div><a-button @click="http">请求</a-button></div>
</template>
<style lang="less" scoped>
  .title {
    padding-bottom: 12px;
    font-size: 24px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
</style>
