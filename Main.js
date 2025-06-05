// main.js

import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';

import Home from './pages/Home.vue';
import ApiPage from './pages/ApiPage.vue';
import Fornecedores from './pages/Fornecedores.vue';
import GerarItens from './pages/GerarItens.vue';
import MinhaLoja from './pages/MinhaLoja.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/api', component: ApiPage },
  { path: '/fornecedores', component: Fornecedores },
  { path: '/gerar-itens', component: GerarItens },
  { path: '/minha-loja', component: MinhaLoja }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');
