<template>
  <div class="md:flex">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <Card
        size="small"
        :loading="loading"
        class="md:w-1/2 w-full !md:mt-0"
        :class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }"
      >
        <div class="py-1 px-4 text-2xl">{{ item.title }}</div>
        <div class="py-2 px-4">
          <CountTo :startVal="0" :endVal="item.total" class="text-2xl" />
          <span class="ml-2 text-sm">{{ item.unit }}</span>
        </div>

        <div v-if="item.title === '接入设备'" class="py-2 px-4">
          <span>在线设备: </span>
          <CountTo :prefix="item.prefix" :startVal="0" :endVal="item.onlineDevice" />
          <span class="ml-2 text-sm">{{ item.unit }}</span>
          <span class="ml-2">离线设备: </span>
          <CountTo :prefix="item.prefix" :startVal="0" :endVal="item.onlineDevice" />
          <span class="ml-2 text-sm">{{ item.unit }}</span>
        </div>
      </Card>
    </template>
  </div>
</template>
<script setup>
  import CountTo from '@/components/CountTo.vue';
  import { Card } from 'ant-design-vue';

  defineProps({
    loading: {
      type: Boolean,
    },
  });

  const growCardList = [
    {
      title: '接入设备',
      total: 3200,
      unit: '套',
      onlineDevice: 3000,
    },
    {
      title: '服务面积',
      total: 500000,
      unit: '万m²',
      color: 'blue',
    },
  ];
</script>
