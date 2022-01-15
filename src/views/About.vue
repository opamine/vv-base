<script setup>
  import dayjs from 'dayjs';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  const pageTitle = useRoute().meta.title;

  // 性别选项（按实际需要请求）
  const genderList = [
    { label: '男', value: 'M' },
    { label: '女', value: 'F' },
    { label: '未知', value: 'N' },
  ];

  // 住址列表（按实际需要请求）
  const addressList = [
    { label: '西湖区', value: '西湖区' },
    { label: '滨江区', value: '滨江区' },
  ];

  // 表头（可写死）
  const columns = [
    {
      title: '姓名', // 输入
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: '性别', // 下拉选择
      dataIndex: 'gender',
      key: 'gender',
      width: 120,
    },
    {
      title: '生日', // 日期选择
      dataIndex: 'birthday',
      key: 'birthday',
      width: 180,
    },
    {
      title: '住址', // 下拉选择
      dataIndex: 'address',
      key: 'address',
      width: 300,
    },
    {
      title: '操作',
      key: 'action',
    },
  ];

  // 表格数据（按实际需要请求）
  const dataSource = ref([
    {
      key: 1,
      name: '胡彦斌',
      gender: 'M',
      birthday: dayjs('1998-01-05'),
      address: '西湖区',
    },
    {
      key: 2,
      name: '刘亦菲',
      gender: 'F',
      birthday: dayjs('1997-01-01'),
      address: '滨江区',
    },
  ]);

  // 点击新增
  const handleAdd = () => {
    dataSource.value.push({
      key: Date.now(),
      name: '',
      birthday: undefined,
      gender: undefined,
      address: undefined,
    });
  };

  // 点击操作栏删除
  const handleDelete = (key) => {
    dataSource.value = dataSource.value.filter((item) => item.key !== key);
  };

  // 点击保存
  const handleSave = () => {
    const dataResult = dataSource.value.map((item) => ({
      ...item,
      birthday: item.birthday?.format('YYYY-MM-DD') ?? '', // 日期需要格式化回去
    }));
    console.log(dataResult); // 这里是表格数据结果
  };
</script>
<template>
  <div>{{ pageTitle }}</div>
  <div style="padding: 24px">
    <div style="margin-bottom: 12px"
      ><a-button type="primary" @click="handleAdd">新增</a-button></div
    >
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
      bordered
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <div
            ><a-input
              v-model:value="record[column.dataIndex]"
              placeholder="请输入姓名"
          /></div>
        </template>
        <template v-if="column.key === 'gender'">
          <div
            ><a-select
              v-model:value="record[column.dataIndex]"
              :options="genderList"
              placeholder="请选择性别"
              style="width: 100%"
          /></div>
        </template>
        <template v-if="column.key === 'birthday'">
          <div
            ><a-date-picker
              v-model:value="record[column.dataIndex]"
              placeholder="请选择日期"
          /></div>
        </template>
        <template v-if="column.key === 'address'">
          <div
            ><a-select
              v-model:value="record[column.dataIndex]"
              :options="addressList"
              placeholder="请选择住址"
              style="width: 100%"
          /></div>
        </template>
        <template v-if="column.key === 'action'">
          <span
            style="color: #ff7875; cursor: pointer"
            @click="handleDelete(record.key)"
            >删除</span
          >
        </template>
      </template>
    </a-table>
    <div style="text-align: center; margin-top: 12px"
      ><a-button @click="handleSave" type="primary" size="large"
        >保存</a-button
      ></div
    >
  </div>
</template>
