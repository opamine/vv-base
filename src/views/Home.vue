<script setup>
  import { useRoute } from 'vue-router';
  const pageTitle = useRoute().meta.title;
</script>
<template>
  <div>{{ pageTitle }}</div>
</template>
<style lang="less" scoped>
  .title {
    padding-bottom: 12px;
    font-size: 24px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
</style>
