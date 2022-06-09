<template>
  <div>
    <router-view>
      <template #default="{ Component }">
        <keep-alive>
          <component v-if="$route.meta.keepAlive" :is="Component" />
        </keep-alive>
        <component v-if="!$route.meta.keepAlive" :is="Component" />
      </template>
    </router-view>
  </div>
</template>
