import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '@/components/Layout.vue';

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '首页' } },
  {
    path: '/alarm',
    nameL: 'alarm',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'alarmList',
        component: () => import('@/views/Alarm/List.vue'),
        meta: { keepAlive: true },
      },
      {
        path: 'detail',
        name: 'alarmDetail',
        component: () => import('@/views/Alarm/Detail.vue'),
        meta: { keepAlive: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
