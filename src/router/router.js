import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import Home from '@/views/Home.vue'
import Api from '@/views/Api.vue'
import Fornecedores from '@/views/Fornecedores.vue'
import GerarItens from '@/views/GerarItens.vue'
import MinhaLoja from '@/views/MinhaLoja.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', component: Home },
      { path: 'api', component: Api },
      { path: 'fornecedores', component: Fornecedores },
      { path: 'gerar-itens', component: GerarItens },
      { path: 'minha-loja', component: MinhaLoja }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router