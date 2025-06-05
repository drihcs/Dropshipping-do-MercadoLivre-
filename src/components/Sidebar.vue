<template>
  <aside class="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg fixed">
    <div class="text-2xl font-bold px-6 py-4 border-b border-gray-700">
      Dropshipping ML
    </div>

    <nav class="flex-1 px-4 py-6 space-y-2">
      <RouterLink to="/" class="block py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">🏠 Início</RouterLink>
      <RouterLink to="/api" class="block py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">🔗 API Mercado Livre</RouterLink>
      <RouterLink to="/fornecedores" class="block py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">📦 Fornecedores</RouterLink>
      <RouterLink to="/gerar-itens" class="block py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">⚙️ Gerar Itens</RouterLink>
      <RouterLink to="/minha-loja" class="block py-2 px-4 rounded hover:bg-gray-700" active-class="bg-gray-700">🛒 Minha Loja</RouterLink>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
</style>
