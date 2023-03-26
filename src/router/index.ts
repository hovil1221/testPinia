import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../App.vue'),  // 引入组件
  
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),  // 引入组件
  
  },
  // 其他路由配置
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;