import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Aes from '../views/Aes.vue';

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: '首页' } },
  { path: '/about', name: 'about', component: About, meta: { title: '关于' } },
  { path: '/aes', name: 'aes', component: Aes, meta: { title: 'AES' } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
