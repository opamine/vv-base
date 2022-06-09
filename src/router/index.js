import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '@/components/Layout.vue';

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '首页' } },
  {
    path: '/alarm',
    nameL: 'Alarm',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'AlarmList',
        component: () => import('@/views/Alarm/List.vue'),
        meta: { keepAlive: true },
      },
      {
        path: 'detail',
        name: 'AlarmDetail',
        component: () => import('@/views/Alarm/Detail.vue'),
        meta: { keepAlive: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
