<script setup>
  import { useRoute } from 'vue-router';
  const pageTitle = useRoute().meta.title;
</script>
<template>
  <div>{{ pageTitle }}</div>
  <div>this is about page</div>
</template>
