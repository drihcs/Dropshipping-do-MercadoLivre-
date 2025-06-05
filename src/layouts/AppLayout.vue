<template>
  <div>
    <!-- Sidebar oculta -->
    <aside
      v-show="sidebarVisible"
      class="fixed top-0 left-0 w-64 h-full bg-white shadow z-50 p-4 overflow-y-auto"
    >
      <button @click="toggleSidebar" class="text-red-600 font-bold mb-4">✕ Fechar</button>
      <nav class="flex flex-col space-y-2">
        <router-link to="/" class="hover:underline" exact>Início</router-link>
        <router-link to="/api" class="hover:underline">API</router-link>
        <router-link to="/fornecedores" class="hover:underline">Fornecedores</router-link>
        <router-link to="/gerar-itens" class="hover:underline">Gerar Itens</router-link>
        <router-link to="/minha-loja" class="hover:underline">Minha Loja</router-link>
      </nav>
    </aside>

    <!-- Header fixo -->
    <header class="bg-blue-600 text-white p-4 flex justify-between items-center fixed w-full top-0 z-40">
      <button @click="toggleSidebar" class="text-white font-bold text-xl">☰</button>
      <h1 class="text-xl">Dropshipping do Mercado Livre</h1>
    </header>

    <!-- Espaço após header -->
    <div class="h-20"></div>

    <!-- Conteúdo principal -->
    <main class="p-6 pb-20">
      <router-view />
    </main>

    <!-- Footer fixo -->
    <footer class="bg-blue-100 text-center text-sm p-4 w-full fixed bottom-0 z-30">
      © 2025 Dropshipping do Mercado Livre. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const sidebarVisible = ref(false)
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}
</script>