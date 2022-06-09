<template>
  <div>
    <router-view>
      <template #default="{ Component }">
        <keep-alive>
          <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
      </template>
    </router-view>
  </div>
</template>
