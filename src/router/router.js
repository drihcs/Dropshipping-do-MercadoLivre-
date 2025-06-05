import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import Home from '@/views/Home.vue'
import Api from '@/views/Api.vue'
// ...demais imports

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', component: Home },
      { path: 'api', component: Api },
      { path: 'fornecedores', component: () => import('@/views/Fornecedores.vue') },
      { path: 'gerar-itens', component: () => import('@/views/GerarItens.vue') },
      { path: 'minha-loja', component: () => import('@/views/MinhaLoja.vue') },
    ],
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})