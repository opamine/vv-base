<template>
  <Card
    title="设备情况"
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tabChange="onTabChange"
    :head-style="{ fontSize: '24px', fontWeight: '600' }"
  >
    <div>
      <PieChart />
    </div>
  </Card>
</template>
<script setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import PieChart from './PieChart.vue';

  const activeKey = ref('tab1');

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '今日',
    },
    {
      key: 'tab2',
      tab: '全部',
    },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
