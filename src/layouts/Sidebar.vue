<template>
  <aside class="w-64 bg-white shadow h-screen fixed top-0 left-0 flex flex-col">
    <div class="p-4 border-b">
      <h2 class="text-lg font-bold">Menu</h2>
    </div>
    <nav class="flex-grow p-4 overflow-auto">
      <router-link
        to="/"
        class="block py-2 px-3 rounded hover:bg-blue-100"
        active-class="bg-blue-200 font-semibold"
        exact
      >
        Início
      </router-link>
      <router-link
        to="/api"
        class="block py-2 px-3 rounded hover:bg-blue-100"
        active-class="bg-blue-200 font-semibold"
      >
        API
      </router-link>
      <router-link
        to="/fornecedores"
        class="block py-2 px-3 rounded hover:bg-blue-100"
        active-class="bg-blue-200 font-semibold"
      >
        Fornecedores
      </router-link>
      <router-link
        to="/gerar-itens"
        class="block py-2 px-3 rounded hover:bg-blue-100"
        active-class="bg-blue-200 font-semibold"
      >
        Gerar Itens
      </router-link>
      <router-link
        to="/minha-loja"
        class="block py-2 px-3 rounded hover:bg-blue-100"
        active-class="bg-blue-200 font-semibold"
      >
        Minha Loja
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
// Nenhuma lógica adicional por enquanto
</script>

<style scoped>
/* Você pode adicionar estilos extras aqui se quiser */
</style>
