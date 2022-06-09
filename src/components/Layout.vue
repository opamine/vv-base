<template>
  <div>
    <router-view>
      <template #default="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </template>
    </router-view>
  </div>
</template>
