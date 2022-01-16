<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';

  const store = useStore();

  const pageTitle = useRoute().meta.title;

  const count = computed(() => store.state.count);
  const twoMultipleCount = computed(() => store.getters.twoMultipleCount);
  const twoMultipleCountAddOne = computed(() => store.getters.twoMultipleCountAddOne);
  const twoMultipleCountAddN = computed(() => store.getters.twoMultipleCountAddN(4));

  const handleAdd = () => {
    store.commit('increment', 1);
  };

  const handleSyncAdd = () => {
    store.dispatch('asyncIncrement', 2);
  };
</script>
<template>
  <div>{{ pageTitle }}</div>
  <div class="title"> This is playground!</div>
  <button @click="handleAdd">ADD 1</button>
  <button @click="handleSyncAdd">AsyncADD 2</button>
  <div>{{ count }}</div>
  <div>这是 2 倍数：{{ twoMultipleCount }}</div>
  <div>这是 2 倍数 + 1：{{ twoMultipleCountAddOne }}</div>
  <div>这是 2 倍数 + n：{{ twoMultipleCountAddN }}</div>
</template>
<style lang="less" scoped>
  .title {
    padding-bottom: 12px;
    font-size: 24px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
</style>
