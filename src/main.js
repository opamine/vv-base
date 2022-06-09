import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).use(createPinia()).use(Antd).mount('#app');
