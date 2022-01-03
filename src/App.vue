<template>
  <div class="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view />
</template>
<style lang="less" scoped>
  .nav {
    background-color: #515151;
    text-align: center;
    a {
      margin: 0 8px;
      color: #fff;
      &.router-link-active {
        color: rgb(163, 163, 255);
      }
    }
  }
</style>
