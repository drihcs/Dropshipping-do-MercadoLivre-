  <div>
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl">Dropshipping do Mercado Livre</h1>
      <nav class="mt-2">
        <router-link to="/" class="mr-4">Início</router-link>
        <router-link to="/api" class="mr-4">API</router-link>
        <router-link to="/fornecedores" class="mr-4">Fornecedores</router-link>
        <router-link to="/gerar-itens" class="mr-4">Gerar Itens</router-link>
        <router-link to="/minha-loja">Minha Loja</router-link>
      </nav>
    </header>
    <main class="p-6 pb-20">
      <router-view />
    </main>
    <footer class="bg-blue-100 text-center text-sm p-4 w-full fixed bottom-0">
      © 2025 Dropshipping do Mercado Livre. Todos os direitos reservados.
    </footer>
  </div>
